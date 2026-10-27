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
  episodeId: '011_open_the_light',
  exportBaseName: '011_open_the_light',
  durationTargetSeconds: 23,
  width: 1080,
  height: 1920,
  fps: 30,
  bgmId: 'tech_004',
  bgmVolume: 0.12,
  voiceVolume: 1.0,
  sfxVolume: 0.18,
  hook: {
    type: 'mistake_correction',
    mainText: 'Open the light?',
    subText: '不是开灯',
    shockText: '你以为在说英语，其实是在把中文动词直接套进去。',
    flashWords: ['中式硬翻', '红叉纠正', 'turn on 才对'],
    tone: 'serious',
  },
  cover: {
    creatorName: '小猪盖被',
    badgeText: 'Chinglish Trap',
    headline: 'Open the light 不是开灯',
    subHeadline: '开灯先想 turn on，不要硬套 open',
    memoryLine: 'Turn on the light.',
    accentAnimalId: 'cute_pig',
    creatorAnimalId: 'cute_pig',
  },
};
