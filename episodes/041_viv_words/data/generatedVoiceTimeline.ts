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
    end: 2.832,
    text: `vivid 你可能一直不知道它在说什么`,
    audio: `/audio/segments/001.mp3`,
  },
  {
    id: `flash-words`,
    start: 2.832,
    end: 6.72,
    text: `vivid / survive / revive / vital / vitamin`,
    audio: `/audio/segments/002.mp3`,
  },
  {
    id: `same-root`,
    start: 6.72,
    end: 9.648,
    text: `这些词，其实都在讲同一种生命力`,
    audio: `/audio/segments/003.mp3`,
  },
  {
    id: `root-viv`,
    start: 9.648,
    end: 13.632,
    text: `viv，vit = live，生命，活着。`,
    audio: `/audio/segments/004.mp3`,
  },
  {
    id: `word-vivid`,
    start: 13.632,
    end: 20.496,
    text: `vivid = 活生生的 -> 生动的`,
    audio: `/audio/segments/005.mp3`,
  },
  {
    id: `word-survive`,
    start: 20.496,
    end: 26.688,
    text: `survive = 活过难关 -> 幸存`,
    audio: `/audio/segments/006.mp3`,
  },
  {
    id: `word-revive`,
    start: 26.688,
    end: 33.12,
    text: `revive = 重新活过来 -> 复活 / 复苏`,
    audio: `/audio/segments/007.mp3`,
  },
  {
    id: `word-vital`,
    start: 33.12,
    end: 39.312,
    text: `vital = 关乎生命 -> 至关重要的`,
    audio: `/audio/segments/008.mp3`,
  },
  {
    id: `word-vitamin`,
    start: 39.312,
    end: 45.768,
    text: `vitamin = 生命的物质 -> 维生素`,
    audio: `/audio/segments/009.mp3`,
  },
  {
    id: `word-vivacious`,
    start: 45.768,
    end: 52.392,
    text: `vivacious = 充满生命力 -> 活泼的`,
    audio: `/audio/segments/010.mp3`,
  },
  {
    id: `word-vitality`,
    start: 52.392,
    end: 57.912,
    text: `vitality = 生命力的程度 -> 活力 / 生机`,
    audio: `/audio/segments/011.mp3`,
  },
  {
    id: `word-convivial`,
    start: 57.912,
    end: 63.624,
    text: `convivial = 一起快乐活着 -> 欢乐的`,
    audio: `/audio/segments/012.mp3`,
  },
  {
    id: `grid-connect`,
    start: 63.624,
    end: 70.896,
    text: `vivid / survive / revive，都围着 live 转`,
    audio: `/audio/segments/013.mp3`,
  },
  {
    id: `summary`,
    start: 70.896,
    end: 75.12,
    text: `viv / vit = live / 活着`,
    audio: `/audio/segments/014.mp3`,
  },
  {
    id: `outro`,
    start: 75.12,
    end: 81.864,
    text: `看到 viv / vit，先想：怎么活？`,
    audio: `/audio/segments/015.mp3`,
  },
];
