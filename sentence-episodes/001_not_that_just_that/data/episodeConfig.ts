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
  episodeId: '001_not_that_just_that',
  exportBaseName: '001_not_that_just_that',
  durationTargetSeconds: 38,
  width: 1080,
  height: 1920,
  fps: 30,
  bgmId: 'tech_006',
  bgmVolume: 0.13,
  voiceVolume: 1.0,
  sfxVolume: 0.25,
  hook: {
    type: 'misconception',
    mainText: '别急着解释',
    subText: '不是 A，只是 B。',
    shockText: '你不是不会说，你是没有骨架。',
    flashWords: ['不是不在乎？', '生气了？', '不回你了？'],
    tone: 'urgent',
  },
  cover: {
    creatorName: '小猪盖被',
    badgeText: '句子骨架',
    headline: '不是不在乎 只是不会说',
    subHeadline: '解释误会别再一大段直译',
    memoryLine: '前半句拿掉误会，后半句说出真相',
    accentAnimalId: 'cute_pig',
    creatorAnimalId: 'cute_pig',
  },
};
