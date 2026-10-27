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
import {ReadingPictureBookCover} from '../picturebook/ReadingPictureBookCover';
import {ReadingPictureBookVideo} from '../picturebook/ReadingPictureBookVideo';
import {PICTURE_BOOK} from '../picturebook/schedule';
import {ReadingCaptionNewsCover} from '../captionnews/ReadingCaptionNewsCover';
import {ReadingCaptionNewsVideo} from '../captionnews/ReadingCaptionNewsVideo';
import {CAPTION_NEWS} from '../captionnews/schedule';
import type {TemplateId} from './registry';

// Remotion components per template. Add a template here when it is built.
export const COMPOSITIONS: Partial<Record<TemplateId, {Video: React.FC; Cover: React.FC; durationFrames: number}>> = {
  'vocab-dossier': {Video: VocabDossierVideo, Cover: VocabDossierCover, durationFrames: DOSSIER.durationFrames},
  'vocab-game-show': {Video: VocabGameShowVideo, Cover: VocabGameShowCover, durationFrames: GAME_SHOW.durationFrames},
  'vocab-whiteboard': {Video: VocabWhiteboardVideo, Cover: VocabWhiteboardCover, durationFrames: WHITEBOARD.durationFrames},
  'reading-picture-book': {Video: ReadingPictureBookVideo, Cover: ReadingPictureBookCover, durationFrames: PICTURE_BOOK.durationFrames},
  'reading-caption-news': {Video: ReadingCaptionNewsVideo, Cover: ReadingCaptionNewsCover, durationFrames: CAPTION_NEWS.durationFrames},
};
