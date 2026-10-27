import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {THEME} from '../theme';

export const ParticleBackground: React.FC = () => {
  const frame = useCurrentFrame();
  const {width, height} = useVideoConfig();
  const glow = interpolate(Math.sin(frame / 18), [-1, 1], [0.62, 1]);
  const particles = Array.from({length: 42}, (_, index) => {
    const x = (index * 193) % width;
    const y = (index * 107) % height;
    const size = 1 + (index % 4) * 0.58;
    const delay = (index * 19) % 120;
    const drift = 9 + (index % 6) * 5;

    return {index, x, y, size, delay, drift};
  });

  return (
    <AbsoluteFill style={{background: THEME.background, overflow: 'hidden'}}>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(circle at 50% 38%, rgba(255, 212, 59, 0.18), transparent 34%), radial-gradient(circle at 76% 24%, rgba(255, 212, 59, 0.08), transparent 22%), linear-gradient(180deg, #050505 0%, #101010 100%)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: width * 0.18,
          top: height * 0.14,
          width: width * 0.64,
          height: height * 0.34,
          borderRadius: '50%',
          background: 'rgba(255, 212, 59, 0.16)',
          filter: 'blur(76px)',
          opacity: glow,
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.09,
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.22) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.18) 1px, transparent 1px)',
          backgroundSize: '42px 42px',
          mixBlendMode: 'screen',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.075,
          backgroundImage:
            'repeating-linear-gradient(0deg, rgba(255,255,255,0.34) 0 1px, transparent 1px 5px)',
          mixBlendMode: 'overlay',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.11,
          backgroundImage:
            'repeating-radial-gradient(circle at 13% 21%, rgba(255,255,255,0.36) 0 1px, transparent 1px 4px)',
          backgroundSize: '9px 9px',
          mixBlendMode: 'soft-light',
        }}
      />
      {particles.map((particle) => {
        const cycle = (frame + particle.delay) % 130;
        const opacity = interpolate(cycle, [0, 45, 130], [0.05, 0.36, 0.05]);
        const y = particle.y - (cycle / 130) * particle.drift;

        return (
          <div
            key={particle.index}
            style={{
              position: 'absolute',
              left: particle.x,
              top: y,
              width: particle.size,
              height: particle.size,
              borderRadius: '50%',
              background: particle.index % 4 === 0 ? THEME.yellow : THEME.white,
              opacity,
              boxShadow:
                particle.index % 4 === 0
                  ? '0 0 12px rgba(255, 212, 59, 0.85)'
                  : '0 0 6px rgba(248, 248, 248, 0.35)',
            }}
          />
        );
      })}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          boxShadow: 'inset 0 0 130px rgba(0, 0, 0, 0.92)',
        }}
      />
    </AbsoluteFill>
  );
};
