// reading-caption-news episode data (skill: remotion-template/skills/reading-caption-news).
// Self-contained: types live here. Visible Chinese must use GB2312 characters (`npm run check`).
// Every number on screen needs a source in `sources` and a `source` tag on its chunk (FACTS.md).

// 课标 = Gaokao curriculum list; 四级 / 六级 = CET-4 / CET-6 syllabus; 拓展 = outside the exam's list (at most one).
export type WordLevel = '课标' | '四级' | '六级' | '拓展';
export type LineMeta = {keywords?: string[]; pauseBefore?: number; holdAfter?: number};

export type NewsGraphic =
  | {kind: 'clock'; label: string} // a night clock with a highlighted range, e.g. 8–10 h
  | {kind: 'people'; of: number; highlight: number; label: string} // e.g. 1 in 4
  | {kind: 'brain'; label: string}
  | {kind: 'trend'; label: string; direction: 'up' | 'down'}
  | {kind: 'phone'; label: string};

export type NewsChunk = {
  zh: string;
  keyword?: string; // a phrase of the English line, set on the yellow block
  graphic: NewsGraphic;
  sourceId?: string; // required when the line states a number
};

export type NewsScene = {
  id: string;
  kind: 'headline' | 'chunk' | 'question' | 'recap';
  lines: string[];
};

export type NewsSource = {id: string; label: string; url: string; quote: string};

export type NewsWord = {word: string; pos: string; meaning: string; level: WordLevel};

export type CaptionNewsQuestion = {
  stem: string;
  stemZh: string;
  options: string[];
  answerIndex: number;
  evidenceLineId: string; // the line that proves the answer (原文定位)
  sourceNote: string;
};

export type CaptionNews = {
  newsNo: string;
  kicker: {en: string; zh: string};
  headline: {en: string; zh: string};
  chunks: Record<string, NewsChunk>; // voice line id -> chunk
  vocab: NewsWord[];
  question: CaptionNewsQuestion;
  sources: NewsSource[];
  scenes: NewsScene[];
  lineMeta: Record<string, LineMeta>;
  score: {bpm: number; key: 'C' | 'D' | 'E' | 'F' | 'G' | 'A' | 'Bb'};
};

export const captionNews: CaptionNews = {
  newsNo: '002',
  kicker: {en: 'SCIENCE', zh: '科学 · 阅读'},
  headline: {en: 'Why Teens Need More Sleep', zh: '青少年为什么需要更多睡眠'},
  chunks: {
    c1: {
      zh: '专家建议，13 到 18 岁的青少年每晚睡 8 到 10 个小时。',
      keyword: '8 to 10 hours',
      graphic: {kind: 'clock', label: '8–10 h'},
      sourceId: 'aasm',
    },
    c2: {
      zh: '但在美国，只有大约四分之一的高中生在上学日晚上睡够 8 小时。',
      keyword: '1 in 4',
      graphic: {kind: 'people', of: 4, highlight: 1, label: '24%'},
      sourceId: 'yrbs',
    },
    c3: {
      zh: '睡觉的时候，大脑会把白天学到的东西储存起来。',
      keyword: 'stores',
      graphic: {kind: 'brain', label: 'memory'},
    },
    c4: {
      zh: '所以熬夜学习，实际上可能让记忆变差。',
      keyword: 'worse',
      graphic: {kind: 'trend', label: 'memory', direction: 'down'},
    },
    c5: {
      zh: '睡前一小时把手机放远一点，是简单的第一步。',
      keyword: 'first step',
      graphic: {kind: 'phone', label: '1 h'},
    },
  },
  vocab: [
    {word: 'expert', pos: 'n.', meaning: '专家', level: '课标'},
    {word: 'average', pos: 'adj.', meaning: '平均的；一般的', level: '课标'},
    {word: 'store', pos: 'v.', meaning: '储存', level: '课标'},
    {word: 'memory', pos: 'n.', meaning: '记忆', level: '课标'},
    {word: 'actually', pos: 'adv.', meaning: '实际上', level: '课标'},
  ],
  question: {
    stem: 'What is the passage mainly about?',
    stemZh: '这篇短文主要讲了什么？',
    options: ['Teens should study late at night.', 'Phones help teens fall asleep.', 'Enough sleep matters for teens.', 'Most teens sleep ten hours a night.'],
    answerIndex: 2,
    evidenceLineId: 'c3',
    sourceNote: '高考风格原创阅读题，数据见来源',
  },
  sources: [
    {
      id: 'aasm',
      label: 'AASM via CDC YRBS',
      url: 'https://www.cdc.gov/yrbs/youth-health-in-focus/sleep.html',
      quote: 'The American Academy of Sleep Medicine recommends that adolescents aged 13–18 get 8 to 10 hours of sleep a night.',
    },
    {
      id: 'yrbs',
      label: 'CDC YRBS 2025',
      url: 'https://www.cdc.gov/yrbs/youth-health-in-focus/sleep.html',
      quote: 'In 2025, about 1 in 4 high school students got at least 8 hours of sleep on an average school night.',
    },
  ],
  scenes: [
    {id: 'headline', kind: 'headline', lines: ['headline']},
    {id: 'n1', kind: 'chunk', lines: ['c1']},
    {id: 'n2', kind: 'chunk', lines: ['c2']},
    {id: 'n3', kind: 'chunk', lines: ['c3']},
    {id: 'n4', kind: 'chunk', lines: ['c4']},
    {id: 'n5', kind: 'chunk', lines: ['c5']},
    {id: 'question', kind: 'question', lines: ['question', 'answer']},
    {id: 'recap', kind: 'recap', lines: ['recap', 'signoff']},
  ],
  lineMeta: {
    headline: {holdAfter: 0.3},
    c2: {holdAfter: 0.4},
    answer: {pauseBefore: 2.2},
    signoff: {holdAfter: 0.8},
  },
  score: {bpm: 108, key: 'A'},
};
