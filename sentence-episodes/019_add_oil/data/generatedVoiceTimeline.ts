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
    end: 2.232,
    text: `加油不是哪里都说 add oil`,
    audio: `/audio/segments/001.mp3`,
  },
  {
    id: `trap-2`,
    start: 2.232,
    end: 7.488,
    text: `add oil (everywhere) 这种说法一出口...`,
    audio: `/audio/segments/002.mp3`,
  },
  {
    id: `slap`,
    start: 7.488,
    end: 12.384,
    text: `问题不在你想表达，问题在你把中文回路直接投到英文...`,
    audio: `/audio/segments/003.mp3`,
  },
  {
    id: `fix-1`,
    start: 12.384,
    end: 14.592,
    text: `You've got this`,
    audio: `/audio/segments/004.mp3`,
  },
  {
    id: `why-1`,
    start: 14.592,
    end: 18.264,
    text: `想表达“你可以的”，先用 You've got...`,
    audio: `/audio/segments/005.mp3`,
  },
  {
    id: `fix-2`,
    start: 18.264,
    end: 24.24,
    text: `Keep going. We are almos...`,
    audio: `/audio/segments/006.mp3`,
  },
  {
    id: `scene`,
    start: 24.24,
    end: 31.608,
    text: `朋友明天考试 就说 You've got this. You...`,
    audio: `/audio/segments/007.mp3`,
  },
  {
    id: `lock`,
    start: 31.608,
    end: 35.544,
    text: `别说 add oil (everywhere) 说 You'...`,
    audio: `/audio/segments/008.mp3`,
  },
];
