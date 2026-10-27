import React from 'react';
import {AbsoluteFill} from 'remotion';
import {BRAND} from '../brand/brand';
import {BrandPig} from '../brand/BrandPig';
import {episodeConfig} from '../data/episodeConfig';
import {gameShow} from '../data/gameShow';
import {useFonts} from '../core/fonts';
import {SetBackground, Telop, Tile} from './kit';
import {CREAM, FLOOR_Y, FONT, GAME_SHOW_FONTS, INK, PAPER, ROOT_YELLOW} from './theme';

const SETTLED = 100;

export const VocabGameShowCover: React.FC = () => {
  useFonts(GAME_SHOW_FONTS);
  const cover = episodeConfig.cover ?? {};
  const words = cover.highlightWords ?? gameShow.words.map((word) => word.word);
  return (
    <AbsoluteFill>
      <SetBackground set={{hue: 'navy', pattern: 'sunburst'}} t={0} />
      <div style={{position: 'absolute', left: 60, top: 110}}>
        <Tile fill={ROOT_YELLOW} radius={18} shadow={10} style={{padding: '8px 26px'}}>
          <div style={{fontFamily: FONT.zh, fontSize: 40, color: INK}}>
            {cover.badgeText ?? gameShow.showTitle} · 第{gameShow.episodeNo}期
          </div>
        </Tile>
      </div>
      <div style={{position: 'absolute', left: 0, right: 0, top: 250, display: 'flex', justifyContent: 'center'}}>
        <Telop text={cover.headline ?? gameShow.showTitle} size={Math.min(120, Math.floor(960 / Array.from(cover.headline ?? gameShow.showTitle).length))} t={SETTLED} at={0} family={FONT.zh} />
      </div>
      <div style={{position: 'absolute', left: 0, right: 0, top: 470, display: 'flex', justifyContent: 'center'}}>
        <div style={{transform: 'rotate(-4deg)'}}>
          <Tile fill={ROOT_YELLOW} radius={40} shadow={18} style={{padding: '10px 70px 30px'}}>
            <div style={{fontFamily: FONT.telop, fontSize: 260, color: INK, lineHeight: 1.1}}>{gameShow.root.text}</div>
          </Tile>
        </div>
      </div>
      <div style={{position: 'absolute', left: 0, right: 0, top: 870, display: 'flex', justifyContent: 'center'}}>
        <Telop text={cover.subHeadline ?? `${gameShow.root.text} = ${gameShow.root.meaning}`} size={70} t={SETTLED} at={0} family={FONT.zh} />
      </div>
      <div style={{position: 'absolute', left: 70, right: 70, top: 1010, display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center'}}>
        {words.map((word) => (
          <Tile key={word} fill={PAPER} radius={16} shadow={8} style={{padding: '4px 20px'}}>
            <div style={{fontFamily: FONT.telop, fontSize: 52, color: INK}}>{word}</div>
          </Tile>
        ))}
      </div>
      <BrandPig id="pig-cover" t={0.4} x={800} y={FLOOR_Y - 292 + 10} size={230} face="happy" pose="cheer" />
      <div style={{position: 'absolute', left: 0, right: 0, top: 1520, display: 'flex', justifyContent: 'center'}}>
        <Tile fill={CREAM} radius={20} shadow={10} style={{padding: '10px 30px'}}>
          <div style={{fontFamily: FONT.zh, fontSize: 50, color: INK}}>{cover.retentionPrompt ?? '评论区抢答'}</div>
        </Tile>
      </div>
      <div style={{position: 'absolute', left: 0, right: 0, top: 1700, textAlign: 'center', fontFamily: FONT.zh, fontSize: 44, color: PAPER}}>
        {BRAND.creatorName} · {gameShow.showTitle}
      </div>
    </AbsoluteFill>
  );
};
