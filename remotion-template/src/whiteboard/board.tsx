import React from 'react';
import {whiteboard, WhiteboardWord} from '../data/whiteboard';
import {clamp01, easeInOut, mulberry} from '../core/motion';
import {arrowFor, BOARD, HOMEWORK_POS, ROOT_POS, ROOT_RADIUS, slotOf, TITLE_POS} from './layout';
import {WHITEBOARD, writeDuration} from './schedule';
import {BOARD_BG, FONT, HIGHLIGHTER, MARKER, MarkerColor} from './theme';
import {EXAM} from '../core/exam';

// ---------- timing helpers ----------

const cueOf = (sceneId: string, name: string) => {
  const scene = WHITEBOARD.scenes.find((s) => s.scene.id === sceneId);
  return scene?.cues.find((cue) => cue.name === name)?.t;
};

// Slow-fast-slow hand speed: u − sin(2πu)/2π × 0.8.
const handSpeed = (u: number) => {
  const p = clamp01(u);
  return p - (Math.sin(2 * Math.PI * p) / (2 * Math.PI)) * 0.8;
};

// Write progress: the term finishes at `end`.
export const writeProgress = (t: number, end: number | undefined, text: string) => {
  if (end === undefined) {
    return 0;
  }
  const d = writeDuration(text);
  return handSpeed((t - (end - d)) / d);
};

// ---------- the floating marker (no hands) ----------

const Pen: React.FC<{x: number; y: number; color: MarkerColor; lift?: number}> = ({x, y, color, lift = 0}) => (
  <div style={{position: 'absolute', left: x, top: y, width: 0, height: 0, pointerEvents: 'none'}}>
    <div style={{position: 'absolute', left: 20 + lift * 0.6, top: 30 + lift, width: 70, height: 26, borderRadius: 13, background: 'rgba(0,0,0,0.16)', filter: `blur(${6 + lift / 4}px)`, transform: 'rotate(-55deg)'}} />
    <svg width={90} height={300} viewBox="0 0 90 300" style={{position: 'absolute', left: -12, top: -280 - lift, transform: 'rotate(32deg)', transformOrigin: '12px 280px', overflow: 'visible'}}>
      <path d="M8 280 L16 252 L28 252 L36 280 Z" fill={MARKER[color]} />
      <rect x={10} y={150} width={24} height={104} rx={4} fill="#F4F4F2" stroke="#C9C9C4" strokeWidth={2} />
      <rect x={10} y={200} width={24} height={16} fill={MARKER[color]} />
      <rect x={8} y={40} width={28} height={112} rx={8} fill={MARKER[color]} />
      <rect x={14} y={52} width={5} height={80} rx={2} fill="rgba(255,255,255,0.35)" />
    </svg>
  </div>
);

// ---------- written text: revealed in writing order, the pen riding the edge ----------

export const Written: React.FC<{
  t: number;
  end: number | undefined;
  text: string; // used for timing
  x: number;
  y: number;
  color: MarkerColor;
  size: number;
  font?: string;
  anchor?: 'center' | 'left';
  rotate?: number;
  fade?: number; // 0..1 erased amount (ghost remains)
  children?: React.ReactNode;
}> = ({t, end, text, x, y, color, size, font = FONT.hand, anchor = 'center', rotate = 0, fade = 0, children}) => {
  const p = writeProgress(t, end, text);
  if (p <= 0) {
    return null;
  }
  const writing = p < 1;
  return (
    <div
      style={{
        position: 'absolute',
        left: x,
        top: y,
        transform: `translate(${anchor === 'center' ? '-50%' : '0'}, -50%) rotate(${rotate}deg)`,
        whiteSpace: 'nowrap',
      }}
    >
      <div style={{position: 'relative', display: 'inline-block'}}>
        <div
          style={{
            fontFamily: font,
            fontSize: size,
            lineHeight: 1.15,
            color: MARKER[color],
            opacity: 0.94 * (1 - fade * 0.92),
            mixBlendMode: 'multiply',
            clipPath: `inset(-40% ${(1 - p) * 100}% -40% -4%)`,
          }}
        >
          {children ?? text}
        </div>
        {writing ? (
          <div style={{position: 'absolute', left: `${p * 100}%`, top: '62%'}}>
            <Pen x={0} y={0} color={color} />
          </div>
        ) : null}
      </div>
    </div>
  );
};

