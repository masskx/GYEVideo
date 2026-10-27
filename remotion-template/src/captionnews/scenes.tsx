import React from 'react';
import {BrandPig} from '../brand/BrandPig';
import {captionNews, NewsGraphic} from '../data/captionNews';
import {backOut, clamp01, easeOut, pop, progress} from '../core/motion';
import {cueTime, LineTiming} from '../core/timeline';
import {CAPTION_NEWS, NewsTiming, phraseTimes} from './schedule';
import {CAPTION_TOP, FONT, GRAPHIC, NEWS} from './theme';
import {EXAM} from '../core/exam';

export type SceneProps = {timing: NewsTiming; t: number};

// ---------- graphics: flat white line icons with a yellow accent, drawn in code ----------

const W = {stroke: NEWS.white, strokeWidth: 12, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, fill: 'none'};

const Graphic: React.FC<{graphic: NewsGraphic; t: number; at: number}> = ({graphic, t, at}) => {
  const p = easeOut(progress(t, at, 0.5));
  const s = backOut(progress(t, at, 0.4));
  const label = (text: string, y = 470) => (
    <text x={500} y={y} textAnchor="middle" fontFamily={FONT.caption} fontSize={96} fill={NEWS.yellow} opacity={p}>
      {text}
    </text>
  );
  let body: React.ReactNode = null;
  switch (graphic.kind) {
    case 'clock': {
      const a0 = -Math.PI / 2 + (8 / 12) * Math.PI * 2;
      const a1 = a0 + (2 / 12) * Math.PI * 2 * p;
      body = (
        <>
          <circle cx={500} cy={210} r={170} {...W} />
          <path d={`M500,210 L${500 + Math.cos(a0) * 150},${210 + Math.sin(a0) * 150} A150,150 0 0,1 ${500 + Math.cos(a1) * 150},${210 + Math.sin(a1) * 150} Z`} fill={NEWS.yellow} opacity={0.85} />
          <line x1={500} y1={210} x2={500} y2={95} {...W} />
          <line x1={500} y1={210} x2={585} y2={250} {...W} />
          <path d="M760,90 a70,70 0 1,0 60,110 a55,55 0 1,1 -60,-110 z" fill={NEWS.yellow} />
          {label(graphic.label)}
        </>
      );
      break;
    }
    case 'people': {
      const n = graphic.of;
      const gap = 820 / n;
      // The share rolls up to its value as the keyword is read.
      const value = Number(graphic.label.replace(/[^0-9.]/g, ''));
      const shown = Number.isFinite(value) ? `${Math.round(value * p)}%` : graphic.label;
      body = (
        <>
          {Array.from({length: n}, (_, i) => {
            const x = 90 + gap * i + gap / 2;
            const lit = i < graphic.highlight;
            return (
              <g key={i} transform={`translate(${x} 0)`} opacity={lit ? 1 : 0.45}>
                <circle cx={0} cy={90} r={48} fill={lit ? NEWS.yellow : 'none'} stroke={lit ? NEWS.yellow : NEWS.white} strokeWidth={10} />
                <path d="M-70,320 Q-70,170 0,170 Q70,170 70,320 Z" fill={lit ? NEWS.yellow : 'none'} stroke={lit ? NEWS.yellow : NEWS.white} strokeWidth={10} />
              </g>
            );
          })}
          {label(shown)}
        </>
      );
      break;
    }
    case 'brain':
      body = (
        <>
          <path d="M380,320 C280,320 260,200 330,170 C320,90 420,60 470,100 C510,50 610,60 620,120 C700,110 740,200 690,250 C720,320 640,350 600,320 C560,360 430,360 380,320 Z" {...W} />
          <path d="M500,100 C480,160 530,200 500,260 M400,190 C450,200 460,240 430,280 M600,170 C560,200 580,240 620,250" {...W} strokeWidth={8} />
          {Array.from({length: 6}, (_, i) => {
            const a = (i / 6) * Math.PI * 2 + t * 0.8;
            const r = 230 + 10 * Math.sin(t * 4 + i);
            return <circle key={i} cx={500 + Math.cos(a) * r} cy={210 + Math.sin(a) * r * 0.6} r={14} fill={NEWS.yellow} opacity={p} />;
          })}
          {label(graphic.label)}
        </>
      );
      break;
    case 'trend': {
      const pts = graphic.direction === 'down' ? [80, 110, 150, 230, 330] : [330, 260, 200, 140, 90];
      const d = pts.map((y, i) => `${i ? 'L' : 'M'}${150 + i * 175},${y}`).join(' ');
      body = (
        <>
          <line x1={120} y1={360} x2={900} y2={360} {...W} strokeWidth={6} opacity={0.5} />
          <path d={d} {...W} stroke={NEWS.yellow} strokeWidth={16} pathLength={1} strokeDasharray={1} strokeDashoffset={1 - p} />
          <circle cx={150 + 4 * 175} cy={pts[4]} r={22} fill={NEWS.red} opacity={p > 0.95 ? 1 : 0} />
          {label(`${graphic.label} ${graphic.direction === 'down' ? '↓' : '↑'}`)}
        </>
      );
      break;
    }
    case 'phone':
    default:
      body = (
        <>
          <rect x={410} y={40} width={180} height={320} rx={30} {...W} />
          <rect x={440} y={80} width={120} height={220} rx={10} fill={NEWS.yellow} opacity={0.25 + 0.6 * (1 - p)} />
          <path d={`M640,120 l${110 * p},0`} {...W} stroke={NEWS.yellow} strokeWidth={14} />
          <path d={`M720,90 l40,30 l-40,30`} {...W} stroke={NEWS.yellow} strokeWidth={14} opacity={p} />
          <path d="M780,250 a55,55 0 1,0 45,90 a42,42 0 1,1 -45,-90 z" fill={NEWS.white} opacity={p} />
          {label(graphic.label)}
        </>
      );
  }
  return (
    <svg viewBox="0 0 1000 520" width={1000} height={520} style={{position: 'absolute', left: 40, top: GRAPHIC.top, transform: `scale(${0.85 + 0.15 * s})`, opacity: clamp01((t - at) / 0.15)}}>
      {body}
    </svg>
  );
};

