// vocab-dossier episode data (skill: remotion-template/skills/vocab-dossier).
// Types live here so the file is self-contained. Every visible string must use characters covered by
// the GB2312 font subset (public/fonts/charset-gb2312.txt); `npm run check` verifies it.

export type WordLevel = '课标' | '拓展';

// Same shape as LineMeta in src/core/timeline.ts.
export type LineMeta = {keywords?: string[]; pauseBefore?: number; holdAfter?: number};

export type DossierWordPart = {
  text: string;
  role: 'prefix' | 'root' | 'suffix';
  gloss?: string;
};

export type DossierWord = {
  id: string;
  word: string;
  phonetic: string;
  partOfSpeech: string;
  parts: DossierWordPart[];
  literal: string;
  meaning: string;
  collocation: {en: string; zh: string};
  bonus?: {word: string; meaning: string};
  // 课标 = in the Gaokao curriculum word list; 拓展 = extension, max one or two per episode.
  level: WordLevel;
};

export type DossierCloze = {
  label: string;
  stem: string; // use ____ for the blank
  stemZh: string;
  options: string[];
  answerIndex: number;
  // Original practice items must say so; never present them as real past papers.
  sourceNote: string;
};

export type DossierSceneKind =
  | 'cloze-case'
  | 'fingerprint'
  | 'root-reveal'
  | 'exhibit'
  | 'evidence-board'
  | 'solve'
  | 'homework';

export type DossierScene = {
  id: string;
  kind: DossierSceneKind;
  lines: string[]; // voiceScript ids, in order
  wordId?: string;
  chapter: string;
  transitionIn?: 'dot-wipe' | 'hard-cut';
  wipeInk?: 'ink' | 'overprint' | 'highlight' | 'stamp';
  // Spoken words that time a cue inside this scene's lines (fallback: a fixed fraction of the line).
  cueAt?: Partial<Record<'loss' | 'loupe' | 'arrow' | 'verdict' | 'redact' | 'end', string>>;
};

export type DossierStructure = 'case-investigation' | 'line-up' | 'declassified' | 'cold-case';

export type Dossier = {
  caseNo: string;
  structure: DossierStructure;
  title: string;
  root: {text: string; meaning: string; en: string; origin: string};
  hookCase: DossierCloze;
  homework: DossierCloze;
  words: DossierWord[];
  // Hand note written over the blank when solving, e.g. '往回带 = re'.
  solveHint: string;
  verdictStamp: string;
  scenes: DossierScene[];
  lineMeta: Record<string, LineMeta>;
  score: {bpm: number; key: 'D' | 'E' | 'F' | 'G' | 'A'};
};

