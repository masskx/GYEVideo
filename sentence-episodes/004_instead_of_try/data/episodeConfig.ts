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
  episodeId: '004_instead_of_try',
  exportBaseName: '004_instead_of_try',
  durationTargetSeconds: 36,
  width: 1080,
  height: 1920,
  fps: 30,
  bgmId: 'tech_003',
  bgmVolume: 0.13,
  voiceVolume: 1.0,
  sfxVolume: 0.25,
  hook: {
    type: 'stop_hard_memorizing',
    mainText: '别再硬说别',
    subText: '别 A，换成 B。',
    shockText: '你不是不会提建议，你是只会硬拦。',
    flashWords: ['太像命令？', '太像老师？', '一开口就生硬？'],
    tone: 'urgent',
  },
  cover: {
    creatorName: '小猪盖被',
    badgeText: '替换骨架',
    headline: '别再硬说 don’t 了',
    subHeadline: '建议也能说得像短视频而不是语法课',
    memoryLine: '先划掉旧说法，再换成更顺耳的表达',
    accentAnimalId: 'cute_pig',
    creatorAnimalId: 'cute_pig',
  },
};
