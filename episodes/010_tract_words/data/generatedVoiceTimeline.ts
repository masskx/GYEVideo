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
    text: `attract 不只是“吸引”`,
    audio: `/audio/segments/001.mp3`,
  },
  {
    id: `flash-words`,
    start: 3.672,
    end: 8.256,
    text: `attract / extract / contract / subtract / distract`,
    audio: `/audio/segments/002.mp3`,
  },
  {
    id: `same-root`,
    start: 8.256,
    end: 12.24,
    text: `它们都藏着 pull`,
    audio: `/audio/segments/003.mp3`,
  },
  {
    id: `root-ject`,
    start: 12.24,
    end: 15.36,
    text: `tract = pull / 拉，拖`,
    audio: `/audio/segments/004.mp3`,
  },
  {
    id: `word-reject`,
    start: 15.36,
    end: 20.664,
    text: `attract = 朝它拉 → 吸引`,
    audio: `/audio/segments/005.mp3`,
  },
  {
    id: `word-object`,
    start: 20.664,
    end: 26.208,
    text: `extract = 向外拉 → 提取`,
    audio: `/audio/segments/006.mp3`,
  },
  {
    id: `word-subject`,
    start: 26.208,
    end: 31.944,
    text: `contract = 拉到一起 → 收缩 / 合同`,
    audio: `/audio/segments/007.mp3`,
  },
  {
    id: `word-project`,
    start: 31.944,
    end: 38.016,
    text: `subtract = 拉走一部分 → 减去`,
    audio: `/audio/segments/008.mp3`,
  },
  {
    id: `word-inject`,
    start: 38.016,
    end: 42.432,
    text: `distract = 拉开注意力 → 分心`,
    audio: `/audio/segments/009.mp3`,
  },
  {
    id: `word-eject`,
    start: 42.432,
    end: 47.928,
    text: `retract = 拉回来 → 收回 / 撤回`,
    audio: `/audio/segments/010.mp3`,
  },
  {
    id: `word-abject`,
    start: 47.928,
    end: 51.864,
    text: `traction = 拉的力量 → 牵引力`,
    audio: `/audio/segments/011.mp3`,
  },
  {
    id: `word-deject`,
    start: 51.864,
    end: 55.776,
    text: `tractor = 用来拉的机器 → 拖拉机`,
    audio: `/audio/segments/012.mp3`,
  },
  {
    id: `grid-connect`,
    start: 55.776,
    end: 63.48,
    text: `attract / extract / contract / distract，都围着 pull 转`,
    audio: `/audio/segments/013.mp3`,
  },
  {
    id: `summary`,
    start: 63.48,
    end: 67.08,
    text: `tract = pull：拉，拖`,
    audio: `/audio/segments/014.mp3`,
  },
  {
    id: `outro`,
    start: 67.08,
    end: 70.56,
    text: `看到 tract，先想：往哪儿拉？`,
    audio: `/audio/segments/015.mp3`,
  },
];
