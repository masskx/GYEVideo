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
    text: `photo 不只是“照片”`,
    audio: `/audio/segments/001.mp3`,
  },
  {
    id: `flash-words`,
    start: 4.32,
    end: 9.144,
    text: `photo / photograph / photography / photosynthesis / photogenic`,
    audio: `/audio/segments/002.mp3`,
  },
  {
    id: `same-root`,
    start: 9.144,
    end: 13.056,
    text: `它们都围着“光”`,
    audio: `/audio/segments/003.mp3`,
  },
  {
    id: `root-ject`,
    start: 13.056,
    end: 16.32,
    text: `photo = light / 光`,
    audio: `/audio/segments/004.mp3`,
  },
  {
    id: `word-reject`,
    start: 16.32,
    end: 21.24,
    text: `photo = 光留下图像 → 照片`,
    audio: `/audio/segments/005.mp3`,
  },
  {
    id: `word-object`,
    start: 21.24,
    end: 25.512,
    text: `photograph = 把光记下来 → 照片 / 拍摄`,
    audio: `/audio/segments/006.mp3`,
  },
  {
    id: `word-subject`,
    start: 25.512,
    end: 30.024,
    text: `photography = 用光成像 → 摄影`,
    audio: `/audio/segments/007.mp3`,
  },
  {
    id: `word-project`,
    start: 30.024,
    end: 36.816,
    text: `photosynthesis = 借光合成 → 光合作用`,
    audio: `/audio/segments/008.mp3`,
  },
  {
    id: `word-inject`,
    start: 36.816,
    end: 42.528,
    text: `photogenic = 一见光就好看 → 上镜`,
    audio: `/audio/segments/009.mp3`,
  },
  {
    id: `word-eject`,
    start: 42.528,
    end: 47.256,
    text: `photocopy = 靠光复制 → 复印`,
    audio: `/audio/segments/010.mp3`,
  },
  {
    id: `word-abject`,
    start: 47.256,
    end: 52.248,
    text: `photophobia = 怕光 → 畏光`,
    audio: `/audio/segments/011.mp3`,
  },
  {
    id: `word-deject`,
    start: 52.248,
    end: 58.128,
    text: `photon = 一束最小的光 → 光子`,
    audio: `/audio/segments/012.mp3`,
  },
  {
    id: `grid-connect`,
    start: 58.128,
    end: 67.224,
    text: `photo / photography / photogenic，都围着 light 转`,
    audio: `/audio/segments/013.mp3`,
  },
  {
    id: `summary`,
    start: 67.224,
    end: 70.296,
    text: `photo = light: 光`,
    audio: `/audio/segments/014.mp3`,
  },
  {
    id: `outro`,
    start: 70.296,
    end: 73.416,
    text: `看到 photo，先想：这里的光做了什么？`,
    audio: `/audio/segments/015.mp3`,
  },
];
