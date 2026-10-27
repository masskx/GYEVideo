import React from 'react';
import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {rootInfo} from '../data/words';
import {THEME} from '../theme';
import {secondsToFrames, TIMELINE} from '../timeline';
import {highlightSweep, punchZoom, shake, slamIn, typewriterReveal} from '../utils/motion';

const clamp = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'} as const;

export const RootWordTitle: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const rootStart = secondsToFrames(TIMELINE.rootStart);
  const rootEnd = secondsToFrames(TIMELINE.rootEnd);
  const title = slamIn({frame, start: rootStart, fps, overshoot: 1.28});
  const zoom = punchZoom({frame, start: rootStart + 2, intensity: 0.2, duration: 16});
  const hit = shake({frame, start: rootStart + 1, duration: 9, intensity: 7});
  const sweep = highlightSweep({frame, start: rootStart + 8, duration: 24});
  const opacity = interpolate(
    frame,
    [rootStart - 2, rootStart + 4, rootEnd - 8, rootEnd + 4],
    [0, 1, 1, 0],
    clamp,
  );
  const explanation = typewriterReveal({
    text: rootInfo.explanation,
    frame,
    start: rootStart + 18,
    duration: 22,
  });

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity,
        transform: `translate(${hit.x}px, ${hit.y}px) rotate(${hit.rotate}deg) scale(${title.scale * zoom})`,
      }}
    >
      <div style={{textAlign: 'center'}}>
        <div
          style={{
            color: THEME.gray,
            fontSize: 28,
            fontWeight: 900,
            letterSpacing: 0,
          }}
        >
          WORD ROOT
        </div>
        <div
          style={{
            position: 'relative',
            marginTop: 10,
            color: THEME.yellow,
            fontSize: 168,
            lineHeight: 0.9,
            fontWeight: 1000,
            textShadow: '0 0 42px rgba(255, 212, 59, 0.76)',
          }}
        >
          {rootInfo.root}
          <div
            style={{
              position: 'absolute',
              left: '8%',
              right: '8%',
              bottom: 4,
              height: 14,
              overflow: 'hidden',
              background: 'rgba(255, 212, 59, 0.22)',
            }}
          >
            <div
              style={{
                width: '44%',
                height: '100%',
                background: 'linear-gradient(90deg, transparent, #fff2a8, transparent)',
                opacity: sweep.opacity,
                transform: `translateX(${sweep.x}%)`,
              }}
            />
          </div>
        </div>
        <div
          style={{
            marginTop: 22,
            color: THEME.white,
            fontSize: 36,
            fontWeight: 900,
          }}
        >
          {rootInfo.meaning}
        </div>
        <div
          style={{
            margin: '20px auto 0',
            width: 760,
            minHeight: 84,
            color: 'rgba(248, 248, 248, 0.92)',
            fontSize: 30,
            lineHeight: 1.28,
            fontWeight: 800,
          }}
        >
          {explanation}
        </div>
      </div>
    </div>
  );
};
