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
    end: 1.992,
    text: `写表达别再这么硬`,
    audio: `/audio/segments/001.mp3`,
  },
  {
    id: `trap-2`,
    start: 1.992,
    end: 4.944,
    text: `没错 但一眼模板味`,
    audio: `/audio/segments/002.mp3`,
  },
  {
    id: `slap`,
    start: 4.944,
    end: 9.864,
    text: `不是语法问题 是词太安全太无聊`,
    audio: `/audio/segments/003.mp3`,
  },
  {
    id: `fix-1`,
    start: 9.864,
    end: 12.984,
    text: `Instead of A, try B.`,
    audio: `/audio/segments/004.mp3`,
  },
  {
    id: `why-1`,
    start: 12.984,
    end: 17.616,
    text: `不是纠错 是把普通句子换成更能打的`,
    audio: `/audio/segments/005.mp3`,
  },
  {
    id: `fix-2`,
    start: 17.616,
    end: 21.96,
    text: `Instead of saying very important try hard to ignore`,
    audio: `/audio/segments/006.mp3`,
  },
  {
    id: `scene`,
    start: 21.96,
    end: 27.768,
    text: `改稿时 别只盯对不对 先看能不能让人停一下`,
    audio: `/audio/segments/007.mp3`,
  },
  {
    id: `lock`,
    start: 27.768,
    end: 31.632,
    text: `别再写平词 先说 Instead of A try B`,
    audio: `/audio/segments/008.mp3`,
  },
];
