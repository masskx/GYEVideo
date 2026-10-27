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
    end: 3.768,
    text: `telephone 不只是“电话”`,
    audio: `/audio/segments/001.mp3`,
  },
  {
    id: `flash-words`,
    start: 3.768,
    end: 8.088,
    text: `telephone / telegraph / television / telescope / teleport`,
    audio: `/audio/segments/002.mp3`,
  },
  {
    id: `same-root`,
    start: 8.088,
    end: 12.312,
    text: `它们都围着“远”`,
    audio: `/audio/segments/003.mp3`,
  },
  {
    id: `root-ject`,
    start: 12.312,
    end: 15.024,
    text: `tele = far / 远`,
    audio: `/audio/segments/004.mp3`,
  },
  {
    id: `word-reject`,
    start: 15.024,
    end: 20.328,
    text: `telephone = 远距离传声音 → 电话`,
    audio: `/audio/segments/005.mp3`,
  },
  {
    id: `word-object`,
    start: 20.328,
    end: 26.568,
    text: `telegraph = 远距离传消息 → 电报`,
    audio: `/audio/segments/006.mp3`,
  },
  {
    id: `word-subject`,
    start: 26.568,
    end: 31.992,
    text: `television = 远距离看见 → 电视`,
    audio: `/audio/segments/007.mp3`,
  },
  {
    id: `word-project`,
    start: 31.992,
    end: 37.776,
    text: `telescope = 看远处 → 望远镜`,
    audio: `/audio/segments/008.mp3`,
  },
  {
    id: `word-inject`,
    start: 37.776,
    end: 42.432,
    text: `teleport = 传到远方 → 瞬移`,
    audio: `/audio/segments/009.mp3`,
  },
  {
    id: `word-eject`,
    start: 42.432,
    end: 47.832,
    text: `telepathy = 隔很远也能感到 → 心灵感应`,
    audio: `/audio/segments/010.mp3`,
  },
  {
    id: `word-abject`,
    start: 47.832,
    end: 52.392,
    text: `telemedicine = 隔着距离看病 → 远程医疗`,
    audio: `/audio/segments/011.mp3`,
  },
  {
    id: `word-deject`,
    start: 52.392,
    end: 57.144,
    text: `telematics = 远距离传和管数据 → 远程信息处理`,
    audio: `/audio/segments/012.mp3`,
  },
  {
    id: `grid-connect`,
    start: 57.144,
    end: 65.424,
    text: `telephone / television / teleport，都围着 far 转`,
    audio: `/audio/segments/013.mp3`,
  },
  {
    id: `summary`,
    start: 65.424,
    end: 68.136,
    text: `tele = far: 远`,
    audio: `/audio/segments/014.mp3`,
  },
  {
    id: `outro`,
    start: 68.136,
    end: 71.952,
    text: `看到 tele，先想：隔着多远？`,
    audio: `/audio/segments/015.mp3`,
  },
];
