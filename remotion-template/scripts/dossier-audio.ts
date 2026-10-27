import {execFileSync} from 'node:child_process';
import {copyFileSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync} from 'node:fs';
import {join} from 'node:path';
import {fileURLToPath} from 'node:url';
import {dossier} from '../src/data/dossier';
import {DOSSIER_DURATION, DOSSIER_SCENES, DOSSIER_SILENCES, SCORE_BEAT, SfxId} from '../src/dossier/schedule';

// Synthesizes the Halftone Dossier sound kit and an original per-episode score from the episode timeline.
// Everything is generated here (no samples, no downloads), so there is nothing to license.
//   npm run dossier:audio            -> public/sfx/dossier/*.mp3 + public/audio/dossier-score.mp3
// Run it after `npm run voice`, because the score follows the real voice timing.

const SR = 44100;
const templateDir = fileURLToPath(new URL('..', import.meta.url));
const sfxDir = join(templateDir, 'public', 'sfx', 'dossier');
const audioDir = join(templateDir, 'public', 'audio');
const activeEpisodePath = join(templateDir, '.active-episode.json');

// ---------- buffers ----------

type Stereo = {l: Float32Array; r: Float32Array};
const stereo = (seconds: number): Stereo => ({l: new Float32Array(Math.ceil(seconds * SR)), r: new Float32Array(Math.ceil(seconds * SR))});

const mulberry = (seed: number) => () => {
  seed |= 0;
  seed = (seed + 0x6d2b79f5) | 0;
  let r = Math.imul(seed ^ (seed >>> 15), 1 | seed);
  r = (r + Math.imul(r ^ (r >>> 7), 61 | r)) ^ r;
  return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
};
const rand = mulberry(60);
const noise = () => rand() * 2 - 1;

// Adds a mono sound into a stereo buffer at time `at` with gain and pan (-1..1).
const add = (out: Stereo, sound: Float32Array, at: number, gain = 1, pan = 0) => {
  const start = Math.round(at * SR);
  const gl = gain * Math.cos(((pan + 1) * Math.PI) / 4);
  const gr = gain * Math.sin(((pan + 1) * Math.PI) / 4);
  for (let i = 0; i < sound.length; i++) {
    const j = start + i;
    if (j < 0 || j >= out.l.length) {
      continue;
    }
    out.l[j] += sound[i] * gl;
    out.r[j] += sound[i] * gr;
  }
};

const render = (seconds: number, fn: (t: number, i: number) => number) => {
  const n = Math.ceil(seconds * SR);
  const buf = new Float32Array(n);
  for (let i = 0; i < n; i++) {
    buf[i] = fn(i / SR, i);
  }
  return buf;
};

const onePoleLow = (buf: Float32Array, cutoff: number | ((i: number) => number)) => {
  let y = 0;
  for (let i = 0; i < buf.length; i++) {
    const fc = typeof cutoff === 'number' ? cutoff : cutoff(i);
    const a = 1 - Math.exp((-2 * Math.PI * fc) / SR);
    y += a * (buf[i] - y);
    buf[i] = y;
  }
  return buf;
};

const highPass = (buf: Float32Array, cutoff: number) => {
  const low = onePoleLow(Float32Array.from(buf), cutoff);
  for (let i = 0; i < buf.length; i++) {
    buf[i] -= low[i];
  }
  return buf;
};

const normalize = (buf: Float32Array, peak: number) => {
  let max = 0;
  for (const v of buf) {
    max = Math.max(max, Math.abs(v));
  }
  if (max > 0) {
    for (let i = 0; i < buf.length; i++) {
      buf[i] *= peak / max;
    }
  }
  return buf;
};

// ---------- instruments ----------

const hz = (midi: number) => 440 * 2 ** ((midi - 69) / 12);

const kick = () =>
  render(0.35, (t) => {
    const phase = 2 * Math.PI * (45 * t + ((110 - 45) / 28) * (1 - Math.exp(-28 * t)));
    return Math.tanh(1.8 * Math.sin(phase) * Math.exp(-t * 9));
  });

const snare = () => {
  const body = render(0.18, (t) => Math.sin(2 * Math.PI * 190 * t) * Math.exp(-t * 28) * 0.6);
  const hiss = highPass(render(0.18, (t) => noise() * Math.exp(-t * 20)), 1800);
  return body.map((v, i) => v + hiss[i] * 0.9);
};

const clap = () => {
  const buf = render(0.2, (t) => {
    const bursts = [0, 0.011, 0.022].reduce((sum, b) => sum + (t >= b ? Math.exp(-(t - b) * 160) : 0), 0);
    return noise() * (bursts * 0.7 + Math.exp(-t * 24) * 0.35);
  });
  return highPass(onePoleLow(buf, 3500), 900);
};

