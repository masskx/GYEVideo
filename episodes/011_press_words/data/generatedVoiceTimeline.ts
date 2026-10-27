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
    end: 3.864,
    text: `express 不只是“表达”`,
    audio: `/audio/segments/001.mp3`,
  },
  {
    id: `flash-words`,
    start: 3.864,
    end: 8.04,
    text: `press / compress / suppress / express / depress`,
    audio: `/audio/segments/002.mp3`,
  },
  {
    id: `same-root`,
    start: 8.04,
    end: 12.144,
    text: `它们都藏着 press`,
    audio: `/audio/segments/003.mp3`,
  },
  {
    id: `root-ject`,
    start: 12.144,
    end: 15.96,
    text: `press = 压 / 按`,
    audio: `/audio/segments/004.mp3`,
  },
  {
    id: `word-reject`,
    start: 15.96,
    end: 21.528,
    text: `press = 压 / 按`,
    audio: `/audio/segments/005.mp3`,
  },
  {
    id: `word-object`,
    start: 21.528,
    end: 26.496,
    text: `compress = 一起压 → 压缩`,
    audio: `/audio/segments/006.mp3`,
  },
  {
    id: `word-subject`,
    start: 26.496,
    end: 32.784,
    text: `suppress = 往下压 → 压制`,
    audio: `/audio/segments/007.mp3`,
  },
  {
    id: `word-project`,
    start: 32.784,
    end: 38.52,
    text: `express = 向外压出 → 表达`,
    audio: `/audio/segments/008.mp3`,
  },
  {
    id: `word-inject`,
    start: 38.52,
    end: 43.824,
    text: `depress = 往下压 → 沮丧`,
    audio: `/audio/segments/009.mp3`,
  },
  {
    id: `word-eject`,
    start: 43.824,
    end: 48.816,
    text: `impress = 往里压 → 留下印象`,
    audio: `/audio/segments/010.mp3`,
  },
  {
    id: `word-abject`,
    start: 48.816,
    end: 52.32,
    text: `pressure = 被压的力量 → 压力`,
    audio: `/audio/segments/011.mp3`,
  },
  {
    id: `word-deject`,
    start: 52.32,
    end: 56.88,
    text: `impression = 压出的印记 → 印象`,
    audio: `/audio/segments/012.mp3`,
  },
  {
    id: `grid-connect`,
    start: 56.88,
    end: 64.32,
    text: `compress / suppress / express / impress，都围着 press 转`,
    audio: `/audio/segments/013.mp3`,
  },
  {
    id: `summary`,
    start: 64.32,
    end: 67.008,
    text: `press = 压 / 按`,
    audio: `/audio/segments/014.mp3`,
  },
  {
    id: `outro`,
    start: 67.008,
    end: 70.656,
    text: `看到 press，先想：往哪儿压？`,
    audio: `/audio/segments/015.mp3`,
  },
];
