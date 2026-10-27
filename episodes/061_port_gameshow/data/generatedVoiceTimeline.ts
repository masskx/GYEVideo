export type GeneratedVoiceTimelineItem = {
  id: string;
  start: number;
  end: number;
  text: string;
  audio: string;
};

export const generatedVoiceTimeline: GeneratedVoiceTimelineItem[] = [
  {
    id: `title`,
    start: 0,
    end: 4.08,
    text: `词根闯关！一个词根，五关，你能全对吗？`,
    audio: `/audio/segments/001.mp3`,
  },
  {
    id: `root`,
    start: 4.08,
    end: 8.28,
    text: `通关密码：port = carry，拿，运`,
    audio: `/audio/segments/002.mp3`,
  },
  {
    id: `r-import`,
    start: 8.28,
    end: 12.816,
    text: `im 向里 + port → 往里运 → import 进口`,
    audio: `/audio/segments/003.mp3`,
  },
  {
    id: `r-export`,
    start: 12.816,
    end: 17.4,
    text: `ex 向外 + port → 往外运 → export 出口`,
    audio: `/audio/segments/004.mp3`,
  },
  {
    id: `r-transport`,
    start: 17.4,
    end: 22.104,
    text: `trans 跨过 + port → 运过去 → transport 运输`,
    audio: `/audio/segments/005.mp3`,
  },
  {
    id: `r-support`,
    start: 22.104,
    end: 26.952,
    text: `sup (= sub) 在下面 + port → 从下面托着 → support 支持`,
    audio: `/audio/segments/006.mp3`,
  },
  {
    id: `r-report`,
    start: 26.952,
    end: 31.632,
    text: `re 回来 + port → 把消息带回来 → report 报告`,
    audio: `/audio/segments/007.mp3`,
  },
  {
    id: `lightning`,
    start: 31.632,
    end: 39.408,
    text: `极速挑战！跟上节奏`,
    audio: `/audio/segments/008.mp3`,
  },
  {
    id: `grade`,
    start: 39.408,
    end: 41.52,
    text: `五关全过，评级 S！`,
    audio: `/audio/segments/009.mp3`,
  },
  {
    id: `bonus`,
    start: 41.52,
    end: 45.648,
    text: `加分题：没有油田，石油只能全部____？`,
    audio: `/audio/segments/010.mp3`,
  },
  {
    id: `signoff`,
    start: 45.648,
    end: 48.048,
    text: `评论区抢答，下一个词根见！`,
    audio: `/audio/segments/011.mp3`,
  },
];
