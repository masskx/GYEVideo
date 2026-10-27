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
    end: 2.784,
    text: `Long time no see 能用 但别乱用`,
    audio: `/audio/segments/001.mp3`,
  },
  {
    id: `trap-2`,
    start: 2.784,
    end: 7.368,
    text: `跟朋友没事 跟客户老板就太松了`,
    audio: `/audio/segments/002.mp3`,
  },
  {
    id: `slap`,
    start: 7.368,
    end: 12.264,
    text: `不是对错 是场合错位`,
    audio: `/audio/segments/003.mp3`,
  },
  {
    id: `fix-1`,
    start: 12.264,
    end: 15.12,
    text: `It's been a while`,
    audio: `/audio/segments/004.mp3`,
  },
  {
    id: `why-1`,
    start: 15.12,
    end: 20.208,
    text: `它是英语 但太 casual 不适合到处搬`,
    audio: `/audio/segments/005.mp3`,
  },
  {
    id: `fix-2`,
    start: 20.208,
    end: 25.104,
    text: `朋友重逢 再说 Long time no see`,
    audio: `/audio/segments/006.mp3`,
  },
  {
    id: `scene`,
    start: 25.104,
    end: 31.008,
    text: `给客户发消息 就说 It's been a while`,
    audio: `/audio/segments/007.mp3`,
  },
  {
    id: `lock`,
    start: 31.008,
    end: 35.592,
    text: `朋友 Long time no see 正式场合 It's been a while`,
    audio: `/audio/segments/008.mp3`,
  },
];
