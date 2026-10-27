export type GeneratedVoiceTimelineItem = {
  id: string;
  start: number;
  end: number;
  text: string;
  audio: string;
};

export const generatedVoiceTimeline: GeneratedVoiceTimelineItem[] = [
  {
    id: `word-stall`,
    start: 0,
    end: 4.224,
    text: `stall = 摊位`,
    audio: `/audio/segments/001.mp3`,
  },
  {
    id: `word-loyal`,
    start: 4.224,
    end: 6.024,
    text: `loyal = 忠诚的`,
    audio: `/audio/segments/002.mp3`,
  },
  {
    id: `word-suspect`,
    start: 6.024,
    end: 8.688,
    text: `suspect = 怀疑`,
    audio: `/audio/segments/003.mp3`,
  },
  {
    id: `word-substitute`,
    start: 8.688,
    end: 12.744,
    text: `substitute = 替代品`,
    audio: `/audio/segments/004.mp3`,
  },
  {
    id: `word-disguise`,
    start: 12.744,
    end: 16.296,
    text: `disguise = 伪装`,
    audio: `/audio/segments/005.mp3`,
  },
  {
    id: `word-expose`,
    start: 16.296,
    end: 18.024,
    text: `expose = 曝光`,
    audio: `/audio/segments/006.mp3`,
  },
  {
    id: `word-outrage`,
    start: 18.024,
    end: 20.256,
    text: `outrage = 愤怒`,
    audio: `/audio/segments/007.mp3`,
  },
  {
    id: `word-supplier`,
    start: 20.256,
    end: 22.392,
    text: `supplier = 供应商`,
    audio: `/audio/segments/008.mp3`,
  },
  {
    id: `word-deceive`,
    start: 22.392,
    end: 24.576,
    text: `deceive = 欺骗`,
    audio: `/audio/segments/009.mp3`,
  },
  {
    id: `word-refund`,
    start: 24.576,
    end: 26.016,
    text: `refund = 退款`,
    audio: `/audio/segments/010.mp3`,
  },
  {
    id: `word-scandal`,
    start: 26.016,
    end: 28.536,
    text: `scandal = 丑闻`,
    audio: `/audio/segments/011.mp3`,
  },
  {
    id: `word-apology`,
    start: 28.536,
    end: 33.168,
    text: `apology = 道歉`,
    audio: `/audio/segments/012.mp3`,
  },
];
