import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {SUBTITLE_SAFE_BOTTOM} from '../layoutSafeArea';
import {THEME} from '../theme';
import {getActiveVoiceSegment, SENTENCE_TIMELINE} from '../sentenceTimeline';

const clamp = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'} as const;

export const SentenceSubtitleBar: React.FC = () => {
  const frame = useCurrentFrame();
  const subtitle = getActiveVoiceSegment(frame);
  const second = frame / SENTENCE_TIMELINE.fps;
  const progress = subtitle
    ? (second - subtitle.start) / Math.max(subtitle.end - subtitle.start, 0.001)
    : 0;
  const opacity = interpolate(frame, [6, 18], [0, 1], clamp);

  return (
    <div
      style={{
        position: 'absolute',
        left: 54,
        right: 54,
        bottom: SUBTITLE_SAFE_BOTTOM,
        height: 118,
        borderRadius: 26,
        background: 'rgba(4, 4, 4, 0.86)',
        border: '1px solid rgba(248, 248, 248, 0.10)',
        boxShadow: '0 20px 44px rgba(0, 0, 0, 0.48)',
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
          width: `${Math.max(0, Math.min(1, progress)) * 100}%`,
          background: 'linear-gradient(90deg, rgba(255, 212, 59, 0.28), rgba(255, 212, 59, 0.05))',
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: 10,
          background: THEME.yellow,
          boxShadow: '0 0 22px rgba(255, 212, 59, 0.95)',
        }}
      />
      <div
        style={{
          position: 'relative',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0 52px',
          color: THEME.white,
          fontSize: 40,
          lineHeight: 1.22,
          fontWeight: 900,
          textAlign: 'center',
          textShadow: '0 2px 10px rgba(0, 0, 0, 0.84)',
        }}
      >
        {subtitle?.text ?? ''}
      </div>
    </div>
  );
};
