import React from 'react';
import {AbsoluteFill, useCurrentFrame} from 'remotion';
import {generatedVoiceTimeline} from '../data/generatedVoiceTimeline';
import {SENTENCE_TIMELINE} from '../sentenceTimeline';
import {THEME} from '../theme';

export const DouyinProgressBeatBar: React.FC = () => {
  const frame = useCurrentFrame();
  const progress = Math.min(1, frame / (SENTENCE_TIMELINE.durationSeconds * SENTENCE_TIMELINE.fps));

  return (
    <AbsoluteFill style={{pointerEvents: 'none'}}>
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          height: 10,
          background: 'rgba(255,255,255,0.08)',
        }}
      >
        <div
          style={{
            width: `${progress * 100}%`,
            height: '100%',
            background: THEME.yellow,
            boxShadow: '0 0 20px rgba(255,212,59,0.35)',
          }}
        />
      </div>
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 12,
          display: 'flex',
        }}
      >
        {generatedVoiceTimeline.map((segment) => (
          <div
            key={segment.id}
            style={{
              flex: Math.max(1, segment.end - segment.start),
              height: 6,
              marginRight: 2,
              background: 'rgba(255,212,59,0.18)',
            }}
          />
        ))}
      </div>
    </AbsoluteFill>
  );
};
