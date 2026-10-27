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
    end: 3.672,
    text: `submit 不只是“提交”`,
    audio: `/audio/segments/001.mp3`,
  },
  {
    id: `flash-words`,
    start: 3.672,
    end: 7.824,
    text: `emit / transmit / submit / admit / dismiss`,
    audio: `/audio/segments/002.mp3`,
  },
  {
    id: `same-root`,
    start: 7.824,
    end: 12.504,
    text: `它们都藏着 send`,
    audio: `/audio/segments/003.mp3`,
  },
  {
    id: `root-ject`,
    start: 12.504,
    end: 16.848,
    text: `mit / miss = send / 发送`,
    audio: `/audio/segments/004.mp3`,
  },
  {
    id: `word-reject`,
    start: 16.848,
    end: 22.992,
    text: `emit = 向外发送 → 发出`,
    audio: `/audio/segments/005.mp3`,
  },
  {
    id: `word-object`,
    start: 22.992,
    end: 29.544,
    text: `transmit = 跨过去发送 → 传输`,
    audio: `/audio/segments/006.mp3`,
  },
  {
    id: `word-subject`,
    start: 29.544,
    end: 35.112,
    text: `submit = 往下发送 → 提交`,
    audio: `/audio/segments/007.mp3`,
  },
  {
    id: `word-project`,
    start: 35.112,
    end: 42.72,
    text: `admit = 送进去 → 准许进入 / 承认`,
    audio: `/audio/segments/008.mp3`,
  },
  {
    id: `word-inject`,
    start: 42.72,
    end: 48.288,
    text: `commit = 一起送进去 → 投入 / 承诺`,
    audio: `/audio/segments/009.mp3`,
  },
  {
    id: `word-eject`,
    start: 48.288,
    end: 55.32,
    text: `permit = 让它通过 → 允许`,
    audio: `/audio/segments/010.mp3`,
  },
  {
    id: `word-abject`,
    start: 55.32,
    end: 62.256,
    text: `dismiss = 送走 → 解散 / 不予考虑`,
    audio: `/audio/segments/011.mp3`,
  },
  {
    id: `word-deject`,
    start: 62.256,
    end: 66.504,
    text: `mission = 被派出去的事 → 任务`,
    audio: `/audio/segments/012.mp3`,
  },
  {
    id: `grid-connect`,
    start: 66.504,
    end: 74.448,
    text: `emit / transmit / submit / dismiss，都围着 send 转`,
    audio: `/audio/segments/013.mp3`,
  },
  {
    id: `summary`,
    start: 74.448,
    end: 78.84,
    text: `mit / miss = send：发送，派出去`,
    audio: `/audio/segments/014.mp3`,
  },
  {
    id: `outro`,
    start: 78.84,
    end: 83.112,
    text: `看到 mit / miss，先想：送到哪儿？`,
    audio: `/audio/segments/015.mp3`,
  },
];
