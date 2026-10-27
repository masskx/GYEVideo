// Small synthesis toolkit for SFX and scores. Everything is generated in code (nothing sampled),
// so there is nothing to license. Deterministic: the noise generator is seeded.

export const SR = 44100;

export type Stereo = {l: Float32Array; r: Float32Array};
export const stereo = (seconds: number): Stereo => ({l: new Float32Array(Math.ceil(seconds * SR)), r: new Float32Array(Math.ceil(seconds * SR))});

const mulberry = (seed: number) => () => {
  seed |= 0;
  seed = (seed + 0x6d2b79f5) | 0;
  let r = Math.imul(seed ^ (seed >>> 15), 1 | seed);
  r = (r + Math.imul(r ^ (r >>> 7), 61 | r)) ^ r;
  return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
};
export const rand = mulberry(60);
export const noise = () => rand() * 2 - 1;

export const hz = (midi: number) => 440 * 2 ** ((midi - 69) / 12);

// Adds a mono sound into a stereo buffer at time `at` with gain and pan (-1..1).
export const add = (out: Stereo, sound: Float32Array, at: number, gain = 1, pan = 0) => {
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

export const render = (seconds: number, fn: (t: number, i: number) => number) => {
  const n = Math.ceil(seconds * SR);
  const buf = new Float32Array(n);
  for (let i = 0; i < n; i++) {
    buf[i] = fn(i / SR, i);
  }
  return buf;
};

export const mix = (...parts: [Float32Array, number][]) => {
  const length = Math.max(...parts.map(([buf]) => buf.length));
  const out = new Float32Array(length);
  for (const [buf, gain] of parts) {
    for (let i = 0; i < buf.length; i++) {
      out[i] += buf[i] * gain;
    }
  }
  return out;
};

export const lowPass = (buf: Float32Array, cutoff: number | ((i: number) => number)) => {
  let y = 0;
  for (let i = 0; i < buf.length; i++) {
    const fc = typeof cutoff === 'number' ? cutoff : cutoff(i);
    const a = 1 - Math.exp((-2 * Math.PI * fc) / SR);
    y += a * (buf[i] - y);
    buf[i] = y;
  }
  return buf;
};

export const highPass = (buf: Float32Array, cutoff: number) => {
  const low = lowPass(Float32Array.from(buf), cutoff);
  for (let i = 0; i < buf.length; i++) {
    buf[i] -= low[i];
  }
  return buf;
};

export const bandPass = (buf: Float32Array, low: number, high: number) => highPass(lowPass(buf, high), low);

export const normalize = (buf: Float32Array, peak: number) => {
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

// ---------- drums ----------

export const kick = () =>
  render(0.35, (t) => {
    const phase = 2 * Math.PI * (45 * t + ((110 - 45) / 28) * (1 - Math.exp(-28 * t)));
    return Math.tanh(1.8 * Math.sin(phase) * Math.exp(-t * 9));
  });

export const snare = () => {
  const body = render(0.18, (t) => Math.sin(2 * Math.PI * 190 * t) * Math.exp(-t * 28) * 0.6);
  const hiss = highPass(render(0.18, (t) => noise() * Math.exp(-t * 20)), 1800);
  return body.map((v, i) => v + hiss[i] * 0.9);
};

export const clap = () => {
  const buf = render(0.2, (t) => {
    const bursts = [0, 0.011, 0.022].reduce((sum, b) => sum + (t >= b ? Math.exp(-(t - b) * 160) : 0), 0);
    return noise() * (bursts * 0.7 + Math.exp(-t * 24) * 0.35);
  });
  return highPass(lowPass(buf, 3500), 900);
};

export const hat = (open = false) => highPass(render(open ? 0.2 : 0.05, (t) => noise() * Math.exp(-t * (open ? 18 : 90))), 7000);

export const shaker = () => bandPass(render(0.07, (t) => noise() * Math.sin(Math.PI * Math.min(1, t / 0.07)) ** 2), 4000, 9000);

export const snap = () => highPass(lowPass(render(0.06, (t) => noise() * Math.exp(-t * 110)), 4200), 1500);

export const cowbell = () =>
  bandPass(
    render(0.3, (t) => (Math.sign(Math.sin(2 * Math.PI * 562 * t)) * 0.5 + Math.sign(Math.sin(2 * Math.PI * 845 * t)) * 0.5) * Math.exp(-t * 14)),
    500,
    3000,
  );

export const crash = () => highPass(render(1.6, (t) => noise() * Math.exp(-t * 2.6)), 3500);

export const woodblock = (pitch = 1200) => render(0.08, (t) => Math.sin(2 * Math.PI * pitch * t) * Math.exp(-t * 60));

export const snareRoll = (length: number, beat: number) => {
  const out = new Float32Array(Math.ceil(length * SR));
  const hit = snare();
  const steps = Math.floor(length / (beat / 4));
  for (let s = 0; s < steps; s++) {
    const at = Math.round(s * (beat / 4) * SR);
    const g = 0.15 + 0.6 * (s / steps);
    for (let i = 0; i < hit.length && at + i < out.length; i++) {
      out[at + i] += hit[i] * g;
    }
  }
  return out;
};

export const riser = (length: number) => {
  const buf = render(length, (t) => noise() * (t / length) ** 2);
  return lowPass(buf, (i) => 300 + 5000 * (i / buf.length) ** 2);
};

// ---------- pitched ----------

// Marimba-like pluck: fundamental + a fast-decaying 4× partial.
export const marimba = (midi: number, length = 0.7) => {
  const f = hz(midi);
  return render(length, (t) => {
    const attack = Math.min(1, t / 0.002);
    return attack * (Math.sin(2 * Math.PI * f * t) * Math.exp(-t * 6) + 0.35 * Math.sin(2 * Math.PI * 4 * f * t) * Math.exp(-t * 22));
  });
};

// Kalimba: softer, with an inharmonic tine partial.
export const kalimba = (midi: number, length = 1.0) => {
  const f = hz(midi);
  return render(length, (t) => {
    const attack = Math.min(1, t / 0.003);
    return attack * (Math.sin(2 * Math.PI * f * t) * Math.exp(-t * 4) + 0.18 * Math.sin(2 * Math.PI * 5.4 * f * t) * Math.exp(-t * 30));
  });
};

// Music box: bright, high, short.
export const musicBox = (midi: number, length = 0.9) => {
  const f = hz(midi);
  return render(length, (t) => [1, 3.0, 5.2].reduce((sum, ratio, k) => sum + Math.sin(2 * Math.PI * f * ratio * t) * Math.exp(-t * (5 + k * 7)) * [1, 0.3, 0.12][k], 0));
};

// Soft square-ish bass with a 2nd harmonic so it speaks on phone speakers.
export const bass = (midi: number, length: number) => {
  const f = hz(midi);
  return render(length + 0.05, (t) => {
    const env = Math.min(1, t / 0.005) * Math.exp(-t * 3) * (t > length ? Math.exp(-(t - length) * 60) : 1);
    let v = 0;
    [1, 3, 5, 7].forEach((h, k) => (v += Math.sin(2 * Math.PI * f * h * t) * [1, 0.22, 0.09, 0.04][k]));
    v += 0.3 * Math.sin(2 * Math.PI * f * 2 * t);
    return v * env;
  });
};

// Slap bass: quick pitch blip down onto the note.
export const slapBass = (midi: number, length: number) => {
  const f = hz(midi);
  return render(length + 0.04, (t) => {
    const env = Math.min(1, t / 0.002) * Math.exp(-t * 5) * (t > length ? Math.exp(-(t - length) * 80) : 1);
    const bend = f * (1 + 0.5 * Math.exp(-t * 60));
    return Math.tanh(2 * (Math.sin(2 * Math.PI * bend * t) + 0.4 * Math.sin(4 * Math.PI * bend * t))) * env * 0.7;
  });
};

export const subBass = (midi: number, length: number) => {
  const f = hz(midi);
  return render(length, (t) => Math.sin(2 * Math.PI * f * t) * Math.min(1, t / 0.02) * Math.min(1, (length - t) / 0.05) + 0.25 * Math.sin(4 * Math.PI * f * t) * Math.min(1, t / 0.02));
};

// Plucked string (Karplus-Strong).
export const pizz = (midi: number, length = 0.45, brightness = 2400) => {
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
  return lowPass(out, brightness);
};

export const bell = (midi: number, length = 1.4) => {
  const f = hz(midi);
  return render(length, (t) => [1, 2.76, 5.4].reduce((sum, ratio, k) => sum + Math.sin(2 * Math.PI * f * ratio * t) * Math.exp(-t * (2.2 + k * 2.5)) * [1, 0.45, 0.2][k], 0));
};

// Detuned saw with a closing filter: a brass stab.
export const brass = (midis: number[], length = 0.35) => {
  const buf = render(length + 0.1, (t) => {
    let v = 0;
    for (const midi of midis) {
      for (const detune of [-0.006, 0, 0.006]) {
        const f = hz(midi) * (1 + detune);
        v += ((t * f) % 1) * 2 - 1;
      }
    }
    const env = Math.min(1, t / 0.01) * (t < length ? 1 : Math.exp(-(t - length) * 40));
    return (v / (midis.length * 3)) * env;
  });
  return lowPass(buf, (i) => 900 + 3500 * Math.exp(-(i / SR) * 8));
};

// Square lead with a little vibrato.
export const squareLead = (midi: number, length: number) => {
  const f = hz(midi);
  return lowPass(
    render(length + 0.05, (t) => {
      const vib = 1 + 0.004 * Math.sin(2 * Math.PI * 5.5 * t) * Math.min(1, t / 0.15);
      const env = Math.min(1, t / 0.008) * (t < length ? 1 - 0.3 * (t / length) : Math.exp(-(t - length) * 50));
      return Math.sign(Math.sin(2 * Math.PI * f * vib * t)) * env * 0.5;
    }),
    3200,
  );
};

// Tight synth pulse (news-desk bed).
export const pulse = (midi: number, length: number) => {
  const f = hz(midi);
  return lowPass(
    render(length, (t) => {
      const duty = ((t * f) % 1) < 0.3 ? 1 : -1;
      return duty * Math.exp(-t * 14) * 0.6;
    }),
    2200,
  );
};

// Warm pad: several detuned sines per note, slow attack.
export const pad = (midis: number[], length: number) =>
  render(length, (t) => {
    let v = 0;
    for (const midi of midis) {
      for (const detune of [-0.004, 0.004]) {
        v += Math.sin(2 * Math.PI * hz(midi) * (1 + detune) * t);
      }
    }
    const env = Math.min(1, t / 0.4) * Math.min(1, (length - t) / 0.4);
    return (v / (midis.length * 2)) * env;
  });
