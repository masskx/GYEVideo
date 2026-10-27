import React from 'react';
import {AbsoluteFill} from 'remotion';
import {dossier, DossierCloze} from '../data/dossier';
import {BrandPig} from '../brand/BrandPig';
import {cueTime} from '../core/timeline';
import {
  backOut,
  Chip,
  clamp01,
  easeInOut,
  easeOut,
  edgeField,
  Halftone,
  HalftoneGlyph,
  Pop,
  PopText,
  PrintCard,
  progress,
  radialField,
  squash,
  Stamp,
} from './print';
import {DOSSIER, DossierTiming, wordById} from './schedule';

type SceneTiming = DossierTiming;
const SCORE_BEAT = DOSSIER.beat;
import {FONT, INK} from './theme';

export type SceneProps = {timing: SceneTiming; t: number};

// ---------- camera ----------

type CameraProps = {t: number; scale?: number; x?: number; y?: number; rotate?: number; originX?: number; originY?: number; children: React.ReactNode};

const Camera: React.FC<CameraProps> = ({scale = 1, x = 0, y = 0, rotate = 0, originX = 540, originY = 860, children}) => (
  <AbsoluteFill style={{transform: `translate(${x}px, ${y}px) scale(${scale}) rotate(${rotate}deg)`, transformOrigin: `${originX}px ${originY}px`}}>
    {children}
  </AbsoluteFill>
);

// A small pulse on every beat: the page grooving with the score.
const beatPulse = (t: number, amount = 0.006) => {
  const phase = (t % SCORE_BEAT) / SCORE_BEAT;
  return 1 + amount * Math.exp(-phase * 6);
};

const pushIn = (t: number, timing: SceneTiming, to = 1.05) => 1 + (to - 1) * easeInOut(progress(t, timing.start, timing.end - timing.start));

// ---------- shared pieces ----------

const Absolute: React.FC<{x: number; y: number; w?: number; children: React.ReactNode; style?: React.CSSProperties}> = ({x, y, w, children, style}) => (
  <div style={{position: 'absolute', left: x, top: y, width: w, ...style}}>{children}</div>
);

const Kicker: React.FC<{children: React.ReactNode; color?: string}> = ({children, color = INK.overprint}) => (
  <div style={{fontFamily: FONT.mono, fontSize: 30, letterSpacing: 4, color}}>{children}</div>
);

// The blank in a cloze stem: an ink redaction bar, or the answer once it is filled in.
const Blank: React.FC<{filled?: string; t: number; fillAt?: number; size: number}> = ({filled, t, fillAt, size}) => {
  const showAnswer = filled !== undefined && fillAt !== undefined && t >= fillAt;
  const p = fillAt === undefined ? 1 : backOut(progress(t, fillAt, 0.3));
  return (
    <span
      style={{
        display: 'inline-block',
        minWidth: size * 3.6,
        padding: '0 14px',
        margin: '0 6px',
        borderRadius: 8,
        textAlign: 'center',
        background: showAnswer ? INK.highlight : INK.ink,
        color: showAnswer ? INK.ink : INK.highlight,
        transform: showAnswer ? `scale(${0.6 + 0.4 * p})` : undefined,
        border: showAnswer ? `5px solid ${INK.ink}` : undefined,
      }}
    >
      {showAnswer ? filled : '?'}
    </span>
  );
};

// Typed stem: characters appear on the typewriter clicks; the blank prints as a block.
const Stem: React.FC<{cloze: DossierCloze; t: number; typeFrom: number; typeLength: number; size?: number; filled?: string; fillAt?: number}> = ({
  cloze,
  t,
  typeFrom,
  typeLength,
  size = 50,
  filled,
  fillAt,
}) => {
  const [before, after] = cloze.stem.split('____');
  const total = before.length + after.length + 1;
  const shown = Math.floor(clamp01((t - typeFrom) / typeLength) * total);
  const beforeShown = before.slice(0, shown);
  const blankShown = shown > before.length;
  const afterShown = after.slice(0, Math.max(0, shown - before.length - 1));
  return (
    <div style={{fontFamily: FONT.headline, fontSize: size, lineHeight: 1.5, color: INK.ink}}>
      {beforeShown}
      {blankShown ? <Blank t={t} size={size} filled={filled} fillAt={fillAt} /> : null}
      {afterShown}
      {shown < total ? <span style={{color: INK.overprint}}>▌</span> : null}
    </div>
  );
};

