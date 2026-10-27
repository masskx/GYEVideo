import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {sentenceExamples, sentenceInfo} from '../data/sentencePattern';
import {THEME} from '../theme';
import {secondsToFrames, SENTENCE_TIMELINE} from '../sentenceTimeline';
import {punchZoom, shake, slamIn} from '../utils/motion';

const clamp = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'} as const;

export const SlotReplacementScene: React.FC = () => {
  const frame = useCurrentFrame();
  const start = secondsToFrames(SENTENCE_TIMELINE.formulaStart);
  const end = secondsToFrames(SENTENCE_TIMELINE.formulaEnd);
  const progress = Math.max(0, Math.min(0.999, (frame - start) / Math.max(1, end - start)));
  const pairIndex = Math.min(sentenceExamples.length - 1, Math.floor(progress * sentenceExamples.length));
  const activePair = sentenceExamples[pairIndex] ?? sentenceExamples[0];
  const enter = slamIn({frame, start, fps: SENTENCE_TIMELINE.fps, overshoot: 1.08});
  const slotAHit = shake({frame, start: start + 4 + pairIndex * 10, duration: 8, intensity: 5});
  const slotBHit = shake({frame, start: start + 10 + pairIndex * 10, duration: 8, intensity: 5});
  const opacity = interpolate(frame, [start - 4, start + 4, end - 5, end + 2], [0, 1, 1, 0], clamp);
  const formulaOpacity = interpolate(frame, [start + 10, start + 15], [0.6, 1], clamp);

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        opacity,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transform: `scale(${enter.scale})`,
      }}
    >
      <div style={{width: 950}}>
        <div
          style={{
            color: THEME.gray,
            fontSize: 32,
            fontWeight: 900,
            textAlign: 'center',
            letterSpacing: 2,
          }}
        >
          REUSABLE FORMULA
        </div>
        <div
          style={{
            marginTop: 24,
            color: THEME.yellow,
            fontSize: 94,
            lineHeight: 1,
            fontWeight: 1000,
            textAlign: 'center',
            textShadow: '0 0 34px rgba(255,212,59,0.34)',
          }}
        >
          {sentenceInfo.memoryFormula}
        </div>
        <div
          style={{
            marginTop: 26,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 26,
          }}
        >
          <div
            style={{
              width: 360,
              padding: '26px 24px',
              borderRadius: 28,
              border: `2px solid ${THEME.red}`,
              background: 'linear-gradient(180deg, rgba(255,77,77,0.18), rgba(20,8,8,0.92))',
              color: THEME.white,
              fontSize: 34,
              lineHeight: 1.1,
              fontWeight: 1000,
              textAlign: 'center',
              transform: `translate(${slotAHit.x}px, ${slotAHit.y}px) scale(${punchZoom({frame, start: start + 4, intensity: 0.14, duration: 10})})`,
            }}
          >
            <div style={{fontSize: 20, color: 'rgba(255,255,255,0.64)', marginBottom: 10}}>
              Slot A / {sentenceInfo.slotALabel ?? 'A'}
            </div>
            {activePair.slotA}
          </div>
          <div
            style={{
              color: THEME.yellow,
              fontSize: 54,
              fontWeight: 1000,
            }}
          >
            →
          </div>
          <div
            style={{
              width: 360,
              padding: '26px 24px',
              borderRadius: 28,
              border: `2px solid ${THEME.yellow}`,
              background: 'linear-gradient(180deg, rgba(255,212,59,0.16), rgba(28,20,5,0.92))',
              color: THEME.white,
              fontSize: 34,
              lineHeight: 1.1,
              fontWeight: 1000,
              textAlign: 'center',
              transform: `translate(${slotBHit.x}px, ${slotBHit.y}px) scale(${punchZoom({frame, start: start + 14, intensity: 0.14, duration: 10})})`,
            }}
          >
            <div style={{fontSize: 20, color: 'rgba(255,255,255,0.64)', marginBottom: 10}}>
              Slot B / {sentenceInfo.slotBLabel ?? 'B'}
            </div>
            {activePair.slotB}
          </div>
        </div>
        <div
          style={{
            marginTop: 30,
            color: THEME.white,
            fontSize: 58,
            lineHeight: 1.08,
            fontWeight: 1000,
            textAlign: 'center',
            opacity: formulaOpacity,
          }}
        >
          {sentenceInfo.slotAHint ?? 'A 是第一个替换位'}，{sentenceInfo.slotBHint ?? 'B 是第二个替换位'}。
        </div>
        <div
          style={{
            marginTop: 20,
            color: activePair ? THEME.yellow : THEME.white,
            fontSize: 28,
            lineHeight: 1.3,
            fontWeight: 800,
            textAlign: 'center',
            opacity: formulaOpacity,
          }}
        >
          {activePair.usageNote}
        </div>
      </div>
    </div>
  );
};
