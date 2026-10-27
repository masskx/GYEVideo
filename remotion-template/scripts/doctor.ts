import {createHash} from 'node:crypto';
import {spawnSync} from 'node:child_process';
import {existsSync, readdirSync, readFileSync} from 'node:fs';
import {join} from 'node:path';
import {fileURLToPath} from 'node:url';
import {BRAND} from '../src/brand/brand';
import {FONT_REGISTRY} from '../src/core/fonts';
import {loadProjectEnv} from './load-env';

// npm run doctor — is this machine ready to make videos? Run it once per machine, before the first episode.
// FAIL lines must be fixed; WARN lines only limit what you can do.
loadProjectEnv();
const templateDir = fileURLToPath(new URL('..', import.meta.url));
const results: {level: 'ok' | 'WARN' | 'FAIL'; name: string; detail: string}[] = [];
const report = (level: 'ok' | 'WARN' | 'FAIL', name: string, detail: string) => results.push({level, name, detail});

const run = (command: string, args: string[]) => {
  const result = spawnSync(command, args, {encoding: 'utf8', shell: process.platform === 'win32'});
  return {ok: result.status === 0, out: `${result.stdout ?? ''}${result.stderr ?? ''}`.trim()};
};

// Node and dependencies
const major = Number(process.versions.node.split('.')[0]);
report(major >= 18 ? 'ok' : 'FAIL', 'Node.js', `v${process.versions.node}${major >= 18 ? '' : ' (need 18 or newer)'}`);
report(existsSync(join(templateDir, 'node_modules', 'remotion')) ? 'ok' : 'FAIL', 'npm packages', existsSync(join(templateDir, 'node_modules', 'remotion')) ? 'installed' : 'run npm ci in remotion-template/');

// ffmpeg / ffprobe: voice timing, loudness, QA
for (const tool of ['ffmpeg', 'ffprobe']) {
  const result = run(tool, ['-version']);
  report(result.ok ? 'ok' : 'FAIL', tool, result.ok ? result.out.split('\n')[0] : 'not on PATH (install ffmpeg and add it to PATH)');
}

// Python for npm run voice:check
const python = run('python', ['-I', '-c', 'import faster_whisper, pypinyin, numpy; print("ok")']);
report(
  python.ok ? 'ok' : 'FAIL',
  'voice:check (Python)',
  python.ok ? 'python, faster-whisper, pypinyin, numpy' : 'run: python -m pip install -r scripts/requirements-voice-check.txt (and make sure `python` is on PATH)',
);

// DashScope: the key is only checked for presence, never printed.
report(process.env.DASHSCOPE_API_KEY ? 'ok' : 'WARN', 'DASHSCOPE_API_KEY', process.env.DASHSCOPE_API_KEY ? 'set (value not shown)' : 'not set: npm run voice will fail. Put it in the repository .env (see .env.example) or the environment.');
const model = process.env.DASHSCOPE_TTS_MODEL ?? BRAND.voice.model;
const voice = process.env.DASHSCOPE_TTS_VOICE ?? BRAND.voice.voice;
report(
  model === BRAND.voice.model && voice === BRAND.voice.voice ? 'ok' : 'FAIL',
  'Brand voice',
  `${model} / ${voice}${model === BRAND.voice.model && voice === BRAND.voice.voice ? '' : ` — must be ${BRAND.voice.model} / ${BRAND.voice.voice}; remove the override from .env`}`,
);

// The brand pig
const lock = readFileSync(join(templateDir, 'src', 'brand', 'pig.lock'), 'utf8').trim();
const hash = createHash('sha256').update(readFileSync(join(templateDir, 'src', 'brand', 'BrandPig.tsx'))).digest('hex');
report(hash === lock ? 'ok' : 'FAIL', 'Brand pig lock', hash === lock ? 'BrandPig.tsx matches pig.lock' : 'BrandPig.tsx was changed: restore it with git checkout -- src/brand/BrandPig.tsx');

// Fonts
const missingFonts = Object.values(FONT_REGISTRY).filter((font) => !existsSync(join(templateDir, 'public', 'fonts', font.file)));
report(missingFonts.length ? 'FAIL' : 'ok', 'Fonts', missingFonts.length ? `missing: ${missingFonts.map((font) => font.file).join(', ')}` : `${Object.keys(FONT_REGISTRY).length} faces in public/fonts`);

// Active episode
const activePath = join(templateDir, '.active-episode.json');
if (existsSync(activePath)) {
  const active = JSON.parse(readFileSync(activePath, 'utf8')) as {episodeSlug: string};
  report('ok', 'Active episode', active.episodeSlug);
} else {
  report('WARN', 'Active episode', 'none yet: npm run episode:use -- ../episodes/<id>');
}

// Synthesized SFX (made by npm run audio; only a warning before the first episode)
const sfx = existsSync(join(templateDir, 'public', 'sfx')) ? readdirSync(join(templateDir, 'public', 'sfx')).filter((name) => name.endsWith('.mp3')).length : 0;
report(sfx ? 'ok' : 'WARN', 'Sound effects', sfx ? `${sfx} files in public/sfx` : 'none yet: npm run audio creates them');

for (const {level, name, detail} of results) console.log(`${level.padEnd(5)} ${name.padEnd(22)} ${detail}`);
const failed = results.filter((result) => result.level === 'FAIL').length;
console.log(failed ? `\n${failed} problem(s) to fix before making videos.` : '\nReady. Next: npm run plan');
process.exit(failed ? 1 : 0);
