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
    text: `aquarium 你可能一直只会翻成鱼缸`,
    audio: `/audio/segments/001.mp3`,
  },
  {
    id: `flash-words`,
    start: 2.904,
    end: 7.896,
    text: `aquatic / aquarium / aqueous / aqueduct / subaqueous`,
    audio: `/audio/segments/002.mp3`,
  },
  {
    id: `same-root`,
    start: 7.896,
    end: 10.752,
    text: `这些词，其实都在讲同一滩水`,
    audio: `/audio/segments/003.mp3`,
  },
  {
    id: `root-aqua`,
    start: 10.752,
    end: 14.64,
    text: `aqua / aque = water / 水`,
    audio: `/audio/segments/004.mp3`,
  },
  {
    id: `word-aquatic`,
    start: 14.64,
    end: 19.2,
    text: `aquatic = 水里的 / 水生的`,
    audio: `/audio/segments/005.mp3`,
  },
  {
    id: `word-aquarium`,
    start: 19.2,
    end: 23.904,
    text: `aquarium = 装着水的地方 -> 鱼缸 / 水族馆`,
    audio: `/audio/segments/006.mp3`,
  },
  {
    id: `word-aqueous`,
    start: 23.904,
    end: 29.184,
    text: `aqueous = 含水的`,
    audio: `/audio/segments/007.mp3`,
  },
  {
    id: `word-aqueduct`,
    start: 29.184,
    end: 34.176,
    text: `aqueduct = 引水的通道 -> 引水渠`,
    audio: `/audio/segments/008.mp3`,
  },
  {
    id: `word-subaqueous`,
    start: 34.176,
    end: 39.816,
    text: `subaqueous = 水下面 -> 水下的`,
    audio: `/audio/segments/009.mp3`,
  },
  {
    id: `word-aquifer`,
    start: 39.816,
    end: 44.472,
    text: `aquifer = 带水的层 -> 含水层`,
    audio: `/audio/segments/010.mp3`,
  },
  {
    id: `word-aquamarine`,
    start: 44.472,
    end: 49.92,
    text: `aquamarine = 像海水的蓝 -> 海蓝色`,
    audio: `/audio/segments/011.mp3`,
  },
  {
    id: `grid-connect`,
    start: 49.92,
    end: 57.432,
    text: `一滩水，串起一排词`,
    audio: `/audio/segments/012.mp3`,
  },
  {
    id: `summary`,
    start: 57.432,
    end: 61.08,
    text: `aqua / aque = water / 水`,
    audio: `/audio/segments/013.mp3`,
  },
  {
    id: `outro`,
    start: 61.08,
    end: 64.728,
    text: `秒答：aqueduct 为什么和水有关？`,
    audio: `/audio/segments/014.mp3`,
  },
];
