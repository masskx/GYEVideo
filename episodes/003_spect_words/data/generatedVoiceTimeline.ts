export type GeneratedVoiceTimelineItem = {
  id: string;
  start: number;
  end: number;
  text: string;
  audio: string;
};

export const generatedVoiceTimeline: GeneratedVoiceTimelineItem[] = [
  {
    id: `hook`,
    start: 0,
    end: 3.336,
    text: `你真的会背 spect 吗？`,
    audio: `/audio/segments/001.mp3`,
  },
  {
    id: `flash-words`,
    start: 3.336,
    end: 7.584,
    text: `inspect / respect / suspect / expect / prospect`,
    audio: `/audio/segments/002.mp3`,
  },
  {
    id: `same-root`,
    start: 7.584,
    end: 10.416,
    text: `它们其实都在“看”`,
    audio: `/audio/segments/003.mp3`,
  },
  {
    id: `root-ject`,
    start: 10.416,
    end: 13.536,
    text: `spect = look / 看`,
    audio: `/audio/segments/004.mp3`,
  },
  {
    id: `word-reject`,
    start: 13.536,
    end: 18.792,
    text: `inspect = 往里面看 → 检查`,
    audio: `/audio/segments/005.mp3`,
  },
  {
    id: `word-object`,
    start: 18.792,
    end: 24.12,
    text: `respect = 认真看 → 尊重`,
    audio: `/audio/segments/006.mp3`,
  },
  {
    id: `word-subject`,
    start: 24.12,
    end: 29.856,
    text: `suspect = 偷偷看 → 怀疑`,
    audio: `/audio/segments/007.mp3`,
  },
  {
    id: `word-project`,
    start: 29.856,
    end: 34.248,
    text: `expect = 向外看 → 期待`,
    audio: `/audio/segments/008.mp3`,
  },
  {
    id: `word-inject`,
    start: 34.248,
    end: 38.808,
    text: `prospect = 向前看 → 前景`,
    audio: `/audio/segments/009.mp3`,
  },
  {
    id: `word-eject`,
    start: 38.808,
    end: 44.04,
    text: `spectator = 看的人 → 观众`,
    audio: `/audio/segments/010.mp3`,
  },
  {
    id: `word-abject`,
    start: 44.04,
    end: 47.688,
    text: `spectacle = 值得看的场面 → 奇观`,
    audio: `/audio/segments/011.mp3`,
  },
  {
    id: `word-deject`,
    start: 47.688,
    end: 51.912,
    text: `retrospect = 往回看 → 回顾`,
    audio: `/audio/segments/012.mp3`,
  },
  {
    id: `grid-connect`,
    start: 51.912,
    end: 60.696,
    text: `往里看 / 认真看 / 偷偷看 / 向外看 / 向前看`,
    audio: `/audio/segments/013.mp3`,
  },
  {
    id: `summary`,
    start: 60.696,
    end: 64.056,
    text: `spect = look：看`,
    audio: `/audio/segments/014.mp3`,
  },
  {
    id: `outro`,
    start: 64.056,
    end: 67.224,
    text: `看到 spect，先想：往哪里看`,
    audio: `/audio/segments/015.mp3`,
  },
];
