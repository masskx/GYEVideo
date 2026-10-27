import React from 'react';
import {AbsoluteFill, Img, staticFile} from 'remotion';
import {episodeConfig} from './data/episodeConfig';
import {sentenceExamples, sentenceInfo} from './data/sentencePattern';
import {getAnimalIconById, getFallbackAnimalIcon} from './data/animalIconRegistry';
import {sentenceVideoMeta, splitEarwormLine} from './sentenceVideoMeta';
import {FONT_STACK, THEME} from './theme';

const examplePositions = [
  {left: 82, top: 1030, rotate: '-3deg'},
  {left: 534, top: 1154, rotate: '2deg'},
  {left: 110, top: 1380, rotate: '-1deg'},
];

const getPatternLines = () => {
  if (sentenceInfo.patternLines && sentenceInfo.patternLines.length > 0) {
    return sentenceInfo.patternLines;
  }

  const split = sentenceInfo.pattern.split(/(?<=[,.;!?])\s+/).filter(Boolean);
  return split.length > 0 ? split : [sentenceInfo.pattern];
};

export const SentenceCover: React.FC = () => {
  const creatorAnimal =
    getAnimalIconById(episodeConfig.cover?.creatorAnimalId ?? '') ?? getFallbackAnimalIcon();
  const accentAnimal =
    getAnimalIconById(episodeConfig.cover?.accentAnimalId ?? '') ?? creatorAnimal;
  const earwormLines = splitEarwormLine();
  const heroLines = earwormLines.length > 0 ? earwormLines : getPatternLines();
  const wrongPreview = sentenceInfo.wrongExpression?.text ?? sentenceExamples[0]?.en;
  const rightPreview = sentenceInfo.reuseScenes?.[0]?.line ?? sentenceInfo.rescueExpression?.en ?? sentenceInfo.pattern;

  return (
    <AbsoluteFill
      style={{
        fontFamily: FONT_STACK,
        background: THEME.background,
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(circle at 50% 18%, rgba(255,212,59,0.24), transparent 22%), radial-gradient(circle at 82% 70%, rgba(255,212,59,0.14), transparent 24%), linear-gradient(180deg, #050505 0%, #0d0d0d 100%)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.08,
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.14) 1px, transparent 1px)',
          backgroundSize: '54px 54px',
          mixBlendMode: 'screen',
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: 86,
          top: 78,
          padding: '20px 30px',
          borderRadius: 24,
          background: THEME.yellow,
          color: THEME.background,
          fontSize: 40,
          fontWeight: 1000,
        }}
      >
        {episodeConfig.cover?.badgeText ?? sentenceInfo.coverBadgeText ?? '句子骨架'}
      </div>
      <div
        style={{
          position: 'absolute',
          right: 78,
          top: 84,
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          padding: '16px 22px',
          borderRadius: 28,
          border: '1px solid rgba(255,212,59,0.30)',
          background: 'rgba(9,9,9,0.78)',
        }}
      >
        {creatorAnimal ? (
          <Img src={staticFile(creatorAnimal.path)} style={{width: 68, height: 68, objectFit: 'contain'}} />
        ) : null}
        <div>
          <div style={{color: 'rgba(255,255,255,0.58)', fontSize: 22, fontWeight: 900}}>ENGLISH CREATOR</div>
          <div style={{marginTop: 4, color: THEME.white, fontSize: 32, fontWeight: 1000}}>
            {episodeConfig.cover?.creatorName ?? '小猪盖被'}
          </div>
        </div>
      </div>
      <div style={{position: 'absolute', left: 84, top: 236, width: 918}}>
        <div style={{color: THEME.white, fontSize: 74, lineHeight: 1.12, fontWeight: 1000}}>
          {episodeConfig.cover?.headline ?? sentenceInfo.title}
        </div>
        <div
          style={{
            marginTop: 22,
            color: 'rgba(248,248,248,0.86)',
            fontSize: 36,
            lineHeight: 1.35,
            fontWeight: 800,
          }}
        >
          {episodeConfig.cover?.subHeadline ?? (sentenceVideoMeta.chinesePainPoint || sentenceInfo.coreMeaning)}
        </div>
      </div>
      <div
        style={{
          position: 'absolute',
          left: 84,
          top: 534,
          width: 910,
          padding: '42px 40px',
          borderRadius: 36,
          border: '1px solid rgba(255,212,59,0.24)',
          background: 'rgba(10,10,10,0.82)',
          boxShadow: '0 24px 48px rgba(0,0,0,0.34)',
        }}
      >
        <div style={{color: THEME.gray, fontSize: 24, fontWeight: 900, letterSpacing: 1}}>EARWORM LINE</div>
        <div style={{marginTop: 18, color: THEME.yellow, fontSize: 80, lineHeight: 1.02, fontWeight: 1000}}>
          {heroLines.map((line, index) => (
            <React.Fragment key={`${line}-${index}`}>
              {index > 0 ? <br /> : null}
              {line}
            </React.Fragment>
          ))}
        </div>
        <div style={{marginTop: 24, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18}}>
          <div
            style={{
              padding: '18px 22px',
              borderRadius: 24,
              border: `2px solid ${THEME.red}`,
              background: 'rgba(255,77,77,0.14)',
              color: THEME.white,
            }}
          >
            <div style={{fontSize: 22, fontWeight: 1000, letterSpacing: 1, color: THEME.red}}>WRONG</div>
            <div style={{marginTop: 8, fontSize: 28, lineHeight: 1.15, fontWeight: 1000, textAlign: 'center'}}>
              {wrongPreview}
            </div>
          </div>
          <div
            style={{
              padding: '18px 22px',
              borderRadius: 24,
              border: `2px solid ${THEME.yellow}`,
              background: 'rgba(255,212,59,0.14)',
              color: THEME.white,
            }}
          >
            <div style={{fontSize: 22, fontWeight: 1000, letterSpacing: 1, color: THEME.yellow}}>SAY THIS</div>
            <div style={{marginTop: 8, fontSize: 28, lineHeight: 1.15, fontWeight: 1000, textAlign: 'center'}}>
              {rightPreview}
            </div>
          </div>
        </div>
      </div>
      {sentenceExamples.slice(0, 3).map((example, index) => {
        const pos = examplePositions[index] ?? examplePositions[examplePositions.length - 1];
        return (
          <div
            key={example.id}
            style={{
              position: 'absolute',
              left: pos.left,
              top: pos.top,
              width: 460,
              padding: '24px 28px',
              borderRadius: 30,
              border: '1px solid rgba(255,212,59,0.28)',
              background: 'linear-gradient(180deg, rgba(34,30,12,0.94), rgba(16,16,16,0.92))',
              boxShadow: '0 22px 38px rgba(0,0,0,0.28)',
              transform: `rotate(${pos.rotate})`,
            }}
          >
            <div style={{color: THEME.yellow, fontSize: 30, lineHeight: 1.2, fontWeight: 1000}}>
              {example.slotB ?? example.en}
            </div>
            <div
              style={{
                marginTop: 12,
                color: 'rgba(248,248,248,0.74)',
                fontSize: 22,
                lineHeight: 1.25,
                fontWeight: 800,
              }}
            >
              {example.zh}
            </div>
          </div>
        );
      })}
      {accentAnimal ? (
        <div
          style={{
            position: 'absolute',
            right: 58,
            bottom: 320,
            width: 280,
            height: 280,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,212,59,0.18), transparent 68%)',
          }}
        >
          <Img src={staticFile(accentAnimal.path)} style={{width: 246, height: 246, objectFit: 'contain'}} />
        </div>
      ) : null}
      <div
        style={{
          position: 'absolute',
          left: 76,
          right: 76,
          bottom: 92,
          padding: '28px 34px',
          borderRadius: 34,
          border: '1px solid rgba(255,212,59,0.22)',
          background: 'linear-gradient(90deg, rgba(255,212,59,0.16), rgba(12,12,12,0.96) 30%)',
        }}
      >
        <div style={{color: 'rgba(255,255,255,0.58)', fontSize: 24, fontWeight: 900}}>MEMORY SOUND</div>
        <div style={{marginTop: 10, color: THEME.white, fontSize: 42, lineHeight: 1.26, fontWeight: 1000}}>
          {episodeConfig.cover?.memoryLine ?? sentenceVideoMeta.memorySound}
        </div>
      </div>
    </AbsoluteFill>
  );
};
