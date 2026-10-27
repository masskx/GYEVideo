import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {sentenceVideoMeta, splitRescueLine} from '../sentenceVideoMeta';
import {SENTENCE_TIMELINE, getActiveVoiceSegment, secondsToFrames} from '../sentenceTimeline';
import {THEME} from '../theme';

const clamp = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'} as const;

export const RescueExpressionScene: React.FC = () => {
  const frame = useCurrentFrame();
  const active = getActiveVoiceSegment(frame);
  if (!active || (active.id !== 'rescue-line' && active.id !== 'meaning')) {
    return null;
  }

  const start = secondsToFrames(SENTENCE_TIMELINE.rescueStart);
  const end = secondsToFrames(SENTENCE_TIMELINE.reuseStart);
  const opacity = interpolate(frame, [start - 4, start + 4, end - 5, end], [0, 1, 1, 0], clamp);
  const lines = splitRescueLine();

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        opacity,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          width: 930,
          padding: '50px 48px',
          borderRadius: 38,
          border: `1px solid ${THEME.yellow}`,
          background: 'linear-gradient(180deg, rgba(20,20,20,0.94), rgba(7,7,7,0.98))',
          textAlign: 'center',
          boxShadow: '0 26px 56px rgba(0,0,0,0.36)',
        }}
      >
        <div style={{color: THEME.gray, fontSize: 26, fontWeight: 1000, letterSpacing: 2}}>RESCUE LINE</div>
        <div
          style={{
            marginTop: 24,
            color: THEME.yellow,
            fontSize: 88,
            lineHeight: 1.02,
            fontWeight: 1000,
            textShadow: '0 0 34px rgba(255,212,59,0.36)',
          }}
        >
          {lines.map((line, index) => (
            <React.Fragment key={`${line}-${index}`}>
              {index > 0 ? <br /> : null}
              {line}
            </React.Fragment>
          ))}
        </div>
        <div style={{marginTop: 24, color: THEME.white, fontSize: 36, lineHeight: 1.24, fontWeight: 900}}>
          {sentenceVideoMeta.rescueExpression?.zh}
        </div>
      </div>
    </div>
  );
};
