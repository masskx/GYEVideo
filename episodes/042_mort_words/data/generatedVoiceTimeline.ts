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
    end: 2.832,
    text: `mortal 你可能一直不知道它在说什么`,
    audio: `/audio/segments/001.mp3`,
  },
  {
    id: `flash-words`,
    start: 2.832,
    end: 7.488,
    text: `mortal / immortal / mortgage / mortician / mortify`,
    audio: `/audio/segments/002.mp3`,
  },
  {
    id: `same-root`,
    start: 7.488,
    end: 10.8,
    text: `这些词，其实都在讲同一个死亡信号`,
    audio: `/audio/segments/003.mp3`,
  },
  {
    id: `root-mort`,
    start: 10.8,
    end: 14.016,
    text: `mort = death，死亡。`,
    audio: `/audio/segments/004.mp3`,
  },
  {
    id: `word-mortal`,
    start: 14.016,
    end: 20.232,
    text: `mortal = 会死的 -> 凡人`,
    audio: `/audio/segments/005.mp3`,
  },
  {
    id: `word-immortal`,
    start: 20.232,
    end: 27.264,
    text: `immortal = 不死的 -> 不朽的`,
    audio: `/audio/segments/006.mp3`,
  },
  {
    id: `word-mortgage`,
    start: 27.264,
    end: 35.136,
    text: `mortgage = 死亡抵押 -> 抵押贷款`,
    audio: `/audio/segments/007.mp3`,
  },
  {
    id: `word-mortician`,
    start: 35.136,
    end: 42.432,
    text: `mortician = 处理死亡的人 -> 殡仪师`,
    audio: `/audio/segments/008.mp3`,
  },
  {
    id: `word-mortify`,
    start: 42.432,
    end: 49.872,
    text: `mortify = 羞耻到想死 -> 使难堪`,
    audio: `/audio/segments/009.mp3`,
  },
  {
    id: `word-postmortem`,
    start: 49.872,
    end: 56.808,
    text: `postmortem = 死后 -> 尸检 / 事后分析`,
    audio: `/audio/segments/010.mp3`,
  },
  {
    id: `word-morgue`,
    start: 56.808,
    end: 61.632,
    text: `morgue = 停尸处 -> 太平间`,
    audio: `/audio/segments/011.mp3`,
  },
  {
    id: `word-mortuary`,
    start: 61.632,
    end: 68.136,
    text: `mortuary = 与死亡相关的地方 -> 殡仪馆`,
    audio: `/audio/segments/012.mp3`,
  },
  {
    id: `grid-connect`,
    start: 68.136,
    end: 74.832,
    text: `mortal / immortal / mortgage，都围着 death 转`,
    audio: `/audio/segments/013.mp3`,
  },
  {
    id: `summary`,
    start: 74.832,
    end: 78.384,
    text: `mort = death / 死亡`,
    audio: `/audio/segments/014.mp3`,
  },
  {
    id: `outro`,
    start: 78.384,
    end: 85.872,
    text: `看到 mort，先想：死什么？为什么死？`,
    audio: `/audio/segments/015.mp3`,
  },
];
