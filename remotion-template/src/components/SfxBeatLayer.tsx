import React from 'react';
import {AbsoluteFill, useCurrentFrame} from 'remotion';
import {visualBeatMap} from '../visualBeatMap';
import {getActiveVoiceSegment} from '../sentenceTimeline';

export const SfxBeatLayer: React.FC = () => {
  const frame = useCurrentFrame();
  const active = getActiveVoiceSegment(frame);
  const beat = visualBeatMap.find((item) => item.segmentId === active?.id);

  if (!beat?.sfx) {
    return null;
  }

  return (
    <AbsoluteFill style={{pointerEvents: 'none'}}>
      <div
        style={{
          position: 'absolute',
          right: 36,
          top: 72,
          padding: '8px 12px',
          borderRadius: 999,
          background: 'rgba(0,0,0,0.42)',
          color: 'rgba(255,255,255,0.58)',
          fontSize: 16,
          fontWeight: 900,
          letterSpacing: 1,
        }}
      >
        SFX {beat.sfx.toUpperCase()}
      </div>
    </AbsoluteFill>
  );
};
