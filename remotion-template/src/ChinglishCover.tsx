import React from 'react';
import {AbsoluteFill} from 'remotion';
import {sentenceInfo} from './data/sentencePattern';
import {THEME, FONT_STACK} from './theme';

export const ChinglishCover: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        fontFamily: FONT_STACK,
        background: THEME.background,
        color: THEME.white,
        padding: 80,
      }}
    >
      <div
        style={{
          alignSelf: 'flex-start',
          padding: '18px 24px',
          borderRadius: 24,
          background: 'rgba(255,77,77,0.14)',
          border: `1px solid ${THEME.red}`,
          color: THEME.red,
          fontSize: 28,
          fontWeight: 1000,
        }}
      >
        CHINGLISH TRAP
      </div>
      <div style={{marginTop: 42, fontSize: 78, lineHeight: 1.08, fontWeight: 1000}}>
        {sentenceInfo.title}
      </div>
      <div style={{marginTop: 40, display: 'grid', gap: 22}}>
        <div
          style={{
            padding: '26px 28px',
            borderRadius: 28,
            background: 'rgba(255,77,77,0.10)',
            border: `1px solid ${THEME.red}`,
          }}
        >
          <div style={{color: THEME.red, fontSize: 22, fontWeight: 1000}}>WRONG</div>
          <div style={{marginTop: 10, fontSize: 44, lineHeight: 1.14, fontWeight: 1000}}>
            {sentenceInfo.wrongExpression?.text ?? sentenceInfo.pattern}
          </div>
        </div>
        <div
          style={{
            padding: '26px 28px',
            borderRadius: 28,
            background: 'rgba(255,212,59,0.12)',
            border: `1px solid ${THEME.yellow}`,
          }}
        >
          <div style={{color: THEME.yellow, fontSize: 22, fontWeight: 1000}}>RIGHT</div>
          <div style={{marginTop: 10, fontSize: 44, lineHeight: 1.14, fontWeight: 1000}}>
            {sentenceInfo.rescueExpression?.en ?? sentenceInfo.pattern}
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
