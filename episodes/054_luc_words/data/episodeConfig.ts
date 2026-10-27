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
  episodeId: '054_luc_words',
  exportBaseName: '054_luc_words',
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
    mainText: 'lucid \u4f60\u53ef\u80fd\u4e00\u76f4\u53ea\u8bb0\u6210\u6e05\u9192',
    subText: '\u6293\u4f4f luc / lum / lumin = light\uff0c\u4e00\u6392\u8bcd\u4f1a\u7a81\u7136\u4eae\u8d77\u6765',
    shockText: '\u8fd9\u4e9b\u8bcd\uff0c\u5176\u5b9e\u90fd\u5728\u5f80\u5916\u653e\u5149',
    flashWords: ['lucid', 'elucidate', 'translucent', 'luminous', 'illuminate'],
    rootText: '-luc / -lum / -lumin',
    tone: 'urgent',
  },
  cover: {
    creatorName: '\u5c0f\u732a\u76d6\u88ab',
    badgeText: '\u8bcd\u6839\u7206\u95ea',
    headline: 'lucid \u4f60\u53ef\u80fd\u4e0d\u53ea\u662f\u5728\u8bf4\u6e05\u9192',
    subHeadline: '\u6293\u4f4f luc / lum / lumin = light\uff0c\u8fd9\u6392\u8bcd\u4f1a\u4e00\u8d77\u4eae\u8d77\u6765',
    memoryLine: 'luc / lum / lumin = \u5149',
    retentionPrompt: '\u8bc4\u8bba\u533a\u7b54\uff1aelucidate \u4e3a\u4ec0\u4e48\u662f\u9610\u660e\uff1f',
    highlightWords: ['lucid', 'luminous', 'illuminate'],
    accentAnimalId: 'cute_pig',
    creatorAnimalId: 'cute_pig',
  },
  lottie: {
    visible: false,
  },
};
