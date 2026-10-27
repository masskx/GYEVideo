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
  episodeId: '001_good_good_study',
  exportBaseName: '001_good_good_study',
  durationTargetSeconds: 26,
  width: 1080,
  height: 1920,
  fps: 30,
  bgmId: 'tech_004',
  bgmVolume: 0.12,
  voiceVolume: 1.0,
  sfxVolume: 0.16,
  hook: {
    type: 'mistake_correction',
    mainText: 'Good good study?',
    subText: '真不是英语',
    shockText: '你以为在说英文，其实是在把中文逐字硬翻。',
    flashWords: ['中式英语', '逐字硬翻', '地道纠正'],
    tone: 'serious',
  },
  cover: {
    creatorName: '小猪盖被',
    badgeText: 'Chinglish Trap',
    headline: 'Good good study 真不是英语',
    subHeadline: '别再把中文硬翻成英文',
    memoryLine: 'Study hard and make progress every day.',
    accentAnimalId: 'cute_pig',
    creatorAnimalId: 'cute_pig',
  },
};
