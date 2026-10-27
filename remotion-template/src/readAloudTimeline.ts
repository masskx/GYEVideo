import {episodeConfig} from './data/episodeConfig';
import {generatedVoiceTimeline} from './data/generatedVoiceTimeline';
import {readingPassage} from './data/readingPassage';

export const READ_ALOUD_FPS = episodeConfig.fps ?? 30;
export const READ_ALOUD_WIDTH = episodeConfig.width ?? 960;
export const READ_ALOUD_HEIGHT = episodeConfig.height ?? 720;

export const readAloudSecondsToFrames = (seconds: number, fps = READ_ALOUD_FPS) =>
  Math.round(seconds * fps);

const lastVoiceEnd = generatedVoiceTimeline.at(-1)?.end ?? episodeConfig.durationTargetSeconds ?? 30;

export const READ_ALOUD_TIMELINE = {
  width: READ_ALOUD_WIDTH,
  height: READ_ALOUD_HEIGHT,
  fps: READ_ALOUD_FPS,
  durationSeconds: Math.max(episodeConfig.durationTargetSeconds ?? 30, lastVoiceEnd + 0.45),
} as const;

export const readAloudDurationFrames = readAloudSecondsToFrames(
  READ_ALOUD_TIMELINE.durationSeconds,
);

export const getActiveReadingSegment = (frame: number) => {
  const second = frame / READ_ALOUD_FPS;
  return (
    generatedVoiceTimeline.find((segment) => second >= segment.start && second < segment.end) ??
    generatedVoiceTimeline.at(-1)
  );
};

export const getWordById = (id: string) =>
  readingPassage.targetWords.find((word) => word.id === id);

export const getActiveReadingWord = (frame: number) => {
  const active = getActiveReadingSegment(frame);
  if (!active) {
    return readingPassage.targetWords[0];
  }

  if (active.id.startsWith('word-')) {
    return getWordById(active.id.replace('word-', '')) ?? readingPassage.targetWords[0];
  }

  const second = frame / READ_ALOUD_FPS;
  const previousWordSegment = generatedVoiceTimeline
    .filter((segment) => segment.id.startsWith('word-') && segment.start <= second)
    .at(-1);

  if (previousWordSegment) {
    return getWordById(previousWordSegment.id.replace('word-', '')) ?? readingPassage.targetWords[0];
  }

  return readingPassage.targetWords[0];
};

export const getRevealedWordIds = (frame: number) => {
  const second = frame / READ_ALOUD_FPS;
  return new Set(
    generatedVoiceTimeline
      .filter((segment) => segment.id.startsWith('word-') && segment.start <= second)
      .map((segment) => segment.id.replace('word-', '')),
  );
};

export const getActiveWordIndex = (frame: number) => {
  const activeWord = getActiveReadingWord(frame);
  return Math.max(
    0,
    readingPassage.targetWords.findIndex((word) => word.id === activeWord.id),
  );
};

export const getReadProgress = (frame: number) => {
  const activeIndex = getActiveWordIndex(frame);
  const byWords = (activeIndex + 1) / Math.max(readingPassage.targetWords.length, 1);
  const byTime = Math.min(1, Math.max(0, frame / READ_ALOUD_FPS / READ_ALOUD_TIMELINE.durationSeconds));
  return Math.max(byWords * 0.92, byTime);
};

export const getSegmentProgress = (frame: number) => {
  const active = getActiveReadingSegment(frame);
  if (!active) {
    return 0;
  }

  const second = frame / READ_ALOUD_FPS;
  return Math.min(1, Math.max(0, (second - active.start) / Math.max(active.end - active.start, 0.001)));
};

export const getChallengeProgressText = (frame: number) => {
  const progress = getReadProgress(frame);
  if (progress < 0.25) {
    return '凌晨两点不闭眼......10%';
  }

  if (progress < 0.5) {
    return '早八人强撑中......40%';
  }

  if (progress < 0.75) {
    return '绩点还没崩......70%';
  }

  return '单词快记住了......100%';
};
