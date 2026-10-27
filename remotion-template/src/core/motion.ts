// Easing and motion helpers shared by every template. Everything is a pure function of time,
// so any frame renders the same alone, in any order, on any worker.

export const clamp01 = (x: number) => Math.min(1, Math.max(0, x));

export const backOut = (x: number, s = 1.9) => {
  const p = clamp01(x) - 1;
  return 1 + (s + 1) * p * p * p + s * p * p;
};

export const easeOut = (x: number) => 1 - (1 - clamp01(x)) ** 3;

export const easeIn = (x: number) => clamp01(x) ** 3;

export const easeInOut = (x: number) => {
  const p = clamp01(x);
  return p < 0.5 ? 4 * p * p * p : 1 - (-2 * p + 2) ** 3 / 2;
};

export const progress = (t: number, from: number, length: number) => clamp01((t - from) / length);

export const lerp = (a: number, b: number, p: number) => a + (b - a) * p;

// Enter with overshoot (never a slow fade): rise from below and scale up from small.
export const pop = (t: number, at: number, length = 0.38) => {
  const p = (t - at) / length;
  if (p <= 0) {
    return {visible: false, scale: 0, y: 0};
  }
  const e = backOut(p);
  return {visible: true, scale: 0.35 + 0.65 * e, y: (1 - e) * 70};
};

// Volume-preserving landing squash: scale(1/sq, sq) with a damped cosine.
export const squash = (t: number, at: number, amount = 0.16) => {
  const dt = t - at;
  if (dt < 0) {
    return {sx: 1, sy: 1};
  }
  const sq = 1 - amount * Math.exp(-dt * 9) * Math.cos(dt * 30);
  return {sx: 1 / sq, sy: sq};
};

// Parabolic hop on every beat (height in px), phase-shifted for crowds.
export const hop = (t: number, beat: number, height: number, phase = 0) => {
  const p = (((t / beat + phase) % 1) + 1) % 1;
  return -4 * height * p * (1 - p);
};

// Zoom punch that decays in ~0.16 s after a hit.
export const punch = (t: number, at: number, amount = 0.03) => {
  const dt = t - at;
  return dt < 0 || dt > 0.3 ? 0 : amount * Math.exp(-dt * 18);
};

export const mulberry = (seed: number) => () => {
  seed |= 0;
  seed = (seed + 0x6d2b79f5) | 0;
  let r = Math.imul(seed ^ (seed >>> 15), 1 | seed);
  r = (r + Math.imul(r ^ (r >>> 7), 61 | r)) ^ r;
  return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
};
