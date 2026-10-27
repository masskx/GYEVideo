import React from 'react';
import {AbsoluteFill, Audio, Easing, interpolate, staticFile, useCurrentFrame} from 'remotion';
import {BackgroundMusic} from './components/BackgroundMusic';
import {episodeConfig} from './data/episodeConfig';
import {readingPassage, ReadingTargetWord, StoryToken} from './data/readingPassage';
import {
  getActiveReadingSegment,
  getActiveReadingWord,
  getChallengeProgressText,
  getReadProgress,
  getRevealedWordIds,
  getSegmentProgress,
  getWordById,
  READ_ALOUD_FPS,
} from './readAloudTimeline';
import {FONT_STACK, THEME} from './theme';

const ACCENT = THEME.yellow;
const RED = '#ff3158';
const PANEL = '#111111';
const PAPER = '#fff7d7';
const INK = '#111111';
const MUTED = '#6f6230';

const shortMeaning = (word: ReadingTargetWord) => word.meaning.split(/[，,；;]/)[0];

const TopChallengeBar: React.FC = () => {
  const frame = useCurrentFrame();
  const progress = getReadProgress(frame);
  const x = interpolate(progress, [0, 1], [10, 610], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <div style={{position: 'absolute', top: 0, left: 0, right: 0, height: 62, background: '#060606'}}>
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', height: 38, alignItems: 'center', color: '#fff'}}>
        <div style={{paddingLeft: 24, fontSize: 17, fontWeight: 950, color: ACCENT}}>{readingPassage.topicLabel}</div>
        <div style={{textAlign: 'center', fontSize: 16, fontWeight: 900, borderLeft: '1px solid rgba(255,212,59,0.35)', borderRight: '1px solid rgba(255,212,59,0.35)'}}>
          双语混搭
        </div>
        <div style={{paddingRight: 24, textAlign: 'right', fontSize: 16, fontWeight: 900}}>{readingPassage.challengeLabel}</div>
      </div>
      <div style={{position: 'absolute', left: 20, right: 20, bottom: 8, height: 15, borderRadius: 2, background: '#1c1c1c', overflow: 'hidden'}}>
        <div style={{height: '100%', width: `${Math.max(8, progress * 100)}%`, background: 'rgba(255,212,59,0.28)'}} />
      </div>
      <div
        style={{
          position: 'absolute',
          left: x,
          bottom: 4,
          minWidth: 250,
          height: 24,
          borderRadius: 2,
          background: '#272727',
          border: `1px solid ${ACCENT}`,
          color: ACCENT,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 14,
          fontWeight: 950,
          boxShadow: '0 4px 12px rgba(0,0,0,0.35)',
        }}
      >
        {getChallengeProgressText(frame)}
      </div>
    </div>
  );
};

const StoryWord: React.FC<{
  word: ReadingTargetWord;
  active: boolean;
  revealed: boolean;
  segmentProgress: number;
}> = ({word, active, revealed, segmentProgress}) => {
  const frame = useCurrentFrame();
  const pulse = active
    ? interpolate(frame % 24, [0, 10, 24], [1, 1.055, 1], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp',
        easing: Easing.bezier(0.2, 0.8, 0.2, 1),
      })
    : 1;
  const glossOpacity = revealed ? interpolate(segmentProgress, [0, 0.25], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}) : 0;
  const glossY = revealed ? interpolate(segmentProgress, [0, 0.25], [5, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}) : 4;
  const sweepX = active
    ? interpolate(segmentProgress, [0, 1], [-110, 110], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp',
      })
    : -120;

  return (
    <span
      style={{
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        verticalAlign: 'middle',
        margin: '0 4px',
        transform: `scale(${pulse})`,
      }}
    >
      <span
        style={{
          position: 'relative',
          display: 'inline-block',
          padding: '2px 8px 1px',
          borderRadius: 3,
          background: active ? ACCENT : '#ffe985',
          color: INK,
          border: `2px solid ${active ? '#111' : 'rgba(17,17,17,0.9)'}`,
          fontSize: active ? 25 : 23,
          fontWeight: 950,
          lineHeight: 1.05,
          overflow: 'hidden',
          boxShadow: active ? '0 0 0 4px rgba(255,212,59,0.25)' : 'none',
        }}
      >
        <span style={{position: 'relative', zIndex: 2}}>{word.word}</span>
        {active ? (
          <span
            style={{
              position: 'absolute',
              top: -8,
              bottom: -8,
              left: `${sweepX}%`,
              width: 34,
              transform: 'rotate(14deg)',
              background: 'rgba(255,255,255,0.46)',
              zIndex: 1,
            }}
          />
        ) : null}
      </span>
      <span style={{width: '92%', height: 4, marginTop: 2, borderRadius: 3, background: RED}} />
      <span
        style={{
          minHeight: 17,
          marginTop: 2,
          color: INK,
          opacity: glossOpacity,
          transform: `translateY(${glossY}px)`,
          fontSize: 12,
          fontWeight: 900,
          lineHeight: 1,
          whiteSpace: 'nowrap',
        }}
      >
        {shortMeaning(word)}
      </span>
    </span>
  );
};

