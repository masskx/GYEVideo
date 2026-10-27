import React from 'react';
import {BrandPig} from '../brand/BrandPig';
import {BRAND} from '../brand/brand';
import {Illustration, pictureBook} from '../data/pictureBook';
import {backOut, clamp01, pop, progress} from '../core/motion';
import {cueTime, LineTiming, wordTimes} from '../core/timeline';
import {GROUND, Picture} from './crayon';
import {PICTURE_BOOK, PictureBookTiming, targetsIn} from './schedule';
import {CRAYON, FONT, PAGE, TEXT_TOP} from './theme';

export type SceneProps = {timing: PictureBookTiming; t: number};

const PIG_SIZE = 260;

// The illustrated page: the drawing plus the brand pig standing on the setting's ground line.
const PicturePage: React.FC<{id: string; t: number; illustration: Illustration; landAt?: number}> = ({id, t, illustration, landAt}) => {
  const ground = GROUND[illustration.setting];
  const pigH = PIG_SIZE * 1.27;
  return (
    <div style={{position: 'absolute', left: PAGE.x, top: PAGE.y, width: PAGE.w, height: PAGE.h, borderRadius: 18, overflow: 'hidden', border: `7px solid ${CRAYON.line}`}}>
      <Picture id={id} t={t} illustration={illustration} />
      <BrandPig
        id={`pig-${id}`}
        t={t}
        x={illustration.pig.x * PAGE.w - PIG_SIZE / 2}
        y={ground - pigH + 14}
        size={PIG_SIZE}
        face={illustration.pig.face}
        pose={illustration.pig.pose}
        flip={illustration.pig.flip}
        landAt={landAt}
      />
    </div>
  );
};

// One printed sentence: written left→right, the word being read underlined, target words in the
// brand yellow with a gloss bubble that pops as they are read; the Chinese line underneath.
const Sentence: React.FC<{line: LineTiming; t: number; dim: boolean; size?: number}> = ({line, t, dim, size = 52}) => {
  const written = clamp01((t - (line.start - 0.25)) / 0.35);
  if (written <= 0) {
    return null;
  }
  const times = wordTimes(line);
  const targets = targetsIn(line);
  const tokens = line.subtitle.split(/(\s+)/);
  let wordIndex = -1;
  const zh = pictureBook.translations[line.id];
  return (
    <div style={{opacity: dim ? 0.5 : 1, marginBottom: 26}}>
      <div style={{clipPath: `inset(-60% ${(1 - written) * 100}% -10% 0)`, fontFamily: FONT.story, fontSize: size, lineHeight: 1.75, color: CRAYON.line}}>
        {tokens.map((token, i) => {
          if (/^\s+$/.test(token)) {
            return token;
          }
          if (/[A-Za-z]/.test(token)) {
            wordIndex += 1;
          }
          const time = times[wordIndex];
          const hit = targets.find((h) => h.index === wordIndex);
          const reading = !dim && time && t >= time.start && t < time.end + 0.05;
          const spoken = hit && t >= hit.start;
          return (
            <span key={i} style={{position: 'relative', display: 'inline-block', whiteSpace: 'nowrap'}}>
              <span
                style={{
                  background: hit ? `linear-gradient(transparent 55%, ${CRAYON.lemon} 55%, ${CRAYON.lemon} 92%, transparent 92%)` : undefined,
                  borderBottom: reading ? `6px solid ${CRAYON.coral}` : '6px solid transparent',
                  color: hit && spoken ? CRAYON.teal : undefined,
                }}
              >
                {token}
              </span>
            </span>
          );
        })}
      </div>
      {zh ? <div style={{fontFamily: FONT.zh, fontSize: 34, color: CRAYON.line, opacity: written >= 1 ? 0.8 : 0, marginTop: -4}}>{zh}</div> : null}
    </div>
  );
};

// The latest target word read on this page, as a card pinned to the picture's lower-left corner.
const WordCard: React.FC<{lines: LineTiming[]; t: number}> = ({lines, t}) => {
  const hits = lines.flatMap((line) => targetsIn(line)).filter((hit) => t >= hit.start);
  const hit = hits[hits.length - 1];
  if (!hit) {
    return null;
  }
  const s = backOut(progress(t, hit.start, 0.3));
  return (
    <div
      style={{
        position: 'absolute',
        left: PAGE.x + 24,
        top: PAGE.y + PAGE.h - 176,
        transform: `scale(${s}) rotate(-2deg)`,
        transformOrigin: '0 100%',
        background: CRAYON.white,
        border: `6px solid ${CRAYON.line}`,
        borderRadius: 20,
        padding: '10px 26px',
        boxShadow: `8px 8px 0 ${CRAYON.lemon}`,
      }}
    >
      <div style={{fontFamily: FONT.story, fontSize: 50, color: CRAYON.teal, lineHeight: 1.1}}>{hit.target.lemma}</div>
      <div style={{fontFamily: FONT.story, fontSize: 26, color: CRAYON.line, opacity: 0.75}}>
        {hit.target.phonetic} {hit.target.pos}
      </div>
      <div style={{fontFamily: FONT.zh, fontSize: 38, color: CRAYON.line}}>{hit.target.meaning}</div>
    </div>
  );
};

