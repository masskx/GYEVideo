import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {sentenceInfo} from '../data/sentencePattern';
import {sentenceVideoMeta, splitEarwormLine} from '../sentenceVideoMeta';
import {THEME} from '../theme';
import {secondsToFrames, SENTENCE_TIMELINE} from '../sentenceTimeline';

const clamp = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'} as const;

export const MemorySoundLockScene: React.FC = () => {
  const frame = useCurrentFrame();
  const start = secondsToFrames(SENTENCE_TIMELINE.lockStart);
  const outroStart = secondsToFrames(SENTENCE_TIMELINE.outroStart);
  const opacity = interpolate(frame, [start - 3, start + 4], [0, 1], clamp);
  const englishOnlyOpacity = interpolate(frame, [outroStart - 12, outroStart - 2], [0, 1], clamp);
  const lines = splitEarwormLine();

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
          padding: '54px 50px',
          borderRadius: 38,
          border: '1px solid rgba(255,212,59,0.24)',
          background: 'linear-gradient(180deg, rgba(20,20,20,0.92), rgba(6,6,6,0.98))',
          textAlign: 'center',
          boxShadow: '0 28px 62px rgba(0,0,0,0.38)',
        }}
      >
        <div style={{color: THEME.gray, fontSize: 28, fontWeight: 1000, letterSpacing: 2}}>MEMORY SOUND LOCK</div>
        <div
          style={{
            marginTop: 22,
            color: THEME.yellow,
            fontSize: 86,
            lineHeight: 1.04,
            fontWeight: 1000,
            textShadow: '0 0 34px rgba(255,212,59,0.42)',
          }}
        >
          {lines.map((line, index) => (
            <React.Fragment key={`${line}-${index}`}>
              {index > 0 ? <br /> : null}
              {line}
            </React.Fragment>
          ))}
        </div>
        <div
          style={{
            marginTop: 26,
            color: 'rgba(248,248,248,0.78)',
            fontSize: 34,
            lineHeight: 1.24,
            fontWeight: 900,
            opacity: 1 - englishOnlyOpacity,
          }}
        >
          {sentenceInfo.coreMeaning}
        </div>
        <div
          style={{
            marginTop: 26,
            color: THEME.white,
            fontSize: 56,
            lineHeight: 1.1,
            fontWeight: 1000,
            opacity: englishOnlyOpacity,
          }}
        >
          {sentenceVideoMeta.memorySound}
        </div>
      </div>
    </div>
  );
};
