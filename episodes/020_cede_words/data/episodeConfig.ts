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
  bgmId?: string;
  bgmVolume: number;
  voiceVolume: number;
  sfxVolume: number;
  hook?: HookConfig;
  cover?: CoverConfig;
};

export const episodeConfig: EpisodeConfig = {
  bgmVolume: 0.32,
  voiceVolume: 1.0,
  sfxVolume: 0.25,
  hook: {
    type: 'mistake_correction',
    mainText: 'proceed 不只是“继续”',
    subText: '抓住 cede，一串词都在走',
    shockText: '它们都在“前进”',
    flashWords: ['proceed', 'precede', 'recede', 'concede', 'exceed'],
    rootText: '-cede / -cess',
    tone: 'curious',
  },
  cover: {
    creatorName: '小猪盖被',
    badgeText: '3秒记词根',
    headline: '抓住 cede / cess',
    subHeadline: '看到 proceed 别只会背继续',
    memoryLine: '看到 cede，先想：在往哪一步走？',
    highlightWords: ['proceed', 'concede', 'exceed'],
    accentAnimalId: 'cute_pig',
    creatorAnimalId: 'cute_pig',
  },
};
