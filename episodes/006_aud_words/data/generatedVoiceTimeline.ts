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
    end: 3.504,
    text: `audio 不只是音频`,
    audio: `/audio/segments/001.mp3`,
  },
  {
    id: `flash-words`,
    start: 3.504,
    end: 7.272,
    text: `audio / audience / audit / audible / audition`,
    audio: `/audio/segments/002.mp3`,
  },
  {
    id: `same-root`,
    start: 7.272,
    end: 10.608,
    text: `它们都和“听”有关`,
    audio: `/audio/segments/003.mp3`,
  },
  {
    id: `root-ject`,
    start: 10.608,
    end: 13.56,
    text: `aud = hear / 听`,
    audio: `/audio/segments/004.mp3`,
  },
  {
    id: `word-reject`,
    start: 13.56,
    end: 17.784,
    text: `audio = 和听有关 → 音频`,
    audio: `/audio/segments/005.mp3`,
  },
  {
    id: `word-object`,
    start: 17.784,
    end: 23.016,
    text: `audience = 听的人 → 观众`,
    audio: `/audio/segments/006.mp3`,
  },
  {
    id: `word-subject`,
    start: 23.016,
    end: 27.648,
    text: `audit = 仔细听查 → 审计`,
    audio: `/audio/segments/007.mp3`,
  },
  {
    id: `word-project`,
    start: 27.648,
    end: 31.656,
    text: `audible = 能被听见 → 听得见的`,
    audio: `/audio/segments/008.mp3`,
  },
  {
    id: `word-inject`,
    start: 31.656,
    end: 36.624,
    text: `audition = 试听表现 → 试镜`,
    audio: `/audio/segments/009.mp3`,
  },
  {
    id: `word-eject`,
    start: 36.624,
    end: 40.632,
    text: `auditorium = 听众聚集地 → 礼堂`,
    audio: `/audio/segments/010.mp3`,
  },
  {
    id: `word-abject`,
    start: 40.632,
    end: 44.568,
    text: `inaudible = 听不见的`,
    audio: `/audio/segments/011.mp3`,
  },
  {
    id: `word-deject`,
    start: 44.568,
    end: 48.672,
    text: `audiobook = 用来听的书 → 有声书`,
    audio: `/audio/segments/012.mp3`,
  },
  {
    id: `grid-connect`,
    start: 48.672,
    end: 57.216,
    text: `audio / audience / audit / audible / audition，都围着 hear 转`,
    audio: `/audio/segments/013.mp3`,
  },
  {
    id: `summary`,
    start: 57.216,
    end: 60.408,
    text: `aud = hear：听`,
    audio: `/audio/segments/014.mp3`,
  },
  {
    id: `outro`,
    start: 60.408,
    end: 63.432,
    text: `看到 aud，先想：谁在听`,
    audio: `/audio/segments/015.mp3`,
  },
];
