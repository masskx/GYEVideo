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
    end: 3.24,
    text: `别再硬背 propel`,
    audio: `/audio/segments/001.mp3`,
  },
  {
    id: `flash-words`,
    start: 3.24,
    end: 7.512,
    text: `propel / compel / expel / repel / impulse`,
    audio: `/audio/segments/002.mp3`,
  },
  {
    id: `same-root`,
    start: 7.512,
    end: 13.176,
    text: `它们都在“推”`,
    audio: `/audio/segments/003.mp3`,
  },
  {
    id: `root-ject`,
    start: 13.176,
    end: 17.52,
    text: `pel / pulse = drive / 推动`,
    audio: `/audio/segments/004.mp3`,
  },
  {
    id: `word-reject`,
    start: 17.52,
    end: 23.304,
    text: `propel = 向前推 → 推进`,
    audio: `/audio/segments/005.mp3`,
  },
  {
    id: `word-object`,
    start: 23.304,
    end: 29.376,
    text: `compel = 一起推着你 → 强迫`,
    audio: `/audio/segments/006.mp3`,
  },
  {
    id: `word-subject`,
    start: 29.376,
    end: 35.856,
    text: `expel = 向外推 → 驱逐 / 开除`,
    audio: `/audio/segments/007.mp3`,
  },
  {
    id: `word-project`,
    start: 35.856,
    end: 41.832,
    text: `repel = 推回去 → 击退 / 排斥`,
    audio: `/audio/segments/008.mp3`,
  },
  {
    id: `word-inject`,
    start: 41.832,
    end: 48.768,
    text: `dispel = 推散开 → 驱散 / 消除`,
    audio: `/audio/segments/009.mp3`,
  },
  {
    id: `word-eject`,
    start: 48.768,
    end: 56.976,
    text: `impulse = 内在一推 → 冲动 / 推动力`,
    audio: `/audio/segments/010.mp3`,
  },
  {
    id: `word-abject`,
    start: 56.976,
    end: 61.944,
    text: `pulse = 一下下推动 → 脉搏`,
    audio: `/audio/segments/011.mp3`,
  },
  {
    id: `word-deject`,
    start: 61.944,
    end: 66.672,
    text: `compulsive = 一直被推着 → 强迫性的`,
    audio: `/audio/segments/012.mp3`,
  },
  {
    id: `grid-connect`,
    start: 66.672,
    end: 74.448,
    text: `propel / expel / repel / impulse，都围着 drive 转`,
    audio: `/audio/segments/013.mp3`,
  },
  {
    id: `summary`,
    start: 74.448,
    end: 78.792,
    text: `pel / pulse = drive：推动，驱使`,
    audio: `/audio/segments/014.mp3`,
  },
  {
    id: `outro`,
    start: 78.792,
    end: 82.872,
    text: `看到 pel / pulse，先想：往哪儿推？`,
    audio: `/audio/segments/015.mp3`,
  },
];
