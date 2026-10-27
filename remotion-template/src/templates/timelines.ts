import type {SceneBase, Timeline} from '../core/timeline';
import type {ReleaseCopy} from '../core/copy';
import {dossierCopy} from '../dossier/copy';
import {DOSSIER} from '../dossier/schedule';
import {dossier} from '../data/dossier';
import {gameShow} from '../data/gameShow';
import {gameShowCopy} from '../gameshow/copy';
import {GAME_SHOW} from '../gameshow/schedule';
import {whiteboard} from '../data/whiteboard';
import {whiteboardCopy} from '../whiteboard/copy';
import {WHITEBOARD} from '../whiteboard/schedule';
import {pictureBook} from '../data/pictureBook';
import {pictureBookCopy} from '../picturebook/copy';
import {PICTURE_BOOK} from '../picturebook/schedule';
import {captionNews} from '../data/captionNews';
import {captionNewsCopy} from '../captionnews/copy';
import {CAPTION_NEWS} from '../captionnews/schedule';
import type {TemplateId} from './registry';

// Per-template runtime parts that scripts need (no React): the timeline, the score plan and the
// release copy. Add a template here when it is built.

export type ScorePlan = {
  bpm: number;
  key: 'C' | 'D' | 'E' | 'F' | 'G' | 'A' | 'Bb';
  // scene kind -> score section of the template's palette (see scripts/audio/score.ts)
  sections: Record<string, string>;
};

export type TemplateRuntime = {
  timeline: Timeline<SceneBase>;
  score: ScorePlan;
  copy: () => ReleaseCopy;
};

export const RUNTIMES: Partial<Record<TemplateId, TemplateRuntime>> = {
  'vocab-dossier': {
    timeline: DOSSIER as unknown as Timeline<SceneBase>,
    score: {
      bpm: dossier.score.bpm,
      key: dossier.score.key,
      sections: {
        'cloze-case': 'sneak',
        fingerprint: 'secret',
        'root-reveal': 'groove',
        exhibit: 'groove',
        'evidence-board': 'groove',
        solve: 'strip',
        homework: 'light',
      },
    },
    copy: dossierCopy,
  },
  'vocab-game-show': {
    timeline: GAME_SHOW as unknown as Timeline<SceneBase>,
    score: {
      bpm: gameShow.score.bpm,
      key: gameShow.score.key,
      sections: {title: 'jingle', 'root-card': 'round', round: 'round', lightning: 'lightning', report: 'report', bonus: 'bonus'},
    },
    copy: gameShowCopy,
  },
  'vocab-whiteboard': {
    timeline: WHITEBOARD as unknown as Timeline<SceneBase>,
    score: {
      bpm: whiteboard.score.bpm,
      key: whiteboard.score.key,
      sections: {title: 'quiet', root: 'think', branch: 'build', twist: 'think', overview: 'reveal', homework: 'think'},
    },
    copy: whiteboardCopy,
  },
  'reading-picture-book': {
    timeline: PICTURE_BOOK as unknown as Timeline<SceneBase>,
    score: {
      bpm: pictureBook.score.bpm,
      key: pictureBook.score.key,
      sections: {cover: 'story', page: 'story', words: 'turn', question: 'quiz', end: 'end'},
    },
    copy: pictureBookCopy,
  },
  'reading-caption-news': {
    timeline: CAPTION_NEWS as unknown as Timeline<SceneBase>,
    score: {
      bpm: captionNews.score.bpm,
      key: captionNews.score.key,
      sections: {headline: 'pulse', chunk: 'pulse', question: 'question', recap: 'end'},
    },
    copy: captionNewsCopy,
  },
};
