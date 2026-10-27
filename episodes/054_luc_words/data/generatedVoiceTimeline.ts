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
    end: 2.592,
    text: `lucid 你可能一直只记成清醒`,
    audio: `/audio/segments/001.mp3`,
  },
  {
    id: `flash-words`,
    start: 2.592,
    end: 7.248,
    text: `lucid / elucidate / translucent / luminous / illuminate`,
    audio: `/audio/segments/002.mp3`,
  },
  {
    id: `same-root`,
    start: 7.248,
    end: 9.936,
    text: `这些词，其实都在往外放光`,
    audio: `/audio/segments/003.mp3`,
  },
  {
    id: `root-luc`,
    start: 9.936,
    end: 14.4,
    text: `luc / lum / lumin = light / 光`,
    audio: `/audio/segments/004.mp3`,
  },
  {
    id: `word-lucid`,
    start: 14.4,
    end: 18.768,
    text: `lucid = 被光照清 -> 清晰的`,
    audio: `/audio/segments/005.mp3`,
  },
  {
    id: `word-elucidate`,
    start: 18.768,
    end: 23.76,
    text: `elucidate = 把意思照亮 -> 阐明`,
    audio: `/audio/segments/006.mp3`,
  },
  {
    id: `word-translucent`,
    start: 23.76,
    end: 29.568,
    text: `translucent = 让光透过 -> 半透明`,
    audio: `/audio/segments/007.mp3`,
  },
  {
    id: `word-luminous`,
    start: 29.568,
    end: 33.552,
    text: `luminous = 自己发光 -> 发光的`,
    audio: `/audio/segments/008.mp3`,
  },
  {
    id: `word-illuminate`,
    start: 33.552,
    end: 38.424,
    text: `illuminate = 照亮 -> 照亮 / 阐明`,
    audio: `/audio/segments/009.mp3`,
  },
  {
    id: `word-luminary`,
    start: 38.424,
    end: 44.232,
    text: `luminary = 发光体 -> 杰出人物`,
    audio: `/audio/segments/010.mp3`,
  },
  {
    id: `word-bioluminescence`,
    start: 44.232,
    end: 51.192,
    text: `bioluminescence = 生物发光`,
    audio: `/audio/segments/011.mp3`,
  },
  {
    id: `grid-connect`,
    start: 51.192,
    end: 60.6,
    text: `一束光，串起一排词`,
    audio: `/audio/segments/012.mp3`,
  },
  {
    id: `summary`,
    start: 60.6,
    end: 64.68,
    text: `luc / lum / lumin = light / 光`,
    audio: `/audio/segments/013.mp3`,
  },
  {
    id: `outro`,
    start: 64.68,
    end: 70.296,
    text: `秒答：elucidate 为什么是阐明？`,
    audio: `/audio/segments/014.mp3`,
  },
];
