export type HookType =
  | 'misconception'
  | 'stop_hard_memorizing'
  | 'three_second_challenge'
  | 'mistake_correction'
  | 'exam_panic'
  | 'word_flash'
  | 'sentence_conflict'
  | 'emotion_release'
  | 'speaking_upgrade';

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
  bgmSafetyCap?: number;
  bgmDuckingFactor?: number;
  voiceVolume: number;
  sfxVolume: number;
  hook?: HookConfig;
  cover?: CoverConfig;
};

export const episodeConfig: EpisodeConfig = {
  type: 'sentence-pattern',
  episodeId: '016_exciting_excited',
  exportBaseName: '016_exciting_excited',
  durationTargetSeconds: 32,
  width: 1080,
  height: 1920,
  fps: 30,
  bgmId: 'tech_006',
  bgmVolume: 0.33,
  voiceVolume: 1.0,
  sfxVolume: 0.14,
  hook: {
    type: 'mistake_correction',
    mainText: 'I am exciting?',
    subText: '不是我很兴奋',
    shockText: '你说的不是我兴奋，是我这人让人亢奋。',
    flashWords: ['我很兴奋', 'I am exciting', 'I am excited'],
    tone: 'playful',
  },
  cover: {
    creatorName: '小猪盖被',
    badgeText: 'Chinglish Trap',
    headline: 'I am exciting 不是我很兴奋',
    subHeadline: 'exciting 令人嗨  excited 自己嗨',
    memoryLine: 'I am so excited',
    accentAnimalId: 'cute_pig',
    creatorAnimalId: 'cute_pig',
  },
};
