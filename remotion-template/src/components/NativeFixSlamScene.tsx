import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {AnimatedAnimalIcon} from './AnimatedAnimalIcon';
import {getActiveVoiceSegment, SENTENCE_TIMELINE, secondsToFrames} from '../sentenceTimeline';
import {sentenceVideoMeta} from '../sentenceVideoMeta';
import {THEME} from '../theme';

const clamp = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'} as const;

const clip = (value: string, limit: number) => {
  if (value.length <= limit) {
    return value;
  }

  return `${value.slice(0, limit).trim()}...`;
};

export const NativeFixSlamScene: React.FC = () => {
  const frame = useCurrentFrame();
  const active = getActiveVoiceSegment(frame);
  const supportedIds = ['rescue-line', 'meaning', 'why-1', 'why-2', 'fix-1', 'fix-2'];

  if (!active || !supportedIds.includes(active.id)) {
    return null;
  }

  const start = secondsToFrames(SENTENCE_TIMELINE.rescueStart);
  const end = secondsToFrames(SENTENCE_TIMELINE.reuseStart);
  const opacity = interpolate(frame, [start - 3, start + 4, end - 4, end], [0, 1, 1, 0], clamp);
  const scale = interpolate(frame, [start, start + 5], [0.84, 1], clamp);
  const fix =
    active.id === 'fix-2'
      ? sentenceVideoMeta.reuseScenes?.[1]?.line ??
        sentenceVideoMeta.reuseScenes?.[0]?.line ??
        sentenceVideoMeta.rescueExpression?.en ??
        sentenceVideoMeta.sentencePattern
      : sentenceVideoMeta.rescueExpression?.en ?? sentenceVideoMeta.sentencePattern;
  const label = active.id === 'fix-2' ? 'NEXT BEAT' : active.id.startsWith('why-') ? 'HERO FIX' : 'SAY THIS';
  const fixFontSize = fix.length > 26 ? 62 : fix.length > 18 ? 72 : 86;
  const support =
    active.id === 'fix-2'
      ? '\u7b2c\u4e8c\u79cd\u8bf4\u6cd5\u540e\u9762\u518d\u8865\uff0c\u4e0d\u8ddf\u4e3b\u7b54\u6848\u62a2\u7126\u70b9\u3002'
      : sentenceVideoMeta.rescueExpression?.zh;
  const wrongChip = clip(sentenceVideoMeta.wrongFocusLine || '\u522b\u8fd9\u6837\u8bf4', 22);

  return (
    <AbsoluteFill
      style={{
        opacity,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 72,
        transform: `scale(${scale})`,
      }}
    >
      <AnimatedAnimalIcon
        id="cute_dinosaur"
        x={792}
        y={336}
        size={156}
        startFrame={start}
        durationFrames={Math.max(20, end - start)}
        variant="punch"
        opacity={0.92}
      />
      <div
        style={{
          position: 'absolute',
          top: 340,
          left: 112,
          padding: '12px 16px',
          borderRadius: 999,
          background: 'rgba(255,77,77,0.12)',
          border: `2px solid ${THEME.red}`,
          color: THEME.red,
          fontSize: 20,
          fontWeight: 1000,
          transform: 'rotate(-8deg)',
        }}
      >
        DROP {wrongChip}
      </div>
      <div
        style={{
          width: 760,
          textAlign: 'center',
        }}
      >
        <div style={{color: THEME.gray, fontSize: 24, fontWeight: 1000, letterSpacing: 2}}>{label}</div>
        <div
          style={{
            marginTop: 18,
            color: THEME.yellow,
            fontSize: fixFontSize,
            lineHeight: 1.02,
            fontWeight: 1000,
            textShadow: '0 0 34px rgba(255,212,59,0.38)',
          }}
        >
          {fix}
        </div>
        <div
          style={{
            marginTop: 18,
            display: 'inline-flex',
            padding: '12px 18px',
            borderRadius: 999,
            background: 'rgba(255,212,59,0.12)',
            color: THEME.white,
            fontSize: 22,
            fontWeight: 900,
          }}
        >
          {support}
        </div>
      </div>
    </AbsoluteFill>
  );
};
