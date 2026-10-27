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
    end: 4.536,
    text: `看到 path 别只会想 path 路径`,
    audio: `/audio/segments/001.mp3`,
  },
  {
    id: `flash-words`,
    start: 4.536,
    end: 9.384,
    text: `sympathy / empathy / apathy / pathetic / pathology`,
    audio: `/audio/segments/002.mp3`,
  },
  {
    id: `same-root`,
    start: 9.384,
    end: 13.44,
    text: `它们都连着 feeling / suffering`,
    audio: `/audio/segments/003.mp3`,
  },
  {
    id: `root-ject`,
    start: 13.44,
    end: 18.744,
    text: `path = feeling / suffering`,
    audio: `/audio/segments/004.mp3`,
  },
  {
    id: `word-reject`,
    start: 18.744,
    end: 22.584,
    text: `sympathy = 一起感受 -> 同情`,
    audio: `/audio/segments/005.mp3`,
  },
  {
    id: `word-object`,
    start: 22.584,
    end: 28.224,
    text: `empathy = 感同身受 -> 共情`,
    audio: `/audio/segments/006.mp3`,
  },
  {
    id: `word-subject`,
    start: 28.224,
    end: 33.192,
    text: `apathy = 没有感觉 -> 冷漠`,
    audio: `/audio/segments/007.mp3`,
  },
  {
    id: `word-project`,
    start: 33.192,
    end: 38.208,
    text: `pathetic = 引发怜悯感 -> 可怜的`,
    audio: `/audio/segments/008.mp3`,
  },
  {
    id: `word-inject`,
    start: 38.208,
    end: 44.208,
    text: `pathology = 痛苦状态研究 -> 病理`,
    audio: `/audio/segments/009.mp3`,
  },
  {
    id: `word-eject`,
    start: 44.208,
    end: 48.192,
    text: `antipathy = 反向感受 -> 反感`,
    audio: `/audio/segments/010.mp3`,
  },
  {
    id: `word-abject`,
    start: 48.192,
    end: 54.072,
    text: `telepathy = 远距离感受 -> 心灵感应`,
    audio: `/audio/segments/011.mp3`,
  },
  {
    id: `word-deject`,
    start: 54.072,
    end: 60.288,
    text: `sociopath = 缺失他人感受 -> 反社会人格者`,
    audio: `/audio/segments/012.mp3`,
  },
  {
    id: `grid-connect`,
    start: 60.288,
    end: 68.328,
    text: `sympathy / empathy / apathy，都围着 feeling 转`,
    audio: `/audio/segments/013.mp3`,
  },
  {
    id: `summary`,
    start: 68.328,
    end: 72.984,
    text: `path = feeling / suffering`,
    audio: `/audio/segments/014.mp3`,
  },
  {
    id: `outro`,
    start: 72.984,
    end: 77.952,
    text: `看到 path，先想：它在讲哪种感受？`,
    audio: `/audio/segments/015.mp3`,
  },
];
