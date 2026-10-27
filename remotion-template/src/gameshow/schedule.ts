import {gameShow, GameShowScene, GameShowWord} from '../data/gameShow';
import {episodeConfig} from '../data/episodeConfig';
import {buildTimeline, Cue, SceneTiming} from '../core/timeline';

// Game Show cues. Every token comes from data/gameShow.ts, never from this file.

export type GameShowTiming = SceneTiming<GameShowScene>;

export const wordById = (id?: string): GameShowWord | undefined => gameShow.words.find((word) => word.id === id);

export const GAME_SHOW = buildTimeline<GameShowScene>({
  scenes: gameShow.scenes,
  lineMeta: gameShow.lineMeta,
  bpm: gameShow.score.bpm,
  active: episodeConfig.type === 'vocab-game-show',
  cuesFor: (timing, {spokenAt, halfBeat}): Cue[] => {
    const {scene, start, lines} = timing;
    const [first, second] = lines;
    switch (scene.kind) {
      case 'title':
        return [
          {name: 'title', t: start + 0.1, sfx: 'crash', gain: 0.5},
          {name: 'pig', t: start + 0.7, sfx: 'boing'},
          ...gameShow.words.map((_, i) => ({name: `lamp${i}`, t: start + 1.1 + i * halfBeat, sfx: 'pop' as const, gain: 0.6})),
        ];
      case 'root-card':
        return [
          {name: 'banner', t: start + 0.05, sfx: 'whoosh', gain: 0.7},
          {name: 'tile', t: spokenAt(first, gameShow.root.text, 0.45), sfx: 'stamp-small'},
          {name: 'meaning', t: spokenAt(first, gameShow.root.meaning.slice(0, 1), 0.75), sfx: 'pop'},
        ];
      case 'round': {
        const word = wordById(scene.wordId);
        if (!word) {
          throw new Error(`round scene "${scene.id}" needs a valid wordId`);
        }
        const literal = spokenAt(first, word.literal, 0.45);
        const meaning = spokenAt(first, word.meaning.slice(0, 2), 0.85);
        return [
          {name: 'card', t: start + 0.02, sfx: 'crash', gain: 0.4},
          {name: 'prefix', t: Math.max(start + 0.5, spokenAt(first, word.prefix.text, 0.2)), sfx: 'boing'},
          {name: 'root', t: literal - 0.08, sfx: 'stamp-small'},
          {name: 'literal', t: literal, sfx: 'pop', gain: 0.7},
          {name: 'merge', t: spokenAt(first, word.word, 0.7), sfx: 'pop'},
          {name: 'meaning', t: meaning, sfx: 'pop'},
          {name: 'collocation', t: meaning + 0.35, sfx: 'pop', gain: 0.5},
          {name: 'judge', t: first.end + 0.1, sfx: 'ding'},
        ];
      }
      case 'lightning':
        return [
          {name: 'go', t: start + 0.05, sfx: 'crash', gain: 0.6},
          ...gameShow.words.flatMap((word, i) => [
            {name: `w${i}`, t: spokenAt(first, word.word, (i + 0.2) / gameShow.words.length), sfx: 'tick' as const, gain: 1.4},
            {name: `m${i}`, t: spokenAt(first, word.meaning.slice(0, 2), (i + 0.6) / gameShow.words.length), sfx: 'pop' as const, gain: 0.7},
          ]),
        ];
      case 'report':
        return [
          {name: 'card', t: start + 0.05, sfx: 'paper'},
          ...gameShow.words.map((_, i) => ({name: `row${i}`, t: start + 0.3 + i * halfBeat, sfx: 'type' as const, gain: 1.2})),
          {name: 'grade', t: Math.max(start + 0.3 + gameShow.words.length * halfBeat, spokenAt(first, gameShow.grade, 0.8)), sfx: 'stamp'},
          {name: 'crash', t: Math.max(start + 0.3 + gameShow.words.length * halfBeat, spokenAt(first, gameShow.grade, 0.8)), sfx: 'crash', gain: 0.5},
        ];
      case 'bonus':
        return [
          {name: 'board', t: start + 0.05, sfx: 'buzzer', gain: 0.5},
          ...gameShow.bonus.options.map((_, i) => ({name: `opt${i}`, t: start + 0.6 + i * 0.15, sfx: 'pop' as const, gain: 0.7})),
          {name: 'sticky', t: (second ?? first).start, sfx: 'pop'},
          {name: 'end', t: spokenAt(second ?? first, '下一个', 0.6), sfx: 'ding'},
        ];
      default:
        return [];
    }
  },
});
