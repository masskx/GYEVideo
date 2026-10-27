import {existsSync, readdirSync, readFileSync} from 'node:fs';
import {join, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
import {isTemplate, TEMPLATES, TemplateId} from '../src/templates/registry';

// npm run plan — what to make next so the account doesn't repeat itself.
// Lists the latest episodes of each line and recommends the template used least recently.

const templateDir = fileURLToPath(new URL('..', import.meta.url));
const repoDir = resolve(templateDir, '..');

type Episode = {id: string; dir: string; type: string; exam: string};

// Folder-name suffix per template (episode ids look like 063_spect_gameshow).
const SUFFIX: Record<TemplateId, string> = {
  'vocab-dossier': 'dossier',
  'vocab-game-show': 'gameshow',
  'vocab-whiteboard': 'whiteboard',
  'reading-picture-book': 'book',
  'reading-caption-news': 'news',
};

const episodesIn = (dir: string): Episode[] =>
  existsSync(join(repoDir, dir))
    ? readdirSync(join(repoDir, dir))
        .filter((name) => existsSync(join(repoDir, dir, name, 'data', 'episodeConfig.ts')))
        .sort()
        .map((name) => ({
          id: name,
          dir,
          type: readFileSync(join(repoDir, dir, name, 'data', 'episodeConfig.ts'), 'utf8').match(/^\s*type:\s*'([a-z-]+)'/m)?.[1] ?? 'root-word',
          exam: readFileSync(join(repoDir, dir, name, 'data', 'episodeConfig.ts'), 'utf8').match(/^\s*exam:\s*'([a-z0-9]+)'/m)?.[1] ?? 'gaokao',
        }))
    : [];

for (const line of ['vocab', 'reading'] as const) {
  const templates = (Object.keys(TEMPLATES) as TemplateId[]).filter((id) => TEMPLATES[id].line === line);
  const dirs = [...new Set(templates.map((id) => TEMPLATES[id].episodesDir))];
  const episodes = dirs.flatMap(episodesIn).filter((ep) => line === 'reading' || ep.dir === 'episodes').sort((a, b) => a.id.localeCompare(b.id));
  const recent = episodes.slice(-6);
  console.log(`\n${line === 'vocab' ? '单词' : '双语阅读'} (${line}) — latest episodes:`);
  for (const ep of recent) console.log(`  ${ep.id.padEnd(28)} ${ep.exam.padEnd(7)} ${ep.type}${isTemplate(ep.type) ? ` · ${TEMPLATES[ep.type].title}` : ' · legacy'}`);
  const lastUsed = (id: TemplateId) => {
    const index = episodes.map((ep) => ep.type).lastIndexOf(id);
    return index < 0 ? -1 : index;
  };
  const ranked = [...templates].sort((a, b) => lastUsed(a) - lastUsed(b));
  const next = ranked[0];
  const lastNumber = Math.max(0, ...episodes.map((ep) => Number(ep.id.slice(0, 3)) || 0));
  console.log(`  next: ${next} (${TEMPLATES[next].title}) — ${TEMPLATES[next].look}`);
  console.log(`        npm run new -- ${next} ${String(lastNumber + 1).padStart(3, '0')}_<topic>_${SUFFIX[next]} [--exam cet4|cet6]`);
}
console.log('');
