import type {SceneBase, Timeline} from '../../src/core/timeline';
import {DrumId, Role, Style, Tempo} from './styles';
import {bassRoot, chordTones, Degree, KeyName, parseProgression, scaleNotes, seeded, voiceLead} from './theory';

// Composition: the video's timeline in, a song out (note and drum events per track, in seconds).
// Sections follow the scenes (a scene kind has a role: hook, verse, drop …), energy follows the role
// and the pace, transitions get fills, crashes and risers, silences stay silent, and the melody is a
// seeded motif that repeats so the episode has a hook you can hum.

export type NoteEvent = {t: number; dur: number; pitch: number; vel: number};
export type DrumHit = {t: number; drum: DrumId; vel: number};
export type TrackRole = 'drums' | 'bass' | 'chords' | 'pad' | 'arp' | 'lead';
export type FxEvent = {t: number; kind: 'riser' | 'impact' | 'roll' | 'stinger'; dur: number};
export type Section = {from: number; to: number; role: Role; energy: number; kind: string};

export type Song = {
  style: Style;
  bpm: number;
  key: KeyName;
  tempo: Tempo;
  duration: number; // the video's length; the music rings on for one more second
  step: number; // seconds per 16th
  sections: Section[];
  notes: Record<Exclude<TrackRole, 'drums'>, NoteEvent[]>;
  hits: DrumHit[];
  fx: FxEvent[];
  voice: {from: number; to: number}[];
  silences: {from: number; to: number}[];
  seed: string;
};

export type ComposeInput = {
  timeline: Timeline<SceneBase>;
  style: Style;
  bpm: number;
  key: KeyName;
  tempo: Tempo;
  roles: Record<string, Role>;
  seed: string;
};

const VEL: Record<string, number> = {X: 118, x: 100, o: 78, '.': 50};

// Energy (1–4) of a role at each pace: a contour, so builds lead into drops and breaks breathe.
const ENERGY: Record<Tempo, Record<Role, number>> = {
  slow: {intro: 1, hook: 2, verse: 1, build: 2, drop: 3, break: 1, payoff: 2, outro: 1},
  mid: {intro: 2, hook: 3, verse: 2, build: 3, drop: 4, break: 1, payoff: 3, outro: 2},
  fast: {intro: 3, hook: 4, verse: 3, build: 3, drop: 4, break: 1, payoff: 4, outro: 3},
};
const energyFor = (role: Role, tempo: Tempo, index: number) => {
  const variety = role === 'verse' && index % 2 === 1 ? 1 : 0; // every other verse lifts
  return Math.max(1, Math.min(4, ENERGY[tempo][role] + variety));
};

