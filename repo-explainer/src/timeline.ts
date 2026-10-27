import generated from './timeline.json';

export type LineTiming = {
  file: string;
  caption: string;
  start: number;
  duration: number;
};

export type SceneTiming = {
  id: string;
  start: number;
  duration: number;
  lines: LineTiming[];
};

export type Timeline = {
  fps: number;
  total: number;
  scenes: SceneTiming[];
};

// Written by scripts/prepare-media.py from the measured narration durations.
export const TIMELINE = generated as Timeline;
export const FPS = TIMELINE.fps;
export const durationFrames = Math.ceil(TIMELINE.total * FPS);

export const toFrames = (seconds: number) => Math.round(seconds * FPS);

// Frame (scene-local) at which line `index` starts, offset by a fraction of its length.
export const lineFrame = (scene: SceneTiming, index: number, fraction = 0) => {
  const line = scene.lines[Math.min(index, scene.lines.length - 1)];
  return toFrames(line.start + line.duration * fraction);
};

export const activeLine = (scene: SceneTiming, localSeconds: number) =>
  scene.lines.find((line) => localSeconds >= line.start && localSeconds < line.start + line.duration + 0.22);
