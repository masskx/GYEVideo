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
  episodeId: '003_didnt_mean_was_trying',
  exportBaseName: '003_didnt_mean_was_trying',
  durationTargetSeconds: 38,
  width: 1080,
  height: 1920,
  fps: 30,
  bgmId: 'light_002',
  bgmVolume: 0.13,
  voiceVolume: 1.0,
  sfxVolume: 0.25,
  hook: {
    type: 'mistake_correction',
    mainText: '道歉别更尴尬',
    subText: '不是故意 A，我只是想 B。',
    shockText: '很多人不是不会道歉，是不会把本意说出来。',
    flashWords: ['话说重了？', '解释更糟？', '越描越黑？'],
    tone: 'serious',
  },
  cover: {
    creatorName: '小猪盖被',
    badgeText: '修复骨架',
    headline: '道歉别再只会 say sorry',
    subHeadline: '把本意说出来，关系才有得救',
    memoryLine: '先认下冒犯，再说出本意',
    accentAnimalId: 'cute_pig',
    creatorAnimalId: 'cute_pig',
  },
};