const OPTION_LETTERS = ['A', 'B', 'C', 'D'];

const OptionCard: React.FC<{letter: string; word: string; t: number; at: number; shadow: string; crossedAt?: number; chosenAt?: number; width: number}> = ({
  letter,
  word,
  t,
  at,
  shadow,
  crossedAt,
  chosenAt,
  width,
}) => {
  const sq = squash(t, at + 0.3, 0.14);
  const crossed = crossedAt !== undefined && t >= crossedAt;
  const chosen = chosenAt !== undefined && t >= chosenAt;
  return (
    <Pop t={t} at={at}>
      <div style={{transform: `scale(${sq.sx}, ${sq.sy})`, transformOrigin: '50% 100%', position: 'relative', width}}>
        <PrintCard
          fill={chosen ? INK.highlight : INK.paperLight}
          shadow={shadow}
          style={{width, height: 132, display: 'flex', alignItems: 'center', gap: 26, padding: '0 28px', boxSizing: 'border-box'}}
        >
          <div
            style={{
              width: 78,
              height: 78,
              borderRadius: 39,
              background: chosen ? INK.ink : INK.highlight,
              color: chosen ? INK.highlight : INK.ink,
              border: `5px solid ${INK.ink}`,
              fontFamily: FONT.display,
              fontSize: 48,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            {letter}
          </div>
          <div style={{fontFamily: FONT.headline, fontSize: 60, color: INK.ink}}>{word}</div>
        </PrintCard>
        {crossed ? (
          <div
            style={{
              position: 'absolute',
              left: 120,
              right: 26,
              top: 52,
              height: 30,
              background: INK.ink,
              transform: `scaleX(${easeOut(progress(t, crossedAt!, 0.12))}) rotate(-2deg)`,
              transformOrigin: '0 50%',
            }}
          />
        ) : null}
      </div>
    </Pop>
  );
};

// ---------- 1. the case: a cloze question with four look-alike options ----------

export const ClozeCaseScene: React.FC<SceneProps> = ({timing, t}) => {
  const cloze = dossier.hookCase;
  const typeFrom = cueTime(timing, 'type-0');
  return (
    <Camera t={t} scale={pushIn(t, timing, 1.04)}>
      <Halftone cacheKey="case-corner" w={1080} h={700} color={INK.highlight} step={24} angle={15} density={radialField(1020, 120, 620, 0.95, 0)} />
      <Absolute x={70} y={210}>
        <Kicker>CASE FILE · 高考完形</Kicker>
        <PopText text={dossier.title} t={t} at={cueTime(timing, 'title')} size={128} style={{marginTop: 14}} />
      </Absolute>
      <Absolute x={60} y={520} w={960}>
        <Pop t={t} at={cueTime(timing, 'paper')} rotate={-1.5}>
          <PrintCard style={{padding: '34px 40px', minHeight: 380, boxSizing: 'border-box'}}>
            <div style={{display: 'flex', gap: 14, alignItems: 'center', marginBottom: 22}}>
              <Chip size={28}>{cloze.label}</Chip>
              <span style={{fontFamily: FONT.mono, fontSize: 24, color: INK.overprint}}>{cloze.sourceNote}</span>
            </div>
            <Stem cloze={cloze} t={t} typeFrom={typeFrom} typeLength={1.5} />
            <div style={{fontFamily: FONT.sans, fontSize: 32, color: INK.overprint, marginTop: 16, opacity: t > typeFrom + 1.5 ? 1 : 0}}>
              {cloze.stemZh}
            </div>
          </PrintCard>
        </Pop>
      </Absolute>
      <Absolute x={60} y={1010} w={960}>
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 30}}>
          {cloze.options.map((option, i) => (
            <OptionCard
              key={option}
              letter={OPTION_LETTERS[i]}
              word={option}
              t={t}
              at={cueTime(timing, `opt${i}`)}
              shadow={i % 2 === 0 ? INK.overprint : INK.highlight}
              width={460}
            />
          ))}
        </div>
      </Absolute>
      <Stamp id="loss" text="易错四选一" t={t} at={cueTime(timing, 'loss')} size={84} rotate={-9} style={{left: 250, top: 1100}} />
      <BrandPig id="pig-case" t={t} face="squint" pose="inspect" size={200} landAt={cueTime(timing, 'paper')} x={850} y={400} />
    </Camera>
  );
};

