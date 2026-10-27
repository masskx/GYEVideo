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
    end: 2.664,
    text: `给我 3 秒，让你记住 5 个 port 单词`,
    audio: `/audio/segments/001.mp3`,
  },
  {
    id: `flash-words`,
    start: 2.664,
    end: 6.888,
    text: `import / export / transport / support / report`,
    audio: `/audio/segments/002.mp3`,
  },
  {
    id: `same-root`,
    start: 6.888,
    end: 10.584,
    text: `它们根本不是孤立单词`,
    audio: `/audio/segments/003.mp3`,
  },
  {
    id: `root-ject`,
    start: 10.584,
    end: 14.232,
    text: `port = carry / 携带、运输`,
    audio: `/audio/segments/004.mp3`,
  },
  {
    id: `word-reject`,
    start: 14.232,
    end: 18.672,
    text: `import = 带进来 → 进口`,
    audio: `/audio/segments/005.mp3`,
  },
  {
    id: `word-object`,
    start: 18.672,
    end: 22.848,
    text: `export = 带出去 → 出口`,
    audio: `/audio/segments/006.mp3`,
  },
  {
    id: `word-subject`,
    start: 22.848,
    end: 27.36,
    text: `transport = 运过去 → 运输`,
    audio: `/audio/segments/007.mp3`,
  },
  {
    id: `word-project`,
    start: 27.36,
    end: 32.256,
    text: `support = 从下面托住 → 支持`,
    audio: `/audio/segments/008.mp3`,
  },
  {
    id: `word-inject`,
    start: 32.256,
    end: 36.312,
    text: `report = 把消息带回来 → 报告`,
    audio: `/audio/segments/009.mp3`,
  },
  {
    id: `word-eject`,
    start: 36.312,
    end: 39.384,
    text: `portable = 能带着走的 → 便携的`,
    audio: `/audio/segments/010.mp3`,
  },
  {
    id: `word-abject`,
    start: 39.384,
    end: 42.672,
    text: `porter = 搬东西的人 → 搬运工`,
    audio: `/audio/segments/011.mp3`,
  },
  {
    id: `word-deject`,
    start: 42.672,
    end: 46.248,
    text: `deport = 带离某地 → 驱逐出境`,
    audio: `/audio/segments/012.mp3`,
  },
  {
    id: `grid-connect`,
    start: 46.248,
    end: 54.552,
    text: `进来 / 出去 / 运过去 / 托住 / 带回消息`,
    audio: `/audio/segments/013.mp3`,
  },
  {
    id: `summary`,
    start: 54.552,
    end: 58.632,
    text: `port = carry：带、运、托`,
    audio: `/audio/segments/014.mp3`,
  },
  {
    id: `outro`,
    start: 58.632,
    end: 61.8,
    text: `看到 port，先想：把什么带到哪里`,
    audio: `/audio/segments/015.mp3`,
  },
];
