import React from 'react';
import {BoilFilter, squash} from './print';
import {INK, PIG} from './theme';

export type PigFace = 'neutral' | 'squint' | 'happy' | 'surprised';
export type PigPose = 'idle' | 'inspect' | 'cheer' | 'point';

const OUTLINE = 7;

// Arm angle (degrees, around the shoulder) for each pose.
const ARM: Record<PigPose, {left: number; right: number}> = {
  idle: {left: 18, right: -18},
  inspect: {left: 18, right: -112},
  cheer: {left: 140, right: -140},
  point: {left: 18, right: -78},
};

const Eye: React.FC<{cx: number; face: PigFace; blink: boolean}> = ({cx, face, blink}) => {
  const cy = 138;
  if (blink || face === 'squint') {
    return <path d={`M${cx - 15},${cy} Q${cx},${cy + (face === 'squint' ? -4 : 6)} ${cx + 15},${cy}`} stroke={INK.ink} strokeWidth={7} fill="none" strokeLinecap="round" />;
  }
  if (face === 'happy') {
    return <path d={`M${cx - 15},${cy + 5} Q${cx},${cy - 16} ${cx + 15},${cy + 5}`} stroke={INK.ink} strokeWidth={7} fill="none" strokeLinecap="round" />;
  }
  const scale = face === 'surprised' ? 1.3 : 1;
  return (
    <g>
      <ellipse cx={cx} cy={cy} rx={13 * scale} ry={17 * scale} fill={INK.ink} />
      <circle cx={cx - 4 * scale} cy={cy - 6 * scale} r={5 * scale} fill="#FFFFFF" />
      <circle cx={cx + 5 * scale} cy={cy + 6 * scale} r={2.5 * scale} fill="#FFFFFF" />
    </g>
  );
};

export const PigDetective: React.FC<{
  id: string;
  t: number;
  face?: PigFace;
  pose?: PigPose;
  size?: number;
  flip?: boolean;
  landAt?: number;
  style?: React.CSSProperties;
}> = ({id, t, face = 'neutral', pose = 'idle', size = 320, flip = false, landAt, style}) => {
  const breathe = 1 + 0.018 * Math.sin(t * 3.2);
  const blink = face !== 'happy' && (t * 1000) % 3400 < 110;
  const sq = landAt === undefined ? {sx: 1, sy: 1} : squash(t, landAt, 0.18);
  const arms = ARM[pose];
  const wave = pose === 'cheer' ? Math.sin(t * 14) * 8 : pose === 'inspect' ? Math.sin(t * 2.4) * 6 : 0;
  const boil = `boil-${id}`;

  return (
    <div style={{position: 'absolute', width: size, height: size * 1.27, ...style}}>
      <BoilFilter id={boil} t={t} scale={4} />
      <svg
        viewBox="0 0 300 380"
        width={size}
        height={size * 1.27}
        style={{
          overflow: 'visible',
          transform: `scale(${(flip ? -1 : 1) * sq.sx}, ${sq.sy * breathe})`,
          transformOrigin: '50% 100%',
        }}
      >
        <g filter={`url(#${boil})`} strokeLinejoin="round" strokeLinecap="round">
          {/* legs */}
          <rect x={98} y={330} width={38} height={40} rx={16} fill={PIG.body} stroke={INK.ink} strokeWidth={OUTLINE} />
          <rect x={164} y={330} width={38} height={40} rx={16} fill={PIG.body} stroke={INK.ink} strokeWidth={OUTLINE} />
          {/* left arm */}
          <g transform={`rotate(${arms.left} 82 250)`}>
            <rect x={70} y={244} width={26} height={70} rx={13} fill={PIG.body} stroke={INK.ink} strokeWidth={OUTLINE} />
          </g>
          {/* body */}
          <ellipse cx={150} cy={270} rx={92} ry={84} fill={PIG.body} stroke={INK.ink} strokeWidth={OUTLINE} />
          <ellipse cx={150} cy={290} rx={52} ry={46} fill={PIG.belly} />
          {/* right arm with magnifier */}
          <g transform={`rotate(${arms.right + wave} 218 250)`}>
            <rect x={205} y={244} width={26} height={70} rx={13} fill={PIG.body} stroke={INK.ink} strokeWidth={OUTLINE} />
            {pose === 'inspect' || pose === 'point' ? (
              <g transform="translate(218 318)">
                <line x1={0} y1={0} x2={0} y2={48} stroke={INK.ink} strokeWidth={12} />
                <circle cx={0} cy={86} r={40} fill={INK.paperLight} fillOpacity={0.55} stroke={INK.ink} strokeWidth={10} />
                <path d="M-20,70 Q-14,58 -2,56" stroke="#FFFFFF" strokeWidth={6} fill="none" />
              </g>
            ) : null}
          </g>
          {/* ears */}
          <path d="M78,92 L70,40 L120,66 Z" fill={PIG.body} stroke={INK.ink} strokeWidth={OUTLINE} />
          <path d="M222,92 L230,40 L180,66 Z" fill={PIG.body} stroke={INK.ink} strokeWidth={OUTLINE} />
          {/* head */}
          <circle cx={150} cy={140} r={86} fill={PIG.body} stroke={INK.ink} strokeWidth={OUTLINE} />
          {/* deerstalker */}
          <path d="M72,104 Q150,18 228,104 Q150,84 72,104 Z" fill={INK.overprint} stroke={INK.ink} strokeWidth={OUTLINE} />
          <path d="M60,108 Q90,92 120,98" stroke={INK.ink} strokeWidth={OUTLINE} fill="none" />
          <path d="M240,108 Q210,92 180,98" stroke={INK.ink} strokeWidth={OUTLINE} fill="none" />
          <circle cx={150} cy={50} r={10} fill={INK.highlight} stroke={INK.ink} strokeWidth={5} />
          {/* cheeks */}
          <circle cx={92} cy={168} r={14} fill={PIG.belly} />
          <circle cx={208} cy={168} r={14} fill={PIG.belly} />
          <Eye cx={116} face={face} blink={blink} />
          <Eye cx={184} face={face} blink={blink} />
          {face === 'squint' ? (
            <>
              <path d="M100,112 L128,120" stroke={INK.ink} strokeWidth={6} />
              <path d="M200,112 L172,120" stroke={INK.ink} strokeWidth={6} />
            </>
          ) : null}
          {/* snout */}
          <ellipse cx={150} cy={176} rx={34} ry={24} fill={PIG.snout} stroke={INK.ink} strokeWidth={6} />
          <ellipse cx={138} cy={176} rx={6} ry={9} fill={INK.ink} />
          <ellipse cx={162} cy={176} rx={6} ry={9} fill={INK.ink} />
          {face === 'happy' || face === 'surprised' ? (
            <path d="M130,206 Q150,232 170,206 Z" fill={INK.ink} stroke={INK.ink} strokeWidth={4} />
          ) : (
            <path d="M136,210 Q150,218 164,210" stroke={INK.ink} strokeWidth={5} fill="none" />
          )}
        </g>
      </svg>
    </div>
  );
};
