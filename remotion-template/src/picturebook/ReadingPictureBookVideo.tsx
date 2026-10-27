import React from 'react';
import {AbsoluteFill, Img, staticFile, useCurrentFrame} from 'remotion';
import {pictureBook} from '../data/pictureBook';
import {EpisodeAudio, fadeOut} from '../core/audio';
import {useFonts} from '../core/fonts';
import {easeIn, progress} from '../core/motion';
import {FPS} from '../core/timeline';
import {SCENE_COMPONENTS} from './scenes';
import {PICTURE_BOOK} from './schedule';
import {CRAYON, FONT, PICTURE_BOOK_FONTS} from './theme';

// reading-picture-book: 英文绘本精读 (Crayon Picture Book). Skill: skills/reading-picture-book.

const TURN = 0.6;

const Paper: React.FC = () => (
  <>
    <AbsoluteFill style={{background: CRAYON.paper}} />
  </>
);

const Hud: React.FC<{t: number}> = ({t}) => {
  const timing = PICTURE_BOOK.sceneAt(t);
  const pages = pictureBook.scenes.filter((scene) => scene.kind === 'page').length;
  return (
    <div style={{position: 'absolute', left: 56, right: 56, top: 100, display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
      <div style={{fontFamily: FONT.zh, fontSize: 30, color: CRAYON.line, background: CRAYON.white, border: `4px solid ${CRAYON.line}`, borderRadius: 14, padding: '2px 16px'}}>
        英文绘本精读 No.{pictureBook.bookNo}
      </div>
      {timing.scene.pageNo ? (
        <div style={{fontFamily: FONT.title, fontSize: 44, color: CRAYON.line}}>
          p.{timing.scene.pageNo} / {pages}
        </div>
      ) : null}
    </div>
  );
};

// The page being read; on a turn, the previous page lifts from its left edge and flips over it.
const Pages: React.FC<{t: number}> = ({t}) => {
  const timing = PICTURE_BOOK.sceneAt(t);
  const Current = SCENE_COMPONENTS[timing.scene.kind];
  const previous = timing.index > 0 ? PICTURE_BOOK.scenes[timing.index - 1] : null;
  const turning = previous && t < timing.start + TURN;
  const Previous = previous ? SCENE_COMPONENTS[previous.scene.kind] : null;
  const angle = turning ? easeIn(progress(t, timing.start, TURN)) * 180 : 0;
  return (
    <>
      <AbsoluteFill>
        <Paper />
        <Current timing={timing} t={t} />
      </AbsoluteFill>
      {turning && Previous && angle < 90 ? (
        <AbsoluteFill style={{perspective: 2600}}>
          <AbsoluteFill style={{transform: `rotateY(${-angle}deg)`, transformOrigin: '0 50%', boxShadow: `${20 + angle}px 0 ${40 + angle}px rgba(74,44,90,${0.25 * (1 - angle / 90)})`}}>
            <Paper />
            <Previous timing={previous} t={previous.end - 0.05} />
            <AbsoluteFill style={{background: `rgba(74,44,90,${0.35 * (angle / 90)})`}} />
          </AbsoluteFill>
        </AbsoluteFill>
      ) : null}
    </>
  );
};

export const ReadingPictureBookVideo: React.FC = () => {
  useFonts(PICTURE_BOOK_FONTS);
  const frame = useCurrentFrame();
  const t = frame / FPS;
  return (
    <AbsoluteFill style={{background: CRAYON.paper}}>
      <Pages t={t} />
      <Hud t={t} />
      <AbsoluteFill style={{mixBlendMode: 'multiply'}}>
        <Img src={staticFile('dossier/paper.jpg')} style={{width: '100%', height: '100%'}} />
      </AbsoluteFill>
      <AbsoluteFill style={{background: CRAYON.line, opacity: 1 - fadeOut(frame, PICTURE_BOOK.duration)}} />
      <EpisodeAudio lines={PICTURE_BOOK.lines} cues={PICTURE_BOOK.cues} silences={PICTURE_BOOK.silences} duration={PICTURE_BOOK.duration} isVoiceActive={PICTURE_BOOK.isVoiceActive} />
    </AbsoluteFill>
  );
};
