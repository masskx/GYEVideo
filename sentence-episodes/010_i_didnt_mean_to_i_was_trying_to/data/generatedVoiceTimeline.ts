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
    end: 1.944,
    text: `解释别越说越尴尬`,
    audio: `/audio/segments/001.mp3`,
  },
  {
    id: `trap-2`,
    start: 1.944,
    end: 6.936,
    text: `狂讲理由 听上去就像狡辩`,
    audio: `/audio/segments/002.mp3`,
  },
  {
    id: `slap`,
    start: 6.936,
    end: 11.448,
    text: `不是理由不够多 是没先接住对方的不舒服`,
    audio: `/audio/segments/003.mp3`,
  },
  {
    id: `fix-1`,
    start: 11.448,
    end: 15.216,
    text: `I didn't mean to A. I was just trying to B.`,
    audio: `/audio/segments/004.mp3`,
  },
  {
    id: `why-1`,
    start: 15.216,
    end: 20.376,
    text: `先认冒犯感 再交代原意`,
    audio: `/audio/segments/005.mp3`,
  },
  {
    id: `fix-2`,
    start: 20.376,
    end: 24.432,
    text: `I didn't mean to sound cold. I was just trying to be clear.`,
    audio: `/audio/segments/006.mp3`,
  },
  {
    id: `scene`,
    start: 24.432,
    end: 30.624,
    text: `消息发冷了 就直接上这个骨架`,
    audio: `/audio/segments/007.mp3`,
  },
  {
    id: `lock`,
    start: 30.624,
    end: 35.544,
    text: `别一急就堆理由 先说 I didn't mean to A I was just trying to B`,
    audio: `/audio/segments/008.mp3`,
  },
];