const hat = (open = false) => highPass(render(open ? 0.2 : 0.05, (t) => noise() * Math.exp(-t * (open ? 18 : 90))), 7000);

const snap = () => highPass(onePoleLow(render(0.06, (t) => noise() * Math.exp(-t * 110)), 4200), 1500);

// Marimba-like pluck: fundamental + a fast-decaying 4× partial.
const marimba = (midi: number, length = 0.7) => {
  const f = hz(midi);
  return render(length, (t) => {
    const attack = Math.min(1, t / 0.002);
    return attack * (Math.sin(2 * Math.PI * f * t) * Math.exp(-t * 6) + 0.35 * Math.sin(2 * Math.PI * 4 * f * t) * Math.exp(-t * 22));
  });
};

// Soft square-ish bass with a 2nd harmonic so it speaks on phone speakers.
const bass = (midi: number, length: number) => {
  const f = hz(midi);
  return render(length + 0.05, (t) => {
    const env = Math.min(1, t / 0.005) * Math.exp(-t * 3) * (t > length ? Math.exp(-(t - length) * 60) : 1);
    let v = 0;
    [1, 3, 5, 7].forEach((h, k) => (v += Math.sin(2 * Math.PI * f * h * t) * [1, 0.22, 0.09, 0.04][k]));
    v += 0.3 * Math.sin(2 * Math.PI * f * 2 * t);
    return v * env;
  });
};

// Plucked string (Karplus-Strong) for the sneaking pizzicato.
const pizz = (midi: number, length = 0.45) => {
  const period = Math.round(SR / hz(midi));
  const line = Float32Array.from({length: period}, () => noise());
  const out = new Float32Array(Math.ceil(length * SR));
  let idx = 0;
  for (let i = 0; i < out.length; i++) {
    const next = (idx + 1) % period;
    const v = 0.5 * (line[idx] + line[next]) * 0.994;
    out[i] = line[idx];
    line[idx] = v;
    idx = next;
  }
  return onePoleLow(out, 2400);
};

const bell = (midi: number, length = 1.4) => {
  const f = hz(midi);
  return render(length, (t) =>
    [1, 2.76, 5.4].reduce((sum, ratio, k) => sum + Math.sin(2 * Math.PI * f * ratio * t) * Math.exp(-t * (2.2 + k * 2.5)) * [1, 0.45, 0.2][k], 0),
  );
};

const riser = (length: number) => {
  const buf = render(length, (t) => noise() * (t / length) ** 2);
  return onePoleLow(buf, (i) => 300 + 5000 * (i / buf.length) ** 2);
};

const snareRoll = (length: number) => {
  const out = new Float32Array(Math.ceil(length * SR));
  const hit = snare();
  const steps = Math.floor(length / (SCORE_BEAT / 4));
  for (let s = 0; s < steps; s++) {
    const at = Math.round(s * (SCORE_BEAT / 4) * SR);
    const g = 0.15 + 0.6 * (s / steps);
    for (let i = 0; i < hit.length && at + i < out.length; i++) {
      out[at + i] += hit[i] * g;
    }
  }
  return out;
};

// ---------- sound effects ----------

