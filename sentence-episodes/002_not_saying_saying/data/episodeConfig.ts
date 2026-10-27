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
  episodeId: '002_not_saying_saying',
  exportBaseName: '002_not_saying_saying',
  durationTargetSeconds: 38,
  width: 1080,
  height: 1920,
  fps: 30,
  bgmId: 'tech_005',
  bgmVolume: 0.13,
  voiceVolume: 1.0,
  sfxVolume: 0.25,
  hook: {
    type: 'mistake_correction',
    mainText: '别越说越吵',
    subText: '不是在说 A，我是在说 B。',
    shockText: '很多人不是不会表达，是不会把重点掰回来。',
    flashWords: ['你误会了？', '我不是那个意思？', '重点跑偏了？'],
    tone: 'serious',
  },
  cover: {
    creatorName: '小猪盖被',
    badgeText: '立场骨架',
    headline: '不是在怪你 是在说重点',
    subHeadline: '把中文那种绕着说的味道剪掉',
    memoryLine: '先切掉误解，再把重点说回来',
    accentAnimalId: 'cute_pig',
    creatorAnimalId: 'cute_pig',
  },
};
