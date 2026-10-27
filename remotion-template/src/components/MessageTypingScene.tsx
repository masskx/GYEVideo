import React from 'react';
import {useCurrentFrame} from 'remotion';
import {PLATFORM_UI_SAFE_BOTTOM} from '../layoutSafeArea';
import {SENTENCE_TIMELINE, getActiveVoiceSegment, secondsToFrames} from '../sentenceTimeline';

export const MessageTypingScene: React.FC = () => {
  const frame = useCurrentFrame();
  const active = getActiveVoiceSegment(frame);
  const visibleIds = new Set(['cold-open-scene', 'conflict', 'rescue-line']);
  if (!active || !visibleIds.has(active.id)) {
    return null;
  }

  const cycle = Math.floor((frame - secondsToFrames(SENTENCE_TIMELINE.openingStart)) / 12) % 3;
  const dots = ['.', '..', '...'][Math.max(0, cycle)];

  return (
    <div
      style={{
        position: 'absolute',
        right: 120,
        bottom: PLATFORM_UI_SAFE_BOTTOM,
        padding: '14px 20px',
        borderRadius: 999,
        background: 'rgba(255,255,255,0.08)',
        color: 'rgba(248,248,248,0.72)',
        fontSize: 24,
        fontWeight: 900,
        letterSpacing: 1,
      }}
    >
      typing{dots}
    </div>
  );
};
