import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {rootInfo, words} from '../data/words';
import {THEME} from '../theme';
import {getActiveWordIndex, secondsToFrames, TIMELINE, WORD_TIMINGS} from '../timeline';
import {quickCut} from '../utils/motion';
import {WordCard} from './WordCard';

const clamp = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'} as const;

const CARD_WIDTH = 210;
const CARD_HEIGHT = 116;
const ROOT_BOX = {left: 344, top: 284, width: 272, height: 120};

type LayoutBox = {
  left: number;
  top: number;
  width: number;
  height: number;
  centerX: number;
  centerY: number;
};

const distributeRow = (count: number, top: number): LayoutBox[] => {
  if (count <= 0) {
    return [];
  }

  if (count === 1) {
    const left = 480 - CARD_WIDTH / 2;
    return [{left, top, width: CARD_WIDTH, height: CARD_HEIGHT, centerX: 480, centerY: top + CARD_HEIGHT / 2}];
  }

  const minGap = count >= 4 ? 22 : 34;
  const maxContentWidth = 912;
  const contentWidth = Math.min(maxContentWidth, CARD_WIDTH * count + minGap * (count - 1));
  const gap = (contentWidth - CARD_WIDTH * count) / (count - 1);
  const startLeft = (960 - contentWidth) / 2;

  return Array.from({length: count}, (_, index) => {
    const left = startLeft + index * (CARD_WIDTH + gap);
    return {
      left,
      top,
      width: CARD_WIDTH,
      height: CARD_HEIGHT,
      centerX: left + CARD_WIDTH / 2,
      centerY: top + CARD_HEIGHT / 2,
    };
  });
};

const buildCardLayout = (count: number) => {
  const topCount = Math.ceil(count / 2);
  const bottomCount = count - topCount;
  return [...distributeRow(topCount, 92), ...distributeRow(bottomCount, 476)];
};

const edgePoint = (box: LayoutBox | typeof ROOT_BOX, targetX: number, targetY: number) => {
  const centerX = box.left + box.width / 2;
  const centerY = box.top + box.height / 2;
  const dx = targetX - centerX;
  const dy = targetY - centerY;
  const scaleX = dx === 0 ? Number.POSITIVE_INFINITY : box.width / 2 / Math.abs(dx);
  const scaleY = dy === 0 ? Number.POSITIVE_INFINITY : box.height / 2 / Math.abs(dy);
  const scale = Math.min(scaleX, scaleY);

  return {
    x: centerX + dx * scale,
    y: centerY + dy * scale,
  };
};

const formatGridRoot = (root: string) => root.replace(/\s*\/\s*/g, ' /\n');

const getGridRootFontSize = (root: string) => {
  const longestLine = formatGridRoot(root).split('\n').reduce((max, line) => Math.max(max, line.length), 0);
  return longestLine >= 8 ? 48 : longestLine >= 6 ? 54 : 62;
};