const SFX: Record<SfxId, () => Float32Array> = {
  pop: () =>
    render(0.12, (t) => {
      const f = 480 + 900 * (t / 0.06);
      return Math.sin(2 * Math.PI * f * t) * Math.exp(-t * 38);
    }),
  stamp: () => {
    const boom = render(0.55, (t) => {
      const phase = 2 * Math.PI * (45 * t + ((180 - 45) / 12) * (1 - Math.exp(-12 * t)));
      return Math.tanh(2.2 * Math.sin(phase) * Math.exp(-t * 7));
    });
    const click = highPass(render(0.03, (t) => noise() * Math.exp(-t * 200)), 2000);
    const crackle = render(0.25, (t) => (rand() < 0.02 ? noise() : 0) * Math.exp(-t * 14));
    return boom.map((v, i) => v + (click[i] ?? 0) * 0.9 + (crackle[i] ?? 0) * 0.6);
  },
  'stamp-small': () =>
    render(0.3, (t) => {
      const phase = 2 * Math.PI * (80 * t + ((260 - 80) / 16) * (1 - Math.exp(-16 * t)));
      return Math.tanh(1.6 * Math.sin(phase) * Math.exp(-t * 12)) + (t < 0.01 ? noise() * 0.5 : 0);
    }),
  shutter: () => {
    const buf = render(0.16, (t) => {
      const c1 = t < 0.012 ? noise() * Math.exp(-t * 300) : 0;
      const c2 = t > 0.07 && t < 0.085 ? noise() * Math.exp(-(t - 0.07) * 300) : 0;
      return c1 + c2 * 0.8;
    });
    return highPass(buf, 1200);
  },
  whoosh: () => {
    const length = 0.42;
    const buf = render(length, (t) => noise() * Math.sin(Math.PI * (t / length)) ** 2);
    return onePoleLow(buf, (i) => 300 + 3800 * Math.sin(Math.PI * (i / buf.length)));
  },
  paper: () => {
    const buf = render(0.32, (t) => noise() * Math.exp(-t * 9) * (0.6 + 0.4 * Math.sin(2 * Math.PI * 38 * t)));
    return highPass(onePoleLow(buf, 5200), 700);
  },
  type: () => {
    const click = highPass(render(0.02, (t) => noise() * Math.exp(-t * 400)), 2500);
    const ping = render(0.03, (t) => Math.sin(2 * Math.PI * 1800 * t) * Math.exp(-t * 160) * 0.3);
    return ping.map((v, i) => v + (click[i] ?? 0));
  },
  pin: () =>
    render(0.12, (t) => Math.sin(2 * Math.PI * 900 * t) * Math.exp(-t * 60) * 0.6 + Math.sin(2 * Math.PI * 220 * t) * Math.exp(-t * 30) + (t < 0.004 ? noise() : 0)),
  bell: () => {
    const out = new Float32Array(Math.ceil(1.8 * SR));
    [74, 78, 81, 86].forEach((midi, k) => {
      const note = bell(midi, 1.4);
      const at = Math.round(k * 0.09 * SR);
      for (let i = 0; i < note.length && at + i < out.length; i++) {
        out[at + i] += note[i] * 0.7;
      }
    });
    return out;
  },
};

// ---------- encoding ----------

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

// ---------- score ----------

type Section = 'sneak' | 'secret' | 'groove' | 'strip' | 'light';

const sectionFor = (kind: string): Section => {
  switch (kind) {
    case 'cloze-case':
      return 'sneak';
    case 'fingerprint':
      return 'secret';
    case 'solve':
      return 'strip';
    case 'homework':
      return 'light';
    default:
      return 'groove';
  }
};

// One chord per bar, in the episode key (D minor family by default): i - VI - III - VII.
const KEY_ROOT: Record<string, number> = {D: 50, E: 52, F: 53, G: 55, A: 57};
const PROGRESSION = [
  [0, 3, 7],
  [-4, 0, 3],
  [3, 7, 10],
  [-2, 2, 5],
];

