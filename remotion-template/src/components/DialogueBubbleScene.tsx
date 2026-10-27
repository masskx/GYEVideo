import React from 'react';
import {THEME} from '../theme';

type DialogueBubbleSceneProps = {
  leftLabel: string;
  leftText: string;
  rightLabel: string;
  rightText: string;
};

const bubbleBase: React.CSSProperties = {
  maxWidth: 460,
  padding: '24px 28px',
  borderRadius: 32,
  fontSize: 40,
  lineHeight: 1.22,
  fontWeight: 900,
  boxShadow: '0 18px 40px rgba(0,0,0,0.28)',
};

export const DialogueBubbleScene: React.FC<DialogueBubbleSceneProps> = ({
  leftLabel,
  leftText,
  rightLabel,
  rightText,
}) => {
  return (
    <div
      style={{
        width: 930,
        display: 'flex',
        flexDirection: 'column',
        gap: 22,
      }}
    >
      <div
        style={{
          alignSelf: 'flex-start',
          ...bubbleBase,
          background: 'rgba(255,255,255,0.08)',
          border: '1px solid rgba(255,255,255,0.12)',
          color: THEME.white,
        }}
      >
        <div style={{marginBottom: 10, color: 'rgba(255,255,255,0.56)', fontSize: 22, fontWeight: 900}}>
          {leftLabel}
        </div>
        {leftText}
      </div>
      <div
        style={{
          alignSelf: 'flex-end',
          ...bubbleBase,
          background: 'linear-gradient(180deg, rgba(255,212,59,0.18), rgba(30,24,8,0.92))',
          border: `1px solid ${THEME.yellow}`,
          color: THEME.white,
        }}
      >
        <div style={{marginBottom: 10, color: 'rgba(255,255,255,0.64)', fontSize: 22, fontWeight: 900}}>
          {rightLabel}
        </div>
        {rightText}
      </div>
    </div>
  );
};
