import {getDefaultBgmId, type BgmId} from './bgmRegistry';

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
  bgmId?: BgmId;
  bgmVolume: number;
  voiceVolume: number;
  sfxVolume: number;
  hook?: HookConfig;
};

export const episodeConfig: EpisodeConfig = {
  bgmId: getDefaultBgmId(),
  bgmVolume: 0.32,
  voiceVolume: 1.0,
  sfxVolume: 0.25,
  hook: {
    type: 'stop_hard_memorizing',
    mainText: '别再硬背单词了',
    subText: 'reject / project / inject 其实是一组词',
    shockText: '它们都藏着同一个词根',
    flashWords: ['reject', 'project', 'inject', 'object', 'subject'],
    rootText: '-ject',
    tone: 'urgent',
  },
};
