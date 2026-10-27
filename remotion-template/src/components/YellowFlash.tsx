import React from 'react';
import {AbsoluteFill, useCurrentFrame} from 'remotion';
import {episodeConfig} from '../data/episodeConfig';
import {THEME} from '../theme';
import {cutFlashFrames} from '../timeline';
import {sentenceCutFlashFrames} from '../sentenceTimeline';
import {flashOpacity} from '../utils/motion';

export const YellowFlash: React.FC = () => {
  const frame = useCurrentFrame();
  const starts = episodeConfig.type === 'sentence-pattern' ? sentenceCutFlashFrames : cutFlashFrames;
  const opacity = flashOpacity({frame, starts, duration: 3});

  return (
    <AbsoluteFill
      style={{
        background: THEME.yellow,
        opacity,
        mixBlendMode: 'screen',
        pointerEvents: 'none',
      }}
    />
  );
};
