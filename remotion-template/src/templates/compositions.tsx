import React from 'react';
import {VocabDossierCover} from '../dossier/VocabDossierCover';
import {VocabDossierVideo} from '../dossier/VocabDossierVideo';
import {DOSSIER} from '../dossier/schedule';
import {VocabGameShowCover} from '../gameshow/VocabGameShowCover';
import {VocabGameShowVideo} from '../gameshow/VocabGameShowVideo';
import {GAME_SHOW} from '../gameshow/schedule';
import {VocabWhiteboardCover} from '../whiteboard/VocabWhiteboardCover';
import {VocabWhiteboardVideo} from '../whiteboard/VocabWhiteboardVideo';
import {WHITEBOARD} from '../whiteboard/schedule';
import type {TemplateId} from './registry';

// Remotion components per template. Add a template here when it is built.
export const COMPOSITIONS: Partial<Record<TemplateId, {Video: React.FC; Cover: React.FC; durationFrames: number}>> = {
  'vocab-dossier': {Video: VocabDossierVideo, Cover: VocabDossierCover, durationFrames: DOSSIER.durationFrames},
  'vocab-game-show': {Video: VocabGameShowVideo, Cover: VocabGameShowCover, durationFrames: GAME_SHOW.durationFrames},
  'vocab-whiteboard': {Video: VocabWhiteboardVideo, Cover: VocabWhiteboardCover, durationFrames: WHITEBOARD.durationFrames},
};
