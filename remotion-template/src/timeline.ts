import {generatedVoiceTimeline} from './data/generatedVoiceTimeline';

export const FPS = 30;
export const WIDTH = 960;
export const HEIGHT = 720;

export const secondsToFrames = (seconds: number) => Math.round(seconds * FPS);

const getSegment = (id: string) => generatedVoiceTimeline.find((segment) => segment.id === id);
const startOf = (id: string, fallback: number) => getSegment(id)?.start ?? fallback;
const endOf = (id: string, fallback: number) => getSegment(id)?.end ?? fallback;
const findSegmentByPrefix = (prefix: string) =>
  generatedVoiceTimeline.find((segment) => segment.id.startsWith(prefix));

const lastVoiceEnd = generatedVoiceTimeline.at(-1)?.end ?? 24;
const rootRevealSegment =
  findSegmentByPrefix('root-') ?? getSegment('pattern-reveal') ?? getSegment('same-root');
const wordSegments = generatedVoiceTimeline.filter((segment) => segment.id.startsWith('word-'));
const firstWordSegment = wordSegments[0];
const lastWordSegment = wordSegments.at(-1);
const gridSegment = getSegment('grid-connect');
const summarySegment = getSegment('summary');
const outroSegment = getSegment('outro');

export const TIMELINE = {
  width: WIDTH,
  height: HEIGHT,
  fps: FPS,
  durationSeconds: Math.max(24, lastVoiceEnd + 0.45),
  hookStart: startOf('hook', 0),
  hookEnd: endOf('hook', 0.8),
  flashWordsStart: startOf('flash-words', 0.8),
  flashWordsEnd: endOf('flash-words', 1.6),
  freezeStart: startOf('same-root', 1.6),
  freezeEnd: endOf('same-root', 2.5),
  rootStart: rootRevealSegment?.start ?? 2.5,
  rootEnd: rootRevealSegment?.end ?? 4,
  wordsStart: firstWordSegment?.start ?? 4,
  wordsEnd: lastWordSegment?.end ?? 15,
  gridStart: gridSegment?.start ?? ((lastWordSegment?.end ?? 15) + 0.2),
  gridEnd: gridSegment?.end ?? 19,
  summaryStart: summarySegment?.start ?? ((gridSegment?.end ?? 19) + 0.1),
  summaryEnd: summarySegment?.end ?? 22,
  holdStart: outroSegment?.start ?? ((summarySegment?.end ?? 22) + 0.1),
} as const;

const wordSegmentIds = wordSegments.map((segment) => segment.id);

export const WORD_TIMINGS = wordSegmentIds.map((id, index) => {
  const segment = getSegment(id);
  const start = segment?.start ?? TIMELINE.wordsStart + index * 1.35;
  const end = segment?.end ?? start + 1.35;

  return {
    id,
    index,
    start,
    end,
    startFrame: secondsToFrames(start),
    peakFrame: secondsToFrames(start + 0.22),
    endFrame: secondsToFrames(end),
  };
});

export const getActiveVoiceSegment = (frame: number) => {
  const second = frame / FPS;
  return (
    generatedVoiceTimeline.find((segment) => second >= segment.start && second < segment.end) ??
    generatedVoiceTimeline.at(-1)
  );
};

export const getActiveWordIndex = (frame: number): number => {
  const active = getActiveVoiceSegment(frame);
  if (!active?.id.startsWith('word-')) {
    return -1;
  }

  return WORD_TIMINGS.findIndex((timing) => timing.id === active.id);
};

export const getSegmentStartFrame = (id: string, fallback = 0) =>
  secondsToFrames(startOf(id, fallback));

export const getSegmentEndFrame = (id: string, fallback = 0) => secondsToFrames(endOf(id, fallback));

export const gridStartFrame = secondsToFrames(TIMELINE.gridStart);
export const holdStartFrame = secondsToFrames(TIMELINE.holdStart);
export const durationFrames = secondsToFrames(TIMELINE.durationSeconds);
export const cutFlashFrames = [
  secondsToFrames(TIMELINE.flashWordsStart),
  secondsToFrames(TIMELINE.freezeStart),
  secondsToFrames(TIMELINE.rootStart),
  secondsToFrames(TIMELINE.wordsStart),
  ...WORD_TIMINGS.map((timing) => timing.startFrame),
  secondsToFrames(TIMELINE.gridStart),
  secondsToFrames(TIMELINE.summaryStart),
  secondsToFrames(TIMELINE.holdStart),
];

export const FULL_TIMELINE = {
  ...TIMELINE,
  durationFrames,
  gridStartFrame,
  holdStartFrame,
};

export {FULL_TIMELINE as TIMELINE_FRAMES};
