import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {episodeConfig, type HookConfig, type HookType} from '../data/episodeConfig';
import {generatedVoiceTimeline} from '../data/generatedVoiceTimeline';
import {rootInfo} from '../data/words';
import {THEME} from '../theme';
import {secondsToFrames, TIMELINE} from '../timeline';
import {punchZoom, shake} from '../utils/motion';

const clamp = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'} as const;
const TAU = Math.PI * 2;

const DEFAULT_HOOK: HookConfig = {
  type: 'misconception',
  mainText: '别再硬背单词了',
  subText: '抓住词根，一组词一起记',
  shockText: '这些词，其实都藏着同一个词根',
  flashWords: ['reject', 'project', 'inject', 'object', 'subject'],
  rootText: '-ject',
  tone: 'urgent',
};

const hookBadge: Record<HookType, string> = {
  misconception: '反常识',
  stop_hard_memorizing: '停止硬背',
  three_second_challenge: '3秒挑战',
  mistake_correction: '纠错',
  exam_panic: '考试救命',
  word_flash: '单词爆闪',
  sentence_conflict: '句型误会',
  emotion_release: '情绪表达',
  speaking_upgrade: '表达升级',
};

const getHook = () => ({...DEFAULT_HOOK, ...(episodeConfig.hook ?? {})});

const easeOutCubic = (value: number) => 1 - Math.pow(1 - value, 3);
const phaseOpacity = (frame: number, start: number, end: number) =>
  interpolate(frame, [start - 3, start + 5, end - 6, end], [0, 1, 1, 0], clamp);

const getTimelineText = (id: string, fallback: string) =>
  generatedVoiceTimeline.find((segment) => segment.id === id)?.text ?? fallback;

const measureBubbleWidth = (word: string, isActive: boolean) =>
  Math.min(292, Math.max(154, Math.round(word.length * (isActive ? 23 : 19) + (isActive ? 72 : 58))));

const getDistributedReveal = (startFrame: number, endFrame: number, index: number, total: number) => {
  const duration = Math.max(1, endFrame - startFrame);
  const slot = duration / Math.max(1, total);
  return {
    start: startFrame + index * slot + Math.min(8, slot * 0.28),
    slot,
    duration: Math.min(26, Math.max(14, slot * 0.78)),
  };
};

const getActiveRevealIndex = (frame: number, startFrame: number, endFrame: number, total: number) => {
  let active = 0;

  for (let index = 0; index < total; index++) {
    const reveal = getDistributedReveal(startFrame, endFrame, index, total);
    if (frame >= reveal.start + reveal.duration * 0.62) {
      active = index;
    }
  }

  return active;
};

