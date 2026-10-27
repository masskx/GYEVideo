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
    end: 2.784,
    text: `I am exciting 不是我很兴奋`,
    audio: `/audio/segments/001.mp3`,
  },
  {
    id: `trap-2`,
    start: 2.784,
    end: 7.104,
    text: `不是你嗨了 是你在夸自己很带劲`,
    audio: `/audio/segments/002.mp3`,
  },
  {
    id: `slap`,
    start: 7.104,
    end: 11.352,
    text: `exciting 让别人兴奋 excited 才是你兴奋`,
    audio: `/audio/segments/003.mp3`,
  },
  {
    id: `fix-1`,
    start: 11.352,
    end: 14.28,
    text: `I am excited`,
    audio: `/audio/segments/004.mp3`,
  },
  {
    id: `why-1`,
    start: 14.28,
    end: 19.512,
    text: `你是 excited 不是你本人 exciting`,
    audio: `/audio/segments/005.mp3`,
  },
  {
    id: `fix-2`,
    start: 19.512,
    end: 23.04,
    text: `I am so excited`,
    audio: `/audio/segments/006.mp3`,
  },
  {
    id: `scene`,
    start: 23.04,
    end: 28.44,
    text: `抢到票了 就喊 I am so excited`,
    audio: `/audio/segments/007.mp3`,
  },
  {
    id: `lock`,
    start: 28.44,
    end: 32.088,
    text: `别说 I am exciting 说 I am excited`,
    audio: `/audio/segments/008.mp3`,
  },
];