export const WordGridScene: React.FC = () => {
  const frame = useCurrentFrame();
  const activeWordIndex = getActiveWordIndex(frame);
  const timedWords = words.slice(0, WORD_TIMINGS.length);
  const wordStart = secondsToFrames(TIMELINE.wordsStart);
  const gridStart = secondsToFrames(TIMELINE.gridStart);
  const gridEnd = secondsToFrames(TIMELINE.gridEnd);
  const focusOpacity = interpolate(frame, [wordStart - 4, wordStart + 4, gridStart - 10, gridStart], [0, 1, 1, 0], clamp);
  const gridOpacity = interpolate(frame, [gridStart - 3, gridStart + 10, gridEnd - 8, gridEnd], [0, 1, 1, 0], clamp);
  const gridScale = interpolate(frame, [gridStart, gridStart + 12], [1.08, 1], clamp);
  const gridLayout = buildCardLayout(timedWords.length);
  const rootCenterX = ROOT_BOX.left + ROOT_BOX.width / 2;
  const rootCenterY = ROOT_BOX.top + ROOT_BOX.height / 2;

  return (
    <>
      <div style={{position: 'absolute', inset: 0, opacity: focusOpacity}}>
        {timedWords.map((word, index) => {
          const timing = WORD_TIMINGS[index];
          const visible =
            frame >= timing.startFrame - 3 &&
            frame < (WORD_TIMINGS[index + 1]?.startFrame ?? gridStart);

          if (!visible) {
            return null;
          }

          return (
            <WordCard
              key={word.word}
              word={word}
              startFrame={timing.startFrame}
              isActive={true}
              isPast={true}
              mode="focus"
              index={index}
            />
          );
        })}
        <div
          style={{
            position: 'absolute',
            left: 72,
            right: 72,
            top: 510,
            display: 'grid',
            gridTemplateColumns: 'repeat(8, 1fr)',
            gap: 8,
          }}
        >
          {timedWords.map((word, index) => {
            const isPast = frame >= WORD_TIMINGS[index].startFrame;
            return (
              <div
                key={word.word}
                style={{
                  height: 42,
                  borderRadius: 4,
                  border: `1px solid ${activeWordIndex === index ? THEME.yellow : 'rgba(248,248,248,0.12)'}`,
                  color: activeWordIndex === index ? THEME.yellow : THEME.gray,
                  background: activeWordIndex === index ? 'rgba(255,212,59,0.12)' : 'rgba(255,255,255,0.03)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 16,
                  fontWeight: 950,
                  opacity: isPast ? 1 : 0.25,
                }}
              >
                {word.word}
              </div>
            );
          })}
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: gridOpacity,
          transform: `scale(${gridScale})`,
          transformOrigin: 'center',
        }}
      >
        <svg width="960" height="720" style={{position: 'absolute', inset: 0}}>
          <defs>
            <filter id="lineGlow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          {gridLayout.map((box, index) => {
            const draw = quickCut({frame, start: gridStart + index * 2, duration: 9});
            const rootEdge = edgePoint(ROOT_BOX, box.centerX, box.centerY);
            const cardEdge = edgePoint(box, rootCenterX, rootCenterY);
            return (
              <line
                key={`${box.centerX}-${box.centerY}`}
                x1={rootEdge.x}
                y1={rootEdge.y}
                x2={rootEdge.x + (cardEdge.x - rootEdge.x) * draw}
                y2={rootEdge.y + (cardEdge.y - rootEdge.y) * draw}
                stroke={THEME.yellow}
                strokeWidth="1.8"
                opacity={0.12 + draw * 0.34}
                filter="url(#lineGlow)"
              />
            );
          })}
        </svg>
        <div
          style={{
            position: 'absolute',
            left: ROOT_BOX.left,
            top: ROOT_BOX.top,
            width: ROOT_BOX.width,
            height: ROOT_BOX.height,
            borderRadius: 8,
            border: `2px solid ${THEME.yellow}`,
            background: 'rgba(5, 5, 5, 0.78)',
            boxShadow: '0 0 42px rgba(255, 212, 59, 0.35)',
            color: THEME.yellow,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: getGridRootFontSize(rootInfo.root),
            lineHeight: 0.9,
            fontWeight: 1000,
            textAlign: 'center',
            whiteSpace: 'pre-line',
          }}
        >
          {formatGridRoot(rootInfo.root)}
        </div>
        <div
          style={{
            position: 'absolute',
            inset: 0,
          }}
        >
          {timedWords.map((word, index) => {
            const box = gridLayout[index];
            const timing = WORD_TIMINGS[index];

            if (!timing || !box) {
              return null;
            }

            return (
              <div
                key={word.word}
                style={{position: 'absolute', left: box.left, top: box.top, width: box.width, height: box.height}}
              >
                <WordCard
                  word={word}
                  startFrame={gridStart + index * 2}
                  isActive={false}
                  isPast={true}
                  mode="grid"
                  index={index}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
