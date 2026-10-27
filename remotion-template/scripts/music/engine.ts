import {mkdirSync, rmSync, writeFileSync} from 'node:fs';
import {join} from 'node:path';
import type {SceneBase, Timeline} from '../../src/core/timeline';
import * as S from '../audio/synth';
import {SR, Stereo} from '../audio/synth';
import {writeWav} from '../audio/io';
import {available, Backend, loadKit, renderDrums, renderSamplesPitched, renderSoundfont, renderSynth} from './backends';
import {compose, Song, TrackRole} from './compose';
import {MidiTrack, writeMidi} from './midi';
import {DrumId, Role, STYLES, Style, TEMPLATE_ROLES, TEMPLATE_STYLES, Tempo, tempoForBpm} from './styles';
import type {KeyName} from './theory';

// The score engine: style + video timeline → song (compose.ts) → rendered tracks (backends.ts) → mix.
// Deterministic: the same episode, style and backend always give the same music.

export type MusicRequest = {
  timeline: Timeline<SceneBase>;
  palette: string; // the template's score palette (registry): picks the default style and the scene roles
  bpm: number; // the timeline was built on this tempo's grid
  key: KeyName;
  tempo: Tempo; // from the pace
  style?: string; // episode override (data score.style)
  kit?: string; // sample kit in shared-assets/music-kits/
  backend?: 'auto' | Backend; // force one backend (MUSIC_BACKEND env does the same)
  seed: string;
  workDir: string; // scratch for MIDI and FluidSynth renders
  stemsDir?: string; // write one WAV per track here
};

export type MusicResult = {mix: Stereo; song: Song; midi: Buffer; report: string; warnings: string[]};

const GM_DRUM: Record<DrumId, number> = {kick: 36, rim: 37, snare: 38, clap: 39, hat: 42, openHat: 46, tom: 45, crash: 49, ride: 51, shaker: 70, perc: 76};
const ROLES: Exclude<TrackRole, 'drums'>[] = ['bass', 'chords', 'pad', 'arp', 'lead'];
const PAN: Record<TrackRole, number> = {drums: 0, bass: 0, chords: -0.2, pad: 0.15, arp: 0.35, lead: 0.1};
const SEND: Record<TrackRole, number> = {drums: 0.08, bass: 0, chords: 0.25, pad: 0.45, arp: 0.35, lead: 0.3};

export const resolveStyle = (palette: string, tempo: Tempo, requested?: string): Style => STYLES[requested ?? ''] ?? STYLES[TEMPLATE_STYLES[palette]?.[tempo] ?? 'chill-pop'];

// ---------- effects ----------

// Freeverb (Schroeder–Moorer): 8 combs + 4 allpasses per channel.
const reverb = (input: Stereo, room = 0.82, damp = 0.25): Stereo => {
  const out = S.stereo(input.l.length / SR);
  const combs = [1116, 1188, 1277, 1356, 1422, 1491, 1557, 1617];
  const allpasses = [556, 441, 341, 225];
  for (const [channel, spread] of [
    ['l', 0],
    ['r', 23],
  ] as const) {
    const x = input[channel];
    const y = out[channel];
    for (const size of combs) {
      const buf = new Float32Array(size + spread);
      let idx = 0;
      let store = 0;
      for (let i = 0; i < x.length; i++) {
        const o = buf[idx];
        store = o * (1 - damp) + store * damp;
        buf[idx] = x[i] * 0.015 + store * room;
        idx = (idx + 1) % buf.length;
        y[i] += o;
      }
    }
    for (const size of allpasses) {
      const buf = new Float32Array(size + spread);
      let idx = 0;
      for (let i = 0; i < y.length; i++) {
        const b = buf[idx];
        const v = y[i];
        buf[idx] = v + b * 0.5;
        y[i] = b - v;
        idx = (idx + 1) % buf.length;
      }
    }
  }
  return out;
};

// Gain curve at audio rate from a list of [from, to] windows (smooth ramps).
const windowGain = (length: number, windows: {from: number; to: number}[], depth: number, ramp = 0.06) => {
  const g = new Float32Array(length).fill(1);
  const r = Math.max(1, Math.round(ramp * SR));
  for (const w of windows) {
    const a = Math.round(w.from * SR);
    const b = Math.round(w.to * SR);
    for (let i = Math.max(0, a - r); i < Math.min(length, b + r); i++) {
      const edge = i < a ? (a - i) / r : i >= b ? (i - b) / r : 0;
      g[i] = Math.min(g[i], 1 - depth * (1 - edge));
    }
  }
  return g;
};

// Sidechain: everything but the drums dips under each kick, so the beat stays punchy.
const sidechain = (length: number, kicks: number[], depth: number) => {
  const g = new Float32Array(length).fill(1);
  if (depth <= 0) return g;
  for (const t of kicks) {
    const start = Math.round(t * SR);
    for (let i = 0; i < Math.round(0.22 * SR) && start + i < length; i++) {
      const dip = depth * Math.exp(-(i / SR) / 0.07);
      g[start + i] = Math.min(g[start + i], 1 - dip);
    }
  }
  return g;
};

