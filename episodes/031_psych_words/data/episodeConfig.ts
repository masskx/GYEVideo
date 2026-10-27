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
    type: 'three_second_challenge',
    mainText: '看到 psych 别只会想 psychology',
    subText: '抓住 psych，一串词都在围着心理和灵魂转',
    shockText: '它们都连着 mind / soul',
    flashWords: ['psychology', 'psyche', 'psychic', 'psychosis', 'psychopath'],
    rootText: '-psych',
    tone: 'urgent',
  },
};
