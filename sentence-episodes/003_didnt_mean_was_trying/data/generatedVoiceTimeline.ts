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
    text: `道歉别只会 say sorry`,
    audio: `/audio/segments/001.mp3`,
  },
  {
    id: `trap-2`,
    start: 2.232,
    end: 6.504,
    text: `只会认错 不会把本意补上`,
    audio: `/audio/segments/002.mp3`,
  },
  {
    id: `slap`,
    start: 6.504,
    end: 9.984,
    text: `一直说 sorry 对方只会停在疼那里`,
    audio: `/audio/segments/003.mp3`,
  },
  {
    id: `fix-1`,
    start: 9.984,
    end: 14.568,
    text: `I didn't mean to A. I was just trying to B.`,
    audio: `/audio/segments/004.mp3`,
  },
  {
    id: `why-1`,
    start: 14.568,
    end: 18,
    text: `先认伤害 再补本意`,
    audio: `/audio/segments/005.mp3`,
  },
  {
    id: `fix-2`,
    start: 18,
    end: 22.104,
    text: `I didn't mean to hurt you. I was just trying to be honest.`,
    audio: `/audio/segments/006.mp3`,
  },
  {
    id: `scene`,
    start: 22.104,
    end: 27.48,
    text: `别原地 sorry 直接用这个骨架往回拉`,
    audio: `/audio/segments/007.mp3`,
  },
  {
    id: `lock`,
    start: 27.48,
    end: 32.376,
    text: `别只会道歉 先说 I didn't mean to A. I was just trying to B.`,
    audio: `/audio/segments/008.mp3`,
  },
];
