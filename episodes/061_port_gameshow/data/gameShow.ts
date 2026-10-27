// vocab-game-show episode data (skill: remotion-template/skills/vocab-game-show).
// Self-contained: types live here. Visible text must use GB2312 characters (`npm run check`).

// The exam's word list (skills/_shared/EXAMS.md): 课标 高考 · 四级 / 六级 CET · 考研 · 雅思 IELTS · 托福 TOEFL · GRE;
// 拓展 = outside the exam's list (at most one per episode).
export type WordLevel = '课标' | '四级' | '六级' | '考研' | '雅思' | '托福' | 'GRE' | '拓展';
export type LineMeta = {keywords?: string[]; pauseBefore?: number; holdAfter?: number};

export type GameShowWord = {
  id: string;
  word: string;
  level: WordLevel;
  prefix: {text: string; gloss: string};
  root: string; // the root as it is spelled inside this word
  suffix?: string;
  literal: string; // e.g. 往里运
  meaning: string; // exam meaning, e.g. 进口
  collocation: {en: string; zh: string};
};

export type SetPattern = 'stripes' | 'dots' | 'sunburst';
export type SetHue = 'yellow' | 'orange' | 'pink' | 'green' | 'sky' | 'blue' | 'purple' | 'red' | 'navy';

export type GameShowScene = {
  id: string;
  kind: 'title' | 'root-card' | 'round' | 'lightning' | 'report' | 'bonus';
  lines: string[];
  wordId?: string; // round
  set: {hue: SetHue; pattern: SetPattern}; // neighbouring scenes never share a hue
  judgement?: string; // round: the word that pops when the round is won
};

export type GameShowQuestion = {
  stem: string; // with ____
  stemZh: string;
  options: string[];
  answerIndex: number;
  sourceNote: string; // the exam's original-question label (e.g. 高考风格原创练习题, 雅思风格原创练习题) unless it is a real paper with year and source
};

export type GameShow = {
  episodeNo: string;
  showTitle: string;
  root: {text: string; meaning: string; en: string};
  words: GameShowWord[];
  grade: string; // the report card's grade stamp
  bonus: GameShowQuestion;
  scenes: GameShowScene[];
  lineMeta: Record<string, LineMeta>;
  // Tempo (inside the style's range for the pace: npm run music -- --list), key, and optionally a style
  // and a local sample kit (skills/_shared/PACE_AND_MUSIC.md).
  score: {bpm: number; key: 'C' | 'D' | 'E' | 'F' | 'G' | 'A' | 'Bb'; style?: string; kit?: string};
};

export const gameShow: GameShow = {
  episodeNo: '061',
  showTitle: '词根闯关',
  root: {text: 'port', meaning: '拿，运', en: 'carry'},
  words: [
    {
      id: 'import',
      word: 'import',
      level: '课标',
      prefix: {text: 'im', gloss: '向里'},
      root: 'port',
      literal: '往里运',
      meaning: '进口',
      collocation: {en: 'import goods', zh: '进口商品'},
    },
    {
      id: 'export',
      word: 'export',
      level: '课标',
      prefix: {text: 'ex', gloss: '向外'},
      root: 'port',
      literal: '往外运',
      meaning: '出口',
      collocation: {en: 'export products', zh: '出口产品'},
    },
    {
      id: 'transport',
      word: 'transport',
      level: '课标',
      prefix: {text: 'trans', gloss: '跨过'},
      root: 'port',
      literal: '运过去',
      meaning: '运输',
      collocation: {en: 'public transport', zh: '公共交通'},
    },
    {
      id: 'support',
      word: 'support',
      level: '课标',
      prefix: {text: 'sup', gloss: '在下面'},
      root: 'port',
      literal: '从下面托着',
      meaning: '支持',
      collocation: {en: 'support each other', zh: '互相支持'},
    },
    {
      id: 'report',
      word: 'report',
      level: '课标',
      prefix: {text: 're', gloss: '回来'},
      root: 'port',
      literal: '把消息带回来',
      meaning: '报告；报道',
      collocation: {en: 'report the news', zh: '报道新闻'},
    },
  ],
  grade: 'S',
  bonus: {
    stem: 'The country has no oil fields, so it has to ____ all its oil.',
    stemZh: '这个国家没有油田，所以石油只能全部____。',
    options: ['import', 'export', 'support', 'report'],
    answerIndex: 0,
    sourceNote: '高考风格原创练习题',
  },
  scenes: [
    {id: 'title', kind: 'title', lines: ['title'], set: {hue: 'navy', pattern: 'sunburst'}},
    {id: 'root', kind: 'root-card', lines: ['root'], set: {hue: 'purple', pattern: 'dots'}},
    {id: 'r1', kind: 'round', wordId: 'import', lines: ['r-import'], set: {hue: 'orange', pattern: 'stripes'}, judgement: 'PERFECT!'},
    {id: 'r2', kind: 'round', wordId: 'export', lines: ['r-export'], set: {hue: 'sky', pattern: 'dots'}, judgement: 'GREAT!'},
    {id: 'r3', kind: 'round', wordId: 'transport', lines: ['r-transport'], set: {hue: 'green', pattern: 'stripes'}, judgement: 'NICE!'},
    {id: 'r4', kind: 'round', wordId: 'support', lines: ['r-support'], set: {hue: 'pink', pattern: 'dots'}, judgement: 'BINGO!'},
    {id: 'r5', kind: 'round', wordId: 'report', lines: ['r-report'], set: {hue: 'blue', pattern: 'stripes'}, judgement: 'PERFECT!'},
    {id: 'lightning', kind: 'lightning', lines: ['lightning'], set: {hue: 'red', pattern: 'sunburst'}},
    {id: 'report-card', kind: 'report', lines: ['grade'], set: {hue: 'yellow', pattern: 'dots'}},
    {id: 'bonus', kind: 'bonus', lines: ['bonus', 'signoff'], set: {hue: 'purple', pattern: 'stripes'}},
  ],
  lineMeta: {
    title: {keywords: ['五关']},
    root: {keywords: ['port', 'carry']},
    'r-import': {keywords: ['import', '进口'], holdAfter: 0.5},
    'r-export': {keywords: ['export', '出口'], holdAfter: 0.5},
    'r-transport': {keywords: ['transport', '运输'], holdAfter: 0.5},
    'r-support': {keywords: ['support', '支持'], holdAfter: 0.5},
    'r-report': {keywords: ['report', '报告'], holdAfter: 0.5},
    lightning: {keywords: ['极速挑战'], pauseBefore: 0.4},
    grade: {keywords: ['S']},
    bonus: {keywords: ['加分题']},
    signoff: {keywords: ['评论区'], holdAfter: 1.0},
  },
  score: {bpm: 128, key: 'C'},
};
