export type GeneratedVoiceTimelineItem = {
  id: string;
  start: number;
  end: number;
  text: string;
  audio: string;
};

export const generatedVoiceTimeline: GeneratedVoiceTimelineItem[] = [
  {
    id: `title`,
    start: 0,
    end: 3.144,
    text: `今天在白板上，只讲一个字：看`,
    audio: `/audio/segments/001.mp3`,
  },
  {
    id: `root`,
    start: 3.144,
    end: 7.896,
    text: `vis / vid = see，看`,
    audio: `/audio/segments/002.mp3`,
  },
  {
    id: `w-visit`,
    start: 7.896,
    end: 12.768,
    text: `visit：vis 看 + it 去 → 去看 → 参观；拜访`,
    audio: `/audio/segments/003.mp3`,
  },
  {
    id: `w-vision`,
    start: 12.768,
    end: 16.704,
    text: `vision：看的能力 → 视力；远见`,
    audio: `/audio/segments/004.mp3`,
  },
  {
    id: `w-visible`,
    start: 16.704,
    end: 19.656,
    text: `visible：能被看见的 → 可见的`,
    audio: `/audio/segments/005.mp3`,
  },
  {
    id: `w-evidence`,
    start: 19.656,
    end: 23.904,
    text: `evidence：e 向外 + vid 看 → 让人看得见的东西 → 证据`,
    audio: `/audio/segments/006.mp3`,
  },
  {
    id: `twist-q`,
    start: 23.904,
    end: 27.936,
    text: `最意外的是 provide：提供，和“看”有什么关系？`,
    audio: `/audio/segments/007.mp3`,
  },
  {
    id: `twist-a`,
    start: 27.936,
    end: 33.024,
    text: `pro 向前 + vid 看 → 提前看到 → 预先准备 → 提供`,
    audio: `/audio/segments/008.mp3`,
  },
  {
    id: `overview`,
    start: 33.024,
    end: 36.096,
    text: `五个高考词，一个词根：看`,
    audio: `/audio/segments/009.mp3`,
  },
  {
    id: `homework`,
    start: 36.096,
    end: 39.36,
    text: `最后一题贴在白板上，答案写在评论区`,
    audio: `/audio/segments/010.mp3`,
  },
];
