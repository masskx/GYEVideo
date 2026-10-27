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
  episodeId: '057_min_words',
  exportBaseName: '057_min_words',
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
    mainText: 'minute 你可能一直只记成分钟',
    subText: '抓住 min = small，这排词会突然串上',
    shockText: '这些词，其实都在讲一个感觉：小',
    flashWords: ['minute', 'mini', 'minimal', 'minor', 'diminish'],
    rootText: '-min',
    tone: 'urgent',
  },
  cover: {
    creatorName: '小猪盖被',
    badgeText: '词根爆闪',
    headline: 'minute 你可能不只是在说分钟',
    subHeadline: '抓住 min = small，这排词会一下串上',
    memoryLine: 'min = small / 小',
    retentionPrompt: '评论区答：minute 为什么和小有关？',
    highlightWords: ['minute', 'mini', 'minimal'],
    accentAnimalId: 'cute_pig',
    creatorAnimalId: 'cute_pig',
  },
  lottie: {
    visible: false,
  },
};
