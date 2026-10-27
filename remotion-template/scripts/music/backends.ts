import {execFileSync, spawnSync} from 'node:child_process';
import {existsSync, mkdirSync, readdirSync, writeFileSync} from 'node:fs';
import {join, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
import * as S from '../audio/synth';
import {SR, Stereo} from '../audio/synth';
import {MidiTrack, writeMidi} from './midi';
import type {DrumId, Instrument, SynthVoice} from './styles';

// Three ways to turn notes into sound, all local and offline:
//   1. soundfont — FluidSynth renders the MIDI with a local .sf2 (realistic instruments)
//   2. samples   — your own WAV one-shots / multisamples in shared-assets/music-kits/<kit>/
//   3. synth     — built-in synthesis (always available, nothing to install)
// Every track picks the best available: samples (if the kit has that slot) → soundfont → synth.

const templateDir = fileURLToPath(new URL('../..', import.meta.url));
const repoDir = resolve(templateDir, '..');

export type Backend = 'soundfont' | 'samples' | 'synth';
export type Notes = {t: number; dur: number; pitch: number; vel: number}[];
export type Hits = {t: number; drum: DrumId; vel: number}[];

// ---------- discovery ----------

const SOUNDFONT_DIRS = [
  join(repoDir, 'shared-assets', 'soundfonts'),
  '/usr/share/sounds/sf2',
  '/usr/share/soundfonts',
  '/usr/local/share/soundfonts',
  '/opt/homebrew/share/soundfonts',
  'C:\\soundfonts',
  join(process.env.USERPROFILE ?? process.env.HOME ?? '', 'soundfonts'),
];

export const findSoundfont = (): string | null => {
  if (process.env.MUSIC_SOUNDFONT && existsSync(process.env.MUSIC_SOUNDFONT)) return process.env.MUSIC_SOUNDFONT;
  for (const dir of SOUNDFONT_DIRS) {
    if (!dir || !existsSync(dir)) continue;
    const files = readdirSync(dir).filter((name) => /\.sf[23]$/i.test(name));
    // Prefer a full General MIDI set when several are present.
    const pick = files.find((name) => /fluidr3|generaluser|gm/i.test(name)) ?? files[0];
    if (pick) return join(dir, pick);
  }
  return null;
};

const fluidsynthBin = () => process.env.MUSIC_FLUIDSYNTH ?? 'fluidsynth';
export const hasFluidsynth = () => spawnSync(fluidsynthBin(), ['--version'], {encoding: 'utf8', shell: process.platform === 'win32'}).status === 0;

export const KITS_DIR = join(repoDir, 'shared-assets', 'music-kits');
export const listKits = () => (existsSync(KITS_DIR) ? readdirSync(KITS_DIR, {withFileTypes: true}).filter((d) => d.isDirectory()).map((d) => d.name) : []);

export type Available = {soundfont: string | null; fluidsynth: boolean; kits: string[]};
export const available = (): Available => ({soundfont: findSoundfont(), fluidsynth: hasFluidsynth(), kits: listKits()});

// ---------- audio I/O ----------

export const decode = (path: string): Stereo => {
  const raw = execFileSync('ffmpeg', ['-v', 'error', '-i', path, '-f', 'f32le', '-ac', '2', '-ar', String(SR), '-'], {maxBuffer: 1 << 30});
  const data = new Float32Array(raw.buffer, raw.byteOffset, Math.floor(raw.length / 4));
  const frames = data.length / 2;
  const out = S.stereo(frames / SR);
  for (let i = 0; i < frames; i++) {
    out.l[i] = data[2 * i];
    out.r[i] = data[2 * i + 1];
  }
  return out;
};

const mono = (stereo: Stereo) => stereo.l.map((v, i) => (v + stereo.r[i]) / 2);
const velGain = (vel: number) => (vel / 127) ** 1.6;

// ---------- 1. SoundFont (FluidSynth) ----------

export const renderSoundfont = (track: MidiTrack, bpm: number, soundfont: string, workDir: string, seconds: number): Stereo => {
  mkdirSync(workDir, {recursive: true});
  const mid = join(workDir, `${track.name}.mid`);
  const wav = join(workDir, `${track.name}.wav`);
  writeFileSync(mid, writeMidi([track], bpm));
  // No built-in reverb or chorus: the mixer adds one shared space for every track.
  execFileSync(fluidsynthBin(), ['-ni', '-q', '-R', '0', '-C', '0', '-g', '0.7', '-r', String(SR), '-F', wav, soundfont, mid], {stdio: 'pipe', shell: process.platform === 'win32'});
  const audio = decode(wav);
  const out = S.stereo(seconds);
  out.l.set(audio.l.subarray(0, out.l.length));
  out.r.set(audio.r.subarray(0, out.r.length));
  return out;
};

// ---------- 2. sample kits ----------

// shared-assets/music-kits/<kit>/
//   kick*.wav snare*.wav clap*.wav rim*.wav hat*.wav openhat*.wav ride*.wav shaker*.wav tom*.wav crash*.wav perc*.wav
//   <role>_<note>.wav for pitched instruments, e.g. bass_C2.wav, chords_C4.wav, lead_A4.wav (role = bass | chords | pad | lead | arp)
// Several files for one drum are played round-robin.
const DRUM_FILES: Record<DrumId, RegExp> = {
  kick: /^(kick|bd)/i,
  snare: /^(snare|sd)/i,
  clap: /^clap/i,
  rim: /^(rim|stick)/i,
  hat: /^(hat|hh|closedhat|chh)/i,
  openHat: /^(openhat|ohh|oh)/i,
  ride: /^ride/i,
  shaker: /^(shaker|shk|tamb)/i,
  tom: /^tom/i,
  crash: /^(crash|cymbal)/i,
  perc: /^(perc|cowbell|wood|conga|bongo)/i,
};
const NOTE_PC: Record<string, number> = {C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11};
const parseNote = (text: string) => {
  const m = text.match(/^([A-G])([#b]?)(-?\d)$/i);
  if (!m) return null;
  return (Number(m[3]) + 1) * 12 + NOTE_PC[m[1].toUpperCase()] + (m[2] === '#' ? 1 : m[2] === 'b' ? -1 : 0);
};

export type Kit = {name: string; drums: Partial<Record<DrumId, Float32Array[]>>; pitched: Record<string, {root: number; sound: Float32Array}[]>};
const kitCache = new Map<string, Kit>();
export const loadKit = (name: string): Kit | null => {
  const dir = join(KITS_DIR, name);
  if (!existsSync(dir)) return null;
  if (kitCache.has(name)) return kitCache.get(name)!;
  const kit: Kit = {name, drums: {}, pitched: {}};
  for (const file of readdirSync(dir).filter((f) => /\.(wav|flac|aiff?|mp3|ogg)$/i.test(f)).sort()) {
    const base = file.replace(/\.[^.]+$/, '');
    const pitched = base.match(/^(bass|chords|pad|lead|arp)[_-](.+)$/i);
    if (pitched && parseNote(pitched[2]) !== null) {
      (kit.pitched[pitched[1].toLowerCase()] ??= []).push({root: parseNote(pitched[2])!, sound: mono(decode(join(dir, file)))});
      continue;
    }
    const drum = (Object.keys(DRUM_FILES) as DrumId[]).find((id) => DRUM_FILES[id].test(base) && !(id === 'hat' && /^open/i.test(base)));
    if (drum) (kit.drums[drum] ??= []).push(mono(decode(join(dir, file))));
  }
  kitCache.set(name, kit);
  return kit;
};

const resample = (sound: Float32Array, ratio: number, seconds: number) => {
  const n = Math.min(Math.ceil(seconds * SR), Math.floor(sound.length / ratio));
  const out = new Float32Array(n);
  for (let i = 0; i < n; i++) {
    const x = i * ratio;
    const j = Math.floor(x);
    out[i] = (sound[j] ?? 0) + ((sound[j + 1] ?? 0) - (sound[j] ?? 0)) * (x - j);
  }
  return out;
};

export const renderSamplesPitched = (notes: Notes, samples: {root: number; sound: Float32Array}[], seconds: number, pan = 0): Stereo => {
  const out = S.stereo(seconds);
  for (const note of notes) {
    const sample = samples.reduce((best, s) => (Math.abs(s.root - note.pitch) < Math.abs(best.root - note.pitch) ? s : best), samples[0]);
    const sound = resample(sample.sound, 2 ** ((note.pitch - sample.root) / 12), note.dur + 0.25);
    const release = Math.round(0.08 * SR);
    const hold = Math.round(note.dur * SR);
    for (let i = hold; i < sound.length; i++) sound[i] *= Math.max(0, 1 - (i - hold) / release);
    S.add(out, sound, note.t, velGain(note.vel), pan);
  }
  return out;
};

// ---------- 3. built-in synth ----------

const tom = (pitch = 140) => S.render(0.3, (t) => Math.sin(2 * Math.PI * (pitch * (1 + 0.5 * Math.exp(-t * 30))) * t) * Math.exp(-t * 12));
const ride = () => {
  const ping = S.render(0.9, (t) => [1, 1.48, 2.17, 3.3].reduce((sum, r, k) => sum + Math.sin(2 * Math.PI * 520 * r * t) * Math.exp(-t * (3 + k)) * 0.15, 0));
  const wash = S.highPass(S.render(0.9, (t) => S.noise() * Math.exp(-t * 5) * 0.4), 6000);
  return ping.map((v, i) => v + wash[i]);
};
let drumKit: Record<DrumId, Float32Array> | null = null;
const synthDrums = () =>
  (drumKit ??= {
    kick: S.kick(),
    snare: S.snare(),
    clap: S.clap(),
    rim: S.snap(),
    hat: S.hat(),
    openHat: S.hat(true),
    ride: ride(),
    shaker: S.shaker(),
    tom: tom(),
    crash: S.crash(),
    perc: S.woodblock(900),
  });

const DRUM_PAN: Record<DrumId, number> = {kick: 0, snare: 0, clap: 0.05, rim: -0.1, hat: 0.25, openHat: 0.25, ride: -0.3, shaker: -0.35, tom: -0.2, crash: 0.3, perc: 0.4};

export const renderDrums = (hits: Hits, seconds: number, kit: Kit | null): Stereo => {
  const out = S.stereo(seconds);
  const counters: Partial<Record<DrumId, number>> = {};
  for (const h of hits) {
    const choices = kit?.drums[h.drum];
    const sound = choices?.length ? choices[(counters[h.drum] = ((counters[h.drum] ?? -1) + 1) % choices.length)] : synthDrums()[h.drum];
    S.add(out, sound, h.t, velGain(h.vel) * (h.drum === 'crash' ? 0.6 : 1), DRUM_PAN[h.drum]);
  }
  return out;
};

// Melodic synth voices (one note at a time).
const epiano = (midi: number, len: number) => {
  const f = S.hz(midi);
  return S.render(len + 0.4, (t) => {
    const env = Math.min(1, t / 0.004) * Math.exp(-t * 1.6) * (t > len ? Math.exp(-(t - len) * 12) : 1);
    const mod = Math.sin(2 * Math.PI * f * t) * 1.6 * Math.exp(-t * 5);
    return (Math.sin(2 * Math.PI * f * t + mod) * 0.8 + 0.2 * Math.sin(4 * Math.PI * f * t) * Math.exp(-t * 6)) * env;
  });
};
const piano = (midi: number, len: number) => {
  const f = S.hz(midi);
  return S.render(len + 0.5, (t) => {
    const env = Math.min(1, t / 0.002) * Math.exp(-t * (1.2 + midi / 60)) * (t > len ? Math.exp(-(t - len) * 10) : 1);
    return [1, 2, 3, 4, 5].reduce((sum, h, k) => sum + Math.sin(2 * Math.PI * f * h * (1 + 0.0004 * h * h) * t) * [1, 0.5, 0.25, 0.12, 0.06][k] * Math.exp(-t * k * 1.5), 0) * env * 0.5;
  });
};
const strings = (midi: number, len: number) =>
  S.lowPass(
    S.render(len + 0.4, (t) => {
      const env = Math.min(1, t / 0.25) * (t > len ? Math.exp(-(t - len) * 6) : 1);
      let v = 0;
      for (const d of [-0.005, 0, 0.005]) v += ((t * S.hz(midi) * (1 + d)) % 1) * 2 - 1;
      return (v / 3) * env * 0.5;
    }),
    2400,
  );
const organ = (midi: number, len: number) => {
  const f = S.hz(midi);
  return S.render(len + 0.05, (t) => [1, 2, 3, 4].reduce((s, h, k) => s + Math.sin(2 * Math.PI * f * h * t) * [1, 0.6, 0.3, 0.2][k], 0) * 0.35 * Math.min(1, t / 0.01) * (t > len ? Math.exp(-(t - len) * 40) : 1));
};
const sub808 = (midi: number, len: number) => {
  const f = S.hz(midi);
  return S.render(len + 0.08, (t) => {
    const bend = f * (1 + 0.9 * Math.exp(-t * 40));
    const env = Math.min(1, t / 0.003) * (t > len ? Math.exp(-(t - len) * 40) : Math.exp(-t * 0.6));
    return Math.tanh(2.2 * Math.sin(2 * Math.PI * bend * t)) * env * 0.6;
  });
};

const VOICES: Record<SynthVoice, (midi: number, len: number) => Float32Array> = {
  epiano,
  piano,
  pluck: (midi, len) => S.pizz(midi, Math.max(0.3, len + 0.3), 3800),
  pad: (midi, len) => S.pad([midi], len + 0.4),
  strings,
  bass: (midi, len) => S.bass(midi, len),
  sub808,
  pizz: (midi, len) => S.pizz(midi, Math.max(0.35, len + 0.2)),
  marimba: (midi, len) => S.marimba(midi, Math.max(0.5, len)),
  bell: (midi, len) => S.bell(midi, Math.max(0.8, len + 0.4)),
  musicbox: (midi, len) => S.musicBox(midi, Math.max(0.6, len + 0.3)),
  brass: (midi, len) => S.brass([midi], len),
  square: (midi, len) => S.squareLead(midi, len),
  pulse: (midi, len) => S.pulse(midi, Math.max(0.15, len)),
  kalimba: (midi, len) => S.kalimba(midi, Math.max(0.6, len + 0.3)),
  organ,
};

export const renderSynth = (notes: Notes, instrument: Instrument, seconds: number, pan = 0): Stereo => {
  const out = S.stereo(seconds);
  const voice = VOICES[instrument.synth];
  for (const note of notes) S.add(out, voice(note.pitch + 12 * (instrument.octave ?? 0), note.dur), note.t, velGain(note.vel) * 0.6, pan);
  return out;
};
