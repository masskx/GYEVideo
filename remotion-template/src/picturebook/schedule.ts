import {pictureBook, PictureBookScene, StoryWord} from '../data/pictureBook';
import {episodeConfig} from '../data/episodeConfig';
import {buildTimeline, Cue, LineTiming, SceneTiming, wordTimes} from '../core/timeline';

// Picture-book cues: page turns, a gloss per target word as it is read, word cards, the quiz.

export type PictureBookTiming = SceneTiming<PictureBookScene>;

const norm = (w: string) => w.toLowerCase().replace(/[^a-z'-]/g, '');

// Target word spoken in a line, with its time.
export const targetsIn = (line: LineTiming): {target: StoryWord; start: number; end: number; index: number}[] =>
  wordTimes(line).flatMap((w) => {
    const target = pictureBook.targets.find((tw) => norm(tw.word) === norm(w.word) || norm(tw.lemma) === norm(w.word));
    return target ? [{target, start: w.start, end: w.end, index: w.index}] : [];
  });

export const PICTURE_BOOK = buildTimeline<PictureBookScene>({
  scenes: pictureBook.scenes,
  lineMeta: pictureBook.lineMeta,
  bpm: pictureBook.score.bpm,
  active: episodeConfig.type === 'reading-picture-book',
  captionTail: 0.75, // the Chinese line needs reading time too
  leadIn: 0.6, // room for the page turn
  cuesFor: (timing, {beat}): Cue[] => {
    const {scene, start, lines} = timing;
    const turn: Cue[] = timing.index > 0 ? [{name: 'turn', t: start, sfx: 'page'}] : [];
    switch (scene.kind) {
      case 'cover':
        return [{name: 'title', t: start + 0.3, sfx: 'chime', gain: 0.8}];
      case 'page':
        return [
          ...turn,
          ...lines.flatMap((line) => targetsIn(line).map((hit) => ({name: `gloss-${line.id}-${hit.index}`, t: hit.start, sfx: 'sparkle' as const, gain: 0.45}))),
        ];
      case 'words':
        return [
          ...turn,
          ...pictureBook.targets.map((target, i) => {
            const hit = targetsIn(lines[0]).find((h) => h.target.id === target.id);
            return {name: `card${i}`, t: hit ? hit.start : start + 1 + i * 0.5, sfx: 'pop' as const, gain: 0.6};
          }),
        ];
      case 'question': {
        const [q, answer] = lines;
        const ticks: Cue[] = [];
        if (answer) {
          for (let t = q.holdEnd; t < answer.start - 0.2; t += beat) {
            ticks.push({name: `tick${ticks.length}`, t, sfx: 'tick', gain: 1.4});
          }
        }
        return [
          ...turn,
          ...pictureBook.question.options.map((_, i) => ({name: `opt${i}`, t: start + 0.6 + i * 0.2, sfx: 'pop' as const, gain: 0.6})),
          ...ticks,
          {name: 'answer', t: answer ? answer.start + 0.5 : q.end + 1, sfx: 'chime'},
          {name: 'evidence', t: answer ? answer.start + 1.1 : q.end + 1.6, sfx: 'sparkle', gain: 0.5},
        ];
      }
      case 'end':
        return [...turn, {name: 'theend', t: start + 0.5, sfx: 'chime', gain: 0.8}];
      default:
        return [];
    }
  },
});
