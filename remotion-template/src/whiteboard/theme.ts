import {FontKey, stack} from '../core/fonts';

// Whiteboard: three marker colours with fixed meanings, plus the brand-yellow highlighter for roots.
export const MARKER = {
  black: '#23262C', // words and structure
  blue: '#2A5CB3', // parts and literal meanings (the process)
  red: '#C8363A', // the exam meaning (the thing that matters)
} as const;
export type MarkerColor = keyof typeof MARKER;

// Across every vocab template the root is the brand yellow; here it is a highlighter swipe.
export const HIGHLIGHTER = 'rgba(255, 210, 63, 0.75)';
export const BOARD_BG = '#F7F6F2';
export const LABEL = 'rgba(252, 251, 247, 0.92)';

export const FONT = {
  hand: stack('caveat', 'kuaile'),
  zh: stack('kuaile', 'caveat'),
  label: stack('caveat', 'kuaile'),
} as const;

export const WHITEBOARD_FONTS: FontKey[] = ['caveat', 'kuaile', 'sansBlack'];

export const CAPTION_TOP = 1520;
