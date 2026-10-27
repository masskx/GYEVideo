import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {AnimatedAnimalIcon} from './AnimatedAnimalIcon';
import {MinimalLineArtCard} from './MinimalLineArtCard';
import {sentenceInfo} from '../data/sentencePattern';
import {SENTENCE_TIMELINE, secondsToFrames} from '../sentenceTimeline';
import {sentenceVideoMeta} from '../sentenceVideoMeta';
import {THEME} from '../theme';

const clamp = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'} as const;

const clean = (value: string | undefined) => (value ?? '').replace(/\s+/g, ' ').trim();

const getTagline = () => {
  const rescue = clean(sentenceInfo.rescueExpression?.en || sentenceInfo.pattern || sentenceVideoMeta.earwormLine);
  return rescue || 'Say it like a real person.';
};

const getCloser = () => {
  const comment = clean(sentenceVideoMeta.commentPrompt);
  if (comment) {
    return comment;
  }

  const note = clean(sentenceVideoMeta.creatorNote);
  if (note) {
    return note;
  }

  return sentenceVideoMeta.contentType === 'chinglish-trap'
    ? '评论区丢一句你最容易脱口而出的中式直翻。'
    : '下次别硬解释，直接把这句拿去用。';
};

const getOutroShellWords = () => {
  if (sentenceVideoMeta.contentType === 'chinglish-trap') {
    return ['SAVE', 'THE', 'REAL', 'LINE'];
  }

  return ['USE', 'THIS', 'NEXT', 'TIME'];
};

export const CreatorOutroScene: React.FC = () => {
  const frame = useCurrentFrame();
  const start = secondsToFrames(SENTENCE_TIMELINE.outroStart);
  const end = secondsToFrames(SENTENCE_TIMELINE.durationSeconds);

  if (frame < start || frame > end) {
    return null;
  }

  const opacity = interpolate(frame, [start, start + 5, end - 3, end], [0, 1, 1, 0], clamp);
  const translateY = interpolate(frame, [start, start + 5], [42, 0], clamp);

  return (
    <AbsoluteFill
      style={{
        opacity,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingTop: 178,
        transform: `translateY(${translateY}px)`,
        pointerEvents: 'none',
      }}
    >
      <div
        style={{
          position: 'absolute',
          left: 78,
          top: 98,
          padding: '12px 16px',
          borderRadius: 999,
          background: 'rgba(255,212,59,0.12)',
          border: '1px solid rgba(255,212,59,0.18)',
          color: THEME.yellow,
          fontSize: 18,
          fontWeight: 1000,
          letterSpacing: 1,
        }}
      >
        CREATOR LOCK
      </div>
      <div
        style={{
          position: 'absolute',
          right: 84,
          top: 90,
          color: 'rgba(255,255,255,0.10)',
          fontSize: 72,
          lineHeight: 0.92,
          fontWeight: 1000,
          textAlign: 'right',
        }}
      >
        {getOutroShellWords().map((word) => (
          <div key={word}>{word}</div>
        ))}
      </div>
      <AnimatedAnimalIcon
        id={sentenceVideoMeta.contentType === 'chinglish-trap' ? 'cute_bird' : 'cute_rabbit'}
        x={830}
        y={214}
        size={122}
        startFrame={start}
        durationFrames={Math.max(12, end - start)}
        variant={sentenceVideoMeta.contentType === 'chinglish-trap' ? 'bounce' : 'float'}
        opacity={0.9}
      />
      <MinimalLineArtCard
        x={94}
        y={188}
        width={264}
        height={198}
        rotate={-10}
        opacity={0.82}
        variant={sentenceVideoMeta.contentType === 'chinglish-trap' ? 'spark-quote' : 'speech-burst'}
        stylePreset={sentenceVideoMeta.lineArtStyle}
        accent="rgba(255,212,59,0.14)"
      />
      <div
        style={{
          width: 870,
          padding: '34px 34px 28px',
          borderRadius: 30,
          background: 'linear-gradient(180deg, rgba(10,10,10,0.92), rgba(6,6,6,0.96))',
          border: '1px solid rgba(255,255,255,0.08)',
          boxShadow: '0 28px 54px rgba(0,0,0,0.38)',
        }}
      >
        <div style={{color: THEME.gray, fontSize: 22, fontWeight: 1000, letterSpacing: 2}}>NEXT TIME SAY</div>
        <div
          style={{
            marginTop: 14,
            color: THEME.yellow,
            fontSize: 62,
            lineHeight: 1.04,
            fontWeight: 1000,
            textShadow: '0 0 24px rgba(255,212,59,0.22)',
          }}
        >
          {getTagline()}
        </div>
        <div
          style={{
            marginTop: 14,
            display: 'inline-flex',
            padding: '10px 14px',
            borderRadius: 999,
            background: 'rgba(255,255,255,0.06)',
            color: THEME.white,
            fontSize: 16,
            fontWeight: 1000,
            letterSpacing: 1,
          }}
        >
          {sentenceVideoMeta.heroRescueLine}
        </div>
        <div
          style={{
            marginTop: 18,
            color: THEME.white,
            fontSize: 28,
            lineHeight: 1.24,
            fontWeight: 900,
            maxWidth: 700,
          }}
        >
          {getCloser()}
        </div>
        <div
          style={{
            marginTop: 18,
            display: 'inline-flex',
            padding: '8px 12px',
            borderRadius: 999,
            background: 'rgba(255,255,255,0.05)',
            color: 'rgba(248,248,248,0.64)',
            fontSize: 15,
            fontWeight: 900,
            letterSpacing: 1,
          }}
        >
          {sentenceVideoMeta.socialProof}
        </div>
      </div>
    </AbsoluteFill>
  );
};
