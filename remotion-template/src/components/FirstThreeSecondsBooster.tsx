import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {sentenceInfo} from '../data/sentencePattern';
import {SENTENCE_TIMELINE, secondsToFrames} from '../sentenceTimeline';
import {sentenceVideoMeta} from '../sentenceVideoMeta';
import {THEME} from '../theme';

const clamp = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'} as const;

const clean = (value: string | undefined) => (value ?? '').replace(/\s+/g, ' ').trim();

const shorten = (value: string | undefined, limit: number) => {
  const text = clean(value);
  if (!text) {
    return '';
  }

  return text.length > limit ? `${text.slice(0, limit)}...` : text;
};

const pickBySeed = <T,>(values: T[]) => values[sentenceVideoMeta.variantSeed % values.length];

const getInterruptionText = () => {
  if (sentenceVideoMeta.contentType === 'chinglish-trap') {
    return pickBySeed(['\u5148\u522b\u76f4\u8bf4', '\u5148\u522b\u76f4\u7ffb', '\u5148\u522b\u8131\u53e3\u800c\u51fa']);
  }

  if (sentenceVideoMeta.contentType === 'chat-rescue') {
    return pickBySeed(['\u5148\u522b\u8bf4\u6ee1', '\u5148\u522b\u786c\u9876', '\u5148\u522b\u60f3\u592a\u6b63\u786e']);
  }

  return '\u8fd9\u53e5\u522b\u786c\u4e0a';
};

const getFlashWords = () => {
  if (sentenceVideoMeta.contentType === 'chinglish-trap') {
    return pickBySeed([
      ['\u592a\u76f4\u7ffb', '\u4f1a\u9732\u9985'],
      ['\u50cf\u6a21\u677f', '\u4e0d\u5730\u9053'],
      ['\u4e2d\u6587\u8111', '\u82f1\u6587\u75db'],
    ]);
  }

  if (sentenceVideoMeta.contentType === 'chat-rescue') {
    return pickBySeed([
      ['\u592a\u51b2\u4eba', '\u5173\u7cfb\u51b7'],
      ['\u592a\u7528\u529b', '\u50cf\u5728\u602a'],
      ['\u4f1a\u5c34\u5c2c', '\u4e0d\u81ea\u7136'],
    ]);
  }

  return ['\u592a\u751f\u786c', '\u522b\u76f4\u7ffb'];
};

const getMemoryFormula = () => shorten(sentenceInfo.memoryFormula || sentenceVideoMeta.naturalnessNote, 18);

export const FirstThreeSecondsBooster: React.FC = () => {
  const frame = useCurrentFrame();
  const start = secondsToFrames(SENTENCE_TIMELINE.openingStart);
  const end = secondsToFrames(Math.min(SENTENCE_TIMELINE.openingStart + 3, SENTENCE_TIMELINE.durationSeconds));

  if (frame < start || frame > end) {
    return null;
  }

  const opacity = interpolate(frame, [start, start + 4, end - 4, end], [0, 1, 1, 0], clamp);
  const interruptionScale = interpolate(frame, [start, start + 4], [0.78, 1], clamp);
  const flashWords = getFlashWords();
  const formula = getMemoryFormula();

  return (
    <AbsoluteFill style={{opacity, pointerEvents: 'none'}}>
      <div
        style={{
          position: 'absolute',
          left: 78,
          top: 108,
          padding: '14px 20px',
          borderRadius: 22,
          background: 'rgba(255,77,77,0.16)',
          border: `2px solid ${THEME.red}`,
          color: THEME.white,
          fontSize: 56,
          lineHeight: 1,
          fontWeight: 1000,
          letterSpacing: 2,
          transform: `scale(${interruptionScale}) rotate(-5deg)`,
          boxShadow: '0 0 28px rgba(255,77,77,0.24)',
        }}
      >
        {getInterruptionText()}
      </div>
      <div
        style={{
          position: 'absolute',
          left: 92,
          right: 92,
          top: 226,
          display: 'flex',
          gap: 14,
          justifyContent: 'center',
        }}
      >
        {flashWords.map((word, index) => {
          const localOpacity = interpolate(frame, [start + index * 4, start + index * 4 + 4], [0.2, 1], clamp);
          return (
            <div
              key={word}
              style={{
                padding: '10px 16px',
                borderRadius: 999,
                background: 'rgba(10,10,10,0.54)',
                color: index === 1 ? THEME.red : THEME.white,
                fontSize: 20,
                fontWeight: 1000,
                opacity: localOpacity,
                transform: `translateY(${interpolate(frame, [start + index * 4, start + index * 4 + 4], [12, 0], clamp)}px)`,
              }}
            >
              {word}
            </div>
          );
        })}
      </div>
      {formula ? (
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: 294,
            transform: `translateX(-50%) scale(${interpolate(frame, [start + 8, start + 14], [0.84, 1], clamp)})`,
            padding: '10px 16px',
            borderRadius: 999,
            background: 'rgba(255,212,59,0.14)',
            border: '1px solid rgba(255,212,59,0.22)',
            color: THEME.yellow,
            fontSize: 18,
            lineHeight: 1.1,
            fontWeight: 1000,
            whiteSpace: 'nowrap',
          }}
        >
          {formula}
        </div>
      ) : null}
    </AbsoluteFill>
  );
};
