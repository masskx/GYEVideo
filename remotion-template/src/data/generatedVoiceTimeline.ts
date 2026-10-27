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
    end: 2.76,
    text: `今天在白板上，只讲一个字：看`,
    spoken: `今天在白板上，只讲一个字：看。`,
    rate: 1.15,
    audio: `/audio/segments/001.mp3`,
  },
  {
    id: `root`,
    start: 2.76,
    end: 6.912,
    text: `vis / vid = see，看`,
    spoken: `词根 V I S 和 V I D，意思都是 see，看。`,
    rate: 1.15,
    audio: `/audio/segments/002.mp3`,
  },
  {
    id: `w-visit`,
    start: 6.912,
    end: 11.16,
    text: `visit：vis 看 + it 去 → 去看 → 参观；拜访`,
    spoken: `visit：V I S 看，加上 it 去，去看，就是参观、拜访。`,
    rate: 1.36,
    audio: `/audio/segments/003.mp3`,
  },
  {
    id: `w-vision`,
    start: 11.16,
    end: 14.568,
    text: `vision：看的能力 → 视力；远见`,
    spoken: `vision，看的能力，是视力；看得远，就是远见。`,
    rate: 1.36,
    audio: `/audio/segments/004.mp3`,
  },
  {
    id: `w-visible`,
    start: 14.568,
    end: 17.136,
    text: `visible：能被看见的 → 可见的`,
    spoken: `visible，能被看见的，可见的。`,
    rate: 1.36,
    audio: `/audio/segments/005.mp3`,
  },
  {
    id: `w-evidence`,
    start: 17.136,
    end: 20.808,
    text: `evidence：e 向外 + vid 看 → 让人看得见的东西 → 证据`,
    spoken: `evidence，e 向外，让人看得见的东西，就是证据。`,
    rate: 1.36,
    audio: `/audio/segments/006.mp3`,
  },
  {
    id: `twist-q`,
    start: 20.808,
    end: 24.312,
    text: `最意外的是 provide：提供，和“看”有什么关系？`,
    spoken: `最意外的是 provide。提供，和看有什么关系？`,
    rate: 1.15,
    audio: `/audio/segments/007.mp3`,
  },
  {
    id: `twist-a`,
    start: 24.312,
    end: 28.728,
    text: `pro 向前 + vid 看 → 提前看到 → 预先准备 → 提供`,
    spoken: `pro 向前，V I D 看：提前看到，所以预先准备，就是提供。`,
    rate: 1.36,
    audio: `/audio/segments/008.mp3`,
  },
  {
    id: `overview`,
    start: 28.728,
    end: 31.416,
    text: `五个高考词，一个词根：看`,
    spoken: `五个高考词，一个词根：看。`,
    rate: 1.15,
    audio: `/audio/segments/009.mp3`,
  },
  {
    id: `homework`,
    start: 31.416,
    end: 34.248,
    text: `最后一题贴在白板上，答案写在评论区`,
    spoken: `最后一题贴在白板上了，答案写在评论区。`,
    rate: 1.36,
    audio: `/audio/segments/010.mp3`,
  },
];