const TextPanel: React.FC<{lines: LineTiming[]; t: number}> = ({lines, t}) => {
  const current = [...lines].reverse().find((line) => t >= line.start - 0.25);
  return (
    <div style={{position: 'absolute', left: 70, right: 70, top: TEXT_TOP + 40}}>
      {lines.map((line) => (
        <Sentence key={line.id} line={line} t={t} dim={current !== undefined && current.id !== line.id} />
      ))}
    </div>
  );
};

// ---------- scenes ----------

export const CoverScene: React.FC<SceneProps> = ({timing, t}) => {
  const ill = timing.scene.illustration;
  const title = cueTime(timing, 'title');
  const p = pop(t, title, 0.4);
  return (
    <>
      {ill ? <PicturePage id={timing.scene.id} t={t} illustration={ill} /> : null}
      <div style={{position: 'absolute', left: 60, right: 60, top: TEXT_TOP + 30, textAlign: 'center', transform: `scale(${p.visible ? p.scale : 0})`}}>
        <div style={{fontFamily: FONT.title, fontSize: 100, color: CRAYON.line, lineHeight: 1.05}}>{pictureBook.title.en}</div>
        <div style={{fontFamily: FONT.zhHand, fontSize: 56, color: CRAYON.coral, marginTop: 16}}>{pictureBook.title.zh}</div>
        <div style={{fontFamily: FONT.zh, fontSize: 32, color: CRAYON.line, opacity: 0.7, marginTop: 20}}>
          英文绘本精读 No.{pictureBook.bookNo} · {pictureBook.level} · {BRAND.creatorName}
        </div>
      </div>
    </>
  );
};

export const PageScene: React.FC<SceneProps> = ({timing, t}) => {
  const ill = timing.scene.illustration;
  return (
    <>
      {ill ? <PicturePage id={timing.scene.id} t={t} illustration={ill} landAt={timing.start + 0.35} /> : null}
      <WordCard lines={timing.lines} t={t} />
      <TextPanel lines={timing.lines} t={t} />
    </>
  );
};

export const WordsScene: React.FC<SceneProps> = ({timing, t}) => (
  <>
    <div style={{position: 'absolute', left: 70, top: 190}}>
      <div style={{fontFamily: FONT.title, fontSize: 96, color: CRAYON.line}}>Words from the story</div>
      <div style={{fontFamily: FONT.zhHand, fontSize: 48, color: CRAYON.coral}}>故事词卡 · 全部是高考词</div>
    </div>
    <div style={{position: 'absolute', left: 60, right: 60, top: 420, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 26}}>
      {pictureBook.targets.map((target, i) => {
        const p = pop(t, cueTime(timing, `card${i}`), 0.35);
        if (!p.visible) {
          return <div key={target.id} style={{height: 250}} />;
        }
        return (
          <div
            key={target.id}
            style={{
              height: 250,
              boxSizing: 'border-box',
              transform: `translateY(${p.y}px) scale(${p.scale}) rotate(${i % 2 ? 1.5 : -1.5}deg)`,
              background: CRAYON.white,
              border: `6px solid ${CRAYON.line}`,
              borderRadius: 22,
              padding: '18px 24px',
              boxShadow: `8px 8px 0 ${[CRAYON.lemon, CRAYON.teal, CRAYON.coral][i % 3]}`,
            }}
          >
            <div style={{fontFamily: FONT.story, fontSize: 54, color: CRAYON.line}}>
              <span style={{background: `linear-gradient(transparent 55%, ${CRAYON.lemon} 55%, ${CRAYON.lemon} 92%, transparent 92%)`}}>{target.lemma}</span>
            </div>
            <div style={{fontFamily: FONT.story, fontSize: 30, color: CRAYON.line, opacity: 0.7}}>
              {target.phonetic} {target.pos}
            </div>
            <div style={{fontFamily: FONT.zh, fontSize: 40, color: CRAYON.teal, marginTop: 10}}>{target.meaning}</div>
          </div>
        );
      })}
    </div>
    <BrandPig id="pig-words" t={t} x={800} y={1220} size={200} face="happy" pose="point" flip />
  </>
);

