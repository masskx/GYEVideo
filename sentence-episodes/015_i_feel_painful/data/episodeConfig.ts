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
  highlightWords?: string[];
  accentAnimalId?: string;
  creatorAnimalId?: string;
};

export type EpisodeConfig = {
  type: 'root-word' | 'sentence-pattern';
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
};

export const episodeConfig: EpisodeConfig = {
  type: 'sentence-pattern',
  episodeId: '015_i_feel_painful',
  exportBaseName: '015_i_feel_painful',
  durationTargetSeconds: 32,
  width: 1080,
  height: 1920,
  fps: 30,
  bgmId: 'suspense_003',
  bgmVolume: 0.33,
  voiceVolume: 1.0,
  sfxVolume: 0.14,
  hook: {
    type: 'mistake_correction',
    mainText: 'I feel painful?',
    subText: '不是我很痛',
    shockText: '你说的不是我很痛，是我这人摸着让人疼。',
    flashWords: ['我很痛', 'I feel painful', 'I am in pain'],
    tone: 'playful',
  },
  cover: {
    creatorName: '小猪盖被',
    badgeText: 'Chinglish Trap',
    headline: 'I feel painful 不是我很痛',
    subHeadline: 'painful 令人疼的  in pain 自己疼',
    memoryLine: 'I am in pain / It hurts',
    accentAnimalId: 'cute_pig',
    creatorAnimalId: 'cute_pig',
  },
};
