import React from 'react';
import {AbsoluteFill, Img, staticFile} from 'remotion';
import {dossier} from '../data/dossier';
import {useFonts} from '../core/fonts';
import {backOut, clamp01, easeInOut, mulberry, pop, squash} from '../core/motion';
import {FPS, HEIGHT, WIDTH} from '../core/timeline';
import {DOSSIER} from './schedule';
import {DOSSIER_FONTS, FONT, INK, InkName, SAFE} from './theme';

export {backOut, clamp01, easeIn, easeInOut, easeOut, mulberry, pop, progress, squash} from '../core/motion';

const DOSSIER_FPS = FPS;
const DOSSIER_WIDTH = WIDTH;
const DOSSIER_HEIGHT = HEIGHT;

export const useDossierFonts = () => useFonts(DOSSIER_FONTS);

// ---------- paper ----------

// The texture (mottling, vignette, fold) is generated once by scripts/make-dossier-paper.py and multiplied over everything.
export const PaperGround: React.FC<{dark?: boolean}> = ({dark = false}) => (
  <AbsoluteFill style={{background: dark ? INK.ink : INK.paper}} />
);

export const PaperOverlay: React.FC<{t: number}> = ({t}) => {
  // Dust on the print, reseeded every 2 frames.
  const rand = mulberry(Math.floor((t * DOSSIER_FPS) / 2) + 11);
  let light = '';
  let dark = '';
  for (let i = 0; i < 260; i++) {
    const x = rand() * DOSSIER_WIDTH;
    const y = rand() * DOSSIER_HEIGHT;
    const r = 0.6 + rand() * 1.6;
    const dot = `M${(x - r).toFixed(1)},${y.toFixed(1)}a${r.toFixed(1)},${r.toFixed(1)} 0 1,0 ${(2 * r).toFixed(1)},0a${r.toFixed(1)},${r.toFixed(1)} 0 1,0 ${(-2 * r).toFixed(1)},0`;
    if (i % 4 === 0) {
      dark += dot;
    } else {
      light += dot;
    }
  }
  return (
    <>
      <AbsoluteFill style={{mixBlendMode: 'multiply'}}>
        <Img src={staticFile('dossier/paper.jpg')} style={{width: '100%', height: '100%'}} />
      </AbsoluteFill>
      <AbsoluteFill>
        <svg width={DOSSIER_WIDTH} height={DOSSIER_HEIGHT}>
          <path d={light} fill={INK.paperLight} opacity={0.55} />
          <path d={dark} fill={INK.ink} opacity={0.35} />
        </svg>
      </AbsoluteFill>
    </>
  );
};

// ---------- halftone ----------

export type DensityField = (x: number, y: number) => number;

export const radialField =
  (cx: number, cy: number, radius: number, inner = 1, outer = 0): DensityField =>
  (x, y) => {
    const d = Math.hypot(x - cx, y - cy) / radius;
    return d >= 1 ? outer : inner + (outer - inner) * d;
  };

export const edgeField =
  (w: number, h: number, band: number, strength = 1): DensityField =>
  (x, y) => {
    const d = Math.min(x, y, w - x, h - y);
    return d >= band ? 0 : strength * (1 - d / band);
  };

export const linearField =
  (from: number, to: number, horizontal = false): DensityField =>
  (x, y) => {
    const v = horizontal ? x : y;
    return clamp01((v - from) / (to - from));
  };

const dotCache = new Map<string, string>();

