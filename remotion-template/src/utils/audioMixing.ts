import {interpolate} from 'remotion';
import {episodeConfig} from '../data/episodeConfig';
import {generatedVoiceTimeline} from '../data/generatedVoiceTimeline';

const clamp = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'} as const;
const getDurationSeconds = () =>
  Math.max(episodeConfig.durationTargetSeconds ?? 24, (generatedVoiceTimeline.at(-1)?.end ?? 24) + 0.6);

export const getVoiceDuckFactor = (frame: number, fps: number): number => {
  const second = frame / fps;
  const isVoiceActive = generatedVoiceTimeline.some(
    (segment) => second >= segment.start && second < segment.end,
  );

  return isVoiceActive ? episodeConfig.bgmDuckingFactor ?? 0.65 : 1;
};

export const getFinalFadeFactor = (frame: number, fps: number): number => {
  const durationSeconds = getDurationSeconds();
  const fadeStart = Math.max(0, durationSeconds - 1);
  const second = frame / fps;

  return interpolate(second, [fadeStart, durationSeconds], [1, 0], clamp);
};

export const getBgmVolume = ({
  frame,
  fps,
  baseVolume,
}: {
  frame: number;
  fps: number;
  baseVolume: number;
}) => {
  return baseVolume * getVoiceDuckFactor(frame, fps) * getFinalFadeFactor(frame, fps);
};
