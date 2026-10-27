import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {sentenceInfo} from '../data/sentencePattern';
import {THEME} from '../theme';
import {secondsToFrames, SENTENCE_TIMELINE} from '../sentenceTimeline';
import {highlightSweep, punchZoom, slamIn} from '../utils/motion';

const clamp = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'} as const;

const getPatternLines = () => {
  if (sentenceInfo.patternLines && sentenceInfo.patternLines.length > 0) {
    return sentenceInfo.patternLines;
  }

  const split = sentenceInfo.pattern.split(/(?<=[,.;!?])\s+/).filter(Boolean);
  return split.length > 0 ? split : [sentenceInfo.pattern];
};

export const SentencePatternReveal: React.FC = () => {
  const frame = useCurrentFrame();
  const start = secondsToFrames(SENTENCE_TIMELINE.patternStart);
  const end = secondsToFrames(SENTENCE_TIMELINE.patternEnd);
  const enter = slamIn({frame, start, fps: SENTENCE_TIMELINE.fps, overshoot: 1.12});
  const opacity = interpolate(frame, [start - 4, start + 4, end - 6, end + 2], [0, 1, 1, 0], clamp);
  const sweep = highlightSweep({frame, start: start + 12, duration: 24});
  const patternLines = getPatternLines();

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        opacity,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        transform: `scale(${enter.scale * punchZoom({frame, start: start + 3, intensity: 0.1})})`,
      }}
    >
      <div
        style={{
          color: THEME.gray,
          fontSize: 34,
          fontWeight: 900,
          letterSpacing: 2,
        }}
      >
        SENTENCE SKELETON
      </div>
      <div
        style={{
          marginTop: 34,
          width: 930,
          padding: '36px 42px',
          borderRadius: 34,
          border: '1px solid rgba(255,212,59,0.22)',
          background: 'rgba(10, 10, 10, 0.78)',
          boxShadow: '0 26px 54px rgba(0,0,0,0.34)',
        }}
      >
        {patternLines.map((line, index) => (
          <div
            key={line}
            style={{
              color: THEME.white,
              fontSize: 68,
              lineHeight: 1.05,
              fontWeight: 1000,
              textAlign: 'center',
              marginTop: index === 0 ? 0 : 20,
            }}
          >
            {line}
          </div>
        ))}
        <div
          style={{
            marginTop: 38,
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 24,
          }}
        >
          <div
            style={{
              position: 'relative',
              padding: '26px 24px',
              borderRadius: 26,
              background: 'linear-gradient(180deg, rgba(255,77,77,0.18), rgba(28,10,10,0.88))',
              border: `2px solid ${THEME.red}`,
              color: THEME.white,
              fontSize: 34,
              fontWeight: 1000,
              textAlign: 'center',
              overflow: 'hidden',
            }}
          >
            {sentenceInfo.slotALabel ?? 'Slot A'} / Slot A
          </div>
          <div
            style={{
              position: 'relative',
              padding: '26px 24px',
              borderRadius: 26,
              background: 'linear-gradient(180deg, rgba(255,212,59,0.16), rgba(35,27,8,0.88))',
              border: `2px solid ${THEME.yellow}`,
              color: THEME.white,
              fontSize: 34,
              fontWeight: 1000,
              textAlign: 'center',
              overflow: 'hidden',
            }}
          >
            {sentenceInfo.slotBLabel ?? 'Slot B'} / Slot B
            <div
              style={{
                position: 'absolute',
                left: '8%',
                right: '8%',
                bottom: 8,
                height: 10,
                background: 'rgba(255,212,59,0.16)',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  width: '40%',
                  height: '100%',
                  transform: `translateX(${sweep.x}%)`,
                  opacity: sweep.opacity,
                  background: 'linear-gradient(90deg, transparent, #fff2a8, transparent)',
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          marginTop: 26,
          width: 840,
          color: 'rgba(248,248,248,0.9)',
          fontSize: 32,
          lineHeight: 1.3,
          fontWeight: 800,
          textAlign: 'center',
        }}
      >
        {sentenceInfo.coreMeaning}
      </div>
    </div>
  );
};
