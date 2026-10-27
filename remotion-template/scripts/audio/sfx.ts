import type {SfxId} from '../../src/core/timeline';
import {bandPass, bell, clap, cowbell, crash, highPass, hz, lowPass, mix, noise, rand, render, snareRoll} from './synth';

// The house sound-effect kit, one generator per SfxId. Files land in public/sfx/<id>.mp3.

const scribble = (length: number) => {
  // Marker on a whiteboard: band-passed noise with a jittery stroke rhythm.
  const buf = render(length, (t) => {
    const strokes = 0.5 + 0.5 * Math.sin(2 * Math.PI * 7 * t + Math.sin(2 * Math.PI * 1.3 * t) * 3);
    return noise() * strokes * Math.min(1, t / 0.02) * Math.min(1, (length - t) / 0.04);
  });
  return bandPass(buf, 1800, 6500);
};

export const SFX: Record<SfxId, () => Float32Array> = {
  pop: () => render(0.12, (t) => Math.sin(2 * Math.PI * (480 + 900 * (t / 0.06)) * t) * Math.exp(-t * 38)),
  stamp: () => {
    const boom = render(0.55, (t) => {
      const phase = 2 * Math.PI * (45 * t + ((180 - 45) / 12) * (1 - Math.exp(-12 * t)));
      return Math.tanh(2.2 * Math.sin(phase) * Math.exp(-t * 7));
    });
    const click = highPass(render(0.03, (t) => noise() * Math.exp(-t * 200)), 2000);
    const crackle = render(0.25, (t) => (rand() < 0.02 ? noise() : 0) * Math.exp(-t * 14));
    return mix([boom, 1], [click, 0.9], [crackle, 0.6]);
  },
  'stamp-small': () =>
    render(0.3, (t) => {
      const phase = 2 * Math.PI * (80 * t + ((260 - 80) / 16) * (1 - Math.exp(-16 * t)));
      return Math.tanh(1.6 * Math.sin(phase) * Math.exp(-t * 12)) + (t < 0.01 ? noise() * 0.5 : 0);
    }),
  shutter: () =>
    highPass(
      render(0.16, (t) => {
        const c1 = t < 0.012 ? noise() * Math.exp(-t * 300) : 0;
        const c2 = t > 0.07 && t < 0.085 ? noise() * Math.exp(-(t - 0.07) * 300) : 0;
        return c1 + c2 * 0.8;
      }),
      1200,
    ),
  whoosh: () => {
    const length = 0.42;
    const buf = render(length, (t) => noise() * Math.sin(Math.PI * (t / length)) ** 2);
    return lowPass(buf, (i) => 300 + 3800 * Math.sin(Math.PI * (i / buf.length)));
  },
  paper: () => highPass(lowPass(render(0.32, (t) => noise() * Math.exp(-t * 9) * (0.6 + 0.4 * Math.sin(2 * Math.PI * 38 * t))), 5200), 700),
  type: () => mix([highPass(render(0.02, (t) => noise() * Math.exp(-t * 400)), 2500), 1], [render(0.03, (t) => Math.sin(2 * Math.PI * 1800 * t) * Math.exp(-t * 160)), 0.3]),
  pin: () => render(0.12, (t) => Math.sin(2 * Math.PI * 900 * t) * Math.exp(-t * 60) * 0.6 + Math.sin(2 * Math.PI * 220 * t) * Math.exp(-t * 30) + (t < 0.004 ? noise() : 0)),
  bell: () => {
    const out = new Float32Array(Math.ceil(1.8 * 44100));
    [74, 78, 81, 86].forEach((midi, k) => {
      const note = bell(midi, 1.4);
      const at = Math.round(k * 0.09 * 44100);
      for (let i = 0; i < note.length && at + i < out.length; i++) {
        out[at + i] += note[i] * 0.7;
      }
    });
    return out;
  },
  // game show
  boing: () =>
    render(0.45, (t) => {
      const f = 180 + 260 * Math.exp(-t * 6) * (1 + 0.3 * Math.sin(2 * Math.PI * 14 * t));
      return Math.sin(2 * Math.PI * f * t) * Math.exp(-t * 6);
    }),
  ding: () => mix([bell(88, 1.0), 0.8], [bell(95, 0.8), 0.35]),
  drumroll: () => snareRoll(0.9, 0.5),
  cowbell: () => cowbell(),
  crash: () => crash(),
  buzzer: () => lowPass(render(0.45, (t) => Math.sign(Math.sin(2 * Math.PI * 110 * t)) * 0.6 * Math.min(1, (0.45 - t) / 0.05)), 1800),
  // whiteboard
  marker: () => scribble(0.55),
  'marker-short': () => scribble(0.18),
  cap: () => mix([highPass(render(0.015, (t) => noise() * Math.exp(-t * 500)), 3000), 1], [render(0.05, (t) => Math.sin(2 * Math.PI * 1400 * t) * Math.exp(-t * 90)), 0.4]),
  magnet: () => mix([render(0.12, (t) => Math.sin(2 * Math.PI * 140 * t) * Math.exp(-t * 40)), 1], [highPass(render(0.01, (t) => noise()), 2500), 0.6]),
  erase: () => bandPass(render(0.6, (t) => noise() * (0.6 + 0.4 * Math.sin(2 * Math.PI * 9 * t)) * Math.min(1, t / 0.05) * Math.min(1, (0.6 - t) / 0.1)), 300, 2500),
  // picture book
  page: () => {
    const length = 0.5;
    const buf = render(length, (t) => noise() * Math.sin(Math.PI * (t / length)) ** 1.5 * (0.7 + 0.3 * Math.sin(2 * Math.PI * 23 * t)));
    return bandPass(buf, 600, 7000);
  },
  chime: () => mix([bell(84, 1.2), 0.7], [render(1.2, (t) => (t > 0.12 ? 1 : 0) * Math.sin(2 * Math.PI * hz(91) * t) * Math.exp(-Math.max(0, t - 0.12) * 3)), 0.5]),
  sparkle: () => {
    const out = new Float32Array(Math.ceil(0.8 * 44100));
    [96, 100, 103, 108].forEach((midi, k) => {
      const note = render(0.4, (t) => Math.sin(2 * Math.PI * hz(midi) * t) * Math.exp(-t * 12));
      const at = Math.round(k * 0.05 * 44100);
      for (let i = 0; i < note.length && at + i < out.length; i++) {
        out[at + i] += note[i] * 0.5;
      }
    });
    return out;
  },
  // caption news
  hit: () =>
    mix(
      [render(0.6, (t) => Math.tanh(1.8 * Math.sin(2 * Math.PI * (40 * t + (60 / 10) * (1 - Math.exp(-10 * t)))) * Math.exp(-t * 6))), 1],
      [highPass(render(0.04, (t) => noise() * Math.exp(-t * 120)), 1500), 0.7],
      [clap(), 0.25],
    ),
  tick: () => render(0.03, (t) => Math.sin(2 * Math.PI * 1500 * t) * Math.exp(-t * 200)),
  swoosh: () => {
    const length = 0.3;
    const buf = render(length, (t) => noise() * Math.sin(Math.PI * (t / length)) ** 2);
    return highPass(lowPass(buf, (i) => 1200 + 6000 * (i / buf.length)), 500);
  },
};
