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
    end: 3.816,
    text: `给我 3 秒，让你记住 5 个 port 单词`,
    audio: `/audio/segments/001.mp3`,
  },
  {
    id: `flash-words`,
    start: 3.816,
    end: 8.04,
    text: `import / export / transport / support / report`,
    audio: `/audio/segments/002.mp3`,
  },
  {
    id: `same-root`,
    start: 8.04,
    end: 11.976,
    text: `它们都藏着同一个动作`,
    audio: `/audio/segments/003.mp3`,
  },
  {
    id: `root-ject`,
    start: 11.976,
    end: 16.392,
    text: `port = carry / 拿，带，运输`,
    audio: `/audio/segments/004.mp3`,
  },
  {
    id: `word-reject`,
    start: 16.392,
    end: 20.832,
    text: `import = 带进来 → 进口`,
    audio: `/audio/segments/005.mp3`,
  },
  {
    id: `word-object`,
    start: 20.832,
    end: 25.008,
    text: `export = 带出去 → 出口`,
    audio: `/audio/segments/006.mp3`,
  },
  {
    id: `word-subject`,
    start: 25.008,
    end: 29.52,
    text: `transport = 运过去 → 运输`,
    audio: `/audio/segments/007.mp3`,
  },
  {
    id: `word-project`,
    start: 29.52,
    end: 34.416,
    text: `support = 从下面托住 → 支持`,
    audio: `/audio/segments/008.mp3`,
  },
  {
    id: `word-inject`,
    start: 34.416,
    end: 38.472,
    text: `report = 把消息带回来 → 报告`,
    audio: `/audio/segments/009.mp3`,
  },
  {
    id: `word-eject`,
    start: 38.472,
    end: 42.792,
    text: `portable = 能带着走 → 便携的`,
    audio: `/audio/segments/010.mp3`,
  },
  {
    id: `word-abject`,
    start: 42.792,
    end: 46.08,
    text: `porter = 搬东西的人 → 搬运工`,
    audio: `/audio/segments/011.mp3`,
  },
  {
    id: `word-deject`,
    start: 46.08,
    end: 49.656,
    text: `deport = 带离某地 → 驱逐出境`,
    audio: `/audio/segments/012.mp3`,
  },
  {
    id: `grid-connect`,
    start: 49.656,
    end: 57.96,
    text: `进来 / 出去 / 运过去 / 托住 / 带回消息`,
    audio: `/audio/segments/013.mp3`,
  },
  {
    id: `summary`,
    start: 57.96,
    end: 62.232,
    text: `port = carry：拿、带、运输`,
    audio: `/audio/segments/014.mp3`,
  },
  {
    id: `outro`,
    start: 62.232,
    end: 65.4,
    text: `看到 port，先想：把什么带到哪里`,
    audio: `/audio/segments/015.mp3`,
  },
];
