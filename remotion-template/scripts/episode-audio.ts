import {copyFileSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync} from 'node:fs';
import {join} from 'node:path';
import {fileURLToPath} from 'node:url';
import {PACE} from '../src/core/pace';
import {episodeConfig} from '../src/data/episodeConfig';
import {isTemplate, TEMPLATES} from '../src/templates/registry';
import {RUNTIMES} from '../src/templates/timelines';
import {toMp3, toMp3AtLoudness, writeWav} from './audio/io';
import {SFX} from './audio/sfx';
import {normalize} from './audio/synth';
import {makeMusic} from './music/engine';

// npm run audio — after `npm run voice`, because the score follows the real voice timing.
// Writes the house SFX kit to public/sfx/<id>.mp3 and the episode's score to public/audio/score.mp3
// (copied into the episode's audio/ folder with score.mid, so `episode:use` brings it back), plus
// exports/<id>_music.md: style, tempo, key, backends and the section plan.
//
// The score comes from scripts/music/ (see skills/_shared/PACE_AND_MUSIC.md): the template and the
// episode's pace pick the style, data `score` sets tempo and key (and optionally `style` and `kit`).

const templateDir = fileURLToPath(new URL('..', import.meta.url));
const sfxDir = join(templateDir, 'public', 'sfx');
const audioDir = join(templateDir, 'public', 'audio');
const activeEpisodePath = join(templateDir, '.active-episode.json');

mkdirSync(sfxDir, {recursive: true});
mkdirSync(audioDir, {recursive: true});

for (const [id, make] of Object.entries(SFX)) {
  const wav = join(sfxDir, `${id}.wav`);
  writeWav(wav, normalize(make(), 0.89));
  toMp3(wav, join(sfxDir, `${id}.mp3`));
}
console.log(`[sfx] wrote ${Object.keys(SFX).length} sounds to ${sfxDir}`);

const type = episodeConfig.type;
if (!isTemplate(type)) {
  console.log(`[score] ${type} is a legacy line; it uses a registry BGM, no score written.`);
  process.exit(0);
}
const runtime = RUNTIMES[type];
if (!runtime) {
  console.error(`[score] template ${type} is registered but not built.`);
  process.exit(1);
}

const active = existsSync(activeEpisodePath) ? (JSON.parse(readFileSync(activeEpisodePath, 'utf8')) as {episodeDir?: string; exportBaseName?: string}) : {};
const base = episodeConfig.exportBaseName || active.exportBaseName || episodeConfig.episodeId;
const result = makeMusic({
  timeline: runtime.timeline,
  palette: TEMPLATES[type].palette,
  bpm: runtime.score.bpm,
  key: runtime.score.key,
  tempo: PACE.music.tempo,
  style: runtime.score.style,
  kit: runtime.score.kit,
  seed: `${episodeConfig.episodeId}:${runtime.score.style ?? TEMPLATES[type].palette}`,
  workDir: join(templateDir, 'out', 'music', `.work_${base}`),
});
for (const warning of result.warnings) console.warn(`[score] warning: ${warning}`);

const scoreWav = join(audioDir, 'score.wav');
const scoreMp3 = join(audioDir, 'score.mp3');
writeWav(scoreWav, result.mix);
const measured = toMp3AtLoudness(scoreWav, scoreMp3);
writeFileSync(join(audioDir, 'score.mid'), result.midi);
console.log(
  `[score] ${result.song.style.id}, ${result.song.bpm} BPM in ${result.song.key} ${result.song.style.mode}, pace ${PACE.id}, ${runtime.timeline.duration.toFixed(1)} s, ${measured.toFixed(1)} → −16 LUFS -> ${scoreMp3}`,
);

if (active.episodeDir) {
  mkdirSync(join(active.episodeDir, 'audio'), {recursive: true});
  copyFileSync(scoreMp3, join(active.episodeDir, 'audio', 'score.mp3'));
  copyFileSync(join(audioDir, 'score.mid'), join(active.episodeDir, 'audio', 'score.mid'));
  rmSync(join(active.episodeDir, 'audio', 'dossier-score.mp3'), {force: true});
  mkdirSync(join(active.episodeDir, 'exports'), {recursive: true});
  writeFileSync(join(active.episodeDir, 'exports', `${base}_music.md`), result.report, 'utf8');
  console.log(`[score] persisted to ${join(active.episodeDir, 'audio')} (score.mp3, score.mid); report exports/${base}_music.md`);
}