// ---------- the caption: phrase by phrase, keyword on the yellow block, Chinese under ----------

// Unrevealed phrases keep their space (visibility: hidden), so the Chinese line and the source tag never jump.
const Caption: React.FC<{line: LineTiming; t: number; keyword?: string; zh?: string; size?: number; children?: React.ReactNode}> = ({line, t, keyword, zh, size = 84, children}) => {
  const phrases = phraseTimes(line);
  const firstAt = phrases[0]?.at ?? line.start;
  const offsets = phrases.map((_, i) => phrases.slice(0, i).reduce((sum, p) => sum + p.text.length + 1, 0));
  const keyStart = keyword ? phrases.map((p) => p.text).join(' ').indexOf(keyword) : -1;
  const keyEnd = keyStart + (keyword?.length ?? 0);
  return (
    <div style={{position: 'absolute', left: 70, right: 70, top: CAPTION_TOP}}>
      <div style={{fontFamily: FONT.caption, fontSize: size, lineHeight: 1.12, color: NEWS.white, letterSpacing: -1}}>
        {phrases.map((phrase, i) => {
          const local = t - phrase.at;
          const slam = local >= 0 && local < 0.12 ? 1.18 - 0.18 * (local / 0.12) : 1;
          // The keyword may span two phrases ("about 1 | in 4"): highlight its overlap with each phrase.
          const offset = offsets[i];
          const from = Math.max(0, keyStart - offset);
          const to = Math.min(phrase.text.length, keyEnd - offset);
          const continues = keyStart >= 0 && from < to && keyEnd > offset + phrase.text.length; // the space joins the block
          const block = {background: NEWS.yellow, color: NEWS.ink, padding: '0 10px', borderRadius: 6, boxDecorationBreak: 'clone'} as const;
          return (
            <span key={i} style={{display: 'inline', transform: `scale(${slam})`, visibility: local < 0 ? 'hidden' : 'visible'}}>
              {keyStart >= 0 && from < to ? (
                <>
                  {phrase.text.slice(0, from)}
                  <span style={{...block, paddingRight: continues ? 0 : 10, paddingLeft: from === 0 && keyStart < offset ? 0 : 10}}>
                    {phrase.text.slice(from, to)}
                    {continues ? ' ' : ''}
                  </span>
                  {phrase.text.slice(to)}
                </>
              ) : (
                phrase.text
              )}
              {continues ? '' : ' '}
            </span>
          );
        })}
      </div>
      {zh ? <div style={{fontFamily: FONT.zh, fontSize: 42, color: NEWS.zh, marginTop: 26, opacity: clamp01((t - firstAt - 0.3) / 0.2)}}>{zh}</div> : null}
      {children}
    </div>
  );
};

const SourceTag: React.FC<{t: number; at: number; label: string}> = ({t, at, label}) => {
  const slide = 1 - easeOut(progress(t, at, 0.3));
  if (t < at) return null;
  return (
    <div style={{marginTop: 34, transform: `translateX(${-slide * 700}px)`, display: 'flex'}}>
      <div style={{background: NEWS.yellow, color: NEWS.ink, fontFamily: FONT.mono, fontSize: 26, padding: '6px 14px'}}>SOURCE</div>
      <div style={{background: 'rgba(255,255,255,0.12)', color: NEWS.white, fontFamily: FONT.mono, fontSize: 26, padding: '6px 16px'}}>{label}</div>
    </div>
  );
};

