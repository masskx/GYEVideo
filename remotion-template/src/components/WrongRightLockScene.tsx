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

const getLockHeadline = (wrong: string) => {
  if (wrong.includes('people mountain people sea')) {
    return pickBySeed(["Don't translate the idiom.\nSay the scene.", "Don't literal-translate.\nDescribe the crowd.", "Keep the image.\nDrop the literal words."]);
  }

  return pickBySeed([
    "Don't say the wrong line.\nSay the natural one.",
    'Drop the textbook version.\nKeep the spoken one.',
    'Not the direct translation.\nUse the real-life line.',
  ]);
};

const getWrongFootnote = (wrong: string) => {
  if (wrong.includes('people mountain people sea')) {
    return 'Literal Chinglish translation';
  }

  return 'Literal or awkward English';
};

const getRightFootnote = (wrong: string) => {
  if (wrong.includes('people mountain people sea')) {
    return 'Natural crowd description';
  }

  return 'Natural spoken English';
};

const pickBySeed = <T,>(values: T[]) => values[sentenceVideoMeta.variantSeed % values.length];

export const WrongRightLockScene: React.FC = () => {
  const frame = useCurrentFrame();
  const active = getActiveVoiceSegment(frame);
  if (!active || (active.id !== 'memory-lock' && active.id !== 'lock')) {
    return null;
  }

  const start = secondsToFrames(SENTENCE_TIMELINE.lockStart);
  const end = secondsToFrames(SENTENCE_TIMELINE.outroStart);
  const opacity = interpolate(frame, [start - 3, start + 4, end - 4, end], [0, 1, 1, 0], clamp);
  const wrong = sentenceInfo.wrongExpression?.text ?? sentenceInfo.pattern;
  const right = sentenceInfo.rescueExpression?.en ?? sentenceInfo.pattern;
  const headline = getLockHeadline(wrong);
  const wrongFontSize = wrong.length > 28 ? 38 : 48;
  const rightFontSize = right.length > 28 ? 50 : 62;
  const endingShell = sentenceVideoMeta.endingShell;

  const wrongBlock = (
    <div
      style={{
        borderRadius: 24,
        padding: '22px 24px',
        background: 'linear-gradient(180deg, rgba(255,77,77,0.14), rgba(28,8,8,0.94))',
        border: `2px solid ${THEME.red}`,
        boxShadow: '0 24px 48px rgba(0,0,0,0.24)',
      }}
    >
      <div style={{color: THEME.red, fontSize: 22, fontWeight: 1000}}>WRONG</div>
      <div style={{marginTop: 12, color: THEME.white, fontSize: wrongFontSize, lineHeight: 1.1, fontWeight: 1000}}>{wrong}</div>
      <div style={{marginTop: 14, color: 'rgba(255,255,255,0.64)', fontSize: 22, lineHeight: 1.2, fontWeight: 800}}>
        {getWrongFootnote(wrong)}
      </div>
    </div>
  );

  const rightBlock = (
    <div
      style={{
        borderRadius: 30,
        padding: '34px 30px',
        background: 'linear-gradient(180deg, rgba(255,212,59,0.16), rgba(34,28,6,0.94))',
        border: `2px solid ${THEME.yellow}`,
        boxShadow: '0 24px 48px rgba(0,0,0,0.28)',
      }}
    >
      <div style={{color: THEME.yellow, fontSize: 22, fontWeight: 1000}}>RIGHT</div>
      <div style={{marginTop: 14, color: THEME.white, fontSize: rightFontSize, lineHeight: 1.04, fontWeight: 1000}}>{right}</div>
      <div style={{marginTop: 14, color: 'rgba(255,255,255,0.72)', fontSize: 22, lineHeight: 1.2, fontWeight: 800}}>
        {getRightFootnote(wrong)}
      </div>
      <div
        style={{
          marginTop: 18,
          display: 'inline-flex',
          padding: '12px 16px',
          borderRadius: 18,
          background: 'rgba(0,0,0,0.24)',
          color: THEME.white,
          fontSize: 22,
          fontWeight: 900,
        }}
      >
        {sentenceVideoMeta.commentPrompt}
      </div>
    </div>
  );

  const renderEndingShell = () => {
    if (endingShell === 'vertical-lock') {
      return (
        <div style={{marginTop: 34, display: 'grid', gap: 18}}>
          {wrongBlock}
          {rightBlock}
        </div>
      );
    }

    if (endingShell === 'checklist-punch') {
      return (
        <div
          style={{
            marginTop: 34,
            display: 'grid',
            gridTemplateColumns: '0.92fr 1.08fr',
            gap: 24,
            alignItems: 'start',
          }}
        >
          <div style={{display: 'grid', gap: 16}}>
            {wrongBlock}
            <div
              style={{
                borderRadius: 22,
                padding: '18px 20px',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.10)',
              color: THEME.white,
              fontSize: 22,
              lineHeight: 1.3,
              fontWeight: 900,
            }}
          >
              <div>{'1. \u522b\u9010\u5b57\u786c\u642c'}</div>
              <div>{'2. \u5148\u60f3\u573a\u666f'}</div>
              <div>{`3. \u5148\u8bf4 ${sentenceVideoMeta.heroRescueLine}`}</div>
            </div>
          </div>
          {rightBlock}
        </div>
      );
    }

    return (
      <div
        style={{
          marginTop: 34,
          display: 'grid',
          gridTemplateColumns: '0.72fr 1.28fr',
          gap: 24,
          alignItems: 'center',
        }}
      >
        {wrongBlock}
        {rightBlock}
      </div>
    );
  };

  return (
    <AbsoluteFill
      style={{
        opacity,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: `120px 72px ${PLATFORM_UI_SAFE_BOTTOM}px`,
      }}
    >
      <AnimatedAnimalIcon
        id={endingShell === 'checklist-punch' ? 'cute_chick' : 'cute_dog'}
        x={endingShell === 'vertical-lock' ? 118 : 812}
        y={endingShell === 'vertical-lock' ? 284 : 316}
        size={132}
        startFrame={start}
        durationFrames={Math.max(20, end - start)}
        variant={endingShell === 'checklist-punch' ? 'bounce' : 'float'}
        opacity={0.88}
      />
      <MinimalLineArtCard
        x={42}
        y={118}
        width={280}
        height={210}
        rotate={-10}
        opacity={0.78}
        variant={wrong.includes('people mountain people sea') ? 'crowd-wave' : 'warning-siren'}
        stylePreset={sentenceVideoMeta.lineArtStyle}
        accent="rgba(255,77,77,0.12)"
      />
      <MinimalLineArtCard
        x={790}
        y={130}
        width={238}
        height={182}
        rotate={8}
        opacity={0.64}
        variant="arrow-fix"
        stylePreset={sentenceVideoMeta.lineArtStyle}
        accent="rgba(255,212,59,0.14)"
      />
      <div style={{width: 950}}>
        <div
          style={{
            color: THEME.gray,
            fontSize: 28,
            fontWeight: 1000,
            letterSpacing: 2,
            textAlign: 'center',
          }}
        >
          {pickBySeed(['FINAL LOCK', 'SAVE THIS', 'LAST CHECK'])}
        </div>
        <div
          style={{
            marginTop: 18,
            color: THEME.white,
            fontSize: 56,
            lineHeight: 1.08,
            fontWeight: 1000,
            textAlign: 'center',
            whiteSpace: 'pre-line',
          }}
        >
          {headline}
        </div>
        {renderEndingShell()}
      </div>
    </AbsoluteFill>
  );
};
