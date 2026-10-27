// vocab-whiteboard episode data (skill: remotion-template/skills/vocab-whiteboard).
// Self-contained: types live here. Visible text must use GB2312 characters (`npm run check`).
// Board positions are automatic (up to 6 words); the data only orders the words.

export type WordLevel = '课标' | '拓展';
export type LineMeta = {keywords?: string[]; pauseBefore?: number; holdAfter?: number};

export type WhiteboardPart = {text: string; role: 'prefix' | 'root' | 'suffix'; gloss?: string};

export type WhiteboardWord = {
  id: string;
  word: string;
  level: WordLevel;
  parts: WhiteboardPart[];
  literal: string; // e.g. 去看
  meaning: string; // exam meaning, written in red
  example: {en: string; zh: string}; // exam collocation, not narrated
  // The twist word: a wrong first guess is written, then erased.
  twist?: {wrong: string};
};

export type WhiteboardScene = {
  id: string;
  kind: 'title' | 'root' | 'branch' | 'twist' | 'overview' | 'homework';
  lines: string[];
  wordId?: string; // branch / twist
  // Spoken words that time a write inside the scene (fallback: a fixed fraction of the line).
  cueAt?: Partial<Record<'root' | 'word' | 'parts' | 'literal' | 'meaning' | 'wrong' | 'erase', string>>;
};

export type WhiteboardQuestion = {stem: string; stemZh: string; options: string[]; answerIndex: number; sourceNote: string};

export type Whiteboard = {
  boardNo: string;
  title: string; // written top-left, e.g. 看
  root: {forms: string[]; meaning: string; en: string}; // forms are highlighted inside every word
  words: WhiteboardWord[];
  homework: WhiteboardQuestion;
  scenes: WhiteboardScene[];
  lineMeta: Record<string, LineMeta>;
  score: {bpm: number; key: 'C' | 'D' | 'E' | 'F' | 'G' | 'A' | 'Bb'};
};

export const whiteboard: Whiteboard = {
  boardNo: '062',
  title: '一个字：看',
  root: {forms: ['vis', 'vid'], meaning: '看', en: 'see'},
  words: [
    {
      id: 'visit',
      word: 'visit',
      level: '课标',
      parts: [
        {text: 'vis', role: 'root', gloss: '看'},
        {text: 'it', role: 'suffix', gloss: '去'},
      ],
      literal: '去看',
      meaning: '参观；拜访',
      example: {en: 'visit the museum', zh: '参观博物馆'},
    },
    {
      id: 'vision',
      word: 'vision',
      level: '课标',
      parts: [
        {text: 'vis', role: 'root', gloss: '看'},
        {text: 'ion', role: 'suffix', gloss: '名词'},
      ],
      literal: '看的能力',
      meaning: '视力；远见',
      example: {en: 'a person of vision', zh: '有远见的人'},
    },
    {
      id: 'visible',
      word: 'visible',
      level: '课标',
      parts: [
        {text: 'vis', role: 'root', gloss: '看'},
        {text: 'ible', role: 'suffix', gloss: '能被'},
      ],
      literal: '能被看见的',
      meaning: '可见的',
      example: {en: 'visible to the naked eye', zh: '肉眼可见'},
    },
    {
      id: 'evidence',
      word: 'evidence',
      level: '课标',
      parts: [
        {text: 'e', role: 'prefix', gloss: '向外'},
        {text: 'vid', role: 'root', gloss: '看'},
        {text: 'ence', role: 'suffix', gloss: '名词'},
      ],
      literal: '让人看得见的东西',
      meaning: '证据',
      example: {en: 'find evidence', zh: '找到证据'},
    },
    {
      id: 'provide',
      word: 'provide',
      level: '课标',
      parts: [
        {text: 'pro', role: 'prefix', gloss: '向前'},
        {text: 'vid', role: 'root', gloss: '看'},
        {text: 'e', role: 'suffix'},
      ],
      literal: '提前看到 → 预先准备',
      meaning: '提供',
      example: {en: 'provide food and water', zh: '提供食物和水'},
      twist: {wrong: '和“看”无关？'},
    },
  ],
  homework: {
    stem: 'Thanks to the new ____, the police finally found the thief.',
    stemZh: '多亏了新的____，警察终于找到了小偷。',
    options: ['vision', 'evidence', 'visit', 'provide'],
    answerIndex: 1,
    sourceNote: '高考风格原创练习题',
  },
  scenes: [
    {id: 'title', kind: 'title', lines: ['title']},
    {id: 'root', kind: 'root', lines: ['root'], cueAt: {root: 'V I D'}},
    {id: 'b-visit', kind: 'branch', wordId: 'visit', lines: ['w-visit'], cueAt: {literal: '去看', meaning: '参观'}},
    {id: 'b-vision', kind: 'branch', wordId: 'vision', lines: ['w-vision'], cueAt: {literal: '看的能力', meaning: '视力'}},
    {id: 'b-visible', kind: 'branch', wordId: 'visible', lines: ['w-visible'], cueAt: {literal: '能被', meaning: '可见'}},
    {id: 'b-evidence', kind: 'branch', wordId: 'evidence', lines: ['w-evidence'], cueAt: {parts: 'e 向外', literal: '让人', meaning: '证据'}},
    {id: 'twist', kind: 'twist', wordId: 'provide', lines: ['twist-q', 'twist-a'], cueAt: {word: 'provide', meaning: '提供', wrong: '有什么关系', erase: 'pro', parts: 'pro', literal: '提前'}},
    {id: 'overview', kind: 'overview', lines: ['overview']},
    {id: 'homework', kind: 'homework', lines: ['homework']},
  ],
  lineMeta: {
    title: {keywords: ['看']},
    root: {keywords: ['vis', 'vid', '看']},
    'w-visit': {keywords: ['visit', '参观']},
    'w-vision': {keywords: ['vision', '视力', '远见']},
    'w-visible': {keywords: ['visible', '可见的']},
    'w-evidence': {keywords: ['evidence', '证据']},
    'twist-q': {keywords: ['provide'], holdAfter: 0.3},
    'twist-a': {keywords: ['提供'], pauseBefore: 0.6},
    overview: {keywords: ['看']},
    homework: {keywords: ['评论区'], holdAfter: 1.2},
  },
  score: {bpm: 92, key: 'F'},
};
