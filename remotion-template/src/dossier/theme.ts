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

// Local colours owned by the mascot; they appear nowhere else.
export const PIG = {
  body: '#F6A7BA',
  belly: '#FBD3DC',
  snout: '#EE8AA3',
} as const;

export type InkName = 'ink' | 'overprint' | 'highlight' | 'stamp';

export const FONT = {
  headline: '"DossierSerif", "Noto Serif CJK SC", serif',
  display: '"DossierDisplay", "Arial Black", sans-serif',
  hand: '"DossierHand", "DossierSans", sans-serif',
  mono: '"DossierMono", "DejaVu Sans Mono", monospace',
  sans: '"DossierSans", "Noto Sans CJK SC", sans-serif',
} as const;

export const FONT_FILES = [
  {family: 'DossierSerif', file: 'NotoSerifSC-Black-gb2312.woff2', weight: '900'},
  {family: 'DossierSans', file: 'NotoSansSC-Black-gb2312.woff2', weight: '900'},
  {family: 'DossierDisplay', file: 'BagelFatOne-Latin.woff2', weight: '400'},
  {family: 'DossierHand', file: 'ZCOOLKuaiLe-gb2312.woff2', weight: '400'},
  {family: 'DossierMono', file: 'JetBrainsMono-ExtraBold.woff2', weight: '800'},
] as const;

// Safe area for Douyin: keep essentials clear of the top bar, right-side buttons and bottom copy.
export const SAFE = {
  top: 170,
  bottom: 1470,
  left: 70,
  right: 930,
  captionTop: 1500,
} as const;
