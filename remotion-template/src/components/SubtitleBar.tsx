import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {THEME} from '../theme';
import {getActiveVoiceSegment, TIMELINE} from '../timeline';

const clamp = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'} as const;

export const SubtitleBar: React.FC = () => {
  const frame = useCurrentFrame();
  const subtitle = getActiveVoiceSegment(frame);
  const second = frame / TIMELINE.fps;
  const progress = subtitle
    ? (second - subtitle.start) / Math.max(subtitle.end - subtitle.start, 0.001)
    : 0;
  const opacity = interpolate(frame, [4, 14], [0, 1], clamp);

  return (
    <div
      style={{
        position: 'absolute',
        left: 48,
        right: 48,
        bottom: 34,
        height: 70,
        borderRadius: 6,
        background: 'rgba(5, 5, 5, 0.82)',
        border: '1px solid rgba(248, 248, 248, 0.14)',
        boxShadow: '0 0 30px rgba(0, 0, 0, 0.74)',
        overflow: 'hidden',
        opacity,
      }}
    >
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: `${progress * 100}%`,
          background: 'linear-gradient(90deg, rgba(255, 212, 59, 0.24), rgba(255, 212, 59, 0.035))',
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: 7,
          background: THEME.yellow,
          boxShadow: '0 0 18px rgba(255, 212, 59, 0.95)',
        }}
      />
      <div
        style={{
          position: 'relative',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0 34px',
          color: THEME.white,
          fontSize: 28,
          lineHeight: 1.16,
          fontWeight: 900,
          textAlign: 'center',
          textShadow: '0 2px 8px rgba(0, 0, 0, 0.8)',
        }}
      >
        {subtitle?.text ?? ''}
      </div>
    </div>
  );
};
