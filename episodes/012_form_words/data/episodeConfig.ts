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
    type: 'misconception',
    mainText: 'transform 不是乱变',
    subText: '抓住 form，一组词都能成形',
    shockText: '它们都藏着 shape',
    flashWords: ['form', 'uniform', 'conform', 'reform', 'transform'],
    rootText: '-form',
    tone: 'curious',
  },
};
