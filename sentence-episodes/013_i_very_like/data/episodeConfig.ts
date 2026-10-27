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
  episodeId: '013_i_very_like',
  exportBaseName: '013_i_very_like',
  durationTargetSeconds: 30,
  width: 1080,
  height: 1920,
  fps: 30,
  bgmId: 'tech_006',
  bgmVolume: 0.12,
  voiceVolume: 1.0,
  sfxVolume: 0.14,
  hook: {
    type: 'mistake_correction',
    mainText: 'I very like?',
    subText: '不是我很喜欢',
    shockText: 'very 不能接动词，这是中文直译。',
    flashWords: ['I very like', '中式英语', 'I really like it'],
    tone: 'serious',
  },
  cover: {
    creatorName: '小猪盖被',
    badgeText: 'Chinglish Trap',
    headline: '我很喜欢不是 I very like',
    subHeadline: 'very 不接动词 | very 只接形容词',
    memoryLine: 'I really like it',
    accentAnimalId: 'cute_pig',
    creatorAnimalId: 'cute_pig',
  },
};