const FlashWords: React.FC<{
  words: string[];
  frame: number;
  startFrame: number;
  endFrame: number;
  centerLabel: string;
}> = ({words, frame, startFrame, endFrame, centerLabel}) => {
  const duration = Math.max(1, endFrame - startFrame);
  const visibleWords = words.slice(0, 5);
  const activeIndex = getActiveRevealIndex(frame, startFrame, endFrame, visibleWords.length);
  const activeWord = visibleWords[activeIndex] ?? visibleWords[0] ?? '';
  const currentRotation = interpolate(frame, [startFrame, endFrame], [-TAU * 0.03, TAU * 0.18], clamp);
  const opacity = phaseOpacity(frame, startFrame, endFrame);
  const orbitCenter = {x: 480, y: 278};
  const orbitRadiusX = 286;
  const orbitRadiusY = 146;
  const activeReveal = getDistributedReveal(startFrame, endFrame, activeIndex, visibleWords.length);
  const centerPulse = punchZoom({frame, start: activeReveal.start, intensity: 0.12, duration: 12});

  return (
    <div style={{position: 'absolute', inset: 0, opacity}}>
      <svg width="960" height="720" style={{position: 'absolute', inset: 0}}>
        <defs>
          <filter id="orbitGlow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <ellipse
          cx={orbitCenter.x}
          cy={orbitCenter.y}
          rx={orbitRadiusX}
          ry={orbitRadiusY}
          fill="none"
          stroke="rgba(255, 212, 59, 0.2)"
          strokeWidth="2"
          strokeDasharray="14 12"
          filter="url(#orbitGlow)"
        />
        <ellipse
          cx={orbitCenter.x}
          cy={orbitCenter.y}
          rx={orbitRadiusX - 28}
          ry={orbitRadiusY - 18}
          fill="none"
          stroke="rgba(255, 255, 255, 0.08)"
          strokeWidth="1"
        />
      </svg>

      <div
        style={{
          position: 'absolute',
          left: orbitCenter.x - 90,
          top: orbitCenter.y - 60,
          width: 180,
          height: 120,
          borderRadius: 999,
          border: '2px solid rgba(255, 212, 59, 0.6)',
          background: 'radial-gradient(circle, rgba(255, 212, 59, 0.2), rgba(5, 5, 5, 0.92) 72%)',
          boxShadow: '0 0 36px rgba(255, 212, 59, 0.2)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{color: THEME.gray, fontSize: 18, fontWeight: 900, letterSpacing: 1}}>
          SAME FAMILY
        </div>
        <div
          style={{
            marginTop: 4,
            color: THEME.yellow,
            fontSize: 38,
            fontWeight: 1000,
            lineHeight: 1,
            textShadow: '0 0 26px rgba(255, 212, 59, 0.5)',
            transform: `scale(${centerPulse})`,
          }}
        >
          3秒挑战
        </div>
      </div>

      {visibleWords.map((word, index) => {
        const reveal = getDistributedReveal(startFrame, endFrame, index, visibleWords.length);
        const revealProgress = Math.min(1, Math.max(0, (frame - reveal.start) / reveal.duration));
        const enter = easeOutCubic(revealProgress);

        if (frame < reveal.start - 2) {
          return null;
        }

        const baseAngle = -Math.PI / 2 + index * (TAU / Math.max(visibleWords.length, 1));
        const angle = baseAngle + currentRotation;
        const isActive = index === activeIndex;
        const lengthBias = Math.max(0, word.length - 7);
        const radialPush = lengthBias * 6 + (isActive ? 12 : 0);
        const targetX = orbitCenter.x + Math.cos(angle) * (orbitRadiusX + radialPush);
        const targetY = orbitCenter.y + Math.sin(angle) * (orbitRadiusY + radialPush * 0.46);
        const x = orbitCenter.x + (targetX - orbitCenter.x) * enter;
        const y = orbitCenter.y + (targetY - orbitCenter.y) * enter;
        const pulse = isActive ? punchZoom({frame, start: reveal.start, intensity: 0.13, duration: 12}) : 1;
        const cardWidth = measureBubbleWidth(word, isActive);
        const cardHeight = isActive ? 76 : 64;
        const fontSize = word.length >= 10 ? (isActive ? 34 : 26) : isActive ? 42 : 31;

        return (
          <div
            key={`${word}-${index}`}
            style={{
              position: 'absolute',
              left: x - cardWidth / 2,
              top: y - cardHeight / 2,
              width: cardWidth,
              height: cardHeight,
              borderRadius: 999,
              border: `2px solid ${isActive ? THEME.white : 'rgba(255, 212, 59, 0.4)'}`,
              background: isActive
                ? 'linear-gradient(135deg, rgba(255, 212, 59, 0.98), rgba(255, 226, 118, 0.94))'
                : 'linear-gradient(135deg, rgba(34, 28, 6, 0.92), rgba(13, 13, 13, 0.92))',
              boxShadow: isActive
                ? '0 0 36px rgba(255, 212, 59, 0.42)'
                : '0 0 18px rgba(255, 212, 59, 0.12)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: isActive ? THEME.background : THEME.yellow,
              fontSize,
              fontWeight: 1000,
              opacity: interpolate(enter, [0, 1], [0, isActive ? 1 : 0.86], clamp),
              transform: `scale(${(0.82 + enter * 0.18) * pulse})`,
              padding: '0 18px',
              whiteSpace: 'nowrap',
            }}
          >
            {word}
          </div>
        );
      })}

      <div
        style={{
          position: 'absolute',
          left: 72,
          right: 72,
          bottom: 158,
          color: THEME.white,
          fontSize: 62,
          lineHeight: 1,
          fontWeight: 1000,
          textAlign: 'center',
          textShadow: '0 0 28px rgba(248, 248, 248, 0.3)',
        }}
      >
        {activeWord}
      </div>
    </div>
  );
};

export const HookScene: React.FC = () => {
  const frame = useCurrentFrame();
  const hook = getHook();
  const flashWords = hook.flashWords.length > 0 ? hook.flashWords : DEFAULT_HOOK.flashWords;
  const hookStart = secondsToFrames(TIMELINE.hookStart);
  const hookEnd = secondsToFrames(TIMELINE.hookEnd);
  const flashStart = secondsToFrames(TIMELINE.flashWordsStart);
  const flashEnd = secondsToFrames(TIMELINE.flashWordsEnd);
  const sameRootStart = secondsToFrames(TIMELINE.freezeStart);
  const sameRootEnd = secondsToFrames(TIMELINE.freezeEnd);
  const rootStart = secondsToFrames(TIMELINE.rootStart);
  const hookOpacity = phaseOpacity(frame, hookStart, hookEnd + 3);
  const sameRootOpacity = phaseOpacity(frame, sameRootStart, sameRootEnd + 3);
  const hit = shake({frame, start: hookStart, duration: 10, intensity: 5});
  const sameRootText = getTimelineText('same-root', hook.shockText);

  if (frame > rootStart) {
    return null;
  }

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 3,
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(circle at 50% 44%, rgba(255, 212, 59, 0.14), transparent 42%), #050505',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: THEME.yellow,
          opacity: interpolate(frame, [0, 2, 7, 10], [1, 0.32, 0.04, 0], clamp),
          mixBlendMode: 'screen',
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: 38,
          top: 30,
          padding: '10px 20px',
          color: THEME.background,
          background: THEME.yellow,
          fontSize: 25,
          fontWeight: 1000,
        }}
      >
        {hookBadge[hook.type]}
      </div>

      <div
        style={{
          position: 'absolute',
          left: 58,
          right: 58,
          top: 150,
          opacity: hookOpacity,
          transform: `translate(${hit.x}px, ${hit.y}px) rotate(${hit.rotate}deg)`,
        }}
      >
        <div
          style={{
            color: THEME.yellow,
            fontSize: 86,
            lineHeight: 1.02,
            fontWeight: 1000,
            textShadow: '0 0 42px rgba(255, 212, 59, 0.7)',
          }}
        >
          {hook.mainText}
        </div>
      </div>

      <FlashWords
        words={flashWords}
        frame={frame}
        startFrame={flashStart}
        endFrame={flashEnd}
        centerLabel={hook.rootText ?? rootInfo.root}
      />

      <div
        style={{
          position: 'absolute',
          left: 58,
          right: 58,
          top: 214,
          opacity: sameRootOpacity,
        }}
      >
        <div
          style={{
            color: THEME.white,
            fontSize: 58,
            lineHeight: 1.15,
            fontWeight: 1000,
            textAlign: 'center',
            textShadow: '0 0 30px rgba(248, 248, 248, 0.28)',
          }}
        >
          {sameRootText}
        </div>
      </div>
    </div>
  );
};
