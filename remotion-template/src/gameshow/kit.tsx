import React from 'react';
import {AbsoluteFill} from 'remotion';
import {gameShow, GameShowScene} from '../data/gameShow';
import {backOut, clamp01, easeIn, mulberry, pop, progress, punch, squash} from '../core/motion';
import {HEIGHT, WIDTH} from '../core/timeline';
import {GAME_SHOW} from './schedule';
import {CAPTION_TOP, CREAM, FLOOR_Y, FONT, HUES, INK, PAPER, ROOT_YELLOW} from './theme';

// ---------- the set: one saturated hue, a lighter pattern, a darker floor ----------

export const SetBackground: React.FC<{set: GameShowScene['set']; t: number}> = ({set, t}) => {
  const hue = HUES[set.hue];
  let pattern: React.ReactNode = null;
  if (set.pattern === 'stripes') {
    const period = 120;
    const shift = (t * 40) % period;
    pattern = (
      <g transform={`translate(${shift} 0)`}>
        {Array.from({length: 30}, (_, i) => (
          <polygon key={i} points={`${-1200 + i * period},0 ${-1140 + i * period},0 ${-140 + i * period},${HEIGHT} ${-200 + i * period},${HEIGHT}`} fill={hue.pattern} />
        ))}
      </g>
    );
  } else if (set.pattern === 'dots') {
    const step = 110;
    const dots: React.ReactNode[] = [];
    for (let row = 0; row < HEIGHT / step + 1; row++) {
      for (let col = 0; col < WIDTH / step + 1; col++) {
        const x = col * step + (row % 2 ? step / 2 : 0);
        dots.push(<circle key={`${row}-${col}`} cx={x} cy={row * step} r={22} fill={hue.pattern} />);
      }
    }
    pattern = <g transform={`translate(0 ${(t * 20) % (step * 2)})`}>{dots}</g>;
  } else {
    const rays = 18;
    pattern = (
      <g transform={`rotate(${t * 8} 540 760)`}>
        {Array.from({length: rays}, (_, i) => {
          const a0 = (i / rays) * Math.PI * 2;
          const a1 = ((i + 0.5) / rays) * Math.PI * 2;
          return <polygon key={i} points={`540,760 ${540 + Math.cos(a0) * 2400},${760 + Math.sin(a0) * 2400} ${540 + Math.cos(a1) * 2400},${760 + Math.sin(a1) * 2400}`} fill={hue.pattern} />;
        })}
      </g>
    );
  }
  return (
    <AbsoluteFill style={{background: hue.base}}>
      <svg width={WIDTH} height={HEIGHT} style={{position: 'absolute'}}>
        {pattern}
        <rect x={0} y={FLOOR_Y} width={WIDTH} height={HEIGHT - FLOOR_Y} fill={hue.floor} />
        <rect x={0} y={FLOOR_Y - 4} width={WIDTH} height={8} fill={INK} />
      </svg>
    </AbsoluteFill>
  );
};

// ---------- type ----------

// Telop: white or yellow fill with an ink stroke (~14 % of the size) painted under the fill.
export const Telop: React.FC<{
  text: string;
  size: number;
  t: number;
  at: number;
  fill?: string;
  family?: string;
  perChar?: boolean;
  rotate?: number;
  parts?: {text: string; fill: string}[]; // coloured runs instead of `text`
  style?: React.CSSProperties;
}> = ({text, size, t, at, fill = PAPER, family = FONT.telop, perChar = false, rotate = 0, parts, style}) => {
  const base: React.CSSProperties = {
    fontFamily: family,
    fontSize: size,
    lineHeight: 1.1,
    color: fill,
    WebkitTextStroke: `${Math.round(size * 0.14)}px ${INK}`,
    paintOrder: 'stroke fill',
    whiteSpace: 'pre',
    letterSpacing: size > 120 ? 2 : 0,
  };
  if (perChar) {
    return (
      <div style={{...base, transform: `rotate(${rotate}deg)`, ...style}}>
        {Array.from(text).map((char, i) => {
          const start = at + i * 0.07;
          const local = t - start;
          if (local < 0) {
            return (
              <span key={i} style={{opacity: 0}}>
                {char}
              </span>
            );
          }
          const drop = (1 - easeIn(Math.min(1, local / 0.22))) * -260;
          const sq = squash(t, start + 0.22, 0.2);
          return (
            <span key={i} style={{display: 'inline-block', transform: `translateY(${drop}px) scale(${sq.sx}, ${sq.sy})`, transformOrigin: '50% 100%'}}>
              {char}
            </span>
          );
        })}
      </div>
    );
  }
  const p = pop(t, at, 0.32);
  if (!p.visible) {
    return null;
  }
  return (
    <div style={{...base, transform: `translateY(${p.y}px) scale(${p.scale}) rotate(${rotate}deg)`, transformOrigin: '50% 60%', ...style}}>
      {parts ? parts.map((part, i) => <span key={i} style={{color: part.fill}}>{part.text}</span>) : text}
    </div>
  );
};

