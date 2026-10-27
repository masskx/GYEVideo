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
    end: 3.72,
    text: `video 不只是视频`,
    audio: `/audio/segments/001.mp3`,
  },
  {
    id: `flash-words`,
    start: 3.72,
    end: 7.368,
    text: `video / vision / visible / visual / evidence`,
    audio: `/audio/segments/002.mp3`,
  },
  {
    id: `same-root`,
    start: 7.368,
    end: 10.872,
    text: `它们都和“看见”有关`,
    audio: `/audio/segments/003.mp3`,
  },
  {
    id: `root-ject`,
    start: 10.872,
    end: 14.544,
    text: `vis / vid = see / 看见`,
    audio: `/audio/segments/004.mp3`,
  },
  {
    id: `word-reject`,
    start: 14.544,
    end: 19.92,
    text: `vision = 看见的画面 → 视力 / 愿景`,
    audio: `/audio/segments/005.mp3`,
  },
  {
    id: `word-object`,
    start: 19.92,
    end: 24.36,
    text: `visible = 能被看见 → 可见的`,
    audio: `/audio/segments/006.mp3`,
  },
  {
    id: `word-subject`,
    start: 24.36,
    end: 28.176,
    text: `video = 看得到的画面 → 视频`,
    audio: `/audio/segments/007.mp3`,
  },
  {
    id: `word-project`,
    start: 28.176,
    end: 32.568,
    text: `visual = 和看有关 → 视觉的`,
    audio: `/audio/segments/008.mp3`,
  },
  {
    id: `word-inject`,
    start: 32.568,
    end: 37.728,
    text: `evidence = 让事实被看见 → 证据`,
    audio: `/audio/segments/009.mp3`,
  },
  {
    id: `word-eject`,
    start: 37.728,
    end: 40.92,
    text: `evident = 看得出来 → 明显的`,
    audio: `/audio/segments/010.mp3`,
  },
  {
    id: `word-abject`,
    start: 40.92,
    end: 45.576,
    text: `visit = 去看 → 拜访 / 参观`,
    audio: `/audio/segments/011.mp3`,
  },
  {
    id: `word-deject`,
    start: 45.576,
    end: 50.88,
    text: `revise = 重新看 → 修改 / 复习`,
    audio: `/audio/segments/012.mp3`,
  },
  {
    id: `grid-connect`,
    start: 50.88,
    end: 58.68,
    text: `vision / visible / video / evidence，都围着 see 转`,
    audio: `/audio/segments/013.mp3`,
  },
  {
    id: `summary`,
    start: 58.68,
    end: 62.52,
    text: `vis / vid = see：看见`,
    audio: `/audio/segments/014.mp3`,
  },
  {
    id: `outro`,
    start: 62.52,
    end: 66.288,
    text: `看到 vis / vid，先想：看见什么`,
    audio: `/audio/segments/015.mp3`,
  },
];
