import {sentenceInfo} from './data/sentencePattern';

export type OpeningType =
  | 'pain-slam'
  | 'wrong-expression-roast'
  | 'mini-drama'
  | 'follow-me-drill'
  | 'shock-contrast'
  | 'chat-cold-open'
  | 'wrong-english-cold-open'
  | 'mini-conflict'
  | 'native-fix'
  | 'comment-bait';

export type BeatStyle =
  | 'chat-thread'
  | 'rescue-drop'
  | 'roast-then-fix'
  | 'conflict-callback'
  | 'message-resend';

export type RhythmType = 'chant' | 'dialogue' | 'meme' | 'story' | 'upgrade' | 'drill';

type SentenceInfoLike = typeof sentenceInfo;

type SentenceInfoLoose = SentenceInfoLike & {
  socialProof?: string;
  commentPrompt?: string;
  creatorNote?: string;
  visualPlan?: SentenceInfoLike['visualPlan'] & {
    openingShell?: string;
    endingShell?: string;
    lineArtStyle?: string;
  };
};

const rawInfo = sentenceInfo as SentenceInfoLoose;

const clean = (value: string | undefined) => (value ?? '').replace(/\s+/g, ' ').trim();

const clip = (value: string, limit: number) => {
  if (value.length <= limit) {
    return value;
  }

  return `${value.slice(0, limit).trim()}...`;
};

const splitPrimaryLine = (value: string | undefined) =>
  clean(value)
    .split(/\s*\/\s*|(?<=[.!?])\s+/)
    .map((line) => clean(line))
    .filter(Boolean)[0] ?? '';

const hashString = (value: string) => {
  let hash = 0;

  for (const char of value) {
    hash = (hash * 131 + char.charCodeAt(0)) >>> 0;
  }

  return hash;
};

const inferOpeningType = (): OpeningType => {
  if (rawInfo.visualPlan?.openingType) {
    return rawInfo.visualPlan.openingType;
  }

  if (clean(rawInfo.scene?.setting).includes('\u804a\u5929')) {
    return 'chat-cold-open';
  }

  if (clean(rawInfo.wrongExpression?.text)) {
    return 'wrong-english-cold-open';
  }

  return 'mini-conflict';
};

const inferBeatStyle = (): BeatStyle => {
  if (rawInfo.visualPlan?.beatStyle) {
    return rawInfo.visualPlan.beatStyle;
  }

  if ((rawInfo.reuseScenes?.length ?? 0) > 0) {
    return 'message-resend';
  }

  if (clean(rawInfo.wrongExpression?.whyItFails)) {
    return 'roast-then-fix';
  }

  return 'chat-thread';
};

const inferRhythmType = (): RhythmType => {
  const beatStyle = inferBeatStyle();

  if (beatStyle === 'chat-thread' || beatStyle === 'message-resend') {
    return 'dialogue';
  }

  if (beatStyle === 'roast-then-fix') {
    return 'meme';
  }

  if (beatStyle === 'rescue-drop') {
    return 'upgrade';
  }

  return 'story';
};

const rescueLine = clean(rawInfo.rescueExpression?.en) || clean(rawInfo.pattern);
const heroRescueLine = splitPrimaryLine(rawInfo.rescueExpression?.en) || splitPrimaryLine(rawInfo.pattern) || rescueLine;
const rescueZh = clean(rawInfo.rescueExpression?.zh) || clean(rawInfo.coreMeaning);
const wrongFocusLine =
  splitPrimaryLine(rawInfo.wrongExpression?.text) ||
  splitPrimaryLine(rawInfo.patternLines?.[0]) ||
  splitPrimaryLine(rawInfo.pattern) ||
  heroRescueLine;
const openingType = inferOpeningType();
const beatStyle = inferBeatStyle();
const rhythmType = inferRhythmType();
const chorusLines = [heroRescueLine, rescueZh].filter(Boolean);
const variantSeed = hashString(
  [rawInfo.episodeId, rawInfo.title, wrongFocusLine, heroRescueLine, clean(rawInfo.useCase)].join('|'),
);

const pickBySeed = <T,>(values: T[], offset = 0) => values[(variantSeed + offset) % values.length];

const inferOpeningShell = () =>
  rawInfo.visualPlan?.openingShell ||
  pickBySeed(['warning-stamp', 'accusation-board', 'global-split'] as const);

const inferEndingShell = () =>
  rawInfo.visualPlan?.endingShell ||
  pickBySeed(['split-verdict', 'vertical-lock', 'checklist-punch'] as const, 1);

const inferLineArtStyle = () =>
  rawInfo.visualPlan?.lineArtStyle ||
  pickBySeed(['ghost-wire', 'scribble-orbit', 'contour-burst'] as const, 2);

