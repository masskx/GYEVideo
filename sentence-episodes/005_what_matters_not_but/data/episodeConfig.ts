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
  episodeId: '005_what_matters_not_but',
  exportBaseName: '005_what_matters_not_but',
  durationTargetSeconds: 34,
  width: 1080,
  height: 1920,
  fps: 30,
  bgmId: 'tech_004',
  bgmVolume: 0.12,
  voiceVolume: 1.0,
  sfxVolume: 0.18,
  hook: {
    type: 'mistake_correction',
    mainText: '你刚刚什么意思？',
    subText: 'I just told you.',
    shockText: '很多关系不是输在内容，是输在语气。',
    flashWords: ['提醒', '变味', '语气太硬'],
    tone: 'serious',
  },
  cover: {
    creatorName: '小猪盖被',
    badgeText: 'Micro-Drama Rescue',
    headline: '别把提醒说成责怪',
    subHeadline: '一句英语救场',
    memoryLine: "It's how you said it.",
    accentAnimalId: 'cute_pig',
    creatorAnimalId: 'cute_pig',
  },
};
