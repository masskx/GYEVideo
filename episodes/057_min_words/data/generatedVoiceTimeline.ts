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
    end: 2.544,
    text: `minute 你可能一直只记成分钟`,
    audio: `/audio/segments/001.mp3`,
  },
  {
    id: `flash-words`,
    start: 2.544,
    end: 6.768,
    text: `minute / mini / minimal / minor / diminish`,
    audio: `/audio/segments/002.mp3`,
  },
  {
    id: `same-root`,
    start: 6.768,
    end: 10.104,
    text: `这些词，其实都在讲一个感觉：小`,
    audio: `/audio/segments/003.mp3`,
  },
  {
    id: `root-min`,
    start: 10.104,
    end: 13.032,
    text: `min = small / 小`,
    audio: `/audio/segments/004.mp3`,
  },
  {
    id: `word-mini`,
    start: 13.032,
    end: 17.616,
    text: `mini = 小号 / 迷你`,
    audio: `/audio/segments/005.mp3`,
  },
  {
    id: `word-minimal`,
    start: 17.616,
    end: 22.56,
    text: `minimal = 最小限度 -> 最小的`,
    audio: `/audio/segments/006.mp3`,
  },
  {
    id: `word-minimum`,
    start: 22.56,
    end: 27.12,
    text: `minimum = 不能再小 -> 最小值`,
    audio: `/audio/segments/007.mp3`,
  },
  {
    id: `word-minor`,
    start: 27.12,
    end: 31.656,
    text: `minor = 比较小的 -> 次要的`,
    audio: `/audio/segments/008.mp3`,
  },
  {
    id: `word-miniature`,
    start: 31.656,
    end: 37.224,
    text: `miniature = 缩小版 -> 微型的`,
    audio: `/audio/segments/009.mp3`,
  },
  {
    id: `word-diminish`,
    start: 37.224,
    end: 42.528,
    text: `diminish = 变小 -> 减少`,
    audio: `/audio/segments/010.mp3`,
  },
  {
    id: `word-minute`,
    start: 42.528,
    end: 47.928,
    text: `minute = 极小的 / 细微的`,
    audio: `/audio/segments/011.mp3`,
  },
  {
    id: `grid-connect`,
    start: 47.928,
    end: 57.024,
    text: `一整个 min，就是小`,
    audio: `/audio/segments/012.mp3`,
  },
  {
    id: `summary`,
    start: 57.024,
    end: 59.88,
    text: `min = small / 小`,
    audio: `/audio/segments/013.mp3`,
  },
  {
    id: `outro`,
    start: 59.88,
    end: 65.256,
    text: `秒答：minute 为什么和小有关？`,
    audio: `/audio/segments/014.mp3`,
  },
];
