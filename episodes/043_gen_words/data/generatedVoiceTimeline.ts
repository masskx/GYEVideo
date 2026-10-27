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
    end: 2.904,
    text: `generate 你可能一直不知道它在说什么`,
    audio: `/audio/segments/001.mp3`,
  },
  {
    id: `flash-words`,
    start: 2.904,
    end: 7.368,
    text: `generate / generation / gene / genius / genuine`,
    audio: `/audio/segments/002.mp3`,
  },
  {
    id: `same-root`,
    start: 7.368,
    end: 10.584,
    text: `这些词，其实都在讲同一个出生动作`,
    audio: `/audio/segments/003.mp3`,
  },
  {
    id: `root-gen`,
    start: 10.584,
    end: 14.496,
    text: `gen = birth，出生，产生。`,
    audio: `/audio/segments/004.mp3`,
  },
  {
    id: `word-generate`,
    start: 14.496,
    end: 21.672,
    text: `generate = 产生出来 -> 生成`,
    audio: `/audio/segments/005.mp3`,
  },
  {
    id: `word-generation`,
    start: 21.672,
    end: 29.088,
    text: `generation = 同一批出生 -> 一代人`,
    audio: `/audio/segments/006.mp3`,
  },
  {
    id: `word-gene`,
    start: 29.088,
    end: 34.464,
    text: `gene = 遗传的基本单位 -> 基因`,
    audio: `/audio/segments/007.mp3`,
  },
  {
    id: `word-genius`,
    start: 34.464,
    end: 40.8,
    text: `genius = 天生的能力 -> 天才`,
    audio: `/audio/segments/008.mp3`,
  },
  {
    id: `word-genuine`,
    start: 40.8,
    end: 47.664,
    text: `genuine = 生而真实 -> 真正的`,
    audio: `/audio/segments/009.mp3`,
  },
  {
    id: `word-gender`,
    start: 47.664,
    end: 54.12,
    text: `gender = 出生的种类 -> 性别`,
    audio: `/audio/segments/010.mp3`,
  },
  {
    id: `word-generous`,
    start: 54.12,
    end: 61.056,
    text: `generous = 高贵出身 -> 慷慨的`,
    audio: `/audio/segments/011.mp3`,
  },
  {
    id: `word-genesis`,
    start: 61.056,
    end: 67.272,
    text: `genesis = 万物之初 -> 起源`,
    audio: `/audio/segments/012.mp3`,
  },
  {
    id: `grid-connect`,
    start: 67.272,
    end: 74.568,
    text: `generate / gene / genuine，都围着 birth 转`,
    audio: `/audio/segments/013.mp3`,
  },
  {
    id: `summary`,
    start: 74.568,
    end: 78.288,
    text: `gen = birth / 出生，产生`,
    audio: `/audio/segments/014.mp3`,
  },
  {
    id: `outro`,
    start: 78.288,
    end: 84.384,
    text: `看到 gen，先想：怎么来的？怎么生的？`,
    audio: `/audio/segments/015.mp3`,
  },
];
