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
    end: 2.976,
    text: `impede 你可能一直不知道它在说什么`,
    audio: `/audio/segments/001.mp3`,
  },
  {
    id: `flash-words`,
    start: 2.976,
    end: 7.8,
    text: `impede / expedite / pedal / pedestrian / podiatrist`,
    audio: `/audio/segments/002.mp3`,
  },
  {
    id: `same-root`,
    start: 7.8,
    end: 10.68,
    text: `这些词，其实都在讲同一双脚`,
    audio: `/audio/segments/003.mp3`,
  },
  {
    id: `root-ped`,
    start: 10.68,
    end: 14.376,
    text: `ped / pod = foot / 脚`,
    audio: `/audio/segments/004.mp3`,
  },
  {
    id: `word-impede`,
    start: 14.376,
    end: 18.36,
    text: `impede = 把脚卡住 -> 阻碍`,
    audio: `/audio/segments/005.mp3`,
  },
  {
    id: `word-expedite`,
    start: 18.36,
    end: 22.464,
    text: `expedite = 把脚放出来 -> 加速`,
    audio: `/audio/segments/006.mp3`,
  },
  {
    id: `word-pedal`,
    start: 22.464,
    end: 27.048,
    text: `pedal = 用脚踩 -> 脚踏板`,
    audio: `/audio/segments/007.mp3`,
  },
  {
    id: `word-pedestrian`,
    start: 27.048,
    end: 30.888,
    text: `pedestrian = 靠脚走的人 -> 行人`,
    audio: `/audio/segments/008.mp3`,
  },
  {
    id: `word-pedicure`,
    start: 30.888,
    end: 35.232,
    text: `pedicure = 照顾脚 -> 修脚`,
    audio: `/audio/segments/009.mp3`,
  },
  {
    id: `word-podiatrist`,
    start: 35.232,
    end: 39.96,
    text: `podiatrist = 看脚的人 -> 足科医生`,
    audio: `/audio/segments/010.mp3`,
  },
  {
    id: `word-pedigree`,
    start: 39.96,
    end: 44.304,
    text: `pedigree = 一路追脚印 -> 血统`,
    audio: `/audio/segments/011.mp3`,
  },
  {
    id: `grid-connect`,
    start: 44.304,
    end: 50.448,
    text: `一双脚，串起一排词`,
    audio: `/audio/segments/012.mp3`,
  },
  {
    id: `summary`,
    start: 50.448,
    end: 54.216,
    text: `ped / pod = foot / 脚`,
    audio: `/audio/segments/013.mp3`,
  },
  {
    id: `outro`,
    start: 54.216,
    end: 57.624,
    text: `秒答：expedite 为什么是加速？`,
    audio: `/audio/segments/014.mp3`,
  },
];
