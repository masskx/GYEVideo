import {dossier, DossierScene, DossierWord} from '../data/dossier';
import {episodeConfig} from '../data/episodeConfig';
import {buildTimeline, Cue, LineTiming, SceneTiming, typeClicks} from '../core/timeline';

// Dossier cues. Every token comes from the episode data (or a fraction of the line), never from
// this file, so a new episode only edits data/dossier.ts and data/voiceScript.ts.

export type DossierTiming = SceneTiming<DossierScene>;

export const wordById = (id?: string): DossierWord | undefined => dossier.words.find((word) => word.id === id);

const at = (spokenAt: (line: LineTiming, token: string, fallback?: number) => number, line: LineTiming, token: string | undefined, fallback: number) =>
  token ? spokenAt(line, token, fallback) : line.start + (line.end - line.start) * fallback;

export const DOSSIER = buildTimeline<DossierScene>({
  scenes: dossier.scenes,
  lineMeta: dossier.lineMeta,
  bpm: dossier.score.bpm,
  active: episodeConfig.type === 'vocab-dossier',
  cuesFor: (timing, {spokenAt, halfBeat}): Cue[] => {
    const {scene, start, lines} = timing;
    const [first, second] = lines;
    const word = wordById(scene.wordId);
    const tok = scene.cueAt ?? {};
    const answer = dossier.hookCase.options[dossier.hookCase.answerIndex];

    switch (scene.kind) {
      case 'cloze-case':
        return [
          {name: 'title', t: start + 0.05, sfx: 'stamp-small', gain: 0.7},
          {name: 'paper', t: start + 0.55, sfx: 'paper'},
          ...typeClicks('type', start + 0.75, 1.5, 12),
          ...dossier.hookCase.options.map((option, i) => ({
            name: `opt${i}`,
            t: second ? spokenAt(second, option, 0.15 + i * 0.18) : start + 2 + i * 0.4,
            sfx: 'pop' as const,
          })),
          {name: 'loss', t: at(spokenAt, second ?? first, tok.loss, 0.85), sfx: 'stamp-small'},
        ];
      case 'fingerprint':
        return [
          {name: 'rows', t: start + 0.1, sfx: 'paper'},
          {name: 'loupe', t: at(spokenAt, first, tok.loupe, 0.4), sfx: 'whoosh', gain: 0.8},
          {name: 'zoom', t: spokenAt(first, dossier.root.text, 0.8), sfx: 'shutter'},
          {name: 'match', t: first.end + 0.15, sfx: 'stamp'},
        ];
      case 'root-reveal':
        return [
          {name: 'plate', t: start + 0.2, sfx: 'shutter'},
          {name: 'meaning', t: spokenAt(first, dossier.root.en, 0.3), sfx: 'pop'},
          {name: 'zh', t: spokenAt(first, dossier.root.meaning.slice(0, 2), 0.6), sfx: 'pop'},
          {name: 'stamp', t: first.end + 0.1, sfx: 'stamp'},
        ];
      case 'exhibit': {
        if (!word) {
          throw new Error(`exhibit scene "${scene.id}" needs a valid wordId`);
        }
        const prefix = word.parts.find((part) => part.role === 'prefix')?.text ?? word.word;
        const meaningAt = spokenAt(first, word.meaning.slice(0, 2), 0.75);
        const cues: Cue[] = [
          {name: 'numeral', t: start + 0.02, sfx: 'paper'},
          {name: 'parts', t: Math.max(start + 0.3, spokenAt(first, prefix, 0)), sfx: 'pop'},
          {name: 'literal', t: spokenAt(first, word.literal.slice(0, 3), 0.3), sfx: 'pop'},
          {name: 'word', t: spokenAt(first, word.word, 0.55), sfx: 'pop'},
          {name: 'meaning', t: meaningAt, sfx: 'pop', gain: 0.8},
          // Not narrated, so it comes in with the meaning to stay on screen long enough to read.
          {name: 'collocation', t: meaningAt + 0.4, sfx: 'paper', gain: 0.8},
        ];
        if (word.bonus) {
          cues.push({name: 'bonus', t: spokenAt(first, word.bonus.word, 0.9), sfx: 'pop', gain: 0.8});
        }
        return cues;
      }
      case 'evidence-board':
        return [
          ...dossier.words.map((_, i) => ({name: `pin${i}`, t: start + 0.15 + i * halfBeat, sfx: 'pin' as const})),
          {name: 'strings', t: start + 0.15 + dossier.words.length * halfBeat, sfx: 'whoosh', gain: 0.6},
          {name: 'shake', t: first.end, sfx: 'stamp-small', gain: 0.8},
        ];
      case 'solve': {
        const arrow = at(spokenAt, first, tok.arrow, 0.6);
        const verdictLine = second ?? first;
        const verdict = at(spokenAt, verdictLine, tok.verdict, 0.7);
        return [
          {name: 'card', t: start + 0.05, sfx: 'paper'},
          {name: 'arrow', t: arrow, sfx: 'pop'},
          {name: 'cross0', t: arrow + 0.35, sfx: 'type', gain: 1.2},
          {name: 'cross1', t: arrow + 0.6, sfx: 'type', gain: 1.2},
          {name: 'cross2', t: arrow + 0.85, sfx: 'type', gain: 1.2},
          {name: 'fill', t: Math.min(verdict - 0.1, spokenAt(verdictLine, answer, 0.2)), sfx: 'pop'},
          {name: 'verdict', t: verdict, sfx: 'stamp', gain: 1.25},
          {name: 'flash', t: verdict, sfx: 'shutter', gain: 0.6},
          {name: 'bell', t: verdictLine.end + 0.25, sfx: 'bell'},
        ];
      }
      case 'homework':
        return [
          {name: 'folder', t: start + 0.02, sfx: 'paper'},
          ...typeClicks('type', start + 0.5, 1.3, 10),
          {name: 'redact', t: at(spokenAt, first, tok.redact, 0.85), sfx: 'stamp-small'},
          {name: 'sticky', t: (second ?? first).start, sfx: 'pop'},
          {name: 'end', t: at(spokenAt, second ?? first, tok.end, 0.55), sfx: 'stamp'},
        ];
      default:
        return [];
    }
  },
});
