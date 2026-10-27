import React from 'react';
import {AbsoluteFill, Audio, staticFile} from 'remotion';
import {ParticleBackground} from './components/ParticleBackground';
import {RootWordTitle} from './components/RootWordTitle';
import {SubtitleBar} from './components/SubtitleBar';
import {SummaryScene} from './components/SummaryScene';
import {WordGridScene} from './components/WordGridScene';
import {YellowFlash} from './components/YellowFlash';
import {BackgroundMusic} from './components/BackgroundMusic';
import {AnimalIconMoments} from './components/AnimalIconMoments';
import {LottieLayer} from './components/LottieLayer';
import {episodeConfig} from './data/episodeConfig';
import {HookScene} from './scenes/HookScene';
import {FONT_STACK, THEME} from './theme';
import {resolveRootLottieConfig} from './utils/resolveRootLottie';
import {secondsToFrames, TIMELINE} from './timeline';

export const RootWordVideo: React.FC = () => {
  const lottie = resolveRootLottieConfig();
  const lottieStyle =
    lottie.position === 'left-bottom'
      ? {left: 46, bottom: 110}
      : lottie.position === 'center-bg'
        ? {right: 150, top: 170}
        : {right: 48, bottom: 112};

  return (
    <AbsoluteFill
      style={{
        fontFamily: FONT_STACK,
        background: THEME.background,
        overflow: 'hidden',
      }}
    >
      <ParticleBackground />
      <LottieLayer
        fileName={lottie.fileName ?? ''}
        visible={lottie.visible}
        width={episodeConfig.width && episodeConfig.width > 1000 ? 420 : 320}
        height={episodeConfig.width && episodeConfig.width > 1000 ? 420 : 320}
        opacity={0.76}
        zIndex={1}
        playbackRate={0.95}
        startFrame={secondsToFrames(TIMELINE.rootStart)}
        endFrame={secondsToFrames(TIMELINE.gridEnd)}
        style={lottieStyle}
      />
      <HookScene />
      <RootWordTitle />
      <WordGridScene />
      <SummaryScene />
      <AnimalIconMoments />
      <SubtitleBar />
      <YellowFlash />
      <BackgroundMusic />
      <Audio src={staticFile('/audio/main-voice.mp3')} volume={episodeConfig.voiceVolume} />
    </AbsoluteFill>
  );
};
