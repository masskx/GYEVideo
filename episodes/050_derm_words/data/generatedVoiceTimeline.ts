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
    text: `dermatology 你可能一直背得太散了`,
    audio: `/audio/segments/001.mp3`,
  },
  {
    id: `flash-words`,
    start: 2.904,
    end: 8.184,
    text: `dermal / dermatology / epidermis / hypodermic / dermatologist`,
    audio: `/audio/segments/002.mp3`,
  },
  {
    id: `same-root`,
    start: 8.184,
    end: 11.04,
    text: `这些词，其实都在讲同一层皮`,
    audio: `/audio/segments/003.mp3`,
  },
  {
    id: `root-derm`,
    start: 11.04,
    end: 14.616,
    text: `derm / derma = skin / 皮肤`,
    audio: `/audio/segments/004.mp3`,
  },
  {
    id: `word-dermal`,
    start: 14.616,
    end: 18.84,
    text: `dermal = 皮肤的`,
    audio: `/audio/segments/005.mp3`,
  },
  {
    id: `word-dermatology`,
    start: 18.84,
    end: 23.472,
    text: `dermatology = 研究皮肤 -> 皮肤病学`,
    audio: `/audio/segments/006.mp3`,
  },
  {
    id: `word-dermatologist`,
    start: 23.472,
    end: 28.536,
    text: `dermatologist = 研究皮肤的人 -> 皮肤科医生`,
    audio: `/audio/segments/007.mp3`,
  },
  {
    id: `word-epidermis`,
    start: 28.536,
    end: 34.584,
    text: `epidermis = 最上层的皮 -> 表皮`,
    audio: `/audio/segments/008.mp3`,
  },
  {
    id: `word-hypodermic`,
    start: 34.584,
    end: 41.184,
    text: `hypodermic = 皮肤下面 -> 皮下注射的`,
    audio: `/audio/segments/009.mp3`,
  },
  {
    id: `word-pachyderm`,
    start: 41.184,
    end: 46.8,
    text: `pachyderm = 厚皮 -> 厚皮动物`,
    audio: `/audio/segments/010.mp3`,
  },
  {
    id: `word-taxidermy`,
    start: 46.8,
    end: 52.656,
    text: `taxidermy = 处理皮做标本 -> 动物标本剥制术`,
    audio: `/audio/segments/011.mp3`,
  },
  {
    id: `grid-connect`,
    start: 52.656,
    end: 60.648,
    text: `一层皮，串起一排词`,
    audio: `/audio/segments/012.mp3`,
  },
  {
    id: `summary`,
    start: 60.648,
    end: 64.536,
    text: `derm / derma = skin / 皮肤`,
    audio: `/audio/segments/013.mp3`,
  },
  {
    id: `outro`,
    start: 64.536,
    end: 68.712,
    text: `秒答：hypodermic 为什么和皮肤有关？`,
    audio: `/audio/segments/014.mp3`,
  },
];
