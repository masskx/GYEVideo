import {cpSync, existsSync, mkdirSync, readFileSync, writeFileSync} from 'node:fs';
import {join, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
import {isTemplate, TEMPLATES} from '../src/templates/registry';

// npm run new -- <template> <episodeId>
// Copies the template's reference episode (data files only) to a new episode folder, renames its ids,
// and adds brief.md + TREATMENT.md from the skill. Then edit the data, following the skill.

const [templateId, episodeId] = process.argv.slice(2).filter((arg) => !arg.startsWith('--'));
const templateDir = fileURLToPath(new URL('..', import.meta.url));
const repoDir = resolve(templateDir, '..');

if (!templateId || !episodeId || !isTemplate(templateId)) {
  console.error('Usage: npm run new -- <template> <episodeId>');
  console.error(`Templates: ${Object.keys(TEMPLATES).join(', ')}`);
  console.error('Pick one with: npm run plan');
  process.exit(1);
}
if (!/^\d{3}_[a-z0-9_]+$/.test(episodeId)) {
  console.error(`Episode ids look like 063_spect_gameshow (three digits, then lower-case words joined by _). Got: ${episodeId}`);
  process.exit(1);
}

const template = TEMPLATES[templateId];
const example = join(repoDir, template.example);
const target = join(repoDir, template.episodesDir, episodeId);
if (existsSync(target)) {
  console.error(`Already exists: ${target}`);
  process.exit(1);
}

mkdirSync(join(target, 'data'), {recursive: true});
cpSync(join(example, 'data'), join(target, 'data'), {recursive: true, filter: (src) => !src.endsWith('generatedVoiceTimeline.ts')});

// Ids in episodeConfig.ts
const configPath = join(target, 'data', 'episodeConfig.ts');
const exampleId = template.example.split('/').pop()!;
writeFileSync(configPath, readFileSync(configPath, 'utf8').split(exampleId).join(episodeId), 'utf8');

// An empty voice timeline, so the studio estimates timing until `npm run voice`.
writeFileSync(
  join(target, 'data', 'generatedVoiceTimeline.ts'),
  `export type GeneratedVoiceTimelineItem = {\n  id: string;\n  start: number;\n  end: number;\n  text: string;\n  spoken?: string;\n  audio: string;\n};\n\nexport const generatedVoiceTimeline: GeneratedVoiceTimelineItem[] = [];\n`,
  'utf8',
);

const skillTemplates = join(templateDir, template.skill, 'templates');
for (const [from, to] of [
  ['episode_brief_template.md', 'brief.md'],
  ['TREATMENT_template.md', 'TREATMENT.md'],
]) {
  const source = existsSync(join(skillTemplates, from)) ? join(skillTemplates, from) : join(templateDir, 'skills', '_shared', 'templates', from);
  if (existsSync(source)) {
    writeFileSync(join(target, to), readFileSync(source, 'utf8').replace(/<episodeId>/g, episodeId), 'utf8');
  }
}
writeFileSync(
  join(target, 'notes.md'),
  [
    `# Notes: ${episodeId}`,
    '',
    `Template: ${templateId} (${template.title}). Copied from ${template.example}. Skill: remotion-template/${template.skill}/SKILL.md`,
    '',
    '## QA (from exports/<id>_qa.md)',
    '- Result / length / loudness / peak / black frames:',
    '',
    '## Visual review (contact sheet + out/qa/<id>/, against references/qa_checklist.md)',
    '- ',
    '',
    '## Voice check (npm run voice:check)',
    '- Lines passing:',
    '- Lines rewritten and why:',
    '- asrAccept entries (listened to by a person? yes / no):',
    '',
    '## Fixes made during review',
    '- ',
    '',
    '## Warnings from npm run check (and why they are acceptable)',
    '- ',
    '',
  ].join('\n'),
  'utf8',
);

console.log(`Created ${target} from ${template.example}.`);
console.log('');
console.log('Next (see ' + template.skill + '/SKILL.md):');
console.log('  1. Fill brief.md and TREATMENT.md; rewrite every field of data/*.ts for the new topic.');
console.log(`  2. npm run episode:use -- ../${template.episodesDir}/${episodeId}`);
console.log('  3. npm run check            (fix errors in the data first)');
console.log('  4. npm run produce          (voice → voice:check → check → audio → render, stops at the first failure)');
console.log('  5. Visual review + notes.md (see exports/<id>_handoff.md)');