// ---------- scenes ----------

export const HeadlineScene: React.FC<SceneProps> = ({timing, t}) => {
  const kicker = cueTime(timing, 'kicker');
  const title = cueTime(timing, 'title');
  const words = captionNews.headline.en.split(' ');
  return (
    <>
      <div style={{position: 'absolute', left: 70, top: 300, display: 'flex', gap: 12, transform: `translateX(${-(1 - easeOut(progress(t, kicker, 0.25))) * 600}px)`}}>
        <div style={{background: NEWS.yellow, color: NEWS.ink, fontFamily: FONT.caption, fontSize: 44, padding: '6px 18px'}}>{captionNews.kicker.en}</div>
        <div style={{background: NEWS.white, color: NEWS.ink, fontFamily: FONT.zhBold, fontSize: 40, padding: '6px 18px'}}>{captionNews.kicker.zh}</div>
      </div>
      <div style={{position: 'absolute', left: 70, right: 70, top: 440, fontFamily: FONT.caption, fontSize: 150, lineHeight: 1.0, color: NEWS.white, letterSpacing: -3}}>
        {words.map((word, i) => {
          const local = t - (title + i * 0.12);
          if (local < 0) return null;
          const slam = local < 0.12 ? 1.25 - 0.25 * (local / 0.12) : 1;
          return (
            <span key={i} style={{display: 'inline-block', transform: `scale(${slam})`, marginRight: 30}}>
              {word}
            </span>
          );
        })}
      </div>
      <div style={{position: 'absolute', left: 70, top: 1090, fontFamily: FONT.zhBold, fontSize: 64, color: NEWS.yellow, opacity: clamp01((t - cueTime(timing, 'zh')) / 0.2)}}>{captionNews.headline.zh}</div>
      <div style={{position: 'absolute', left: 70, top: 1200, fontFamily: FONT.mono, fontSize: 28, color: NEWS.zh, opacity: clamp01((t - cueTime(timing, 'zh')) / 0.2)}}>
        READING · {EXAM.readingSeries} · No.{captionNews.newsNo}
      </div>
      <BrandPig id="pig-headline" t={t} x={800} y={1230} size={190} face="happy" pose="point" flip />
    </>
  );
};

export const ChunkScene: React.FC<SceneProps> = ({timing, t}) => {
  const line = timing.lines[0];
  const chunk = captionNews.chunks[line.id];
  if (!chunk) return null;
  const source = captionNews.sources.find((s) => s.id === chunk.sourceId);
  return (
    <>
      <Graphic graphic={chunk.graphic} t={t} at={cueTime(timing, 'graphic')} />
      <Caption line={line} t={t} keyword={chunk.keyword} zh={chunk.zh}>
        {source ? <SourceTag t={t} at={cueTime(timing, 'source')} label={source.label} /> : null}
      </Caption>
    </>
  );
};

