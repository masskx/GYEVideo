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
    end: 2.616,
    text: `I feel painful 不是我很疼`,
    audio: `/audio/segments/001.mp3`,
  },
  {
    id: `trap-2`,
    start: 2.616,
    end: 7.584,
    text: `不是喊疼 是把自己说成了疼痛制造机`,
    audio: `/audio/segments/002.mp3`,
  },
  {
    id: `slap`,
    start: 7.584,
    end: 11.448,
    text: `painful 说东西疼 不是你本人疼`,
    audio: `/audio/segments/003.mp3`,
  },
  {
    id: `fix-1`,
    start: 11.448,
    end: 13.728,
    text: `I am in pain`,
    audio: `/audio/segments/004.mp3`,
  },
  {
    id: `why-1`,
    start: 13.728,
    end: 18.576,
    text: `你是疼 不是你这个人很 painful`,
    audio: `/audio/segments/005.mp3`,
  },
  {
    id: `fix-2`,
    start: 18.576,
    end: 21.84,
    text: `My knee hurts`,
    audio: `/audio/segments/006.mp3`,
  },
  {
    id: `scene`,
    start: 21.84,
    end: 27.888,
    text: `摔了膝盖 就说 My knee hurts`,
    audio: `/audio/segments/007.mp3`,
  },
  {
    id: `lock`,
    start: 27.888,
    end: 31.248,
    text: `别说 I feel painful 说 I am in pain`,
    audio: `/audio/segments/008.mp3`,
  },
];
