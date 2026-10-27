import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {sentenceVideoMeta} from '../sentenceVideoMeta';
import {SENTENCE_TIMELINE, getActiveVoiceSegment, secondsToFrames} from '../sentenceTimeline';
import {THEME} from '../theme';

const clamp = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'} as const;

export const MicroDramaReuseScene: React.FC = () => {
  const frame = useCurrentFrame();
  const active = getActiveVoiceSegment(frame);
  if (!active || (active.id !== 'reuse-scene' && active.id !== 'rescue-line-repeat')) {
    return null;
  }

  const start = secondsToFrames(SENTENCE_TIMELINE.reuseStart);
  const end = secondsToFrames(SENTENCE_TIMELINE.lockStart);
  const opacity = interpolate(frame, [start - 4, start + 4, end - 5, end], [0, 1, 1, 0], clamp);
  const scene = sentenceVideoMeta.reuseScenes[0];

  if (!scene) {
    return null;
  }

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
          width: 940,
          padding: '44px 42px',
          borderRadius: 36,
          background: 'rgba(9,9,9,0.90)',
          border: '1px solid rgba(255,255,255,0.10)',
          boxShadow: '0 22px 48px rgba(0,0,0,0.34)',
        }}
      >
        <div style={{color: THEME.gray, fontSize: 24, fontWeight: 1000, letterSpacing: 2}}>{scene.setting}</div>
        <div style={{marginTop: 20, color: THEME.yellow, fontSize: 54, lineHeight: 1.14, fontWeight: 1000}}>
          {scene.line}
        </div>
        <div style={{marginTop: 18, color: THEME.white, fontSize: 34, lineHeight: 1.22, fontWeight: 900}}>
          {scene.zh}
        </div>
      </div>
    </div>
  );
};
