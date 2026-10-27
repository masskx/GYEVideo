import React from 'react';
import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {coverData} from '../data/coverData';
import {rootInfo} from '../data/words';
import {THEME} from '../theme';
import {secondsToFrames, TIMELINE} from '../timeline';
import {beatPulse, highlightSweep, punchZoom, shake, slamIn} from '../utils/motion';

const clamp = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'} as const;

export const SummaryScene: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const start = secondsToFrames(TIMELINE.summaryStart);
  const hold = secondsToFrames(TIMELINE.holdStart);
  const enter = slamIn({frame, start, fps, overshoot: 1.18});
  const jolt = shake({frame, start: start + 1, duration: 9, intensity: 6});
  const sweep = highlightSweep({frame, start: start + 14, duration: 28});
  const opacity = interpolate(frame, [start - 3, start + 5], [0, 1], clamp);
  const holdBadge = interpolate(frame, [hold, hold + 8], [0, 1], clamp);
  const rootLabel = rootInfo.root.replace(/-/g, '').replace(/\s+/g, ' ').trim();
  const rootMeaningKeyword = rootInfo.meaning.split('/')[0]?.trim() || rootInfo.meaning;
  const summaryFormula = `${rootLabel} = ${rootMeaningKeyword}`;
  const retentionPrompt = coverData.retentionPrompt || `看到 ${rootInfo.root}，先想：它的核心动作是什么？`;

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        opacity,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transform: `translate(${jolt.x}px, ${jolt.y}px) rotate(${jolt.rotate}deg) scale(${enter.scale * punchZoom({frame, start: start + 2, intensity: 0.13})})`,
      }}
    >
      <div style={{textAlign: 'center', transform: `scale(${beatPulse({frame, start, fps, amount: 0.014})})`}}>
        <div
          style={{
            color: THEME.gray,
            fontSize: 30,
            fontWeight: 950,
          }}
        >
          REMEMBER THIS
        </div>
        <div
          style={{
            position: 'relative',
            marginTop: 18,
            color: THEME.yellow,
            fontSize: 98,
            lineHeight: 1,
            fontWeight: 1000,
            textShadow: '0 0 36px rgba(255, 212, 59, 0.65)',
          }}
        >
          {summaryFormula}
          <div
            style={{
              position: 'absolute',
              left: 12,
              right: 12,
              bottom: -8,
              height: 16,
              overflow: 'hidden',
              background: 'rgba(255, 212, 59, 0.2)',
            }}
          >
            <div
              style={{
                width: '42%',
                height: '100%',
                opacity: sweep.opacity,
                transform: `translateX(${sweep.x}%)`,
                background: 'linear-gradient(90deg, transparent, #fff2a8, transparent)',
              }}
            />
          </div>
        </div>
        <div
          style={{
            marginTop: 34,
            color: THEME.white,
            fontSize: 58,
            fontWeight: 1000,
          }}
        >
          {rootInfo.meaning}
        </div>
        <div
          style={{
            marginTop: 42,
            color: THEME.white,
            fontSize: 28,
            fontWeight: 900,
            opacity: holdBadge,
          }}
        >
          {retentionPrompt}
        </div>
      </div>
    </div>
  );
};
