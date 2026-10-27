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
    end: 3.696,
    text: `structure 不只是“结构”`,
    audio: `/audio/segments/001.mp3`,
  },
  {
    id: `flash-words`,
    start: 3.696,
    end: 8.016,
    text: `structure / construct / instruct / obstruct / reconstruct`,
    audio: `/audio/segments/002.mp3`,
  },
  {
    id: `same-root`,
    start: 8.016,
    end: 12.576,
    text: `它们都藏着 build`,
    audio: `/audio/segments/003.mp3`,
  },
  {
    id: `root-ject`,
    start: 12.576,
    end: 16.68,
    text: `struct = build / 建造`,
    audio: `/audio/segments/004.mp3`,
  },
  {
    id: `word-reject`,
    start: 16.68,
    end: 20.016,
    text: `structure = 搭起来的样子 → 结构`,
    audio: `/audio/segments/005.mp3`,
  },
  {
    id: `word-object`,
    start: 20.016,
    end: 25.992,
    text: `construct = 一起搭 → 建造`,
    audio: `/audio/segments/006.mp3`,
  },
  {
    id: `word-subject`,
    start: 25.992,
    end: 31.728,
    text: `instruct = 把步骤搭进去 → 指导`,
    audio: `/audio/segments/007.mp3`,
  },
  {
    id: `word-project`,
    start: 31.728,
    end: 37.944,
    text: `obstruct = 挡住搭建 → 阻碍`,
    audio: `/audio/segments/008.mp3`,
  },
  {
    id: `word-inject`,
    start: 37.944,
    end: 43.536,
    text: `destruct = 拆掉结构 → 破坏`,
    audio: `/audio/segments/009.mp3`,
  },
  {
    id: `word-eject`,
    start: 43.536,
    end: 50.064,
    text: `reconstruct = 再建造 → 重建`,
    audio: `/audio/segments/010.mp3`,
  },
  {
    id: `word-abject`,
    start: 50.064,
    end: 54.696,
    text: `structural = 和结构有关 → 结构性的`,
    audio: `/audio/segments/011.mp3`,
  },
  {
    id: `word-deject`,
    start: 54.696,
    end: 58.56,
    text: `instruction = 搭好的步骤 → 指令 / 说明`,
    audio: `/audio/segments/012.mp3`,
  },
  {
    id: `grid-connect`,
    start: 58.56,
    end: 66.672,
    text: `construct / instruct / obstruct / reconstruct，都围着 build 转`,
    audio: `/audio/segments/013.mp3`,
  },
  {
    id: `summary`,
    start: 66.672,
    end: 70.68,
    text: `struct = build：建造，搭起来`,
    audio: `/audio/segments/014.mp3`,
  },
  {
    id: `outro`,
    start: 70.68,
    end: 74.688,
    text: `看到 struct，先想：建什么？挡什么？`,
    audio: `/audio/segments/015.mp3`,
  },
];
