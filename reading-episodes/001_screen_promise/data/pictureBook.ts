// reading-picture-book episode data (skill: remotion-template/skills/reading-picture-book).
// Self-contained: types live here. Visible Chinese must use GB2312 characters (`npm run check`).
// Every story sentence is one voice line, read in English; its Chinese line is in `translations`.

export type WordLevel = '课标' | '拓展';
export type LineMeta = {keywords?: string[]; pauseBefore?: number; holdAfter?: number};

export type StoryWord = {
  id: string;
  word: string; // as it appears in the story (any inflection)
  lemma: string; // dictionary form shown on the card
  phonetic: string;
  pos: string;
  meaning: string;
  level: WordLevel;
};

export type Setting = 'bedroom-night' | 'classroom' | 'street-morning' | 'park-day';
export type PropKind = 'phone' | 'clock' | 'book' | 'box' | 'sun' | 'moon' | 'stars' | 'tree' | 'lamp';

export type Illustration = {
  setting: Setting;
  props?: {kind: PropKind; x: number; y: number; scale?: number; time?: string}[]; // x, y in a 1000 × 800 page
  pig: {x: number; face: 'neutral' | 'squint' | 'happy' | 'surprised'; pose: 'idle' | 'inspect' | 'cheer' | 'point'; flip?: boolean};
};

export type PictureBookScene = {
  id: string;
  kind: 'cover' | 'page' | 'words' | 'question' | 'end';
  lines: string[];
  illustration?: Illustration; // cover / page / end
  pageNo?: number;
};

export type PictureBookQuestion = {
  stem: string;
  stemZh: string;
  options: string[];
  answerIndex: number;
  evidenceLineId: string; // the story sentence that proves the answer (原文定位)
  sourceNote: string;
};

export type PictureBook = {
  bookNo: string;
  title: {en: string; zh: string};
  level: string;
  targets: StoryWord[];
  translations: Record<string, string>; // voice line id -> Chinese
  question: PictureBookQuestion;
  scenes: PictureBookScene[];
  lineMeta: Record<string, LineMeta>;
  score: {bpm: number; key: 'C' | 'D' | 'E' | 'F' | 'G' | 'A' | 'Bb'};
};

