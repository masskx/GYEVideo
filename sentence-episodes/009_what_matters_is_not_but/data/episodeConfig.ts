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
  episodeId: '009_what_matters_is_not_but',
  exportBaseName: '009_what_matters_is_not_but',
  durationTargetSeconds: 35,
  width: 1080,
  height: 1920,
  fps: 30,
  bgmId: 'tech_004',
  bgmVolume: 0.13,
  voiceVolume: 1.0,
  sfxVolume: 0.25,
  hook: {
    type: 'mistake_correction',
    mainText: '不是没内容',
    subText: '是重点没亮',
    shockText: '很多人写了很多，真正重要的那层却还是灰的。',
    flashWords: ['重点跑了？', '写很多？', '没打亮？'],
    tone: 'serious',
  },
  cover: {
    creatorName: '小猪盖被',
    badgeText: '重点骨架',
    headline: '重点不是这个 是那个',
    subHeadline: '把句子真正想强调的东西打亮',
    memoryLine: '先压暗次要点 再打亮真正重点',
    accentAnimalId: 'cute_pig',
    creatorAnimalId: 'cute_pig',
  },
};
