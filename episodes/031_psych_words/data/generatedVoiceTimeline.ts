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
    end: 5.52,
    text: `看到 psych 别只会想 psychology`,
    audio: `/audio/segments/001.mp3`,
  },
  {
    id: `flash-words`,
    start: 5.52,
    end: 10.608,
    text: `psychology / psyche / psychic / psychosis / psychopath`,
    audio: `/audio/segments/002.mp3`,
  },
  {
    id: `same-root`,
    start: 10.608,
    end: 14.592,
    text: `它们都连着 mind / soul`,
    audio: `/audio/segments/003.mp3`,
  },
  {
    id: `root-ject`,
    start: 14.592,
    end: 19.968,
    text: `psych = mind / soul`,
    audio: `/audio/segments/004.mp3`,
  },
  {
    id: `word-reject`,
    start: 19.968,
    end: 24.696,
    text: `psychology = 研究心理 -> 心理学`,
    audio: `/audio/segments/005.mp3`,
  },
  {
    id: `word-object`,
    start: 24.696,
    end: 28.776,
    text: `psyche = 心灵本身`,
    audio: `/audio/segments/006.mp3`,
  },
  {
    id: `word-subject`,
    start: 28.776,
    end: 34.032,
    text: `psychic = 精神的 / 灵媒的`,
    audio: `/audio/segments/007.mp3`,
  },
  {
    id: `word-project`,
    start: 34.032,
    end: 38.856,
    text: `psychosis = 精神失常状态`,
    audio: `/audio/segments/008.mp3`,
  },
  {
    id: `word-inject`,
    start: 38.856,
    end: 43.704,
    text: `psychopath = 心理结构异常者`,
    audio: `/audio/segments/009.mp3`,
  },
  {
    id: `word-eject`,
    start: 43.704,
    end: 48.432,
    text: `psychotherapy = 心理治疗`,
    audio: `/audio/segments/010.mp3`,
  },
  {
    id: `word-abject`,
    start: 48.432,
    end: 54.168,
    text: `psychosomatic = 心理影响身体`,
    audio: `/audio/segments/011.mp3`,
  },
  {
    id: `word-deject`,
    start: 54.168,
    end: 59.64,
    text: `psychoanalysis = 精神分析`,
    audio: `/audio/segments/012.mp3`,
  },
  {
    id: `grid-connect`,
    start: 59.64,
    end: 68.16,
    text: `psychology / psyche / psychosis，都围着 mind 转`,
    audio: `/audio/segments/013.mp3`,
  },
  {
    id: `summary`,
    start: 68.16,
    end: 71.64,
    text: `psych = mind / soul`,
    audio: `/audio/segments/014.mp3`,
  },
  {
    id: `outro`,
    start: 71.64,
    end: 77.04,
    text: `看到 psych，先想：它在讲哪种心理？`,
    audio: `/audio/segments/015.mp3`,
  },
];
