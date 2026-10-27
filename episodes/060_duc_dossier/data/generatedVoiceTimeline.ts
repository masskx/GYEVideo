export type GeneratedVoiceTimelineItem = {
  id: string;
  start: number;
  end: number;
  text: string;
  audio: string;
};

export const generatedVoiceTimeline: GeneratedVoiceTimelineItem[] = [
  {
    id: `hook`,
    start: 0,
    end: 3.192,
    text: `这道完形题，四个选项长得像四胞胎`,
    audio: `/audio/segments/001.mp3`,
  },
  {
    id: `hook-options`,
    start: 3.192,
    end: 7.392,
    text: `produce / reduce / introduce / conduct，选哪个？`,
    audio: `/audio/segments/002.mp3`,
  },
  {
    id: `clue`,
    start: 7.392,
    end: 10.2,
    text: `它们身上，有同一个指纹：duc`,
    audio: `/audio/segments/003.mp3`,
  },
  {
    id: `root`,
    start: 10.2,
    end: 13.344,
    text: `duc = lead，带领、引导`,
    audio: `/audio/segments/004.mp3`,
  },
  {
    id: `ex-produce`,
    start: 13.344,
    end: 19.008,
    text: `pro 向前 → 向前带出来 → produce 生产`,
    audio: `/audio/segments/005.mp3`,
  },
  {
    id: `ex-reduce`,
    start: 19.008,
    end: 22.776,
    text: `re 往回 → 往回带 → reduce 减少`,
    audio: `/audio/segments/006.mp3`,
  },
  {
    id: `ex-introduce`,
    start: 22.776,
    end: 26.04,
    text: `intro 往里 → 把人带进来 → introduce 介绍`,
    audio: `/audio/segments/007.mp3`,
  },
  {
    id: `ex-conduct`,
    start: 26.04,
    end: 30.168,
    text: `con 一起 → 带着大家一起做 → conduct 开展`,
    audio: `/audio/segments/008.mp3`,
  },
  {
    id: `ex-education`,
    start: 30.168,
    end: 34.2,
    text: `e 向外 → 把潜能引出来 → education 教育`,
    audio: `/audio/segments/009.mp3`,
  },
  {
    id: `board`,
    start: 34.2,
    end: 36.312,
    text: `五件证物，同一个指纹`,
    audio: `/audio/segments/010.mp3`,
  },
  {
    id: `solve`,
    start: 36.312,
    end: 39.648,
    text: `回到题目：塑料垃圾要减半，是往回带`,
    audio: `/audio/segments/011.mp3`,
  },
  {
    id: `verdict`,
    start: 39.648,
    end: 42.072,
    text: `选 reduce，结案`,
    audio: `/audio/segments/012.mp3`,
  },
  {
    id: `homework`,
    start: 42.072,
    end: 45.528,
    text: `最后一题：开展调查，空里填哪个？`,
    audio: `/audio/segments/013.mp3`,
  },
  {
    id: `signoff`,
    start: 45.528,
    end: 48.888,
    text: `答案写在评论区，下一个词根继续破案`,
    audio: `/audio/segments/014.mp3`,
  },
];
