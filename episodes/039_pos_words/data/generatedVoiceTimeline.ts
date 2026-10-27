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
    end: 2.328,
    text: `position 别再当孤儿词背`,
    audio: `/audio/segments/001.mp3`,
  },
  {
    id: `flash-words`,
    start: 2.328,
    end: 6.552,
    text: `position / deposit / oppose / postpone / expose`,
    audio: `/audio/segments/002.mp3`,
  },
  {
    id: `same-root`,
    start: 6.552,
    end: 10.608,
    text: `最熟的 position，反而最会带偏你`,
    audio: `/audio/segments/003.mp3`,
  },
  {
    id: `root-pos`,
    start: 10.608,
    end: 15.024,
    text: `pos / pon = put / place / 放置`,
    audio: `/audio/segments/004.mp3`,
  },
  {
    id: `word-position`,
    start: 15.024,
    end: 17.448,
    text: `position = 被放在哪里 -> 位置`,
    audio: `/audio/segments/005.mp3`,
  },
  {
    id: `word-deposit`,
    start: 17.448,
    end: 22.248,
    text: `deposit = 放下去 -> 存放 / 押金`,
    audio: `/audio/segments/006.mp3`,
  },
  {
    id: `word-compose`,
    start: 22.248,
    end: 25.248,
    text: `compose = 放到一起 -> 组成`,
    audio: `/audio/segments/007.mp3`,
  },
  {
    id: `word-expose`,
    start: 25.248,
    end: 30.096,
    text: `expose = 放到外面 -> 暴露 / 揭露`,
    audio: `/audio/segments/008.mp3`,
  },
  {
    id: `word-oppose`,
    start: 30.096,
    end: 34.152,
    text: `oppose = 放在对面 -> 反对`,
    audio: `/audio/segments/009.mp3`,
  },
  {
    id: `word-propose`,
    start: 34.152,
    end: 37.512,
    text: `propose = 放到前面 -> 提议`,
    audio: `/audio/segments/010.mp3`,
  },
  {
    id: `word-postpone`,
    start: 37.512,
    end: 41.328,
    text: `postpone = 放到后面 -> 推迟`,
    audio: `/audio/segments/011.mp3`,
  },
  {
    id: `word-component`,
    start: 41.328,
    end: 45.6,
    text: `component = 放在一起的一部分 -> 组成部分`,
    audio: `/audio/segments/012.mp3`,
  },
  {
    id: `grid-connect`,
    start: 45.6,
    end: 50.592,
    text: `一串词 suddenly connected`,
    audio: `/audio/segments/013.mp3`,
  },
  {
    id: `summary`,
    start: 50.592,
    end: 54.24,
    text: `pos / pon = put / place / 放置`,
    audio: `/audio/segments/014.mp3`,
  },
  {
    id: `outro`,
    start: 54.24,
    end: 58.056,
    text: `秒答：postpone 是把什么放到后面？`,
    audio: `/audio/segments/015.mp3`,
  },
];
