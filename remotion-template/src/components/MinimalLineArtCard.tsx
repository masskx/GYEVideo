import React from 'react';

type LineArtVariant =
  | 'awkward-mouth'
  | 'warning-siren'
  | 'speech-burst'
  | 'arrow-fix'
  | 'megaphone'
  | 'scribble-face'
  | 'crowd-wave'
  | 'pain-spark'
  | 'mail-tail'
  | 'spark-quote';

type LineArtStyle = 'ghost-wire' | 'scribble-orbit' | 'contour-burst';

type MinimalLineArtCardProps = {
  x: number;
  y: number;
  width: number;
  height: number;
  rotate?: number;
  opacity?: number;
  variant: LineArtVariant;
  caption?: string;
  stylePreset?: LineArtStyle | string;
  accent?: string;
};

const renderVariant = (variant: LineArtVariant) => {
  switch (variant) {
    case 'awkward-mouth':
      return (
        <>
          <path d="M50 120 C100 70 170 70 230 120" />
          <path d="M75 150 C110 180 170 182 208 150" />
          <path d="M84 98 C100 84 120 84 136 98" />
          <path d="M145 96 C162 80 185 80 202 96" />
          <path d="M42 170 C96 196 184 196 238 170" />
        </>
      );
    case 'warning-siren':
      return (
        <>
          <path d="M106 188 L140 78 L176 188 Z" />
          <path d="M140 88 L148 146" />
          <path d="M142 164 L142 166" />
          <path d="M88 86 L62 58" />
          <path d="M194 86 L220 58" />
          <path d="M56 132 L20 132" />
          <path d="M260 132 L224 132" />
        </>
      );
    case 'speech-burst':
      return (
        <>
          <path d="M52 72 H212 C228 72 240 84 240 100 V142 C240 158 228 170 212 170 H126 L92 202 L98 170 H52 C36 170 24 158 24 142 V100 C24 84 36 72 52 72 Z" />
          <path d="M60 104 C96 94 130 94 164 104" />
          <path d="M62 126 C110 118 158 118 204 126" />
          <path d="M60 148 C98 144 136 144 174 148" />
        </>
      );
    case 'arrow-fix':
      return (
        <>
          <path d="M42 154 C94 78 168 74 226 106" />
          <path d="M204 76 L232 106 L194 116" />
          <path d="M52 174 C100 198 172 194 224 152" />
          <path d="M72 72 C92 50 126 48 148 68" />
        </>
      );
    case 'megaphone':
      return (
        <>
          <path d="M42 138 L120 92 L120 178 Z" />
          <path d="M120 106 C170 92 204 96 236 116 V154 C204 174 170 178 120 164" />
          <path d="M72 150 L88 196" />
          <path d="M196 92 C216 80 236 80 252 94" />
          <path d="M210 118 C236 116 252 124 264 142" />
        </>
      );
    case 'scribble-face':
      return (
        <>
          <path d="M54 150 C78 84 138 52 202 72 C234 82 248 120 238 154 C228 192 188 214 130 204 C84 196 52 180 54 150 Z" />
          <path d="M92 126 C104 110 122 110 136 126" />
          <path d="M160 126 C172 110 192 110 204 126" />
          <path d="M94 164 C126 144 166 144 198 164" />
          <path d="M74 88 C92 60 126 50 164 56" />
        </>
      );
    case 'crowd-wave':
      return (
        <>
          <path d="M36 160 C60 132 84 122 108 136 C126 146 136 172 154 174 C176 176 184 142 206 136 C224 130 242 140 252 158" />
          <path d="M52 132 C72 110 92 104 112 116 C126 124 132 144 148 146 C166 148 174 122 192 116 C212 108 232 114 246 132" />
          <path d="M74 96 C86 84 102 82 116 92" />
          <path d="M136 88 C148 76 166 76 178 88" />
          <path d="M194 94 C208 82 226 84 236 98" />
        </>
      );
    case 'pain-spark':
      return (
        <>
          <path d="M138 44 L154 90 L202 84 L172 124 L206 164 L154 154 L134 198 L116 152 L64 158 L96 122 L62 84 L114 92 Z" />
          <path d="M138 92 L138 138" />
          <path d="M138 160 L138 164" />
          <path d="M88 52 L72 26" />
          <path d="M206 56 L230 34" />
        </>
      );
    case 'mail-tail':
      return (
        <>
          <path d="M36 94 H244 V170 H36 Z" />
          <path d="M38 96 L140 152 L242 96" />
          <path d="M88 68 C100 46 126 36 154 42 C178 48 196 66 200 88" />
          <path d="M180 46 L204 30" />
        </>
      );
    case 'spark-quote':
      return (
        <>
          <path d="M74 88 C88 64 112 54 138 56 C172 58 198 84 198 120 C198 156 170 182 134 184 C104 186 78 170 66 144" />
          <path d="M104 92 L88 120 H108 L98 146" />
          <path d="M154 92 L138 120 H158 L148 146" />
          <path d="M204 70 L228 52" />
          <path d="M214 116 H244" />
          <path d="M198 164 L226 178" />
        </>
      );
    default:
      return null;
  }
};

