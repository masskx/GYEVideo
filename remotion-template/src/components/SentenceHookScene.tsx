import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {episodeConfig} from '../data/episodeConfig';
import {sentenceInfo} from '../data/sentencePattern';
import {THEME} from '../theme';
import {secondsToFrames, SENTENCE_TIMELINE} from '../sentenceTimeline';
import {punchZoom, shake, slamIn} from '../utils/motion';

const clamp = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'} as const;

const defaultHook = {
  mainText: '别急着解释',
  subText: sentenceInfo.memoryFormula,
  shockText: '你不是不会说，你是没有句子骨架。',
  flashWords: ['说不出口？', '越解释越乱？', '中文味太重？'],
};

export const SentenceHookScene: React.FC = () => {
  const frame = useCurrentFrame();
  const hook = {...defaultHook, ...(episodeConfig.hook ?? {})};
  const hookStart = 0;
  const hookEnd = secondsToFrames(SENTENCE_TIMELINE.patternStart);
  const flashStart = secondsToFrames(SENTENCE_TIMELINE.hookStart + 0.3);
  const flashEnd = secondsToFrames(SENTENCE_TIMELINE.patternStart - 0.2);
  const opening = slamIn({frame, start: hookStart, fps: SENTENCE_TIMELINE.fps, overshoot: 1.16});
  const openingScale = punchZoom({frame, start: hookStart + 2, intensity: 0.18, duration: 10});
  const globalShake = shake({frame, start: hookStart, duration: 12, intensity: 10});
  const flashOpacity = interpolate(frame, [0, 2, 4, 8], [1, 0.25, 0, 0], clamp);
  const showOpacity = interpolate(frame, [0, 2, hookEnd - 14, hookEnd - 2], [0, 1, 1, 0], clamp);
  const conflictOpacity = interpolate(
    frame,
    [secondsToFrames(1.0), secondsToFrames(1.15), secondsToFrames(2.15), secondsToFrames(2.45)],
    [0, 1, 1, 0],
    clamp,
  );
  const payoffOpacity = interpolate(
    frame,
    [secondsToFrames(2.15), secondsToFrames(2.35), hookEnd - 6, hookEnd - 2],
    [0, 1, 1, 0],
    clamp,
  );

  if (frame > hookEnd) {
    return null;
  }

  const duration = Math.max(1, flashEnd - flashStart);
  const activeFlash = Math.min(
    hook.flashWords.length - 1,
    Math.max(0, Math.floor(((frame - flashStart) / duration) * hook.flashWords.length)),
  );

  return (
    <div style={{position: 'absolute', inset: 0, zIndex: 3, overflow: 'hidden'}}>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(circle at 50% 20%, rgba(255,212,59,0.17), transparent 24%), linear-gradient(180deg, rgba(5,5,5,0.94) 0%, rgba(10,10,10,0.98) 100%)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: flashOpacity,
          background: THEME.yellow,
          mixBlendMode: 'screen',
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: 60,
          top: 72,
          padding: '16px 26px',
          color: THEME.background,
          background: THEME.yellow,
          fontSize: 32,
          fontWeight: 1000,
          borderRadius: 18,
          boxShadow: '0 18px 44px rgba(255, 212, 59, 0.24)',
        }}
      >
        {sentenceInfo.coverBadgeText ?? '句子骨架'}
      </div>
      <div
        style={{
          position: 'absolute',
          left: 70,
          right: 70,
          top: 248,
          opacity: showOpacity,
          transform: `translate(${globalShake.x}px, ${globalShake.y + opening.translateY}px) rotate(${globalShake.rotate}deg) scale(${opening.scale * openingScale})`,
        }}
      >
        <div
          style={{
            color: THEME.yellow,
            fontSize: 156,
            lineHeight: 0.9,
            fontWeight: 1000,
            textAlign: 'center',
            textShadow: '0 0 46px rgba(255, 212, 59, 0.7)',
          }}
        >
          {hook.mainText}
        </div>
      </div>
      <div
        style={{
          position: 'absolute',
          left: 72,
          right: 72,
          top: 680,
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: 18,
          opacity: interpolate(frame, [flashStart - 3, flashStart + 2, flashEnd - 6, flashEnd], [0, 1, 1, 0], clamp),
        }}
      >
        {hook.flashWords.map((word, index) => {
          const isActive = index === activeFlash;
          return (
            <div
              key={`${word}-${index}`}
              style={{
                padding: isActive ? '24px 28px' : '18px 24px',
                borderRadius: 22,
                border: `2px solid ${isActive ? THEME.white : 'rgba(255,212,59,0.34)'}`,
                background: isActive ? THEME.yellow : 'rgba(255,212,59,0.08)',
                color: isActive ? THEME.background : THEME.yellow,
                fontSize: isActive ? 56 : 42,
                lineHeight: 1.05,
                fontWeight: 1000,
                transform: `scale(${isActive ? 1.04 : 1})`,
                boxShadow: isActive ? '0 0 34px rgba(255,212,59,0.34)' : 'none',
                textAlign: 'center',
              }}
            >
              {word}
            </div>
          );
        })}
      </div>
      <div
        style={{
          position: 'absolute',
          left: 110,
          right: 110,
          top: 1260,
          color: THEME.white,
          fontSize: 68,
          lineHeight: 1.08,
          fontWeight: 1000,
          textAlign: 'center',
          opacity: conflictOpacity,
        }}
      >
        {hook.shockText}
      </div>
      <div
        style={{
          position: 'absolute',
          left: 94,
          right: 94,
          top: 1510,
          padding: '22px 30px',
          borderRadius: 30,
          border: '1px solid rgba(255,212,59,0.26)',
          background: 'rgba(8, 8, 8, 0.76)',
          color: THEME.white,
          fontSize: 46,
          lineHeight: 1.2,
          fontWeight: 900,
          textAlign: 'center',
          opacity: payoffOpacity,
          transform: `scale(${punchZoom({frame, start: secondsToFrames(2.2), intensity: 0.08, duration: 10})})`,
        }}
      >
        {hook.subText}
      </div>
      <div
        style={{
          position: 'absolute',
          left: 180,
          right: 180,
          top: 1674,
          padding: '18px 24px',
          borderRadius: 999,
          background: 'rgba(255,212,59,0.10)',
          color: THEME.yellow,
          fontSize: 28,
          lineHeight: 1.2,
          fontWeight: 900,
          textAlign: 'center',
          opacity: payoffOpacity,
        }}
      >
        {sentenceInfo.useCase}
      </div>
    </div>
  );
};
