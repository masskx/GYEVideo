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
    end: 4.32,
    text: `看到 auto 别只会想 automatic`,
    audio: `/audio/segments/001.mp3`,
  },
  {
    id: `flash-words`,
    start: 4.32,
    end: 9.144,
    text: `automatic / automate / autonomous / autobiography / autopilot`,
    audio: `/audio/segments/002.mp3`,
  },
  {
    id: `same-root`,
    start: 9.144,
    end: 13.056,
    text: `它们都围着“自己来”`,
    audio: `/audio/segments/003.mp3`,
  },
  {
    id: `root-ject`,
    start: 13.056,
    end: 16.32,
    text: `auto = self / 自己，自动`,
    audio: `/audio/segments/004.mp3`,
  },
  {
    id: `word-reject`,
    start: 16.32,
    end: 21.24,
    text: `automatic = 自己动起来 -> 自动的`,
    audio: `/audio/segments/005.mp3`,
  },
  {
    id: `word-object`,
    start: 21.24,
    end: 25.512,
    text: `automate = 让流程自己跑 -> 自动化`,
    audio: `/audio/segments/006.mp3`,
  },
  {
    id: `word-subject`,
    start: 25.512,
    end: 30.024,
    text: `autonomous = 自己做决定 -> 自主的`,
    audio: `/audio/segments/007.mp3`,
  },
  {
    id: `word-project`,
    start: 30.024,
    end: 36.816,
    text: `autobiography = 自己写自己 -> 自传`,
    audio: `/audio/segments/008.mp3`,
  },
  {
    id: `word-inject`,
    start: 36.816,
    end: 42.528,
    text: `autopilot = 自己稳方向 -> 自动驾驶`,
    audio: `/audio/segments/009.mp3`,
  },
  {
    id: `word-eject`,
    start: 42.528,
    end: 47.256,
    text: `autofocus = 自己找焦点 -> 自动对焦`,
    audio: `/audio/segments/010.mp3`,
  },
  {
    id: `word-abject`,
    start: 47.256,
    end: 52.248,
    text: `autodidact = 自己把自己学会 -> 自学者`,
    audio: `/audio/segments/011.mp3`,
  },
  {
    id: `word-deject`,
    start: 52.248,
    end: 58.128,
    text: `autoimmune = 身体自己打自己 -> 自身免疫的`,
    audio: `/audio/segments/012.mp3`,
  },
  {
    id: `grid-connect`,
    start: 58.128,
    end: 66.648,
    text: `automatic / autonomous / autopilot，都围着 self 转`,
    audio: `/audio/segments/013.mp3`,
  },
  {
    id: `summary`,
    start: 66.648,
    end: 70.224,
    text: `auto = self / 自己，自动`,
    audio: `/audio/segments/014.mp3`,
  },
  {
    id: `outro`,
    start: 70.224,
    end: 74.784,
    text: `看到 auto，先想：谁在自己完成？`,
    audio: `/audio/segments/015.mp3`,
  },
];