const buildScore = () => {
  const total = DOSSIER_DURATION + 1;
  const out = stereo(total);
  const root = KEY_ROOT[dossier.score.key] ?? 50;
  const sceneAt = (t: number) => DOSSIER_SCENES.find((s) => t >= s.start && t < s.end) ?? DOSSIER_SCENES[DOSSIER_SCENES.length - 1];
  const sounds = {kick: kick(), snare: snare(), clap: clap(), hat: hat(), openHat: hat(true), snap: snap()};
  const beats = Math.floor(DOSSIER_DURATION / SCORE_BEAT);

  for (let b = 0; b < beats; b++) {
    const t = b * SCORE_BEAT;
    const section = sectionFor(sceneAt(t + 0.01).scene.kind);
    const inBar = b % 4;
    const chord = PROGRESSION[Math.floor(b / 4) % PROGRESSION.length].map((n) => root + n);
    const eighth = SCORE_BEAT / 2;

    if (section === 'sneak' || section === 'secret') {
      add(out, pizz(chord[0] - 12 + [0, 7, 3, 7][inBar], 0.5), t, 0.55, -0.2);
      if (inBar % 2 === 1) {
        add(out, sounds.snap, t, 0.5, 0.3);
      }
      if (section === 'sneak') {
        add(out, sounds.hat, t + eighth, 0.18, 0.4);
        if (inBar === 0) {
          add(out, marimba(chord[2] + 12, 0.5), t + eighth, 0.22, 0.2);
        }
      }
    }

    if (section === 'groove' || section === 'light') {
      if (inBar === 0 || inBar === 2) {
        add(out, sounds.kick, t, section === 'groove' ? 0.8 : 0.55);
      }
      if (section === 'groove' && inBar === 2) {
        add(out, sounds.kick, t + eighth, 0.45);
      }
      if (inBar === 1 || inBar === 3) {
        add(out, sounds.clap, t, section === 'groove' ? 0.5 : 0.3, 0.1);
      }
      add(out, sounds.hat, t, 0.16, 0.35);
      add(out, sounds.hat, t + eighth, 0.22, 0.35);
      if (section === 'groove') {
        add(out, bass(chord[0] - 12, eighth * 0.8), t, 0.38, 0);
        add(out, bass(chord[0] - 12 + (inBar === 3 ? 7 : 0), eighth * 0.7), t + eighth, 0.3, 0);
      }
      // Marimba arpeggio: chord tones climbing, a rest on beat 4 so the voice has room.
      if (inBar !== 3) {
        add(out, marimba(chord[inBar] + 12), t, 0.26, -0.3);
        add(out, marimba(chord[(inBar + 1) % 3] + 24, 0.5), t + eighth, 0.16, 0.3);
      }
    }

    if (section === 'strip') {
      add(out, bass(chord[0] - 12, SCORE_BEAT * 0.9), t, 0.4, 0);
      if (inBar % 2 === 1) {
        add(out, sounds.snap, t, 0.5, 0.3);
      }
    }
  }

  // Snare roll + riser into the root reveal and into the verdict silence.
  const reveal = DOSSIER_SCENES.find((s) => s.scene.kind === 'root-reveal');
  if (reveal) {
    add(out, snareRoll(1.2), reveal.start - 1.2, 0.5, 0);
    add(out, riser(1.2), reveal.start - 1.2, 0.35, 0);
    add(out, sounds.openHat, reveal.start, 0.4, 0);
  }
  for (const silence of DOSSIER_SILENCES) {
    add(out, snareRoll(1.0), silence.from - 1.0, 0.4, 0);
    add(out, riser(1.0), silence.from - 1.0, 0.3, 0);
  }

  // Empty the music in each silence so the line and the stamp land alone (30 ms ramps).
  const ramp = Math.round(0.03 * SR);
  for (const silence of DOSSIER_SILENCES) {
    const from = Math.round(silence.from * SR);
    const to = Math.round(silence.to * SR);
    for (let i = from - ramp; i < to + ramp; i++) {
      if (i < 0 || i >= out.l.length) {
        continue;
      }
      const g = i < from ? (from - i) / ramp : i >= to ? (i - to) / ramp : 0;
      out.l[i] *= g;
      out.r[i] *= g;
    }
  }

  // Final chord rings out.
  const last = root + 12;
  [0, 3, 7, 12].forEach((n, k) => add(out, marimba(last + n, 1.6), DOSSIER_DURATION - 1.4 + k * 0.06, 0.25, k % 2 === 0 ? -0.3 : 0.3));

  // Soft clip and normalize to -3 dBFS.
  for (let i = 0; i < out.l.length; i++) {
    out.l[i] = Math.tanh(out.l[i] * 1.2);
    out.r[i] = Math.tanh(out.r[i] * 1.2);
  }
  let peak = 0;
  for (let i = 0; i < out.l.length; i++) {
    peak = Math.max(peak, Math.abs(out.l[i]), Math.abs(out.r[i]));
  }
  const g = 0.708 / Math.max(peak, 1e-6);
  for (let i = 0; i < out.l.length; i++) {
    out.l[i] *= g;
    out.r[i] *= g;
  }
  return out;
};

// ---------- main ----------

mkdirSync(sfxDir, {recursive: true});
mkdirSync(audioDir, {recursive: true});

for (const [id, make] of Object.entries(SFX)) {
  const wav = join(sfxDir, `${id}.wav`);
  writeWav(wav, normalize(make(), 0.89));
  toMp3(wav, join(sfxDir, `${id}.mp3`));
}
console.log(`[sfx] wrote ${Object.keys(SFX).length} sounds to ${sfxDir}`);

const scoreWav = join(audioDir, 'dossier-score.wav');
const scoreMp3 = join(audioDir, 'dossier-score.mp3');
writeWav(scoreWav, buildScore());
toMp3(scoreWav, scoreMp3);
console.log(`[score] ${dossier.score.bpm} BPM, ${DOSSIER_DURATION.toFixed(1)} s -> ${scoreMp3}`);

if (existsSync(activeEpisodePath)) {
  const {episodeDir} = JSON.parse(readFileSync(activeEpisodePath, 'utf8')) as {episodeDir?: string};
  if (episodeDir) {
    mkdirSync(join(episodeDir, 'audio'), {recursive: true});
    copyFileSync(scoreMp3, join(episodeDir, 'audio', 'dossier-score.mp3'));
    console.log(`[score] persisted to ${join(episodeDir, 'audio')}`);
  }
}
