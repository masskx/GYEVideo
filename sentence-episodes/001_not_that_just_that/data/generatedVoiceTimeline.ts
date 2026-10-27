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
    end: 2.04,
    text: `不是不在乎 只是不会说`,
    audio: `/audio/segments/001.mp3`,
  },
  {
    id: `trap-2`,
    start: 2.04,
    end: 5.856,
    text: `你以为这句很顺，老外听到只会先卡一下。`,
    audio: `/audio/segments/002.mp3`,
  },
  {
    id: `slap`,
    start: 5.856,
    end: 9.768,
    text: `这不是不会英语，是中文脑回路抢在前面了。`,
    audio: `/audio/segments/003.mp3`,
  },
  {
    id: `fix-1`,
    start: 9.768,
    end: 13.248,
    text: `It's not that A, it's just that B.`,
    audio: `/audio/segments/004.mp3`,
  },
  {
    id: `why-1`,
    start: 13.248,
    end: 19.032,
    text: `不是不在乎 只是不会说 核心不是逐字对位，是换成...`,
    audio: `/audio/segments/005.mp3`,
  },
  {
    id: `fix-2`,
    start: 19.032,
    end: 22.848,
    text: `I don't know what to say`,
    audio: `/audio/segments/006.mp3`,
  },
  {
    id: `scene`,
    start: 22.848,
    end: 27.648,
    text: `就说 It's not that A, it's just...`,
    audio: `/audio/segments/007.mp3`,
  },
  {
    id: `lock`,
    start: 27.648,
    end: 32.376,
    text: `别说 It's not that A, 说 It's not...`,
    audio: `/audio/segments/008.mp3`,
  },
];