export const compose = ({timeline, style, bpm, key, tempo, roles, seed}: ComposeInput): Song => {
  const rand = seeded(seed);
  const beat = 60 / bpm;
  const step = beat / 4;
  const duration = timeline.duration;

  // ---------- sections ----------
  let verseIndex = 0;
  const sections: Section[] = timeline.scenes.map((scene, index) => {
    const role: Role = index === 0 && tempo === 'fast' && (roles[scene.scene.kind] ?? 'verse') === 'intro' ? 'hook' : (roles[scene.scene.kind] ?? 'verse');
    const energy = energyFor(role, tempo, role === 'verse' ? verseIndex++ : 0);
    return {from: scene.start, to: scene.end, role, energy, kind: scene.scene.kind};
  });
  const sectionAt = (t: number) => sections.find((s) => t >= s.from && t < s.to) ?? sections[sections.length - 1];
  const silences = timeline.silences;
  const inSilence = (t: number, pad = 0) => silences.some((s) => t >= s.from - pad && t < s.to);
  const energyAt = (t: number) => (inSilence(t) ? 0 : sectionAt(t).energy);
  const voice = timeline.lines.map((line) => ({from: line.start, to: line.end}));

  // ---------- harmony: one chord per bar, the lift progression in hooks, drops and payoffs ----------
  const main = parseProgression(style.progressions.main);
  const lift = parseProgression(style.progressions.lift);
  const barSeconds = beat * 4;
  const bars = Math.ceil((duration + 1) / barSeconds);
  const chordOfBar: Degree[] = [];
  const voicings: number[][] = [];
  let previous: number[] | null = null;
  for (let bar = 0; bar < bars; bar++) {
    const role = sectionAt(bar * barSeconds + 0.01).role;
    const progression = role === 'hook' || role === 'drop' || role === 'payoff' ? lift : main;
    const chord = progression[bar % progression.length];
    chordOfBar.push(chord);
    const voicing = voiceLead(chordTones(key, style.mode, chord), previous);
    voicings.push(voicing);
    previous = voicing;
  }
  const tonesOfBar = (bar: number) => chordTones(key, style.mode, chordOfBar[Math.min(bar, bars - 1)]);

  const notes: Song['notes'] = {bass: [], chords: [], pad: [], arp: [], lead: []};
  const hits: DrumHit[] = [];
  const fx: FxEvent[] = [];
  const end = duration - 0.15;
  const human = (amount: number) => (rand() * 2 - 1) * amount;
  const push = (track: keyof Song['notes'], t: number, dur: number, pitch: number, vel: number) => {
    if (t < 0 || t >= end || inSilence(t, 0.05)) return;
    notes[track].push({t: Math.max(0, t + human(0.004)), dur: Math.min(dur, end - t + 0.4), pitch, vel: Math.max(1, Math.min(127, Math.round(vel + human(6))))});
  };
  const hit = (t: number, drum: DrumId, vel: number) => {
    if (t < 0 || t >= end || inSilence(t, 0.05)) return;
    hits.push({t: Math.max(0, t + human(0.003)), drum, vel: Math.max(1, Math.min(127, Math.round(vel + human(5))))});
  };
  const swung = (s: number) => s * step + (s % 2 === 1 ? style.swing * step : 0);

  // Scene changes snapped to the 16th grid, for fills and crashes.
  const boundaries = sections.slice(1).map((s) => Math.round(s.from / step));

  // ---------- drums ----------
  const totalSteps = Math.ceil(end / step);
  for (let s = 0; s < totalSteps; s++) {
    const t = swung(s);
    const energy = energyAt(s * step + 0.001);
    if (energy < 1) continue;
    const nextBoundary = boundaries.find((b) => b > s);
    const filling = nextBoundary !== undefined && nextBoundary - s <= 4 && energy >= 2;
    const pattern = filling ? style.fill : style.drums[Math.min(4, energy) as 1 | 2 | 3 | 4];
    for (const [drum, text] of Object.entries(pattern) as [DrumId, string][]) {
      const char = filling ? text[4 - (nextBoundary! - s)] : text[s % text.length];
      if (char && char !== '-') hit(t, drum, VEL[char] ?? 90);
    }
    if (filling) {
      // Keep the hats and kick of the groove under a fill.
      const groove = style.drums[Math.min(4, energy) as 1 | 2 | 3 | 4];
      for (const drum of ['hat', 'kick'] as DrumId[]) {
        if (style.fill[drum]) continue;
        const char = groove[drum]?.[s % (groove[drum]?.length ?? 16)];
        if (char && char !== '-') hit(t, drum, (VEL[char] ?? 90) * 0.9);
      }
    }
  }
  for (const section of sections.slice(1)) {
    if (section.energy >= 3 && !inSilence(section.from)) {
      hit(section.from, 'crash', 105);
      hit(section.from, 'kick', 120);
    }
    if (section.role === 'drop' || section.role === 'payoff') {
      fx.push({t: section.from - barSeconds, kind: 'riser', dur: barSeconds});
      fx.push({t: section.from, kind: 'impact', dur: 1.2});
    }
  }
  for (const silence of silences) {
    fx.push({t: silence.from - beat * 2, kind: 'roll', dur: beat * 2});
    fx.push({t: silence.from - beat * 2, kind: 'riser', dur: beat * 2});
  }

  // ---------- bass ----------
  const kickSteps = (style.drums[3].kick ?? 'X-------X-------').split('').map((c, i) => (c !== '-' ? i : -1)).filter((i) => i >= 0);
  for (let bar = 0; bar < bars; bar++) {
    const t0 = bar * barSeconds;
    const tones = tonesOfBar(bar);
    const root = bassRoot(tones, 36);
    const fifth = root + 7;
    const nextRoot = bassRoot(tonesOfBar(bar + 1), 36);
    const energy = (st: number) => energyAt(t0 + st * step + 0.001);
    const at = (st: number) => t0 + swung(st) - swung(0) + 0;
    switch (style.bass) {
      case 'root8':
        for (let i = 0; i < 16; i += 2) if (energy(i) >= 2) push('bass', at(i), step * 1.8, energy(i) >= 4 && i % 4 === 2 ? root + 12 : root, i % 4 === 0 ? 100 : 82);
        break;
      case 'offbeat':
        for (let i = 2; i < 16; i += 4) if (energy(i) >= 2) push('bass', at(i), step * 1.6, i === 6 || i === 14 ? root + 12 : root, 100);
        if (energy(0) >= 4) push('bass', at(0), step, root, 90);
        break;
      case 'walking': {
        const walk = [root, tones.length > 2 ? bassRoot([tones[1]], root) : root + 4, fifth, nextRoot + (nextRoot > root ? -1 : 1)];
        for (let q = 0; q < 4; q++) if (energy(q * 4) >= 2) push('bass', at(q * 4), beat * 0.9, walk[q], q === 0 ? 100 : 84);
        break;
      }
      case 'sub808':
        kickSteps.forEach((st, i) => {
          if (energy(st) < 2) return;
          const next = kickSteps[i + 1] ?? 16;
          push('bass', at(st), (next - st) * step * 0.95, i === kickSteps.length - 1 && rand() < 0.4 ? root + 12 : root, 110);
        });
        break;
      case 'pop':
        for (const [st, n, len] of [
          [0, root, 3],
          [6, root, 1.5],
          [8, fifth, 2],
          [14, root + 12, 1.5],
        ] as const)
          if (energy(st) >= 2) push('bass', at(st), step * len, n, st === 0 ? 105 : 85);
        break;
      case 'pulse16':
        for (let i = 0; i < 16; i += energy(i) >= 3 ? 1 : 2) if (energy(i) >= 2) push('bass', at(i), step * 0.9, root, i % 4 === 0 ? 100 : 70);
        break;
      case 'halfnote':
        if (energy(0) >= 2) push('bass', at(0), beat * 1.9, root, 95);
        if (energy(8) >= 2) push('bass', at(8), beat * 1.9, rand() < 0.5 ? fifth : root, 85);
        break;
    }
  }

  // ---------- chords and pad ----------
  for (let bar = 0; bar < bars; bar++) {
    const t0 = bar * barSeconds;
    const voicing = voicings[bar];
    const energy = (st: number) => energyAt(t0 + st * step + 0.001);
    const chordHit = (st: number, len: number, vel: number) => {
      if (energy(st) < 1) return;
      for (const pitch of voicing) push('chords', t0 + swung(st), len, pitch, vel * (energy(st) >= 2 ? 1 : 0.7));
    };
    switch (style.comp) {
      case 'block':
        chordHit(0, barSeconds * 0.98, 80);
        break;
      case 'stabs':
        for (const st of [2, 6, 10, 14]) chordHit(st, step * 1.3, 92);
        break;
      case 'pop-piano':
        for (const [st, len] of [
          [0, 3],
          [3, 3],
          [6, 2],
          [8, 3],
          [11, 3],
          [14, 2],
        ] as const)
          chordHit(st, step * len, st % 4 === 0 ? 90 : 72);
        break;
      case 'charleston':
        chordHit(0, beat * 1.4, 88);
        chordHit(6, beat * 0.45, 78);
        break;
      case 'strum':
        for (const [st, vel] of [
          [0, 96],
          [4, 88],
          [6, 64],
          [10, 66],
          [12, 90],
          [14, 64],
        ] as const)
          voicing.forEach((pitch, i) => energy(st) >= 1 && push('chords', t0 + swung(st) + i * 0.012, step * 1.8, pitch, vel - i * 3));
        break;
      case 'pulse8':
        for (let st = 0; st < 16; st += 2) chordHit(st, step * 1.2, st % 4 === 0 ? 85 : 70);
        break;
      case 'none':
        break;
    }
    if (energy(0) >= 1) for (const pitch of voicing) push('pad', t0, barSeconds, pitch, energy(0) >= 3 ? 66 : 58);
  }

  // ---------- arpeggio (energy 4, or builds and drops at energy 3) ----------
  if (style.arp !== 'none') {
    for (let bar = 0; bar < bars; bar++) {
      const t0 = bar * barSeconds;
      const voicing = voicings[bar];
      const pool = [...voicing, ...voicing.map((n) => n + 12)];
      const order = style.arp === 'up16' ? pool : [...pool, ...pool.slice(1, -1).reverse()];
      const every = style.arp === 'up16' ? 1 : 2;
      for (let st = 0, i = 0; st < 16; st += every, i++) {
        const section = sectionAt(t0 + st * step + 0.001);
        const e = energyAt(t0 + st * step + 0.001);
        if (e >= 4 || (e >= 3 && (section.role === 'build' || section.role === 'drop'))) push('arp', t0 + swung(st), step * every * 0.9, order[i % order.length] + 12, 70);
      }
    }
  }

  // ---------- melody: a two-bar motif, repeated and fitted to the chords ----------
  const scale = scaleNotes(key, style.mode, style.melody.low, style.melody.high);
  const onsets = style.melody.rhythm.split('').map((c, i) => (c !== '-' ? i : -1)).filter((i) => i >= 0);
  const motif: number[] = [];
  let walk = 0;
  for (let i = 0; i < onsets.length; i++) {
    walk += i === 0 ? 0 : [-2, -1, -1, 1, 1, 2, 0, 3][Math.floor(rand() * 8)];
    walk = Math.max(-4, Math.min(5, walk));
    motif.push(walk);
  }
  const nearest = (pitch: number, pool: number[]) => pool.reduce((best, n) => (Math.abs(n - pitch) < Math.abs(best - pitch) ? n : best), pool[0]);
  const centre = scale[Math.floor(scale.length / 2)];
  for (let phrase = 0; phrase * 2 < bars; phrase++) {
    const varied = phrase % 4 === 3;
    onsets.forEach((st32, i) => {
      const bar = phrase * 2 + Math.floor(st32 / 16);
      const t = bar * barSeconds + swung(st32 % 16);
      const section = sectionAt(t + 0.001);
      const e = energyAt(t + 0.001);
      const sings = e >= 3 && (section.role !== 'verse' || e >= 4) && section.role !== 'break';
      if (!sings) return;
      const degree = varied && i >= onsets.length - 3 ? motif[i] + Math.round(rand() * 4 - 2) : motif[i];
      let pitch = scale[Math.max(0, Math.min(scale.length - 1, scale.indexOf(centre) + degree))];
      if (st32 % 8 === 0) {
        const chordPitches = scale.filter((n) => tonesOfBar(bar).some((tone) => ((tone - n) % 12 + 12) % 12 === 0));
        if (chordPitches.length) pitch = nearest(pitch, chordPitches);
      }
      const next = onsets[i + 1] ?? 32;
      push('lead', t, Math.min(beat, (next - st32) * step * 0.95), pitch, st32 % 8 === 0 ? 96 : 80);
    });
  }

  // ---------- ending ----------
  const last = voicings[Math.min(bars - 1, Math.floor(end / barSeconds))];
  fx.push({t: duration - 0.9, kind: 'stinger', dur: 1.8});
  for (const pitch of last) notes.pad.push({t: duration - 0.9, dur: 1.8, pitch, vel: 80});
  notes.lead.push({t: duration - 0.9, dur: 1.6, pitch: nearest(centre, scale.filter((n) => ((n - last[0]) % 12 + 12) % 12 === 0)) ?? centre, vel: 90});
  hits.push({t: duration - 0.9, drum: 'crash', vel: 100}, {t: duration - 0.9, drum: 'kick', vel: 115});

  return {style, bpm, key, tempo, duration, step, sections, notes, hits, fx, voice, silences, seed};
};
