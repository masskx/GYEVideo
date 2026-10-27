export type GeneratedVoiceTimelineItem = {
  id: string;
  start: number;
  end: number;
  text: string;
  spoken?: string; // the TTS text this audio was made from (npm run produce re-voices when it changes)
  rate?: number; // the TTS rate it was made at (changes with the pace)
  audio: string;
};

export const generatedVoiceTimeline: GeneratedVoiceTimelineItem[] = [
  {
    id: `title`,
    start: 0,
    end: 3.528,
    text: `词根闯关！一个词根，五关，你能全对吗？`,
    spoken: `词根闯关！一个词根，五关，你能全对吗？`,
    rate: 1.36,
    audio: `/audio/segments/001.mp3`,
  },
  {
    id: `root`,
    start: 3.528,
    end: 7.176,
    text: `通关密码：port = carry，拿，运`,
    spoken: `今天的通关密码：port，就是 carry：拿，运。`,
    rate: 1.15,
    audio: `/audio/segments/002.mp3`,
  },
  {
    id: `r-import`,
    start: 7.176,
    end: 11.112,
    text: `im 向里 + port → 往里运 → import 进口`,
    spoken: `第一关！im，向里。往里运，import，进口。`,
    rate: 1.36,
    audio: `/audio/segments/003.mp3`,
  },
  {
    id: `r-export`,
    start: 11.112,
    end: 15.096,
    text: `ex 向外 + port → 往外运 → export 出口`,
    spoken: `第二关！ex，向外。往外运，export，出口。`,
    rate: 1.36,
    audio: `/audio/segments/004.mp3`,
  },
  {
    id: `r-transport`,
    start: 15.096,
    end: 19.2,
    text: `trans 跨过 + port → 运过去 → transport 运输`,
    spoken: `第三关！trans，跨过去。运过去，transport，运输。`,
    rate: 1.36,
    audio: `/audio/segments/005.mp3`,
  },
  {
    id: `r-support`,
    start: 19.2,
    end: 23.424,
    text: `sup (= sub) 在下面 + port → 从下面托着 → support 支持`,
    spoken: `第四关！sup 就是 sub，在下面。从下面托着，support，支持。`,
    rate: 1.36,
    audio: `/audio/segments/006.mp3`,
  },
  {
    id: `r-report`,
    start: 23.424,
    end: 27.48,
    text: `re 回来 + port → 把消息带回来 → report 报告`,
    spoken: `第五关！前缀 re，回来。把消息带回来，report，报告。`,
    rate: 1.36,
    audio: `/audio/segments/007.mp3`,
  },
  {
    id: `lightning`,
    start: 27.48,
    end: 34.272,
    text: `极速挑战！跟上节奏`,
    spoken: `极速挑战！import，进口；export，出口；transport，运输；support，支持；report，报告！`,
    rate: 1.47,
    audio: `/audio/segments/008.mp3`,
  },
  {
    id: `grade`,
    start: 34.272,
    end: 36.096,
    text: `五关全过，评级 S！`,
    spoken: `五关全过，评级 S！`,
    rate: 1.36,
    audio: `/audio/segments/009.mp3`,
  },
  {
    id: `bonus`,
    start: 36.096,
    end: 39.696,
    text: `加分题：没有油田，石油只能全部____？`,
    spoken: `加分题：这个国家没有油田，石油只能全部怎么样？`,
    rate: 1.36,
    audio: `/audio/segments/010.mp3`,
  },
  {
    id: `signoff`,
    start: 39.696,
    end: 41.784,
    text: `评论区抢答，下一个词根见！`,
    spoken: `评论区抢答，下一个词根见！`,
    rate: 1.36,
    audio: `/audio/segments/011.mp3`,
  },
];
