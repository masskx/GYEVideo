export type HookType =
  | 'misconception'
  | 'stop_hard_memorizing'
  | 'three_second_challenge'
  | 'mistake_correction'
  | 'exam_panic'
  | 'word_flash'
  | 'sentence_conflict'
  | 'emotion_release'
  | 'speaking_upgrade';

export type HookTone = 'urgent' | 'curious' | 'exam' | 'playful' | 'serious';

export type HookConfig = {
  type: HookType;
  mainText: string;
  subText: string;
  shockText: string;
  flashWords: string[];
  rootText?: string;
  tone: HookTone;
};

export type CoverConfig = {
  creatorName?: string;
  badgeText?: string;
  headline?: string;
  subHeadline?: string;
  memoryLine?: string;
  retentionPrompt?: string;
  highlightWords?: string[];
  accentAnimalId?: string;
  creatorAnimalId?: string;
};

export type LottiePosition = 'left-bottom' | 'right-bottom' | 'center-bg';

export type LottieConfig = {
  fileName?: string;
  visible?: boolean;
  position?: LottiePosition;
};

export type EpisodeConfig = {
  type: 'root-word' | 'sentence-pattern' | 'read-aloud-vocab';
  episodeId: string;
  exportBaseName: string;
  durationTargetSeconds?: number;
  width?: number;
  height?: number;
  fps?: number;
  bgmId?: string;
  bgmVolume: number;
  bgmSafetyCap?: number;
  bgmDuckingFactor?: number;
  voiceVolume: number;
  sfxVolume: number;
  hook?: HookConfig;
  cover?: CoverConfig;
  lottie?: LottieConfig;
};

export const episodeConfig: EpisodeConfig = {
  type: 'root-word',
  episodeId: '053_pyro_words',
  exportBaseName: '053_pyro_words',
  durationTargetSeconds: 30,
  width: 960,
  height: 720,
  fps: 30,
  bgmId: 'suspense_003',
  bgmVolume: 0.33,
  bgmSafetyCap: 0.33,
  bgmDuckingFactor: 0.78,
  voiceVolume: 1.0,
  sfxVolume: 0.25,
  hook: {
    type: 'misconception',
    mainText: 'pyromania \u4f60\u53ef\u80fd\u4e00\u76f4\u53ea\u8bb0\u6210\u5fc3\u7406\u5b66\u8bcd',
    subText: '\u6293\u4f4f pyro / pyr = fire\uff0c\u4e00\u6574\u6392\u8bcd\u4f1a\u7a81\u7136\u4e32\u4e0a',
    shockText: '\u8fd9\u4e9b\u8bcd\uff0c\u5176\u5b9e\u90fd\u5728\u8bb2\u540c\u4e00\u628a\u706b',
    flashWords: ['pyromania', 'pyromaniac', 'pyrotechnics', 'pyrometer', 'pyrite'],
    rootText: '-pyro / -pyr',
    tone: 'urgent',
  },
  cover: {
    creatorName: '\u5c0f\u732a\u76d6\u88ab',
    badgeText: '\u8bcd\u6839\u7206\u95ea',
    headline: 'pyromania \u4f60\u53ef\u80fd\u4e00\u76f4\u53ea\u8bb0\u6210\u5fc3\u7406\u5b66\u8bcd',
    subHeadline: '\u6293\u4f4f pyro / pyr = fire\uff0c\u4e00\u6574\u6392\u8bcd\u4f1a\u7a81\u7136\u4e32\u4e0a',
    memoryLine: '\u770b\u5230 pyro / pyr\uff0c\u5148\u60f3\u5230\uff1a\u706b\u3002',
    retentionPrompt: '\u8bc4\u8bba\u533a\u7b54\uff1apyrometer \u4e3a\u4ec0\u4e48\u548c\u706b\u6709\u5173\uff1f',
    highlightWords: ['pyromania', 'pyrotechnics', 'pyrometer'],
    accentAnimalId: 'cute_pig',
    creatorAnimalId: 'cute_pig',
  },
  lottie: {
    visible: false,
  },
};
