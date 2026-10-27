import {execFileSync} from 'node:child_process';
import {copyFileSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync} from 'node:fs';
import {join} from 'node:path';
import {fileURLToPath} from 'node:url';
import {episodeConfig} from '../src/data/episodeConfig';
import {isTemplate, TEMPLATES} from '../src/templates/registry';
import {RUNTIMES} from '../src/templates/timelines';
import {renderScore} from './audio/score';
import {SFX} from './audio/sfx';
import {normalize, SR, Stereo} from './audio/synth';

// npm run audio — after `npm run voice`, because the score follows the real voice timing.
// Writes the house SFX kit to public/sfx/<id>.mp3 and the episode's score to public/audio/score.mp3
// (also copied into the episode's audio/ folder so `episode:use` brings it back).

const templateDir = fileURLToPath(new URL('..', import.meta.url));
const sfxDir = join(templateDir, 'public', 'sfx');
const audioDir = join(templateDir, 'public', 'audio');
const activeEpisodePath = join(templateDir, '.active-episode.json');

const writeWav = (path: string, data: Stereo | Float32Array) => {
  const channels = data instanceof Float32Array ? 1 : 2;
  const frames = data instanceof Float32Array ? data.length : data.l.length;
  const buffer = Buffer.alloc(44 + frames * channels * 2);
  buffer.write('RIFF', 0);
  buffer.writeUInt32LE(36 + frames * channels * 2, 4);
  buffer.write('WAVEfmt ', 8);
  buffer.writeUInt32LE(16, 16);
  buffer.writeUInt16LE(1, 20);
  buffer.writeUInt16LE(channels, 22);
  buffer.writeUInt32LE(SR, 24);
  buffer.writeUInt32LE(SR * channels * 2, 28);
  buffer.writeUInt16LE(channels * 2, 32);
  buffer.writeUInt16LE(16, 34);
  buffer.write('data', 36);
  buffer.writeUInt32LE(frames * channels * 2, 40);
  let offset = 44;
  for (let i = 0; i < frames; i++) {
    const samples = data instanceof Float32Array ? [data[i]] : [data.l[i], data.r[i]];
    for (const s of samples) {
      buffer.writeInt16LE(Math.round(Math.max(-1, Math.min(1, s)) * 32767), offset);
      offset += 2;
    }
  }
  writeFileSync(path, buffer);
};

const toMp3 = (wavPath: string, mp3Path: string) => {
  execFileSync('ffmpeg', ['-y', '-v', 'error', '-i', wavPath, '-codec:a', 'libmp3lame', '-q:a', '2', mp3Path]);
  rmSync(wavPath, {force: true});
};

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

const scoreWav = join(audioDir, 'score.wav');
const scoreMp3 = join(audioDir, 'score.mp3');
writeWav(scoreWav, renderScore(runtime.timeline, runtime.score, TEMPLATES[type].palette));
toMp3(scoreWav, scoreMp3);
console.log(`[score] ${TEMPLATES[type].palette}, ${runtime.score.bpm} BPM in ${runtime.score.key}, ${runtime.timeline.duration.toFixed(1)} s -> ${scoreMp3}`);

if (existsSync(activeEpisodePath)) {
  const {episodeDir} = JSON.parse(readFileSync(activeEpisodePath, 'utf8')) as {episodeDir?: string};
  if (episodeDir) {
    mkdirSync(join(episodeDir, 'audio'), {recursive: true});
    copyFileSync(scoreMp3, join(episodeDir, 'audio', 'score.mp3'));
    rmSync(join(episodeDir, 'audio', 'dossier-score.mp3'), {force: true});
    console.log(`[score] persisted to ${join(episodeDir, 'audio')}`);
  }
}
