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
    end: 3.216,
    text: `submarine 你可能一直只会想到潜艇`,
    audio: `/audio/segments/001.mp3`,
  },
  {
    id: `flash-words`,
    start: 3.216,
    end: 7.944,
    text: `marine / maritime / mariner / marina / submarine`,
    audio: `/audio/segments/002.mp3`,
  },
  {
    id: `same-root`,
    start: 7.944,
    end: 10.776,
    text: `这些词，其实都在讲同一片海`,
    audio: `/audio/segments/003.mp3`,
  },
  {
    id: `root-mar`,
    start: 10.776,
    end: 14.328,
    text: `mar / mari = sea / 海`,
    audio: `/audio/segments/004.mp3`,
  },
  {
    id: `word-marine`,
    start: 14.328,
    end: 17.832,
    text: `marine = 海的`,
    audio: `/audio/segments/005.mp3`,
  },
  {
    id: `word-maritime`,
    start: 17.832,
    end: 22.56,
    text: `maritime = 和海相关 -> 海运的 / 海事的`,
    audio: `/audio/segments/006.mp3`,
  },
  {
    id: `word-mariner`,
    start: 22.56,
    end: 26.688,
    text: `mariner = 在海上跑的人 -> 水手`,
    audio: `/audio/segments/007.mp3`,
  },
  {
    id: `word-marina`,
    start: 26.688,
    end: 31.56,
    text: `marina = 停船的海边 -> 游艇码头`,
    audio: `/audio/segments/008.mp3`,
  },
  {
    id: `word-submarine`,
    start: 31.56,
    end: 38.088,
    text: `submarine = 海下面 -> 潜艇 / 海底的`,
    audio: `/audio/segments/009.mp3`,
  },
  {
    id: `word-ultramarine`,
    start: 38.088,
    end: 44.136,
    text: `ultramarine = 越过海来的蓝 -> 群青色`,
    audio: `/audio/segments/010.mp3`,
  },
  {
    id: `word-transmarine`,
    start: 44.136,
    end: 49.92,
    text: `transmarine = 跨海的 -> 越洋的`,
    audio: `/audio/segments/011.mp3`,
  },
  {
    id: `grid-connect`,
    start: 49.92,
    end: 57.672,
    text: `一片海，串起一排词`,
    audio: `/audio/segments/012.mp3`,
  },
  {
    id: `summary`,
    start: 57.672,
    end: 60.768,
    text: `mar / mari = sea / 海`,
    audio: `/audio/segments/013.mp3`,
  },
  {
    id: `outro`,
    start: 60.768,
    end: 64.656,
    text: `秒答：submarine 为什么和海有关？`,
    audio: `/audio/segments/014.mp3`,
  },
];
