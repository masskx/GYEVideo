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
    end: 3.168,
    text: `script 不只是“剧本”`,
    audio: `/audio/segments/001.mp3`,
  },
  {
    id: `flash-words`,
    start: 3.168,
    end: 7.824,
    text: `script / describe / subscribe / prescription / manuscript`,
    audio: `/audio/segments/002.mp3`,
  },
  {
    id: `same-root`,
    start: 7.824,
    end: 11.64,
    text: `它们都和“写”有关`,
    audio: `/audio/segments/003.mp3`,
  },
  {
    id: `root-ject`,
    start: 11.64,
    end: 15.552,
    text: `script / scrib = write / 写`,
    audio: `/audio/segments/004.mp3`,
  },
  {
    id: `word-reject`,
    start: 15.552,
    end: 20.4,
    text: `script = 写好的文本 → 剧本 / 脚本`,
    audio: `/audio/segments/005.mp3`,
  },
  {
    id: `word-object`,
    start: 20.4,
    end: 24.624,
    text: `describe = 写下来说明 → 描述`,
    audio: `/audio/segments/006.mp3`,
  },
  {
    id: `word-subject`,
    start: 24.624,
    end: 30.984,
    text: `subscribe = 在下面写名 → 订阅 / 签署`,
    audio: `/audio/segments/007.mp3`,
  },
  {
    id: `word-project`,
    start: 30.984,
    end: 37.176,
    text: `prescription = 提前写好的医嘱 → 处方`,
    audio: `/audio/segments/008.mp3`,
  },
  {
    id: `word-inject`,
    start: 37.176,
    end: 43.152,
    text: `manuscript = 手写文本 → 手稿`,
    audio: `/audio/segments/009.mp3`,
  },
  {
    id: `word-eject`,
    start: 43.152,
    end: 49.44,
    text: `inscribe = 写进去 / 刻进去 → 题写`,
    audio: `/audio/segments/010.mp3`,
  },
  {
    id: `word-abject`,
    start: 49.44,
    end: 55.728,
    text: `transcribe = 转写下来 → 转录`,
    audio: `/audio/segments/011.mp3`,
  },
  {
    id: `word-deject`,
    start: 55.728,
    end: 58.848,
    text: `scribble = 潦草地写 / 乱写`,
    audio: `/audio/segments/012.mp3`,
  },
  {
    id: `grid-connect`,
    start: 58.848,
    end: 67.344,
    text: `describe / subscribe / prescription / manuscript，都围着 write 转`,
    audio: `/audio/segments/013.mp3`,
  },
  {
    id: `summary`,
    start: 67.344,
    end: 71.256,
    text: `script / scrib = write：写`,
    audio: `/audio/segments/014.mp3`,
  },
  {
    id: `outro`,
    start: 71.256,
    end: 75.816,
    text: `看到 script / scribe，先想：谁在写？`,
    audio: `/audio/segments/015.mp3`,
  },
];
