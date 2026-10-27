import {spawnSync} from 'node:child_process';
import {copyFileSync, existsSync, readFileSync, writeFileSync} from 'node:fs';
import {join} from 'node:path';
import {fileURLToPath} from 'node:url';
import {loadProjectEnv} from './load-env';

// npm run produce — the whole pipeline for the active episode, in the one fixed order, stopping at the
// first failure:  check → voice (only when a line is new or its text changed) → voice:check → check
// (now with the real length) → audio → render. Writes exports/<id>_handoff.md for the owner.
//
//   npm run produce              normal run
//   npm run produce -- --voice   regenerate every voice line even if nothing changed
//
// Each step is the same npm script you can run by hand; this only removes the chance to skip or reorder one.

loadProjectEnv();
const templateDir = fileURLToPath(new URL('..', import.meta.url));
const forceVoice = process.argv.includes('--voice');
const activePath = join(templateDir, '.active-episode.json');
if (!existsSync(activePath)) {
  console.error('No active episode. Run npm run episode:use -- ../episodes/<id> first.');
  process.exit(1);
}
const active = JSON.parse(readFileSync(activePath, 'utf8')) as {episodeDir: string; episodeSlug: string; exportBaseName: string};

const npm = process.platform === 'win32' ? 'npm.cmd' : 'npm';
const steps: {name: string; ok: boolean; note?: string}[] = [];
const step = (name: string, script: string, args: string[] = []) => {
  console.log(`\n━━ ${name} (npm run ${script}${args.length ? ` -- ${args.join(' ')}` : ''})`);
  const result = spawnSync(npm, ['run', '-s', script, ...(args.length ? ['--', ...args] : [])], {cwd: templateDir, stdio: 'inherit', shell: process.platform === 'win32'});
  const ok = result.status === 0;
  steps.push({name, ok});
  if (!ok) {
    finish(`${name} failed. Fix what it printed above, then run npm run produce again.`);
  }
};

// Data is read fresh in a child process, so this sees the files as they are on disk now.
const voiceState = (): {stale: string[]; type: string} => {
  const probe = spawnSync(process.execPath, [join(templateDir, 'node_modules', 'tsx', 'dist', 'cli.mjs'), join(templateDir, 'scripts', 'voice-state.ts')], {
    cwd: templateDir,
    encoding: 'utf8',
  });
  const line = (probe.stdout ?? '').trim().split('\n').pop() ?? '';
  try {
    return JSON.parse(line) as {stale: string[]; type: string};
  } catch {
    console.error(probe.stderr);
    return finish('Could not read the episode data (see the error above).');
  }
};

const finish = (failure?: string): never => {
  const exportsDir = join(active.episodeDir, 'exports');
  const base = active.exportBaseName || active.episodeSlug;
  const lines = [
    `# Handoff: ${active.episodeSlug}`,
    '',
    `Result: **${failure ? 'NOT DONE' : 'RENDERED — waiting for the visual review'}**`,
    failure ? `\n${failure}\n` : '',
    '| Step | Result |',
    '|---|---|',
    ...steps.map((s) => `| ${s.name} | ${s.ok ? 'pass' : 'FAIL'}${s.note ? ` — ${s.note}` : ''} |`),
    '',
  ];
  const voiceReport = join(templateDir, 'out', 'voice_check.json');
  if (existsSync(voiceReport)) {
    const results = JSON.parse(readFileSync(voiceReport, 'utf8')) as {id: string; ok: boolean; heard?: string}[];
    lines.push(`Voice check: ${results.filter((r) => r.ok).length}/${results.length} lines pass.`, '');
  }
  const voiceLines = join(templateDir, 'out', 'voice_lines.json');
  if (existsSync(voiceLines)) {
    const accepted = (JSON.parse(readFileSync(voiceLines, 'utf8')) as {id: string; asrAccept: Record<string, string>}[]).filter((line) => Object.keys(line.asrAccept).length);
    lines.push(
      accepted.length
        ? `Lines a person must listen to (asrAccept): ${accepted.map((line) => `${line.id} (${Object.entries(line.asrAccept).map(([word, heard]) => `${word} heard as "${heard}"`).join(', ')})`).join('; ')}.`
        : 'Lines a person must listen to (asrAccept): none.',
      '',
    );
  }
  if (!failure) {
    lines.push(
      'Files:',
      `- \`exports/${base}.mp4\`, \`${base}_cover.png\`, \`${base}_caption.txt\`, \`${base}_publish_notes.md\``,
      `- QA: \`exports/${base}_qa.md\`, contact sheet \`exports/${base}_contact_sheet.jpg\`, scene stills \`remotion-template/out/qa/${active.episodeSlug}/\``,
      '',
      'Still to do by the agent (definition of done, skills/_shared/HOUSE_RULES.md §8):',
      '- [ ] Look at the contact sheet and every scene still against the template\'s references/qa_checklist.md.',
      '- [ ] Have a person listen to the asrAccept lines above (or say so in the report).',
      '- [ ] Fill in notes.md (QA, voice check, fixes) and commit the episode folder (not exports/ or audio/).',
      '',
    );
  }
  if (existsSync(exportsDir)) {
    writeFileSync(join(exportsDir, `${base}_handoff.md`), lines.join('\n'), 'utf8');
    if (existsSync(voiceReport)) copyFileSync(voiceReport, join(exportsDir, `${base}_voice_check.json`));
    console.log(`\nHandoff: ${join(exportsDir, `${base}_handoff.md`)}`);
  }
  console.log(failure ? `\nSTOPPED: ${failure}` : '\nPRODUCE DONE. Now do the visual review (see the handoff file).');
  process.exit(failure ? 1 : 0);
};

const {type} = voiceState();
if (type === 'root-word' || type === 'sentence-pattern') {
  console.error(`${type} is a legacy line: run npm run voice and npm run render by hand.`);
  process.exit(1);
}

step('Check (before voice)', 'check');

const {stale} = voiceState();
if (forceVoice || stale.length) {
  if (!process.env.DASHSCOPE_API_KEY) finish('DASHSCOPE_API_KEY is not set (see .env.example). Voice is needed for: ' + (forceVoice ? 'all lines' : stale.join(', ')));
  console.log(`\nVoice needed for: ${forceVoice ? 'all lines (--voice)' : stale.join(', ')}`);
  step('Voice', 'voice');
} else {
  steps.push({name: 'Voice', ok: true, note: 'unchanged, reused'});
}

step('Voice check (speech-to-text)', 'voice:check');
step('Check (with the real length)', 'check');
step('Timeline', 'timeline');
step('Score and SFX', 'audio');
step('Render + QA', 'render');
finish();
