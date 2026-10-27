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
    end: 3.456,
    text: `phone 不只是“手机”`,
    audio: `/audio/segments/001.mp3`,
  },
  {
    id: `flash-words`,
    start: 3.456,
    end: 7.536,
    text: `phone / microphone / phonics / symphony / cacophony`,
    audio: `/audio/segments/002.mp3`,
  },
  {
    id: `same-root`,
    start: 7.536,
    end: 12.288,
    text: `它们都围着“声音”`,
    audio: `/audio/segments/003.mp3`,
  },
  {
    id: `root-ject`,
    start: 12.288,
    end: 15.96,
    text: `phon = sound / voice / 声音`,
    audio: `/audio/segments/004.mp3`,
  },
  {
    id: `word-reject`,
    start: 15.96,
    end: 21.744,
    text: `phone = 传声音 → 电话`,
    audio: `/audio/segments/005.mp3`,
  },
  {
    id: `word-object`,
    start: 21.744,
    end: 27.288,
    text: `microphone = 放大小声音 → 麦克风`,
    audio: `/audio/segments/006.mp3`,
  },
  {
    id: `word-subject`,
    start: 27.288,
    end: 31.872,
    text: `phonics = 声音规则 → 自然拼读`,
    audio: `/audio/segments/007.mp3`,
  },
  {
    id: `word-project`,
    start: 31.872,
    end: 38.808,
    text: `symphony = 声音一起响 → 交响乐`,
    audio: `/audio/segments/008.mp3`,
  },
  {
    id: `word-inject`,
    start: 38.808,
    end: 44.688,
    text: `cacophony = 坏声音挤一团 → 刺耳噪音`,
    audio: `/audio/segments/009.mp3`,
  },
  {
    id: `word-eject`,
    start: 44.688,
    end: 50.064,
    text: `euphony = 好听的声音 → 悦耳`,
    audio: `/audio/segments/010.mp3`,
  },
  {
    id: `word-abject`,
    start: 50.064,
    end: 55.728,
    text: `xylophone = 敲出来的声音 → 木琴`,
    audio: `/audio/segments/011.mp3`,
  },
  {
    id: `word-deject`,
    start: 55.728,
    end: 61.032,
    text: `phonograph = 把声音记下来 → 留声机`,
    audio: `/audio/segments/012.mp3`,
  },
  {
    id: `grid-connect`,
    start: 61.032,
    end: 69.528,
    text: `phone / symphony / cacophony，都围着 sound 转`,
    audio: `/audio/segments/013.mp3`,
  },
  {
    id: `summary`,
    start: 69.528,
    end: 73.272,
    text: `phon = sound / voice: 声音`,
    audio: `/audio/segments/014.mp3`,
  },
  {
    id: `outro`,
    start: 73.272,
    end: 76.56,
    text: `看到 phon，先想：这是什么声音？`,
    audio: `/audio/segments/015.mp3`,
  },
];
