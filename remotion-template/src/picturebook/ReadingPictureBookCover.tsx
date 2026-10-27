import React from 'react';
import {AbsoluteFill, Img, staticFile} from 'remotion';
import {BRAND} from '../brand/brand';
import {BrandPig} from '../brand/BrandPig';
import {episodeConfig} from '../data/episodeConfig';
import {pictureBook} from '../data/pictureBook';
import {useFonts} from '../core/fonts';
import {GROUND, Picture} from './crayon';
import {CRAYON, FONT, PICTURE_BOOK_FONTS} from './theme';

export const ReadingPictureBookCover: React.FC = () => {
  useFonts(PICTURE_BOOK_FONTS);
  const cover = episodeConfig.cover ?? {};
  const ill = pictureBook.scenes.find((scene) => scene.kind === 'cover')?.illustration ?? pictureBook.scenes.find((scene) => scene.illustration)?.illustration;
  const words = cover.highlightWords ?? pictureBook.targets.map((target) => target.lemma);
  return (
    <AbsoluteFill style={{background: CRAYON.paper}}>
      <div style={{position: 'absolute', left: 60, top: 110, fontFamily: FONT.zh, fontSize: 38, color: CRAYON.line, background: CRAYON.white, border: `5px solid ${CRAYON.line}`, borderRadius: 16, padding: '4px 20px'}}>
        {cover.badgeText ?? '英文绘本精读'} No.{pictureBook.bookNo}
      </div>
      {ill ? (
        <div style={{position: 'absolute', left: 60, top: 230, width: 960, height: 768, borderRadius: 20, overflow: 'hidden', border: `8px solid ${CRAYON.line}`}}>
          <Picture id="cover" t={0} illustration={ill} />
          <BrandPig id="pig-cover" t={0.4} x={ill.pig.x * 960 - 140} y={(GROUND[ill.setting] / 800) * 768 - 356 + 14} size={280} face="happy" pose={ill.pig.pose} />
        </div>
      ) : null}
      <div style={{position: 'absolute', left: 60, right: 60, top: 1040, textAlign: 'center'}}>
        <div style={{fontFamily: FONT.title, fontSize: 104, color: CRAYON.line, lineHeight: 1.02}}>{pictureBook.title.en}</div>
        <div style={{fontFamily: FONT.zhHand, fontSize: 64, color: CRAYON.coral, marginTop: 14}}>{cover.headline ?? pictureBook.title.zh}</div>
      </div>
      <div style={{position: 'absolute', left: 60, right: 60, top: 1400, display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'center'}}>
        {words.map((word) => (
          <div key={word} style={{fontFamily: FONT.story, fontSize: 44, color: CRAYON.line, background: CRAYON.white, border: `4px solid ${CRAYON.line}`, borderRadius: 14, padding: '0 16px'}}>
            <span style={{background: `linear-gradient(transparent 55%, ${CRAYON.lemon} 55%, ${CRAYON.lemon} 92%, transparent 92%)`}}>{word}</span>
          </div>
        ))}
      </div>
      <div style={{position: 'absolute', left: 0, right: 0, top: 1620, textAlign: 'center', fontFamily: FONT.zhHand, fontSize: 52, color: CRAYON.teal}}>{cover.retentionPrompt ?? cover.subHeadline}</div>
      <div style={{position: 'absolute', left: 0, right: 0, top: 1720, textAlign: 'center', fontFamily: FONT.zh, fontSize: 40, color: CRAYON.line}}>
        {BRAND.creatorName} · {pictureBook.level}
      </div>
      <AbsoluteFill style={{mixBlendMode: 'multiply'}}>
        <Img src={staticFile('dossier/paper.jpg')} style={{width: '100%', height: '100%'}} />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
