import React from 'react';
import {AbsoluteFill, Audio, staticFile} from 'remotion';
import {ParticleBackground} from './components/ParticleBackground';
import {SentenceSubtitleBar} from './components/SentenceSubtitleBar';
import {YellowFlash} from './components/YellowFlash';
import {BackgroundMusic} from './components/BackgroundMusic';
import {ChatColdOpenScene} from './components/ChatColdOpenScene';
import {WrongExpressionScene} from './components/WrongExpressionScene';
import {RescueExpressionScene} from './components/RescueExpressionScene';
import {MicroDramaReuseScene} from './components/MicroDramaReuseScene';
import {MessageTypingScene} from './components/MessageTypingScene';
import {ExpressionCrossOutScene} from './components/ExpressionCrossOutScene';
import {ChinglishTrapOpeningScene} from './components/ChinglishTrapOpeningScene';
import {WrongMeaningTwistScene} from './components/WrongMeaningTwistScene';
import {NativeFixSlamScene} from './components/NativeFixSlamScene';
import {UsageSceneCard} from './components/UsageSceneCard';
import {WrongRightLockScene} from './components/WrongRightLockScene';
import {DouyinProgressBeatBar} from './components/DouyinProgressBeatBar';
import {SfxBeatLayer} from './components/SfxBeatLayer';
import {FirstThreeSecondsBooster} from './components/FirstThreeSecondsBooster';
import {CreatorOutroScene} from './components/CreatorOutroScene';
import {episodeConfig} from './data/episodeConfig';
import {sentenceVideoMeta} from './sentenceVideoMeta';
import {FONT_STACK, THEME} from './theme';

const AtmosphereOverlay: React.FC = () => {
  return (
    <>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.08,
          backgroundImage:
            'repeating-linear-gradient(103deg, rgba(255,255,255,0.18) 0 1px, transparent 1px 24px)',
          mixBlendMode: 'screen',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(circle at 50% 18%, rgba(255,212,59,0.10), transparent 18%), linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.18) 100%)',
        }}
      />
    </>
  );
};

export const SentenceVideo: React.FC = () => {
  const isChinglishTrap = sentenceVideoMeta.contentType === 'chinglish-trap';

  return (
    <AbsoluteFill
      style={{
        fontFamily: FONT_STACK,
        background: THEME.background,
        overflow: 'hidden',
      }}
    >
      <ParticleBackground />
      <AtmosphereOverlay />
      <FirstThreeSecondsBooster />
      {isChinglishTrap ? (
        <>
          <ChinglishTrapOpeningScene />
          <WrongMeaningTwistScene />
          <NativeFixSlamScene />
          <UsageSceneCard />
          <WrongRightLockScene />
        </>
      ) : (
        <>
          <ChatColdOpenScene />
          <MessageTypingScene />
          <WrongExpressionScene />
          <ExpressionCrossOutScene />
          <RescueExpressionScene />
          <MicroDramaReuseScene />
          <UsageSceneCard />
          <WrongRightLockScene />
        </>
      )}
      <CreatorOutroScene />
      {isChinglishTrap ? <DouyinProgressBeatBar /> : null}
      {isChinglishTrap ? <SfxBeatLayer /> : null}
      <SentenceSubtitleBar />
      <YellowFlash />
      <BackgroundMusic />
      <Audio src={staticFile('/audio/main-voice.mp3')} volume={episodeConfig.voiceVolume} />
    </AbsoluteFill>
  );
};
