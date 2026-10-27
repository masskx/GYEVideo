import React from 'react';
import {THEME} from '../theme';

type DontSaySaySceneProps = {
  wrongLine: string;
  betterLine: string;
};

export const DontSaySayScene: React.FC<DontSaySaySceneProps> = ({wrongLine, betterLine}) => {
  return (
    <div
      style={{
        width: 930,
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: 26,
      }}
    >
      <div
        style={{
          padding: '28px 30px',
          borderRadius: 30,
          background: 'rgba(255,77,77,0.14)',
          border: `2px solid ${THEME.red}`,
          color: THEME.white,
          boxShadow: '0 18px 34px rgba(255,77,77,0.16)',
        }}
      >
        <div style={{fontSize: 26, fontWeight: 1000, color: THEME.red}}>DON'T SAY</div>
        <div style={{marginTop: 12, fontSize: 54, lineHeight: 1.08, fontWeight: 1000, textDecoration: 'line-through'}}>
          {wrongLine}
        </div>
      </div>
      <div
        style={{
          padding: '28px 30px',
          borderRadius: 30,
          background: 'rgba(255,212,59,0.14)',
          border: `2px solid ${THEME.yellow}`,
          color: THEME.white,
          boxShadow: '0 18px 34px rgba(255,212,59,0.16)',
        }}
      >
        <div style={{fontSize: 26, fontWeight: 1000, color: THEME.yellow}}>SAY THIS</div>
        <div style={{marginTop: 12, fontSize: 58, lineHeight: 1.08, fontWeight: 1000}}>{betterLine}</div>
      </div>
    </div>
  );
};
