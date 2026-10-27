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
  type: 'sentence-pattern',
  episodeId: '017_people_mountain_people_sea',
  exportBaseName: '017_people_mountain_people_sea',
  durationTargetSeconds: 24,
  width: 1080,
  height: 1920,
  fps: 30,
  bgmId: 'suspense_002',
  bgmVolume: 0.33,
  voiceVolume: 1.0,
  sfxVolume: 0.14,
  hook: {
    type: 'mistake_correction',
    mainText: 'people mountain people sea?',
    subText: '不是人山人海',
    shockText: '你说的不是人山人海，是老外眼里的山海经。',
    flashWords: ['人山人海', 'people mountain people sea', 'a sea of people', 'It was packed'],
    tone: 'playful',
  },
  cover: {
    creatorName: '小猪盖被',
    badgeText: 'Chinglish Trap',
    headline: '人山人海不是 people mountain people sea',
    subHeadline: '成语别逐字翻 → a sea of people',
    memoryLine: 'A sea of people',
    accentAnimalId: 'cute_pig',
    creatorAnimalId: 'cute_pig',
  },
};
