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
  episodeId: '012_eat_medicine',
  exportBaseName: '012_eat_medicine',
  durationTargetSeconds: 30,
  width: 1080,
  height: 1920,
  fps: 30,
  bgmId: 'tech_004',
  bgmVolume: 0.12,
  voiceVolume: 1.0,
  sfxVolume: 0.16,
  hook: {
    type: 'mistake_correction',
    mainText: 'eat medicine?',
    subText: '不是吃药',
    shockText: 'eat 吃的是饭，不是药。',
    flashWords: ['吃药', 'eat medicine', 'take medicine'],
    tone: 'serious',
  },
  cover: {
    creatorName: '小猪盖被',
    badgeText: 'Chinglish Trap',
    headline: '吃药不是 eat medicine',
    subHeadline: 'eat = 吃饭  take = 吃药',
    memoryLine: 'take medicine',
    accentAnimalId: 'cute_pig',
    creatorAnimalId: 'cute_pig',
  },
};