// ---------- 2. fingerprint: the four words aligned on their shared root (dark "secret" scene) ----------

// The case's options, aligned on the root (each option must contain dossier.root.text).
const fingerRows = () =>
  dossier.hookCase.options.map((option) => {
    const index = option.toLowerCase().indexOf(dossier.root.text.toLowerCase());
    if (index < 0) {
      return {pre: option, root: '', post: ''};
    }
    return {pre: option.slice(0, index), root: option.slice(index, index + dossier.root.text.length), post: option.slice(index + dossier.root.text.length)};
  });

export const FingerprintScene: React.FC<SceneProps> = ({timing, t}) => {
  const rows = cueTime(timing, 'rows');
  const loupe = cueTime(timing, 'loupe');
  const zoom = cueTime(timing, 'zoom');
  const zoomP = easeOut(progress(t, zoom, 0.22));
  const scale = 1 + 0.12 * zoomP;
  const loupeY = 600 + 620 * easeInOut(progress(t, loupe, Math.max(zoom - loupe, 0.3)));
  const column = backOut(progress(t, zoom, 0.25));
  const rowY = (i: number) => 520 + i * 200;

  return (
    <>
      <AbsoluteFill style={{background: INK.ink}} />
      <Halftone cacheKey="finger-edge" w={1080} h={1920} color={INK.overprint} step={22} angle={30} density={edgeField(1080, 1920, 340, 0.9)} />
      <Absolute x={70} y={210}>
        <Kicker color={INK.highlight}>FINGERPRINT · 指纹比对</Kicker>
        <PopText text="同一个指纹" t={t} at={rows} size={118} color={INK.paperLight} style={{marginTop: 14}} />
      </Absolute>
      <Camera t={t} scale={scale} originX={540} originY={rowY(1) + 100}>
        <div
          style={{
            position: 'absolute',
            left: 540 - 135,
            top: rowY(0) - 40,
            width: 270,
            height: 4 * 200,
            background: INK.highlight,
            borderRadius: 24,
            transform: `scaleY(${column})`,
            transformOrigin: '50% 0',
            mixBlendMode: 'screen',
            opacity: 0.22,
          }}
        />
        {fingerRows().map((row, i) => {
          const at = rows + 0.15 + i * 0.14;
          const p = backOut(progress(t, at, 0.32));
          if (t < at) {
            return null;
          }
          return (
            <div
              key={row.pre}
              style={{
                position: 'absolute',
                top: rowY(i),
                left: 0,
                width: 1080,
                height: 160,
                display: 'grid',
                gridTemplateColumns: '1fr 270px 1fr',
                alignItems: 'center',
                fontFamily: FONT.headline,
                fontSize: 128,
                transform: `translateX(${(1 - p) * (i % 2 === 0 ? -200 : 200)}px)`,
              }}
            >
              <div style={{textAlign: 'right', color: INK.paperLight}}>{row.pre}</div>
              <div style={{textAlign: 'center', color: INK.highlight}}>{row.root}</div>
              <div style={{textAlign: 'left', color: INK.paperLight}}>{row.post}</div>
            </div>
          );
        })}
        {t >= loupe ? (
          <svg width={1080} height={1920} style={{position: 'absolute', left: 0, top: 0}}>
            <circle cx={540} cy={loupeY} r={150} fill="none" stroke={INK.paperLight} strokeWidth={14} />
            <line x1={640} y1={loupeY + 110} x2={760} y2={loupeY + 230} stroke={INK.paperLight} strokeWidth={26} strokeLinecap="round" />
          </svg>
        ) : null}
      </Camera>
      <Stamp id="match" text="指纹一致" t={t} at={cueTime(timing, 'match')} color={INK.highlight} size={100} rotate={-7} style={{left: 290, top: 1290}} />
    </>
  );
};

