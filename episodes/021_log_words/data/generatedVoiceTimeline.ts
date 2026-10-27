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
    end: 4.584,
    text: `logic 不只是“逻辑”`,
    audio: `/audio/segments/001.mp3`,
  },
  {
    id: `flash-words`,
    start: 4.584,
    end: 8.448,
    text: `logic / dialogue / monologue / analogy / apology`,
    audio: `/audio/segments/002.mp3`,
  },
  {
    id: `same-root`,
    start: 8.448,
    end: 15,
    text: `它们都围着“说”和“理由”`,
    audio: `/audio/segments/003.mp3`,
  },
  {
    id: `root-ject`,
    start: 15,
    end: 20.496,
    text: `log = word / speech / reason`,
    audio: `/audio/segments/004.mp3`,
  },
  {
    id: `word-reject`,
    start: 20.496,
    end: 25.488,
    text: `logic = 把理由讲通 → 逻辑`,
    audio: `/audio/segments/005.mp3`,
  },
  {
    id: `word-object`,
    start: 25.488,
    end: 31.44,
    text: `dialogue = 两边对着说 → 对话`,
    audio: `/audio/segments/006.mp3`,
  },
  {
    id: `word-subject`,
    start: 31.44,
    end: 36.6,
    text: `monologue = 一个人说 → 独白`,
    audio: `/audio/segments/007.mp3`,
  },
  {
    id: `word-project`,
    start: 36.6,
    end: 41.568,
    text: `analogy = 借另一个例子说 → 类比`,
    audio: `/audio/segments/008.mp3`,
  },
  {
    id: `word-inject`,
    start: 41.568,
    end: 47.544,
    text: `apology = 把错说出来 → 道歉`,
    audio: `/audio/segments/009.mp3`,
  },
  {
    id: `word-eject`,
    start: 47.544,
    end: 54.072,
    text: `eulogy = 把赞美说出来 → 悼词 / 颂词`,
    audio: `/audio/segments/010.mp3`,
  },
  {
    id: `word-abject`,
    start: 54.072,
    end: 59.376,
    text: `catalog = 一条条列出来 → 目录`,
    audio: `/audio/segments/011.mp3`,
  },
  {
    id: `word-deject`,
    start: 59.376,
    end: 65.184,
    text: `logistics = 把安排讲清并落地 → 后勤`,
    audio: `/audio/segments/012.mp3`,
  },
  {
    id: `grid-connect`,
    start: 65.184,
    end: 73.056,
    text: `logic / dialogue / apology，都围着 word 和 reason 转`,
    audio: `/audio/segments/013.mp3`,
  },
  {
    id: `summary`,
    start: 73.056,
    end: 78.6,
    text: `log = word / speech / reason: 词，说话，逻辑`,
    audio: `/audio/segments/014.mp3`,
  },
  {
    id: `outro`,
    start: 78.6,
    end: 82.296,
    text: `看到 log，先想：是在说，还是在讲理由？`,
    audio: `/audio/segments/015.mp3`,
  },
];
