import {interpolate, spring} from 'remotion';

const clamp = {
  extrapolateLeft: 'clamp',
  extrapolateRight: 'clamp',
} as const;

export const slamIn = ({
  frame,
  start,
  fps,
  overshoot = 1.18,
}: {
  frame: number;
  start: number;
  fps: number;
  overshoot?: number;
}) => {
  const local = frame - start;
  const bounce = spring({
    frame: local,
    fps,
    config: {damping: 12, stiffness: 230, mass: 0.72},
  });
  const opacity = interpolate(local, [-2, 2, 9], [0, 1, 1], clamp);
  const scale = interpolate(local, [0, 5, 11], [1.62, overshoot, 1], clamp);
  const y = interpolate(local, [0, 9], [42, 0], clamp);

  return {
    opacity,
    scale: scale * (0.98 + bounce * 0.02),
    translateY: y,
  };
};

export const punchZoom = ({
  frame,
  start,
  intensity = 0.18,
  duration = 14,
}: {
  frame: number;
  start: number;
  intensity?: number;
  duration?: number;
}) => {
  const local = frame - start;
  return interpolate(local, [0, 3, duration], [1 + intensity, 0.96, 1], clamp);
};

export const shake = ({
  frame,
  start,
  duration = 10,
  intensity = 8,
}: {
  frame: number;
  start: number;
  duration?: number;
  intensity?: number;
}) => {
  const local = frame - start;
  const envelope = interpolate(local, [0, duration], [1, 0], clamp);
  if (local < 0 || local > duration) {
    return {x: 0, y: 0, rotate: 0};
  }

  return {
    x: Math.sin(local * 2.7) * intensity * envelope,
    y: Math.cos(local * 3.1) * intensity * 0.45 * envelope,
    rotate: Math.sin(local * 2.3) * 0.45 * envelope,
  };
};

export const beatPulse = ({
  frame,
  start = 0,
  bpm = 132,
  fps = 30,
  amount = 0.025,
}: {
  frame: number;
  start?: number;
  bpm?: number;
  fps?: number;
  amount?: number;
}) => {
  const beat = ((frame - start) / fps) * (bpm / 60);
  return 1 + Math.max(0, Math.sin(beat * Math.PI * 2)) * amount;
};

export const flashOpacity = ({
  frame,
  starts,
  duration = 3,
}: {
  frame: number;
  starts: number[];
  duration?: number;
}) => {
  return starts.reduce((max, start) => {
    const local = frame - start;
    if (local < 0 || local > duration) {
      return max;
    }
    const value = interpolate(local, [0, duration], [0.72, 0], clamp);
    return Math.max(max, value);
  }, 0);
};

export const typewriterReveal = ({
  text,
  frame,
  start,
  duration,
}: {
  text: string;
  frame: number;
  start: number;
  duration: number;
}) => {
  const chars = Math.floor(interpolate(frame - start, [0, duration], [0, text.length], clamp));
  return text.slice(0, chars);
};

export const highlightSweep = ({
  frame,
  start,
  duration = 18,
}: {
  frame: number;
  start: number;
  duration?: number;
}) => {
  const local = frame - start;
  return {
    opacity: interpolate(local, [0, 3, duration - 4, duration], [0, 1, 1, 0], clamp),
    x: interpolate(local, [0, duration], [-110, 110], clamp),
  };
};

export const quickCut = ({
  frame,
  start,
  duration = 7,
}: {
  frame: number;
  start: number;
  duration?: number;
}) => {
  return interpolate(frame - start, [0, 2, duration], [0, 1, 1], clamp);
};
