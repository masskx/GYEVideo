import {FontKey, stack} from '../core/fonts';

// Halftone Dossier house palette for Gaokao vocabulary: paper + one dark ink + four spot inks.
// The brand yellow is the highlight ink, so the series still reads as 小猪盖被.
export const INK = {
  paper: '#F3EAD6',
  paperLight: '#FBF6EA',
  ink: '#1C2340', // outlines, body text, caption bar, fade-out colour
  overprint: '#2F64D8', // misregistration shadows, prefixes
  highlight: '#FFC62B', // keywords, roots, numerals
  stamp: '#E2412F', // stamps and alarms only
} as const;

export type InkName = 'ink' | 'overprint' | 'highlight' | 'stamp';

export const FONT = {
  headline: stack('serifBlack'),
  display: stack('bagel', 'sansBlack'),
  hand: stack('kuaile', 'sansBlack'),
  mono: stack('mono', 'sansBlack'),
  sans: stack('sansBlack'),
} as const;

export const DOSSIER_FONTS: FontKey[] = ['serifBlack', 'sansBlack', 'bagel', 'kuaile', 'mono'];

// Safe area for Douyin: keep essentials clear of the top bar, right-side buttons and bottom copy.
export const SAFE = {
  top: 170,
  bottom: 1470,
  left: 70,
  right: 930,
  captionTop: 1500,
} as const;