export const QuestionScene: React.FC<SceneProps> = ({timing, t}) => {
  const q = pictureBook.question;
  const answer = cueTime(timing, 'answer');
  const evidence = cueTime(timing, 'evidence');
  const evidenceLine = PICTURE_BOOK.lines.find((line) => line.id === q.evidenceLineId);
  const shown = t >= answer;
  const ticks = timing.cues.filter((cue) => cue.name.startsWith('tick'));
  const thinking = ticks.length > 0 && t >= ticks[0].t && t < answer;
  const thinkP = ticks.length ? clamp01((t - ticks[0].t) / Math.max(answer - ticks[0].t, 0.1)) : 0;
  return (
    <>
      <div style={{position: 'absolute', left: 70, right: 70, top: 190}}>
        <div style={{fontFamily: FONT.title, fontSize: 80, color: CRAYON.line}}>Reading question</div>
        <div style={{fontFamily: FONT.story, fontSize: 52, color: CRAYON.line, lineHeight: 1.3, marginTop: 12}}>{q.stem}</div>
        <div style={{fontFamily: FONT.zh, fontSize: 34, color: CRAYON.line, opacity: 0.75, marginTop: 8}}>
          {q.stemZh} · {q.sourceNote}
        </div>
      </div>
      <div style={{position: 'absolute', left: 70, right: 70, top: 560, display: 'flex', flexDirection: 'column', gap: 22}}>
        {q.options.map((option, i) => {
          const p = pop(t, cueTime(timing, `opt${i}`), 0.3);
          if (!p.visible) return <div key={option} style={{height: 104}} />;
          const correct = shown && i === q.answerIndex;
          return (
            <div
              key={option}
              style={{
                transform: `translateY(${p.y}px) scale(${p.scale})`,
                background: correct ? CRAYON.lemon : CRAYON.white,
                border: `6px solid ${CRAYON.line}`,
                borderRadius: 20,
                padding: '12px 24px',
                display: 'flex',
                gap: 20,
                alignItems: 'center',
                opacity: shown && !correct ? 0.45 : 1,
              }}
            >
              <div style={{fontFamily: FONT.title, fontSize: 64, color: CRAYON.coral, width: 50}}>{String.fromCharCode(65 + i)}</div>
              <div style={{fontFamily: FONT.story, fontSize: 40, color: CRAYON.line}}>{option}</div>
              {correct ? <div style={{marginLeft: 'auto', fontFamily: FONT.story, fontSize: 56, color: CRAYON.teal}}>✓</div> : null}
            </div>
          );
        })}
      </div>
      {thinking ? (
        <div style={{position: 'absolute', left: 70, top: 1190, display: 'flex', alignItems: 'center', gap: 20}}>
          <svg width={90} height={90} viewBox="-50 -50 100 100">
            <circle r={40} fill={CRAYON.white} stroke={CRAYON.line} strokeWidth={7} />
            <path d={`M0,0 L0,-40 A40,40 0 ${thinkP > 0.5 ? 1 : 0},1 ${Math.sin(thinkP * Math.PI * 2) * 40},${-Math.cos(thinkP * Math.PI * 2) * 40} Z`} fill={CRAYON.coral} />
          </svg>
          <div style={{fontFamily: FONT.zhHand, fontSize: 48, color: CRAYON.line}}>想一想…</div>
        </div>
      ) : null}
      {t >= evidence && evidenceLine ? (
        <div
          style={{
            position: 'absolute',
            left: 70,
            right: 250,
            top: 1180,
            transform: `scale(${backOut(progress(t, evidence, 0.3))})`,
            background: CRAYON.white,
            border: `5px dashed ${CRAYON.teal}`,
            borderRadius: 18,
            padding: '14px 22px',
          }}
        >
          <div style={{fontFamily: FONT.zh, fontSize: 30, color: CRAYON.teal}}>原文定位 · 第 {pictureBook.scenes.find((s) => s.lines.includes(q.evidenceLineId))?.pageNo ?? ''} 页</div>
          <div style={{fontFamily: FONT.story, fontSize: 36, color: CRAYON.line, lineHeight: 1.35}}>{evidenceLine.subtitle}</div>
        </div>
      ) : null}
      <BrandPig id="pig-question" t={t} x={850} y={1250} size={170} face={shown ? 'happy' : 'squint'} pose={shown ? 'cheer' : 'inspect'} flip />
    </>
  );
};

export const EndScene: React.FC<SceneProps> = ({timing, t}) => {
  const ill = timing.scene.illustration;
  const p = pop(t, cueTime(timing, 'theend'), 0.4);
  return (
    <>
      {ill ? <PicturePage id={timing.scene.id} t={t} illustration={ill} landAt={timing.start + 0.35} /> : null}
      {p.visible ? (
        <div style={{position: 'absolute', left: 60, right: 60, top: TEXT_TOP + 30, textAlign: 'center', transform: `translateY(${p.y}px) scale(${p.scale})`}}>
          <div style={{fontFamily: FONT.title, fontSize: 130, color: CRAYON.line, lineHeight: 1}}>The End</div>
          <div style={{fontFamily: FONT.zhHand, fontSize: 54, color: CRAYON.coral, marginTop: 20}}>你会怎么做？评论区告诉我们</div>
        </div>
      ) : null}
    </>
  );
};

export const SCENE_COMPONENTS: Record<string, React.FC<SceneProps>> = {
  cover: CoverScene,
  page: PageScene,
  words: WordsScene,
  question: QuestionScene,
  end: EndScene,
};
