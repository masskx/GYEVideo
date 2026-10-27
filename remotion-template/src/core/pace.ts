import {episodeConfig} from '../data/episodeConfig';

// How fast an episode moves. One setting drives the voice speed, the gaps the timeline leaves around
// every line, the target length, and the energy and tempo of the music (scripts/music/).
// An episode sets it in data/episodeConfig.ts (`pace: 'fast'`); episodes without it are 'relaxed'
// (how every episode was cut before paces existed). New episodes default to 'fast'.
//
// Measured on the 2026-10 reference episodes at 'relaxed': 25–30 % of the runtime had no voice
// (13–21 s per video) and the narration ran at 2.6–3.8 syllables per second. 'fast' targets
// ≤ 15 % dead air and about 4.5 syllables per second: the pace of Douyin / TikTok study videos.

export type PaceId = 'relaxed' | 'standard' | 'fast';

export type PaceProfile = {
  id: PaceId;
  label: string;
  voiceRate: number; // multiplies the speedHint rate sent to the TTS
  minHold: number; // a caption stays at least this long (s)
  tailScale: number; // × the template's caption tail after each line
  leadInScale: number; // × the template's gap between a scene start and its first line
  pauseScale: number; // × lineMeta.pauseBefore (silences before payoffs)
  holdScale: number; // × lineMeta.holdAfter
  endTail: number; // seconds after the last line
  length: [number, number]; // × the template's targetSeconds (relaxed range) → this pace's range
  music: {energy: number; tempo: 'slow' | 'mid' | 'fast'}; // read by the music engine
};

export const PACES: Record<PaceId, PaceProfile> = {
  relaxed: {
    id: 'relaxed',
    label: '舒缓（长视频、精读）',
    voiceRate: 1.0,
    minHold: 1.8,
    tailScale: 1,
    leadInScale: 1,
    pauseScale: 1,
    holdScale: 1,
    endTail: 0.9,
    length: [1, 1],
    music: {energy: 0.45, tempo: 'slow'},
  },
  standard: {
    id: 'standard',
    label: '标准',
    voiceRate: 1.08,
    minHold: 1.5,
    tailScale: 0.7,
    leadInScale: 0.7,
    pauseScale: 0.75,
    holdScale: 0.7,
    endTail: 0.8,
    length: [0.85, 0.9],
    music: {energy: 0.65, tempo: 'mid'},
  },
  fast: {
    id: 'fast',
    label: '快节奏（抖音 / TikTok）',
    voiceRate: 1.15,
    minHold: 1.2,
    tailScale: 0.4,
    leadInScale: 0.45,
    pauseScale: 0.55,
    holdScale: 0.5,
    endTail: 0.7,
    length: [0.7, 0.8],
    music: {energy: 0.85, tempo: 'fast'},
  },
};

export const isPace = (id: string): id is PaceId => id in PACES;

export const paceId = (): PaceId => {
  const id = (episodeConfig as {pace?: string}).pace ?? 'relaxed';
  return isPace(id) ? id : 'relaxed';
};

// The active episode's pace.
export const PACE: PaceProfile = PACES[paceId()];

// TTS rate for a line: the speedHint's base rate × the pace (CosyVoice accepts 0.5–2.0).
export const baseRate = (speedHint: string) => {
  if (speedHint.includes('ultra-fast')) return 1.65;
  if (speedHint.includes('slow')) return 0.98;
  if (speedHint.includes('medium')) return 1.0;
  if (speedHint.includes('very-fast')) return 1.28;
  if (speedHint.includes('fast')) return 1.18;
  return 1.08;
};
export const ttsRate = (speedHint: string, pace: PaceProfile = PACE) => Math.min(2, Math.round(baseRate(speedHint) * pace.voiceRate * 100) / 100);

// The length range of a template at a pace.
export const lengthRange = (targetSeconds: [number, number], pace: PaceProfile = PACE): [number, number] => [
  Math.round(targetSeconds[0] * pace.length[0]),
  Math.round(targetSeconds[1] * pace.length[1]),
];