// One path of circles on a rotated screen; radius = density × step × k (around 0.7 the dots merge into solid ink).
export const halftonePath = (
  key: string,
  w: number,
  h: number,
  step: number,
  angle: number,
  density: DensityField,
  k = 0.68,
) => {
  const cached = dotCache.get(key);
  if (cached !== undefined) {
    return cached;
  }
  const a = (angle * Math.PI) / 180;
  const cos = Math.cos(a);
  const sin = Math.sin(a);
  const reach = Math.ceil(Math.hypot(w, h) / step / 2) + 1;
  const cx = w / 2;
  const cy = h / 2;
  let d = '';
  for (let i = -reach; i <= reach; i++) {
    for (let j = -reach; j <= reach; j++) {
      const x = cx + i * step * cos - j * step * sin;
      const y = cy + i * step * sin + j * step * cos;
      if (x < -step || y < -step || x > w + step || y > h + step) {
        continue;
      }
      const r = clamp01(density(x, y)) * step * k;
      if (r < 0.7) {
        continue;
      }
      d += `M${(x - r).toFixed(1)},${y.toFixed(1)}a${r.toFixed(1)},${r.toFixed(1)} 0 1,0 ${(2 * r).toFixed(1)},0a${r.toFixed(1)},${r.toFixed(1)} 0 1,0 ${(-2 * r).toFixed(1)},0`;
    }
  }
  if (dotCache.size > 400) {
    dotCache.clear();
  }
  dotCache.set(key, d);
  return d;
};

export const Halftone: React.FC<{
  cacheKey: string;
  x?: number;
  y?: number;
  w: number;
  h: number;
  step?: number;
  angle?: number;
  color: string;
  density: DensityField;
  k?: number;
  opacity?: number;
}> = ({cacheKey, x = 0, y = 0, w, h, step = 22, angle = 15, color, density, k, opacity = 1}) => (
  <svg
    width={w}
    height={h}
    style={{position: 'absolute', left: x, top: y, mixBlendMode: 'multiply', opacity, overflow: 'visible'}}
  >
    <path d={halftonePath(`${cacheKey}|${w}|${h}|${step}|${angle}|${k}`, w, h, step, angle, density, k)} fill={color} />
  </svg>
);

// Giant numerals / glyphs: a flat fill overprinted with a darker dot screen clipped to the glyph.
export const HalftoneGlyph: React.FC<{
  id: string;
  text: string;
  size: number;
  fill: string;
  dots: string;
  family?: string;
  width: number;
  height: number;
  step?: number;
  style?: React.CSSProperties;
}> = ({id, text, size, fill, dots, family = FONT.display, width, height, step = 22, style}) => (
  <svg width={width} height={height} style={{position: 'absolute', overflow: 'visible', ...style}}>
    <defs>
      <pattern id={`ht-${id}`} width={step} height={step} patternUnits="userSpaceOnUse" patternTransform="rotate(22)">
        <circle cx={step / 2} cy={step / 2} r={step * 0.3} fill={dots} />
      </pattern>
    </defs>
    <text x={0} y={height * 0.82} fontFamily={family} fontSize={size} fill={fill}>
      {text}
    </text>
    <text x={0} y={height * 0.82} fontFamily={family} fontSize={size} fill={`url(#ht-${id})`} style={{mixBlendMode: 'multiply'}}>
      {text}
    </text>
  </svg>
);

// ---------- type ----------

