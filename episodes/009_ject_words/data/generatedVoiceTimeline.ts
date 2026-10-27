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
    end: 3.384,
    text: `别再硬背 ject 单词了`,
    audio: `/audio/segments/001.mp3`,
  },
  {
    id: `flash-words`,
    start: 3.384,
    end: 7.632,
    text: `reject / project / inject / object / subject`,
    audio: `/audio/segments/002.mp3`,
  },
  {
    id: `same-root`,
    start: 7.632,
    end: 11.736,
    text: `它们都藏着 throw`,
    audio: `/audio/segments/003.mp3`,
  },
  {
    id: `root-ject`,
    start: 11.736,
    end: 15.216,
    text: `ject = throw / 扔，投`,
    audio: `/audio/segments/004.mp3`,
  },
  {
    id: `word-reject`,
    start: 15.216,
    end: 20.04,
    text: `reject = 扔回去 → 拒绝`,
    audio: `/audio/segments/005.mp3`,
  },
  {
    id: `word-object`,
    start: 20.04,
    end: 25.608,
    text: `object = 扔在面前 → 物体`,
    audio: `/audio/segments/006.mp3`,
  },
  {
    id: `word-subject`,
    start: 25.608,
    end: 30.696,
    text: `subject = 放到下面讨论 → 主题 / 科目`,
    audio: `/audio/segments/007.mp3`,
  },
  {
    id: `word-project`,
    start: 30.696,
    end: 36.6,
    text: `project = 向前投 → 投射 / 项目`,
    audio: `/audio/segments/008.mp3`,
  },
  {
    id: `word-inject`,
    start: 36.6,
    end: 40.704,
    text: `inject = 投进去 → 注入`,
    audio: `/audio/segments/009.mp3`,
  },
  {
    id: `word-eject`,
    start: 40.704,
    end: 45.288,
    text: `eject = 扔出去 → 弹出`,
    audio: `/audio/segments/010.mp3`,
  },
  {
    id: `word-abject`,
    start: 45.288,
    end: 49.728,
    text: `deject = 往下扔 → 使沮丧`,
    audio: `/audio/segments/011.mp3`,
  },
  {
    id: `word-deject`,
    start: 49.728,
    end: 54.24,
    text: `trajectory = 投出去的路线 → 轨迹`,
    audio: `/audio/segments/012.mp3`,
  },
  {
    id: `grid-connect`,
    start: 54.24,
    end: 61.8,
    text: `reject / project / inject / eject，都围着 throw 转`,
    audio: `/audio/segments/013.mp3`,
  },
  {
    id: `summary`,
    start: 61.8,
    end: 65.496,
    text: `ject = throw：扔，投`,
    audio: `/audio/segments/014.mp3`,
  },
  {
    id: `outro`,
    start: 65.496,
    end: 69.144,
    text: `看到 ject，先想：往哪儿扔？`,
    audio: `/audio/segments/015.mp3`,
  },
];