// A word with its root letters swept in highlighter yellow.
export const RootHighlighted: React.FC<{word: string}> = ({word}) => {
  const form = whiteboard.root.forms.find((f) => word.toLowerCase().includes(f.toLowerCase()));
  if (!form) {
    return <>{word}</>;
  }
  const i = word.toLowerCase().indexOf(form.toLowerCase());
  return (
    <>
      {word.slice(0, i)}
      <span style={{background: `linear-gradient(transparent 38%, ${HIGHLIGHTER} 38%, ${HIGHLIGHTER} 88%, transparent 88%)`, padding: '0 4px'}}>{word.slice(i, i + form.length)}</span>
      {word.slice(i + form.length)}
    </>
  );
};

// ---------- strokes: arrows and circles drawn with a dash reveal ----------

export const ArrowStroke: React.FC<{t: number; end: number | undefined; from: {x: number; y: number}; to: {x: number; y: number}; color?: MarkerColor}> = ({
  t,
  end,
  from,
  to,
  color = 'black',
}) => {
  if (end === undefined) return null;
  const p = handSpeed((t - (end - 0.5)) / 0.5);
  if (p <= 0) return null;
  const mx = (from.x + to.x) / 2 + (to.y - from.y) * 0.06;
  const my = (from.y + to.y) / 2 - (to.x - from.x) * 0.06;
  const angle = Math.atan2(to.y - my, to.x - mx);
  const head = 46;
  const penX = from.x + (to.x - from.x) * p;
  const penY = from.y + (to.y - from.y) * p;
  return (
    <>
      <svg width={BOARD.w} height={BOARD.h} style={{position: 'absolute', left: 0, top: 0, overflow: 'visible', mixBlendMode: 'multiply'}}>
        <path d={`M${from.x},${from.y} Q${mx},${my} ${to.x},${to.y}`} pathLength={1} strokeDasharray={1} strokeDashoffset={1 - p} fill="none" stroke={MARKER[color]} strokeWidth={9} strokeLinecap="round" opacity={0.94} />
        {p > 0.96 ? (
          <path
            d={`M${to.x + Math.cos(angle + 2.6) * head},${to.y + Math.sin(angle + 2.6) * head} L${to.x},${to.y} L${to.x + Math.cos(angle - 2.6) * head},${to.y + Math.sin(angle - 2.6) * head}`}
            fill="none"
            stroke={MARKER[color]}
            strokeWidth={9}
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity={0.94}
          />
        ) : null}
      </svg>
      {p < 1 ? <Pen x={penX} y={penY} color={color} /> : null}
    </>
  );
};

// A hand-drawn ring that overlaps past closure.
export const Ring: React.FC<{t: number; end: number | undefined; cx: number; cy: number; rx: number; ry: number; color?: MarkerColor; width?: number; start?: number}> = ({
  t,
  end,
  cx,
  cy,
  rx,
  ry,
  color = 'black',
  width = 9,
  start = -2.2,
}) => {
  if (end === undefined) return null;
  const p = handSpeed((t - (end - 0.7)) / 0.7);
  if (p <= 0) return null;
  const sweep = Math.PI * 2 + 0.35;
  const points = Array.from({length: 80}, (_, i) => {
    const a = start + (sweep * i) / 79;
    const wobble = 1 + 0.02 * Math.sin(a * 3) + (i / 79) * 0.04;
    return `${cx + Math.cos(a) * rx * wobble},${cy + Math.sin(a) * ry * wobble}`;
  });
  const a = start + sweep * p;
  return (
    <>
      <svg width={BOARD.w} height={BOARD.h} style={{position: 'absolute', left: 0, top: 0, overflow: 'visible', mixBlendMode: 'multiply'}}>
        <polyline points={points.join(' ')} pathLength={1} strokeDasharray={1} strokeDashoffset={1 - p} fill="none" stroke={MARKER[color]} strokeWidth={width} strokeLinecap="round" opacity={0.94} />
      </svg>
      {p < 1 ? <Pen x={cx + Math.cos(a) * rx} y={cy + Math.sin(a) * ry} color={color} /> : null}
    </>
  );
};

// ---------- props: eraser and magnets ----------

