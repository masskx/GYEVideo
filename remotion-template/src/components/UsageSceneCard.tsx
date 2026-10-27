import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {AnimatedAnimalIcon} from './AnimatedAnimalIcon';
import {MinimalLineArtCard} from './MinimalLineArtCard';
import {sentenceInfo} from '../data/sentencePattern';
import {getActiveVoiceSegment, SENTENCE_TIMELINE, secondsToFrames} from '../sentenceTimeline';
import {PLATFORM_UI_SAFE_BOTTOM} from '../layoutSafeArea';
import {sentenceVideoMeta} from '../sentenceVideoMeta';
import {THEME} from '../theme';

const clamp = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'} as const;

export const UsageSceneCard: React.FC = () => {
  const frame = useCurrentFrame();
  const active = getActiveVoiceSegment(frame);
  const supportedIds = ['reuse-scene', 'rescue-line-repeat', 'scene'];

  if (!active || !supportedIds.includes(active.id)) {
    return null;
  }

  const start = secondsToFrames(SENTENCE_TIMELINE.reuseStart);
  const end = secondsToFrames(SENTENCE_TIMELINE.lockStart);
  const opacity = interpolate(frame, [start - 3, start + 4, end - 4, end], [0, 1, 1, 0], clamp);
  const usage =
    active.id === 'rescue-line-repeat'
      ? sentenceInfo.reuseScenes?.[1] ?? sentenceInfo.reuseScenes?.[0]
      : sentenceInfo.reuseScenes?.[0];

  if (!usage) {
    return null;
  }

  const artVariant =
    usage.line.includes('hurts')
      ? 'pain-spark'
      : usage.line.includes("It's been a while")
        ? 'mail-tail'
        : usage.line.includes('sea of people')
          ? 'crowd-wave'
          : 'spark-quote';

  return (
    <AbsoluteFill
      style={{
        opacity,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: `84px 74px ${PLATFORM_UI_SAFE_BOTTOM}px`,
      }}
    >
      <AnimatedAnimalIcon
        id={active.id === 'rescue-line-repeat' ? 'cute_bird' : 'cute_rabbit'}
        x={94}
        y={308}
        size={132}
        startFrame={start}
        durationFrames={Math.max(20, end - start)}
        variant={active.id === 'rescue-line-repeat' ? 'bounce' : 'peek'}
        opacity={0.9}
      />
      <MinimalLineArtCard
        x={36}
        y={130}
        width={286}
        height={218}
        rotate={-12}
        opacity={0.88}
        variant={artVariant}
        stylePreset={sentenceVideoMeta.lineArtStyle}
        accent="rgba(255,212,59,0.14)"
      />
      <MinimalLineArtCard
        x={794}
        y={124}
        width={224}
        height={176}
        rotate={10}
        opacity={0.62}
        variant="arrow-fix"
        stylePreset={sentenceVideoMeta.lineArtStyle}
        accent="rgba(255,255,255,0.08)"
      />
      <div
        style={{
          width: 944,
          display: 'grid',
          gridTemplateColumns: '0.62fr 1.38fr',
          gap: 24,
          alignItems: 'stretch',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateRows: 'auto auto 1fr',
            gap: 16,
          }}
        >
          <div style={{color: THEME.gray, fontSize: 22, fontWeight: 1000, letterSpacing: 1}}>USE IT HERE</div>
          <div
            style={{
              borderRadius: 30,
              padding: '28px 24px 26px',
              background: 'linear-gradient(180deg, rgba(22,22,22,0.96), rgba(10,10,10,0.94))',
              border: '1px solid rgba(255,255,255,0.10)',
              boxShadow: '0 24px 48px rgba(0,0,0,0.28)',
            }}
          >
            <div style={{color: THEME.gray, fontSize: 18, fontWeight: 1000, letterSpacing: 1}}>SCENE</div>
            <div style={{marginTop: 10, color: THEME.white, fontSize: 40, lineHeight: 1.1, fontWeight: 1000}}>
              {usage.setting}
            </div>
            <div
              style={{
                marginTop: 16,
                display: 'inline-flex',
                padding: '10px 14px',
                borderRadius: 999,
                background: 'rgba(255,77,77,0.12)',
                color: THEME.red,
                fontSize: 17,
                fontWeight: 1000,
              }}
            >
              {`\u522b\u518d\u8131\u53e3\u800c\u51fa ${sentenceInfo.wrongExpression?.text ?? '\u76f4\u7ffb\u53e5'}`}
            </div>
          </div>
          <div
            style={{
              alignSelf: 'end',
              marginTop: 12,
              borderRadius: 22,
              padding: '18px 18px',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.10)',
              color: 'rgba(248,248,248,0.84)',
              fontSize: 18,
              lineHeight: 1.3,
              fontWeight: 900,
            }}
          >
            {active.id === 'scene'
              ? sentenceVideoMeta.creatorNote
              : '\u4e3b\u7b54\u6848\u5148\u7a33\u4f4f\uff0c\u7b2c\u4e8c\u62cd\u518d\u8865\u5145\u53d8\u4f53\u3002'}
          </div>
        </div>
        <div
          style={{
            borderRadius: 34,
            padding: '32px 30px 28px',
            background:
              'linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,212,59,0.14), rgba(18,18,18,0.97) 54%, rgba(10,10,10,0.98))',
            border: `1px solid ${THEME.yellow}`,
            boxShadow: '0 24px 52px rgba(255,212,59,0.12)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              right: -28,
              top: -18,
              width: 220,
              height: 220,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(255,212,59,0.14), rgba(255,212,59,0))',
              filter: 'blur(14px)',
            }}
          />
          <div style={{color: THEME.gray, fontSize: 20, fontWeight: 1000, letterSpacing: 1}}>COPY THIS LINE</div>
          <div style={{marginTop: 14, color: THEME.yellow, fontSize: 58, lineHeight: 1.06, fontWeight: 1000}}>{usage.line}</div>
          <div style={{marginTop: 14, color: THEME.white, fontSize: 30, lineHeight: 1.18, fontWeight: 800}}>{usage.zh}</div>
          <div
            style={{
              marginTop: 18,
              display: 'grid',
              gridTemplateColumns: 'auto 1fr',
              gap: 12,
              alignItems: 'start',
            }}
          >
            <div
              style={{
                padding: '10px 14px',
                borderRadius: 999,
                background: 'rgba(0,0,0,0.24)',
                color: THEME.yellow,
                fontSize: 16,
                fontWeight: 1000,
                letterSpacing: 1,
              }}
            >
              NATURAL
            </div>
            <div
              style={{
                padding: '10px 14px',
                borderRadius: 16,
                background: 'rgba(255,255,255,0.06)',
                color: 'rgba(248,248,248,0.84)',
                fontSize: 20,
                lineHeight: 1.28,
                fontWeight: 900,
              }}
            >
              {active.id === 'scene'
                ? sentenceVideoMeta.commentPrompt
                : '\u8fd9\u4e2a\u53d8\u4f53\u662f\u52a0\u5206\uff0c\u4f46\u4e0d\u62a2\u4f60\u7b2c\u4e00\u53e5\u4e3b\u7b54\u6848\u3002'}
            </div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