// Headline with per-character pop and a misregistered overprint shadow (+8/+8, multiplied).
export const PopText: React.FC<{
  text: string;
  t: number;
  at: number;
  size: number;
  family?: string;
  color?: string;
  shadow?: string | null;
  stagger?: number;
  shadowOffset?: number;
  highlight?: {chars: string; color: string};
  style?: React.CSSProperties;
}> = ({text, t, at, size, family = FONT.headline, color = INK.ink, shadow = INK.overprint, stagger, shadowOffset = 8, highlight, style}) => {
  const isLatin = /^[\x20-\x7E]+$/.test(text);
  const gap = stagger ?? (isLatin ? 0.03 : 0.06);
  const highlightStart = highlight ? text.indexOf(highlight.chars) : -1;
  const chars = Array.from(text);

  const renderChars = (layer: 'shadow' | 'fill') =>
    chars.map((char, i) => {
      const start = at + i * gap;
      const local = t - start;
      if (local < 0) {
        return (
          <span key={i} style={{opacity: 0}}>
            {char === ' ' ? ' ' : char}
          </span>
        );
      }
      const drop = (1 - backOut(local / 0.3, 2.2)) * -(40 + (i % 3) * 25);
      const sq = squash(t, start + 0.22, 0.12);
      const inHighlight = highlightStart >= 0 && i >= highlightStart && i < highlightStart + (highlight?.chars.length ?? 0);
      return (
        <span
          key={i}
          style={{
            display: 'inline-block',
            transform: `translateY(${drop}px) scale(${sq.sx}, ${sq.sy})`,
            transformOrigin: '50% 100%',
            color: layer === 'shadow' ? shadow ?? 'transparent' : inHighlight ? highlight!.color : color,
          }}
        >
          {char === ' ' ? ' ' : char}
        </span>
      );
    });

  const base: React.CSSProperties = {
    fontFamily: family,
    fontSize: size,
    lineHeight: 1.05,
    whiteSpace: 'pre',
    letterSpacing: isLatin ? -1 : 2,
  };

  return (
    <div style={{position: 'relative', ...style}}>
      {shadow ? (
        <div style={{...base, position: 'absolute', left: shadowOffset, top: shadowOffset, mixBlendMode: 'multiply'}}>
          {renderChars('shadow')}
        </div>
      ) : null}
      <div style={{...base, position: 'relative'}}>{renderChars('fill')}</div>
    </div>
  );
};

// Pops a block in with overshoot from below.
export const Pop: React.FC<{t: number; at: number; length?: number; style?: React.CSSProperties; children: React.ReactNode; rotate?: number}> = ({
  t,
  at,
  length,
  style,
  rotate = 0,
  children,
}) => {
  const p = pop(t, at, length);
  if (!p.visible) {
    return null;
  }
  return (
    <div style={{transform: `translateY(${p.y}px) scale(${p.scale}) rotate(${rotate}deg)`, ...style}}>{children}</div>
  );
};

export const Chip: React.FC<{children: React.ReactNode; ink?: string; text?: string; style?: React.CSSProperties; size?: number}> = ({
  children,
  ink = INK.ink,
  text = INK.paperLight,
  size = 30,
  style,
}) => (
  <div
    style={{
      display: 'inline-block',
      fontFamily: FONT.mono,
      fontSize: size,
      color: text,
      background: ink,
      padding: '8px 18px',
      borderRadius: 10,
      whiteSpace: 'nowrap',
      ...style,
    }}
  >
    {children}
  </div>
);

// Flat card: fill + heavy ink outline + hard offset shadow in the overprint ink (no soft shadows).
export const PrintCard: React.FC<{children: React.ReactNode; fill?: string; shadow?: string; style?: React.CSSProperties; outline?: number}> = ({
  children,
  fill = INK.paperLight,
  shadow = INK.overprint,
  outline = 6,
  style,
}) => (
  <div
    style={{
      background: fill,
      border: `${outline}px solid ${INK.ink}`,
      borderRadius: 26,
      boxShadow: `12px 12px 0 ${shadow}`,
      ...style,
    }}
  >
    {children}
  </div>
);

// ---------- stamps ----------

