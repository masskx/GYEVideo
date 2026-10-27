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
    mainText: '看到 cap 别只会想帽子',
    subText: 'cap / capt / cept 核心是 take / 拿',
    shockText: 'cap = take / 拿，抓',
    flashWords: ['capture', 'capable', 'accept', 'except', 'concept'],
    rootText: '-cap / -capt / -cept',
    tone: 'urgent',
  },
};
