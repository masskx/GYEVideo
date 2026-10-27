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

export type LottiePosition = 'left-bottom' | 'right-bottom' | 'center-bg';

export type LottieConfig = {
  fileName?: string;
  visible?: boolean;
  position?: LottiePosition;
};

export type EpisodeConfig = {
  type: 'root-word' | 'sentence-pattern' | 'vocab-dossier' | 'vocab-game-show' | 'vocab-whiteboard' | 'reading-picture-book' | 'reading-caption-news';
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
  lottie?: LottieConfig;
};

export const episodeConfig: EpisodeConfig = {
  type: 'vocab-whiteboard',
  episodeId: '062_vis_whiteboard',
  exportBaseName: '062_vis_whiteboard',
  durationTargetSeconds: 60,
  width: 1080,
  height: 1920,
  fps: 30,
  // The score is synthesized per episode (npm run audio); bgmId is only the fallback.
  bgmId: 'tech_002',
  bgmVolume: 0.5,
  bgmDuckingFactor: 0.6,
  voiceVolume: 1.0,
  sfxVolume: 0.5,
  cover: {
    creatorName: '小猪盖被',
    badgeText: '白板词根图',
    headline: 'provide 居然和“看”有关？',
    subHeadline: 'vis / vid = see，一张图记 5 个高考词',
    memoryLine: 'vis / vid = 看',
    retentionPrompt: '评论区写答案',
    highlightWords: ['visit', 'vision', 'visible', 'evidence', 'provide'],
  },
};

