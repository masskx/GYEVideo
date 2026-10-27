import {episodeConfig} from './data/episodeConfig';
import {generatedVoiceTimeline} from './data/generatedVoiceTimeline';

export const SENTENCE_FPS = episodeConfig.fps ?? 30;
export const SENTENCE_WIDTH = episodeConfig.width ?? 1080;
export const SENTENCE_HEIGHT = episodeConfig.height ?? 1920;

export const secondsToFrames = (seconds: number, fps = SENTENCE_FPS) => Math.round(seconds * fps);

const getSegment = (id: string) => generatedVoiceTimeline.find((segment) => segment.id === id);
const startOf = (id: string, fallback: number) => getSegment(id)?.start ?? fallback;
const endOf = (id: string, fallback: number) => getSegment(id)?.end ?? fallback;

const lastVoiceEnd = generatedVoiceTimeline.at(-1)?.end ?? episodeConfig.durationTargetSeconds ?? 40;
const computedOutroStart = Math.max(lastVoiceEnd - 1.15, 0);

export const SENTENCE_TIMELINE = {
  width: SENTENCE_WIDTH,
  height: SENTENCE_HEIGHT,
  fps: SENTENCE_FPS,
  durationSeconds: Math.max(episodeConfig.durationTargetSeconds ?? 40, lastVoiceEnd + 1.2),
  openingStart: startOf('trap-1', startOf('cold-open-scene', startOf('cold-open', 0))),
  openingEnd: endOf('trap-2', endOf('slap', endOf('conflict', endOf('meme-pain', 4.8)))),
  conflictStart: startOf('slap', startOf('why-1', startOf('conflict', startOf('meme-pain', 1.2)))),
  conflictEnd: endOf('slap', endOf('why-1', endOf('conflict', endOf('meme-pain', 4.8)))),
  wrongStart: startOf('trap-2', startOf('wrong-expression', startOf('earworm-reveal', 4.8))),
  wrongEnd: endOf('slap', endOf('why-wrong', endOf('chorus-1', 10.2))),
  rescueStart: startOf('why-1', startOf('fix-1', startOf('rescue-line', startOf('meaning-hit', 10.2)))),
  rescueEnd: endOf('fix-2', endOf('meaning', endOf('meaning-hit', 16.2))),
  reuseStart: startOf('scene', startOf('reuse-scene', startOf('micro-scene-1', 16.2))),
  reuseEnd: endOf('scene', endOf('rescue-line-repeat', endOf('chorus-2', 27.4))),
  lockStart: startOf('lock', startOf('memory-lock', startOf('summary', 27.4))),
  lockEnd: endOf('lock', endOf('memory-lock', endOf('summary', 33.4))),
  outroStart: startOf('outro', computedOutroStart),
  hookStart: startOf('trap-1', startOf('cold-open-scene', startOf('cold-open', 0))),
  hookEnd: endOf('trap-2', endOf('slap', endOf('conflict', endOf('meme-pain', 4.8)))),
  painStart: startOf('slap', startOf('why-1', startOf('conflict', startOf('meme-pain', 1.2)))),
  painEnd: endOf('slap', endOf('why-1', endOf('conflict', endOf('meme-pain', 4.8)))),
  earwormStart: startOf('why-1', startOf('fix-1', startOf('rescue-line', startOf('earworm-reveal', 4.8)))),
  patternStart: startOf('why-1', startOf('fix-1', startOf('rescue-line', startOf('pattern-reveal', 4.8)))),
  patternEnd: endOf('fix-2', endOf('rescue-line', endOf('chorus-1', 13.2))),
  meaningStart: startOf('why-1', startOf('meaning', startOf('meaning-hit', 13.2))),
  formulaStart: startOf('why-1', startOf('meaning', startOf('meaning-hit', 13.2))),
  formulaEnd: endOf('why-2', endOf('meaning', endOf('meaning-hit', 16.2))),
  example1Start: startOf('scene', startOf('reuse-scene', startOf('micro-scene-1', 16.2))),
  example1End: endOf('scene', endOf('reuse-scene', endOf('micro-scene-1', 23.8))),
  example2Start: startOf('lock', startOf('rescue-line-repeat', startOf('micro-scene-2', 23.8))),
  example2End: endOf('lock', endOf('rescue-line-repeat', endOf('micro-scene-2', 27.4))),
  example3Start: startOf('lock', startOf('rescue-line-repeat', startOf('example-3', 23.8))),
  example3End: endOf('lock', endOf('rescue-line-repeat', endOf('example-3-breakdown', 27.4))),
  scene2End: endOf('scene', endOf('rescue-line-repeat', endOf('micro-scene-2', 27.4))),
  drillStart: startOf('speed-drill', startOf('drill', 27.4)),
  drillEnd: endOf('speed-drill', endOf('drill', 27.4)),
  summaryStart: startOf('memory-lock', startOf('summary', 27.4)),
  summaryEnd: endOf('memory-lock', endOf('summary', 33.4)),
} as const;

export const getActiveVoiceSegment = (frame: number) => {
  const second = frame / SENTENCE_FPS;
  return (
    generatedVoiceTimeline.find((segment) => second >= segment.start && second < segment.end) ??
    generatedVoiceTimeline.at(-1)
  );
};

const exampleIds = ['scene', 'reuse-scene', 'lock'];

export const getActiveExampleIndex = (frame: number) => {
  const active = getActiveVoiceSegment(frame);
  if (!active) {
    return -1;
  }

  const baseId = active.id.replace('-breakdown', '');
  return exampleIds.findIndex((id) => id === baseId);
};

export const getBreakdownState = (frame: number) => {
  const active = getActiveVoiceSegment(frame);
  return active?.id.endsWith('-breakdown') ?? false;
};

export const sentenceCutFlashFrames = generatedVoiceTimeline.map((segment) => secondsToFrames(segment.start));
export const sentenceDurationFrames = secondsToFrames(SENTENCE_TIMELINE.durationSeconds);
