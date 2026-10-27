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
    end: 2.952,
    text: `Good good study 真不是英语`,
    audio: `/audio/segments/001.mp3`,
  },
  {
    id: `trap-2`,
    start: 2.952,
    end: 7.344,
    text: `不是可爱 是把中文词序搬进英语`,
    audio: `/audio/segments/002.mp3`,
  },
  {
    id: `slap`,
    start: 7.344,
    end: 11.52,
    text: `你以为在说英语 其实是中文套皮版`,
    audio: `/audio/segments/003.mp3`,
  },
  {
    id: `fix-1`,
    start: 11.52,
    end: 15.384,
    text: `Study hard and make progress every day`,
    audio: `/audio/segments/004.mp3`,
  },
  {
    id: `why-1`,
    start: 15.384,
    end: 19.968,
    text: `英语看自然 不看你字面对得多整齐`,
    audio: `/audio/segments/005.mp3`,
  },
  {
    id: `fix-2`,
    start: 19.968,
    end: 25.344,
    text: `Keep learning. Keep improving.`,
    audio: `/audio/segments/006.mp3`,
  },
  {
    id: `scene`,
    start: 25.344,
    end: 31.344,
    text: `写学习类 caption 就说 Keep learning Keep improving`,
    audio: `/audio/segments/007.mp3`,
  },
  {
    id: `lock`,
    start: 31.344,
    end: 36.432,
    text: `别说 Good good study 先说 Study hard and make progress every day`,
    audio: `/audio/segments/008.mp3`,
  },
];
