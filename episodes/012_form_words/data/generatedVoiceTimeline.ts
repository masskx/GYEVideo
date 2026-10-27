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
    end: 3.6,
    text: `transform 不是乱变`,
    audio: `/audio/segments/001.mp3`,
  },
  {
    id: `flash-words`,
    start: 3.6,
    end: 8.016,
    text: `form / uniform / conform / reform / transform`,
    audio: `/audio/segments/002.mp3`,
  },
  {
    id: `same-root`,
    start: 8.016,
    end: 12.432,
    text: `它们都藏着 shape`,
    audio: `/audio/segments/003.mp3`,
  },
  {
    id: `root-ject`,
    start: 12.432,
    end: 16.344,
    text: `form = shape / 形状`,
    audio: `/audio/segments/004.mp3`,
  },
  {
    id: `word-reject`,
    start: 16.344,
    end: 20.904,
    text: `form = 形式 / 形状 / 形成`,
    audio: `/audio/segments/005.mp3`,
  },
  {
    id: `word-object`,
    start: 20.904,
    end: 27.936,
    text: `uniform = 一个形状 → 制服 / 统一`,
    audio: `/audio/segments/006.mp3`,
  },
  {
    id: `word-subject`,
    start: 27.936,
    end: 34.128,
    text: `conform = 同一个形状 → 符合`,
    audio: `/audio/segments/007.mp3`,
  },
  {
    id: `word-project`,
    start: 34.128,
    end: 40.512,
    text: `reform = 重新形成 → 改革`,
    audio: `/audio/segments/008.mp3`,
  },
  {
    id: `word-inject`,
    start: 40.512,
    end: 46.488,
    text: `transform = 换一个形状 → 转变`,
    audio: `/audio/segments/009.mp3`,
  },
  {
    id: `word-eject`,
    start: 46.488,
    end: 53.136,
    text: `perform = 做成结果 → 执行 / 表演`,
    audio: `/audio/segments/010.mp3`,
  },
  {
    id: `word-abject`,
    start: 53.136,
    end: 59.112,
    text: `inform = 信息成形进入脑子 → 通知`,
    audio: `/audio/segments/011.mp3`,
  },
  {
    id: `word-deject`,
    start: 59.112,
    end: 63.024,
    text: `formula = 固定形式 → 公式 / 配方`,
    audio: `/audio/segments/012.mp3`,
  },
  {
    id: `grid-connect`,
    start: 63.024,
    end: 70.728,
    text: `uniform / conform / reform / transform，都围着 shape 转`,
    audio: `/audio/segments/013.mp3`,
  },
  {
    id: `summary`,
    start: 70.728,
    end: 74.544,
    text: `form = shape：形状，形成`,
    audio: `/audio/segments/014.mp3`,
  },
  {
    id: `outro`,
    start: 74.544,
    end: 77.712,
    text: `看到 form，先想：变成什么形状？`,
    audio: `/audio/segments/015.mp3`,
  },
];
