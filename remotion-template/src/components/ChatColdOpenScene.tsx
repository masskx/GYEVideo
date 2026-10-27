import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {AnimatedAnimalIcon} from './AnimatedAnimalIcon';
import {MinimalLineArtCard} from './MinimalLineArtCard';
import {PLATFORM_UI_SAFE_BOTTOM_TIGHT} from '../layoutSafeArea';
import {sentenceVideoMeta} from '../sentenceVideoMeta';
import {secondsToFrames, SENTENCE_TIMELINE} from '../sentenceTimeline';
import {THEME} from '../theme';

const clamp = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'} as const;

export const ChatColdOpenScene: React.FC = () => {
  const frame = useCurrentFrame();
  const start = secondsToFrames(SENTENCE_TIMELINE.openingStart);
  const end = secondsToFrames(SENTENCE_TIMELINE.wrongStart);
  const opacity = interpolate(frame, [start, start + 5, end - 5, end], [0, 1, 1, 0], clamp);
  const scene = sentenceVideoMeta.scene;

  if (!scene || frame > end) {
    return null;
  }

  return (
    <div style={{position: 'absolute', inset: 0, opacity}}>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(circle at 72% 18%, rgba(255,212,59,0.14), transparent 18%), linear-gradient(180deg, rgba(6,6,6,0.94), rgba(12,12,12,0.98))',
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: 74,
          top: 88,
          padding: '12px 16px',
          borderRadius: 999,
          background: 'rgba(255,77,77,0.12)',
          border: `1px solid ${THEME.red}`,
          color: THEME.white,
          fontSize: 18,
          fontWeight: 1000,
          letterSpacing: 1,
        }}
      >
        CHAT RESCUE
      </div>
      <div style={{position: 'absolute', left: 76, right: 76, top: 140, color: THEME.gray, fontSize: 28, fontWeight: 900}}>
        {scene.setting}
      </div>
      <div
        style={{
          position: 'absolute',
          right: 82,
          top: 106,
          color: 'rgba(255,255,255,0.10)',
          fontSize: 72,
          lineHeight: 0.92,
          fontWeight: 1000,
          textAlign: 'right',
        }}
      >
        {['TOO', 'DIRECT'].map((word) => (
          <div key={word}>{word}</div>
        ))}
      </div>
      <AnimatedAnimalIcon
        id="cute_bird"
        x={802}
        y={246}
        size={112}
        startFrame={start}
        durationFrames={Math.max(16, end - start)}
        variant="peek"
        opacity={0.84}
      />
      <MinimalLineArtCard
        x={38}
        y={182}
        width={250}
        height={188}
        rotate={-10}
        opacity={0.76}
        variant="speech-burst"
        stylePreset={sentenceVideoMeta.lineArtStyle}
        accent="rgba(255,255,255,0.10)"
      />
      <MinimalLineArtCard
        x={764}
        y={510}
        width={238}
        height={176}
        rotate={9}
        opacity={0.66}
        variant="arrow-fix"
        stylePreset={sentenceVideoMeta.lineArtStyle}
        accent="rgba(255,212,59,0.14)"
      />
      <div
        style={{
          position: 'absolute',
          left: 110,
          right: 200,
          top: 320,
          padding: '28px 32px',
          borderRadius: '34px 34px 34px 12px',
          background: 'rgba(255,255,255,0.08)',
          color: THEME.white,
          fontSize: 52,
          lineHeight: 1.18,
          fontWeight: 900,
          boxShadow: '0 24px 48px rgba(0,0,0,0.22)',
        }}
      >
        <div style={{marginBottom: 14, color: THEME.gray, fontSize: 22}}>{scene.speakerA || 'THEM'}</div>
        {scene.opener}
      </div>
      <div
        style={{
          position: 'absolute',
          left: 220,
          right: 110,
          top: 740,
          padding: '28px 32px',
          borderRadius: '34px 34px 12px 34px',
          background: 'rgba(255,212,59,0.14)',
          border: `1px solid ${THEME.yellow}`,
          color: THEME.white,
          fontSize: 48,
          lineHeight: 1.18,
          fontWeight: 900,
          textAlign: 'right',
          boxShadow: '0 24px 48px rgba(0,0,0,0.22)',
        }}
      >
        <div style={{marginBottom: 14, color: THEME.yellow, fontSize: 22}}>{scene.speakerB || 'YOU'}</div>
        {scene.reply}
      </div>
      <div
        style={{
          position: 'absolute',
          left: 92,
          right: 92,
          bottom: PLATFORM_UI_SAFE_BOTTOM_TIGHT,
          padding: '26px 30px',
          borderRadius: 28,
          background: 'rgba(255,77,77,0.10)',
          border: `1px solid ${THEME.red}`,
          color: THEME.white,
          fontSize: 38,
          lineHeight: 1.2,
          fontWeight: 900,
          textAlign: 'center',
        }}
      >
        {scene.conflict}
      </div>
    </div>
  );
};