const applyGain = (x: Stereo, g: Float32Array | number) => {
  for (let i = 0; i < x.l.length; i++) {
    const v = typeof g === 'number' ? g : g[i];
    x.l[i] *= v;
    x.r[i] *= v;
  }
  return x;
};
const addInto = (out: Stereo, x: Stereo, gain = 1) => {
  for (let i = 0; i < out.l.length && i < x.l.length; i++) {
    out.l[i] += x.l[i] * gain;
    out.r[i] += x.r[i] * gain;
  }
};

// Bus compressor (peak-detecting, stereo-linked) then a soft clip.
const master = (x: Stereo, thresholdDb = -14, ratio = 3) => {
  const threshold = 10 ** (thresholdDb / 20);
  const attack = Math.exp(-1 / (0.008 * SR));
  const release = Math.exp(-1 / (0.15 * SR));
  let env = 0;
  for (let i = 0; i < x.l.length; i++) {
    const level = Math.max(Math.abs(x.l[i]), Math.abs(x.r[i]));
    env = level > env ? attack * env + (1 - attack) * level : release * env + (1 - release) * level;
    const gain = env > threshold ? (threshold * (env / threshold) ** (1 / ratio)) / env : 1;
    x.l[i] = Math.tanh(x.l[i] * gain * 1.1);
    x.r[i] = Math.tanh(x.r[i] * gain * 1.1);
  }
  return x;
};

// ---------- the engine ----------

