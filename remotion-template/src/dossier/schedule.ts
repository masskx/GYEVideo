import {dossier, DossierScene, DossierWord} from '../data/dossier';
import {episodeConfig} from '../data/episodeConfig';
import {generatedVoiceTimeline} from '../data/generatedVoiceTimeline';
import {voiceScript} from '../data/voiceScript';

// One timeline drives picture, captions, SFX and the synthesized score.
// Voice durations come from generatedVoiceTimeline (real TTS); visuals hang off the lines,
// and scene starts snap to the score's half-beat grid so cuts land on the music.

export const DOSSIER_FPS = 30;
export const DOSSIER_WIDTH = 1080;
export const DOSSIER_HEIGHT = 1920;

export type SfxId = 'pop' | 'stamp' | 'stamp-small' | 'shutter' | 'whoosh' | 'paper' | 'type' | 'pin' | 'bell';

export type Cue = {name: string; t: number; sfx?: SfxId; gain?: number};

export type LineTiming = {
  id: string;
  text: string;
  subtitle: string;
  keywords: string[];
  start: number;
  end: number;
  holdEnd: number;
  audio?: string;
};

export type SceneTiming = {
  scene: DossierScene;
  index: number;
  start: number;
  end: number;
  lines: LineTiming[];
  cues: Cue[];
};

const MIN_CAPTION_HOLD = 1.8;
const CAPTION_TAIL = 0.6;
const SCENE_LEAD_IN = 0.35;

const beat = 60 / dossier.score.bpm;
const halfBeat = beat / 2;
const snapUp = (t: number) => Math.ceil(t / halfBeat - 1e-6) * halfBeat;

// Before TTS exists, estimate ~5 spoken characters per second so the studio preview still works.
const estimateDuration = (text: string) => Math.max(1.2, text.replace(/[，。：？！、\s]/g, '').length / 5);

const voiceById = new Map(voiceScript.map((line) => [line.id, line]));
const timingById = new Map(generatedVoiceTimeline.map((item) => [item.id, item]));

export const wordById = (id?: string): DossierWord | undefined => dossier.words.find((word) => word.id === id);

// Time at which `token` is spoken inside a line, estimated from its character position.
export const spokenAt = (line: LineTiming, token: string, fallback = 0.5) => {
  const index = line.text.indexOf(token);
  const fraction = index < 0 ? fallback : index / Math.max(line.text.length, 1);
  return line.start + (line.end - line.start) * fraction;
};

const buildLines = () => {
  const scenes: SceneTiming[] = [];
  let cursor = 0;

  dossier.scenes.forEach((scene, index) => {
    const start = index === 0 ? 0 : snapUp(cursor);
    let lineCursor = start + (index === 0 ? 0.25 : SCENE_LEAD_IN);
    const lines: LineTiming[] = [];

    for (const id of scene.lines) {
      // Root.tsx registers every composition, so a non-dossier episode must not break this module:
      // a missing line becomes a short placeholder instead of an error.
      const voice = voiceById.get(id) ?? {id, text: id, subtitle: id};
      if (!voiceById.has(id) && episodeConfig.type === 'gaokao-dossier') {
        console.warn(`dossier scene "${scene.id}" references unknown voice line "${id}"`);
      }
      const meta = dossier.lineMeta[id] ?? {};
      const timing = timingById.get(id);
      const duration = timing ? timing.end - timing.start : estimateDuration(voice.text);
      lineCursor += meta.pauseBefore ?? 0;
      const lineStart = lineCursor;
      const lineEnd = lineStart + duration;
      const holdEnd = Math.max(lineStart + MIN_CAPTION_HOLD, lineEnd + CAPTION_TAIL) + (meta.holdAfter ?? 0);
      lines.push({
        id,
        text: voice.text,
        subtitle: voice.subtitle,
        keywords: meta.keywords ?? [],
        start: lineStart,
        end: lineEnd,
        holdEnd,
        audio: timing?.audio,
      });
      lineCursor = holdEnd;
    }

    scenes.push({scene, index, start, end: lineCursor, lines, cues: []});
    cursor = lineCursor;
  });

  // Each scene runs until the next one starts.
  scenes.forEach((timing, index) => {
    const next = scenes[index + 1];
    timing.end = next ? next.start : timing.end + 0.9;
  });

  return scenes;
};

const typeClicks = (name: string, from: number, length: number, count: number): Cue[] =>
  Array.from({length: count}, (_, i) => ({name: `${name}-${i}`, t: from + (length * i) / count, sfx: 'type' as const, gain: 0.7}));

