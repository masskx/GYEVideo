export type HookType =
  | 'misconception'
  | 'stop_hard_memorizing'
  | 'three_second_challenge'
  | 'mistake_correction'
  | 'exam_panic'
  | 'word_flash';

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
  voiceVolume: number;
  sfxVolume: number;
  hook?: HookConfig;
  cover?: CoverConfig;
};

export const episodeConfig: EpisodeConfig = {
  type: 'sentence-pattern',
  episodeId: '014_i_am_boring',
  exportBaseName: '014_i_am_boring',
  durationTargetSeconds: 30,
  width: 1080,
  height: 1920,
  fps: 30,
  bgmId: 'tech_005',
  bgmVolume: 0.12,
  voiceVolume: 1.0,
  sfxVolume: 0.14,
  hook: {
    type: 'mistake_correction',
    mainText: 'I am boring?',
    subText: '不是我很无聊',
    shockText: '你说的不是我无聊，是我这人很没意思。',
    flashWords: ['我很无聊', 'I am boring', 'I am bored'],
    tone: 'playful',
  },
  cover: {
    creatorName: '小猪盖被',
    badgeText: 'Chinglish Trap',
    headline: 'I am boring 不是我很无聊',
    subHeadline: '-ing 令人…  -ed 自己感到…',
    memoryLine: 'I am bored',
    accentAnimalId: 'cute_pig',
    creatorAnimalId: 'cute_pig',
  },
};