const renderToken = (
  token: StoryToken,
  activeWord: ReadingTargetWord,
  revealedIds: Set<string>,
  segmentProgress: number,
  index: number,
) => {
  if (token.type === 'text') {
    return (
      <span key={`text-${index}`} style={{color: INK}}>
        {token.text}
      </span>
    );
  }

  const word = getWordById(token.wordId);
  if (!word) {
    return null;
  }

  return (
    <StoryWord
      key={word.id}
      word={word}
      active={activeWord.id === word.id}
      revealed={revealedIds.has(word.id)}
      segmentProgress={activeWord.id === word.id ? segmentProgress : 1}
    />
  );
};

const StoryBoard: React.FC = () => {
  const frame = useCurrentFrame();
  const activeWord = getActiveReadingWord(frame);
  const activeSegment = getActiveReadingSegment(frame);
  const isWordBeat = activeSegment?.id.startsWith('word-') ?? false;
  const revealedIds = getRevealedWordIds(frame);
  const segmentProgress = getSegmentProgress(frame);
  const lineCount = readingPassage.storyLines.length;
  const denseBoard = lineCount >= 7;
  const bodyFontSize = denseBoard ? 21 : 22;
  const bodyLineHeight = denseBoard ? 1.3 : 1.34;
  const lineMinHeight = denseBoard ? 44 : 48;

  return (
    <div
      style={{
        position: 'absolute',
        left: 28,
        right: 28,
        top: 76,
        bottom: 180,
        background: PAPER,
        border: '3px solid #111',
        borderRadius: 5,
        boxShadow: '0 8px 0 #000, 0 18px 26px rgba(0,0,0,0.24)',
        padding: '17px 24px 14px',
        overflow: 'hidden',
      }}
    >
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8}}>
        <div style={{fontSize: 23, fontWeight: 950, color: INK}}>{readingPassage.title}</div>
        <div style={{fontSize: 13, fontWeight: 950, color: ACCENT, background: PANEL, padding: '6px 10px', borderRadius: 3}}>
          {revealedIds.size}/{readingPassage.targetWords.length}
        </div>
      </div>

      <div style={{height: 3, background: '#111', marginBottom: 9}} />

      <div style={{fontSize: bodyFontSize, lineHeight: bodyLineHeight, fontWeight: 900, letterSpacing: 0, paddingBottom: 6}}>
        {readingPassage.storyLines.map((line) => (
          <div key={line.id} style={{minHeight: lineMinHeight}}>
            {line.tokens.map((token, index) =>
              renderToken(
                token,
                isWordBeat ? activeWord : ({...activeWord, id: ''} as ReadingTargetWord),
                revealedIds,
                segmentProgress,
                index,
              ),
            )}
          </div>
        ))}
      </div>

      <div style={{position: 'absolute', right: 24, top: 57, display: 'flex', gap: 5}}>
        {readingPassage.targetWords.map((word) => (
          <div
            key={word.id}
            style={{
              width: 7,
              height: 7,
              borderRadius: 999,
              background: revealedIds.has(word.id) ? RED : '#b9a85c',
              border: '1px solid #111',
            }}
          />
        ))}
      </div>
    </div>
  );
};

const WordCard: React.FC = () => {
  const frame = useCurrentFrame();
  const activeWord = getActiveReadingWord(frame);
  const activeSegment = getActiveReadingSegment(frame);
  const isWordBeat = activeSegment?.id.startsWith('word-') ?? false;
  const localProgress = activeSegment
    ? Math.min(1, Math.max(0, (frame / READ_ALOUD_FPS - activeSegment.start) / Math.max(activeSegment.end - activeSegment.start, 0.1)))
    : 0;
  const slide = interpolate(localProgress, [0, 0.18, 1], [-24, 0, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });
  const opacity = interpolate(localProgress, [0, 0.16], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  if (!isWordBeat) {
    const isSummary = activeSegment?.id === 'summary';
    return (
      <div
        style={{
          position: 'absolute',
          left: 28,
          right: 28,
          bottom: 72,
          height: 94,
          background: '#fffdf2',
          border: '3px solid #111',
          borderRadius: 5,
          display: 'grid',
          gridTemplateColumns: '35px 1fr 190px',
          alignItems: 'center',
          padding: '0 18px',
          color: INK,
        }}
      >
        <div style={{width: 18, height: 18, borderRadius: 999, border: `4px solid ${RED}`, background: '#fff'}} />
        <div>
          <div style={{fontSize: 29, fontWeight: 950, lineHeight: 1}}>
            {isSummary ? '最后快速复盘' : '先扫完整短文'}
          </div>
          <div style={{fontSize: 17, fontWeight: 850, color: MUTED, marginTop: 8}}>
            {isSummary ? readingPassage.memoryLine : readingPassage.sceneHook}
          </div>
        </div>
        <div style={{fontSize: 22, fontWeight: 950, color: RED, textAlign: 'right'}}>
          {isSummary ? '100%' : `${readingPassage.targetWords.length} words`}
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        position: 'absolute',
        left: 28,
        right: 28,
        bottom: 72,
        height: 94,
        background: '#fffdf2',
        border: '3px solid #111',
        borderRadius: 5,
        display: 'grid',
        gridTemplateColumns: '35px 235px 1fr',
        alignItems: 'center',
        padding: '0 18px',
        color: INK,
        transform: `translateX(${slide}px)`,
        opacity,
      }}
    >
      <div
        style={{
          position: 'absolute',
          left: 0,
          bottom: 0,
          height: 5,
          width: `${localProgress * 100}%`,
          background: RED,
        }}
      />
      <div style={{width: 18, height: 18, borderRadius: 999, border: `4px solid ${RED}`, background: '#fff'}} />
      <div>
        <div style={{fontSize: 31, fontWeight: 950, lineHeight: 1}}>{activeWord.word}</div>
        <div style={{fontSize: 15, fontWeight: 900, color: MUTED, marginTop: 6}}>
          {activeWord.phonetic}  {activeWord.partOfSpeech}
        </div>
      </div>
      <div style={{borderLeft: '3px solid #111', paddingLeft: 18}}>
        <div style={{fontSize: 25, fontWeight: 950, lineHeight: 1.1}}>{activeWord.meaning}</div>
        <div style={{fontSize: 18, fontWeight: 850, color: '#312600', marginTop: 7}}>
          {activeWord.scenePhrase}：{activeWord.sceneMeaning}
        </div>
      </div>
    </div>
  );
};

