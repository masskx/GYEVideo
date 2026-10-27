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
    text: `vocabulary 不是死背`,
    audio: `/audio/segments/001.mp3`,
  },
  {
    id: `flash-words`,
    start: 3.6,
    end: 7.848,
    text: `vocal / vocabulary / invoke / provoke / revoke`,
    audio: `/audio/segments/002.mp3`,
  },
  {
    id: `same-root`,
    start: 7.848,
    end: 13.248,
    text: `它们都在“呼叫”`,
    audio: `/audio/segments/003.mp3`,
  },
  {
    id: `root-ject`,
    start: 13.248,
    end: 17.664,
    text: `voc / voke = call / 呼叫`,
    audio: `/audio/segments/004.mp3`,
  },
  {
    id: `word-reject`,
    start: 17.664,
    end: 23.664,
    text: `vocal = 声音被叫出 → 声音的`,
    audio: `/audio/segments/005.mp3`,
  },
  {
    id: `word-object`,
    start: 23.664,
    end: 29.976,
    text: `evoke = 把感觉叫出 → 唤起`,
    audio: `/audio/segments/006.mp3`,
  },
  {
    id: `word-subject`,
    start: 29.976,
    end: 37.512,
    text: `advocate = 朝观点发声 → 提倡`,
    audio: `/audio/segments/007.mp3`,
  },
  {
    id: `word-project`,
    start: 37.512,
    end: 44.328,
    text: `invoke = 向内呼叫 → 唤起 / 援引`,
    audio: `/audio/segments/008.mp3`,
  },
  {
    id: `word-inject`,
    start: 44.328,
    end: 51.792,
    text: `provoke = 向前呼叫 → 激怒 / 挑起`,
    audio: `/audio/segments/009.mp3`,
  },
  {
    id: `word-eject`,
    start: 51.792,
    end: 57.672,
    text: `revoke = 叫回来 → 撤销`,
    audio: `/audio/segments/010.mp3`,
  },
  {
    id: `word-abject`,
    start: 57.672,
    end: 64.296,
    text: `convoke = 一起叫来 → 召集`,
    audio: `/audio/segments/011.mp3`,
  },
  {
    id: `word-deject`,
    start: 64.296,
    end: 70.248,
    text: `vocation = 被召唤 → 职业 / 使命`,
    audio: `/audio/segments/012.mp3`,
  },
  {
    id: `grid-connect`,
    start: 70.248,
    end: 77.448,
    text: `vocal / evoke / provoke / revoke，都围着 call 转`,
    audio: `/audio/segments/013.mp3`,
  },
  {
    id: `summary`,
    start: 77.448,
    end: 81.864,
    text: `voc / voke = call：呼叫，召唤`,
    audio: `/audio/segments/014.mp3`,
  },
  {
    id: `outro`,
    start: 81.864,
    end: 85.968,
    text: `看到 voc / voke，先想：谁在叫？`,
    audio: `/audio/segments/015.mp3`,
  },
];