const Eraser: React.FC<{t: number; at: number | undefined; x0: number; x1: number; y: number}> = ({t, at, x0, x1, y}) => {
  if (at === undefined) return null;
  const local = t - at;
  if (local < -0.25 || local > 0.85) return null;
  const p = easeInOut(clamp01(local / 0.6));
  const x = x0 + (x1 - x0) * p;
  const zig = Math.sin(local * 40) * 18;
  const drop = local < 0 ? (-local / 0.25) * 140 : local > 0.6 ? ((local - 0.6) / 0.25) * 140 : 0;
  return (
    <div style={{position: 'absolute', left: x - 150, top: y - 70 + zig - drop}}>
      <div style={{position: 'absolute', left: 16, top: 26 + drop * 0.5, width: 300, height: 120, borderRadius: 24, background: 'rgba(0,0,0,0.16)', filter: 'blur(10px)'}} />
      <div style={{position: 'relative', width: 300, height: 130}}>
        <div style={{position: 'absolute', left: 0, top: 0, width: 300, height: 86, borderRadius: '24px 24px 8px 8px', background: '#2E5AAC'}} />
        <div style={{position: 'absolute', left: 0, top: 80, width: 300, height: 50, borderRadius: '6px 6px 14px 14px', background: '#4A4A4A'}} />
      </div>
    </div>
  );
};

const Magnet: React.FC<{t: number; at: number | undefined; x: number; y: number; color: string}> = ({t, at, x, y, color}) => {
  if (at === undefined || t < at - 0.25) return null;
  const local = t - at;
  const lift = local < 0 ? (-local / 0.25) * 120 : 0;
  return (
    <div style={{position: 'absolute', left: x - 50, top: y - 50 - lift}}>
      <div style={{position: 'absolute', left: 10 + lift * 0.3, top: 22 + lift, width: 96, height: 96, borderRadius: 48, background: 'rgba(0,0,0,0.22)', filter: `blur(${6 + lift / 10}px)`}} />
      <div style={{position: 'relative', width: 100, height: 100, borderRadius: 50, background: color, boxShadow: 'inset -10px -12px 0 rgba(0,0,0,0.18)'}}>
        <div style={{position: 'absolute', left: 22, top: 16, width: 34, height: 20, borderRadius: 10, background: 'rgba(255,255,255,0.6)', transform: 'rotate(-25deg)'}} />
      </div>
    </div>
  );
};

// ---------- the board ----------

const GhostMarks: React.FC = () => {
  const rand = mulberry(7);
  const ghosts = ['x = 2', 'photo', '→', 'abc', '?', 'ask', '1 + 1'];
  return (
    <svg width={BOARD.w} height={BOARD.h} style={{position: 'absolute', left: 0, top: 0}}>
      {Array.from({length: 26}, (_, i) => {
        const x = rand() * BOARD.w;
        const y = rand() * BOARD.h;
        const kind = i % 3;
        const color = i % 2 ? 'rgba(120,130,150,0.07)' : 'rgba(90,120,190,0.06)';
        if (kind === 0) {
          return <ellipse key={i} cx={x} cy={y} rx={60 + rand() * 140} ry={40 + rand() * 80} fill="none" stroke={color} strokeWidth={8} />;
        }
        if (kind === 1) {
          return <path key={i} d={`M${x},${y} q${60 + rand() * 120},${-40 + rand() * 80} ${160 + rand() * 200},${rand() * 60}`} fill="none" stroke={color} strokeWidth={7} />;
        }
        return (
          <text key={i} x={x} y={y} fontFamily={FONT.hand} fontSize={70 + rand() * 60} fill={color}>
            {ghosts[i % ghosts.length]}
          </text>
        );
      })}
    </svg>
  );
};

const partsLine = (word: WhiteboardWord) => word.parts.map((part) => `${part.text}${part.gloss ? ` ${part.gloss}` : ''}`).join(' + ');

