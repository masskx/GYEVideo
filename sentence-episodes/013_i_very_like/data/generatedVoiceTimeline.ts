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
    end: 2.52,
    text: `我很喜欢 不是 I very like`,
    audio: `/audio/segments/001.mp3`,
  },
  {
    id: `trap-2`,
    start: 2.52,
    end: 7.176,
    text: `先听见的不是喜欢 是语序报警`,
    audio: `/audio/segments/002.mp3`,
  },
  {
    id: `slap`,
    start: 7.176,
    end: 10.92,
    text: `很 不等于 everywhere 都是 very`,
    audio: `/audio/segments/003.mp3`,
  },
  {
    id: `fix-1`,
    start: 10.92,
    end: 13.608,
    text: `I really like it`,
    audio: `/audio/segments/004.mp3`,
  },
  {
    id: `why-1`,
    start: 13.608,
    end: 18.84,
    text: `like 这种动词 更爱搭 really`,
    audio: `/audio/segments/005.mp3`,
  },
  {
    id: `fix-2`,
    start: 18.84,
    end: 23.256,
    text: `I love it`,
    audio: `/audio/segments/006.mp3`,
  },
  {
    id: `scene`,
    start: 23.256,
    end: 28.992,
    text: `聊歌时 就说 I really like this song`,
    audio: `/audio/segments/007.mp3`,
  },
  {
    id: `lock`,
    start: 28.992,
    end: 32.904,
    text: `别 I very like 先 really 再谈 very`,
    audio: `/audio/segments/008.mp3`,
  },
];
