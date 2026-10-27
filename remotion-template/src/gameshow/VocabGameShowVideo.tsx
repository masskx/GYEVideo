import React from 'react';
import {AbsoluteFill, useCurrentFrame} from 'remotion';
import {gameShow} from '../data/gameShow';
import {EpisodeAudio, fadeOut} from '../core/audio';
import {useFonts} from '../core/fonts';
import {FPS} from '../core/timeline';
import {CutFlash, Lamps, punchScale, SetBackground, TelopPlate, Tile} from './kit';
import {SCENE_COMPONENTS} from './scenes';
import {GAME_SHOW} from './schedule';
import {FONT, GAME_SHOW_FONTS, HUES, INK, PAPER} from './theme';

// vocab-game-show: 词根闯关 (Game Show Flat). Skill: skills/vocab-game-show.

const Hud: React.FC<{t: number}> = ({t}) => {
  const timing = GAME_SHOW.sceneAt(t);
  const rounds = GAME_SHOW.scenes.filter((scene) => scene.scene.kind === 'round');
  const won = rounds.filter((scene) => scene.cues.some((cue) => cue.name === 'judge' && t >= cue.t)).length;
  const current = timing.scene.kind === 'round' ? rounds.indexOf(timing) : undefined;
  return (
    <>
      <div style={{position: 'absolute', left: 56, top: 100}}>
        <Tile fill={PAPER} radius={16} shadow={8} style={{padding: '6px 18px'}}>
          <div style={{fontFamily: FONT.zh, fontSize: 30, color: INK}}>
            {gameShow.showTitle} · 第{gameShow.episodeNo}期
          </div>
        </Tile>
      </div>
      {timing.scene.kind !== 'title' ? <Lamps t={t} litUntil={won} current={current} x={700} y={104} size={40} /> : null}
    </>
  );
};

export const VocabGameShowVideo: React.FC = () => {
  useFonts(GAME_SHOW_FONTS);
  const frame = useCurrentFrame();
  const t = frame / FPS;
  const timing = GAME_SHOW.sceneAt(t);
  const Component = SCENE_COMPONENTS[timing.scene.kind];
  const scale = punchScale(t);
  return (
    <AbsoluteFill style={{background: INK}}>
      <SetBackground set={timing.scene.set} t={t} />
      <AbsoluteFill style={{transform: `scale(${scale})`, transformOrigin: '540px 860px'}}>
        <Component timing={timing} t={t} />
      </AbsoluteFill>
      <Hud t={t} />
      <TelopPlate t={t} keywordColor={HUES[timing.scene.set.hue].floor} />
      <CutFlash t={t} />
      <AbsoluteFill style={{background: INK, opacity: 1 - fadeOut(frame, GAME_SHOW.duration)}} />
      <EpisodeAudio lines={GAME_SHOW.lines} cues={GAME_SHOW.cues} silences={GAME_SHOW.silences} duration={GAME_SHOW.duration} isVoiceActive={GAME_SHOW.isVoiceActive} />
    </AbsoluteFill>
  );
};
