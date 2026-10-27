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
    end: 2.808,
    text: `cardiology 你可能一直背得太慢了`,
    audio: `/audio/segments/001.mp3`,
  },
  {
    id: `flash-words`,
    start: 2.808,
    end: 8.16,
    text: `cardiac / cardiology / cardiogram / cardiovascular / cardiologist`,
    audio: `/audio/segments/002.mp3`,
  },
  {
    id: `same-root`,
    start: 8.16,
    end: 10.968,
    text: `这些词，其实都在讲同一颗心`,
    audio: `/audio/segments/003.mp3`,
  },
  {
    id: `root-cardi`,
    start: 10.968,
    end: 14.712,
    text: `cardi / cardio = heart / 心脏`,
    audio: `/audio/segments/004.mp3`,
  },
  {
    id: `word-cardiac`,
    start: 14.712,
    end: 18.96,
    text: `cardiac = 心脏的`,
    audio: `/audio/segments/005.mp3`,
  },
  {
    id: `word-cardiology`,
    start: 18.96,
    end: 23.352,
    text: `cardiology = 研究心脏 -> 心脏病学`,
    audio: `/audio/segments/006.mp3`,
  },
  {
    id: `word-cardiologist`,
    start: 23.352,
    end: 28.128,
    text: `cardiologist = 研究心脏的人 -> 心脏科医生`,
    audio: `/audio/segments/007.mp3`,
  },
  {
    id: `word-cardiogram`,
    start: 28.128,
    end: 32.376,
    text: `cardiogram = 画出心脏信号 -> 心电图`,
    audio: `/audio/segments/008.mp3`,
  },
  {
    id: `word-cardiovascular`,
    start: 32.376,
    end: 37.152,
    text: `cardiovascular = 心脏 + 血管 -> 心血管的`,
    audio: `/audio/segments/009.mp3`,
  },
  {
    id: `word-cardiopulmonary`,
    start: 37.152,
    end: 42.36,
    text: `cardiopulmonary = 心 + 肺 -> 心肺的`,
    audio: `/audio/segments/010.mp3`,
  },
  {
    id: `word-pericardium`,
    start: 42.36,
    end: 48.144,
    text: `pericardium = 围着心 -> 心包`,
    audio: `/audio/segments/011.mp3`,
  },
  {
    id: `grid-connect`,
    start: 48.144,
    end: 56.016,
    text: `一颗心，串起一排词`,
    audio: `/audio/segments/012.mp3`,
  },
  {
    id: `summary`,
    start: 56.016,
    end: 59.64,
    text: `cardi / cardio = heart / 心脏`,
    audio: `/audio/segments/013.mp3`,
  },
  {
    id: `outro`,
    start: 59.64,
    end: 64.176,
    text: `秒答：cardiovascular 为什么和心脏有关？`,
    audio: `/audio/segments/014.mp3`,
  },
];
