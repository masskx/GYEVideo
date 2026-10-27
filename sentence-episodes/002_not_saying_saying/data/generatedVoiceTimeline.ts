export type GeneratedVoiceTimelineItem = {
  id: string;
  start: number;
  end: number;
  text: string;
  audio: string;
};

export const generatedVoiceTimeline: GeneratedVoiceTimelineItem[] = [
  {
    id: `trap-1`,
    start: 0,
    end: 2.76,
    text: `不是在怪你 是在拉回重点`,
    audio: `/audio/segments/001.mp3`,
  },
  {
    id: `trap-2`,
    start: 2.76,
    end: 8.16,
    text: `重点还没说出来 对方先觉得你在骂他`,
    audio: `/audio/segments/002.mp3`,
  },
  {
    id: `slap`,
    start: 8.16,
    end: 11.808,
    text: `不是缺内容 是少了先切误会的动作`,
    audio: `/audio/segments/003.mp3`,
  },
  {
    id: `fix-1`,
    start: 11.808,
    end: 15.216,
    text: `I'm not saying A. I'm saying B.`,
    audio: `/audio/segments/004.mp3`,
  },
  {
    id: `why-1`,
    start: 15.216,
    end: 19.944,
    text: `先拆防御 再送重点`,
    audio: `/audio/segments/005.mp3`,
  },
  {
    id: `fix-2`,
    start: 19.944,
    end: 24.384,
    text: `I'm not saying you're lazy. I'm saying this approach isn't working.`,
    audio: `/audio/segments/006.mp3`,
  },
  {
    id: `scene`,
    start: 24.384,
    end: 29.856,
    text: `讨论跑偏了 先用这个骨架把方向盘打回来`,
    audio: `/audio/segments/007.mp3`,
  },
  {
    id: `lock`,
    start: 29.856,
    end: 34.416,
    text: `别先硬怼重点 先说 I'm not saying A I'm saying B`,
    audio: `/audio/segments/008.mp3`,
  },
];
