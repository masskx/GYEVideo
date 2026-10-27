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
    end: 3.048,
    text: `complete 你可能一直只记成完成`,
    audio: `/audio/segments/001.mp3`,
  },
  {
    id: `flash-words`,
    start: 3.048,
    end: 7.248,
    text: `complete / plenty / replenish / supplement / deplete`,
    audio: `/audio/segments/002.mp3`,
  },
  {
    id: `same-root`,
    start: 7.248,
    end: 10.464,
    text: `这些词，其实都在讲一个状态：满`,
    audio: `/audio/segments/003.mp3`,
  },
  {
    id: `root-plen`,
    start: 10.464,
    end: 13.392,
    text: `plen = full / 满`,
    audio: `/audio/segments/004.mp3`,
  },
  {
    id: `word-plenty`,
    start: 13.392,
    end: 18.432,
    text: `plenty = 多到满 -> 大量`,
    audio: `/audio/segments/005.mp3`,
  },
  {
    id: `word-plentiful`,
    start: 18.432,
    end: 23.304,
    text: `plentiful = 满满的 -> 丰富的`,
    audio: `/audio/segments/006.mp3`,
  },
  {
    id: `word-replenish`,
    start: 23.304,
    end: 28.992,
    text: `replenish = 重新补满 -> 补充`,
    audio: `/audio/segments/007.mp3`,
  },
  {
    id: `word-supplement`,
    start: 28.992,
    end: 34.464,
    text: `supplement = 补到更满 -> 补充`,
    audio: `/audio/segments/008.mp3`,
  },
  {
    id: `word-complete`,
    start: 34.464,
    end: 40.272,
    text: `complete = 全部填满 -> 完整 / 完成`,
    audio: `/audio/segments/009.mp3`,
  },
  {
    id: `word-deplete`,
    start: 40.272,
    end: 45.744,
    text: `deplete = 从满变空 -> 耗尽`,
    audio: `/audio/segments/010.mp3`,
  },
  {
    id: `word-compliment`,
    start: 45.744,
    end: 51.024,
    text: `compliment = 把好感加满 -> 赞美`,
    audio: `/audio/segments/011.mp3`,
  },
  {
    id: `grid-connect`,
    start: 51.024,
    end: 61.344,
    text: `一整个 plen，就是满`,
    audio: `/audio/segments/012.mp3`,
  },
  {
    id: `summary`,
    start: 61.344,
    end: 64.272,
    text: `plen = full / 满`,
    audio: `/audio/segments/013.mp3`,
  },
  {
    id: `outro`,
    start: 64.272,
    end: 69.888,
    text: `秒答：complete 为什么和满有关？`,
    audio: `/audio/segments/014.mp3`,
  },
];