// Double rounded rectangle through a rough ink filter; slams from 2.6× to 1× in ~0.09 s, then a damped bounce.
export const Stamp: React.FC<{
  id: string;
  text: string;
  t: number;
  at: number;
  color?: string;
  rotate?: number;
  size?: number;
  style?: React.CSSProperties;
}> = ({id, text, t, at, color = INK.stamp, rotate = -8, size = 96, style}) => {
  const local = t - at;
  if (local < 0) {
    return null;
  }
  const slam = local < 0.09 ? 2.6 - 1.6 * (local / 0.09) ** 2 : 1 + 0.06 * Math.exp(-(local - 0.09) * 14) * Math.cos((local - 0.09) * 40);
  const chars = Array.from(text).length;
  const width = chars * size * 1.08 + size * 0.9;
  const height = size * 1.75;
  return (
    <div style={{position: 'absolute', transform: `rotate(${rotate}deg) scale(${slam})`, opacity: 0.93, ...style}}>
      <svg width={width} height={height} style={{overflow: 'visible'}}>
        <defs>
          <filter id={`rough-${id}`} x="-10%" y="-10%" width="120%" height="120%">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves={2} seed={3} result="grain" />
            <feComponentTransfer in="grain" result="holes">
              <feFuncA type="discrete" tableValues="1 1 1 0 1 1 1 1" />
            </feComponentTransfer>
            <feComposite in="SourceGraphic" in2="holes" operator="in" result="eaten" />
            <feTurbulence type="fractalNoise" baseFrequency="0.045" numOctaves={2} seed={8} result="warp" />
            <feDisplacementMap in="eaten" in2="warp" scale={5} xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
        <g filter={`url(#rough-${id})`}>
          <rect x={4} y={4} width={width - 8} height={height - 8} rx={size * 0.24} fill="none" stroke={color} strokeWidth={size * 0.09} />
          <rect
            x={size * 0.2}
            y={size * 0.2}
            width={width - size * 0.4}
            height={height - size * 0.4}
            rx={size * 0.16}
            fill="none"
            stroke={color}
            strokeWidth={size * 0.04}
          />
          <text
            x={width / 2}
            y={height / 2 + size * 0.36}
            textAnchor="middle"
            fontFamily={FONT.sans}
            fontSize={size}
            fill={color}
            letterSpacing={size * 0.08}
          >
            {text}
          </text>
        </g>
      </svg>
    </div>
  );
};

// ---------- captions, HUD, transitions ----------

const splitKeywords = (text: string, keywords: string[]) => {
  const parts: {text: string; key: boolean}[] = [];
  let rest = text;
  while (rest.length > 0) {
    let best: {index: number; word: string} | null = null;
    for (const word of keywords) {
      const index = rest.indexOf(word);
      if (index >= 0 && (best === null || index < best.index)) {
        best = {index, word};
      }
    }
    if (!best) {
      parts.push({text: rest, key: false});
      break;
    }
    if (best.index > 0) {
      parts.push({text: rest.slice(0, best.index), key: false});
    }
    parts.push({text: best.word, key: true});
    rest = rest.slice(best.index + best.word.length);
  }
  return parts;
};

// Dark-ink pill with an overprint offset shadow; paper text, keyword in the highlight ink. Carries the spoken line.
export const CaptionBar: React.FC<{t: number}> = ({t}) => {
  const line = DOSSIER.captionAt(t);
  if (!line) {
    return null;
  }
  const p = pop(t, line.start - 0.05, 0.3);
  const parts = splitKeywords(line.subtitle, line.keywords);
  const long = line.subtitle.length > 22;
  return (
    <div style={{position: 'absolute', left: 50, right: 50, top: SAFE.captionTop, display: 'flex', justifyContent: 'center'}}>
      <div
        style={{
          transform: `translateY(${p.y * 0.4}px) scale(${0.8 + 0.2 * p.scale})`,
          opacity: p.visible ? 1 : 0,
          background: INK.ink,
          color: INK.paperLight,
          borderRadius: 34,
          boxShadow: `9px 9px 0 ${INK.overprint}`,
          padding: long ? '20px 34px' : '22px 40px',
          fontFamily: FONT.sans,
          fontSize: long ? 40 : 46,
          lineHeight: 1.3,
          textAlign: 'center',
          maxWidth: 940,
        }}
      >
        {parts.map((part, i) => (
          <span key={i} style={{color: part.key ? INK.highlight : undefined}}>
            {part.text}
          </span>
        ))}
      </div>
    </div>
  );
};