export const QuestionScene: React.FC<SceneProps> = ({timing, t}) => {
  const q = captionNews.question;
  const answer = cueTime(timing, 'answer');
  const evidence = cueTime(timing, 'evidence');
  const shown = t >= answer;
  const ticks = timing.cues.filter((cue) => cue.name.startsWith('tick'));
  const timer = ticks.length && t >= ticks[0].t && t < answer ? 1 - clamp01((t - ticks[0].t) / Math.max(answer - ticks[0].t, 0.1)) : null;
  const evidenceLine = CAPTION_NEWS.lines.find((line) => line.id === q.evidenceLineId);
  const evidenceChunk = captionNews.chunks[q.evidenceLineId];
  return (
    <>
      <div style={{position: 'absolute', left: 70, top: 220, display: 'flex', gap: 12}}>
        <div style={{background: NEWS.yellow, color: NEWS.ink, fontFamily: FONT.caption, fontSize: 36, padding: '4px 16px'}}>QUESTION</div>
        <div style={{background: NEWS.white, color: NEWS.ink, fontFamily: FONT.zhBold, fontSize: 34, padding: '4px 16px'}}>阅读理解 · 主旨题</div>
      </div>
      <div style={{position: 'absolute', left: 70, right: 70, top: 320, fontFamily: FONT.caption, fontSize: 70, color: NEWS.white, lineHeight: 1.1}}>{q.stem}</div>
      <div style={{position: 'absolute', left: 70, top: 500, fontFamily: FONT.zh, fontSize: 38, color: NEWS.zh}}>{q.stemZh}</div>
      <div style={{position: 'absolute', left: 70, right: 70, top: 590, display: 'flex', flexDirection: 'column', gap: 18}}>
        {q.options.map((option, i) => {
          const p = pop(t, cueTime(timing, `opt${i}`), 0.28);
          if (!p.visible) return <div key={option} style={{height: 96}} />;
          const correct = shown && i === q.answerIndex;
          return (
            <div
              key={option}
              style={{
                transform: `translateX(${(1 - p.scale) * -200}px)`,
                background: correct ? NEWS.yellow : 'rgba(255,255,255,0.08)',
                borderLeft: `10px solid ${correct ? NEWS.ink : NEWS.yellow}`,
                padding: '18px 24px',
                display: 'flex',
                gap: 22,
                alignItems: 'center',
                opacity: shown && !correct ? 0.4 : 1,
              }}
            >
              <div style={{fontFamily: FONT.caption, fontSize: 48, color: correct ? NEWS.ink : NEWS.yellow, width: 44}}>{String.fromCharCode(65 + i)}</div>
              <div style={{fontFamily: FONT.body, fontSize: 40, color: correct ? NEWS.ink : NEWS.white}}>{option}</div>
            </div>
          );
        })}
      </div>
      {timer !== null ? (
        <div style={{position: 'absolute', left: 70, right: 70, top: 1100, height: 18, background: 'rgba(255,255,255,0.15)'}}>
          <div style={{height: '100%', width: `${timer * 100}%`, background: NEWS.yellow}} />
        </div>
      ) : null}
      {t >= evidence && evidenceLine ? (
        <div style={{position: 'absolute', left: 70, right: 260, top: 1120, borderLeft: `8px solid ${NEWS.yellow}`, paddingLeft: 22, transform: `translateY(${(1 - easeOut(progress(t, evidence, 0.3))) * 40}px)`}}>
          <div style={{fontFamily: FONT.zhBold, fontSize: 30, color: NEWS.yellow}}>原文定位</div>
          <div style={{fontFamily: FONT.body, fontSize: 38, color: NEWS.white, lineHeight: 1.3}}>{evidenceLine.subtitle}</div>
          {evidenceChunk ? <div style={{fontFamily: FONT.zh, fontSize: 30, color: NEWS.zh, marginTop: 6}}>{evidenceChunk.zh}</div> : null}
        </div>
      ) : null}
      <BrandPig id="pig-question" t={t} x={860} y={1250} size={170} face={shown ? 'happy' : 'squint'} pose={shown ? 'cheer' : 'inspect'} flip />
    </>
  );
};

export const RecapScene: React.FC<SceneProps> = ({timing, t}) => {
  const sign = cueTime(timing, 'sign');
  const signLine = timing.lines[1];
  return (
    <>
      <div style={{position: 'absolute', left: 70, top: 220, display: 'flex', gap: 12}}>
        <div style={{background: NEWS.yellow, color: NEWS.ink, fontFamily: FONT.caption, fontSize: 36, padding: '4px 16px'}}>KEY WORDS</div>
        <div style={{background: NEWS.white, color: NEWS.ink, fontFamily: FONT.zhBold, fontSize: 34, padding: '4px 16px'}}>本篇{EXAM.word}</div>
      </div>
      <div style={{position: 'absolute', left: 70, right: 70, top: 340, display: 'flex', flexDirection: 'column', gap: 10}}>
        {captionNews.vocab.map((word, i) => {
          const at = cueTime(timing, `w${i}`);
          if (t < at) return <div key={word.word} style={{height: 140}} />;
          const slide = 1 - easeOut(progress(t, at, 0.25));
          return (
            <div key={word.word} style={{height: 140, display: 'flex', alignItems: 'baseline', gap: 26, transform: `translateX(${-slide * 300}px)`, borderBottom: '2px solid rgba(255,255,255,0.15)'}}>
              <div style={{fontFamily: FONT.caption, fontSize: 84, color: NEWS.white, width: 470}}>{word.word}</div>
              <div style={{fontFamily: FONT.mono, fontSize: 30, color: NEWS.yellow, width: 90}}>{word.pos}</div>
              <div style={{fontFamily: FONT.zhBold, fontSize: 46, color: NEWS.zh}}>{word.meaning}</div>
            </div>
          );
        })}
      </div>
      {signLine && t >= sign ? (
        <div style={{position: 'absolute', left: 70, right: 300, top: 1150, transform: `translateX(${-(1 - easeOut(progress(t, sign, 0.3))) * 600}px)`}}>
          <div style={{fontFamily: FONT.caption, fontSize: 54, color: NEWS.white, lineHeight: 1.15}}>{signLine.subtitle}</div>
          <div style={{fontFamily: FONT.zhBold, fontSize: 40, color: NEWS.yellow, marginTop: 12}}>评论区告诉我们 →</div>
        </div>
      ) : null}
      <BrandPig id="pig-recap" t={t} x={830} y={1230} size={190} face="happy" pose="cheer" flip />
    </>
  );
};

export const SCENE_COMPONENTS: Record<string, React.FC<SceneProps>> = {
  headline: HeadlineScene,
  chunk: ChunkScene,
  question: QuestionScene,
  recap: RecapScene,
};
