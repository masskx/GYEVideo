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
    end: 2.928,
    text: `corpse 你可能一直不知道它在说什么`,
    audio: `/audio/segments/001.mp3`,
  },
  {
    id: `flash-words`,
    start: 2.928,
    end: 7.464,
    text: `corpse / corporation / incorporate / corporal / corps`,
    audio: `/audio/segments/002.mp3`,
  },
  {
    id: `same-root`,
    start: 7.464,
    end: 10.32,
    text: `这些词，其实都在讲同一个身体`,
    audio: `/audio/segments/003.mp3`,
  },
  {
    id: `root-corp`,
    start: 10.32,
    end: 13.392,
    text: `corp = body，身体。`,
    audio: `/audio/segments/004.mp3`,
  },
  {
    id: `word-corpse`,
    start: 13.392,
    end: 19.944,
    text: `corpse = 无生命的身体 -> 尸体`,
    audio: `/audio/segments/005.mp3`,
  },
  {
    id: `word-corporation`,
    start: 19.944,
    end: 26.952,
    text: `corporation = 法律身体 -> 公司`,
    audio: `/audio/segments/006.mp3`,
  },
  {
    id: `word-incorporate`,
    start: 26.952,
    end: 34.872,
    text: `incorporate = 编进身体 -> 合并`,
    audio: `/audio/segments/007.mp3`,
  },
  {
    id: `word-corporal`,
    start: 34.872,
    end: 41.4,
    text: `corporal = 身体的 -> 肉体的`,
    audio: `/audio/segments/008.mp3`,
  },
  {
    id: `word-corporeal`,
    start: 41.4,
    end: 47.856,
    text: `corporeal = 有身体的 -> 物质的 / 有形的`,
    audio: `/audio/segments/009.mp3`,
  },
  {
    id: `word-corpus`,
    start: 47.856,
    end: 54.192,
    text: `corpus = 知识的整体 -> 语料库 / 全集`,
    audio: `/audio/segments/010.mp3`,
  },
  {
    id: `word-corps`,
    start: 54.192,
    end: 60.312,
    text: `corps = 一群人的身体 -> 军团 / 团队`,
    audio: `/audio/segments/011.mp3`,
  },
  {
    id: `word-corpulent`,
    start: 60.312,
    end: 66.408,
    text: `corpulent = 充满身体 -> 肥胖的`,
    audio: `/audio/segments/012.mp3`,
  },
  {
    id: `grid-connect`,
    start: 66.408,
    end: 74.592,
    text: `corpse / corporation / incorporate，都围着 body 转`,
    audio: `/audio/segments/013.mp3`,
  },
  {
    id: `summary`,
    start: 74.592,
    end: 77.976,
    text: `corp = body / 身体`,
    audio: `/audio/segments/014.mp3`,
  },
  {
    id: `outro`,
    start: 77.976,
    end: 84.312,
    text: `看到 corp，先想：什么身体？实体的还是抽象的？`,
    audio: `/audio/segments/015.mp3`,
  },
];
