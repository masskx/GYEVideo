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
    end: 2.064,
    text: `吃药 不是 eat medicine`,
    audio: `/audio/segments/001.mp3`,
  },
  {
    id: `trap-2`,
    start: 2.064,
    end: 5.64,
    text: `像把药当零食在嚼`,
    audio: `/audio/segments/002.mp3`,
  },
  {
    id: `slap`,
    start: 5.64,
    end: 9.312,
    text: `重点不是吃 是服用`,
    audio: `/audio/segments/003.mp3`,
  },
  {
    id: `fix-1`,
    start: 9.312,
    end: 11.208,
    text: `take medicine`,
    audio: `/audio/segments/004.mp3`,
  },
  {
    id: `why-1`,
    start: 11.208,
    end: 15.144,
    text: `食物用 eat 药用 take`,
    audio: `/audio/segments/005.mp3`,
  },
  {
    id: `fix-2`,
    start: 15.144,
    end: 19.632,
    text: `Don't forget to take your medicine`,
    audio: `/audio/segments/006.mp3`,
  },
  {
    id: `scene`,
    start: 19.632,
    end: 25.2,
    text: `提醒家里人 就说 take your medicine`,
    audio: `/audio/segments/007.mp3`,
  },
  {
    id: `lock`,
    start: 25.2,
    end: 28.608,
    text: `别把药说成饭 先想 take medicine`,
    audio: `/audio/segments/008.mp3`,
  },
];
