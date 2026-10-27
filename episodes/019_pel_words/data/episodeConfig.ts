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

export type EpisodeConfig = {
  bgmId?: string;
  bgmVolume: number;
  voiceVolume: number;
  sfxVolume: number;
  hook?: HookConfig;
};

export const episodeConfig: EpisodeConfig = {
  bgmId: 'tech_006',
  bgmVolume: 0.32,
  voiceVolume: 1.0,
  sfxVolume: 0.25,
  hook: {
    type: 'three_second_challenge',
    mainText: '别再硬背 propel',
    subText: '抓住 pel，一串词都动了',
    shockText: '它们都在“推”',
    flashWords: ['propel', 'compel', 'expel', 'repel', 'impulse'],
    rootText: '-pel / -pulse',
    tone: 'urgent',
  },
};
