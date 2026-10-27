import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {AnimatedAnimalIcon} from './AnimatedAnimalIcon';
import {MinimalLineArtCard} from './MinimalLineArtCard';
import {getActiveVoiceSegment, SENTENCE_TIMELINE, secondsToFrames} from '../sentenceTimeline';
import {sentenceVideoMeta} from '../sentenceVideoMeta';
import {THEME} from '../theme';

const clamp = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'} as const;

const getBadgeText = (segmentId: string) => {
  if (segmentId === 'trap-1') {
    return ['CHINGLISH TRAP', 'DIRECT-TRANSLATION PAIN', 'NATIVE CHECK'][sentenceVideoMeta.variantSeed % 3];
  }

  if (segmentId === 'trap-2') return 'CLASSIC CHINGLISH';
  if (segmentId === 'slap') return 'SOCIAL PAIN';
  return 'CHINGLISH TRAP';
};

const getSupportLine = (segmentId: string) => {
  if (segmentId === 'trap-1') return sentenceVideoMeta.socialProof;
  if (segmentId === 'trap-2') return sentenceVideoMeta.creatorNote;
  if (segmentId === 'slap') return sentenceVideoMeta.naturalnessNote || sentenceVideoMeta.chinesePainPoint;
  return '';
};

const getFontSize = (text: string, segmentId: string) => {
  if (segmentId === 'trap-1') return text.length > 28 ? 60 : 74;
  if (text.length > 24) return 62;
  if (text.length > 20) return 70;
  return 88;
};

const getShellHeadline = (openingShell: string) => {
  if (openingShell === 'accusation-board') {
    return ['YOU SAID THIS?', 'NATIVE? NOPE', 'TOO TEXTBOOK'][sentenceVideoMeta.variantSeed % 3];
  }

  if (openingShell === 'global-split') {
    return ['LOCAL NOT GLOBAL', 'REGION ONLY', 'DONT EXPORT THIS'][sentenceVideoMeta.variantSeed % 3];
  }

  return ['NO FILTER', 'DONT DIRECT TRANSLATE', 'SAY IT NATURAL'][sentenceVideoMeta.variantSeed % 3];
};

const getShellChip = (openingShell: string) => {
  if (openingShell === 'accusation-board') {
    return 'CAUGHT';
  }

  if (openingShell === 'global-split') {
    return 'LOCAL ONLY';
  }

  return 'STOP SCROLL';
};

const getSideChip = (openingShell: string) => {
  if (openingShell === 'global-split') {
    return 'NOT GLOBAL';
  }

  if (openingShell === 'accusation-board') {
    return 'SOUNDS OFF';
  }

  return 'TOO LITERAL';
};

