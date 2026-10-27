import {generatedVoiceTimeline} from '../data/generatedVoiceTimeline';
import {voiceScript} from '../data/voiceScript';

// One timeline drives picture, captions, SFX and the synthesized score, for every template.
// Voice durations come from generatedVoiceTimeline (real TTS); each scene hangs off its voice
// lines, captions hold long enough to read, and scene starts snap to the score's half-beat grid.

export type SfxId =
  // print / dossier
  | 'pop'
  | 'stamp'
  | 'stamp-small'
  | 'shutter'
  | 'whoosh'
  | 'paper'
  | 'type'
  | 'pin'
  | 'bell'
  // game show
  | 'boing'
  | 'ding'
  | 'drumroll'
  | 'cowbell'
  | 'crash'
  | 'buzzer'
  // whiteboard
  | 'marker'
  | 'marker-short'
  | 'cap'
  | 'magnet'
  | 'erase'
  // picture book
  | 'page'
  | 'chime'
  | 'sparkle'
  // caption news
  | 'hit'
  | 'tick'
  | 'swoosh';

export type Cue = {name: string; t: number; sfx?: SfxId; gain?: number};

export type LineMeta = {
  keywords?: string[]; // highlighted in the caption
  pauseBefore?: number; // seconds of near-silence before the line (the score drops out)
  holdAfter?: number; // extra seconds after the line
};

export type SceneBase = {id: string; kind: string; lines: string[]};

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

export type SceneTiming<S extends SceneBase = SceneBase> = {
  scene: S;
  index: number;
  start: number;
  end: number;
  lines: LineTiming[];
  cues: Cue[];
};

export type TimelineOptions<S extends SceneBase> = {
  scenes: S[];
  lineMeta: Record<string, LineMeta>;
  bpm: number;
  // True when the active episode uses this template; only then are missing lines reported.
  active: boolean;
  cuesFor: (timing: SceneTiming<S>, helpers: TimelineHelpers) => Cue[];
  minHold?: number;
  captionTail?: number;
  leadIn?: number;
  endTail?: number;
};

export type TimelineHelpers = {
  spokenAt: (line: LineTiming, token: string, fallback?: number) => number;
  halfBeat: number;
  beat: number;
};

export type Timeline<S extends SceneBase> = {
  scenes: SceneTiming<S>[];
  lines: LineTiming[];
  cues: Cue[];
  silences: {from: number; to: number}[];
  duration: number;
  durationFrames: number;
  beat: number;
  sceneAt: (t: number) => SceneTiming<S>;
  captionAt: (t: number) => LineTiming | undefined;
  isVoiceActive: (t: number) => boolean;
};

export const FPS = 30;
export const WIDTH = 1080;
export const HEIGHT = 1920;
export const toFrame = (seconds: number) => Math.round(seconds * FPS);

const voiceById = new Map(voiceScript.map((line) => [line.id, line]));
const timingById = new Map(generatedVoiceTimeline.map((item) => [item.id, item]));

// Before TTS exists, estimate the length so the studio preview still works: ~5 CJK characters
// or ~14 Latin characters per second.
const estimateDuration = (text: string) => {
  const cjk = (text.match(/[一-鿿]/g) ?? []).length;
  const latin = text.replace(/[一-鿿]/g, '').replace(/[^A-Za-z]/g, '').length;
  return Math.max(1.2, cjk / 5 + latin / 14);
};

// Speaking weight of each character: punctuation carries a pause.
const charWeight = (char: string) => {
  if (/[.!?。！？]/.test(char)) {
    return 5;
  }
  if (/[,;:，；：、]/.test(char)) {
    return 3;
  }
  if (/\s/.test(char)) {
    return 0.6;
  }
  return 1;
};

// Time at which `token` is spoken inside a line, estimated from its weighted character position.
export const spokenAt = (line: LineTiming, token: string, fallback = 0.5) => {
  const index = line.text.indexOf(token);
  if (index < 0) {
    return line.start + (line.end - line.start) * fallback;
  }
  const chars = Array.from(line.text);
  const total = chars.reduce((sum, char) => sum + charWeight(char), 0);
  const before = Array.from(line.text.slice(0, index)).reduce((sum, char) => sum + charWeight(char), 0);
  return line.start + (line.end - line.start) * (before / Math.max(total, 1));
};

