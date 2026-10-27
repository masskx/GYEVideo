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
  style?: string; // a style id from scripts/music/styles.ts; default: the template's style for the pace
  kit?: string; // a sample kit in shared-assets/music-kits/
};

export type TemplateRuntime = {
  timeline: Timeline<SceneBase>;
  score: ScorePlan;
  copy: () => ReleaseCopy;
};

export const RUNTIMES: Partial<Record<TemplateId, TemplateRuntime>> = {
  'vocab-dossier': {
    timeline: DOSSIER as unknown as Timeline<SceneBase>,
    score: dossier.score as ScorePlan,
    copy: dossierCopy,
  },
  'vocab-game-show': {
    timeline: GAME_SHOW as unknown as Timeline<SceneBase>,
    score: gameShow.score as ScorePlan,
    copy: gameShowCopy,
  },
  'vocab-whiteboard': {
    timeline: WHITEBOARD as unknown as Timeline<SceneBase>,
    score: whiteboard.score as ScorePlan,
    copy: whiteboardCopy,
  },
  'reading-picture-book': {
    timeline: PICTURE_BOOK as unknown as Timeline<SceneBase>,
    score: pictureBook.score as ScorePlan,
    copy: pictureBookCopy,
  },
  'reading-caption-news': {
    timeline: CAPTION_NEWS as unknown as Timeline<SceneBase>,
    score: captionNews.score as ScorePlan,
    copy: captionNewsCopy,
  },
};
