import React from 'react';
import {AbsoluteFill, Audio, interpolate, Sequence, staticFile, useCurrentFrame} from 'remotion';
import {AssetsScene, OutroScene, PackageScene, PipelineScene, SkillsScene} from './scenes/Machinery';
import {CoreScene, HookScene, LinesScene} from './scenes/Intro';
import {ReadAloudScene, RootScene, SentenceScene} from './scenes/Showcase';
import {activeLine, durationFrames, FPS, SceneTiming, TIMELINE, toFrames} from './timeline';
import {FONT_STACK, THEME} from './theme';
import {clamp} from './ui';

const SCENES: Record<string, {label: string; component: React.FC<{scene: SceneTiming}>}> = {
  hook: {label: 'GYEVideo', component: HookScene},
  core: {label: 'Core rule', component: CoreScene},
  lines: {label: 'Content lines', component: LinesScene},
  root: {label: 'Word roots', component: RootScene},
  sentence: {label: 'Sentences', component: SentenceScene},
  readaloud: {label: 'Scene vocab', component: ReadAloudScene},
  package: {label: 'Episode package', component: PackageScene},
  pipeline: {label: 'Pipeline', component: PipelineScene},
  skills: {label: 'Skills', component: SkillsScene},
  assets: {label: 'Assets & QA', component: AssetsScene},
  outro: {label: 'Get started', component: OutroScene},
};

const BGM_VOLUME = 0.26;
const BGM_DUCKED = 0.13;

const sceneAt = (seconds: number) =>
  TIMELINE.scenes.find((scene) => seconds >= scene.start && seconds < scene.start + scene.duration) ?? TIMELINE.scenes[TIMELINE.scenes.length - 1];

const Header: React.FC = () => {
  const frame = useCurrentFrame();
  const scene = sceneAt(frame / FPS);
  const index = TIMELINE.scenes.indexOf(scene);

  return (
    <div style={{position: 'absolute', top: 0, left: 0, right: 0, padding: '56px 60px 0'}}>
      <div style={{height: 10, borderRadius: 5, background: 'rgba(248, 248, 248, 0.1)', overflow: 'hidden'}}>
        <div
          style={{
            height: '100%',
            width: `${(frame / durationFrames) * 100}%`,
            background: THEME.yellow,
            boxShadow: '0 0 18px rgba(255, 212, 59, 0.9)',
          }}
        />
      </div>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 22}}>
        <div
          style={{
            fontFamily: FONT_STACK,
            fontSize: 28,
            fontWeight: 900,
            color: THEME.background,
            background: THEME.yellow,
            padding: '8px 18px',
            borderRadius: 8,
          }}
        >
          {String(index + 1).padStart(2, '0')} / {TIMELINE.scenes.length} · {SCENES[scene.id].label}
        </div>
        <div style={{fontFamily: FONT_STACK, fontSize: 26, fontWeight: 700, color: THEME.gray}}>masskx/GYEVideo</div>
      </div>
    </div>
  );
};

const CaptionBar: React.FC = () => {
  const frame = useCurrentFrame();
  const seconds = frame / FPS;
  const scene = sceneAt(seconds);
  const line = activeLine(scene, seconds - scene.start);
  if (!line) {
    return null;
  }
  const local = seconds - scene.start - line.start;
  const progress = Math.min(1, local / line.duration);
  const opacity = interpolate(local, [0, 0.12], [0, 1], clamp);

  return (
    <div
      style={{
        position: 'absolute',
        left: 50,
        right: 50,
        bottom: 120,
        minHeight: 150,
        borderRadius: 14,
        background: 'rgba(5, 5, 5, 0.88)',
        border: '2px solid rgba(248, 248, 248, 0.14)',
        boxShadow: '0 0 40px rgba(0, 0, 0, 0.8)',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity,
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          width: `${progress * 100}%`,
          background: 'linear-gradient(90deg, rgba(255, 212, 59, 0.22), rgba(255, 212, 59, 0.03))',
        }}
      />
      <div style={{position: 'absolute', left: 0, top: 0, bottom: 0, width: 10, background: THEME.yellow, boxShadow: '0 0 18px rgba(255, 212, 59, 0.95)'}} />
      <div
        style={{
          position: 'relative',
          padding: '22px 50px',
          fontFamily: FONT_STACK,
          fontSize: 40,
          fontWeight: 800,
          lineHeight: 1.3,
          textAlign: 'center',
          color: THEME.white,
        }}
      >
        {line.caption}
      </div>
    </div>
  );
};

const voiceActiveAt = (frame: number) => {
  const seconds = frame / FPS;
  const scene = sceneAt(seconds);
  return Boolean(activeLine(scene, seconds - scene.start));
};

export const Explainer: React.FC = () => {
  const frame = useCurrentFrame();
  const drift = Math.sin(frame / 90) * 120;

  return (
    <AbsoluteFill style={{background: THEME.background}}>
      <AbsoluteFill
        style={{
          background: `radial-gradient(circle at ${540 + drift}px 820px, rgba(255, 212, 59, 0.16), transparent 58%), linear-gradient(180deg, ${THEME.background}, ${THEME.background2})`,
        }}
      />
      {TIMELINE.scenes.map((scene, index) => {
        const Component = SCENES[scene.id].component;
        const from = toFrames(scene.start);
        const length = index === TIMELINE.scenes.length - 1 ? durationFrames - from : toFrames(scene.duration);
        return (
          <Sequence key={scene.id} from={from} durationInFrames={length} name={scene.id}>
            <SceneFade length={length}>
              <Component scene={scene} />
            </SceneFade>
            {scene.lines.map((line) => (
              <Sequence key={line.file} from={toFrames(line.start)} name={line.file}>
                <Audio src={staticFile(line.file)} />
              </Sequence>
            ))}
          </Sequence>
        );
      })}
      <Audio
        src={staticFile('bgm/tech_001.mp3')}
        volume={(f) => {
          const fadeIn = interpolate(f, [0, 20], [0, 1], clamp);
          const fadeOut = interpolate(f, [durationFrames - 45, durationFrames], [1, 0], clamp);
          return (voiceActiveAt(f) ? BGM_DUCKED : BGM_VOLUME) * fadeIn * fadeOut;
        }}
      />
      <Header />
      <CaptionBar />
    </AbsoluteFill>
  );
};

const SceneFade: React.FC<{length: number; children: React.ReactNode}> = ({length, children}) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 6, length - 6, length], [0, 1, 1, 0], clamp);
  return <AbsoluteFill style={{opacity}}>{children}</AbsoluteFill>;
};