export const dossier: Dossier = {
  caseNo: 'GK-060',
  structure: 'case-investigation',
  title: '四胞胎选项案',
  root: {text: 'duc', meaning: '带领，引导', en: 'lead', origin: '拉丁语 ducere'},
  hookCase: {
    label: '案发现场 · 完形填空',
    stem: 'The city plans to ____ plastic waste by half within five years.',
    stemZh: '这座城市计划五年内把塑料垃圾____一半。',
    options: ['produce', 'reduce', 'introduce', 'conduct'],
    answerIndex: 1,
    sourceNote: '高考风格原创练习题',
  },
  homework: {
    label: '下一份案卷 · 交给你',
    stem: 'Our class will ____ a survey on sleep habits next week.',
    stemZh: '下周我们班要____一项关于睡眠习惯的调查。',
    options: ['produce', 'reduce', 'introduce', 'conduct'],
    answerIndex: 3,
    sourceNote: '高考风格原创练习题',
  },
  words: [
    {
      id: 'produce',
      word: 'produce',
      phonetic: '/prəˈdjuːs/',
      partOfSpeech: 'v.',
      parts: [
        {text: 'pro', role: 'prefix', gloss: '向前'},
        {text: 'duc', role: 'root', gloss: '带'},
        {text: 'e', role: 'suffix'},
      ],
      literal: '向前带出来',
      meaning: '生产；产生',
      collocation: {en: 'produce food', zh: '生产食物'},
      bonus: {word: 'product', meaning: 'n. 产品'},
      level: '课标',
    },
    {
      id: 'reduce',
      word: 'reduce',
      phonetic: '/rɪˈdjuːs/',
      partOfSpeech: 'v.',
      parts: [
        {text: 're', role: 'prefix', gloss: '往回'},
        {text: 'duc', role: 'root', gloss: '带'},
        {text: 'e', role: 'suffix'},
      ],
      literal: '往回带',
      meaning: '减少；降低',
      collocation: {en: 'reduce pollution', zh: '减少污染'},
      level: '课标',
    },
    {
      id: 'introduce',
      word: 'introduce',
      phonetic: '/ˌɪntrəˈdjuːs/',
      partOfSpeech: 'v.',
      parts: [
        {text: 'intro', role: 'prefix', gloss: '往里'},
        {text: 'duc', role: 'root', gloss: '带'},
        {text: 'e', role: 'suffix'},
      ],
      literal: '把人带进来',
      meaning: '介绍；引进',
      collocation: {en: 'introduce yourself', zh: '自我介绍'},
      level: '课标',
    },
    {
      id: 'conduct',
      word: 'conduct',
      phonetic: '/kənˈdʌkt/',
      partOfSpeech: 'v.',
      parts: [
        {text: 'con', role: 'prefix', gloss: '一起'},
        {text: 'duct', role: 'root', gloss: '带'},
      ],
      literal: '带着大家一起做',
      meaning: '实施；开展',
      collocation: {en: 'conduct a survey', zh: '开展调查'},
      level: '课标',
    },
    {
      id: 'education',
      word: 'education',
      phonetic: '/ˌedʒuˈkeɪʃn/',
      partOfSpeech: 'n.',
      parts: [
        {text: 'e', role: 'prefix', gloss: '向外'},
        {text: 'duc', role: 'root', gloss: '引'},
        {text: 'ation', role: 'suffix'},
      ],
      literal: '把潜能引出来',
      meaning: '教育',
      collocation: {en: 'receive a good education', zh: '接受良好教育'},
      level: '课标',
    },
  ],
  solveHint: '往回带 = re',
  verdictStamp: '结案',
  scenes: [
    {id: 'case', kind: 'cloze-case', lines: ['hook', 'hook-options'], chapter: '案发现场', cueAt: {loss: '选哪个'}},
    {id: 'print', kind: 'fingerprint', lines: ['clue'], chapter: '指纹比对', transitionIn: 'hard-cut', cueAt: {loupe: '指纹'}},
    {id: 'root', kind: 'root-reveal', lines: ['root'], chapter: '嫌疑词根', transitionIn: 'dot-wipe', wipeInk: 'ink'},
    {id: 'ex-produce', kind: 'exhibit', wordId: 'produce', lines: ['ex-produce'], chapter: '证物 01', transitionIn: 'dot-wipe', wipeInk: 'overprint'},
    {id: 'ex-reduce', kind: 'exhibit', wordId: 'reduce', lines: ['ex-reduce'], chapter: '证物 02', transitionIn: 'dot-wipe', wipeInk: 'highlight'},
    {id: 'ex-introduce', kind: 'exhibit', wordId: 'introduce', lines: ['ex-introduce'], chapter: '证物 03', transitionIn: 'dot-wipe', wipeInk: 'overprint'},
    {id: 'ex-conduct', kind: 'exhibit', wordId: 'conduct', lines: ['ex-conduct'], chapter: '证物 04', transitionIn: 'dot-wipe', wipeInk: 'highlight'},
    {id: 'ex-education', kind: 'exhibit', wordId: 'education', lines: ['ex-education'], chapter: '证物 05', transitionIn: 'dot-wipe', wipeInk: 'overprint'},
    {id: 'board', kind: 'evidence-board', lines: ['board'], chapter: '证据墙', transitionIn: 'hard-cut'},
    {id: 'solve', kind: 'solve', lines: ['solve', 'verdict'], chapter: '当庭作答', transitionIn: 'dot-wipe', wipeInk: 'ink', cueAt: {arrow: '往回带', verdict: '结'}},
    {id: 'homework', kind: 'homework', lines: ['homework', 'signoff'], chapter: '下一份案卷', transitionIn: 'dot-wipe', wipeInk: 'stamp', cueAt: {redact: '空里', end: '下一个'}},
  ],
  lineMeta: {
    hook: {keywords: ['四胞胎']},
    'hook-options': {keywords: ['produce', 'reduce', 'introduce', 'conduct']},
    clue: {keywords: ['duc'], pauseBefore: 0.4},
    root: {keywords: ['lead', '带领']},
    'ex-produce': {keywords: ['produce', 'product']},
    'ex-reduce': {keywords: ['reduce']},
    'ex-introduce': {keywords: ['introduce']},
    'ex-conduct': {keywords: ['conduct']},
    'ex-education': {keywords: ['education']},
    board: {keywords: ['duc']},
    solve: {keywords: ['往回带']},
    verdict: {keywords: ['reduce'], pauseBefore: 0.7, holdAfter: 0.5},
    homework: {keywords: ['开展']},
    signoff: {keywords: ['评论区'], holdAfter: 1.0},
  },
  score: {bpm: 100, key: 'D'},
};
