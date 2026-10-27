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

export type LottiePosition = 'left-bottom' | 'right-bottom' | 'center-bg';

export type LottieConfig = {
  fileName?: string;
  visible?: boolean;
  position?: LottiePosition;
};

export type EpisodeConfig = {
  bgmId?: string;
  bgmVolume: number;
  voiceVolume: number;
  sfxVolume: number;
  hook?: HookConfig;
  lottie?: LottieConfig;
};

export const episodeConfig: EpisodeConfig = {
  bgmId: 'tech_001',
  bgmVolume: 0.32,
  voiceVolume: 1.0,
  sfxVolume: 0.25,
  hook: {
    type: 'three_second_challenge',
    mainText: '给我 3 秒',
    subText: '让你记住 5 个 port 单词',
    shockText: '它们根本不是孤立单词',
    flashWords: ['import', 'export', 'transport', 'support', 'report'],
    rootText: '-port',
    tone: 'urgent',
  },
  lottie: {
    fileName: 'carry-box.json',
    visible: true,
    position: 'right-bottom',
  },
};