const Branch: React.FC<{t: number; word: WhiteboardWord; sceneId: string}> = ({t, word, sceneId}) => {
  const slot = slotOf(word);
  const cue = (name: string) => cueOf(sceneId, name);
  const arrow = arrowFor(word);
  const twist = Boolean(word.twist);
  const eraseAt = cue('erase');
  const erased = eraseAt === undefined ? 0 : clamp01((t - eraseAt) / 0.6);
  const meaningEnd = twist ? cue('meaning-first') : cue('meaning');
  const meaningY = twist ? slot.y + 130 : slot.y + 355;
  return (
    <>
      <ArrowStroke t={t} end={cue('arrow')} from={arrow.from} to={arrow.to} />
      <Written t={t} end={cue('word')} text={word.word} x={slot.x} y={slot.y} color="black" size={150} rotate={-1.5}>
        <RootHighlighted word={word.word} />
      </Written>
      {twist ? (
        <>
          <Written t={t} end={meaningEnd} text={word.meaning} x={slot.x} y={meaningY} color="red" size={96} font={FONT.zh} />
          <Ring t={t} end={cue('ring')} cx={slot.x} cy={meaningY + 6} rx={150} ry={78} color="red" width={8} />
          <Written t={t} end={cue('wrong')} text={word.twist!.wrong} x={slot.x} y={slot.y + 250} color="red" size={76} font={FONT.zh} fade={erased} />
          <Eraser t={t} at={eraseAt} x0={slot.x - 420} x1={slot.x + 420} y={slot.y + 250} />
          <Written t={t} end={cue('parts')} text={partsLine(word)} x={slot.x} y={slot.y + 250} color="blue" size={74} />
          <Written t={t} end={cue('literal')} text={word.literal} x={slot.x} y={slot.y + 345} color="blue" size={64} font={FONT.zh}>
            → {word.literal}
          </Written>
          <Written t={t} end={cue('example')} text={word.example.en} x={slot.x} y={slot.y + 450} color="black" size={56}>
            {word.example.en} · {word.example.zh}
          </Written>
        </>
      ) : (
        <>
          <Written t={t} end={cue('parts')} text={partsLine(word)} x={slot.x} y={slot.y + 175} color="blue" size={72} />
          <Written t={t} end={cue('literal')} text={word.literal} x={slot.x} y={slot.y + 265} color="blue" size={64} font={FONT.zh}>
            → {word.literal}
          </Written>
          <Written t={t} end={meaningEnd} text={word.meaning} x={slot.x} y={meaningY} color="red" size={92} font={FONT.zh} />
          <Written t={t} end={cue('example')} text={word.example.en} x={slot.x} y={slot.y + 465} color="black" size={54}>
            {word.example.en} · {word.example.zh}
          </Written>
        </>
      )}
    </>
  );
};

