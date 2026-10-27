import {createHash} from 'node:crypto';
import {existsSync, readdirSync, readFileSync} from 'node:fs';
import {join, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
import {captionNews} from '../src/data/captionNews';
import {dossier} from '../src/data/dossier';
import {episodeConfig} from '../src/data/episodeConfig';
import {gameShow} from '../src/data/gameShow';
import {generatedVoiceTimeline} from '../src/data/generatedVoiceTimeline';
import {pictureBook} from '../src/data/pictureBook';
import {voiceScript} from '../src/data/voiceScript';
import {whiteboard} from '../src/data/whiteboard';
import {EXAM, EXAMS, isExam} from '../src/core/exam';
import {baseRate, isPace, lengthRange, PACE, PACES, ttsRate} from '../src/core/pace';
import {isTemplate, TEMPLATES} from '../src/templates/registry';
import {RUNTIMES} from '../src/templates/timelines';

// npm run check — validate the active episode (after `npm run episode:use`) before voicing and rendering.
// Errors exit 1; warnings print but pass. Every rule here is one an agent has broken before.

const templateDir = fileURLToPath(new URL('..', import.meta.url));
const repoDir = resolve(templateDir, '..');
const errors: string[] = [];
const warnings: string[] = [];
const error = (message: string) => errors.push(message);
const warn = (message: string) => warnings.push(message);

const type = episodeConfig.type;
const active = JSON.parse(readFileSync(join(templateDir, '.active-episode.json'), 'utf8')) as {episodeDir: string; episodeSlug: string};

// ---------- 1. brand: one pig, unchanged ----------
const pigFile = join(templateDir, 'src', 'brand', 'BrandPig.tsx');
const lock = readFileSync(join(templateDir, 'src', 'brand', 'pig.lock'), 'utf8').trim();
const hash = createHash('sha256').update(readFileSync(pigFile)).digest('hex');
if (hash !== lock) {
  error('src/brand/BrandPig.tsx changed. The 小猪 IP is locked: revert the change (only the owner may update src/brand/pig.lock).');
}
const pigAssets = (dir: string): string[] =>
  existsSync(dir)
    ? readdirSync(dir, {withFileTypes: true}).flatMap((entry) => {
        const path = join(dir, entry.name);
        if (entry.isDirectory()) return entry.name === 'node_modules' ? [] : pigAssets(path);
        return /pig/i.test(entry.name) && !path.includes(`${join('src', 'brand')}`) ? [path] : [];
      })
    : [];
for (const stray of [...pigAssets(join(templateDir, 'public')), ...pigAssets(join(repoDir, 'shared-assets'))]) {
  error(`Another pig asset exists: ${stray}. Only <BrandPig> may draw the pig.`);
}

// ---------- 2. template ----------
if (!isTemplate(type)) {
  warn(`${type} is a legacy line: only brand and voice checks apply.`);
}
const template = isTemplate(type) ? TEMPLATES[type] : null;
const runtime = isTemplate(type) ? RUNTIMES[type] : undefined;
if (template && !runtime) {
  error(`Template ${type} is registered but not built.`);
}

// ---------- 3. voice lines ----------
const voiceIds = new Set(voiceScript.map((line) => line.id));
if (runtime) {
  const used = new Set(runtime.timeline.scenes.flatMap((scene) => scene.scene.lines));
  for (const id of used) if (!voiceIds.has(id)) error(`A scene uses voice line "${id}", which is not in data/voiceScript.ts.`);
  for (const id of voiceIds) if (!used.has(id)) warn(`Voice line "${id}" is never used by a scene.`);
  // cueAt tokens time a beat to a spoken word; a token the voice never says falls back to a guess.
  for (const {scene} of runtime.timeline.scenes) {
    const cueAt = (scene as {cueAt?: Record<string, string>}).cueAt ?? {};
    const spoken = scene.lines.map((id) => voiceScript.find((line) => line.id === id)?.text ?? '').join(' ');
    for (const [key, token] of Object.entries(cueAt)) {
      if (!spoken.includes(token)) warn(`Scene "${scene.id}": cueAt.${key} "${token}" is not in its spoken text, so that beat falls at a fixed time.`);
    }
  }
}
const timed = new Set(generatedVoiceTimeline.map((item) => item.id));
const unvoiced = voiceScript.filter((line) => !timed.has(line.id)).map((line) => line.id);
if (unvoiced.length) warn(`No generated voice yet for: ${unvoiced.join(', ')} (run npm run voice).`);
const made = new Map(generatedVoiceTimeline.map((item) => [item.id, item as {text: string; spoken?: string; rate?: number}]));
const stale = voiceScript
  .filter((line) => {
    const item = made.get(line.id);
    return item && (item.text !== line.subtitle || (item.spoken ?? line.text) !== line.text || Math.abs((item.rate ?? baseRate(line.speedHint)) - ttsRate(line.speedHint)) > 0.005);
  })
  .map((line) => line.id);
if (stale.length) warn(`Voice is older than the script or the pace for: ${stale.join(', ')} (run npm run voice, or npm run produce).`);

// ---------- 4. the data of this template ----------
const DATA: Record<string, unknown> = {
  'vocab-dossier': dossier,
  'vocab-game-show': gameShow,
  'vocab-whiteboard': whiteboard,
  'reading-picture-book': pictureBook,
  'reading-caption-news': captionNews,
};
const data = DATA[type];

// Every string inside a value, for the charset check.
const strings = (value: unknown): string[] =>
  typeof value === 'string' ? [value] : Array.isArray(value) ? value.flatMap(strings) : value && typeof value === 'object' ? Object.values(value).flatMap(strings) : [];

// ---------- 5. charset: fonts are subset to GB2312 ----------
const charset = new Set(Array.from(readFileSync(join(templateDir, 'public', 'fonts', 'charset-gb2312.txt'), 'utf8')));
const visible = [...strings(data), ...voiceScript.map((line) => line.subtitle), ...strings(episodeConfig.cover)];
const missing = new Set<string>();
for (const text of visible) for (const char of Array.from(text)) if (/[　-鿿＀-￯]/.test(char) && !charset.has(char)) missing.add(char);
if (missing.size) error(`Characters outside the font subset (they would render in a fallback font): ${[...missing].join(' ')}`);

// ---------- 6. exam content rules (skills/_shared/EXAMS.md) ----------
const examField = (episodeConfig as {exam?: string}).exam;
const paceField = (episodeConfig as {pace?: string}).pace;
if (template && paceField !== undefined && !isPace(paceField)) error(`episodeConfig.pace "${paceField}" is not one of: ${Object.keys(PACES).join(', ')}.`);
if (template && paceField === undefined) warn('episodeConfig has no pace: it is cut as "relaxed". New episodes use pace: \'fast\' (skills/_shared/PACE_AND_MUSIC.md).');
if (template && examField !== undefined && !isExam(examField)) error(`episodeConfig.exam "${examField}" is not one of: ${Object.keys(EXAMS).join(', ')}.`);
const levels = [...EXAM.coreLevels, EXAM.extension];
const levelled = (value: unknown): {level?: string; word?: string; lemma?: string}[] =>
  Array.isArray(value)
    ? value.flatMap(levelled)
    : value && typeof value === 'object'
      ? 'level' in (value as object) && ('word' in (value as object) || 'lemma' in (value as object))
        ? [value as {level?: string}]
        : Object.values(value).flatMap(levelled)
      : [];
const words = levelled(data);
if (template && template.line === 'vocab' && words.length < 4) error(`Only ${words.length} words: a vocabulary episode needs 4–6.`);
for (const word of words) {
  if (!levels.includes(word.level ?? '')) error(`Word "${word.word ?? word.lemma}" is tagged "${word.level ?? ''}": a ${EXAM.name} episode uses ${levels.join(' / ')}.`);
}
const extension = words.filter((word) => word.level === EXAM.extension);
if (extension.length > 1) error(`${extension.length} ${EXAM.extension} words (${extension.map((w) => w.word ?? w.lemma).join(', ')}): at most one per episode.`);
// 六级: the episode must teach 六级 words, not only 四级 ones it builds on.
if (template && EXAM.coreLevels.length > 1) {
  const main = words.filter((word) => word.level === EXAM.mainLevel).length;
  if (words.length && main * 2 < words.length) error(`Only ${main} of ${words.length} words are ${EXAM.mainLevel}: at least half of a ${EXAM.name} episode's words must be ${EXAM.mainLevel}.`);
}

type Question = {stem: string; options: string[]; answerIndex: number; sourceNote: string};
const questions = (value: unknown): Question[] =>
  Array.isArray(value)
    ? value.flatMap(questions)
    : value && typeof value === 'object'
      ? 'answerIndex' in (value as object)
        ? [value as Question]
        : Object.values(value).flatMap(questions)
      : [];
for (const q of questions(data)) {
  if (q.answerIndex < 0 || q.answerIndex >= q.options.length) error(`Question "${q.stem}" has answerIndex ${q.answerIndex} outside its options.`);
  if (!q.sourceNote) error(`Question "${q.stem}" has no sourceNote (原创练习题, or a real paper with year and source).`);
  if (/真题/.test(q.sourceNote) && !/\d{4}/.test(q.sourceNote)) error(`Question "${q.stem}" says 真题 without a year and source.`);
  if (/风格原创/.test(q.sourceNote) && !q.sourceNote.includes(`${EXAM.name}风格`)) {
    error(`Question "${q.stem}" is labelled "${q.sourceNote}" in a ${EXAM.name} episode: use "${template?.line === 'reading' ? EXAM.readingNote : EXAM.practiceNote}".`);
  }
  if (template?.line === 'vocab' && !q.stem.includes('____')) warn(`Question "${q.stem}" has no ____ blank.`);
}

// Wording left over from another exam (usually copied from the reference episode).
if (template) {
  const others = Object.values(EXAMS).filter((exam) => exam.id !== EXAM.id).map((exam) => exam.name);
  const texts = [...visible, ...voiceScript.map((line) => line.text)];
  for (const name of others) {
    // Latin names (GRE) match whole words only, so GREAT! is not GRE.
    const pattern = /^[A-Za-z]+$/.test(name) ? new RegExp(`\\b${name}\\b`) : null;
    const hit = texts.find((text) => (pattern ? pattern.test(text) : text.includes(name)));
    if (hit) warn(`"${name}" appears in a ${EXAM.name} episode: "${hit.slice(0, 40)}". Rewrite it unless it is meant.`);
  }
  const instructions = voiceScript.map((line) => `${(line as {instruction?: string}).instruction ?? ''}`).join(' ');
  const audiences = [...new Set(Object.values(EXAMS).map((exam) => exam.audience))].filter((audience) => audience !== EXAM.audience);
  for (const audience of audiences) if (instructions.includes(audience)) warn(`The voice instruction talks to ${audience}; a ${EXAM.name} episode talks to ${EXAM.audience}.`);
}

// Spelling convention: 雅思 episodes use British spelling, 托福 and GRE American (skills/_shared/EXAMS.md).
const SPELLING: [RegExp, RegExp, string][] = [
  [/\b(colour|favour|behaviour|honour|labour|neighbour|humour|flavour)(s|ed|ing|ful)?\b/i, /\b(color|favor|behavior|honor|labor|neighbor|humor|flavor)(s|ed|ing|ful)?\b/i, 'colour / color'],
  [/\b(organis|realis|recognis|apologis|emphasis|criticis|summaris|minimis|maximis|prioritis|utilis)(e|es|ed|ing|ation)\b/i, /\b(organiz|realiz|recogniz|apologiz|emphasiz|criticiz|summariz|minimiz|maximiz|prioritiz|utiliz)(e|es|ed|ing|ation)\b/i, 'organise / organize'],
  [/\banalys(e|es|ed|ing)\b/i, /\banalyz(e|es|ed|ing)\b/i, 'analyse / analyze'],
  [/\b(centre|theatre|litre|fibre)s?\b/i, /\b(center|theater|liter|fiber)s?\b/i, 'centre / center'],
  [/\b(travelled|travelling|travellers?|cancelled|cancelling|labelled|modelling)\b/i, /\b(traveled|traveling|travelers?|canceled|canceling|labeled|modeling)\b/i, 'travelled / traveled'],
  [/\b(defence|offence|catalogue|grey|ageing)\b/i, /\b(defense|offense|catalog|gray|aging)\b/i, 'defence / defense'],
];
if (template && (EXAM.id === 'ielts' || EXAM.id === 'toefl' || EXAM.id === 'gre')) {
  const british = EXAM.id === 'ielts';
  const english = [...visible, ...voiceScript.map((line) => line.text)];
  for (const [uk, us, label] of SPELLING) {
    const wrong = british ? us : uk;
    const hit = english.find((text) => wrong.test(text));
    if (hit) warn(`${EXAM.name} uses ${british ? 'British' : 'American'} spelling (${label}): "${hit.match(wrong)?.[0]}" in "${hit.slice(0, 40)}".`);
  }
}

// ---------- 7. facts: every number in a news line has a source ----------
if (type === 'reading-caption-news') {
  for (const line of voiceScript) {
    const chunk = captionNews.chunks[line.id];
    if (chunk && /\d|\b(one|two|three|four|five|six|seven|eight|nine|ten|hundred|thousand|million|percent)\b/i.test(line.text) && !chunk.sourceId) {
      error(`News line "${line.id}" states a number but has no sourceId.`);
    }
    if (chunk?.keyword && !line.subtitle.includes(chunk.keyword)) error(`News line "${line.id}": keyword "${chunk.keyword}" is not a phrase of its subtitle.`);
    if (chunk?.sourceId && !captionNews.sources.some((source) => source.id === chunk.sourceId)) error(`News line "${line.id}" cites unknown source "${chunk.sourceId}".`);
  }
  if (!existsSync(join(active.episodeDir, 'FACTS.md'))) error('Missing FACTS.md: every number needs its source URL and quoted wording.');
}

// ---------- 8. length ----------
if (template && runtime && stale.length) {
  warn('Length not checked yet: the voice is older than the script or the pace (npm run produce re-voices, then checks again).');
} else if (template && runtime && !unvoiced.length) {
  const [min, max] = lengthRange(template.targetSeconds);
  const d = runtime.timeline.duration;
  if (d < min || d > max) error(`Length ${d.toFixed(1)} s is outside ${min}–${max} s (${template.id} at pace ${PACE.id}). Cut words (not content) or add a beat.`);
}

// ---------- 9. rotation: don't post the same template twice in a row ----------
if (template) {
  const dir = join(repoDir, template.episodesDir);
  const episodes = readdirSync(dir).filter((name) => existsSync(join(dir, name, 'data', 'episodeConfig.ts'))).sort();
  const index = episodes.indexOf(active.episodeSlug);
  const typeOf = (name: string) => readFileSync(join(dir, name, 'data', 'episodeConfig.ts'), 'utf8').match(/^\s*type:\s*'([a-z-]+)'/m)?.[1];
  const previous = episodes.slice(0, Math.max(0, index)).reverse().find((name) => isTemplate(typeOf(name) ?? ''));
  if (previous && typeOf(previous) === type) {
    warn(`The previous ${template.line} episode (${previous}) uses the same template. Rotate (npm run plan), or make sure 3 of 6 points differ in TREATMENT.md.`);
  }
  // The data must be this episode's own: npm run new copies the reference episode, which must be rewritten.
  const exampleDir = join(repoDir, template.example);
  if (active.episodeDir !== exampleDir) {
    for (const file of [template.dataFile, 'voiceScript.ts']) {
      const mine = join(active.episodeDir, 'data', file);
      const reference = join(exampleDir, 'data', file);
      if (existsSync(mine) && existsSync(reference) && readFileSync(mine, 'utf8') === readFileSync(reference, 'utf8')) {
        error(`data/${file} is still the reference episode's (${template.example}): rewrite it for this episode.`);
      }
    }
  }
  // Treatment first: brief.md and TREATMENT.md must be written, not left as the blank templates from npm run new.
  const blanks: Record<string, string> = {'brief.md': 'episode_brief_template.md', 'TREATMENT.md': 'TREATMENT_template.md'};
  for (const [file, blank] of Object.entries(blanks)) {
    const path = join(active.episodeDir, file);
    if (!existsSync(path)) {
      error(`Missing ${file} in the episode folder (write it before the data; npm run new creates it).`);
      continue;
    }
    const text = readFileSync(path, 'utf8');
    const templates = [join(templateDir, template.skill, 'templates', blank), join(templateDir, 'skills', '_shared', 'templates', blank)].filter((p) => existsSync(p));
    if (templates.some((p) => readFileSync(p, 'utf8').replace(/<episodeId>/g, active.episodeSlug).trim() === text.trim())) {
      error(`${file} is still the blank template: fill it in before writing the data.`);
    }
    if (file === 'TREATMENT.md' && /^\|\s*Structure\s*\|\s*\|/m.test(text)) {
      error('TREATMENT.md §9 (versus the previous episode) is empty: compare the six points.');
    }
  }
}

for (const message of warnings) console.log(`warn  ${message}`);
for (const message of errors) console.log(`ERROR ${message}`);
console.log(errors.length ? `${errors.length} error(s). Fix them before voicing or rendering.` : `check passed (${type}, ${active.episodeSlug})${warnings.length ? ` with ${warnings.length} warning(s)` : ''}.`);
process.exit(errors.length ? 1 : 0);
