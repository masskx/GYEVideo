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
    end: 3.984,
    text: `I am boring 不是我无聊 是我无趣`,
    audio: `/audio/segments/001.mp3`,
  },
  {
    id: `trap-2`,
    start: 3.984,
    end: 9,
    text: `想说有点闷 却把自己说成无聊本人`,
    audio: `/audio/segments/002.mp3`,
  },
  {
    id: `slap`,
    start: 9,
    end: 13.752,
    text: `让别人无聊 和 自己无聊 不是一回事`,
    audio: `/audio/segments/003.mp3`,
  },
  {
    id: `fix-1`,
    start: 13.752,
    end: 17.592,
    text: `I am bored`,
    audio: `/audio/segments/004.mp3`,
  },
  {
    id: `why-1`,
    start: 17.592,
    end: 22.584,
    text: `boring 是让人无聊 bored 是自己无聊`,
    audio: `/audio/segments/005.mp3`,
  },
  {
    id: `fix-2`,
    start: 22.584,
    end: 26.904,
    text: `I am just a little bored`,
    audio: `/audio/segments/006.mp3`,
  },
  {
    id: `scene`,
    start: 26.904,
    end: 33.048,
    text: `别人问你怎么不说话 就回 I am bored`,
    audio: `/audio/segments/007.mp3`,
  },
  {
    id: `lock`,
    start: 33.048,
    end: 36.816,
    text: `自己无聊 bored 让人无聊 boring`,
    audio: `/audio/segments/008.mp3`,
  },
];
