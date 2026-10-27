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
  episodeId: '010_i_didnt_mean_to_i_was_trying_to',
  exportBaseName: '010_i_didnt_mean_to_i_was_trying_to',
  durationTargetSeconds: 36,
  width: 1080,
  height: 1920,
  fps: 30,
  bgmId: 'tech_005',
  bgmVolume: 0.13,
  voiceVolume: 1.0,
  sfxVolume: 0.25,
  hook: {
    type: 'mistake_correction',
    mainText: '别越解释越尴尬',
    subText: '顺序错了',
    shockText: '很多解释不是没诚意，是先后顺序一乱，就更像借口。',
    flashWords: ['不是故意的？', '更像借口？', '场面更糟？'],
    tone: 'serious',
  },
  cover: {
    creatorName: '小猪盖被',
    badgeText: '解释骨架',
    headline: '解释别越说越尴尬',
    subHeadline: '先认冒犯 再说本意 会顺很多',
    memoryLine: '先认 A 再说 B 场面会降温',
    accentAnimalId: 'cute_pig',
    creatorAnimalId: 'cute_pig',
  },
};
