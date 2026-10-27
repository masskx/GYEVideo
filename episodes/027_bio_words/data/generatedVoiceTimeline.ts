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
    end: 5.112,
    text: `看到 bio 别只会想 biology`,
    audio: `/audio/segments/001.mp3`,
  },
  {
    id: `flash-words`,
    start: 5.112,
    end: 10.704,
    text: `biology / biography / biodegradable / biodiversity / antibiotic`,
    audio: `/audio/segments/002.mp3`,
  },
  {
    id: `same-root`,
    start: 10.704,
    end: 15.024,
    text: `它们都连着 life / 生命`,
    audio: `/audio/segments/003.mp3`,
  },
  {
    id: `root-ject`,
    start: 15.024,
    end: 18.288,
    text: `bio = life / 生命`,
    audio: `/audio/segments/004.mp3`,
  },
  {
    id: `word-reject`,
    start: 18.288,
    end: 23.712,
    text: `biology = 研究生命 -> 生物学`,
    audio: `/audio/segments/005.mp3`,
  },
  {
    id: `word-object`,
    start: 23.712,
    end: 30.528,
    text: `biography = 写生命经历 -> 传记`,
    audio: `/audio/segments/006.mp3`,
  },
  {
    id: `word-subject`,
    start: 30.528,
    end: 36.48,
    text: `biodegradable = 能被生命分解 -> 可生物降解`,
    audio: `/audio/segments/007.mp3`,
  },
  {
    id: `word-project`,
    start: 36.48,
    end: 41.784,
    text: `biodiversity = 很多生命并存 -> 生物多样性`,
    audio: `/audio/segments/008.mp3`,
  },
  {
    id: `word-inject`,
    start: 41.784,
    end: 48.408,
    text: `antibiotic = 对抗微生物生命 -> 抗生素`,
    audio: `/audio/segments/009.mp3`,
  },
  {
    id: `word-eject`,
    start: 48.408,
    end: 53.4,
    text: `symbiosis = 不同生命一起活 -> 共生`,
    audio: `/audio/segments/010.mp3`,
  },
  {
    id: `word-abject`,
    start: 53.4,
    end: 58.968,
    text: `microbiome = 身体里的微小生命群 -> 微生物群系`,
    audio: `/audio/segments/011.mp3`,
  },
  {
    id: `word-deject`,
    start: 58.968,
    end: 64.68,
    text: `biochemistry = 生命体里的化学 -> 生物化学`,
    audio: `/audio/segments/012.mp3`,
  },
  {
    id: `grid-connect`,
    start: 64.68,
    end: 74.496,
    text: `biology / biography / biodiversity，都围着 life 转`,
    audio: `/audio/segments/013.mp3`,
  },
  {
    id: `summary`,
    start: 74.496,
    end: 77.856,
    text: `bio = life / 生命`,
    audio: `/audio/segments/014.mp3`,
  },
  {
    id: `outro`,
    start: 77.856,
    end: 81.84,
    text: `看到 bio，先想：它和哪种生命有关？`,
    audio: `/audio/segments/015.mp3`,
  },
];
