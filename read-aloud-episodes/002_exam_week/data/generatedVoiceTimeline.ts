export type GeneratedVoiceTimelineItem = {
  id: string;
  start: number;
  end: number;
  text: string;
  audio: string;
};

export const generatedVoiceTimeline: GeneratedVoiceTimelineItem[] = [
  {
    id: `word-overwhelm`,
    start: 0,
    end: 3.768,
    text: `overwhelm = 压倒`,
    audio: `/audio/segments/001.mp3`,
  },
  {
    id: `word-procrastinate`,
    start: 3.768,
    end: 6.384,
    text: `procrastinate = 拖延`,
    audio: `/audio/segments/002.mp3`,
  },
  {
    id: `word-prioritize`,
    start: 6.384,
    end: 9.96,
    text: `prioritize = 优先处理`,
    audio: `/audio/segments/003.mp3`,
  },
  {
    id: `word-absorb`,
    start: 9.96,
    end: 12.768,
    text: `absorb = 吸收`,
    audio: `/audio/segments/004.mp3`,
  },
  {
    id: `word-anxiety`,
    start: 12.768,
    end: 16.296,
    text: `anxiety = 焦虑`,
    audio: `/audio/segments/005.mp3`,
  },
  {
    id: `word-cram`,
    start: 16.296,
    end: 18.264,
    text: `cram = 突击猛学`,
    audio: `/audio/segments/006.mp3`,
  },
  {
    id: `word-collapse`,
    start: 18.264,
    end: 21.984,
    text: `collapse = 崩溃`,
    audio: `/audio/segments/007.mp3`,
  },
  {
    id: `word-coherent`,
    start: 21.984,
    end: 24.6,
    text: `coherent = 连贯的`,
    audio: `/audio/segments/008.mp3`,
  },
  {
    id: `word-drained`,
    start: 24.6,
    end: 26.448,
    text: `drained = 精疲力竭的`,
    audio: `/audio/segments/009.mp3`,
  },
  {
    id: `word-scrape`,
    start: 26.448,
    end: 28.752,
    text: `scrape = 勉强通过`,
    audio: `/audio/segments/010.mp3`,
  },
  {
    id: `word-recover`,
    start: 28.752,
    end: 30.96,
    text: `recover = 恢复`,
    audio: `/audio/segments/011.mp3`,
  },
  {
    id: `word-persist`,
    start: 30.96,
    end: 33.504,
    text: `persist = 坚持`,
    audio: `/audio/segments/012.mp3`,
  },
];
