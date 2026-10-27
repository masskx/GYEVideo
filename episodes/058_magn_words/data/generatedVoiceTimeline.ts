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
    end: 3.12,
    text: `magnanimous 你可能一直只记成大方`,
    audio: `/audio/segments/001.mp3`,
  },
  {
    id: `flash-words`,
    start: 3.12,
    end: 8.352,
    text: `magnanimous / magnify / magnitude / magnificent / magnifier`,
    audio: `/audio/segments/002.mp3`,
  },
  {
    id: `same-root`,
    start: 8.352,
    end: 11.592,
    text: `这些词，其实都在讲同一个方向：大`,
    audio: `/audio/segments/003.mp3`,
  },
  {
    id: `root-magn`,
    start: 11.592,
    end: 15.888,
    text: `magn = great / large / 大`,
    audio: `/audio/segments/004.mp3`,
  },
  {
    id: `word-magnify`,
    start: 15.888,
    end: 21.36,
    text: `magnify = 变大 -> 放大`,
    audio: `/audio/segments/005.mp3`,
  },
  {
    id: `word-magnifier`,
    start: 21.36,
    end: 25.848,
    text: `magnifier = 放大的工具 -> 放大镜`,
    audio: `/audio/segments/006.mp3`,
  },
  {
    id: `word-magnitude`,
    start: 25.848,
    end: 31.464,
    text: `magnitude = 大的程度 -> 量级`,
    audio: `/audio/segments/007.mp3`,
  },
  {
    id: `word-magnificent`,
    start: 31.464,
    end: 37.008,
    text: `magnificent = 大到壮观 -> 壮丽的`,
    audio: `/audio/segments/008.mp3`,
  },
  {
    id: `word-magnanimous`,
    start: 37.008,
    end: 42.864,
    text: `magnanimous = 心量很大 -> 宽宏大量`,
    audio: `/audio/segments/009.mp3`,
  },
  {
    id: `word-magnum`,
    start: 42.864,
    end: 47.76,
    text: `magnum = 更大的那号 -> 大瓶装`,
    audio: `/audio/segments/010.mp3`,
  },
  {
    id: `word-maximize`,
    start: 47.76,
    end: 53.28,
    text: `maximize = 推到最大 -> 最大化`,
    audio: `/audio/segments/011.mp3`,
  },
  {
    id: `grid-connect`,
    start: 53.28,
    end: 63.48,
    text: `一整个 magn，就是大，伟大`,
    audio: `/audio/segments/012.mp3`,
  },
  {
    id: `summary`,
    start: 63.48,
    end: 67.392,
    text: `magn = great / large / 大`,
    audio: `/audio/segments/013.mp3`,
  },
  {
    id: `outro`,
    start: 67.392,
    end: 73.008,
    text: `秒答：magnanimous 为什么和大有关？`,
    audio: `/audio/segments/014.mp3`,
  },
];
