import {whiteboard, WhiteboardScene, WhiteboardWord} from '../data/whiteboard';
import {episodeConfig} from '../data/episodeConfig';
import {buildTimeline, Cue, LineTiming, SceneTiming} from '../core/timeline';

// Whiteboard cues. A "write" cue is the moment a term must be finished, because writing finishes on
// the word; the board computes each write's start from its length. Tokens come from the data.

export type WhiteboardTiming = SceneTiming<WhiteboardScene>;

export const wordById = (id?: string): WhiteboardWord | undefined => whiteboard.words.find((word) => word.id === id);

// How long a term takes to write: a sped-up lesson, never so fast the stroke order is lost.
export const writeDuration = (text: string) => {
  const cjk = (text.match(/[一-鿿]/g) ?? []).length;
  const latin = text.replace(/[一-鿿]/g, '').replace(/\s/g, '').length;
  return Math.min(1.5, Math.max(0.35, cjk * 0.12 + latin * 0.055));
};

const at = (spokenAt: (line: LineTiming, token: string, fallback?: number) => number, line: LineTiming, token: string | undefined, fallback: number) =>
  token ? spokenAt(line, token, fallback) : line.start + (line.end - line.start) * fallback;

const marker = (name: string, t: number, text: string): Cue[] => {
  const d = writeDuration(text);
  return [{name, t, sfx: d > 0.45 ? 'marker' : 'marker-short', gain: 0.8}];
};

export const WHITEBOARD = buildTimeline<WhiteboardScene>({
  scenes: whiteboard.scenes,
  lineMeta: whiteboard.lineMeta,
  bpm: whiteboard.score.bpm,
  active: episodeConfig.type === 'vocab-whiteboard',
  cuesFor: (timing, {spokenAt}): Cue[] => {
    const {scene, start, lines} = timing;
    const [first, second] = lines;
    const tok = scene.cueAt ?? {};
    const word = wordById(scene.wordId);
    const partsText = word ? word.parts.map((part) => part.text).join(' + ') : '';
    switch (scene.kind) {
      case 'title':
        return [...marker('title', at(spokenAt, first, undefined, 0.85), whiteboard.title), ...marker('subtitle', first.end + 0.5, '高考词汇 白板')];
      case 'root':
        return [
          {name: 'circle', t: start + 0.9, sfx: 'marker', gain: 0.8},
          ...marker('root', at(spokenAt, first, tok.root ?? whiteboard.root.forms[whiteboard.root.forms.length - 1], 0.4) + 0.45, whiteboard.root.forms.join(' / ')),
          ...marker('meaning', spokenAt(first, whiteboard.root.meaning, 0.9), `= ${whiteboard.root.en} ${whiteboard.root.meaning}`),
        ];
      case 'branch': {
        if (!word) throw new Error(`branch scene "${scene.id}" needs a valid wordId`);
        const wordAt = Math.max(start + 0.7, at(spokenAt, first, tok.word ?? word.word, 0.05) + 0.35);
        const meaningAt = at(spokenAt, first, tok.meaning, 0.85);
        return [
          {name: 'arrow', t: start + 0.55, sfx: 'marker', gain: 0.6},
          ...marker('word', wordAt, word.word),
          ...marker('parts', Math.max(wordAt + 0.4, at(spokenAt, first, tok.parts, 0.3)), partsText),
          ...marker('literal', Math.max(wordAt + 0.8, at(spokenAt, first, tok.literal, 0.55)), word.literal),
          ...marker('meaning', Math.max(wordAt + 1.2, meaningAt + 0.3), word.meaning),
          ...marker('example', Math.max(wordAt + 1.6, meaningAt + 0.9), word.example.en),
        ];
      }
      case 'twist': {
        if (!word) throw new Error(`twist scene "${scene.id}" needs a valid wordId`);
        const answer = second ?? first;
        return [
          {name: 'arrow', t: start + 0.55, sfx: 'marker', gain: 0.6},
          ...marker('word', Math.max(start + 0.7, at(spokenAt, first, tok.word, 0.25) + 0.35), word.word),
          ...marker('meaning-first', at(spokenAt, first, tok.meaning, 0.6) + 0.25, word.meaning),
          ...marker('wrong', at(spokenAt, first, tok.wrong, 0.85) + 0.3, word.twist?.wrong ?? '?'),
          {name: 'erase', t: answer.start - 0.45, sfx: 'erase'},
          ...marker('parts', at(spokenAt, answer, tok.parts, 0.15) + 0.4, partsText),
          ...marker('literal', at(spokenAt, answer, tok.literal, 0.5) + 0.4, word.literal),
          {name: 'ring', t: answer.end - 0.2, sfx: 'marker', gain: 0.9},
          ...marker('example', answer.end + 0.3, word.example.en),
        ];
      }
      case 'overview':
        return [
          {name: 'pull', t: start, sfx: 'whoosh', gain: 0.5},
          {name: 'ring2', t: spokenAt(first, whiteboard.root.meaning, 0.85), sfx: 'marker', gain: 0.8},
          {name: 'cap', t: first.end + 0.2, sfx: 'cap'},
        ];
      case 'homework':
        return [
          {name: 'magnet1', t: start + 0.5, sfx: 'magnet'},
          {name: 'magnet2', t: start + 0.75, sfx: 'magnet'},
          ...marker('stem', start + 1.6, 'question'),
          ...marker('sign', first.end + 0.2, '评论区'),
        ];
      default:
        return [];
    }
  },
});