const MusicPlayerBar: React.FC = () => {
  const frame = useCurrentFrame();
  const progress = getReadProgress(frame);
  const activeWord = getActiveReadingWord(frame);
  const bars = Array.from({length: 32}, (_, index) => {
    const height = 8 + Math.abs(Math.sin(index * 1.5 + frame * 0.08)) * 26;
    return height;
  });

  return (
    <div
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 62,
        background: '#050505',
        borderTop: `3px solid ${ACCENT}`,
        color: '#fff',
        display: 'grid',
        gridTemplateColumns: '250px 220px 1fr',
        alignItems: 'center',
        padding: '0 22px',
      }}
    >
      <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
        <div style={{width: 36, height: 36, borderRadius: 999, background: ACCENT, color: '#111', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 950}}>
          词
        </div>
        <div>
          <div style={{fontSize: 14, fontWeight: 950}}>小猪盖被 · 情景词库</div>
          <div style={{fontSize: 11, color: 'rgba(255,255,255,0.62)', fontWeight: 800}}>{activeWord.word}</div>
        </div>
      </div>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 18, color: ACCENT, fontSize: 21, fontWeight: 950}}>
        <span>‹</span>
        <span style={{width: 34, height: 34, borderRadius: 999, background: ACCENT, color: '#111', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>▶</span>
        <span>›</span>
      </div>
      <div style={{display: 'grid', gridTemplateColumns: '1fr 80px', gap: 12, alignItems: 'center'}}>
        <div style={{height: 40, display: 'flex', alignItems: 'center', gap: 4}}>
          {bars.map((height, index) => (
            <div
              key={index}
              style={{
                width: 6,
                height,
                borderRadius: 999,
                background: index / bars.length < progress ? '#19c99a' : '#2e2e2e',
              }}
            />
          ))}
        </div>
        <div style={{fontSize: 14, fontWeight: 950, color: ACCENT, textAlign: 'right'}}>
          {Math.round(progress * 100)}%
        </div>
      </div>
    </div>
  );
};

const EndFlash: React.FC = () => {
  const frame = useCurrentFrame();
  const activeSegment = getActiveReadingSegment(frame);
  if (activeSegment?.id !== 'summary') {
    return null;
  }

  return (
    <div
      style={{
        position: 'absolute',
        left: 54,
        right: 54,
        top: 96,
        padding: 20,
        border: `4px solid ${ACCENT}`,
        background: '#080808',
        color: '#fff',
        zIndex: 12,
        boxShadow: '0 18px 35px rgba(0,0,0,0.35)',
      }}
    >
      <div style={{fontSize: 19, fontWeight: 950, color: ACCENT}}>最后串起来</div>
      <div style={{fontSize: 34, fontWeight: 950, marginTop: 8}}>{readingPassage.memoryLine}</div>
    </div>
  );
};

export const ReadAloudVocabVideo: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        fontFamily: FONT_STACK,
        background: 'linear-gradient(180deg, #ffdb3b 0%, #f6c900 55%, #d9a900 100%)',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.11,
          backgroundImage:
            'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
          backgroundSize: '34px 34px',
        }}
      />
      <TopChallengeBar />
      <StoryBoard />
      <WordCard />
      <MusicPlayerBar />
      <EndFlash />
      <BackgroundMusic />
      <Audio src={staticFile('/audio/main-voice.mp3')} volume={episodeConfig.voiceVolume} />
    </AbsoluteFill>
  );
};
