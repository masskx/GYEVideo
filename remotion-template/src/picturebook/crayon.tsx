import React from 'react';
import {Illustration, PropKind, Setting} from '../data/pictureBook';
import {CRAYON} from './theme';

// Wax crayon on toothy paper: wax sticks only to the tooth (a noise threshold eats the fill),
// and every line boils because each frame is a fresh drawing, stepping at 12 fps.

export const CrayonFilter: React.FC<{id: string; t: number; strength?: number}> = ({id, t, strength = 1}) => {
  const seed = Math.floor(t * 12) % 61;
  return (
    <defs>
      <filter id={id} x="-3%" y="-3%" width="106%" height="106%">
        <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves={2} seed={3} result="tooth" />
        <feColorMatrix in="tooth" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -2.0 1.95" result="mask" />
        <feComposite in="SourceGraphic" in2="mask" operator="in" result="wax" />
        <feTurbulence type="fractalNoise" baseFrequency="0.018" numOctaves={2} seed={seed} result="wobble" />
        <feDisplacementMap in="wax" in2="wobble" scale={4 * strength} xChannelSelector="R" yChannelSelector="G" />
      </filter>
    </defs>
  );
};

const L = {stroke: CRAYON.line, strokeWidth: 7, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const};

// Ground line (y in the 1000 × 800 page) where characters stand, per setting.
export const GROUND: Record<Setting, number> = {
  'bedroom-night': 650,
  classroom: 660,
  'street-morning': 670,
  'park-day': 660,
};

const Background: React.FC<{setting: Setting}> = ({setting}) => {
  switch (setting) {
    case 'bedroom-night':
      return (
        <g>
          <rect x={0} y={0} width={1000} height={650} fill={CRAYON.night} />
          <rect x={0} y={650} width={1000} height={150} fill={CRAYON.brown} />
          <rect x={640} y={60} width={300} height={260} fill={CRAYON.nightDeep} {...L} />
          <line x1={790} y1={60} x2={790} y2={320} {...L} />
          <line x1={640} y1={190} x2={940} y2={190} {...L} />
          <rect x={50} y={480} width={470} height={150} rx={20} fill={CRAYON.coral} {...L} />
          <rect x={70} y={430} width={150} height={70} rx={30} fill={CRAYON.white} {...L} />
          <rect x={40} y={400} width={30} height={250} fill={CRAYON.brown} {...L} />
          <ellipse cx={600} cy={720} rx={260} ry={45} fill={CRAYON.rose} {...L} />
        </g>
      );
    case 'classroom':
      return (
        <g>
          <rect x={0} y={0} width={1000} height={660} fill={CRAYON.sand} />
          <rect x={0} y={660} width={1000} height={140} fill={CRAYON.brown} />
          <rect x={90} y={70} width={650} height={300} rx={10} fill="#2F5D50" {...L} />
          <text x={140} y={190} fontFamily="'GYCaveat', cursive" fontSize={90} fill={CRAYON.white}>
            English
          </text>
          <path d="M140,250 q120,-30 260,0" stroke={CRAYON.white} strokeWidth={6} fill="none" />
          {[90, 560].map((x) => (
            <g key={x}>
              <rect x={x} y={560} width={330} height={40} fill={CRAYON.brown} {...L} />
              <line x1={x + 30} y1={600} x2={x + 30} y2={700} {...L} />
              <line x1={x + 300} y1={600} x2={x + 300} y2={700} {...L} />
            </g>
          ))}
        </g>
      );
    case 'street-morning':
      return (
        <g>
          <rect x={0} y={0} width={1000} height={670} fill={CRAYON.sky} />
          <rect x={0} y={670} width={1000} height={130} fill="#B9B2A6" />
          <line x1={0} y1={735} x2={1000} y2={735} stroke={CRAYON.white} strokeWidth={10} strokeDasharray="60 50" />
          <rect x={60} y={330} width={260} height={340} fill={CRAYON.coral} {...L} />
          <polygon points="40,340 190,220 340,340" fill={CRAYON.rose} {...L} />
          <rect x={150} y={520} width={80} height={150} fill={CRAYON.brown} {...L} />
          <rect x={560} y={380} width={240} height={290} fill={CRAYON.lemon} {...L} />
          <polygon points="540,390 680,280 820,390" fill={CRAYON.teal} {...L} />
          <rect x={600} y={440} width={70} height={70} fill={CRAYON.sky} {...L} />
        </g>
      );
    case 'park-day':
    default:
      return (
        <g>
          <rect x={0} y={0} width={1000} height={660} fill={CRAYON.sky} />
          <path d="M0,560 Q250,440 520,540 T1000,500 L1000,800 L0,800 Z" fill={CRAYON.grass} {...L} />
          <rect x={80} y={600} width={300} height={30} fill={CRAYON.brown} {...L} />
          <line x1={110} y1={630} x2={110} y2={700} {...L} />
          <line x1={350} y1={630} x2={350} y2={700} {...L} />
        </g>
      );
  }
};

