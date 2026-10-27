import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {sentenceInfo} from '../data/sentencePattern';
import {sentenceVideoMeta} from '../sentenceVideoMeta';
import {THEME} from '../theme';
import {secondsToFrames, SENTENCE_TIMELINE} from '../sentenceTimeline';

const clamp = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'} as const;

export const VarietyOpeningScene: React.FC = () => {
  const frame = useCurrentFrame();
  const start = 0;
  const end = secondsToFrames(SENTENCE_TIMELINE.earwormStart);
  const opacity = interpolate(frame, [start, start + 4, end - 6, end], [0, 1, 1, 0], clamp);

  if (frame > end) {
    return null;
  }

  const openingType = sentenceVideoMeta.openingType;
  const title = sentenceVideoMeta.entertainmentHook || sentenceInfo.title;
  const pain = sentenceVideoMeta.chinesePainPoint || sentenceInfo.coreMeaning;

  return (
    <div style={{position: 'absolute', inset: 0, opacity}}>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            openingType === 'mini-drama'
              ? 'radial-gradient(circle at 75% 24%, rgba(255,212,59,0.18), transparent 18%), linear-gradient(180deg, rgba(3,3,3,0.92), rgba(10,10,10,0.98))'
              : 'radial-gradient(circle at 50% 18%, rgba(255,212,59,0.22), transparent 22%), linear-gradient(180deg, rgba(3,3,3,0.92), rgba(10,10,10,0.98))',
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: 78,
          right: 78,
          top: openingType === 'mini-drama' ? 180 : 248,
          color: THEME.yellow,
          fontSize: openingType === 'wrong-expression-roast' ? 132 : 148,
          lineHeight: 0.92,
          fontWeight: 1000,
          textAlign: 'center',
          textShadow: '0 0 42px rgba(255,212,59,0.52)',
        }}
      >
        {title}
      </div>
      <div
        style={{
          position: 'absolute',
          left: 110,
          right: 110,
          top: openingType === 'follow-me-drill' ? 860 : 1040,
          padding: '28px 32px',
          borderRadius: 30,
          background: 'rgba(8,8,8,0.78)',
          border: '1px solid rgba(255,255,255,0.10)',
          color: THEME.white,
          fontSize: 52,
          lineHeight: 1.18,
          fontWeight: 1000,
          textAlign: 'center',
        }}
      >
        {pain}
      </div>
      <div
        style={{
          position: 'absolute',
          left: 150,
          right: 150,
          top: 1490,
          display: 'flex',
          justifyContent: 'center',
          gap: 14,
          flexWrap: 'wrap',
        }}
      >
        {sentenceVideoMeta.chorusLines.slice(0, 2).map((line, index) => (
          <div
            key={`${line}-${index}`}
            style={{
              padding: '14px 20px',
              borderRadius: 999,
              background: index === 0 ? 'rgba(255,77,77,0.16)' : 'rgba(255,212,59,0.14)',
              border: `1px solid ${index === 0 ? THEME.red : THEME.yellow}`,
              color: THEME.white,
              fontSize: 26,
              fontWeight: 900,
            }}
          >
            {line}
          </div>
        ))}
      </div>
    </div>
  );
};
