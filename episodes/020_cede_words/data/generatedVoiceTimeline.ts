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
    end: 3.552,
    text: `proceed 不只是“继续”`,
    audio: `/audio/segments/001.mp3`,
  },
  {
    id: `flash-words`,
    start: 3.552,
    end: 7.152,
    text: `proceed / precede / recede / concede / exceed`,
    audio: `/audio/segments/002.mp3`,
  },
  {
    id: `same-root`,
    start: 7.152,
    end: 12,
    text: `它们都在“前进”`,
    audio: `/audio/segments/003.mp3`,
  },
  {
    id: `root-ject`,
    start: 12,
    end: 16.272,
    text: `cede / cess = go / 前进`,
    audio: `/audio/segments/004.mp3`,
  },
  {
    id: `word-reject`,
    start: 16.272,
    end: 22.512,
    text: `proceed = 向前走 → 继续进行`,
    audio: `/audio/segments/005.mp3`,
  },
  {
    id: `word-object`,
    start: 22.512,
    end: 28.248,
    text: `precede = 走在前面 → 先于`,
    audio: `/audio/segments/006.mp3`,
  },
  {
    id: `word-subject`,
    start: 28.248,
    end: 33.96,
    text: `recede = 往回走 → 后退 / 退去`,
    audio: `/audio/segments/007.mp3`,
  },
  {
    id: `word-project`,
    start: 33.96,
    end: 41.496,
    text: `concede = 让出一步 → 承认 / 让步`,
    audio: `/audio/segments/008.mp3`,
  },
  {
    id: `word-inject`,
    start: 41.496,
    end: 47.4,
    text: `exceed = 走出去更多 → 超过`,
    audio: `/audio/segments/009.mp3`,
  },
  {
    id: `word-eject`,
    start: 47.4,
    end: 53.952,
    text: `access = 走进去 → 进入 / 访问`,
    audio: `/audio/segments/010.mp3`,
  },
  {
    id: `word-abject`,
    start: 53.952,
    end: 58.032,
    text: `process = 一路走过 → 过程 / 流程`,
    audio: `/audio/segments/011.mp3`,
  },
  {
    id: `word-deject`,
    start: 58.032,
    end: 62.544,
    text: `successor = 后面走上来 → 继任者`,
    audio: `/audio/segments/012.mp3`,
  },
  {
    id: `grid-connect`,
    start: 62.544,
    end: 69.888,
    text: `proceed / recede / concede / exceed，都围着 go 转`,
    audio: `/audio/segments/013.mp3`,
  },
  {
    id: `summary`,
    start: 69.888,
    end: 74.112,
    text: `cede / cess = go：走，前进`,
    audio: `/audio/segments/014.mp3`,
  },
  {
    id: `outro`,
    start: 74.112,
    end: 77.64,
    text: `看到 cede / cess，先想：往哪儿走？`,
    audio: `/audio/segments/015.mp3`,
  },
];
