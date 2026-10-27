import {existsSync, readFileSync} from 'node:fs';
import {join} from 'node:path';
import {fileURLToPath} from 'node:url';
import {episodeConfig} from '../src/data/episodeConfig';
import {isTemplate, TEMPLATES} from '../src/templates/registry';
import {RUNTIMES} from '../src/templates/timelines';
import {writeQaReport} from './qa-report';

// npm run qa — re-run the measured QA on the active episode's existing export (render runs it automatically).
const templateDir = fileURLToPath(new URL('..', import.meta.url));
const active = JSON.parse(readFileSync(join(templateDir, '.active-episode.json'), 'utf8')) as {episodeDir: string; exportBaseName: string};
const type = episodeConfig.type;
if (!isTemplate(type) || !RUNTIMES[type]) {
  console.error(`npm run qa supports the template lines only (active type: ${type}).`);
  process.exit(1);
}
const base = episodeConfig.exportBaseName || active.exportBaseName;
const exportsDir = join(active.episodeDir, 'exports');
const video = join(exportsDir, `${base}.mp4`);
if (!existsSync(video)) {
  console.error(`No export yet: ${video} (run npm run render).`);
  process.exit(1);
}
process.exit(writeQaReport({video, exportsDir, baseName: base, template: TEMPLATES[type], timeline: RUNTIMES[type]!.timeline}) ? 0 : 1);
