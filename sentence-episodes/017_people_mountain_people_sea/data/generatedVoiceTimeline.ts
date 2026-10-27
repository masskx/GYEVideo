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
    end: 3.096,
    text: `人山人海 不是 people mountain people sea`,
    audio: `/audio/segments/001.mp3`,
  },
  {
    id: `trap-2`,
    start: 3.096,
    end: 8.688,
    text: `对方听见的不是人多 是山海神话`,
    audio: `/audio/segments/002.mp3`,
  },
  {
    id: `slap`,
    start: 8.688,
    end: 13.848,
    text: `成语最怕逐字翻`,
    audio: `/audio/segments/003.mp3`,
  },
  {
    id: `fix-1`,
    start: 13.848,
    end: 16.776,
    text: `a sea of people`,
    audio: `/audio/segments/004.mp3`,
  },
  {
    id: `why-1`,
    start: 16.776,
    end: 21.36,
    text: `英语换画面 不逐字搬成语`,
    audio: `/audio/segments/005.mp3`,
  },
  {
    id: `fix-2`,
    start: 21.36,
    end: 25.344,
    text: `It was packed`,
    audio: `/audio/segments/006.mp3`,
  },
  {
    id: `scene`,
    start: 25.344,
    end: 31.224,
    text: `演唱会挤爆了 就说 It was packed`,
    audio: `/audio/segments/007.mp3`,
  },
  {
    id: `lock`,
    start: 31.224,
    end: 36.024,
    text: `别再 mountain sea 一起端上来`,
    audio: `/audio/segments/008.mp3`,
  },
];
