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
    end: 2.712,
    text: `vacation 你可能一直只记成度假`,
    audio: `/audio/segments/001.mp3`,
  },
  {
    id: `flash-words`,
    start: 2.712,
    end: 7.176,
    text: `vacation / vacant / vacancy / vacate / evacuate`,
    audio: `/audio/segments/002.mp3`,
  },
  {
    id: `same-root`,
    start: 7.176,
    end: 10.176,
    text: `这些词，其实都在讲一个字：空`,
    audio: `/audio/segments/003.mp3`,
  },
  {
    id: `root-vac`,
    start: 10.176,
    end: 13.248,
    text: `vac = empty / 空`,
    audio: `/audio/segments/004.mp3`,
  },
  {
    id: `word-vacant`,
    start: 13.248,
    end: 17.88,
    text: `vacant = 空着的`,
    audio: `/audio/segments/005.mp3`,
  },
  {
    id: `word-vacancy`,
    start: 17.88,
    end: 22.416,
    text: `vacancy = 空出来的位置 -> 空缺`,
    audio: `/audio/segments/006.mp3`,
  },
  {
    id: `word-vacate`,
    start: 22.416,
    end: 26.832,
    text: `vacate = 腾空 -> 搬离`,
    audio: `/audio/segments/007.mp3`,
  },
  {
    id: `word-evacuate`,
    start: 26.832,
    end: 32.208,
    text: `evacuate = 清空撤走 -> 疏散`,
    audio: `/audio/segments/008.mp3`,
  },
  {
    id: `word-vacation`,
    start: 32.208,
    end: 36.984,
    text: `vacation = 把工作空出来 -> 假期`,
    audio: `/audio/segments/009.mp3`,
  },
  {
    id: `word-vacuum`,
    start: 36.984,
    end: 41.616,
    text: `vacuum = 里面空了 -> 真空`,
    audio: `/audio/segments/010.mp3`,
  },
  {
    id: `word-vacuous`,
    start: 41.616,
    end: 46.272,
    text: `vacuous = 被掏空 -> 空洞的`,
    audio: `/audio/segments/011.mp3`,
  },
  {
    id: `grid-connect`,
    start: 46.272,
    end: 55.416,
    text: `一整个 vac，就是空`,
    audio: `/audio/segments/012.mp3`,
  },
  {
    id: `summary`,
    start: 55.416,
    end: 58.488,
    text: `vac = empty / 空`,
    audio: `/audio/segments/013.mp3`,
  },
  {
    id: `outro`,
    start: 58.488,
    end: 62.616,
    text: `秒答：vacation 为什么和空有关？`,
    audio: `/audio/segments/014.mp3`,
  },
];
