import React from 'react';
import {BrandPig, PigFace, PigPose} from '../brand/BrandPig';
import {gameShow} from '../data/gameShow';
import {easeIn, easeOut, hop, pop, progress, squash} from '../core/motion';
import {cueTime} from '../core/timeline';
import {Banner, Burst, Confetti, Lamps, Telop, Tile} from './kit';
import {GAME_SHOW, GameShowTiming, wordById} from './schedule';
import {CREAM, FLOOR_Y, FONT, HUES, INK, PAPER, ROOT_YELLOW} from './theme';

export type SceneProps = {timing: GameShowTiming; t: number};

const PIG_SIZE = 230;
const PIG_H = PIG_SIZE * 1.27;

// The host: the brand pig standing on the floor line, hopping on the beat.
const Host: React.FC<{id: string; t: number; x: number; face?: PigFace; pose?: PigPose; landAt?: number; flip?: boolean; fast?: boolean; dropAt?: number}> = ({
  id,
  t,
  x,
  face = 'happy',
  pose = 'idle',
  landAt,
  flip,
  fast,
  dropAt,
}) => {
  const beat = GAME_SHOW.beat / (fast ? 2 : 1);
  let lift = hop(t, beat, fast ? 14 : 20);
  let land = landAt;
  if (dropAt !== undefined) {
    if (t < dropAt) {
      return null;
    }
    const fall = 0.45;
    if (t < dropAt + fall) {
      lift = -(1 - easeIn((t - dropAt) / fall)) * 1500;
    } else {
      land = dropAt + fall;
      lift = t < dropAt + fall + GAME_SHOW.beat ? 0 : lift;
    }
  }
  return <BrandPig id={id} t={t} x={x} y={FLOOR_Y - PIG_H + 10} size={PIG_SIZE} face={face} pose={pose} lift={lift} landAt={land} flip={flip} />;
};

const centered = (top: number, children: React.ReactNode) => (
  <div style={{position: 'absolute', left: 0, right: 0, top, display: 'flex', justifyContent: 'center'}}>{children}</div>
);

// ---------- 1. title ----------

export const TitleScene: React.FC<SceneProps> = ({timing, t}) => {
  const title = cueTime(timing, 'title');
  return (
    <>
      {centered(330, <Telop text={gameShow.showTitle} size={210} t={t} at={title} fill={ROOT_YELLOW} perChar />)}
      {centered(600, <Telop text="ROOT RUSH" size={96} t={t} at={title + 0.4} />)}
      {centered(
        760,
        <Tile fill={CREAM} radius={18} shadow={10} style={{padding: '8px 26px', opacity: t > title + 0.6 ? 1 : 0}}>
          <div style={{fontFamily: FONT.zh, fontSize: 40, color: INK}}>第 {gameShow.episodeNo} 期 · 高考词汇 · 五关</div>
        </Tile>,
      )}
      <div style={{position: 'absolute', left: 0, right: 0, top: 900, display: 'flex', justifyContent: 'center'}}>
        <div style={{position: 'relative', width: 5 * 60 + 4 * 16, height: 60}}>
          <Lamps t={t} litUntil={gameShow.words.filter((_, i) => t >= cueTime(timing, `lamp${i}`)).length} x={0} y={0} size={60} />
        </div>
      </div>
      <Host id="pig-title" t={t} x={425} dropAt={cueTime(timing, 'pig')} face="happy" pose="cheer" />
    </>
  );
};

// ---------- 2. the root: today's pass code ----------

export const RootCardScene: React.FC<SceneProps> = ({timing, t}) => {
  const tile = cueTime(timing, 'tile');
  const local = t - tile;
  const slam = local < 0 ? 0 : local < 0.09 ? 2.4 - 1.4 * (local / 0.09) ** 2 : 1 + 0.06 * Math.exp(-(local - 0.09) * 14) * Math.cos((local - 0.09) * 40);
  return (
    <>
      <Banner t={t} at={cueTime(timing, 'banner')} text="通关密码" x={70} y={300} />
      {local >= 0
        ? centered(
            480,
            <div style={{transform: `scale(${slam}) rotate(-3deg)`}}>
              <Tile fill={ROOT_YELLOW} radius={40} shadow={18} style={{padding: '10px 70px 30px'}}>
                <div style={{fontFamily: FONT.telop, fontSize: 250, color: INK, lineHeight: 1.1}}>{gameShow.root.text}</div>
              </Tile>
            </div>,
          )
        : null}
      {centered(880, <Telop text={`= ${gameShow.root.en}`} size={120} t={t} at={tile + 0.3} />)}
      {centered(1050, <Telop text={gameShow.root.meaning} size={130} t={t} at={cueTime(timing, 'meaning')} fill={ROOT_YELLOW} family={FONT.zh} />)}
      <Host id="pig-root" t={t} x={780} face="happy" pose="point" landAt={tile} flip />
    </>
  );
};

