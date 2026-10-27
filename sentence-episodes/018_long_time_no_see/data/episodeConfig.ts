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
  episodeId: '018_long_time_no_see',
  exportBaseName: '018_long_time_no_see',
  durationTargetSeconds: 28,
  width: 1080,
  height: 1920,
  fps: 30,
  bgmId: 'suspense_001',
  bgmVolume: 0.33,
  voiceVolume: 1.0,
  sfxVolume: 0.15,
  hook: {
    type: 'mistake_correction',
    mainText: 'Long time no see',
    subText: '别当万能钥匙',
    shockText: '能用，不等于什么时候都能用。',
    flashWords: ['Long time no see', '正式场合？', "It's been a while"],
    tone: 'playful',
  },
  cover: {
    creatorName: '小猪盖被',
    badgeText: 'Chinglish Trap',
    headline: 'Long time no see 能用，但别乱用',
    subHeadline: '朋友专用 → 正式场合说 It\'s been a while',
    memoryLine: "It's been a while",
    accentAnimalId: 'cute_pig',
    creatorAnimalId: 'cute_pig',
  },
};