export const Board: React.FC<{t: number}> = ({t}) => {
  const titleScene = WHITEBOARD.scenes.find((s) => s.scene.kind === 'title');
  const rootScene = WHITEBOARD.scenes.find((s) => s.scene.kind === 'root');
  const overview = WHITEBOARD.scenes.find((s) => s.scene.kind === 'overview');
  const homework = WHITEBOARD.scenes.find((s) => s.scene.kind === 'homework');
  const hw = whiteboard.homework;
  // The stem is written on two lines, split at the space nearest its middle.
  const middle = hw.stem.length / 2;
  const spaces = [...hw.stem.matchAll(/ /g)].map((m) => m.index ?? 0);
  const cut = spaces.length ? spaces.reduce((best, i) => (Math.abs(i - middle) < Math.abs(best - middle) ? i : best), spaces[0]) : hw.stem.length;
  const stemLines = [hw.stem.slice(0, cut), hw.stem.slice(cut + 1)];
  const cardShown = homework ? t >= (cueOf(homework.scene.id, 'magnet1') ?? Infinity) - 0.1 : false;
  return (
    <div style={{position: 'absolute', left: 0, top: 0, width: BOARD.w, height: BOARD.h}}>
      {/* The board surface runs well past the content so no camera stop shows its edge. */}
      <div style={{position: 'absolute', left: -1600, top: -1600, width: BOARD.w + 3200, height: BOARD.h + 3200, background: `linear-gradient(160deg, #FBFAF7, ${BOARD_BG} 55%, #EFEDE6)`}} />
      <GhostMarks />
      {titleScene ? (
        <>
          <Written t={t} end={cueOf(titleScene.scene.id, 'title')} text={whiteboard.title} x={TITLE_POS.x} y={TITLE_POS.y + 60} anchor="left" color="black" size={150} font={FONT.zh} rotate={-2} />
          <Written
            t={t}
            end={cueOf(titleScene.scene.id, 'subtitle')}
            text={`${EXAM.vocab} 白板`}
            x={TITLE_POS.x + 10}
            y={TITLE_POS.y + 220}
            anchor="left"
            color="blue"
            size={62}
            font={FONT.zh}
          >
            {EXAM.vocab} · 白板 No.{whiteboard.boardNo}
          </Written>
        </>
      ) : null}
      {rootScene ? (
        <>
          <Ring t={t} end={cueOf(rootScene.scene.id, 'circle')} cx={ROOT_POS.x} cy={ROOT_POS.y} rx={ROOT_RADIUS * 1.1} ry={ROOT_RADIUS * 0.75} />
          {overview ? <Ring t={t} end={cueOf(overview.scene.id, 'ring2')} cx={ROOT_POS.x} cy={ROOT_POS.y} rx={ROOT_RADIUS * 1.2} ry={ROOT_RADIUS * 0.84} color="red" start={-1.2} /> : null}
          <Written t={t} end={cueOf(rootScene.scene.id, 'root')} text={whiteboard.root.forms.join(' / ')} x={ROOT_POS.x} y={ROOT_POS.y - 50} color="black" size={180}>
            {whiteboard.root.forms.map((form, i) => (
              <React.Fragment key={form}>
                {i > 0 ? ' / ' : ''}
                <span style={{background: `linear-gradient(transparent 38%, ${HIGHLIGHTER} 38%, ${HIGHLIGHTER} 88%, transparent 88%)`, padding: '0 6px'}}>{form}</span>
              </React.Fragment>
            ))}
          </Written>
          <Written
            t={t}
            end={cueOf(rootScene.scene.id, 'meaning')}
            text={`= ${whiteboard.root.en} ${whiteboard.root.meaning}`}
            x={ROOT_POS.x}
            y={ROOT_POS.y + 110}
            color="red"
            size={110}
          >
            = {whiteboard.root.en} <span style={{fontFamily: FONT.zh}}>{whiteboard.root.meaning}</span>
          </Written>
        </>
      ) : null}
      {WHITEBOARD.scenes
        .filter((s) => (s.scene.kind === 'branch' || s.scene.kind === 'twist') && s.scene.wordId)
        .map((s) => {
          const word = whiteboard.words.find((w) => w.id === s.scene.wordId);
          return word ? <Branch key={s.scene.id} t={t} word={word} sceneId={s.scene.id} /> : null;
        })}
      {homework && cardShown ? (
        <div style={{position: 'absolute', left: HOMEWORK_POS.x - 650, top: HOMEWORK_POS.y - 260, width: 1300, height: 540}}>
          <div style={{position: 'absolute', inset: 0, background: '#FFF6C9', boxShadow: '8px 14px 24px rgba(0,0,0,0.14)', transform: 'rotate(-1deg)'}} />
          <Written t={t} end={cueOf(homework.scene.id, 'stem')} text="question" x={60} y={80} anchor="left" color="black" size={66}>
            <span style={{fontFamily: FONT.zh, color: MARKER.red}}>作业 </span>
            {stemLines[0]}
          </Written>
          <Written t={t} end={(cueOf(homework.scene.id, 'stem') ?? 0) + 0.6} text={stemLines[1]} x={60} y={165} anchor="left" color="black" size={66} />
          <Written t={t} end={(cueOf(homework.scene.id, 'stem') ?? 0) + 1.0} text={hw.stemZh} x={60} y={255} anchor="left" color="blue" size={50} font={FONT.zh} />
          <Written t={t} end={(cueOf(homework.scene.id, 'stem') ?? 0) + 1.5} text="options" x={60} y={350} anchor="left" color="black" size={64}>
            {hw.options.map((option, i) => `${String.fromCharCode(65 + i)}. ${option}`).join('   ')}
          </Written>
          <Written t={t} end={cueOf(homework.scene.id, 'sign')} text="评论区" x={60} y={460} anchor="left" color="red" size={52} font={FONT.zh}>
            答案写在评论区 → · {hw.sourceNote}
          </Written>
          <Magnet t={t} at={cueOf(homework.scene.id, 'magnet1')} x={40} y={20} color={MARKER.red} />
          <Magnet t={t} at={cueOf(homework.scene.id, 'magnet2')} x={1260} y={20} color={MARKER.blue} />
        </div>
      ) : null}
    </div>
  );
};
