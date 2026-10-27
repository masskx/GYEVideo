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
    end: 3.408,
    text: `prediction 不只是预测`,
    audio: `/audio/segments/001.mp3`,
  },
  {
    id: `flash-words`,
    start: 3.408,
    end: 7.656,
    text: `predict / contradict / verdict / dictate / dictionary`,
    audio: `/audio/segments/002.mp3`,
  },
  {
    id: `same-root`,
    start: 7.656,
    end: 11.184,
    text: `它们都和“说”有关`,
    audio: `/audio/segments/003.mp3`,
  },
  {
    id: `root-ject`,
    start: 11.184,
    end: 14.256,
    text: `dict = say / 说`,
    audio: `/audio/segments/004.mp3`,
  },
  {
    id: `word-reject`,
    start: 14.256,
    end: 19.392,
    text: `predict = 提前说 → 预测`,
    audio: `/audio/segments/005.mp3`,
  },
  {
    id: `word-object`,
    start: 19.392,
    end: 23.952,
    text: `contradict = 反着说 → 反驳`,
    audio: `/audio/segments/006.mp3`,
  },
  {
    id: `word-subject`,
    start: 23.952,
    end: 28.464,
    text: `verdict = 正式说出的判断 → 裁决`,
    audio: `/audio/segments/007.mp3`,
  },
  {
    id: `word-project`,
    start: 28.464,
    end: 34.032,
    text: `dictate = 说给别人听 → 口述 / 命令`,
    audio: `/audio/segments/008.mp3`,
  },
  {
    id: `word-inject`,
    start: 34.032,
    end: 37.632,
    text: `dictionary = 记录词语说法 → 词典`,
    audio: `/audio/segments/009.mp3`,
  },
  {
    id: `word-eject`,
    start: 37.632,
    end: 41.16,
    text: `diction = 说话用词 → 措辞`,
    audio: `/audio/segments/010.mp3`,
  },
  {
    id: `word-abject`,
    start: 41.16,
    end: 45.816,
    text: `dictation = 说出来让人写 → 听写`,
    audio: `/audio/segments/011.mp3`,
  },
  {
    id: `word-deject`,
    start: 45.816,
    end: 50.376,
    text: `indict = 正式指控 → 起诉`,
    audio: `/audio/segments/012.mp3`,
  },
  {
    id: `grid-connect`,
    start: 50.376,
    end: 58.872,
    text: `predict / contradict / verdict / dictate，都围着 say 转`,
    audio: `/audio/segments/013.mp3`,
  },
  {
    id: `summary`,
    start: 58.872,
    end: 62.28,
    text: `dict = say：说`,
    audio: `/audio/segments/014.mp3`,
  },
  {
    id: `outro`,
    start: 62.28,
    end: 65.784,
    text: `看到 dict，先想：谁在说`,
    audio: `/audio/segments/015.mp3`,
  },
];
