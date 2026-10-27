import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {sentenceVideoMeta, splitRescueLine} from '../sentenceVideoMeta';
import {SENTENCE_TIMELINE, secondsToFrames} from '../sentenceTimeline';
import {THEME} from '../theme';

const clamp = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'} as const;

export const MemoryLockScene: React.FC = () => {
  const frame = useCurrentFrame();
  const start = secondsToFrames(SENTENCE_TIMELINE.lockStart);
  const end = secondsToFrames(SENTENCE_TIMELINE.outroStart);
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
          padding: '56px 50px',
          borderRadius: 40,
          border: '1px solid rgba(255,212,59,0.28)',
          background: 'linear-gradient(180deg, rgba(18,18,18,0.92), rgba(6,6,6,0.98))',
          textAlign: 'center',
          boxShadow: '0 28px 62px rgba(0,0,0,0.38)',
        }}
      >
        <div style={{color: THEME.gray, fontSize: 28, fontWeight: 1000, letterSpacing: 2}}>MEMORY LOCK</div>
        <div
          style={{
            marginTop: 24,
            color: THEME.yellow,
            fontSize: 84,
            lineHeight: 1.04,
            fontWeight: 1000,
            textShadow: '0 0 32px rgba(255,212,59,0.42)',
          }}
        >
          {lines.map((line, index) => (
            <React.Fragment key={`${line}-${index}`}>
              {index > 0 ? <br /> : null}
              {line}
            </React.Fragment>
          ))}
        </div>
        <div style={{marginTop: 24, color: THEME.white, fontSize: 32, lineHeight: 1.22, fontWeight: 900}}>
          {sentenceVideoMeta.naturalnessNote}
        </div>
      </div>
    </div>
  );
};
