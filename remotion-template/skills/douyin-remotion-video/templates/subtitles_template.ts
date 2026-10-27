export type Subtitle = {
  start: number;
  end: number;
  text: string;
};

// Prototype-only fallback. After TTS generation, prefer generatedVoiceTimeline.ts.
export const subtitles: Subtitle[] = [
  {start: 0, end: 1, text: '<hook subtitle>'},
  {start: 1, end: 2.5, text: '<next subtitle>'},
];
