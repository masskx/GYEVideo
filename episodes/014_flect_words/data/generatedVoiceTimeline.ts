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
    end: 3.96,
    text: `reflect 不只是“反思”`,
    audio: `/audio/segments/001.mp3`,
  },
  {
    id: `flash-words`,
    start: 3.96,
    end: 7.944,
    text: `flex / reflect / deflect / inflect / reflex`,
    audio: `/audio/segments/002.mp3`,
  },
  {
    id: `same-root`,
    start: 7.944,
    end: 12.768,
    text: `它们都藏着 bend`,
    audio: `/audio/segments/003.mp3`,
  },
  {
    id: `root-ject`,
    start: 12.768,
    end: 17.616,
    text: `flect / flex = bend / 弯曲`,
    audio: `/audio/segments/004.mp3`,
  },
  {
    id: `word-reject`,
    start: 17.616,
    end: 23.256,
    text: `flex = 弯曲 / 伸缩`,
    audio: `/audio/segments/005.mp3`,
  },
  {
    id: `word-object`,
    start: 23.256,
    end: 28.056,
    text: `flexible = 能弯 → 灵活的`,
    audio: `/audio/segments/006.mp3`,
  },
  {
    id: `word-subject`,
    start: 28.056,
    end: 34.032,
    text: `reflect = 弯回去 → 反射 / 反思`,
    audio: `/audio/segments/007.mp3`,
  },
  {
    id: `word-project`,
    start: 34.032,
    end: 39.6,
    text: `reflection = 弯回来的结果 → 反射 / 倒影`,
    audio: `/audio/segments/008.mp3`,
  },
  {
    id: `word-inject`,
    start: 39.6,
    end: 45.6,
    text: `deflect = 弯开 → 偏转`,
    audio: `/audio/segments/009.mp3`,
  },
  {
    id: `word-eject`,
    start: 45.6,
    end: 51,
    text: `inflect = 声音拐弯 → 变调`,
    audio: `/audio/segments/010.mp3`,
  },
  {
    id: `word-abject`,
    start: 51,
    end: 55.392,
    text: `reflex = 自动弯回 → 反射动作`,
    audio: `/audio/segments/011.mp3`,
  },
  {
    id: `word-deject`,
    start: 55.392,
    end: 59.208,
    text: `reflexive = 反射性的 / 反身的`,
    audio: `/audio/segments/012.mp3`,
  },
  {
    id: `grid-connect`,
    start: 59.208,
    end: 66.264,
    text: `flex / reflect / deflect / inflect，都围着 bend 转`,
    audio: `/audio/segments/013.mp3`,
  },
  {
    id: `summary`,
    start: 66.264,
    end: 70.68,
    text: `flect / flex = bend：弯曲，拐弯`,
    audio: `/audio/segments/014.mp3`,
  },
  {
    id: `outro`,
    start: 70.68,
    end: 74.376,
    text: `看到 flect / flex，先想：往哪儿弯？`,
    audio: `/audio/segments/015.mp3`,
  },
];