export const pictureBook: PictureBook = {
  bookNo: '001',
  title: {en: 'Little Pig and the Midnight Screen', zh: '小猪和半夜的屏幕'},
  level: '高一 · 高二',
  targets: [
    {id: 'promise', word: 'promise', lemma: 'promise', phonetic: '/ˈprɒmɪs/', pos: 'n./v.', meaning: '承诺；答应', level: '课标'},
    {id: 'distracted', word: 'distracted', lemma: 'distracted', phonetic: '/dɪˈstræktɪd/', pos: 'adj.', meaning: '分心的', level: '课标'},
    {id: 'exhausted', word: 'exhausted', lemma: 'exhausted', phonetic: '/ɪɡˈzɔːstɪd/', pos: 'adj.', meaning: '精疲力尽的', level: '课标'},
    {id: 'determined', word: 'determined', lemma: 'determined', phonetic: '/dɪˈtɜːmɪnd/', pos: 'adj.', meaning: '下定决心的', level: '课标'},
    {id: 'routine', word: 'routine', lemma: 'routine', phonetic: '/ruːˈtiːn/', pos: 'n.', meaning: '惯例；日常安排', level: '课标'},
    {id: 'achieve', word: 'achieve', lemma: 'achieve', phonetic: '/əˈtʃiːv/', pos: 'v.', meaning: '实现；达到', level: '课标'},
  ],
  translations: {
    title: '小猪和半夜的屏幕',
    'p1-a': '每天晚上，小猪都许下同一个承诺：就再看十分钟。',
    'p1-b': '可是明亮的屏幕上，总还有下一个视频。',
    'p2-a': '到了半夜，他还在刷手机，分心到完全没注意时间。',
    'p3-a': '第二天早上，他在课上精疲力尽，漏听了半节课。',
    'p4-a': '那天晚上，小猪下定决心要改变。',
    'p4-b': '他把手机放进了另一个房间。',
    'p5-a': '一周以后，他的新作息起作用了。',
    'p5-b': '他早早醒来，觉得自己准备好去实现目标了。',
    words: '故事里的六个词。',
    question: '为什么小猪漏听了半节课？',
    answer: '答案是 B：熬夜之后，他精疲力尽。',
    end: '完。你会怎么做？告诉我们吧。',
  },
  question: {
    stem: 'Why did Little Pig miss half of the lesson?',
    stemZh: '为什么小猪漏听了半节课？',
    options: ['He was late for school.', 'He felt exhausted after staying up.', 'He was using his phone in class.', 'The lesson was too difficult.'],
    answerIndex: 1,
    evidenceLineId: 'p3-a',
    sourceNote: '高考风格原创阅读题',
  },
  scenes: [
    {id: 'cover', kind: 'cover', lines: ['title'], illustration: {setting: 'bedroom-night', props: [{kind: 'moon', x: 800, y: 140}, {kind: 'stars', x: 500, y: 120}], pig: {x: 0.5, face: 'happy', pose: 'idle'}}},
    {id: 'p1', kind: 'page', pageNo: 1, lines: ['p1-a', 'p1-b'], illustration: {setting: 'bedroom-night', props: [{kind: 'phone', x: 640, y: 470}, {kind: 'lamp', x: 140, y: 420}, {kind: 'moon', x: 820, y: 150}], pig: {x: 0.42, face: 'happy', pose: 'point'}}},
    {id: 'p2', kind: 'page', pageNo: 2, lines: ['p2-a'], illustration: {setting: 'bedroom-night', props: [{kind: 'clock', x: 780, y: 220, time: '12:00'}, {kind: 'phone', x: 560, y: 480}], pig: {x: 0.3, face: 'squint', pose: 'idle'}}},
    {id: 'p3', kind: 'page', pageNo: 3, lines: ['p3-a'], illustration: {setting: 'classroom', props: [{kind: 'clock', x: 820, y: 160, time: '9:00', scale: 0.7}, {kind: 'book', x: 640, y: 560}], pig: {x: 0.45, face: 'squint', pose: 'idle'}}},
    {id: 'p4', kind: 'page', pageNo: 4, lines: ['p4-a', 'p4-b'], illustration: {setting: 'bedroom-night', props: [{kind: 'box', x: 760, y: 520}, {kind: 'phone', x: 760, y: 470, scale: 0.8}, {kind: 'moon', x: 820, y: 150}], pig: {x: 0.35, face: 'neutral', pose: 'point', flip: true}}},
    {id: 'p5', kind: 'page', pageNo: 5, lines: ['p5-a', 'p5-b'], illustration: {setting: 'street-morning', props: [{kind: 'sun', x: 820, y: 150}, {kind: 'tree', x: 150, y: 430}], pig: {x: 0.55, face: 'happy', pose: 'cheer'}}},
    {id: 'words', kind: 'words', lines: ['words']},
    {id: 'question', kind: 'question', lines: ['question', 'answer']},
    {id: 'end', kind: 'end', lines: ['end'], illustration: {setting: 'park-day', props: [{kind: 'sun', x: 820, y: 150}, {kind: 'tree', x: 820, y: 420}], pig: {x: 0.45, face: 'happy', pose: 'cheer'}}},
  ],
  lineMeta: {
    title: {holdAfter: 0.2},
    'p1-a': {},
    'p2-a': {holdAfter: 0.3},
    'p3-a': {holdAfter: 0.3},
    'p4-a': {},
    'p5-b': {holdAfter: 0.2},
    words: {},
    // Thinking time: the score drops out and a clock ticks before the answer.
    answer: {pauseBefore: 2.2},
    end: {holdAfter: 0.8},
  },
  score: {bpm: 84, key: 'G'},
};
