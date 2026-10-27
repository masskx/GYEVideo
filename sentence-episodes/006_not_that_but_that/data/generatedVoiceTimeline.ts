export type GeneratedVoiceTimelineItem = {
  id: string;
  start: number;
  end: number;
  text: string;
  audio: string;
};

export const generatedVoiceTimeline: GeneratedVoiceTimelineItem[] = [
  {
    id: `trap-1`,
    start: 0,
    end: 2.52,
    text: `不是这个原因 是那个原因`,
    audio: `/audio/segments/001.mp3`,
  },
  {
    id: `trap-2`,
    start: 2.52,
    end: 5.688,
    text: `不是没分析 是总停在第一层`,
    audio: `/audio/segments/002.mp3`,
  },
  {
    id: `slap`,
    start: 5.688,
    end: 9.744,
    text: `会讲表面原因的人很多 会讲准原因的人很少`,
    audio: `/audio/segments/003.mp3`,
  },
  {
    id: `fix-1`,
    start: 9.744,
    end: 13.08,
    text: `Not that A, but that B.`,
    audio: `/audio/segments/004.mp3`,
  },
  {
    id: `why-1`,
    start: 13.08,
    end: 17.304,
    text: `先划掉错因 再把真因顶上来`,
    audio: `/audio/segments/005.mp3`,
  },
  {
    id: `fix-2`,
    start: 17.304,
    end: 21.528,
    text: `Not that I lacked ideas, but that I couldn't organize them.`,
    audio: `/audio/segments/006.mp3`,
  },
  {
    id: `scene`,
    start: 21.528,
    end: 26.76,
    text: `解释问题时 别停在第一眼那个原因`,
    audio: `/audio/segments/007.mp3`,
  },
  {
    id: `lock`,
    start: 26.76,
    end: 31.2,
    text: `别只会讲表面原因 先说 Not that A but that B`,
    audio: `/audio/segments/008.mp3`,
  },
];
