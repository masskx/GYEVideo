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
  episodeId: '006_not_that_but_that',
  exportBaseName: '006_not_that_but_that',
  durationTargetSeconds: 36,
  width: 1080,
  height: 1920,
  fps: 30,
  bgmId: 'tech_006',
  bgmVolume: 0.13,
  voiceVolume: 1.0,
  sfxVolume: 0.25,
  hook: {
    type: 'mistake_correction',
    mainText: '不是没内容',
    subText: '是你把原因写偏了',
    shockText: '很多人不是不会写，是总把真正原因放丢了。',
    flashWords: ['原因写偏了？', '重点没打亮？', '像中文直译？'],
    tone: 'serious',
  },
  cover: {
    creatorName: '小猪盖被',
    badgeText: '原因骨架',
    headline: '不是这个原因 是那个原因',
    subHeadline: '把写偏的原因拉回真正重点',
    memoryLine: '先排除表面原因，再打亮真正原因',
    accentAnimalId: 'cute_pig',
    creatorAnimalId: 'cute_pig',
  },
};
