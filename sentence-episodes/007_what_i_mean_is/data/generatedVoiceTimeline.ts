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
    text: `话说偏了 就用这句拉回来`,
    audio: `/audio/segments/001.mp3`,
  },
  {
    id: `trap-2`,
    start: 2.616,
    end: 7.776,
    text: `第一句太虚 真正那句还闷在脑子里`,
    audio: `/audio/segments/002.mp3`,
  },
  {
    id: `slap`,
    start: 7.776,
    end: 11.064,
    text: `不是不会说 是没把真正意思落下来`,
    audio: `/audio/segments/003.mp3`,
  },
  {
    id: `fix-1`,
    start: 11.064,
    end: 13.92,
    text: `What I mean is A.`,
    audio: `/audio/segments/004.mp3`,
  },
  {
    id: `why-1`,
    start: 13.92,
    end: 18.6,
    text: `把模糊版收回去 把真意补出来`,
    audio: `/audio/segments/005.mp3`,
  },
  {
    id: `fix-2`,
    start: 18.6,
    end: 21.96,
    text: `What I mean is that the problem is getting bigger`,
    audio: `/audio/segments/006.mp3`,
  },
  {
    id: `scene`,
    start: 21.96,
    end: 26.304,
    text: `消息发虚了 直接补一句 What I mean is`,
    audio: `/audio/segments/007.mp3`,
  },
  {
    id: `lock`,
    start: 26.304,
    end: 30.144,
    text: `别让模糊版替你发言 先说 What I mean is A`,
    audio: `/audio/segments/008.mp3`,
  },
];
