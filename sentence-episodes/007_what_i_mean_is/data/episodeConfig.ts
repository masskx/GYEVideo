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
  episodeId: '007_what_i_mean_is',
  exportBaseName: '007_what_i_mean_is',
  durationTargetSeconds: 34,
  width: 1080,
  height: 1920,
  fps: 30,
  bgmId: 'tech_005',
  bgmVolume: 0.13,
  voiceVolume: 1.0,
  sfxVolume: 0.25,
  hook: {
    type: 'mistake_correction',
    mainText: '不是没想法',
    subText: '是你总写偏了',
    shockText: '很多人不是没意思，是英文总没把真正意思打出来。',
    flashWords: ['写偏了？', '不像本意？', '总差一下？'],
    tone: 'serious',
  },
  cover: {
    creatorName: '小猪盖被',
    badgeText: '纠偏骨架',
    headline: '英文总写偏 用这句拉回来',
    subHeadline: '把你真正想说的话重新扶正',
    memoryLine: '先撤回说偏的话，再打亮真正意思',
    accentAnimalId: 'cute_pig',
    creatorAnimalId: 'cute_pig',
  },
};
