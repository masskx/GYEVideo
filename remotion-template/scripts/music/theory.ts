// Music theory for the score engine: keys, modes, chords by scale degree, progressions, voice leading.
// Pure functions on MIDI note numbers (60 = middle C).

export type KeyName = 'C' | 'Db' | 'D' | 'Eb' | 'E' | 'F' | 'Gb' | 'G' | 'Ab' | 'A' | 'Bb' | 'B';
export type ModeName = 'major' | 'minor' | 'dorian' | 'mixolydian';

export const KEY_PC: Record<KeyName, number> = {C: 0, Db: 1, D: 2, Eb: 3, E: 4, F: 5, Gb: 6, G: 7, Ab: 8, A: 9, Bb: 10, B: 11};

export const MODES: Record<ModeName, number[]> = {
  major: [0, 2, 4, 5, 7, 9, 11],
  minor: [0, 2, 3, 5, 7, 8, 10],
  dorian: [0, 2, 3, 5, 7, 9, 10],
  mixolydian: [0, 2, 4, 5, 7, 9, 10],
};

// A chord as a scale degree (1–7), optional seventh, optional borrowed root shift (e.g. ♭VII in major).
export type Degree = {degree: number; seventh?: boolean; shift?: number};

// Parse "I V vi IV", "i bVII bVI V", "ii7 V7 Imaj7": case is ignored (the mode decides the quality),
// "b" lowers the root a semitone, a trailing 7 adds the seventh.
export const parseProgression = (text: string): Degree[] =>
  text
    .trim()
    .split(/\s+/)
    .map((token) => {
      const shift = token.startsWith('b') ? -1 : token.startsWith('#') ? 1 : 0;
      const body = token.replace(/^[b#]/, '');
      const roman = body.match(/^[ivIV]+/)?.[0] ?? 'I';
      const value: Record<string, number> = {i: 1, ii: 2, iii: 3, iv: 4, v: 5, vi: 6, vii: 7};
      return {degree: value[roman.toLowerCase()] ?? 1, seventh: /7/.test(body), shift};
    });

// Pitch classes of a chord built by stacking scale thirds on a degree (diatonic quality).
export const chordTones = (key: KeyName, mode: ModeName, chord: Degree): number[] => {
  const scale = MODES[mode];
  const root = chord.degree - 1;
  const steps = chord.seventh ? [0, 2, 4, 6] : [0, 2, 4];
  const tonic = KEY_PC[key];
  return steps.map((step) => {
    const index = root + step;
    const octave = Math.floor(index / 7) * 12;
    return tonic + scale[index % 7] + octave + (chord.shift ?? 0);
  });
};

// The chord placed so its notes sit closest to the previous voicing (smooth voice leading),
// inside [low, high]. Without a previous voicing the chord is centred on `centre`.
export const voiceLead = (tones: number[], previous: number[] | null, centre = 62, low = 52, high = 76): number[] => {
  const pcs = tones.map((t) => ((t % 12) + 12) % 12);
  const candidates: number[][] = [];
  for (let inversion = 0; inversion < pcs.length; inversion++) {
    const ordered = [...pcs.slice(inversion), ...pcs.slice(0, inversion)];
    for (let base = low - 12; base <= high; base++) {
      if (base % 12 !== ordered[0]) continue;
      const voicing = [base];
      for (const pc of ordered.slice(1)) {
        let note = voicing[voicing.length - 1] + 1;
        while (((note % 12) + 12) % 12 !== pc) note++;
        voicing.push(note);
      }
      if (voicing[0] >= low && voicing[voicing.length - 1] <= high) candidates.push(voicing);
    }
  }
  const target = previous ?? [centre - 4, centre, centre + 3];
  const cost = (v: number[]) => {
    const avg = (xs: number[]) => xs.reduce((a, b) => a + b, 0) / xs.length;
    const movement = previous ? v.reduce((sum, n, i) => sum + Math.abs(n - (previous[Math.min(i, previous.length - 1)] ?? n)), 0) : 0;
    return movement + Math.abs(avg(v) - avg(target)) * (previous ? 0.5 : 2);
  };
  return candidates.sort((a, b) => cost(a) - cost(b))[0] ?? tones.map((t) => t + 60);
};

// Notes of the scale across a range (for melodies and passing tones).
export const scaleNotes = (key: KeyName, mode: ModeName, low: number, high: number) => {
  const pcs = new Set(MODES[mode].map((step) => (KEY_PC[key] + step) % 12));
  const notes: number[] = [];
  for (let n = low; n <= high; n++) if (pcs.has(n % 12)) notes.push(n);
  return notes;
};

// The bass note of a chord in a given octave (root position).
export const bassRoot = (tones: number[], low = 33) => {
  let note = ((tones[0] % 12) + 12) % 12;
  while (note < low) note += 12;
  return note;
};

// Seeded random numbers: the same episode always gets the same music.
export const seeded = (seedText: string) => {
  let seed = 2166136261;
  for (const char of seedText) seed = Math.imul(seed ^ char.charCodeAt(0), 16777619);
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let r = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    r = (r + Math.imul(r ^ (r >>> 7), 61 | r)) ^ r;
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
};
