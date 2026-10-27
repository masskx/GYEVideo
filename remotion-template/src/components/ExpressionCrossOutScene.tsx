import React from 'react';
import {useCurrentFrame} from 'remotion';
import {sentenceVideoMeta} from '../sentenceVideoMeta';
import {getActiveVoiceSegment} from '../sentenceTimeline';
import {THEME} from '../theme';

export const ExpressionCrossOutScene: React.FC = () => {
  const frame = useCurrentFrame();
  const active = getActiveVoiceSegment(frame);
  if (!active || (active.id !== 'wrong-expression' && active.id !== 'why-wrong')) {
    return null;
  }

  const text = sentenceVideoMeta.wrongExpression?.text;
  if (!text) {
    return null;
  }

  return (
    <div
      style={{
        position: 'absolute',
        left: 120,
        right: 120,
        top: 760,
        display: 'flex',
        justifyContent: 'center',
        pointerEvents: 'none',
      }}
    >
      <div style={{position: 'relative', padding: '10px 0'}}>
        <div
          style={{
            color: THEME.red,
            fontSize: 86,
            lineHeight: 1,
            fontWeight: 1000,
            opacity: 0.5,
          }}
        >
          {text}
        </div>
        <div
          style={{
            position: 'absolute',
            left: -18,
            right: -18,
            top: '50%',
            height: 8,
            background: THEME.red,
            transform: `rotate(${frame % 2 === 0 ? -8 : -7}deg)`,
            boxShadow: '0 0 18px rgba(255,77,77,0.42)',
          }}
        />
      </div>
    </div>
  );
};
