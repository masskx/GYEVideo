import React from 'react';
import {AbsoluteFill} from 'remotion';
import {BRAND} from '../brand/brand';
import {BrandPig} from '../brand/BrandPig';
import {captionNews} from '../data/captionNews';
import {episodeConfig} from '../data/episodeConfig';
import {useFonts} from '../core/fonts';
import {CAPTION_NEWS_FONTS, FONT, NEWS} from './theme';

export const ReadingCaptionNewsCover: React.FC = () => {
  useFonts(CAPTION_NEWS_FONTS);
  const cover = episodeConfig.cover ?? {};
  const headline = cover.headline ?? captionNews.headline.zh;
  const words = cover.highlightWords ?? captionNews.vocab.map((word) => word.word);
  return (
    <AbsoluteFill style={{background: NEWS.grounds[0]}}>
      <div style={{position: 'absolute', left: 70, top: 120, display: 'flex'}}>
        <div style={{background: NEWS.white, color: NEWS.ink, fontFamily: FONT.zhBold, fontSize: 38, padding: '6px 18px'}}>{cover.badgeText ?? '双语新闻阅读'}</div>
        <div style={{background: NEWS.yellow, color: NEWS.ink, fontFamily: FONT.mono, fontSize: 34, padding: '8px 18px'}}>No.{captionNews.newsNo}</div>
      </div>
      <div style={{position: 'absolute', left: 70, right: 70, top: 300, fontFamily: FONT.zhBold, fontSize: Math.min(120, Math.floor(940 / Array.from(headline).length)), color: NEWS.white, lineHeight: 1.15}}>
        {headline}
      </div>
      <div style={{position: 'absolute', left: 70, right: 70, top: 560}}>
        <span style={{background: NEWS.yellow, color: NEWS.ink, fontFamily: FONT.caption, fontSize: 110, lineHeight: 1.15, padding: '0 14px', boxDecorationBreak: 'clone'}}>{cover.subHeadline ?? captionNews.headline.en}</span>
      </div>
      <div style={{position: 'absolute', left: 70, right: 70, top: 1080, display: 'flex', flexWrap: 'wrap', gap: 14}}>
        {words.map((word) => (
          <div key={word} style={{fontFamily: FONT.caption, fontSize: 54, color: NEWS.white, borderLeft: `8px solid ${NEWS.yellow}`, padding: '0 16px'}}>
            {word}
          </div>
        ))}
      </div>
      <div style={{position: 'absolute', left: 70, top: 1460, fontFamily: FONT.zhBold, fontSize: 56, color: NEWS.yellow}}>{cover.retentionPrompt}</div>
      <div style={{position: 'absolute', left: 70, top: 1700, fontFamily: FONT.zh, fontSize: 40, color: NEWS.zh}}>{BRAND.creatorName} · 高考风格双语阅读</div>
      <BrandPig id="pig-cover" t={0.4} x={760} y={1330} size={250} face="happy" pose="point" flip />
    </AbsoluteFill>
  );
};
