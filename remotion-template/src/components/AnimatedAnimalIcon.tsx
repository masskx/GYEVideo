import React from 'react';
import {Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';
import {getAnimalIconById, getFallbackAnimalIcon} from '../data/animalIconRegistry';

const clamp = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'} as const;

export type AnimalIconVariant =
  | 'pop'
  | 'shake'
  | 'float'
  | 'punch'
  | 'peek'
  | 'bounce'
  | 'reaction';

type AnimatedAnimalIconProps = {
  id?: string;
  x: number;
  y: number;
  size: number;
  startFrame: number;
  durationFrames: number;
  variant?: AnimalIconVariant;
  opacity?: number;
};

const getVariantTransform = ({
  variant,
  localFrame,
  durationFrames,
  fps,
}: {
  variant: AnimalIconVariant;
  localFrame: number;
  durationFrames: number;
  fps: number;
}) => {
  const progress = Math.max(0, Math.min(1, localFrame / Math.max(durationFrames, 1)));
  const enter = spring({
    frame: localFrame,
    fps,
    config: {damping: 12, stiffness: 220, mass: 0.65},
  });
  const popScale = interpolate(localFrame, [0, 5, 12], [0.2, 1.12, 1], clamp);

  if (variant === 'shake') {
    const shake = Math.sin(localFrame * 2.4) * interpolate(progress, [0, 1], [8, 0], clamp);
    return `translateX(${shake}px) rotate(${shake * 0.8}deg) scale(${popScale})`;
  }

  if (variant === 'float') {
    const y = Math.sin(localFrame / 5) * 7;
    return `translateY(${y}px) scale(${0.96 + enter * 0.04})`;
  }

  if (variant === 'punch') {
    const scale = interpolate(localFrame, [0, 4, 10], [0.6, 1.22, 1], clamp);
    return `rotate(-4deg) scale(${scale})`;
  }

  if (variant === 'peek') {
    const x = interpolate(localFrame, [0, 8], [28, 0], clamp);
    const rotate = interpolate(localFrame, [0, 8], [10, 0], clamp);
    return `translateX(${x}px) rotate(${rotate}deg) scale(${0.9 + enter * 0.1})`;
  }

  if (variant === 'bounce') {
    const y = Math.abs(Math.sin(localFrame / 4)) * interpolate(progress, [0, 1], [14, 2], clamp);
    return `translateY(${-y}px) scale(${0.9 + enter * 0.1})`;
  }

  if (variant === 'reaction') {
    const rotate = Math.sin(localFrame / 3) * 5;
    return `rotate(${rotate}deg) scale(${popScale})`;
  }

  return `scale(${popScale})`;
};

export const AnimatedAnimalIcon: React.FC<AnimatedAnimalIconProps> = ({
  id,
  x,
  y,
  size,
  startFrame,
  durationFrames,
  variant = 'pop',
  opacity = 1,
}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const localFrame = frame - startFrame;

  if (localFrame < 0 || localFrame > durationFrames) {
    return null;
  }

  const icon = getAnimalIconById(id) ?? getFallbackAnimalIcon();
  if (!icon) {
    return null;
  }

  const fade = Math.min(
    interpolate(localFrame, [0, 6], [0, 1], clamp),
    interpolate(localFrame, [durationFrames - 8, durationFrames], [1, 0], clamp),
  );
  const transform = getVariantTransform({variant, localFrame, durationFrames, fps});

  return (
    <div
      style={{
        position: 'absolute',
        left: x,
        top: y,
        width: size,
        height: size,
        opacity: fade * opacity,
        transform,
        transformOrigin: 'center',
        pointerEvents: 'none',
        filter: 'drop-shadow(0 8px 18px rgba(0, 0, 0, 0.58))',
        zIndex: 4,
      }}
    >
      <Img
        src={staticFile(icon.path)}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
        }}
      />
    </div>
  );
};
