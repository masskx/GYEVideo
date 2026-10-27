import React from 'react';
import {BrandPig, PigFace} from './BrandPig';

// The brand pig fitted into a square box (cover badges, creator chips). It is the same <BrandPig>,
// only placed and sized; never an icon file.
export const BrandAvatar: React.FC<{id: string; size: number; t?: number; face?: PigFace}> = ({id, size, t = 0, face = 'happy'}) => {
  const pigWidth = size / 1.27;
  return (
    <div style={{position: 'relative', width: size, height: size, flexShrink: 0}}>
      <BrandPig id={id} t={t} x={(size - pigWidth) / 2} y={0} size={pigWidth} face={face} />
    </div>
  );
};

// Animal-icon ids that used to stand for the creator. They all render as the brand pig now.
export const isBrandPigId = (id: string | undefined) => !id || id.includes('pig');
