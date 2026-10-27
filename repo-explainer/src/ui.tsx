import React from 'react';
import {Img, interpolate, spring, staticFile, useCurrentFrame} from 'remotion';
import {FPS} from './timeline';
import {FONT_STACK, MONO_STACK, THEME} from './theme';

export const clamp = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'} as const;

// 0 -> 1 spring that starts at `at` (scene-local frame).
export const usePop = (at: number, damping = 13) => {
  const frame = useCurrentFrame();
  return spring({frame: frame - at, fps: FPS, config: {damping, mass: 0.7, stiffness: 170}});
};

export const Reveal: React.FC<{
  at: number;
  from?: 'up' | 'left' | 'right' | 'scale' | 'slam';
  style?: React.CSSProperties;
  children: React.ReactNode;
}> = ({at, from = 'up', style, children}) => {
  const frame = useCurrentFrame();
  const p = usePop(at, from === 'slam' ? 9 : 14);
  const opacity = interpolate(frame - at, [0, 6], [0, 1], clamp);
  const transform =
    from === 'up'
      ? `translateY(${(1 - p) * 60}px)`
      : from === 'left'
        ? `translateX(${(1 - p) * -120}px)`
        : from === 'right'
          ? `translateX(${(1 - p) * 120}px)`
          : from === 'slam'
            ? `scale(${interpolate(p, [0, 1], [2.2, 1])})`
            : `scale(${interpolate(p, [0, 1], [0.6, 1])})`;

  return <div style={{opacity, transform, ...style}}>{children}</div>;
};

export const Kicker: React.FC<{children: React.ReactNode; color?: string}> = ({children, color = THEME.yellow}) => (
  <div
    style={{
      fontFamily: FONT_STACK,
      fontSize: 30,
      fontWeight: 800,
      letterSpacing: 6,
      textTransform: 'uppercase',
      color,
    }}
  >
    {children}
  </div>
);

export const Title: React.FC<{children: React.ReactNode; size?: number; style?: React.CSSProperties}> = ({
  children,
  size = 84,
  style,
}) => (
  <div
    style={{
      fontFamily: FONT_STACK,
      fontSize: size,
      fontWeight: 900,
      lineHeight: 1.08,
      color: THEME.white,
      letterSpacing: -1,
      ...style,
    }}
  >
    {children}
  </div>
);

export const Y: React.FC<{children: React.ReactNode}> = ({children}) => (
  <span style={{color: THEME.yellow, textShadow: '0 0 28px rgba(255, 212, 59, 0.45)'}}>{children}</span>
);

export const Chip: React.FC<{children: React.ReactNode; active?: boolean; style?: React.CSSProperties}> = ({
  children,
  active = false,
  style,
}) => (
  <div
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      padding: '12px 22px',
      borderRadius: 999,
      fontFamily: FONT_STACK,
      fontSize: 30,
      fontWeight: 800,
      color: active ? THEME.background : THEME.white,
      background: active ? THEME.yellow : 'rgba(248, 248, 248, 0.07)',
      border: `2px solid ${active ? THEME.yellow : 'rgba(248, 248, 248, 0.16)'}`,
      boxShadow: active ? '0 0 30px rgba(255, 212, 59, 0.5)' : 'none',
      whiteSpace: 'nowrap',
      ...style,
    }}
  >
    {children}
  </div>
);

export const Card: React.FC<{children: React.ReactNode; active?: boolean; style?: React.CSSProperties}> = ({
  children,
  active = false,
  style,
}) => (
  <div
    style={{
      background: THEME.panel,
      border: `3px solid ${active ? THEME.yellow : 'rgba(248, 248, 248, 0.12)'}`,
      borderRadius: 26,
      boxShadow: active ? '0 0 46px rgba(255, 212, 59, 0.32)' : '0 20px 50px rgba(0, 0, 0, 0.5)',
      padding: 34,
      ...style,
    }}
  >
    {children}
  </div>
);

export const Mono: React.FC<{children: React.ReactNode; size?: number; color?: string; style?: React.CSSProperties}> = ({
  children,
  size = 30,
  color = THEME.white,
  style,
}) => <span style={{fontFamily: MONO_STACK, fontSize: size, color, ...style}}>{children}</span>;

// A rendered frame from the real template, framed like a phone screenshot.
export const Still: React.FC<{src: string; width: number; style?: React.CSSProperties}> = ({src, width, style}) => (
  <div
    style={{
      width,
      borderRadius: 22,
      overflow: 'hidden',
      border: `4px solid ${THEME.yellow}`,
      boxShadow: '0 0 60px rgba(255, 212, 59, 0.28), 0 30px 80px rgba(0, 0, 0, 0.7)',
      lineHeight: 0,
      ...style,
    }}
  >
    <Img src={staticFile(`stills/${src}.jpg`)} style={{width: '100%'}} />
  </div>
);

// Cross-fades through several stills, switching at the given scene-local frames.
export const StillSequence: React.FC<{items: {src: string; at: number}[]; width: number; style?: React.CSSProperties}> = ({
  items,
  width,
  style,
}) => {
  const frame = useCurrentFrame();
  return (
    <div style={{position: 'relative', width, ...style}}>
      {items.map((item, index) => {
        const next = items[index + 1];
        const fadeIn = interpolate(frame, [item.at, item.at + 8], [0, 1], clamp);
        const fadeOut = next ? interpolate(frame, [next.at, next.at + 8], [1, 0], clamp) : 1;
        return (
          <div
            key={item.src}
            style={{
              position: index === 0 ? 'relative' : 'absolute',
              inset: index === 0 ? undefined : 0,
              opacity: index === 0 ? fadeOut : fadeIn * fadeOut,
            }}
          >
            <Still src={item.src} width={width} />
          </div>
        );
      })}
    </div>
  );
};

export const Count: React.FC<{to: number; at: number; length?: number}> = ({to, at, length = 22}) => {
  const frame = useCurrentFrame();
  const value = Math.round(interpolate(frame, [at, at + length], [0, to], {...clamp, easing: (t) => 1 - (1 - t) ** 3}));
  return <>{value}</>;
};

export const Arrow: React.FC<{at: number; height?: number}> = ({at, height = 90}) => {
  const frame = useCurrentFrame();
  const grow = interpolate(frame, [at, at + 12], [0, 1], clamp);
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', height, justifyContent: 'center'}}>
      <div style={{width: 6, height: (height - 30) * grow, background: THEME.yellow, borderRadius: 3}} />
      <div
        style={{
          width: 0,
          height: 0,
          borderLeft: '18px solid transparent',
          borderRight: '18px solid transparent',
          borderTop: `24px solid ${THEME.yellow}`,
          opacity: grow,
        }}
      />
    </div>
  );
};
