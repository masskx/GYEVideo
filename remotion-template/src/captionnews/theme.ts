import {FontKey, stack} from '../core/fonts';

// Captions-first social news: dark grounds, white heavy captions, one keyword on the yellow block.
export const NEWS = {
  ink: '#0E0E10',
  white: '#FFFFFF',
  zh: '#C9D1E0',
  yellow: '#FFD23F', // the brand yellow: the keyword block
  red: '#FF4D4D',
  grounds: ['#0D1321', '#141414', '#0B2B30', '#22152E'],
} as const;

export const FONT = {
  caption: stack('interBlack', 'sansBlack'),
  body: stack('interSemi', 'sansMedium'),
  zh: stack('sansMedium'),
  zhBold: stack('sansBlack'),
  mono: stack('mono', 'sansMedium'),
} as const;

export const CAPTION_NEWS_FONTS: FontKey[] = ['interBlack', 'interSemi', 'sansBlack', 'sansMedium', 'mono'];

export const GRAPHIC = {top: 240, height: 520};
export const CAPTION_TOP = 820;
