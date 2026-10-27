import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {AnimatedAnimalIcon} from './AnimatedAnimalIcon';
import {getActiveVoiceSegment, SENTENCE_TIMELINE, secondsToFrames} from '../sentenceTimeline';
import {sentenceVideoMeta} from '../sentenceVideoMeta';
import {THEME} from '../theme';

const clamp = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'} as const;

export const WrongMeaningTwistScene: React.FC = () => {
  const frame = useCurrentFrame();
  const active = getActiveVoiceSegment(frame);

  if (!active || active.id !== 'slap') {
    return null;
  }

  const start = secondsToFrames(SENTENCE_TIMELINE.conflictStart);
  const end = secondsToFrames(SENTENCE_TIMELINE.rescueStart);
  const opacity = interpolate(frame, [start - 3, start + 4, end - 4, end], [0, 1, 1, 0], clamp);
  const intended = sentenceVideoMeta.wrongExpression?.text ?? sentenceVideoMeta.sentencePattern;
  const actual = sentenceVideoMeta.wrongExpression?.whyItFails ?? sentenceVideoMeta.chinesePainPoint;
  const actualFontSize = actual.length > 52 ? 26 : 30;
  const headlineScale = interpolate(frame, [start, start + 6], [0.9, 1], clamp);

  return (
    <AbsoluteFill
      style={{
        opacity,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '120px 72px 246px',
      }}
    >
      <AnimatedAnimalIcon
        id="cute_cat"
        x={82}
        y={294}
        size={132}
        startFrame={start}
        durationFrames={Math.max(20, end - start)}
        variant="reaction"
        opacity={0.92}
      />
      <div style={{width: 952}}>
        <div
          style={{
            color: THEME.gray,
            fontSize: 24,
            fontWeight: 1000,
            letterSpacing: 2,
          }}
        >
          YOU MEANT
        </div>
        <div
          style={{
            marginTop: 16,
            maxWidth: 820,
            color: THEME.white,
            fontSize: 68,
            lineHeight: 1.08,
            fontWeight: 1000,
            transform: `scale(${headlineScale})`,
            transformOrigin: 'left center',
          }}
        >
          {'\u5730\u533a\u8868\u8fbe'}
          <br />
          {'\u4e0d\u7b49\u4e8e '}<span style={{color: THEME.yellow}}>{'\u5168\u7403\u901a\u7528'}</span>
        </div>
        <div
          style={{
            marginTop: 22,
            display: 'inline-flex',
            padding: '12px 18px',
            borderRadius: 999,
            background: 'rgba(255,212,59,0.12)',
            color: THEME.white,
            fontSize: 24,
            fontWeight: 900,
          }}
        >
          {'\u4e2d\u6587\u8111\u56de\u8def\u6ca1\u9519\uff0c\u9519\u5728\u4f60\u628a\u5730\u533a\u8bf4\u6cd5\u5f53\u6210\u4e07\u80fd\u82f1\u8bed\u3002'}
        </div>
        <div
          style={{
            marginTop: 34,
            display: 'grid',
            gridTemplateColumns: '220px 1fr',
            gap: 28,
            alignItems: 'stretch',
          }}
        >
          <div
            style={{
              paddingTop: 24,
              color: THEME.white,
            }}
          >
            <div style={{color: 'rgba(255,255,255,0.58)', fontSize: 20, fontWeight: 1000, letterSpacing: 1}}>
              {'\u4f60\u8111\u5b50\u91cc\u60f3\u7684\u662f'}
            </div>
            <div
              style={{
                marginTop: 14,
                fontSize: 44,
                lineHeight: 1.08,
                fontWeight: 1000,
              }}
            >
              {'\u7ed9\u4eba'}
              <br />
              {'\u6253\u6c14'}
            </div>
            <div
              style={{
                marginTop: 16,
                display: 'inline-flex',
                padding: '10px 14px',
                borderRadius: 18,
                background: 'rgba(255,255,255,0.06)',
                color: 'rgba(255,255,255,0.72)',
                fontSize: 18,
                fontWeight: 900,
                lineHeight: 1.2,
              }}
            >
              {'\u610f\u56fe\u6ca1\u95ee\u9898'}
              <br />
              {'\u4f46\u7ffb\u6cd5\u592a\u76f4'}
            </div>
          </div>
          <div
            style={{
              borderRadius: 34,
              padding: '34px 32px',
              background: 'linear-gradient(180deg, rgba(52,12,12,0.96), rgba(14,10,10,0.96))',
              border: `2px solid ${THEME.red}`,
              boxShadow: '0 26px 60px rgba(255,77,77,0.14)',
            }}
          >
            <div style={{color: THEME.red, fontSize: 24, fontWeight: 1000, letterSpacing: 1}}>THEY HEAR THIS</div>
            <div
              style={{
                marginTop: 14,
                color: THEME.white,
                fontSize: 58,
                lineHeight: 1.04,
                fontWeight: 1000,
              }}
            >
              {intended}
            </div>
            <div
              style={{
                marginTop: 18,
                maxWidth: 560,
                color: 'rgba(248,248,248,0.82)',
                fontSize: actualFontSize,
                lineHeight: 1.22,
                fontWeight: 800,
              }}
            >
              {actual}
            </div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
