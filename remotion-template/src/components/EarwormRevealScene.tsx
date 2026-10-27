import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {splitEarwormLine, sentenceVideoMeta} from '../sentenceVideoMeta';
import {THEME} from '../theme';
import {secondsToFrames, SENTENCE_TIMELINE} from '../sentenceTimeline';

const clamp = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'} as const;

export const EarwormRevealScene: React.FC = () => {
  const frame = useCurrentFrame();
  const start = secondsToFrames(SENTENCE_TIMELINE.earwormStart);
  const end = secondsToFrames(SENTENCE_TIMELINE.meaningStart);
  const lines = splitEarwormLine();
  const opacity = interpolate(frame, [start - 3, start + 4, end - 4, end], [0, 1, 1, 0], clamp);

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
      <div style={{width: 950, textAlign: 'center'}}>
        <div style={{color: THEME.gray, fontSize: 28, fontWeight: 1000, letterSpacing: 2}}>EARWORM LINE</div>
        <div
          style={{
            marginTop: 24,
            color: THEME.yellow,
            fontSize: 110,
            lineHeight: 0.98,
            fontWeight: 1000,
            textShadow: '0 0 40px rgba(255,212,59,0.42)',
          }}
        >
          {lines.length > 0
            ? lines.map((line, index) => (
                <React.Fragment key={`${line}-${index}`}>
                  {index > 0 ? <br /> : null}
                  {line}
                </React.Fragment>
              ))
            : sentenceVideoMeta.earwormLine}
        </div>
      </div>
    </div>
  );
};
