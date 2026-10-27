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
    text: `别把提醒说成责怪`,
    audio: `/audio/segments/001.mp3`,
  },
  {
    id: `trap-2`,
    start: 2.064,
    end: 6.168,
    text: `不是内容有问题 是一开口像在审人`,
    audio: `/audio/segments/002.mp3`,
  },
  {
    id: `slap`,
    start: 6.168,
    end: 10.032,
    text: `你以为在提醒 对方听到像在挨骂`,
    audio: `/audio/segments/003.mp3`,
  },
  {
    id: `fix-1`,
    start: 10.032,
    end: 14.472,
    text: `It's not what you said. It's how you said it.`,
    audio: `/audio/segments/004.mp3`,
  },
  {
    id: `why-1`,
    start: 14.472,
    end: 18.336,
    text: `不是内容有问题 是语气有问题`,
    audio: `/audio/segments/005.mp3`,
  },
  {
    id: `fix-2`,
    start: 18.336,
    end: 23.16,
    text: `I didn't mean to sound harsh.`,
    audio: `/audio/segments/006.mp3`,
  },
  {
    id: `scene`,
    start: 23.16,
    end: 27.408,
    text: `聊天发冷了 先把语气这个坑填上`,
    audio: `/audio/segments/007.mp3`,
  },
  {
    id: `lock`,
    start: 27.408,
    end: 33.216,
    text: `别再说 I just told you 先说 It's not what you said. It's how you said it.`,
    audio: `/audio/segments/008.mp3`,
  },
];
