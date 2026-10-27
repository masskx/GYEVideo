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
    end: 2.904,
    text: `nature 你可能一直不知道它在说什么`,
    audio: `/audio/segments/001.mp3`,
  },
  {
    id: `flash-words`,
    start: 2.904,
    end: 7.392,
    text: `native / nation / nature / innate / renaissance`,
    audio: `/audio/segments/002.mp3`,
  },
  {
    id: `same-root`,
    start: 7.392,
    end: 10.464,
    text: `这些词，其实都在讲同一个天生来源`,
    audio: `/audio/segments/003.mp3`,
  },
  {
    id: `root-nat`,
    start: 10.464,
    end: 14.52,
    text: `nat = birth，出生，天生。`,
    audio: `/audio/segments/004.mp3`,
  },
  {
    id: `word-native`,
    start: 14.52,
    end: 21.6,
    text: `native = 出生在哪 -> 本地的`,
    audio: `/audio/segments/005.mp3`,
  },
  {
    id: `word-nation`,
    start: 21.6,
    end: 28.2,
    text: `nation = 出生在同一地的人 -> 国家`,
    audio: `/audio/segments/006.mp3`,
  },
  {
    id: `word-nature`,
    start: 28.2,
    end: 34.392,
    text: `nature = 天生的状态 -> 自然`,
    audio: `/audio/segments/007.mp3`,
  },
  {
    id: `word-natural`,
    start: 34.392,
    end: 40.32,
    text: `natural = 天的 -> 自然的 / 天生的`,
    audio: `/audio/segments/008.mp3`,
  },
  {
    id: `word-innate`,
    start: 40.32,
    end: 47.232,
    text: `innate = 出生就带着 -> 天生的`,
    audio: `/audio/segments/009.mp3`,
  },
  {
    id: `word-naive`,
    start: 47.232,
    end: 53.208,
    text: `naive = 像刚出生一样 -> 天真的`,
    audio: `/audio/segments/010.mp3`,
  },
  {
    id: `word-renaissance`,
    start: 53.208,
    end: 60.288,
    text: `renaissance = 再次出生 -> 复兴`,
    audio: `/audio/segments/011.mp3`,
  },
  {
    id: `word-pregnant`,
    start: 60.288,
    end: 66.912,
    text: `pregnant = 出生之前 -> 怀孕的`,
    audio: `/audio/segments/012.mp3`,
  },
  {
    id: `grid-connect`,
    start: 66.912,
    end: 74.328,
    text: `native / nation / innate，都围着 birth 转`,
    audio: `/audio/segments/013.mp3`,
  },
  {
    id: `summary`,
    start: 74.328,
    end: 78.288,
    text: `nat = birth / 出生`,
    audio: `/audio/segments/014.mp3`,
  },
  {
    id: `outro`,
    start: 78.288,
    end: 85.104,
    text: `看到 nat，先想：生在哪？天生什么？`,
    audio: `/audio/segments/015.mp3`,
  },
];
