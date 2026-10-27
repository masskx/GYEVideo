import {generatedVoiceTimeline} from './data/generatedVoiceTimeline';
import type {KineticMotionPreset, KineticSfxCue} from './kineticMotionPresets';

export type VisualBeat = {
  segmentId: string;
  scene: 'trap-open' | 'wrong-smash' | 'meaning-punch' | 'native-fix' | 'usage-scene' | 'lock';
  primaryText: string;
  secondaryText?: string;
  motion: KineticMotionPreset;
  sfx?: KineticSfxCue;
  wrongState?: 'normal' | 'crossed' | 'glitched' | 'crushed';
  rightState?: 'hidden' | 'revealing' | 'locked';
  cameraMotion?: 'static' | 'push-in' | 'whip' | 'shake';
};

const fallbackScene = (id: string): VisualBeat['scene'] => {
  if (id.startsWith('trap') || id === 'cold-open-scene') {
    return 'trap-open';
  }
  if (id.includes('wrong') || id === 'conflict') {
    return 'wrong-smash';
  }
  if (id.startsWith('fix') || id === 'rescue-line' || id === 'meaning') {
    return 'native-fix';
  }
  if (id === 'scene' || id === 'reuse-scene' || id === 'rescue-line-repeat') {
    return 'usage-scene';
  }
  if (id === 'lock' || id === 'memory-lock') {
    return 'lock';
  }
  return 'meaning-punch';
};

const fallbackMotion = (scene: VisualBeat['scene']): KineticMotionPreset => {
  switch (scene) {
    case 'trap-open':
      return 'punchZoom';
    case 'wrong-smash':
      return 'glitchCut';
    case 'native-fix':
      return 'yellowSlam';
    case 'usage-scene':
      return 'messageSend';
    case 'lock':
      return 'swipeSmash';
    default:
      return 'textPop';
  }
};

export const visualBeatMap: VisualBeat[] = generatedVoiceTimeline.map((segment) => {
  const beat = 'visualBeat' in segment ? (segment as typeof segment & {visualBeat?: Partial<VisualBeat>}).visualBeat : undefined;
  const scene = beat?.scene ?? fallbackScene(segment.id);

  return {
    segmentId: segment.id,
    scene,
    primaryText: beat?.primaryText ?? segment.text,
    secondaryText: beat?.secondaryText,
    motion: beat?.motion ?? fallbackMotion(scene),
    sfx: beat?.sfx,
    wrongState: beat?.wrongState,
    rightState: beat?.rightState,
    cameraMotion: beat?.cameraMotion ?? 'static',
  };
});
