export type GeneratedVoiceTimelineItem = {
  id: string;
  start: number;
  end: number;
  text: string;
  audio: string;
};

export const generatedVoiceTimeline: GeneratedVoiceTimelineItem[] = [
  {
    id: `word-assigned`,
    start: 0,
    end: 2.328,
    text: `assigned = 分配`,
    audio: `/audio/segments/001.mp3`,
  },
  {
    id: `word-contribute`,
    start: 2.328,
    end: 4.944,
    text: `contribute = 出力`,
    audio: `/audio/segments/002.mp3`,
  },
  {
    id: `word-deadline`,
    start: 4.944,
    end: 6.552,
    text: `deadline = 截止日期`,
    audio: `/audio/segments/003.mp3`,
  },
  {
    id: `word-overwhelmed`,
    start: 6.552,
    end: 8.76,
    text: `overwhelmed = 被压垮了`,
    audio: `/audio/segments/004.mp3`,
  },
  {
    id: `word-ghosted`,
    start: 8.76,
    end: 11.208,
    text: `ghosted = 被无视`,
    audio: `/audio/segments/005.mp3`,
  },
  {
    id: `word-solo`,
    start: 11.208,
    end: 13.344,
    text: `solo = 单独，一人`,
    audio: `/audio/segments/006.mp3`,
  },
  {
    id: `word-panic`,
    start: 13.344,
    end: 16.608,
    text: `panic = 恐慌`,
    audio: `/audio/segments/007.mp3`,
  },
  {
    id: `word-resentment`,
    start: 16.608,
    end: 19.776,
    text: `resentment = 积怨`,
    audio: `/audio/segments/008.mp3`,
  },
  {
    id: `word-submit`,
    start: 19.776,
    end: 21.456,
    text: `submit = 提交`,
    audio: `/audio/segments/009.mp3`,
  },
  {
    id: `word-credit`,
    start: 21.456,
    end: 23.52,
    text: `credit = 学分，功劳`,
    audio: `/audio/segments/010.mp3`,
  },
  {
    id: `word-exhausted`,
    start: 23.52,
    end: 25.728,
    text: `exhausted = 耗尽了`,
    audio: `/audio/segments/011.mp3`,
  },
  {
    id: `word-survive`,
    start: 25.728,
    end: 27.792,
    text: `survive = 熬过去`,
    audio: `/audio/segments/012.mp3`,
  },
];
