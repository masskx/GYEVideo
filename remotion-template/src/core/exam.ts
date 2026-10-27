import {episodeConfig} from '../data/episodeConfig';

// The exam an episode is made for. Every exam-specific word on screen, in the release copy and in the
// checks comes from here, so one template serves 高考, 四级, 六级, 考研, 雅思, 托福 and GRE without code changes.
// An episode sets it in data/episodeConfig.ts (`exam: 'cet4'`); episodes without it are 高考.
// Content rules per exam: skills/_shared/EXAMS.md.

export type ExamId = 'gaokao' | 'cet4' | 'cet6' | 'kaoyan' | 'ielts' | 'toefl' | 'gre';

export type ExamProfile = {
  id: ExamId;
  name: string; // 高考 / 四级 / 六级
  nameEn: string; // Gaokao / CET-4 / CET-6
  audience: string; // who the voice talks to
  coreLevels: string[]; // word levels inside this exam's syllabus
  mainLevel: string; // the level most words should carry
  extension: string; // the one level allowed at most once per episode
  vocab: string; // 高考词汇 — series and labels
  word: string; // 高考词 — "N 个高考词"
  collocation: string; // 高考搭配 — the collocation tag
  clozeKicker: string; // the dossier's case label (the question type)
  frequent: string; // the cover stamp
  readingSeries: string; // the reading HUD label
  practiceNote: string; // sourceNote for original vocabulary questions
  readingNote: string; // sourceNote for original reading questions
  tags: string[]; // Douyin hashtags shared by every template
};

export const EXAMS: Record<ExamId, ExamProfile> = {
  gaokao: {
    id: 'gaokao',
    name: '高考',
    nameEn: 'Gaokao',
    audience: '高中生',
    coreLevels: ['课标'],
    mainLevel: '课标',
    extension: '拓展',
    vocab: '高考词汇',
    word: '高考词',
    collocation: '高考搭配',
    clozeKicker: '高考完形',
    frequent: '高考高频',
    readingSeries: '高考风格双语阅读',
    practiceNote: '高考风格原创练习题',
    readingNote: '高考风格原创阅读题',
    tags: ['#高考英语', '#高考词汇'],
  },
  cet4: {
    id: 'cet4',
    name: '四级',
    nameEn: 'CET-4',
    audience: '大学生',
    coreLevels: ['四级'],
    mainLevel: '四级',
    extension: '拓展',
    vocab: '四级词汇',
    word: '四级词',
    collocation: '四级搭配',
    clozeKicker: '四级选词填空',
    frequent: '四级高频',
    readingSeries: '四级风格双语阅读',
    practiceNote: '四级风格原创练习题',
    readingNote: '四级风格原创阅读题',
    tags: ['#英语四级', '#四级词汇'],
  },
  cet6: {
    id: 'cet6',
    name: '六级',
    nameEn: 'CET-6',
    audience: '大学生',
    coreLevels: ['四级', '六级'],
    mainLevel: '六级',
    extension: '拓展',
    vocab: '六级词汇',
    word: '六级词',
    collocation: '六级搭配',
    clozeKicker: '六级选词填空',
    frequent: '六级高频',
    readingSeries: '六级风格双语阅读',
    practiceNote: '六级风格原创练习题',
    readingNote: '六级风格原创阅读题',
    tags: ['#英语六级', '#六级词汇'],
  },
  kaoyan: {
    id: 'kaoyan',
    name: '考研',
    nameEn: 'Kaoyan English (英语一 / 英语二)',
    audience: '考研生',
    coreLevels: ['考研'],
    mainLevel: '考研',
    extension: '拓展',
    vocab: '考研词汇',
    word: '考研词',
    collocation: '考研搭配',
    clozeKicker: '考研完形',
    frequent: '考研高频',
    readingSeries: '考研风格双语阅读',
    practiceNote: '考研风格原创练习题',
    readingNote: '考研风格原创阅读题',
    tags: ['#考研英语', '#考研词汇'],
  },
  ielts: {
    id: 'ielts',
    name: '雅思',
    nameEn: 'IELTS',
    audience: '留学备考生',
    coreLevels: ['雅思'],
    mainLevel: '雅思',
    extension: '拓展',
    vocab: '雅思词汇',
    word: '雅思词',
    collocation: '雅思搭配',
    clozeKicker: '雅思句子填空',
    frequent: '雅思高频',
    readingSeries: '雅思风格双语阅读',
    practiceNote: '雅思风格原创练习题',
    readingNote: '雅思风格原创阅读题',
    tags: ['#雅思', '#雅思词汇'],
  },
  toefl: {
    id: 'toefl',
    name: '托福',
    nameEn: 'TOEFL iBT',
    audience: '留学备考生',
    coreLevels: ['托福'],
    mainLevel: '托福',
    extension: '拓展',
    vocab: '托福词汇',
    word: '托福词',
    collocation: '托福搭配',
    clozeKicker: '托福词汇题',
    frequent: '托福高频',
    readingSeries: '托福风格双语阅读',
    practiceNote: '托福风格原创练习题',
    readingNote: '托福风格原创阅读题',
    tags: ['#托福', '#托福词汇'],
  },
  gre: {
    id: 'gre',
    name: 'GRE',
    nameEn: 'GRE General Test',
    audience: '申研留学生',
    coreLevels: ['GRE'],
    mainLevel: 'GRE',
    extension: '拓展',
    vocab: 'GRE 词汇',
    word: 'GRE 词',
    collocation: 'GRE 搭配',
    clozeKicker: 'GRE 填空',
    frequent: 'GRE 高频',
    readingSeries: 'GRE 风格双语阅读',
    practiceNote: 'GRE风格原创练习题',
    readingNote: 'GRE风格原创阅读题',
    tags: ['#GRE', '#GRE词汇'],
  },
};

export const isExam = (id: string): id is ExamId => id in EXAMS;

export const examId = (): ExamId => {
  const id = (episodeConfig as {exam?: string}).exam ?? 'gaokao';
  return isExam(id) ? id : 'gaokao';
};

// The active episode's exam.
export const EXAM: ExamProfile = EXAMS[examId()];

// "全部为课标词汇" / "全部为四级、六级词汇"
export const allCoreLabel = (exam: ExamProfile = EXAM) => `全部为${exam.coreLevels.join('、')}词汇`;

// Hashtags: the exam's, then the template's own, then the account.
export const tagsFor = (extra: string[], creator: string) => [...EXAM.tags, ...extra, `#${creator}`].join(' ');