const styleMap = {
  'ghost-wire': {
    stroke: 'rgba(255,255,255,0.26)',
    accentOpacity: 0.16,
    strokeWidth: 4.2,
    orbitOpacity: 0.16,
    captionColor: 'rgba(255,255,255,0.46)',
  },
  'scribble-orbit': {
    stroke: 'rgba(255,255,255,0.34)',
    accentOpacity: 0.24,
    strokeWidth: 5.1,
    orbitOpacity: 0.22,
    captionColor: 'rgba(255,255,255,0.58)',
  },
  'contour-burst': {
    stroke: 'rgba(255,255,255,0.32)',
    accentOpacity: 0.3,
    strokeWidth: 5.8,
    orbitOpacity: 0.28,
    captionColor: 'rgba(255,255,255,0.64)',
  },
} as const;

export const MinimalLineArtCard: React.FC<MinimalLineArtCardProps> = ({
  x,
  y,
  width,
  height,
  rotate = 0,
  opacity = 1,
  variant,
  caption,
  stylePreset = 'ghost-wire',
  accent = 'rgba(255,212,59,0.16)',
}) => {
  const resolvedStyle =
    stylePreset === 'scribble-orbit' || stylePreset === 'contour-burst' || stylePreset === 'ghost-wire'
      ? stylePreset
      : 'ghost-wire';
  const style = styleMap[resolvedStyle];

  return (
    <div
      style={{
        position: 'absolute',
        left: x,
        top: y,
        width,
        height,
        opacity,
        transform: `rotate(${rotate}deg)`,
        pointerEvents: 'none',
        filter: 'drop-shadow(0 12px 24px rgba(0,0,0,0.28))',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 18,
          borderRadius: '44% 56% 50% 50% / 42% 44% 56% 58%',
          background: `radial-gradient(circle at 50% 45%, ${accent}, rgba(255,255,255,0))`,
          opacity: 0.7,
          filter: 'blur(12px)',
        }}
      />
      <svg viewBox="0 0 280 220" style={{width: '100%', height: '100%'}} fill="none">
        <ellipse cx="142" cy="116" rx="118" ry="86" stroke={accent} strokeWidth="1.6" strokeDasharray="10 12" opacity={style.orbitOpacity} />
        <path d="M44 56 C94 18 184 20 234 62" stroke={accent} strokeWidth="2.2" strokeLinecap="round" opacity={style.accentOpacity} />
        <path d="M30 176 C96 210 174 210 246 168" stroke={accent} strokeWidth="2" strokeLinecap="round" opacity={style.accentOpacity} />
        <path d="M50 36 C96 12 182 16 226 42" stroke={accent} strokeWidth="1.4" strokeLinecap="round" opacity={style.accentOpacity} strokeDasharray="8 12" />
        <path d="M48 188 C98 214 176 214 228 190" stroke={accent} strokeWidth="1.4" strokeLinecap="round" opacity={style.accentOpacity} strokeDasharray="8 12" />
        <g
          stroke={style.stroke}
          strokeWidth={style.strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{vectorEffect: 'non-scaling-stroke'}}
        >
          {renderVariant(variant)}
        </g>
        {resolvedStyle === 'contour-burst' ? (
          <>
            <path d="M18 110 L40 104" stroke={accent} strokeWidth="2.2" strokeLinecap="round" opacity="0.28" />
            <path d="M238 88 L262 72" stroke={accent} strokeWidth="2.2" strokeLinecap="round" opacity="0.28" />
            <path d="M224 180 L248 194" stroke={accent} strokeWidth="2.2" strokeLinecap="round" opacity="0.28" />
          </>
        ) : null}
      </svg>
      {caption ? (
        <div
          style={{
            position: 'absolute',
            left: '50%',
            bottom: -10,
            transform: 'translateX(-50%)',
            color: style.captionColor,
            fontSize: 16,
            fontWeight: 900,
            letterSpacing: 2,
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
          }}
        >
          {caption}
        </div>
      ) : null}
    </div>
  );
};
