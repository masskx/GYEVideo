export type KineticMotionPreset =
  | 'punchZoom'
  | 'microShake'
  | 'screenFlash'
  | 'redStamp'
  | 'yellowSlam'
  | 'bounceIn'
  | 'textPop'
  | 'typeHit'
  | 'glitchCut'
  | 'crushDown'
  | 'swipeSmash'
  | 'fastCut'
  | 'whipPan'
  | 'flashCut'
  | 'zoomCut'
  | 'cardThrow'
  | 'chatPop'
  | 'errorBlink'
  | 'wordReveal'
  | 'glowSweep'
  | 'messageSend'
  | 'underlineHit'
  | 'slamDown';

export type KineticSfxCue = 'hit' | 'error' | 'glitch' | 'whoosh' | 'pop' | 'send' | 'stamp';

export const STRONG_KINETIC_PRESETS: KineticMotionPreset[] = [
  'punchZoom',
  'redStamp',
  'yellowSlam',
  'glitchCut',
  'crushDown',
  'swipeSmash',
];