export const makeMusic = (req: MusicRequest): MusicResult => {
  const warnings: string[] = [];
  const style = resolveStyle(req.palette, req.tempo, req.style);
  if (req.style && !STYLES[req.style]) warnings.push(`Unknown style "${req.style}"; using ${style.id}.`);
  const [lo, hi] = style.bpm[req.tempo];
  if (req.bpm < lo - 4 || req.bpm > hi + 4) warnings.push(`${req.bpm} BPM is outside ${style.id}'s ${req.tempo} range ${lo}–${hi}: set data score.bpm inside it.`);
  const roles: Record<string, Role> = TEMPLATE_ROLES[req.palette] ?? {};
  const song = compose({timeline: req.timeline, style, bpm: req.bpm, key: req.key, tempo: req.tempo, roles, seed: req.seed});
  const seconds = song.duration + 1.2;
  const length = Math.ceil(seconds * SR);

  // Backend per track.
  const env = (process.env.MUSIC_BACKEND as Backend | 'auto' | undefined) ?? req.backend ?? 'auto';
  const have = available();
  const kit = req.kit ?? process.env.MUSIC_KIT ? loadKit((req.kit ?? process.env.MUSIC_KIT)!) : null;
  if ((req.kit ?? process.env.MUSIC_KIT) && !kit) warnings.push(`Sample kit "${req.kit ?? process.env.MUSIC_KIT}" not found in shared-assets/music-kits/.`);
  const sf2 = have.soundfont && have.fluidsynth && env !== 'synth' && env !== 'samples' ? have.soundfont : null;
  if (env === 'soundfont' && !sf2) warnings.push('MUSIC_BACKEND=soundfont but no SoundFont or FluidSynth was found; using the built-in synth.');

  const midiTracks: MidiTrack[] = [];
  const stems: Partial<Record<TrackRole, Stereo>> = {};
  const used: Partial<Record<TrackRole, string>> = {};

  // Drums
  const drumMidi: MidiTrack = {name: 'drums', channel: 9, program: style.drumKit.gm, notes: song.hits.map((h) => ({t: h.t, dur: 0.1, pitch: GM_DRUM[h.drum], vel: h.vel}))};
  midiTracks.push(drumMidi);
  const kitHasDrums = kit && Object.keys(kit.drums).length > 0;
  if (kitHasDrums && env !== 'synth' && env !== 'soundfont') {
    stems.drums = renderDrums(song.hits, seconds, kit);
    used.drums = `samples (${kit!.name})`;
  } else if (sf2) {
    stems.drums = renderSoundfont(drumMidi, song.bpm, sf2, req.workDir, seconds);
    used.drums = `soundfont (kit ${style.drumKit.gm})`;
  } else {
    stems.drums = renderDrums(song.hits, seconds, null);
    used.drums = 'synth';
  }

  // Pitched tracks
  ROLES.forEach((role, i) => {
    const notes = song.notes[role];
    const instrument = style.instruments[role];
    const midi: MidiTrack = {name: role, channel: i, program: instrument.gm, notes};
    midiTracks.push(midi);
    if (!notes.length) return;
    const samples = kit?.pitched[role];
    if (samples?.length && env !== 'synth' && env !== 'soundfont') {
      stems[role] = renderSamplesPitched(notes, samples, seconds, PAN[role]);
      used[role] = `samples (${kit!.name})`;
    } else if (sf2) {
      stems[role] = renderSoundfont(midi, song.bpm, sf2, req.workDir, seconds);
      used[role] = `soundfont (GM ${instrument.gm})`;
    } else {
      stems[role] = renderSynth(notes, instrument, seconds, PAN[role]);
      used[role] = `synth (${instrument.synth})`;
    }
  });

  // Mix
  const kicks = song.hits.filter((h) => h.drum === 'kick').map((h) => h.t);
  const duck = sidechain(length, kicks, style.mix.sidechain);
  const leadUnderVoice = windowGain(length, song.voice, 0.65, 0.08);
  const bus = S.stereo(seconds);
  const sends = S.stereo(seconds);
  for (const [role, stem] of Object.entries(stems) as [TrackRole, Stereo][]) {
    applyGain(stem, style.mix[role]);
    if (role !== 'drums') applyGain(stem, duck);
    if (role === 'lead' || role === 'arp') applyGain(stem, leadUnderVoice);
    if (req.stemsDir) {
      mkdirSync(req.stemsDir, {recursive: true});
      writeWav(join(req.stemsDir, `${role}.wav`), stem);
    }
    addInto(bus, stem);
    addInto(sends, stem, SEND[role] * (style.mix.reverb / 0.2));
  }
  addInto(bus, reverb(sends), 1);

  // Transitions: risers, impacts, rolls (always synthesized: they are sound design, not instruments).
  for (const fx of song.fx) {
    if (fx.kind === 'riser') S.add(bus, S.riser(fx.dur), fx.t, 0.25, 0);
    if (fx.kind === 'roll') S.add(bus, S.snareRoll(fx.dur, 60 / song.bpm), fx.t, 0.3, 0);
    if (fx.kind === 'impact') S.add(bus, S.lowPass(S.kick().map((v, i) => v * (1 + 0.5 * Math.exp(-i / 2000))), 400), fx.t, 0.5, 0);
  }

  // The voice pocket: under narration the music's 0.8–3.5 kHz band (where speech is understood) dips.
  const band = {l: S.bandPass(Float32Array.from(bus.l), 800, 3500), r: S.bandPass(Float32Array.from(bus.r), 800, 3500)};
  const pocket = windowGain(length, song.voice, 0.5, 0.08);
  for (let i = 0; i < length; i++) {
    const cut = 1 - pocket[i];
    bus.l[i] -= band.l[i] * cut;
    bus.r[i] -= band.r[i] * cut;
  }
  // Silences stay silent (reverb tails included).
  applyGain(bus, windowGain(length, song.silences, 0.97, 0.03));
  S.highPass(bus.l, 35);
  S.highPass(bus.r, 35);
  master(bus);
  // Fade the ring-out.
  const fadeFrom = Math.round((song.duration + 0.4) * SR);
  for (let i = fadeFrom; i < length; i++) {
    const g = Math.max(0, 1 - (i - fadeFrom) / (length - fadeFrom));
    bus.l[i] *= g;
    bus.r[i] *= g;
  }
  rmSync(req.workDir, {recursive: true, force: true});

  const midi = writeMidi(midiTracks, song.bpm);
  const report = [
    `# Music: ${req.seed}`,
    '',
    `| | |`,
    `|---|---|`,
    `| Style | ${style.id} — ${style.label} |`,
    `| Tempo | ${song.bpm} BPM (${req.tempo} pace range ${lo}–${hi}), key ${song.key} ${style.mode} |`,
    `| Length | ${song.duration.toFixed(1)} s, ${Math.ceil(song.duration / ((60 / song.bpm) * 4))} bars |`,
    `| Backends | ${Object.entries(used).map(([role, how]) => `${role}: ${how}`).join('; ')} |`,
    `| Notes | ${ROLES.map((role) => `${role} ${song.notes[role].length}`).join(', ')}, drum hits ${song.hits.length} |`,
    '',
    '| Time | Scene | Role | Energy |',
    '|---|---|---|---|',
    ...song.sections.map((s) => `| ${s.from.toFixed(1)}–${s.to.toFixed(1)} s | ${s.kind} | ${s.role} | ${'▮'.repeat(s.energy)}${'▯'.repeat(4 - s.energy)} |`),
    '',
    ...(warnings.length ? ['Warnings:', ...warnings.map((w) => `- ${w}`), ''] : []),
  ].join('\n');
  return {mix: bus, song, midi, report, warnings};
};

export const writeMusicFiles = (dir: string, base: string, result: MusicResult) => {
  mkdirSync(dir, {recursive: true});
  writeFileSync(join(dir, `${base}.mid`), result.midi);
  writeFileSync(join(dir, `${base}_music.md`), result.report, 'utf8');
};

export const tempoOf = tempoForBpm;
