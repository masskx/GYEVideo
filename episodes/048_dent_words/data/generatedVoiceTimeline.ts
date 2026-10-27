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
    end: 3.048,
    text: `indent 你可能一直不知道它在说什么`,
    audio: `/audio/segments/001.mp3`,
  },
  {
    id: `flash-words`,
    start: 3.048,
    end: 7.536,
    text: `indent / dental / dentist / denture / orthodontist`,
    audio: `/audio/segments/002.mp3`,
  },
  {
    id: `same-root`,
    start: 7.536,
    end: 10.416,
    text: `这些词，其实都在讲同一排牙`,
    audio: `/audio/segments/003.mp3`,
  },
  {
    id: `root-dent`,
    start: 10.416,
    end: 14.424,
    text: `dent / dont = tooth / 牙齿`,
    audio: `/audio/segments/004.mp3`,
  },
  {
    id: `word-indent`,
    start: 14.424,
    end: 19.248,
    text: `indent = 牙咬出的缺口 -> 缩进`,
    audio: `/audio/segments/005.mp3`,
  },
  {
    id: `word-dental`,
    start: 19.248,
    end: 23.16,
    text: `dental = 牙齿的 -> 牙科的`,
    audio: `/audio/segments/006.mp3`,
  },
  {
    id: `word-dentist`,
    start: 23.16,
    end: 26.664,
    text: `dentist = 管牙齿的人 -> 牙医`,
    audio: `/audio/segments/007.mp3`,
  },
  {
    id: `word-denture`,
    start: 26.664,
    end: 30.36,
    text: `denture = 一排牙 -> 假牙`,
    audio: `/audio/segments/008.mp3`,
  },
  {
    id: `word-dentifrice`,
    start: 30.36,
    end: 35.208,
    text: `dentifrice = 清洁牙齿 -> 牙膏`,
    audio: `/audio/segments/009.mp3`,
  },
  {
    id: `word-orthodontist`,
    start: 35.208,
    end: 41.112,
    text: `orthodontist = 正 + 牙 -> 正畸医生`,
    audio: `/audio/segments/010.mp3`,
  },
  {
    id: `word-edentulous`,
    start: 41.112,
    end: 45.792,
    text: `edentulous = 没有牙 -> 无牙的`,
    audio: `/audio/segments/011.mp3`,
  },
  {
    id: `grid-connect`,
    start: 45.792,
    end: 52.608,
    text: `一排牙，串起一排词`,
    audio: `/audio/segments/012.mp3`,
  },
  {
    id: `summary`,
    start: 52.608,
    end: 56.472,
    text: `dent / dont = tooth / 牙齿`,
    audio: `/audio/segments/013.mp3`,
  },
  {
    id: `outro`,
    start: 56.472,
    end: 59.832,
    text: `秒答：indent 为什么和牙齿有关？`,
    audio: `/audio/segments/014.mp3`,
  },
];