const inferSocialProof = () =>
  pickBySeed(
    [
      `\u4f60\u5927\u6982\u7387\u4e5f\u628a ${clip(wrongFocusLine, 24)} \u8fd9\u6837\u8131\u53e3\u800c\u51fa\u8fc7\u3002`,
      `\u8fd9\u79cd\u4e2d\u5f0f\u76f4\u7ffb\uff0c\u771f\u7684\u5f88\u5bb9\u6613\u60f3\u90fd\u4e0d\u60f3\u5c31\u8bf4\u51fa\u6765\u3002`,
      `\u4f60\u4e0d\u662f\u4e0d\u4f1a\u82f1\u8bed\uff0c\u4f60\u53ea\u662f\u88ab\u4e2d\u6587\u8111\u56de\u8def\u5e26\u504f\u4e86\u3002`,
    ],
    3,
  );

const inferCommentPrompt = () =>
  pickBySeed(
    [
      '\u4f60\u8fd8\u60f3\u770b\u54ea\u53e5\u4e00\u5f00\u53e3\u5c31\u9732\u9985\u7684\u4e2d\u5f0f\u76f4\u7ffb\uff1f',
      '\u8bc4\u8bba\u533a\u4e22\u4e00\u53e5\u4f60\u6700\u5e38\u8bf4\u9519\u7684\u82f1\u6587\uff0c\u6211\u7ee7\u7eed\u62c6\u3002',
      '\u4e0b\u4e00\u4e2a\u4f60\u6700\u60f3\u7ea0\u6b63\u7684\u8131\u53e3\u76f4\u7ffb\u662f\u54ea\u4e2a\uff1f',
    ],
    5,
  );

const inferCreatorNote = () =>
  pickBySeed(
    [
      '\u5148\u522b\u9010\u5b57\u642c\u4e2d\u6587\uff0c\u5148\u60f3\u8001\u5916\u5e73\u65f6\u4f1a\u4e0d\u4f1a\u771f\u8fd9\u4e48\u8bf4\u3002',
      '\u522b\u628a\u4e2d\u6587\u8bcd\u5e8f\u786c\u5957\u8fdb\u82f1\u6587\uff0c\u81ea\u7136\u611f\u6bd4\u5b57\u9762\u5bf9\u5e94\u66f4\u91cd\u8981\u3002',
      '\u4f1a\u8bf4\u4e0d\u7b49\u4e8e\u5730\u9053\uff0c\u5148\u7528\u4ed6\u4eec\u771f\u7684\u4f1a\u8bf4\u7684\u90a3\u4e00\u53e5\u3002',
    ],
    7,
  );

export const sentenceVideoMeta = {
  contentType: clean(rawInfo.contentType) || 'chat-rescue',
  sentencePattern: clean(rawInfo.sentencePattern) || clean(rawInfo.pattern),
  earwormLine: rescueLine,
  heroRescueLine,
  wrongFocusLine,
  chorusLines,
  chinesePainPoint: clean(rawInfo.chinesePainPoint) || clean(rawInfo.coreMeaning),
  entertainmentHook: clean(rawInfo.entertainmentHook) || clean(rawInfo.title),
  memorySound: clean(rawInfo.memorySound) || rescueLine,
  sceneMetaphor: clean(rawInfo.sceneMetaphor) || clean(rawInfo.useCase),
  scene: rawInfo.scene,
  wrongExpression: rawInfo.wrongExpression,
  rescueExpression: rawInfo.rescueExpression,
  reuseScenes: rawInfo.reuseScenes ?? [],
  visualPlan: rawInfo.visualPlan,
  naturalnessNote: clean(rawInfo.naturalnessNote) || clean(rawInfo.rescueExpression?.naturalnessNote),
  socialProof: clean(rawInfo.socialProof) || inferSocialProof(),
  commentPrompt: clean(rawInfo.commentPrompt) || inferCommentPrompt(),
  creatorNote: clean(rawInfo.creatorNote) || inferCreatorNote(),
  openingShell: inferOpeningShell(),
  endingShell: inferEndingShell(),
  lineArtStyle: inferLineArtStyle(),
  openingType,
  beatStyle,
  rhythmType,
  avoidSimilarityTags: rawInfo.avoidSimilarityTags ?? [],
  variantSeed,
};

export const splitRescueLine = () =>
  (sentenceVideoMeta.rescueExpression?.en || sentenceVideoMeta.memorySound)
    .split(/(?<=[.!?])\s+/)
    .map((line) => clean(line))
    .filter(Boolean);

export const splitEarwormLine = splitRescueLine;
