import React from 'react';
import {AbsoluteFill, Audio, getStaticFiles, interpolate, Sequence, staticFile, useCurrentFrame} from 'remotion';
import {episodeConfig} from './data/episodeConfig';
import {getBgmById} from './data/bgmRegistry';
import {CaptionBar, cameraShake, DotWipe, FlashOverlay, Hud, PaperGround, PaperOverlay, useDossierFonts} from './dossier/print';
import {SCENE_COMPONENTS} from './dossier/scenes';
import {INK} from './dossier/theme';
import {
  DOSSIER_CUES,
  DOSSIER_DURATION,
  DOSSIER_FPS,
  DOSSIER_LINES,
  DOSSIER_SCENES,
  DOSSIER_SILENCES,
  isVoiceActive,
  toFrame,
} from './dossier/schedule';

export const DOSSIER_SCORE_FILE = 'audio/dossier-score.mp3';

const hasStatic = (path: string) => getStaticFiles().some((file) => file.name === path);

const SceneLayer: React.FC<{t: number}> = ({t}) => {
  const timing = DOSSIER_SCENES.find((scene) => t >= scene.start && t < scene.end) ?? DOSSIER_SCENES[DOSSIER_SCENES.length - 1];
  const Component = SCENE_COMPONENTS[timing.scene.kind];
  const dark = timing.scene.kind === 'fingerprint';
  const shake = cameraShake(t);
  return (
    <>
      <PaperGround dark={dark} />
      <AbsoluteFill style={{transform: `translate(${shake.x}px, ${shake.y}px)`}}>
        <Component timing={timing} t={t} />
      </AbsoluteFill>
      <Hud t={t} chapter={timing.scene.chapter} dark={dark} />
    </>
  );
};

const Transitions: React.FC<{t: number}> = ({t}) => (
  <>
    {DOSSIER_SCENES.filter((timing) => timing.scene.transitionIn === 'dot-wipe').map((timing) => (
      <DotWipe key={timing.scene.id} t={t} at={timing.start} ink={timing.scene.wipeInk} />
    ))}
  </>
);

const fadeOut = (frame: number) => interpolate(frame, [toFrame(DOSSIER_DURATION) - 30, toFrame(DOSSIER_DURATION)], [1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});

const inSilence = (t: number) => DOSSIER_SILENCES.some((range) => t >= range.from && t < range.to);

const MusicBed: React.FC = () => {
  // The synthesized score already empties out before the verdict; the fallback BGM is muted there instead.
  const useScore = hasStatic(DOSSIER_SCORE_FILE);
  const fallback = getBgmById(episodeConfig.bgmId);
  const src = useScore ? DOSSIER_SCORE_FILE : fallback?.path;
  if (!src) {
    return null;
  }
  const base = episodeConfig.bgmVolume;
  const duck = episodeConfig.bgmDuckingFactor ?? 0.45;
  return (
    <Audio
      src={staticFile(src)}
      loop={!useScore}
      volume={(frame) => {
        const t = frame / DOSSIER_FPS;
        const silence = !useScore && inSilence(t) ? 0 : 1;
        return base * (isVoiceActive(t) ? duck : 1) * silence * fadeOut(frame);
      }}
    />
  );
};

export const GaokaoDossierVideo: React.FC = () => {
  useDossierFonts();
  const frame = useCurrentFrame();
  const t = frame / DOSSIER_FPS;

  return (
    <AbsoluteFill style={{background: '#FFFFFF'}}>
      <SceneLayer t={t} />
      <Transitions t={t} />
      <CaptionBar t={t} />
      <PaperOverlay t={t} />
      <FlashOverlay t={t} />
      <AbsoluteFill style={{background: INK.ink, opacity: 1 - fadeOut(frame)}} />

      {DOSSIER_LINES.filter((line) => line.audio).map((line) => (
        <Sequence key={line.id} from={toFrame(line.start)} name={`voice ${line.id}`}>
          <Audio src={staticFile(line.audio!.replace(/^\//, ''))} volume={episodeConfig.voiceVolume} />
        </Sequence>
      ))}
      {DOSSIER_CUES.filter((cue) => cue.sfx).map((cue, i) => (
        <Sequence key={`${cue.name}-${i}`} from={Math.max(0, toFrame(cue.t))} durationInFrames={60} name={`sfx ${cue.name}`}>
          <Audio src={staticFile(`sfx/dossier/${cue.sfx}.mp3`)} volume={episodeConfig.sfxVolume * (cue.gain ?? 1)} />
        </Sequence>
      ))}
      <MusicBed />
    </AbsoluteFill>
  );
};

