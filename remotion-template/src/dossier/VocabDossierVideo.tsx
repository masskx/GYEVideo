import React from 'react';
import {AbsoluteFill, useCurrentFrame} from 'remotion';
import {EpisodeAudio, fadeOut} from '../core/audio';
import {FPS} from '../core/timeline';
import {CaptionBar, cameraShake, DotWipe, FlashOverlay, Hud, PaperGround, PaperOverlay, useDossierFonts} from './print';
import {SCENE_COMPONENTS} from './scenes';
import {DOSSIER} from './schedule';
import {INK} from './theme';

// vocab-dossier: 高考词汇案卷 (Halftone Dossier). Skill: skills/vocab-dossier.

const SceneLayer: React.FC<{t: number}> = ({t}) => {
  const timing = DOSSIER.sceneAt(t);
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

export const VocabDossierVideo: React.FC = () => {
  useDossierFonts();
  const frame = useCurrentFrame();
  const t = frame / FPS;

  return (
    <AbsoluteFill style={{background: '#FFFFFF'}}>
      <SceneLayer t={t} />
      {DOSSIER.scenes
        .filter((timing) => timing.scene.transitionIn === 'dot-wipe')
        .map((timing) => (
          <DotWipe key={timing.scene.id} t={t} at={timing.start} ink={timing.scene.wipeInk} />
        ))}
      <CaptionBar t={t} />
      <PaperOverlay t={t} />
      <FlashOverlay t={t} />
      <AbsoluteFill style={{background: INK.ink, opacity: 1 - fadeOut(frame, DOSSIER.duration)}} />
      <EpisodeAudio lines={DOSSIER.lines} cues={DOSSIER.cues} silences={DOSSIER.silences} duration={DOSSIER.duration} isVoiceActive={DOSSIER.isVoiceActive} />
    </AbsoluteFill>
  );
};
