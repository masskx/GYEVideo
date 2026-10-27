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
  episodeId: '047_ped_words',
  exportBaseName: '047_ped_words',
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
    mainText: 'impede 你可能一直不知道它在说什么',
    subText: '抓住 ped / pod = foot，一排词突然连上',
    shockText: '这些词，其实都在讲同一双脚',
    flashWords: ['impede', 'expedite', 'pedal', 'pedestrian', 'pedicure'],
    rootText: '-ped / -pod',
    tone: 'urgent',
  },
  cover: {
    creatorName: '小猪盖被',
    badgeText: '词根爆闪',
    headline: 'impede 你可能一直不知道它在说什么',
    subHeadline: '抓住 ped / pod = foot，一排词突然连上',
    memoryLine: '看到 ped / pod，先问：哪只脚？',
    retentionPrompt: '评论区拆：expedite 为什么是加速？',
    highlightWords: ['impede', 'expedite', 'pedal'],
    accentAnimalId: 'cute_pig',
    creatorAnimalId: 'cute_pig',
  },
  lottie: {
    visible: false,
  },
};