// Flat tile: fill + 8 px ink outline + hard offset shadow.
export const Tile: React.FC<{fill: string; children: React.ReactNode; style?: React.CSSProperties; radius?: number; shadow?: number}> = ({
  fill,
  children,
  style,
  radius = 28,
  shadow = 14,
}) => (
  <div style={{background: fill, border: `8px solid ${INK}`, borderRadius: radius, boxShadow: `${shadow}px ${shadow}px 0 ${INK}`, ...style}}>{children}</div>
);

// Corner sticker banner.
export const Banner: React.FC<{t: number; at: number; text: string; fill?: string; x: number; y: number; rotate?: number; size?: number}> = ({
  t,
  at,
  text,
  fill = ROOT_YELLOW,
  x,
  y,
  rotate = -4,
  size = 52,
}) => {
  const p = pop(t, at, 0.3);
  if (!p.visible) {
    return null;
  }
  return (
    <div style={{position: 'absolute', left: x, top: y, transform: `translateY(${p.y}px) scale(${p.scale}) rotate(${rotate}deg)`, transformOrigin: '0 50%'}}>
      <Tile fill={fill} radius={18} shadow={10} style={{padding: '10px 30px'}}>
        <div style={{fontFamily: FONT.telop, fontSize: size, color: INK}}>{text}</div>
      </Tile>
    </div>
  );
};

// Star burst + ring + speed lines behind a hit.
export const Burst: React.FC<{t: number; at: number; x: number; y: number; color?: string; size?: number}> = ({t, at, x, y, color = ROOT_YELLOW, size = 420}) => {
  const local = t - at;
  if (local < 0 || local > 1.2) {
    return null;
  }
  const grow = backOut(clamp01(local / 0.25));
  const fade = local > 0.8 ? 1 - (local - 0.8) / 0.4 : 1;
  const points = Array.from({length: 24}, (_, i) => {
    const r = (i % 2 === 0 ? 1 : 0.62) * (size / 2) * grow;
    const a = (i / 24) * Math.PI * 2 + local * 0.6;
    return `${Math.cos(a) * r},${Math.sin(a) * r}`;
  }).join(' ');
  return (
    <svg width={size * 2} height={size * 2} style={{position: 'absolute', left: x - size, top: y - size, opacity: fade, overflow: 'visible'}}>
      <g transform={`translate(${size} ${size})`}>
        {Array.from({length: 12}, (_, i) => {
          const a = (i / 12) * Math.PI * 2;
          const r0 = size * 0.62 * grow;
          const r1 = size * (0.8 + 0.25 * clamp01(local / 0.4));
          return <line key={i} x1={Math.cos(a) * r0} y1={Math.sin(a) * r0} x2={Math.cos(a) * r1} y2={Math.sin(a) * r1} stroke={INK} strokeWidth={10} strokeLinecap="round" />;
        })}
        <polygon points={points} fill={color} stroke={INK} strokeWidth={8} strokeLinejoin="round" />
        <circle r={(size / 2.1) * clamp01(local / 0.5)} fill="none" stroke={PAPER} strokeWidth={8} opacity={1 - clamp01(local / 0.6)} />
      </g>
    </svg>
  );
};

