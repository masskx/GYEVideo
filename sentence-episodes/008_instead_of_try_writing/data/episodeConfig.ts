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
  episodeId: '008_instead_of_try_writing',
  exportBaseName: '008_instead_of_try_writing',
  durationTargetSeconds: 35,
  width: 1080,
  height: 1920,
  fps: 30,
  bgmId: 'tech_003',
  bgmVolume: 0.13,
  voiceVolume: 1.0,
  sfxVolume: 0.25,
  hook: {
    type: 'stop_hard_memorizing',
    mainText: '别再硬写建议',
    subText: '太像命令了',
    shockText: '很多建议句不是错，是一开口就把语气写僵了。',
    flashWords: ['太像命令？', '太冲？', '太生硬？'],
    tone: 'urgent',
  },
  cover: {
    creatorName: '小猪盖被',
    badgeText: '替换骨架',
    headline: '建议别再写得这么硬',
    subHeadline: '换个说法 语气立刻顺很多',
    memoryLine: '别堵住对方 换成更顺耳的建议',
    accentAnimalId: 'cute_pig',
    creatorAnimalId: 'cute_pig',
  },
};
