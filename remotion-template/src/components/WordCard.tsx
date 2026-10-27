import React from 'react';
import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import type {RootWord} from '../data/words';
import {THEME} from '../theme';
import {beatPulse, highlightSweep, punchZoom, shake, slamIn} from '../utils/motion';

const clamp = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'} as const;

type WordCardProps = {
  word: RootWord;
  startFrame: number;
  isActive: boolean;
  isPast: boolean;
  mode: 'focus' | 'grid';
  index?: number;
};

const splitWordByRootChunk = (rawWord: string, rootChunk?: string) => {
  if (!rootChunk) {
    return {prefix: rawWord, chunk: '', suffix: ''};
  }

  const lowerWord = rawWord.toLowerCase();
  const lowerChunk = rootChunk.toLowerCase();
  const matchIndex = lowerWord.indexOf(lowerChunk);

  if (matchIndex === -1) {
    return {prefix: rawWord, chunk: '', suffix: ''};
  }

  return {
    prefix: rawWord.slice(0, matchIndex),
    chunk: rawWord.slice(matchIndex, matchIndex + rootChunk.length),
    suffix: rawWord.slice(matchIndex + rootChunk.length),
  };
};

const HighlightedWord: React.FC<{
  word: RootWord;
  baseColor: string;
  chunkColor: string;
  chunkGlow?: string;
}> = ({word, baseColor, chunkColor, chunkGlow}) => {
  const compatibleWord = word as RootWord & {rootChunk?: string};
  const {prefix, chunk, suffix} = splitWordByRootChunk(compatibleWord.word, compatibleWord.rootChunk);

  return (
    <span>
      <span style={{color: baseColor}}>{prefix}</span>
      {chunk ? (
        <span
          style={{
            color: chunkColor,
            textShadow: chunkGlow ?? 'none',
          }}
        >
          {chunk}
        </span>
      ) : null}
      <span style={{color: baseColor}}>{suffix}</span>
    </span>
  );
};

export const WordCard: React.FC<WordCardProps> = ({
  word,
  startFrame,
  isActive,
  isPast,
  mode,
  index = 0,
}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const enter = slamIn({frame, start: startFrame, fps, overshoot: mode === 'focus' ? 1.12 : 1.04});
  const zoom = punchZoom({frame, start: startFrame + 2, intensity: mode === 'focus' ? 0.11 : 0.04});
  const jolt = shake({frame, start: startFrame + 1, duration: 8, intensity: mode === 'focus' ? 5 : 2});
  const pulse = isActive ? beatPulse({frame, start: startFrame, fps, amount: 0.018}) : 1;
  const sweep = highlightSweep({frame, start: startFrame + 8, duration: 20});
  const baseOpacity = mode === 'focus' ? 1 : isActive ? 1 : isPast ? 0.7 : 0.18;
  const opacity = interpolate(frame, [startFrame - 2, startFrame + 9], [0, baseOpacity], clamp);
  const isLongWord = word.word.length >= 10;
  const focusWordFontSize = word.word.length >= 11 ? 126 : isLongWord ? 134 : 142;
  const phoneticFontSize = isLongWord ? 28 : 32;
  const gridWordFontSize = word.word.length >= 13 ? 21 : word.word.length >= 10 ? 24 : 29;
  const gridMeaningFontSize = word.meaning.length >= 12 ? 16 : 18;

  if (mode === 'focus') {
    return (
      <div
        style={{
          position: 'absolute',
          left: 70,
          right: 70,
          top: 152,
          height: 370,
          opacity: enter.opacity,
          transform: `translate(${jolt.x}px, ${enter.translateY + jolt.y}px) rotate(${jolt.rotate}deg) scale(${enter.scale * zoom * pulse})`,
          transformOrigin: 'center',
        }}
      >
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            fontSize: focusWordFontSize,
            lineHeight: 0.92,
            fontWeight: 1000,
            textShadow: '0 0 38px rgba(255, 212, 59, 0.7)',
          }}
        >
          <HighlightedWord
            word={word}
            baseColor={THEME.yellow}
            chunkColor={THEME.white}
            chunkGlow="0 0 24px rgba(248, 248, 248, 0.45)"
          />
          <div
            style={{
              position: 'absolute',
              left: 8,
              right: 8,
              bottom: -6,
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
            position: 'absolute',
            left: 8,
            top: 126,
            color: THEME.gray,
            fontSize: phoneticFontSize,
            fontWeight: 800,
            maxWidth: 760,
          }}
        >
          {word.phonetic}
        </div>
        <div
          style={{
            position: 'absolute',
            left: 6,
            top: 184,
            color: THEME.white,
            fontSize: 58,
            lineHeight: 1.06,
            fontWeight: 950,
          }}
        >
          <span style={{color: THEME.yellow, marginRight: 18}}>{word.partOfSpeech}</span>
          {word.meaning}
        </div>
        <div
          style={{
            position: 'absolute',
            left: 6,
            top: 278,
            width: 720,
            height: 2,
            background: `linear-gradient(90deg, ${THEME.yellow}, transparent)`,
          }}
        />
        <div
          style={{
            position: 'absolute',
            right: 0,
            bottom: 10,
            color: 'rgba(248, 248, 248, 0.16)',
            fontSize: 120,
            lineHeight: 1,
            fontWeight: 1000,
          }}
        >
          0{index + 1}
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        boxSizing: 'border-box',
        overflow: 'hidden',
        padding: '13px 14px 12px',
        borderRadius: 6,
        border: `1px solid ${isActive ? 'rgba(255, 212, 59, 0.9)' : 'rgba(248, 248, 248, 0.12)'}`,
        background: isActive
          ? 'linear-gradient(135deg, rgba(255, 212, 59, 0.18), rgba(255, 255, 255, 0.04))'
          : 'rgba(255, 255, 255, 0.035)',
        boxShadow: isActive ? '0 0 26px rgba(255, 212, 59, 0.24)' : 'none',
        opacity,
        transform: `translateY(${enter.translateY}px) scale(${enter.scale * pulse})`,
      }}
    >
      <div style={{fontSize: gridWordFontSize, lineHeight: 1, fontWeight: 1000, whiteSpace: 'nowrap'}}>
        <HighlightedWord word={word} baseColor={THEME.white} chunkColor={THEME.yellow} />
      </div>
      <div style={{marginTop: 7, color: THEME.gray, fontSize: 12, fontWeight: 800, whiteSpace: 'nowrap', overflow: 'hidden'}}>
        {word.phonetic} <span style={{color: THEME.white}}>{word.partOfSpeech}</span>
      </div>
      <div style={{marginTop: 8, color: THEME.white, fontSize: gridMeaningFontSize, lineHeight: 1.12, fontWeight: 900}}>
        {word.meaning}
      </div>
    </div>
  );
};