// Round lamps: one per word, lit when the round is won.
export const Lamps: React.FC<{t: number; litUntil: number; current?: number; x: number; y: number; size?: number}> = ({t, litUntil, current, x, y, size = 44}) => (
  <div style={{position: 'absolute', left: x, top: y, display: 'flex', gap: 16}}>
    {gameShow.words.map((word, i) => {
      const lit = i < litUntil;
      const blink = current === i && Math.floor(t * 4) % 2 === 0;
      return (
        <div
          key={word.id}
          style={{
            width: size,
            height: size,
            borderRadius: size / 2,
            border: `6px solid ${INK}`,
            background: lit ? ROOT_YELLOW : blink ? CREAM : 'rgba(255,255,255,0.35)',
            boxShadow: `5px 5px 0 ${INK}`,
          }}
        />
      );
    })}
  </div>
);

// Confetti burst (seeded): flat rectangles with ink outlines falling from the top.
export const Confetti: React.FC<{t: number; at: number}> = ({t, at}) => {
  const local = t - at;
  if (local < 0 || local > 3) {
    return null;
  }
  const rand = mulberry(42);
  const colors = [ROOT_YELLOW, '#FF6B9A', '#4CC9F0', '#3DDC97', PAPER];
  return (
    <svg width={WIDTH} height={HEIGHT} style={{position: 'absolute', left: 0, top: 0}}>
      {Array.from({length: 46}, (_, i) => {
        const x0 = rand() * WIDTH;
        const vy = 500 + rand() * 600;
        const vx = (rand() - 0.5) * 300;
        const spin = (rand() - 0.5) * 720;
        const x = x0 + vx * local;
        const y = -60 + vy * local + 300 * local * local * 0.3;
        return (
          <rect key={i} x={-14} y={-8} width={28} height={16} fill={colors[i % colors.length]} stroke={INK} strokeWidth={3} transform={`translate(${x} ${y}) rotate(${spin * local})`} />
        );
      })}
    </svg>
  );
};

// ---------- caption plate, camera punch, cut flash ----------

export const TelopPlate: React.FC<{t: number; keywordColor: string}> = ({t, keywordColor}) => {
  const line = GAME_SHOW.captionAt(t);
  if (!line) {
    return null;
  }
  const p = pop(t, line.start - 0.04, 0.26);
  const parts: {text: string; key: boolean}[] = [];
  let rest = line.subtitle;
  while (rest) {
    let best: {i: number; w: string} | null = null;
    for (const w of line.keywords) {
      const i = rest.indexOf(w);
      if (i >= 0 && (!best || i < best.i)) best = {i, w};
    }
    if (!best) {
      parts.push({text: rest, key: false});
      break;
    }
    if (best.i > 0) parts.push({text: rest.slice(0, best.i), key: false});
    parts.push({text: best.w, key: true});
    rest = rest.slice(best.i + best.w.length);
  }
  return (
    <div style={{position: 'absolute', left: 50, right: 50, top: CAPTION_TOP, display: 'flex', justifyContent: 'center'}}>
      <div style={{transform: `scale(${0.85 + 0.15 * p.scale})`, opacity: p.visible ? 1 : 0}}>
        <Tile fill={PAPER} radius={30} shadow={10} style={{padding: '16px 34px', maxWidth: 940}}>
          <div style={{fontFamily: FONT.zh, fontSize: line.subtitle.length > 24 ? 38 : 44, color: INK, textAlign: 'center', lineHeight: 1.3}}>
            {parts.map((part, i) => (
              <span key={i} style={{color: part.key ? keywordColor : INK}}>
                {part.text}
              </span>
            ))}
          </div>
        </Tile>
      </div>
    </div>
  );
};

const PUNCH_CUES = new Set(['root', 'merge', 'judge', 'grade', 'tile', 'title']);
export const punchScale = (t: number) => {
  let sum = 0;
  for (const cue of GAME_SHOW.cues) {
    if (PUNCH_CUES.has(cue.name) || /^w\d+$/.test(cue.name)) {
      sum += punch(t, cue.t, cue.name === 'judge' || cue.name === 'grade' ? 0.035 : 0.02);
    }
  }
  return 1 + Math.min(sum, 0.06);
};

// Hard cut on the bar line with a very short white flash.
export const CutFlash: React.FC<{t: number}> = ({t}) => {
  const cut = GAME_SHOW.scenes.find((scene) => scene.index > 0 && t >= scene.start && t < scene.start + 0.1);
  if (!cut) {
    return null;
  }
  return <AbsoluteFill style={{background: PAPER, opacity: 0.6 * (1 - progress(t, cut.start, 0.1))}} />;
};
