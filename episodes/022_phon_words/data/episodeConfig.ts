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
  bgmVolume: 0.32,
  voiceVolume: 1.0,
  sfxVolume: 0.25,
  hook: {
    type: 'misconception',
    mainText: 'phone 不只是“手机”',
    subText: '抓住 phon，一串词都在发声',
    shockText: '它们都围着 sound / voice',
    flashWords: ['phone', 'microphone', 'phonics', 'symphony', 'cacophony'],
    rootText: '-phon',
    tone: 'curious',
  },
};
