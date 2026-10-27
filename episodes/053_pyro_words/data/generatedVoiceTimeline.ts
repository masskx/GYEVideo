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
    end: 3.264,
    text: `pyromania 你可能一直只记成心理学词`,
    audio: `/audio/segments/001.mp3`,
  },
  {
    id: `flash-words`,
    start: 3.264,
    end: 8.616,
    text: `pyromania / pyromaniac / pyrotechnics / pyrometer / pyrite`,
    audio: `/audio/segments/002.mp3`,
  },
  {
    id: `same-root`,
    start: 8.616,
    end: 11.52,
    text: `这些词，其实都在讲同一把火`,
    audio: `/audio/segments/003.mp3`,
  },
  {
    id: `root-pyro`,
    start: 11.52,
    end: 15.072,
    text: `pyro / pyr = fire / 火`,
    audio: `/audio/segments/004.mp3`,
  },
  {
    id: `word-pyromania`,
    start: 15.072,
    end: 19.152,
    text: `pyromania = 对火着迷 -> 纵火癖`,
    audio: `/audio/segments/005.mp3`,
  },
  {
    id: `word-pyromaniac`,
    start: 19.152,
    end: 23.784,
    text: `pyromaniac = 有纵火癖的人 -> 纵火狂`,
    audio: `/audio/segments/006.mp3`,
  },
  {
    id: `word-pyrotechnics`,
    start: 23.784,
    end: 29.016,
    text: `pyrotechnics = 玩火做效果 -> 烟火技术`,
    audio: `/audio/segments/007.mp3`,
  },
  {
    id: `word-pyrometer`,
    start: 29.016,
    end: 33.384,
    text: `pyrometer = 测火温 -> 高温计`,
    audio: `/audio/segments/008.mp3`,
  },
  {
    id: `word-pyrite`,
    start: 33.384,
    end: 37.944,
    text: `pyrite = 能打出火星 -> 黄铁矿`,
    audio: `/audio/segments/009.mp3`,
  },
  {
    id: `word-pyrex`,
    start: 37.944,
    end: 42,
    text: `pyrex = 耐火耐热 -> 耐热玻璃`,
    audio: `/audio/segments/010.mp3`,
  },
  {
    id: `word-pyracantha`,
    start: 42,
    end: 46.584,
    text: `pyracantha = 像火的红果 -> 火棘`,
    audio: `/audio/segments/011.mp3`,
  },
  {
    id: `grid-connect`,
    start: 46.584,
    end: 54.984,
    text: `一把火，串起一排词`,
    audio: `/audio/segments/012.mp3`,
  },
  {
    id: `summary`,
    start: 54.984,
    end: 58.392,
    text: `pyro / pyr = fire / 火`,
    audio: `/audio/segments/013.mp3`,
  },
  {
    id: `outro`,
    start: 58.392,
    end: 62.136,
    text: `秒答：pyrometer 为什么和火有关？`,
    audio: `/audio/segments/014.mp3`,
  },
];
