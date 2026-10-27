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
    end: 3.288,
    text: `Open the light 不像英语 像中文套皮`,
    audio: `/audio/segments/001.mp3`,
  },
  {
    id: `trap-2`,
    start: 3.288,
    end: 7.56,
    text: `你想说开灯 对方却像听成拆灯`,
    audio: `/audio/segments/002.mp3`,
  },
  {
    id: `slap`,
    start: 7.56,
    end: 11.808,
    text: `设备在英语里 不这么开`,
    audio: `/audio/segments/003.mp3`,
  },
  {
    id: `fix-1`,
    start: 11.808,
    end: 14.04,
    text: `Turn on the light`,
    audio: `/audio/segments/004.mp3`,
  },
  {
    id: `why-1`,
    start: 14.04,
    end: 20.16,
    text: `设备启动 先想 turn on`,
    audio: `/audio/segments/005.mp3`,
  },
  {
    id: `fix-2`,
    start: 20.16,
    end: 26.232,
    text: `It's too dark. Turn on the light.`,
    audio: `/audio/segments/006.mp3`,
  },
  {
    id: `scene`,
    start: 26.232,
    end: 33.024,
    text: `进房间一片黑 就说 Turn on the light`,
    audio: `/audio/segments/007.mp3`,
  },
  {
    id: `lock`,
    start: 33.024,
    end: 36.456,
    text: `别说 Open the light 先想 turn on`,
    audio: `/audio/segments/008.mp3`,
  },
];
