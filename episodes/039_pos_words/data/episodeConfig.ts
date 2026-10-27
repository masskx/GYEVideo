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
  retentionPrompt?: string;
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
  type: 'root-word',
  episodeId: '039_pos_words',
  exportBaseName: '039_pos_words',
  durationTargetSeconds: 31,
  width: 960,
  height: 720,
  fps: 30,
  bgmId: 'tech_006',
  bgmVolume: 0.32,
  bgmSafetyCap: 0.32,
  bgmDuckingFactor: 0.65,
  voiceVolume: 1.0,
  sfxVolume: 0.25,
  hook: {
    type: 'three_second_challenge',
    mainText: 'position 别再当孤儿词背',
    subText: '抓住 pos / pon = put，一串词会突然连上',
    shockText: '最会带偏你的，偏偏是你最熟的 position',
    flashWords: ['position', 'deposit', 'oppose', 'postpone', 'expose'],
    rootText: '-pos / -pon',
    tone: 'urgent',
  },
  cover: {
    creatorName: '小猪盖被',
    badgeText: '词根爆闪',
    headline: 'position 其实在带偏你背词',
    subHeadline: '抓住 pos / pon = put，一串词 suddenly connected',
    memoryLine: '看到 pos / pon，先问：放哪了？',
    retentionPrompt: '秒答：postpone 是把什么放到后面？',
    highlightWords: ['position', 'postpone', 'oppose'],
    accentAnimalId: 'cute_pig',
    creatorAnimalId: 'cute_pig',
  },
};