export const Hud: React.FC<{t: number; chapter: string; dark?: boolean}> = ({t, chapter, dark = false}) => {
  const fg = dark ? INK.paperLight : INK.ink;
  const recOn = Math.floor(t * 1.6) % 2 === 0;
  return (
    <div
      style={{
        position: 'absolute',
        top: 92,
        left: 56,
        right: 56,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontFamily: FONT.mono,
        fontSize: 28,
        color: fg,
      }}
    >
      <div style={{display: 'flex', gap: 14, alignItems: 'center'}}>
        <Chip ink={dark ? INK.paperLight : INK.ink} text={dark ? INK.ink : INK.paperLight} size={28}>
          案卷 No.{dossier.caseNo}
        </Chip>
        <Chip ink={INK.highlight} text={INK.ink} size={28}>
          {chapter}
        </Chip>
      </div>
      <div style={{display: 'flex', gap: 12, alignItems: 'center'}}>
        <div style={{width: 20, height: 20, borderRadius: 10, background: recOn ? INK.stamp : 'transparent', border: `3px solid ${INK.stamp}`}} />
        <span>REC</span>
      </div>
    </div>
  );
};

const WIPE_INK: Record<InkName, string> = {
  ink: INK.ink,
  overprint: INK.overprint,
  highlight: INK.highlight,
  stamp: INK.stamp,
};

// Coarse grid of circles grows to full cover and shrinks back with a diagonal delay; the scene switches while covered.
export const DotWipe: React.FC<{t: number; at: number; ink?: InkName}> = ({t, at, ink = 'ink'}) => {
  const half = 0.24;
  const local = t - at;
  if (local < -half - 0.12 || local > half + 0.12) {
    return null;
  }
  const cell = 135;
  const cols = Math.ceil(DOSSIER_WIDTH / cell) + 1;
  const rows = Math.ceil(DOSSIER_HEIGHT / cell) + 1;
  const maxR = cell * 0.75;
  let d = '';
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      const delay = ((i + j) / (cols + rows)) * 0.12;
      const grow = local < 0 ? clamp01((local + half + 0.12 - delay) / half) : 1 - clamp01((local - delay) / half);
      const r = maxR * easeInOut(grow);
      if (r < 1) {
        continue;
      }
      const x = i * cell;
      const y = j * cell;
      d += `M${x - r},${y}a${r},${r} 0 1,0 ${2 * r},0a${r},${r} 0 1,0 ${-2 * r},0`;
    }
  }
  return (
    <AbsoluteFill>
      <svg width={DOSSIER_WIDTH} height={DOSSIER_HEIGHT}>
        <path d={d} fill={WIPE_INK[ink]} />
      </svg>
    </AbsoluteFill>
  );
};

// ---------- camera ----------

const cuesOf = (...names: string[]) => DOSSIER.cues.filter((cue) => names.some((name) => cue.sfx === name));
const STAMP_CUES = cuesOf('stamp', 'stamp-small');
const FLASH_CUES = cuesOf('shutter');

// Quadratic-decay shake on every stamp; capped white flash on every shutter.
export const cameraShake = (t: number) => {
  let x = 0;
  let y = 0;
  for (const cue of STAMP_CUES) {
    const dt = t - cue.t;
    if (dt < 0 || dt > 0.4) {
      continue;
    }
    const amp = (cue.sfx === 'stamp' ? 22 : 8) * (cue.gain ?? 1) * (1 - dt / 0.4) ** 2;
    x += amp * Math.sin(dt * 90 + cue.t);
    y += amp * Math.cos(dt * 70 + cue.t * 2);
  }
  return {x, y};
};

export const FlashOverlay: React.FC<{t: number}> = ({t}) => {
  let opacity = 0;
  for (const cue of FLASH_CUES) {
    const dt = t - cue.t;
    if (dt >= 0 && dt < 0.18) {
      opacity = Math.max(opacity, 0.5 * (1 - dt / 0.18));
    }
  }
  return opacity > 0 ? <AbsoluteFill style={{background: '#FFFFFF', opacity}} /> : null;
};