// Start time of every word in a line (for karaoke highlights): same weighted estimate.
export const wordTimes = (line: LineTiming) => {
  const words: {word: string; start: number; end: number; index: number}[] = [];
  const chars = Array.from(line.text);
  const total = chars.reduce((sum, char) => sum + charWeight(char), 0);
  let weight = 0;
  let current = '';
  let currentStart = 0;
  let wordIndex = 0;
  const flush = () => {
    if (current) {
      const start = line.start + (line.end - line.start) * (currentStart / Math.max(total, 1));
      const end = line.start + (line.end - line.start) * (weight / Math.max(total, 1));
      words.push({word: current, start, end, index: wordIndex++});
      current = '';
    }
  };
  for (const char of chars) {
    if (/[A-Za-z'’\-]/.test(char)) {
      if (!current) {
        currentStart = weight;
      }
      current += char;
    } else {
      flush();
    }
    weight += charWeight(char);
  }
  flush();
  return words;
};

export const buildTimeline = <S extends SceneBase>(options: TimelineOptions<S>): Timeline<S> => {
  const {scenes: specs, lineMeta, bpm, active, cuesFor, minHold = 1.8, captionTail = 0.6, leadIn = 0.35, endTail = 0.9} = options;
  const beat = 60 / bpm;
  const halfBeat = beat / 2;
  const snapUp = (t: number) => Math.ceil(t / halfBeat - 1e-6) * halfBeat;

  const scenes: SceneTiming<S>[] = [];
  let cursor = 0;
  specs.forEach((scene, index) => {
    const start = index === 0 ? 0 : snapUp(cursor);
    let lineCursor = start + (index === 0 ? 0.25 : leadIn);
    const lines: LineTiming[] = [];
    for (const id of scene.lines) {
      // Root.tsx registers every composition, so an episode of another template must not break this
      // module: a missing line becomes a short placeholder instead of an error.
      const voice = voiceById.get(id) ?? {id, text: id, subtitle: id};
      if (!voiceById.has(id) && active) {
        console.warn(`scene "${scene.id}" references unknown voice line "${id}"`);
      }
      const meta = lineMeta[id] ?? {};
      const timing = timingById.get(id);
      const duration = timing ? timing.end - timing.start : estimateDuration(voice.text);
      lineCursor += meta.pauseBefore ?? 0;
      const lineStart = lineCursor;
      const lineEnd = lineStart + duration;
      const holdEnd = Math.max(lineStart + minHold, lineEnd + captionTail) + (meta.holdAfter ?? 0);
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
    timing.end = next ? next.start : timing.end + endTail;
  });

  const helpers: TimelineHelpers = {spokenAt, halfBeat, beat};
  for (const timing of scenes) {
    timing.cues = cuesFor(timing, helpers);
  }

  const lines = scenes.flatMap((timing) => timing.lines);
  const cues = scenes.flatMap((timing) => timing.cues).sort((a, b) => a.t - b.t);
  const silences = lines
    .filter((line) => (lineMeta[line.id]?.pauseBefore ?? 0) > 0)
    .map((line) => ({from: line.start - (lineMeta[line.id]?.pauseBefore ?? 0) - 0.15, to: line.start + 0.05}));
  const duration = scenes.length ? scenes[scenes.length - 1].end : 1;

  return {
    scenes,
    lines,
    cues,
    silences,
    duration,
    durationFrames: Math.max(1, Math.ceil(duration * FPS)),
    beat,
    sceneAt: (t) => scenes.find((s) => t >= s.start && t < s.end) ?? scenes[scenes.length - 1],
    captionAt: (t) => {
      for (let i = lines.length - 1; i >= 0; i--) {
        if (t >= lines[i].start) {
          return t < lines[i].holdEnd ? lines[i] : undefined;
        }
      }
      return undefined;
    },
    isVoiceActive: (t) => lines.some((line) => t >= line.start && t < line.end),
  };
};

export const cueTime = (timing: SceneTiming, name: string) => {
  const cue = timing.cues.find((item) => item.name === name);
  if (!cue) {
    throw new Error(`scene "${timing.scene.id}" has no cue "${name}"`);
  }
  return cue.t;
};

export const typeClicks = (name: string, from: number, length: number, count: number, sfx: SfxId = 'type', gain = 0.7): Cue[] =>
  Array.from({length: count}, (_, i) => ({name: `${name}-${i}`, t: from + (length * i) / count, sfx, gain}));
