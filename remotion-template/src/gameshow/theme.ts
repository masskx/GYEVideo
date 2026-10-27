import {FontKey, stack} from '../core/fonts';
import type {SetHue} from '../data/gameShow';

// Game Show Flat: ink + paper + candy. One set = one hue (base, a lighter pattern, a darker floor).
export const INK = '#1B1B1B';
export const PAPER = '#FFFFFF';
export const CREAM = '#FFF4DC';
// Across every vocab template the root is the brand yellow.
export const ROOT_YELLOW = '#FFD23F';

export const HUES: Record<SetHue, {base: string; pattern: string; floor: string}> = {
  yellow: {base: '#FFD23F', pattern: '#FFE27A', floor: '#E0A800'},
  orange: {base: '#FF9F1C', pattern: '#FFB54F', floor: '#D97800'},
  pink: {base: '#FF6B9A', pattern: '#FF8FB3', floor: '#D9467A'},
  green: {base: '#3DDC97', pattern: '#6EE6B1', floor: '#1FAE70'},
  sky: {base: '#4CC9F0', pattern: '#7AD8F4', floor: '#1E9FCB'},
  blue: {base: '#4361EE', pattern: '#6A82F2', floor: '#2A43C2'},
  purple: {base: '#7B5CFA', pattern: '#9A82FB', floor: '#5A3DD6'},
  red: {base: '#FF4D4D', pattern: '#FF7676', floor: '#D12F2F'},
  navy: {base: '#1B1F5E', pattern: '#2A307F', floor: '#11143D'},
};

export const FONT = {
  telop: stack('fredoka', 'sansBlack'),
  zh: stack('sansBlack'),
  hand: stack('kuaile', 'sansBlack'),
  mono: stack('mono', 'sansBlack'),
} as const;

export const GAME_SHOW_FONTS: FontKey[] = ['fredoka', 'sansBlack', 'kuaile', 'mono'];

// Floor band (characters stand on its top line).
export const FLOOR_Y = 1380;
export const CAPTION_TOP = 1500;
