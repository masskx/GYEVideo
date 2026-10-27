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
};