export const ChinglishTrapOpeningScene: React.FC = () => {
  const frame = useCurrentFrame();
  const active = getActiveVoiceSegment(frame);
  const isKineticOpening = active && ['trap-1', 'trap-2', 'slap'].includes(active.id);
  const isLegacyOpening = active?.id === 'cold-open-scene';

  if (!active || (!isKineticOpening && !isLegacyOpening)) {
    return null;
  }

  const start = secondsToFrames(SENTENCE_TIMELINE.openingStart);
  const end = secondsToFrames(SENTENCE_TIMELINE.conflictStart);
  const opacity = interpolate(frame, [start - 3, start + 4, end - 4, end], [0, 1, 1, 0], clamp);
  const scale = interpolate(frame, [start, start + 5], [0.88, 1], clamp);
  const translateY = interpolate(frame, [start, start + 6], [44, 0], clamp);
  const badgeText = getBadgeText(active.id);
  const supportLine = getSupportLine(active.id);
  const mainLine = active.text;
  const accentColor = active.id === 'slap' ? THEME.red : THEME.yellow;
  const supportFontSize = supportLine.length > 26 ? 22 : 26;
  const sideOffset = interpolate(frame, [start, start + 8], [-80, 0], clamp);
  const noFilterOffset = interpolate(frame, [start, start + 8], [60, 0], clamp);
  const openingShell = sentenceVideoMeta.openingShell;
  const shellDuration = Math.max(20, end - start);
  const lineArtVariant =
    openingShell === 'global-split'
      ? 'crowd-wave'
      : openingShell === 'accusation-board'
        ? 'speech-burst'
        : 'warning-siren';

  const renderOpeningShell = () => {
    if (openingShell === 'accusation-board') {
      return (
        <>
          <AnimatedAnimalIcon
            id="cute_raccoon"
            x={102}
            y={220}
            size={164}
            startFrame={start}
            durationFrames={shellDuration}
            variant="reaction"
            opacity={0.96}
          />
          <div
            style={{
              position: 'absolute',
              left: 98,
              top: 382,
              padding: '10px 16px',
              borderRadius: 999,
              background: 'rgba(255,77,77,0.12)',
              border: `1px solid rgba(255,77,77,0.32)`,
              color: THEME.red,
              fontSize: 16,
              fontWeight: 1000,
              letterSpacing: 1,
            }}
          >
            {getShellChip(openingShell)}
          </div>
          <div
            style={{
              position: 'absolute',
              right: 90,
              top: 170,
              width: 250,
              color: 'rgba(255,255,255,0.18)',
              fontSize: 84,
              fontWeight: 1000,
              lineHeight: 0.9,
              textAlign: 'right',
              transform: `translateX(${noFilterOffset}px)`,
            }}
          >
            {getShellHeadline(openingShell).split(' ').map((word) => (
              <div key={word}>{word}</div>
            ))}
          </div>
        </>
      );
    }

    if (openingShell === 'global-split') {
      return (
        <>
          <AnimatedAnimalIcon
            id="cute_frog"
            x={82}
            y={212}
            size={162}
            startFrame={start}
            durationFrames={shellDuration}
            variant="shake"
            opacity={0.94}
          />
          <div
            style={{
              position: 'absolute',
              left: 88,
              top: 376,
              padding: '10px 16px',
              borderRadius: 999,
              background: 'rgba(255,77,77,0.12)',
              border: `1px solid rgba(255,77,77,0.28)`,
              color: THEME.white,
              fontSize: 16,
              fontWeight: 1000,
              letterSpacing: 1,
            }}
          >
            {getShellChip(openingShell)}
          </div>
          <div
            style={{
              position: 'absolute',
              right: 84,
              top: 210,
              color: 'rgba(255,212,59,0.22)',
              fontSize: 90,
              fontWeight: 1000,
              lineHeight: 0.88,
              textAlign: 'right',
            }}
          >
            {getShellHeadline(openingShell).split(' ').map((word) => (
              <div key={word}>{word}</div>
            ))}
          </div>
        </>
      );
    }

    return (
      <>
        <AnimatedAnimalIcon
          id="cute_cat_003"
          x={84}
          y={206}
          size={154}
          startFrame={start}
          durationFrames={shellDuration}
          variant="reaction"
          opacity={0.92}
        />
        <div
          style={{
            position: 'absolute',
            top: 180,
            left: 72 + sideOffset,
            padding: '16px 18px',
            borderRadius: 20,
            background: 'rgba(255,77,77,0.14)',
            border: `2px solid ${THEME.red}`,
            color: THEME.red,
            fontSize: 24,
            fontWeight: 1000,
            letterSpacing: 2,
            transform: 'rotate(-8deg)',
            boxShadow: '0 0 34px rgba(255,77,77,0.30)',
          }}
        >
          {getShellChip(openingShell)}
        </div>
        <div
          style={{
            position: 'absolute',
            top: 250,
            right: 84,
            color: 'rgba(255,255,255,0.16)',
            fontSize: 102,
            fontWeight: 1000,
            letterSpacing: 2,
            lineHeight: 0.9,
            textAlign: 'right',
            transform: `translateX(${noFilterOffset}px)`,
          }}
        >
          {getShellHeadline(openingShell).split(' ').map((word) => (
            <div key={word}>{word}</div>
          ))}
        </div>
      </>
    );
  };

  return (
    <AbsoluteFill
      style={{
        opacity,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 80,
        transform: `translateY(${translateY}px) scale(${scale})`,
      }}
    >
      {renderOpeningShell()}
      <MinimalLineArtCard
        x={48}
        y={88}
        width={320}
        height={240}
        rotate={-9}
        opacity={0.92}
        variant={lineArtVariant}
        stylePreset={sentenceVideoMeta.lineArtStyle}
        accent={active.id === 'slap' ? 'rgba(255,77,77,0.16)' : 'rgba(255,212,59,0.18)'}
      />
      <MinimalLineArtCard
        x={754}
        y={74}
        width={250}
        height={188}
        rotate={11}
        opacity={0.74}
        variant={openingShell === 'global-split' ? 'mail-tail' : 'scribble-face'}
        stylePreset={sentenceVideoMeta.lineArtStyle}
        accent="rgba(255,255,255,0.08)"
      />
      <AnimatedAnimalIcon
        id={openingShell === 'global-split' ? 'cute_bird' : 'cute_duck'}
        x={790}
        y={416}
        size={120}
        startFrame={start + 4}
        durationFrames={Math.max(16, shellDuration - 4)}
        variant={openingShell === 'global-split' ? 'peek' : 'bounce'}
        opacity={0.86}
      />
      <div
        style={{
          position: 'absolute',
          right: 112,
          top: 548,
          padding: '8px 14px',
          borderRadius: 999,
          background: active.id === 'slap' ? 'rgba(255,77,77,0.12)' : 'rgba(255,212,59,0.12)',
          color: active.id === 'slap' ? THEME.red : THEME.yellow,
          fontSize: 16,
          fontWeight: 1000,
          letterSpacing: 1,
        }}
      >
        {getSideChip(openingShell)}
      </div>
      <div
        style={{
          position: 'relative',
          minWidth: 920,
          maxWidth: 960,
          padding: '28px 24px 24px',
          color: THEME.white,
          textAlign: 'center',
          zIndex: 3,
        }}
      >
        <div style={{color: accentColor, fontSize: 24, fontWeight: 1000, letterSpacing: 2}}>{badgeText}</div>
        <div
          style={{
            marginTop: 18,
            fontSize: getFontSize(mainLine, active.id),
            lineHeight: 1.08,
            fontWeight: 1000,
            textShadow:
              active.id === 'slap' ? '0 0 20px rgba(255,77,77,0.28)' : '0 0 20px rgba(255,212,59,0.22)',
          }}
        >
          {mainLine}
        </div>
        {active.id !== 'slap' ? (
          <div
            style={{
              position: 'absolute',
              left: mainLine.length > 20 ? 86 : 110,
              top: 94,
              color: 'rgba(255,77,77,0.96)',
              fontSize: mainLine.length > 20 ? 124 : 140,
              fontWeight: 1000,
              transform: `rotate(-14deg) scale(${interpolate(frame, [start + 2, start + 6], [0.6, 1], clamp)})`,
              opacity: interpolate(frame, [start + 1, start + 4], [0, 0.84], clamp),
              textShadow: '0 0 26px rgba(255,77,77,0.28)',
            }}
          >
            X
          </div>
        ) : null}
        {supportLine && active.id !== 'trap-2' ? (
          <div
            style={{
              marginTop: 18,
              color: 'rgba(248,248,248,0.80)',
              fontSize: supportFontSize,
              lineHeight: 1.18,
              fontWeight: 900,
              maxWidth: 760,
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            {supportLine}
          </div>
        ) : null}
        <div
          style={{
            marginTop: 18,
            display: 'inline-flex',
            padding: '10px 16px',
            borderRadius: 999,
            background: active.id === 'slap' ? 'rgba(255,77,77,0.12)' : 'rgba(255,212,59,0.12)',
            color: accentColor,
            fontSize: 20,
            fontWeight: 1000,
            letterSpacing: 1,
          }}
        >
          {sentenceVideoMeta.creatorNote}
        </div>
      </div>
    </AbsoluteFill>
  );
};
