import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {sentenceVideoMeta} from '../sentenceVideoMeta';
import {THEME} from '../theme';
import {getActiveVoiceSegment, secondsToFrames, SENTENCE_TIMELINE} from '../sentenceTimeline';

const clamp = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'} as const;

const chorusIds = new Set(['chorus-1', 'chorus-2']);

export const ChorusRepeatScene: React.FC = () => {
  const frame = useCurrentFrame();
  const active = getActiveVoiceSegment(frame);
  const isVisible = active ? chorusIds.has(active.id) : false;
  const start = secondsToFrames(SENTENCE_TIMELINE.earwormStart);
  const end = secondsToFrames(SENTENCE_TIMELINE.scene2End);
  const opacity = interpolate(frame, [start - 4, start + 4, end - 6, end], [0, 1, 1, 0], clamp);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      style={{
        position: 'absolute',
        left: 80,
        right: 80,
        top: 1320,
        opacity,
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          minWidth: 760,
          padding: '26px 30px',
          borderRadius: 34,
          background: 'rgba(255,212,59,0.12)',
          border: `2px solid ${THEME.yellow}`,
          color: THEME.white,
          textAlign: 'center',
          boxShadow: '0 18px 36px rgba(255,212,59,0.12)',
        }}
      >
        <div style={{fontSize: 24, fontWeight: 1000, color: THEME.gray}}>CHORUS</div>
        <div style={{marginTop: 12, fontSize: 54, lineHeight: 1.12, fontWeight: 1000}}>
          {sentenceVideoMeta.chorusLines.slice(0, 2).map((line, index) => (
            <React.Fragment key={`${line}-${index}`}>
              {index > 0 ? <br /> : null}
              {line}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
