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
    end: 4.8,
    text: `看到 chron 别只会想 chronic`,
    audio: `/audio/segments/001.mp3`,
  },
  {
    id: `flash-words`,
    start: 4.8,
    end: 10.344,
    text: `chronology / chronic / synchronize / chronological / anachronism`,
    audio: `/audio/segments/002.mp3`,
  },
  {
    id: `same-root`,
    start: 10.344,
    end: 14.52,
    text: `它们都连着 time / 时间`,
    audio: `/audio/segments/003.mp3`,
  },
  {
    id: `root-ject`,
    start: 14.52,
    end: 18.12,
    text: `chron = time / 时间`,
    audio: `/audio/segments/004.mp3`,
  },
  {
    id: `word-reject`,
    start: 18.12,
    end: 24.096,
    text: `chronology = 按时间排开 -> 时间顺序`,
    audio: `/audio/segments/005.mp3`,
  },
  {
    id: `word-object`,
    start: 24.096,
    end: 29.808,
    text: `chronic = 持续很久 -> 长期的`,
    audio: `/audio/segments/006.mp3`,
  },
  {
    id: `word-subject`,
    start: 29.808,
    end: 34.368,
    text: `synchronize = 时间对齐 -> 同步`,
    audio: `/audio/segments/007.mp3`,
  },
  {
    id: `word-project`,
    start: 34.368,
    end: 38.208,
    text: `chronological = 按时间顺序的`,
    audio: `/audio/segments/008.mp3`,
  },
  {
    id: `word-inject`,
    start: 38.208,
    end: 42.144,
    text: `chronicle = 按时间记录`,
    audio: `/audio/segments/009.mp3`,
  },
  {
    id: `word-eject`,
    start: 42.144,
    end: 48.12,
    text: `anachronism = 放错时代 -> 时代错误`,
    audio: `/audio/segments/010.mp3`,
  },
  {
    id: `word-abject`,
    start: 48.12,
    end: 52.56,
    text: `chronometer = 精确计时器`,
    audio: `/audio/segments/011.mp3`,
  },
  {
    id: `word-deject`,
    start: 52.56,
    end: 57.96,
    text: `diachronic = 跨时间变化 -> 历时的`,
    audio: `/audio/segments/012.mp3`,
  },
  {
    id: `grid-connect`,
    start: 57.96,
    end: 66.744,
    text: `chronology / chronic / synchronize，都围着 time 转`,
    audio: `/audio/segments/013.mp3`,
  },
  {
    id: `summary`,
    start: 66.744,
    end: 70.32,
    text: `chron = time / 时间`,
    audio: `/audio/segments/014.mp3`,
  },
  {
    id: `outro`,
    start: 70.32,
    end: 76.056,
    text: `看到 chron，先想：它和哪种时间关系有关？`,
    audio: `/audio/segments/015.mp3`,
  },
];