const Prop: React.FC<{kind: PropKind; x: number; y: number; scale?: number; time?: string; t: number}> = ({kind, x, y, scale = 1, time, t}) => {
  const tf = `translate(${x} ${y}) scale(${scale})`;
  switch (kind) {
    case 'phone':
      return (
        <g transform={tf}>
          <circle r={110} fill={CRAYON.sky} opacity={0.35 + 0.1 * Math.sin(t * 5)} />
          <rect x={-45} y={-80} width={90} height={160} rx={16} fill="#333A55" {...L} />
          <rect x={-33} y={-62} width={66} height={118} rx={6} fill="#9FE7F5" />
        </g>
      );
    case 'clock': {
      const [h, m] = (time ?? '12:00').split(':').map(Number);
      const ha = ((h % 12) + m / 60) * 30 - 90;
      const ma = m * 6 - 90;
      return (
        <g transform={tf}>
          <circle r={80} fill={CRAYON.white} {...L} />
          <line x1={0} y1={0} x2={Math.cos((ha * Math.PI) / 180) * 42} y2={Math.sin((ha * Math.PI) / 180) * 42} {...L} strokeWidth={9} />
          <line x1={0} y1={0} x2={Math.cos((ma * Math.PI) / 180) * 62} y2={Math.sin((ma * Math.PI) / 180) * 62} {...L} />
        </g>
      );
    }
    case 'book':
      return (
        <g transform={tf}>
          <rect x={-90} y={-30} width={180} height={50} fill={CRAYON.teal} {...L} />
          <rect x={-80} y={-70} width={160} height={42} fill={CRAYON.coral} {...L} />
        </g>
      );
    case 'box':
      return (
        <g transform={tf}>
          <rect x={-110} y={-60} width={220} height={150} fill="#D7A86E" {...L} />
          <polygon points="-110,-60 -60,-110 160,-110 110,-60" fill="#E8BE86" {...L} />
        </g>
      );
    case 'sun':
      return (
        <g transform={`${tf} rotate(${t * 6})`}>
          {Array.from({length: 10}, (_, i) => {
            const a = (i / 10) * Math.PI * 2;
            return <line key={i} x1={Math.cos(a) * 85} y1={Math.sin(a) * 85} x2={Math.cos(a) * 125} y2={Math.sin(a) * 125} {...L} stroke={CRAYON.coral} />;
          })}
          <circle r={70} fill={CRAYON.lemon} {...L} />
        </g>
      );
    case 'moon':
      return (
        <g transform={tf}>
          <path d="M20,-60 A62,62 0 1,0 20,60 A48,48 0 1,1 20,-60 Z" fill={CRAYON.lemon} {...L} />
        </g>
      );
    case 'stars':
      return (
        <g transform={tf}>
          {[
            [-200, 40],
            [-60, -20],
            [90, 60],
            [220, -10],
            [-300, -30],
          ].map(([sx, sy], i) => (
            <path
              key={i}
              d="M0,-18 L5,-5 L18,-5 L8,4 L12,18 L0,9 L-12,18 L-8,4 L-18,-5 L-5,-5 Z"
              transform={`translate(${sx} ${sy}) scale(${0.9 + 0.25 * Math.sin(t * 3 + i)})`}
              fill={CRAYON.lemon}
            />
          ))}
        </g>
      );
    case 'tree':
      return (
        <g transform={tf}>
          <rect x={-22} y={20} width={44} height={220} fill={CRAYON.brown} {...L} />
          <circle cx={0} cy={-20} r={120} fill={CRAYON.grass} {...L} />
        </g>
      );
    case 'lamp':
    default:
      return (
        <g transform={tf}>
          <polygon points="-40,-60 40,-60 60,0 -60,0" fill={CRAYON.lemon} {...L} />
          <line x1={0} y1={0} x2={0} y2={120} {...L} />
          <ellipse cx={0} cy={125} rx={45} ry={12} fill={CRAYON.brown} {...L} />
        </g>
      );
  }
};

// The illustration (without the pig, which the page places as <BrandPig>).
export const Picture: React.FC<{id: string; t: number; illustration: Illustration}> = ({id, t, illustration}) => (
  <svg viewBox="0 0 1000 800" width="100%" height="100%" style={{display: 'block'}}>
    <CrayonFilter id={`crayon-${id}`} t={t} />
    <g filter={`url(#crayon-${id})`}>
      <Background setting={illustration.setting} />
      {(illustration.props ?? []).map((prop, i) => (
        <Prop key={i} {...prop} t={t} />
      ))}
    </g>
  </svg>
);
