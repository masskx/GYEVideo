import React from 'react';
import {AbsoluteFill, useCurrentFrame} from 'remotion';
import {BrandPig, PigFace, PigPose} from '../brand/BrandPig';
import {whiteboard} from '../data/whiteboard';
import {EpisodeAudio, fadeOut} from '../core/audio';
import {useFonts} from '../core/fonts';
import {easeInOut, pop, progress} from '../core/motion';
import {FPS, WIDTH} from '../core/timeline';
import {Board} from './board';
import {CameraStop, cameraFor} from './layout';
import {WHITEBOARD, wordById} from './schedule';
import {CAPTION_TOP, FONT, LABEL, MARKER, WHITEBOARD_FONTS} from './theme';

// vocab-whiteboard: 白板词根图 (Whiteboard Explainer). Skill: skills/vocab-whiteboard.
// One board, written live; the camera travels instead of cutting.

const stopFor = (index: number): CameraStop => {
  const timing = WHITEBOARD.scenes[Math.max(0, Math.min(index, WHITEBOARD.scenes.length - 1))];
  return cameraFor(timing.scene.kind, wordById(timing.scene.wordId));
};

// Travel from the previous stop, interpolating zoom in 1/z so pushes feel like dollies.
export const cameraAt = (t: number): CameraStop => {
  const timing = WHITEBOARD.sceneAt(t);
  const to = stopFor(timing.index);
  const from = timing.index === 0 ? {...to, z: to.z * 0.92} : stopFor(timing.index - 1);
  const length = timing.scene.kind === 'overview' ? 1.5 : 0.85;
  const p = easeInOut(progress(t, timing.start - (timing.index === 0 ? 0 : 0.15), length));
  const invZ = 1 / from.z + (1 / to.z - 1 / from.z) * p;
  const drift = Math.sin(t * 0.4) * 10;
  return {x: from.x + (to.x - from.x) * p + drift, y: from.y + (to.y - from.y) * p, z: 1 / invZ};
};

const Caption: React.FC<{t: number}> = ({t}) => {
  const line = WHITEBOARD.captionAt(t);
  if (!line) return null;
  const p = pop(t, line.start - 0.04, 0.26);
  const parts: {text: string; key: boolean}[] = [];
  let rest = line.subtitle;
  while (rest) {
    let best: {i: number; w: string} | null = null;
    for (const w of line.keywords) {
      const i = rest.indexOf(w);
      if (i >= 0 && (!best || i < best.i)) best = {i, w};
    }
    if (!best) {
      parts.push({text: rest, key: false});
      break;
    }
    if (best.i > 0) parts.push({text: rest.slice(0, best.i), key: false});
    parts.push({text: best.w, key: true});
    rest = rest.slice(best.i + best.w.length);
  }
  return (
    <div style={{position: 'absolute', left: 50, right: 50, top: CAPTION_TOP, display: 'flex', justifyContent: 'center'}}>
      <div
        style={{
          transform: `scale(${0.9 + 0.1 * p.scale})`,
          opacity: p.visible ? 1 : 0,
          background: LABEL,
          borderRadius: 26,
          padding: '16px 32px',
          boxShadow: '0 8px 22px rgba(0,0,0,0.12)',
          display: 'flex',
          alignItems: 'center',
          gap: 18,
          maxWidth: 960,
        }}
      >
        <div style={{width: 34, height: 9, borderRadius: 5, background: MARKER.red, flexShrink: 0}} />
        <div style={{fontFamily: FONT.label, fontSize: line.subtitle.length > 26 ? 40 : 46, color: MARKER.black, lineHeight: 1.25}}>
          {parts.map((part, i) => (
            <span key={i} style={{color: part.key ? MARKER.red : undefined}}>
              {part.text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const pigState = (t: number): {face: PigFace; pose: PigPose} => {
  const kind = WHITEBOARD.sceneAt(t).scene.kind;
  if (kind === 'overview' || kind === 'homework') return {face: 'happy', pose: kind === 'homework' ? 'point' : 'cheer'};
  if (kind === 'twist') return {face: t < (WHITEBOARD.sceneAt(t).lines[1]?.start ?? Infinity) ? 'surprised' : 'happy', pose: 'inspect'};
  return {face: 'squint', pose: 'inspect'};
};

export const VocabWhiteboardVideo: React.FC = () => {
  useFonts(WHITEBOARD_FONTS);
  const frame = useCurrentFrame();
  const t = frame / FPS;
  const cam = cameraAt(t);
  const pig = pigState(t);
  // Window sheen: drifts at ~0.35× the camera, which is what sells "glossy".
  const sheenX = -cam.x * 0.35 * cam.z;
  return (
    <AbsoluteFill style={{background: '#D9D6CE'}}>
      <AbsoluteFill style={{transform: `translate(${540 - cam.x * cam.z}px, ${860 - cam.y * cam.z}px) scale(${cam.z})`, transformOrigin: '0 0'}}>
        <Board t={t} />
      </AbsoluteFill>
      <AbsoluteFill
        style={{
          background: `linear-gradient(115deg, transparent ${30 + (sheenX % 400) / 40}%, rgba(255,255,255,0.14) ${38 + (sheenX % 400) / 40}%, transparent ${50 + (sheenX % 400) / 40}%)`,
          pointerEvents: 'none',
        }}
      />
      <div style={{position: 'absolute', left: 56, top: 100, background: LABEL, borderRadius: 18, padding: '6px 22px', boxShadow: '0 6px 16px rgba(0,0,0,0.12)'}}>
        <span style={{fontFamily: FONT.zh, fontSize: 34, color: MARKER.black}}>白板词根图 </span>
        <span style={{fontFamily: FONT.hand, fontSize: 38, color: MARKER.blue}}>No.{whiteboard.boardNo}</span>
      </div>
      <BrandPig id="pig-board" t={t} x={WIDTH - 230} y={1290} size={180} face={pig.face} pose={pig.pose} flip />
      <Caption t={t} />
      <AbsoluteFill style={{background: '#23262C', opacity: 1 - fadeOut(frame, WHITEBOARD.duration)}} />
      <EpisodeAudio lines={WHITEBOARD.lines} cues={WHITEBOARD.cues} silences={WHITEBOARD.silences} duration={WHITEBOARD.duration} isVoiceActive={WHITEBOARD.isVoiceActive} />
    </AbsoluteFill>
  );
};
