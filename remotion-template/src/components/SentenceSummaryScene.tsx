import React from 'react';
import {Img, interpolate, staticFile, useCurrentFrame} from 'remotion';
import {BrandAvatar} from '../brand/BrandAvatar';
import {episodeConfig} from '../data/episodeConfig';
import {sentenceInfo} from '../data/sentencePattern';
import {getAnimalIconById, getFallbackAnimalIcon} from '../data/animalIconRegistry';
import {THEME} from '../theme';
import {secondsToFrames, SENTENCE_TIMELINE} from '../sentenceTimeline';
import {beatPulse, highlightSweep, punchZoom, slamIn} from '../utils/motion';

const clamp = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'} as const;

export const SentenceSummaryScene: React.FC = () => {
  const frame = useCurrentFrame();
  const start = secondsToFrames(SENTENCE_TIMELINE.summaryStart);
  const hold = secondsToFrames(SENTENCE_TIMELINE.outroStart);
  const enter = slamIn({frame, start, fps: SENTENCE_TIMELINE.fps, overshoot: 1.14});
  const opacity = interpolate(frame, [start - 3, start + 5], [0, 1], clamp);
  const sweep = highlightSweep({frame, start: start + 12, duration: 26});
  const creatorAnimal =
    getAnimalIconById(episodeConfig.cover?.creatorAnimalId ?? '') ?? getFallbackAnimalIcon();
  const summaryLines = sentenceInfo.summaryLines ?? [sentenceInfo.memoryFormula];

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        opacity,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transform: `scale(${enter.scale * punchZoom({frame, start: start + 3, intensity: 0.08})})`,
      }}
    >
      <div
        style={{
          width: 930,
          padding: '62px 54px 56px',
          borderRadius: 40,
          border: '1px solid rgba(255,212,59,0.26)',
          background: 'linear-gradient(180deg, rgba(20,20,20,0.92), rgba(7,7,7,0.96))',
          boxShadow: '0 30px 64px rgba(0,0,0,0.42)',
          textAlign: 'center',
          transform: `scale(${beatPulse({frame, start, fps: SENTENCE_TIMELINE.fps, amount: 0.012})})`,
        }}
      >
        <div
          style={{
            color: THEME.gray,
            fontSize: 30,
            fontWeight: 900,
            letterSpacing: 2,
          }}
        >
          REMEMBER THIS
        </div>
        <div
          style={{
            position: 'relative',
            marginTop: 24,
            color: THEME.yellow,
            fontSize: 104,
            lineHeight: 1,
            fontWeight: 1000,
            textShadow: '0 0 42px rgba(255, 212, 59, 0.64)',
          }}
        >
          {sentenceInfo.memoryFormula}
          <div
            style={{
              position: 'absolute',
              left: 60,
              right: 60,
              bottom: -12,
              height: 14,
              overflow: 'hidden',
              background: 'rgba(255,212,59,0.18)',
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
            marginTop: 44,
            color: THEME.white,
            fontSize: 54,
            lineHeight: 1.22,
            fontWeight: 1000,
          }}
        >
          {summaryLines.map((line, index) => (
            <React.Fragment key={`${line}-${index}`}>
              {index > 0 ? <br /> : null}
              {line}
            </React.Fragment>
          ))}
        </div>
        <div
          style={{
            marginTop: 34,
            color: 'rgba(248,248,248,0.72)',
            fontSize: 30,
            lineHeight: 1.28,
            fontWeight: 800,
          }}
        >
          {sentenceInfo.useCase}
        </div>
        <div
          style={{
            marginTop: 48,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 18,
            opacity: interpolate(frame, [hold, hold + 8], [0, 1], clamp),
          }}
        >
          <BrandAvatar id="sentence-summary-creator" size={62} t={frame / 30} />
          <div style={{color: THEME.white, fontSize: 28, fontWeight: 1000}}>小猪盖被</div>
        </div>
      </div>
    </div>
  );
};
