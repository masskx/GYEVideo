import React from 'react';
import {Audio, getStaticFiles, interpolate, Sequence, staticFile} from 'remotion';
import {getBgmById} from '../data/bgmRegistry';
import {episodeConfig} from '../data/episodeConfig';
import {Cue, FPS, LineTiming, toFrame} from './timeline';

// Per-episode score written by `npm run audio`; a registry BGM is the fallback when it is missing.
export const SCORE_FILE = 'audio/score.mp3';

const hasStatic = (path: string) => getStaticFiles().some((file) => file.name === path);

export const fadeOut = (frame: number, duration: number, length = 30) =>
  interpolate(frame, [toFrame(duration) - length, toFrame(duration)], [1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});

// Voice lines on their own timing, one SFX per cue, and the music bed ducked under the voice.
export const EpisodeAudio: React.FC<{
  lines: LineTiming[];
  cues: Cue[];
  silences: {from: number; to: number}[];
  duration: number;
  isVoiceActive: (t: number) => boolean;
}> = ({lines, cues, silences, duration, isVoiceActive}) => {
  const useScore = hasStatic(SCORE_FILE);
  const fallback = getBgmById(episodeConfig.bgmId);
  const music = useScore ? SCORE_FILE : fallback?.path;
  const base = episodeConfig.bgmVolume;
  const duck = episodeConfig.bgmDuckingFactor ?? 0.6;
  const inSilence = (t: number) => silences.some((range) => t >= range.from && t < range.to);

  return (
    <>
      {lines
        .filter((line) => line.audio)
        .map((line) => (
          <Sequence key={line.id} from={toFrame(line.start)} name={`voice ${line.id}`}>
            <Audio src={staticFile(line.audio!.replace(/^\//, ''))} volume={episodeConfig.voiceVolume} />
          </Sequence>
        ))}
      {cues
        .filter((cue) => cue.sfx)
        .map((cue, i) => (
          <Sequence key={`${cue.name}-${i}`} from={Math.max(0, toFrame(cue.t))} durationInFrames={75} name={`sfx ${cue.name}`}>
            <Audio src={staticFile(`sfx/${cue.sfx}.mp3`)} volume={episodeConfig.sfxVolume * (cue.gain ?? 1)} />
          </Sequence>
        ))}
      {music ? (
        <Audio
          src={staticFile(music)}
          loop={!useScore}
          volume={(frame) => {
            const t = frame / FPS;
            // The synthesized score already empties out in silences; a fallback BGM is muted there instead.
            const silence = !useScore && inSilence(t) ? 0 : 1;
            return base * (isVoiceActive(t) ? duck : 1) * silence * fadeOut(frame, duration);
          }}
        />
      ) : null}
    </>
  );
};