const cuesFor = (timing: SceneTiming): Cue[] => {
  const {scene, start, lines} = timing;
  const [first, second] = lines;
  const word = wordById(scene.wordId);

  switch (scene.kind) {
    case 'cloze-case':
      return [
        {name: 'title', t: start + 0.05, sfx: 'stamp-small', gain: 0.7},
        {name: 'paper', t: start + 0.55, sfx: 'paper'},
        ...typeClicks('type', start + 0.75, 1.5, 12),
        ...dossier.hookCase.options.map((option, i) => ({name: `opt${i}`, t: spokenAt(second, option), sfx: 'pop' as const})),
        {name: 'loss', t: spokenAt(second, '选哪个'), sfx: 'stamp-small'},
      ];
    case 'fingerprint':
      return [
        {name: 'rows', t: start + 0.1, sfx: 'paper'},
        {name: 'loupe', t: spokenAt(first, '指纹'), sfx: 'whoosh', gain: 0.8},
        {name: 'zoom', t: spokenAt(first, 'duc'), sfx: 'shutter'},
        {name: 'match', t: first.end + 0.15, sfx: 'stamp'},
      ];
    case 'root-reveal':
      return [
        {name: 'plate', t: start + 0.2, sfx: 'shutter'},
        {name: 'meaning', t: spokenAt(first, 'lead'), sfx: 'pop'},
        {name: 'zh', t: spokenAt(first, '带领'), sfx: 'pop'},
        {name: 'stamp', t: first.end + 0.1, sfx: 'stamp'},
      ];
    case 'exhibit': {
      if (!word) {
        throw new Error(`exhibit scene "${scene.id}" needs a valid wordId`);
      }
      const prefix = word.parts.find((part) => part.role === 'prefix')?.text ?? word.word;
      const cues: Cue[] = [
        {name: 'numeral', t: start + 0.02, sfx: 'paper'},
        {name: 'parts', t: Math.max(start + 0.3, spokenAt(first, prefix, 0)), sfx: 'pop'},
        {name: 'literal', t: spokenAt(first, word.literal.slice(0, 3)), sfx: 'pop'},
        {name: 'word', t: spokenAt(first, word.word), sfx: 'pop'},
        {name: 'meaning', t: spokenAt(first, word.meaning.slice(0, 2), 0.75), sfx: 'pop', gain: 0.8},
        // Not narrated, so it comes in with the meaning to stay on screen long enough to read.
        {name: 'collocation', t: spokenAt(first, word.meaning.slice(0, 2), 0.75) + 0.4, sfx: 'paper', gain: 0.8},
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
      const arrow = spokenAt(first, '往回带');
      return [
        {name: 'card', t: start + 0.05, sfx: 'paper'},
        {name: 'arrow', t: arrow, sfx: 'pop'},
        {name: 'cross0', t: arrow + 0.35, sfx: 'type', gain: 1.2},
        {name: 'cross1', t: arrow + 0.6, sfx: 'type', gain: 1.2},
        {name: 'cross2', t: arrow + 0.85, sfx: 'type', gain: 1.2},
        {name: 'fill', t: spokenAt(second, 'reduce'), sfx: 'pop'},
        {name: 'verdict', t: spokenAt(second, '结'), sfx: 'stamp', gain: 1.25},
        {name: 'flash', t: spokenAt(second, '结'), sfx: 'shutter', gain: 0.6},
        {name: 'bell', t: second.end + 0.25, sfx: 'bell'},
      ];
    }
    case 'homework':
      return [
        {name: 'folder', t: start + 0.02, sfx: 'paper'},
        ...typeClicks('type', start + 0.5, 1.3, 10),
        {name: 'redact', t: spokenAt(first, '空里'), sfx: 'stamp-small'},
        {name: 'sticky', t: second.start, sfx: 'pop'},
        {name: 'end', t: spokenAt(second, '下一个'), sfx: 'stamp'},
      ];
    default:
      return [];
  }
};

export const DOSSIER_SCENES: SceneTiming[] = buildLines().map((timing) => ({...timing, cues: cuesFor(timing)}));

export const DOSSIER_LINES: LineTiming[] = DOSSIER_SCENES.flatMap((timing) => timing.lines);

export const DOSSIER_DURATION = DOSSIER_SCENES[DOSSIER_SCENES.length - 1].end;
export const DOSSIER_DURATION_FRAMES = Math.ceil(DOSSIER_DURATION * DOSSIER_FPS);

export const DOSSIER_CUES: Cue[] = DOSSIER_SCENES.flatMap((timing) => timing.cues).sort((a, b) => a.t - b.t);

// Stretches where the score empties out so a line or a stamp lands alone.
export const DOSSIER_SILENCES = DOSSIER_LINES.filter((line) => (dossier.lineMeta[line.id]?.pauseBefore ?? 0) > 0).map(
  (line) => ({from: line.start - (dossier.lineMeta[line.id]?.pauseBefore ?? 0) - 0.15, to: line.start + 0.05}),
);

export const toFrame = (seconds: number) => Math.round(seconds * DOSSIER_FPS);

export const cueTime = (timing: SceneTiming, name: string) => {
  const cue = timing.cues.find((item) => item.name === name);
  if (!cue) {
    throw new Error(`scene "${timing.scene.id}" has no cue "${name}"`);
  }
  return cue.t;
};

// Caption on screen at time t: from its line start until the next line starts (or its hold ends).
export const captionAt = (t: number) => {
  for (let i = DOSSIER_LINES.length - 1; i >= 0; i--) {
    const line = DOSSIER_LINES[i];
    if (t >= line.start) {
      return t < line.holdEnd ? line : undefined;
    }
  }
  return undefined;
};

export const isVoiceActive = (t: number) => DOSSIER_LINES.some((line) => t >= line.start && t < line.end);

export const SCORE_BEAT = beat;
