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
    end: 3.144,
    text: `exalt 你可能一直只把它背成赞美`,
    audio: `/audio/segments/001.mp3`,
  },
  {
    id: `flash-words`,
    start: 3.144,
    end: 7.464,
    text: `exalt / altitude / altimeter / alto / altiplano`,
    audio: `/audio/segments/002.mp3`,
  },
  {
    id: `same-root`,
    start: 7.464,
    end: 10.8,
    text: `这些词，其实都在讲同一个方向：高`,
    audio: `/audio/segments/003.mp3`,
  },
  {
    id: `root-alt`,
    start: 10.8,
    end: 13.536,
    text: `alt = high / 高`,
    audio: `/audio/segments/004.mp3`,
  },
  {
    id: `word-altitude`,
    start: 13.536,
    end: 18.36,
    text: `altitude = 高的程度 -> 高度 / 海拔`,
    audio: `/audio/segments/005.mp3`,
  },
  {
    id: `word-altimeter`,
    start: 18.36,
    end: 23.4,
    text: `altimeter = 测高度的工具 -> 高度计`,
    audio: `/audio/segments/006.mp3`,
  },
  {
    id: `word-alto`,
    start: 23.4,
    end: 28.944,
    text: `alto = 偏高的声部 -> 中音部`,
    audio: `/audio/segments/007.mp3`,
  },
  {
    id: `word-exalt`,
    start: 28.944,
    end: 35.904,
    text: `exalt = 往上抬高 -> 颂扬`,
    audio: `/audio/segments/008.mp3`,
  },
  {
    id: `word-altiplano`,
    start: 35.904,
    end: 40.224,
    text: `altiplano = 高的平地 -> 高原`,
    audio: `/audio/segments/009.mp3`,
  },
  {
    id: `word-altimetry`,
    start: 40.224,
    end: 45.6,
    text: `altimetry = 高度测量 -> 测高法`,
    audio: `/audio/segments/010.mp3`,
  },
  {
    id: `word-altissimo`,
    start: 45.6,
    end: 50.304,
    text: `altissimo = 极高 -> 极高音`,
    audio: `/audio/segments/011.mp3`,
  },
  {
    id: `grid-connect`,
    start: 50.304,
    end: 59.88,
    text: `一整条 alt，讲的都是高`,
    audio: `/audio/segments/012.mp3`,
  },
  {
    id: `summary`,
    start: 59.88,
    end: 62.64,
    text: `alt = high / 高`,
    audio: `/audio/segments/013.mp3`,
  },
  {
    id: `outro`,
    start: 62.64,
    end: 67.944,
    text: `秒答：exalt 为什么先是抬高？`,
    audio: `/audio/segments/014.mp3`,
  },
];