// ---------- 3. the root's mugshot ----------

export const RootRevealScene: React.FC<SceneProps> = ({timing, t}) => {
  const plate = cueTime(timing, 'plate');
  const root = dossier.root;
  return (
    <Camera t={t} scale={beatPulse(t)}>
      <svg width={1080} height={1920} style={{position: 'absolute'}}>
        {Array.from({length: 12}, (_, i) => {
          const y = 300 + i * 90;
          return (
            <g key={i}>
              <line x1={150} x2={1080} y1={y} y2={y} stroke={INK.overprint} strokeWidth={i % 2 === 0 ? 4 : 2} />
              <text x={70} y={y + 10} fontFamily={FONT.mono} fontSize={28} fill={INK.overprint}>
                {200 - i * 10}
              </text>
            </g>
          );
        })}
      </svg>
      <Halftone cacheKey="root-halo" w={1080} h={1200} y={160} color={INK.highlight} step={22} angle={45} density={radialField(540, 560, 520, 1, 0)} />
      <Absolute x={70} y={210}>
        <Kicker>SUSPECT · 嫌疑词根</Kicker>
      </Absolute>
      <Pop t={t} at={plate} style={{position: 'absolute', left: 150, top: 300}}>
        <HalftoneGlyph id="root" text={root.text} size={400} fill={INK.highlight} dots={INK.overprint} width={800} height={470} />
        <svg width={800} height={470} style={{position: 'absolute', overflow: 'visible'}}>
          <text x={0} y={470 * 0.82} fontFamily={FONT.display} fontSize={400} fill="none" stroke={INK.ink} strokeWidth={10}>
            {root.text}
          </text>
        </svg>
      </Pop>
      <Absolute x={90} y={860} w={900}>
        <Pop t={t} at={plate + 0.15}>
          <PrintCard fill={INK.ink} shadow={INK.highlight} style={{padding: '30px 40px', color: INK.paperLight}}>
            <div style={{fontFamily: FONT.mono, fontSize: 30, color: INK.highlight}}>ROOT · {root.origin}</div>
            <div style={{height: 150, marginTop: 10}}>
              <PopText text={`= ${root.en}`} t={t} at={cueTime(timing, 'meaning')} size={120} color={INK.paperLight} shadow={INK.overprint} family={FONT.headline} />
            </div>
            <div style={{height: 120}}>
              <PopText text={root.meaning} t={t} at={cueTime(timing, 'zh')} size={96} color={INK.highlight} shadow={INK.overprint} />
            </div>
          </PrintCard>
        </Pop>
      </Absolute>
      <Stamp id="root-stamp" text="锁定词根" t={t} at={cueTime(timing, 'stamp')} size={92} rotate={8} style={{left: 520, top: 1250}} />
    </Camera>
  );
};

// ---------- 4. an exhibit per word ----------

