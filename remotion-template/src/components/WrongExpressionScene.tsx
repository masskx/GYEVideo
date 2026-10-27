import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {MinimalLineArtCard} from './MinimalLineArtCard';
import {sentenceVideoMeta} from '../sentenceVideoMeta';
import {SENTENCE_TIMELINE, getActiveVoiceSegment, secondsToFrames} from '../sentenceTimeline';
import {THEME} from '../theme';

const clamp = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'} as const;

export const WrongExpressionScene: React.FC = () => {
  const frame = useCurrentFrame();
  const active = getActiveVoiceSegment(frame);
  const supportedIds = ['wrong-expression', 'why-wrong', 'why-1', 'why-2'];

  if (!active || !supportedIds.includes(active.id)) {
    return null;
  }

  const start = secondsToFrames(SENTENCE_TIMELINE.wrongStart);
  const end = secondsToFrames(SENTENCE_TIMELINE.rescueStart);
  const opacity = interpolate(frame, [start - 4, start + 4, end - 5, end], [0, 1, 1, 0], clamp);
  const scale = interpolate(frame, [start, start + 6], [1.08, 1], clamp);
  const rotate = interpolate(frame, [start, start + 10], [-2, 0], clamp);
  const isPunchLine = active.id === 'why-2';
  const explanation =
    active.id === 'why-1'
      ? '这是中文脑回路直译'
      : active.id === 'why-2'
        ? '偶尔能懂 但别当自然英语'
        : sentenceVideoMeta.wrongExpression?.whyItFails;

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        opacity,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transform: `scale(${scale}) rotate(${rotate}deg)`,
      }}
    >
      <MinimalLineArtCard
        x={72}
        y={170}
        width={286}
        height={214}
        rotate={-12}
        opacity={0.76}
        variant="warning-siren"
        stylePreset={sentenceVideoMeta.lineArtStyle}
        accent="rgba(255,77,77,0.16)"
      />
      <MinimalLineArtCard
        x={760}
        y={138}
        width={242}
        height={182}
        rotate={10}
        opacity={0.62}
        variant="pain-spark"
        stylePreset={sentenceVideoMeta.lineArtStyle}
        accent="rgba(255,255,255,0.10)"
      />
      <div
        style={{
          width: 900,
          padding: '48px 44px',
          borderRadius: 36,
          background: 'rgba(18,6,6,0.92)',
          border: `1px solid ${THEME.red}`,
          boxShadow: '0 24px 54px rgba(0,0,0,0.34)',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            right: 28,
            top: 28,
            padding: '8px 12px',
            borderRadius: 999,
            background: 'rgba(255,77,77,0.12)',
            color: THEME.red,
            fontSize: 16,
            fontWeight: 1000,
            letterSpacing: 1,
          }}
        >
          TOO LITERAL
        </div>
        <div style={{color: THEME.red, fontSize: 26, fontWeight: 1000, letterSpacing: 2}}>WRONG EXPRESSION</div>
        <div style={{marginTop: 22, color: THEME.white, fontSize: 88, lineHeight: 1.04, fontWeight: 1000}}>
          {sentenceVideoMeta.wrongExpression?.text}
        </div>
        <div
          style={{
            marginTop: 22,
            color: isPunchLine ? THEME.yellow : 'rgba(248,248,248,0.78)',
            fontSize: isPunchLine ? 42 : 38,
            lineHeight: 1.24,
            fontWeight: 900,
          }}
        >
          {explanation}
        </div>
        <div
          style={{
            position: 'absolute',
            left: 44,
            right: 44,
            top: '50%',
            height: 12,
            borderRadius: 999,
            background: 'rgba(255,77,77,0.78)',
            transform: 'rotate(-8deg)',
            boxShadow: '0 0 20px rgba(255,77,77,0.30)',
          }}
        />
      </div>
    </div>
  );
};
