import {FontKey, stack} from '../core/fonts';

// Crayon picture book: a small box of crayons on warm paper; outlines in plum, never black.
export const CRAYON = {
  paper: '#F4EFE3',
  line: '#4A2C5A', // every outline and the printed words
  coral: '#F2836B',
  sand: '#F3D19C',
  teal: '#3FA7A0',
  sky: '#BFE4F2',
  lemon: '#FFD23F', // the brand yellow: target-word highlight
  grass: '#7CC36A',
  rose: '#F49AB5',
  night: '#2B3A67',
  nightDeep: '#1C2546',
  brown: '#9C6B4E',
  white: '#FFFFFF',
} as const;

export const FONT = {
  story: stack('nunito', 'sansMedium'),
  title: stack('caveat', 'kuaile'),
  zh: stack('sansMedium'),
  zhHand: stack('kuaile', 'sansMedium'),
} as const;

export const PICTURE_BOOK_FONTS: FontKey[] = ['nunito', 'caveat', 'kuaile', 'sansMedium'];

// Frame layout: the illustration page on top, the printed words below.
export const PAGE = {x: 40, y: 170, w: 1000, h: 800};
export const TEXT_TOP = 1010;