const exhibitCamera = (index: number, t: number, timing: SceneTiming): Omit<CameraProps, 't' | 'children'> => {
  const p = easeInOut(progress(t, timing.start, timing.end - timing.start));
  switch (index % 5) {
    case 0:
      return {scale: 1 + 0.05 * p};
    case 1:
      return {x: 24 - 48 * p, scale: 1.02};
    case 2:
      return {scale: beatPulse(t, 0.008)};
    case 3:
      return {scale: 1.06 - 0.05 * p, originY: 1300};
    default:
      return {rotate: 1.2 * (1 - p), scale: 1.02};
  }
};

export const ExhibitScene: React.FC<SceneProps> = ({timing, t}) => {
  const word = wordById(timing.scene.wordId);
  if (!word) {
    return null;
  }
  const number = dossier.words.indexOf(word) + 1;
  const numberText = String(number).padStart(2, '0');
  const partsAt = cueTime(timing, 'parts');
  const rootChars = word.parts.find((part) => part.role === 'root')?.text ?? '';
  const numeralFill = number % 2 === 1 ? INK.highlight : INK.overprint;
  const numeralDots = number % 2 === 1 ? INK.overprint : INK.ink;

  return (
    <Camera t={t} {...exhibitCamera(number - 1, t, timing)}>
      <Pop t={t} at={cueTime(timing, 'numeral')} length={0.42} style={{position: 'absolute', left: 560, top: 110}}>
        <HalftoneGlyph id={`num-${word.id}`} text={numberText} size={560} fill={numeralFill} dots={numeralDots} width={700} height={620} />
      </Pop>
      <Absolute x={70} y={215}>
        <div style={{display: 'flex', gap: 14}}>
          <Chip size={30}>EXHIBIT {numberText}</Chip>
          <Chip size={30} ink={word.level === '课标' ? INK.overprint : INK.stamp}>
            {word.level}词汇
          </Chip>
        </div>
      </Absolute>
      <Absolute x={70} y={360} w={940}>
        <div style={{display: 'flex', alignItems: 'flex-start', gap: 16}}>
          {word.parts.map((part, i) => {
            const fill = part.role === 'prefix' ? INK.overprint : part.role === 'root' ? INK.highlight : INK.paperLight;
            const color = part.role === 'prefix' ? INK.paperLight : INK.ink;
            return (
              <Pop key={part.text + i} t={t} at={partsAt + i * 0.13}>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12}}>
                  <div
                    style={{
                      background: fill,
                      color,
                      border: `6px solid ${INK.ink}`,
                      borderRadius: 20,
                      boxShadow: `8px 8px 0 ${INK.ink}`,
                      padding: '4px 26px 12px',
                      fontFamily: FONT.headline,
                      fontSize: 92,
                      lineHeight: 1.1,
                    }}
                  >
                    {part.text}
                  </div>
                  <div style={{fontFamily: FONT.sans, fontSize: 36, color: INK.ink, minHeight: 44}}>{part.gloss ?? ''}</div>
                </div>
              </Pop>
            );
          })}
        </div>
      </Absolute>
      <Pop t={t} at={cueTime(timing, 'literal')} rotate={2.5} style={{position: 'absolute', left: 90, top: 660}}>
        <div
          style={{
            background: INK.paperLight,
            border: `5px solid ${INK.ink}`,
            padding: '16px 34px',
            fontFamily: FONT.hand,
            fontSize: 64,
            color: INK.overprint,
            boxShadow: `8px 8px 0 ${INK.highlight}`,
            position: 'relative',
          }}
        >
          <div style={{position: 'absolute', top: -22, left: '40%', width: 110, height: 36, background: INK.highlight, opacity: 0.85, transform: 'rotate(-4deg)'}} />
          ↓ {word.literal}
        </div>
      </Pop>
      <Absolute x={70} y={850}>
        <PopText text={word.word} t={t} at={cueTime(timing, 'word')} size={150} family={FONT.headline} highlight={{chars: rootChars, color: '#C99100'}} />
        <div style={{fontFamily: FONT.mono, fontSize: 38, color: INK.overprint, marginTop: 6, opacity: t >= cueTime(timing, 'word') + 0.3 ? 1 : 0}}>
          {word.phonetic} {word.partOfSpeech}
        </div>
      </Absolute>
      <Absolute x={70} y={1120}>
        {t >= cueTime(timing, 'meaning') ? (
          <div
            style={{
              position: 'absolute',
              left: -10,
              top: 66,
              height: 44,
              width: 40 + word.meaning.length * 92,
              background: INK.highlight,
              transform: `scaleX(${easeOut(progress(t, cueTime(timing, 'meaning'), 0.25))})`,
              transformOrigin: '0 50%',
              mixBlendMode: 'multiply',
            }}
          />
        ) : null}
        <PopText text={word.meaning} t={t} at={cueTime(timing, 'meaning')} size={96} shadow={null} />
      </Absolute>
      <Pop t={t} at={cueTime(timing, 'collocation')} style={{position: 'absolute', left: 70, top: 1290}}>
        <PrintCard shadow={INK.ink} style={{padding: '16px 28px', display: 'flex', gap: 18, alignItems: 'baseline', borderRadius: 16}}>
          <span style={{fontFamily: FONT.mono, fontSize: 26, color: INK.stamp}}>高考搭配</span>
          <span style={{fontFamily: FONT.headline, fontSize: 46, color: INK.ink}}>{word.collocation.en}</span>
          <span style={{fontFamily: FONT.sans, fontSize: 34, color: INK.overprint}}>{word.collocation.zh}</span>
        </PrintCard>
      </Pop>
      {word.bonus ? (
        <Pop t={t} at={cueTime(timing, 'bonus')} rotate={-4} style={{position: 'absolute', left: 640, top: 980}}>
          <PrintCard fill={INK.highlight} shadow={INK.ink} style={{padding: '12px 24px', borderRadius: 16}}>
            <div style={{fontFamily: FONT.mono, fontSize: 24, color: INK.ink}}>同案犯</div>
            <div style={{fontFamily: FONT.headline, fontSize: 52, color: INK.ink}}>{word.bonus.word}</div>
            <div style={{fontFamily: FONT.sans, fontSize: 30, color: INK.ink}}>{word.bonus.meaning}</div>
          </PrintCard>
        </Pop>
      ) : null}
    </Camera>
  );
};

