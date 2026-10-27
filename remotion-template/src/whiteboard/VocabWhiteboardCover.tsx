import React from 'react';
import {AbsoluteFill} from 'remotion';
import {BRAND} from '../brand/brand';
import {BrandPig} from '../brand/BrandPig';
import {episodeConfig} from '../data/episodeConfig';
import {whiteboard} from '../data/whiteboard';
import {useFonts} from '../core/fonts';
import {RootHighlighted} from './board';
import {FONT, HIGHLIGHTER, LABEL, MARKER, WHITEBOARD_FONTS} from './theme';

export const VocabWhiteboardCover: React.FC = () => {
  useFonts(WHITEBOARD_FONTS);
  const cover = episodeConfig.cover ?? {};
  const words = cover.highlightWords ?? whiteboard.words.map((word) => word.word);
  const headline = cover.headline ?? whiteboard.title;
  return (
    <AbsoluteFill style={{background: 'linear-gradient(160deg, #FBFAF7, #F2F0EA 60%, #E8E5DC)'}}>
      <div style={{position: 'absolute', left: 60, top: 110, background: LABEL, borderRadius: 18, padding: '8px 24px', boxShadow: '0 6px 16px rgba(0,0,0,0.12)'}}>
        <span style={{fontFamily: FONT.zh, fontSize: 40, color: MARKER.black}}>{cover.badgeText ?? '白板词根图'} </span>
        <span style={{fontFamily: FONT.hand, fontSize: 44, color: MARKER.blue}}>No.{whiteboard.boardNo}</span>
      </div>
      <div style={{position: 'absolute', left: 70, right: 70, top: 260, fontFamily: FONT.zh, fontSize: Math.min(104, Math.floor(940 / Array.from(headline).length)), color: MARKER.black, transform: 'rotate(-2deg)'}}>
        {headline}
      </div>
      <div style={{position: 'absolute', left: 0, right: 0, top: 470, display: 'flex', justifyContent: 'center'}}>
        <div style={{position: 'relative', padding: '40px 90px', border: `12px solid ${MARKER.black}`, borderRadius: '50%'}}>
          <div style={{fontFamily: FONT.hand, fontSize: 210, color: MARKER.black, lineHeight: 1}}>
            {whiteboard.root.forms.map((form, i) => (
              <React.Fragment key={form}>
                {i > 0 ? ' / ' : ''}
                <span style={{background: `linear-gradient(transparent 38%, ${HIGHLIGHTER} 38%, ${HIGHLIGHTER} 88%, transparent 88%)`}}>{form}</span>
              </React.Fragment>
            ))}
          </div>
          <div style={{fontFamily: FONT.hand, fontSize: 110, color: MARKER.red, textAlign: 'center'}}>
            = {whiteboard.root.en} <span style={{fontFamily: FONT.zh}}>{whiteboard.root.meaning}</span>
          </div>
        </div>
      </div>
      <div style={{position: 'absolute', left: 70, right: 70, top: 1000, display: 'flex', flexWrap: 'wrap', gap: '10px 40px', justifyContent: 'center'}}>
        {words.map((word) => (
          <div key={word} style={{fontFamily: FONT.hand, fontSize: 96, color: MARKER.black}}>
            <RootHighlighted word={word} />
          </div>
        ))}
      </div>
      <div style={{position: 'absolute', left: 70, top: 1400, fontFamily: FONT.zh, fontSize: 56, color: MARKER.blue}}>{cover.subHeadline}</div>
      <div style={{position: 'absolute', left: 70, top: 1520, fontFamily: FONT.zh, fontSize: 60, color: MARKER.red}}>{cover.retentionPrompt ?? '评论区写答案'} →</div>
      <div style={{position: 'absolute', left: 70, top: 1700, fontFamily: FONT.zh, fontSize: 44, color: MARKER.black}}>{BRAND.creatorName} · 白板词根图</div>
      <BrandPig id="pig-cover" t={0.4} x={770} y={1440} size={240} face="happy" pose="inspect" flip />
    </AbsoluteFill>
  );
};