// ---------- 3. a round per word ----------

export const RoundScene: React.FC<SceneProps> = ({timing, t}) => {
  const word = wordById(timing.scene.wordId);
  if (!word) {
    return null;
  }
  const index = gameShow.words.indexOf(word);
  const card = cueTime(timing, 'card');
  const prefixAt = cueTime(timing, 'prefix');
  const rootAt = cueTime(timing, 'root');
  const judge = cueTime(timing, 'judge');
  const hue = HUES[timing.scene.set.hue];
  const slide = 1 - easeOut(progress(t, card, 0.35));
  const prefixDrop = (1 - easeIn(Math.min(1, Math.max(0, t - prefixAt) / 0.25))) * -900;
  const prefixSq = squash(t, prefixAt + 0.25, 0.2);
  const rootLocal = t - rootAt;
  const rootSlam = rootLocal < 0 ? 0 : rootLocal < 0.09 ? 2.4 - 1.4 * (rootLocal / 0.09) ** 2 : 1 + 0.06 * Math.exp(-(rootLocal - 0.09) * 14) * Math.cos((rootLocal - 0.09) * 40);
  const won = t >= judge;
  const rootIndex = word.word.indexOf(word.root);
  const wordParts = [
    {text: word.word.slice(0, rootIndex), fill: PAPER},
    {text: word.word.slice(rootIndex, rootIndex + word.root.length), fill: ROOT_YELLOW},
    {text: word.word.slice(rootIndex + word.root.length), fill: PAPER},
  ].filter((part) => part.text);

  return (
    <>
      <div style={{position: 'absolute', left: 70, top: 280, transform: `translateX(${slide * -1000}px) rotate(-3deg)`}}>
        <Tile fill={PAPER} radius={22} shadow={12} style={{padding: '8px 30px', display: 'flex', alignItems: 'baseline', gap: 22}}>
          <div style={{fontFamily: FONT.telop, fontSize: 70, color: INK}}>ROUND {index + 1}</div>
          <div style={{fontFamily: FONT.mono, fontSize: 30, color: hue.floor}}>
            {index + 1}/{gameShow.words.length}
          </div>
        </Tile>
      </div>
      <div style={{position: 'absolute', left: 0, right: 0, top: 500, display: 'flex', justifyContent: 'center', alignItems: 'flex-start', gap: 26}}>
        {t >= prefixAt ? (
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', transform: `translateY(${prefixDrop}px) scale(${prefixSq.sx}, ${prefixSq.sy})`, transformOrigin: '50% 100%'}}>
            <Tile fill={PAPER} style={{padding: '0 34px 14px'}}>
              <div style={{fontFamily: FONT.telop, fontSize: 130, color: INK, lineHeight: 1.15}}>{word.prefix.text}</div>
            </Tile>
            <div style={{marginTop: 18}}>
              <Telop text={word.prefix.gloss} size={50} t={t} at={prefixAt + 0.2} family={FONT.zh} />
            </div>
          </div>
        ) : (
          <div style={{width: 10}} />
        )}
        {t >= prefixAt ? <div style={{fontFamily: FONT.telop, fontSize: 110, color: PAPER, WebkitTextStroke: `14px ${INK}`, paintOrder: 'stroke fill', marginTop: 20}}>+</div> : null}
        {rootLocal >= 0 ? (
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', transform: `scale(${rootSlam})`}}>
            <Tile fill={ROOT_YELLOW} style={{padding: '0 34px 14px'}}>
              <div style={{fontFamily: FONT.telop, fontSize: 130, color: INK, lineHeight: 1.15}}>{word.root}</div>
            </Tile>
            <div style={{marginTop: 18}}>
              <Telop text={gameShow.root.meaning.split('，')[0]} size={50} t={t} at={rootAt + 0.2} family={FONT.zh} />
            </div>
          </div>
        ) : null}
      </div>
      {centered(
        830,
        <Telop text={`↓ ${word.literal}`} size={60} t={t} at={cueTime(timing, 'literal')} family={FONT.hand} fill={CREAM} />,
      )}
      {centered(920, <Telop text={word.word} size={160} t={t} at={cueTime(timing, 'merge')} parts={wordParts} />)}
      {centered(1110, <Telop text={word.meaning} size={120} t={t} at={cueTime(timing, 'meaning')} fill={ROOT_YELLOW} family={FONT.zh} />)}
      {pop(t, cueTime(timing, 'collocation')).visible ? (
        <div style={{position: 'absolute', left: 70, top: 1270}}>
          <Tile fill={CREAM} radius={16} shadow={8} style={{padding: '8px 22px', display: 'flex', gap: 16, alignItems: 'baseline'}}>
            <span style={{fontFamily: FONT.mono, fontSize: 24, color: hue.floor}}>高考搭配</span>
            <span style={{fontFamily: FONT.telop, fontSize: 40, color: INK}}>{word.collocation.en}</span>
            <span style={{fontFamily: FONT.zh, fontSize: 32, color: INK}}>{word.collocation.zh}</span>
          </Tile>
        </div>
      ) : null}
      {won ? (
        <>
          <Burst t={t} at={judge} x={560} y={330} color={ROOT_YELLOW} size={340} />
          {centered(250, <Telop text={timing.scene.judgement ?? 'PERFECT!'} size={140} t={t} at={judge} fill="#FF6B9A" rotate={-8} />)}
        </>
      ) : null}
      <Host id={`pig-${word.id}`} t={t} x={810} face={won ? 'happy' : 'neutral'} pose={won ? 'cheer' : 'idle'} landAt={won ? judge : prefixAt + 0.25} flip />
    </>
  );
};

