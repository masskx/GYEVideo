// The template catalogue. Every script (episode:use, check, audio, render, release copy, new, plan)
// and every agent reads this file to know which templates exist and where their parts live.
// Pure metadata: no React, no episode data.

export type TemplateId = 'vocab-dossier' | 'vocab-game-show' | 'vocab-whiteboard' | 'reading-picture-book' | 'reading-caption-news';
export type LegacyType = 'root-word' | 'sentence-pattern';
export type EpisodeType = TemplateId | LegacyType;

export type ScorePalette = 'dossier' | 'game-show' | 'whiteboard' | 'picture-book' | 'caption-news';

export type TemplateInfo = {
  id: TemplateId;
  line: 'vocab' | 'reading';
  title: string; // series name shown to viewers
  look: string; // one line for agents choosing a template
  video: string; // Remotion composition id
  cover: string; // Remotion composition id
  dataFile: string; // the template's episode data file in data/
  skill: string; // relative to remotion-template/
  episodesDir: string; // relative to the repository root
  example: string; // reference episode, relative to the repository root
  palette: ScorePalette;
  targetSeconds: [number, number];
};

export const TEMPLATES: Record<TemplateId, TemplateInfo> = {
  'vocab-dossier': {
    id: 'vocab-dossier',
    line: 'vocab',
    title: '词汇案卷', // shown as 高考词汇案卷 / 四级词汇案卷 / 六级词汇案卷 by exam
    look: 'Halftone print case file: a cloze question is the case, the root the fingerprint, each word an exhibit, a stamped verdict.',
    video: 'VocabDossierVideo',
    cover: 'VocabDossierCover',
    dataFile: 'dossier.ts',
    skill: 'skills/vocab-dossier',
    episodesDir: 'episodes',
    example: 'episodes/060_duc_dossier',
    palette: 'dossier',
    targetSeconds: [55, 68],
  },
  'vocab-game-show': {
    id: 'vocab-game-show',
    line: 'vocab',
    title: '词根闯关',
    look: 'Flat candy-coloured game show: one round per word, prefix + root call-and-response on the beat, judgement words, a lightning round.',
    video: 'VocabGameShowVideo',
    cover: 'VocabGameShowCover',
    dataFile: 'gameShow.ts',
    skill: 'skills/vocab-game-show',
    episodesDir: 'episodes',
    example: 'episodes/061_port_gameshow',
    palette: 'game-show',
    targetSeconds: [50, 66],
  },
  'vocab-whiteboard': {
    id: 'vocab-whiteboard',
    line: 'vocab',
    title: '白板词根图',
    look: 'One whiteboard written live: the root in the middle, words branching out in marker, the camera travels instead of cutting.',
    video: 'VocabWhiteboardVideo',
    cover: 'VocabWhiteboardCover',
    dataFile: 'whiteboard.ts',
    skill: 'skills/vocab-whiteboard',
    episodesDir: 'episodes',
    example: 'episodes/062_vis_whiteboard',
    palette: 'whiteboard',
    targetSeconds: [50, 66],
  },
  'reading-picture-book': {
    id: 'reading-picture-book',
    line: 'reading',
    title: '英文绘本精读',
    look: 'A crayon picture book starring the pig: each English sentence read aloud with a Chinese line, target words glossed, a comprehension question.',
    video: 'ReadingPictureBookVideo',
    cover: 'ReadingPictureBookCover',
    dataFile: 'pictureBook.ts',
    skill: 'skills/reading-picture-book',
    episodesDir: 'reading-episodes',
    example: 'reading-episodes/001_screen_promise',
    palette: 'picture-book',
    targetSeconds: [50, 72],
  },
  'reading-caption-news': {
    id: 'reading-caption-news',
    line: 'reading',
    title: '双语新闻阅读',
    look: 'Captions-first social news: a Gaokao-style passage in big English chunks with Chinese under, sourced numbers, a reading question.',
    video: 'ReadingCaptionNewsVideo',
    cover: 'ReadingCaptionNewsCover',
    dataFile: 'captionNews.ts',
    skill: 'skills/reading-caption-news',
    episodesDir: 'reading-episodes',
    example: 'reading-episodes/002_teen_sleep_news',
    palette: 'caption-news',
    targetSeconds: [50, 72],
  },
};

export const isTemplate = (type: string): type is TemplateId => type in TEMPLATES;
