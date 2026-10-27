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
  episodeId: '019_add_oil',
  exportBaseName: '019_add_oil',
  durationTargetSeconds: 27,
  width: 1080,
  height: 1920,
  fps: 30,
  bgmId: 'tech_006',
  bgmVolume: 0.33,
  voiceVolume: 1.0,
  sfxVolume: 0.16,
  hook: {
    type: 'mistake_correction',
    mainText: 'add oil?',
    subText: '别当全球通用加油',
    shockText: '它不是完全不能说，是你别 everywhere 都说。',
    flashWords: ['加油', 'add oil', "You've got this", 'Keep going'],
    tone: 'playful',
  },
  cover: {
    creatorName: '小猪盖被',
    badgeText: 'Chinglish Trap',
    headline: '加油不是哪里都说 add oil',
    subHeadline: "全球通用先说 You've got this",
    memoryLine: "You've got this",
    accentAnimalId: 'cute_pig',
    creatorAnimalId: 'cute_pig',
  },
};