// ---------- 4. lightning round: the same pattern, twice as fast ----------

export const LightningScene: React.FC<SceneProps> = ({timing, t}) => {
  const go = cueTime(timing, 'go');
  const times = gameShow.words.map((_, i) => ({w: cueTime(timing, `w${i}`), m: cueTime(timing, `m${i}`)}));
  let current = -1;
  times.forEach((time, i) => {
    if (t >= time.w) current = i;
  });
  const word = current >= 0 ? gameShow.words[current] : null;
  const end = timing.lines[0].end;
  const timer = 1 - progress(t, go, Math.max(end - go, 0.5));
  return (
    <>
      <Banner t={t} at={go} text="极速挑战" x={70} y={300} fill={PAPER} size={60} />
      <div style={{position: 'absolute', left: 70, right: 70, top: 440, height: 40}}>
        <Tile fill={PAPER} radius={20} shadow={8} style={{height: 40, padding: 0, overflow: 'hidden'}}>
          <div style={{height: '100%', width: `${timer * 100}%`, background: ROOT_YELLOW, borderRight: timer > 0.01 ? `6px solid ${INK}` : undefined}} />
        </Tile>
      </div>
      {word ? (
        <>
          {centered(620, <Telop key={`w${current}`} text={word.word} size={190} t={t} at={times[current].w} fill={ROOT_YELLOW} />)}
          {centered(900, <Telop key={`m${current}`} text={word.meaning.split('；')[0]} size={150} t={t} at={times[current].m} family={FONT.zh} />)}
        </>
      ) : null}
      <div style={{position: 'absolute', left: 70, width: 700, top: 1140, display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start', gap: 14}}>
        {gameShow.words.map((w, i) => (
          <Tile key={w.id} fill={i <= current ? ROOT_YELLOW : 'rgba(255,255,255,0.4)'} radius={14} shadow={6} style={{padding: '4px 14px'}}>
            <div style={{fontFamily: FONT.telop, fontSize: 32, color: INK}}>{w.word}</div>
          </Tile>
        ))}
      </div>
      <Host id="pig-lightning" t={t} x={810} face="surprised" pose="cheer" fast flip />
    </>
  );
};

// ---------- 5. report card ----------

export const ReportScene: React.FC<SceneProps> = ({timing, t}) => {
  const card = cueTime(timing, 'card');
  const grade = cueTime(timing, 'grade');
  const p = pop(t, card, 0.35);
  const local = t - grade;
  const slam = local < 0 ? 0 : local < 0.09 ? 2.6 - 1.6 * (local / 0.09) ** 2 : 1 + 0.07 * Math.exp(-(local - 0.09) * 12) * Math.cos((local - 0.09) * 40);
  return (
    <>
      {p.visible ? (
        <div style={{position: 'absolute', left: 80, top: 300, width: 920, transform: `translateY(${p.y}px) scale(${p.scale}) rotate(-2deg)`}}>
          <Tile fill={CREAM} radius={26} shadow={16} style={{padding: '30px 44px'}}>
            <div style={{fontFamily: FONT.telop, fontSize: 64, color: INK}}>REPORT CARD</div>
            <div style={{fontFamily: FONT.zh, fontSize: 36, color: INK, marginBottom: 20}}>
              成绩单 · {gameShow.root.text} = {gameShow.root.meaning}
            </div>
            {gameShow.words.map((word, i) => {
              const at = cueTime(timing, `row${i}`);
              if (t < at) {
                return <div key={word.id} style={{height: 92}} />;
              }
              return (
                <div key={word.id} style={{display: 'flex', alignItems: 'center', gap: 22, height: 92, borderTop: `4px dashed ${INK}`}}>
                  <div style={{fontFamily: FONT.telop, fontSize: 50, color: '#1FAE70'}}>✓</div>
                  <div style={{fontFamily: FONT.telop, fontSize: 56, color: INK, width: 380}}>{word.word}</div>
                  <div style={{fontFamily: FONT.zh, fontSize: 46, color: INK}}>{word.meaning.split('；')[0]}</div>
                </div>
              );
            })}
          </Tile>
        </div>
      ) : null}
      {local >= 0 ? (
        <div style={{position: 'absolute', left: 640, top: 980, transform: `scale(${slam}) rotate(12deg)`}}>
          <div
            style={{
              width: 280,
              height: 280,
              borderRadius: 140,
              border: `16px solid #FF4D4D`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(255,255,255,0.85)',
              boxShadow: `10px 10px 0 ${INK}`,
            }}
          >
            <div style={{fontFamily: FONT.telop, fontSize: 210, color: '#FF4D4D', lineHeight: 1}}>{gameShow.grade}</div>
          </div>
        </div>
      ) : null}
      <Confetti t={t} at={grade} />
      <Host id="pig-report" t={t} x={120} face={local >= 0 ? 'happy' : 'neutral'} pose={local >= 0 ? 'cheer' : 'idle'} landAt={grade} />
    </>
  );
};

// ---------- 6. bonus question for the comments ----------

const BUZZER_COLORS = ['#FF4D4D', '#4361EE', '#3DDC97', ROOT_YELLOW];

export const BonusScene: React.FC<SceneProps> = ({timing, t}) => {
  const board = cueTime(timing, 'board');
  const q = gameShow.bonus;
  const p = pop(t, board, 0.35);
  return (
    <>
      <Banner t={t} at={board} text="加分题 BONUS" x={70} y={290} fill={ROOT_YELLOW} />
      {p.visible ? (
        <div style={{position: 'absolute', left: 70, top: 420, width: 940, transform: `translateY(${p.y}px) scale(${p.scale})`}}>
          <Tile fill={CREAM} radius={26} shadow={14} style={{padding: '28px 36px'}}>
            <div style={{fontFamily: FONT.telop, fontSize: 50, color: INK, lineHeight: 1.35}}>
              {q.stem.split('____')[0]}
              <span style={{display: 'inline-block', minWidth: 170, background: INK, color: ROOT_YELLOW, borderRadius: 12, textAlign: 'center', margin: '0 8px'}}>?</span>
              {q.stem.split('____')[1]}
            </div>
            <div style={{fontFamily: FONT.zh, fontSize: 32, color: INK, marginTop: 12, opacity: 0.8}}>{q.stemZh}</div>
            <div style={{fontFamily: FONT.mono, fontSize: 22, color: '#5A3DD6', marginTop: 10}}>{q.sourceNote}</div>
          </Tile>
        </div>
      ) : null}
      <div style={{position: 'absolute', left: 70, top: 880, width: 720, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22}}>
        {q.options.map((option, i) => {
          const op = pop(t, cueTime(timing, `opt${i}`), 0.3);
          if (!op.visible) {
            return <div key={option} style={{height: 150}} />;
          }
          return (
            <div key={option} style={{transform: `translateY(${op.y}px) scale(${op.scale})`}}>
              <Tile fill={PAPER} radius={80} shadow={10} style={{height: 140, display: 'flex', alignItems: 'center', gap: 20, padding: '0 22px', boxSizing: 'border-box'}}>
                <div
                  style={{
                    width: 84,
                    height: 84,
                    borderRadius: 42,
                    background: BUZZER_COLORS[i],
                    border: `6px solid ${INK}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: FONT.telop,
                    fontSize: 56,
                    color: INK,
                    flexShrink: 0,
                  }}
                >
                  {String.fromCharCode(65 + i)}
                </div>
                <div style={{fontFamily: FONT.telop, fontSize: option.length > 7 ? 38 : 46, color: INK}}>{option}</div>
              </Tile>
            </div>
          );
        })}
      </div>
      <Banner t={t} at={cueTime(timing, 'sticky')} text="评论区抢答 →" x={90} y={1250} fill={PAPER} rotate={3} size={56} />
      <Host id="pig-bonus" t={t} x={810} face="happy" pose="point" flip />
    </>
  );
};

export const SCENE_COMPONENTS: Record<string, React.FC<SceneProps>> = {
  title: TitleScene,
  'root-card': RootCardScene,
  round: RoundScene,
  lightning: LightningScene,
  report: ReportScene,
  bonus: BonusScene,
};
