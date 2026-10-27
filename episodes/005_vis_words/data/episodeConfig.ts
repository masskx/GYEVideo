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
  bgmId: 'tech_003',
  bgmVolume: 0.32,
  voiceVolume: 1.0,
  sfxVolume: 0.25,
  hook: {
    type: 'misconception',
    mainText: 'video 不只就是视频',
    subText: '抓住 vis / vid，一组词就通了',
    shockText: '它们都藏着 see',
    flashWords: ['video', 'vision', 'visible', 'visual', 'evidence'],
    rootText: '-vis/-vid',
    tone: 'curious',
  },
  lottie: {
    fileName: 'eye.json',
    visible: true,
    position: 'center-bg',
  },
};
