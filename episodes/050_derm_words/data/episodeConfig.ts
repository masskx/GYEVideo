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
  episodeId: '050_derm_words',
  exportBaseName: '050_derm_words',
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
    mainText: 'dermatology 你可能一直背得太散了',
    subText: '抓住 derm / derma = skin，一整排词会突然串上',
    shockText: '这些词，其实都在讲同一层皮',
    flashWords: ['dermal', 'dermatology', 'epidermis', 'hypodermic', 'dermatologist'],
    rootText: '-derm / -derma',
    tone: 'urgent',
  },
  cover: {
    creatorName: '小猪盖被',
    badgeText: '词根爆闪',
    headline: 'dermatology 你可能一直背得太散了',
    subHeadline: '抓住 derm / derma = skin，一整排词会突然串上',
    memoryLine: '看到 derm / derma，先问：哪层皮？',
    retentionPrompt: '评论区答：hypodermic 为什么和皮肤有关？',
    highlightWords: ['dermal', 'dermatology', 'epidermis'],
    accentAnimalId: 'cute_pig',
    creatorAnimalId: 'cute_pig',
  },
  lottie: {
    visible: false,
  },
};