// ---------- 5. evidence board: pull back to see every exhibit pinned to the root ----------

export const EvidenceBoardScene: React.FC<SceneProps> = ({timing, t}) => {
  const pull = easeInOut(progress(t, timing.start, 1.3));
  const scale = 1.55 - 0.55 * pull;
  const strings = cueTime(timing, 'strings');
  const center = {x: 540, y: 860};
  const spots = [
    {x: 250, y: 470},
    {x: 830, y: 470},
    {x: 170, y: 1010},
    {x: 910, y: 1010},
    {x: 540, y: 1290},
  ];
  const shake = cueTime(timing, 'shake');

  return (
    <Camera t={t} scale={scale} originX={center.x} originY={center.y}>
      <Absolute x={70} y={210}>
        <Kicker>EVIDENCE BOARD · 证据墙</Kicker>
      </Absolute>
      <svg width={1080} height={1920} style={{position: 'absolute'}}>
        {spots.map((spot, i) => {
          const p = easeOut(progress(t, strings + i * 0.06, 0.3));
          return (
            <line
              key={i}
              x1={center.x}
              y1={center.y}
              x2={center.x + (spot.x - center.x) * p}
              y2={center.y + (spot.y - center.y) * p}
              stroke={INK.stamp}
              strokeWidth={7}
            />
          );
        })}
      </svg>
      <div style={{position: 'absolute', left: center.x - 200, top: center.y - 130}}>
        <PrintCard fill={INK.ink} shadow={INK.highlight} style={{width: 400, height: 260, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', boxSizing: 'border-box'}}>
          <div style={{fontFamily: FONT.display, fontSize: 140, color: INK.highlight, lineHeight: 1}}>{dossier.root.text}</div>
          <div style={{fontFamily: FONT.sans, fontSize: 40, color: INK.paperLight}}>
            = {dossier.root.en} {dossier.root.meaning.split('，')[0]}
          </div>
        </PrintCard>
      </div>
      {dossier.words.map((word, i) => {
        const at = cueTime(timing, `pin${i}`);
        const jolt = t > shake ? Math.sin((t - shake) * 40) * 6 * Math.exp(-(t - shake) * 6) : 0;
        return (
          <Pop key={word.id} t={t} at={at} rotate={(i % 2 === 0 ? -4 : 4) + jolt} style={{position: 'absolute', left: spots[i].x - 150, top: spots[i].y - 85}}>
            <PrintCard style={{width: 300, padding: '14px 18px', boxSizing: 'border-box', borderRadius: 16}} shadow={i % 2 === 0 ? INK.overprint : INK.highlight}>
              <div style={{fontFamily: FONT.mono, fontSize: 22, color: INK.overprint}}>证物 0{i + 1}</div>
              <div style={{fontFamily: FONT.headline, fontSize: 46, color: INK.ink}}>{word.word}</div>
              <div style={{fontFamily: FONT.sans, fontSize: 30, color: INK.ink}}>{word.meaning.split('；')[0]}</div>
            </PrintCard>
            <div style={{position: 'absolute', left: 135, top: -14, width: 30, height: 30, borderRadius: 15, background: INK.stamp, border: `5px solid ${INK.ink}`}} />
          </Pop>
        );
      })}
      <BrandPig id="pig-board" t={t} face="happy" pose="cheer" size={200} landAt={shake} x={760} y={1180} />
    </Camera>
  );
};

// ---------- 6. solve: back to the case, cross out, fill, stamp ----------

export const SolveScene: React.FC<SceneProps> = ({timing, t}) => {
  const cloze = dossier.hookCase;
  const arrow = cueTime(timing, 'arrow');
  const fill = cueTime(timing, 'fill');
  const verdict = cueTime(timing, 'verdict');
  const wrong = cloze.options.map((_, i) => i).filter((i) => i !== cloze.answerIndex);
  return (
    <Camera t={t} scale={t < verdict ? pushIn(t, timing, 1.05) : 1.05}>
      <Absolute x={70} y={210}>
        <Kicker>VERDICT · 当庭作答</Kicker>
      </Absolute>
      <Absolute x={60} y={290} w={960}>
        <PrintCard style={{padding: '34px 40px', boxSizing: 'border-box'}}>
          <Stem cloze={cloze} t={t} typeFrom={timing.start - 10} typeLength={0.01} filled={cloze.options[cloze.answerIndex]} fillAt={fill} />
          <div style={{fontFamily: FONT.sans, fontSize: 32, color: INK.overprint, marginTop: 14}}>{cloze.stemZh}</div>
        </PrintCard>
      </Absolute>
      <Pop t={t} at={arrow} rotate={-3} style={{position: 'absolute', left: 520, top: 690}}>
        <div style={{fontFamily: FONT.hand, fontSize: 70, color: INK.stamp}}>↑ {dossier.solveHint}</div>
      </Pop>
      <Absolute x={60} y={830} w={960}>
        <div style={{display: 'flex', flexDirection: 'column', gap: 22}}>
          {cloze.options.map((option, i) => (
            <OptionCard
              key={option}
              letter={OPTION_LETTERS[i]}
              word={option}
              t={t}
              at={timing.start - 1}
              shadow={i === cloze.answerIndex ? INK.highlight : INK.overprint}
              crossedAt={wrong.includes(i) ? cueTime(timing, `cross${wrong.indexOf(i)}`) : undefined}
              chosenAt={i === cloze.answerIndex ? fill : undefined}
              width={620}
            />
          ))}
        </div>
      </Absolute>
      <Stamp id="verdict" text={dossier.verdictStamp} t={t} at={verdict} size={180} rotate={-12} style={{left: 400, top: 1010}} />
      <BrandPig
        id="pig-solve"
        t={t}
        face={t >= verdict ? 'happy' : 'neutral'}
        pose={t >= verdict ? 'cheer' : 'idle'}
        size={210}
        landAt={verdict} x={790} y={820}
      />
    </Camera>
  );
};

// ---------- 7. homework: the next file slides in, its answer stays redacted ----------

export const HomeworkScene: React.FC<SceneProps> = ({timing, t}) => {
  const cloze = dossier.homework;
  const slide = 1 - easeOut(progress(t, timing.start, 0.4));
  const typeFrom = cueTime(timing, 'type-0');
  const redact = cueTime(timing, 'redact');
  return (
    <Camera t={t} scale={beatPulse(t)}>
      <Absolute x={70} y={210}>
        <Kicker>NEXT FILE · 下一份案卷</Kicker>
        <PopText text="交给你了" t={t} at={timing.start + 0.2} size={120} style={{marginTop: 14}} />
      </Absolute>
      <div style={{position: 'absolute', left: 60, top: 500, width: 960, transform: `translateX(${slide * 1100}px) rotate(1.5deg)`}}>
        <PrintCard shadow={INK.stamp} style={{padding: '34px 40px', boxSizing: 'border-box'}}>
          <div style={{display: 'flex', gap: 14, alignItems: 'center', marginBottom: 22}}>
            <Chip size={28} ink={INK.stamp}>
              {cloze.label}
            </Chip>
            <span style={{fontFamily: FONT.mono, fontSize: 24, color: INK.overprint}}>{cloze.sourceNote}</span>
          </div>
          <Stem cloze={cloze} t={t} typeFrom={typeFrom} typeLength={1.3} />
          <div style={{fontFamily: FONT.sans, fontSize: 32, color: INK.overprint, marginTop: 16}}>{cloze.stemZh}</div>
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginTop: 26}}>
            {cloze.options.map((option, i) => (
              <div key={option} style={{fontFamily: FONT.headline, fontSize: 46, color: INK.ink}}>
                <span style={{fontFamily: FONT.display, color: INK.overprint}}>{OPTION_LETTERS[i]}.</span> {option}
              </div>
            ))}
          </div>
          <div style={{display: 'flex', alignItems: 'center', gap: 18, marginTop: 26}}>
            <span style={{fontFamily: FONT.sans, fontSize: 36, color: INK.ink}}>答案：</span>
            <div style={{width: 300, height: 56, background: INK.ink, transform: `scaleX(${easeOut(progress(t, redact, 0.15))})`, transformOrigin: '0 50%'}} />
          </div>
        </PrintCard>
      </div>
      <Pop t={t} at={cueTime(timing, 'sticky')} rotate={4} style={{position: 'absolute', left: 90, top: 1220}}>
        <div style={{background: INK.highlight, border: `5px solid ${INK.ink}`, padding: '18px 30px', fontFamily: FONT.hand, fontSize: 60, color: INK.ink, boxShadow: `8px 8px 0 ${INK.ink}`}}>
          评论区交答案 →
        </div>
      </Pop>
      <Stamp id="pending" text="待破案" t={t} at={cueTime(timing, 'end')} size={96} rotate={-10} style={{left: 430, top: 1010}} />
      <BrandPig id="pig-hw" t={t} face="happy" pose="point" size={210} flip x={830} y={1200} />
    </Camera>
  );
};

export const SCENE_COMPONENTS: Record<string, React.FC<SceneProps>> = {
  'cloze-case': ClozeCaseScene,
  fingerprint: FingerprintScene,
  'root-reveal': RootRevealScene,
  exhibit: ExhibitScene,
  'evidence-board': EvidenceBoardScene,
  solve: SolveScene,
  homework: HomeworkScene,
};
