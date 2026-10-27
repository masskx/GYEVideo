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
    end: 4.008,
    text: `autograph 不只是“签名”`,
    audio: `/audio/segments/001.mp3`,
  },
  {
    id: `flash-words`,
    start: 4.008,
    end: 8.424,
    text: `autograph / photograph / paragraph / telegraph / biography`,
    audio: `/audio/segments/002.mp3`,
  },
  {
    id: `same-root`,
    start: 8.424,
    end: 14.088,
    text: `它们都围着“写”和“记录”`,
    audio: `/audio/segments/003.mp3`,
  },
  {
    id: `root-ject`,
    start: 14.088,
    end: 18.432,
    text: `graph = write / record / 写，记录`,
    audio: `/audio/segments/004.mp3`,
  },
  {
    id: `word-reject`,
    start: 18.432,
    end: 24.072,
    text: `autograph = 亲手写下 → 签名`,
    audio: `/audio/segments/005.mp3`,
  },
  {
    id: `word-object`,
    start: 24.072,
    end: 29.28,
    text: `photograph = 把光记下来 → 照片 / 拍摄`,
    audio: `/audio/segments/006.mp3`,
  },
  {
    id: `word-subject`,
    start: 29.28,
    end: 33.432,
    text: `paragraph = 写成一段 → 段落`,
    audio: `/audio/segments/007.mp3`,
  },
  {
    id: `word-project`,
    start: 33.432,
    end: 39.168,
    text: `telegraph = 远距离写消息 → 电报`,
    audio: `/audio/segments/008.mp3`,
  },
  {
    id: `word-inject`,
    start: 39.168,
    end: 45.528,
    text: `biography = 把一生记下来 → 传记`,
    audio: `/audio/segments/009.mp3`,
  },
  {
    id: `word-eject`,
    start: 45.528,
    end: 52.488,
    text: `graphic = 写得像画出来 → 图形的 / 生动的`,
    audio: `/audio/segments/010.mp3`,
  },
  {
    id: `word-abject`,
    start: 52.488,
    end: 57.648,
    text: `graphics = 记录成图像 → 图像 / 图形设计`,
    audio: `/audio/segments/011.mp3`,
  },
  {
    id: `word-deject`,
    start: 57.648,
    end: 62.208,
    text: `graphology = 从书写判断 → 笔迹学`,
    audio: `/audio/segments/012.mp3`,
  },
  {
    id: `grid-connect`,
    start: 62.208,
    end: 70.752,
    text: `autograph / telegraph / biography，都围着 write 和 record 转`,
    audio: `/audio/segments/013.mp3`,
  },
  {
    id: `summary`,
    start: 70.752,
    end: 75.168,
    text: `graph = write / record: 写，记录`,
    audio: `/audio/segments/014.mp3`,
  },
  {
    id: `outro`,
    start: 75.168,
    end: 79.008,
    text: `看到 graph，先想：写下了什么？`,
    audio: `/audio/segments/015.mp3`,
  },
];
