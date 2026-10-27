import React from 'react';
import {AbsoluteFill} from 'remotion';
import {visualBeatMap} from '../visualBeatMap';
import {getActiveVoiceSegment} from '../sentenceTimeline';
import {THEME} from '../theme';

export const BeatTextScene: React.FC<{frame: number}> = ({frame}) => {
  const active = getActiveVoiceSegment(frame);
  const beat = visualBeatMap.find((item) => item.segmentId === active?.id);

  if (!beat) {
    return null;
  }

  return (
    <AbsoluteFill
      style={{
        pointerEvents: 'none',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        padding: '128px 84px',
      }}
    >
      <div style={{color: THEME.white, fontSize: 76, lineHeight: 1.04, fontWeight: 1000}}>
        {beat.primaryText}
      </div>
      {beat.secondaryText ? (
        <div style={{marginTop: 18, color: THEME.gray, fontSize: 34, lineHeight: 1.18, fontWeight: 900}}>
          {beat.secondaryText}
        </div>
      ) : null}
    </AbsoluteFill>
  );
};
