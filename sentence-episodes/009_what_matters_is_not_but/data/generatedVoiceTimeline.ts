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
    end: 2.328,
    text: `重点不是这个 是那个`,
    audio: `/audio/segments/001.mp3`,
  },
  {
    id: `trap-2`,
    start: 2.328,
    end: 6.648,
    text: `不是没重点 是把重点埋在次要信息里`,
    audio: `/audio/segments/002.mp3`,
  },
  {
    id: `slap`,
    start: 6.648,
    end: 9.984,
    text: `什么都想讲 最后就等于没重点`,
    audio: `/audio/segments/003.mp3`,
  },
  {
    id: `fix-1`,
    start: 9.984,
    end: 14.136,
    text: `What matters is not A, but B.`,
    audio: `/audio/segments/004.mp3`,
  },
  {
    id: `why-1`,
    start: 14.136,
    end: 18.96,
    text: `把真正重要的那一点顶到台前`,
    audio: `/audio/segments/005.mp3`,
  },
  {
    id: `fix-2`,
    start: 18.96,
    end: 23.064,
    text: `What matters is not how long it is, but how clear it is.`,
    audio: `/audio/segments/006.mp3`,
  },
  {
    id: `scene`,
    start: 23.064,
    end: 27.912,
    text: `想让人记住一句话 先把焦点立起来`,
    audio: `/audio/segments/007.mp3`,
  },
  {
    id: `lock`,
    start: 27.912,
    end: 32.808,
    text: `别让次要信息抢戏 先说 What matters is not A but B`,
    audio: `/audio/segments/008.mp3`,
  },
];
