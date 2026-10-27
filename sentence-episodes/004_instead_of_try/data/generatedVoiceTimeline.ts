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
    end: 1.752,
    text: `别一上来就 don’t`,
    audio: `/audio/segments/001.mp3`,
  },
  {
    id: `trap-2`,
    start: 1.752,
    end: 5.664,
    text: `像在管人 不像在帮人`,
    audio: `/audio/segments/002.mp3`,
  },
  {
    id: `slap`,
    start: 5.664,
    end: 9.816,
    text: `不是建议错了 是你只会堵不会带路`,
    audio: `/audio/segments/003.mp3`,
  },
  {
    id: `fix-1`,
    start: 9.816,
    end: 13.104,
    text: `Instead of A, try B.`,
    audio: `/audio/segments/004.mp3`,
  },
  {
    id: `why-1`,
    start: 13.104,
    end: 17.616,
    text: `不是只会说不行 是顺手把更好的版本递过去`,
    audio: `/audio/segments/005.mp3`,
  },
  {
    id: `fix-2`,
    start: 17.616,
    end: 21.672,
    text: `Instead of saying very good try really solid`,
    audio: `/audio/segments/006.mp3`,
  },
  {
    id: `scene`,
    start: 21.672,
    end: 26.832,
    text: `想给建议时 先用这个骨架把路铺出来`,
    audio: `/audio/segments/007.mp3`,
  },
  {
    id: `lock`,
    start: 26.832,
    end: 30.888,
    text: `别只会叫停 先说 Instead of A try B`,
    audio: `/audio/segments/008.mp3`,
  },
];
