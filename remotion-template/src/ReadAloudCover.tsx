import React from 'react';
import {AbsoluteFill, Img, staticFile} from 'remotion';
import {episodeConfig} from './data/episodeConfig';
import {getAnimalIconById, getFallbackAnimalIcon} from './data/animalIconRegistry';
import {readingPassage} from './data/readingPassage';
import {FONT_STACK, THEME} from './theme';

const wordCardPositions = [
  {left: 86, top: 1118, rotate: '-4deg'},
  {left: 524, top: 1052, rotate: '3deg'},
  {left: 160, top: 1348, rotate: '-1deg'},
];

const normalizeText = (text: string | undefined) => (text ?? '').replace(/`/g, '').replace(/\s+/g, ' ').trim();

export const ReadAloudCover: React.FC = () => {
  const cover = episodeConfig.cover;
  const highlightWords = (cover?.highlightWords ?? readingPassage.targetWords.slice(0, 4).map((word) => word.word))
    .map(normalizeText)
    .filter(Boolean)
    .slice(0, 3);
  const creatorAnimal = getAnimalIconById(cover?.creatorAnimalId) ?? getAnimalIconById('cute_pig') ?? getFallbackAnimalIcon();
  const accentAnimal = getAnimalIconById(cover?.accentAnimalId) ?? creatorAnimal;
  const heroWord = highlightWords[0] ?? readingPassage.targetWords[0]?.word ?? 'vocab';
  const headline = normalizeText(cover?.headline) || readingPassage.title;
  const subHeadline = normalizeText(cover?.subHeadline) || readingPassage.sceneHook;
  const memoryLine = normalizeText(cover?.memoryLine) || readingPassage.memoryLine;

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
            'radial-gradient(circle at 50% 24%, rgba(255, 212, 59, 0.30), transparent 24%), radial-gradient(circle at 78% 68%, rgba(255, 212, 59, 0.16), transparent 22%), linear-gradient(180deg, #050505 0%, #0f0f0f 100%)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.08,
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.16) 1px, transparent 1px)',
          backgroundSize: '54px 54px',
          mixBlendMode: 'screen',
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: 90,
          top: 86,
          padding: '20px 30px',
          borderRadius: 24,
          background: THEME.yellow,
          color: '#050505',
          fontSize: 42,
          fontWeight: 1000,
          letterSpacing: 1,
          boxShadow: '0 20px 44px rgba(255, 212, 59, 0.24)',
        }}
      >
        {normalizeText(cover?.badgeText) || '情景记词'}
      </div>
      <div
        style={{
          position: 'absolute',
          right: 82,
          top: 86,
          display: 'flex',
          alignItems: 'center',
          gap: 18,
          padding: '18px 24px 18px 18px',
          borderRadius: 30,
          border: '1px solid rgba(255, 212, 59, 0.34)',
          background: 'rgba(9, 9, 9, 0.78)',
          boxShadow: '0 18px 42px rgba(0, 0, 0, 0.28)',
        }}
      >
        {creatorAnimal ? (
          <Img
            src={staticFile(creatorAnimal.path)}
            style={{
              width: 74,
              height: 74,
              objectFit: 'contain',
              filter: 'drop-shadow(0 10px 18px rgba(0, 0, 0, 0.36))',
            }}
          />
        ) : null}
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <div
            style={{
              color: 'rgba(255, 255, 255, 0.64)',
              fontSize: 24,
              fontWeight: 900,
              letterSpacing: 1,
            }}
          >
            ENGLISH CREATOR
          </div>
          <div
            style={{
              marginTop: 4,
              color: THEME.white,
              fontSize: 34,
              fontWeight: 1000,
            }}
          >
            {normalizeText(cover?.creatorName) || '小猪盖被'}
          </div>
        </div>
      </div>
      <div style={{position: 'absolute', left: 90, top: 250, width: 900}}>
        <div
          style={{
            color: THEME.white,
            fontSize: 76,
            lineHeight: 1.14,
            fontWeight: 1000,
          }}
        >
          {headline}
        </div>
        <div
          style={{
            marginTop: 24,
            color: 'rgba(248, 248, 248, 0.84)',
            fontSize: 36,
            lineHeight: 1.4,
            fontWeight: 800,
          }}
        >
          {subHeadline}
        </div>
      </div>
      <div
        style={{
          position: 'absolute',
          left: 92,
          top: 545,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          zIndex: 2,
        }}
      >
        <div
          style={{
            color: THEME.yellow,
            fontSize: heroWord.length > 8 ? 176 : 220,
            lineHeight: 0.88,
            fontWeight: 1000,
            textShadow: '0 0 56px rgba(255, 212, 59, 0.52)',
            letterSpacing: heroWord.length > 10 ? -3 : -5,
            maxWidth: 940,
            whiteSpace: 'nowrap',
          }}
        >
          {heroWord}
        </div>
        <div
          style={{
            marginTop: 28,
            padding: '20px 28px',
            borderRadius: 26,
            border: '1px solid rgba(255, 212, 59, 0.28)',
            background: 'rgba(13, 13, 13, 0.80)',
            boxShadow: '0 22px 48px rgba(0, 0, 0, 0.22)',
          }}
        >
          <div
            style={{
              color: 'rgba(255,255,255,0.60)',
              fontSize: 26,
              fontWeight: 900,
              letterSpacing: 1,
            }}
          >
            SCENE MEMORY
          </div>
          <div
            style={{
              marginTop: 10,
              color: THEME.white,
            fontSize: 42,
              fontWeight: 1000,
            }}
          >
            跟读一段素材，串起一组词
          </div>
        </div>
      </div>
      {highlightWords.map((word, index) => {
        const position = wordCardPositions[index] ?? wordCardPositions[wordCardPositions.length - 1];

        return (
          <div
            key={word}
            style={{
              position: 'absolute',
              left: position.left,
              top: position.top,
              width: 500,
              padding: '28px 34px',
              borderRadius: 30,
              border: '1px solid rgba(255, 212, 59, 0.36)',
              background: 'linear-gradient(180deg, rgba(34, 30, 12, 0.94), rgba(17, 17, 17, 0.92))',
              boxShadow: '0 24px 40px rgba(0, 0, 0, 0.28)',
              transform: `rotate(${position.rotate})`,
            }}
          >
            <div style={{color: THEME.yellow, fontSize: word.length > 10 ? 46 : 58, fontWeight: 1000, lineHeight: 1}}>
              {word}
            </div>
          </div>
        );
      })}
      {accentAnimal ? (
        <div
          style={{
            position: 'absolute',
            right: 74,
            bottom: 318,
            width: 270,
            height: 270,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255, 212, 59, 0.18), transparent 68%)',
          }}
        >
          <Img
            src={staticFile(accentAnimal.path)}
            style={{
              width: 250,
              height: 250,
              objectFit: 'contain',
              filter: 'drop-shadow(0 20px 26px rgba(0, 0, 0, 0.34))',
            }}
          />
        </div>
      ) : null}
      <div
        style={{
          position: 'absolute',
          left: 74,
          right: 74,
          bottom: 92,
          padding: '30px 36px',
          borderRadius: 34,
          border: '1px solid rgba(255, 212, 59, 0.24)',
          background: 'linear-gradient(90deg, rgba(255, 212, 59, 0.18), rgba(14, 14, 14, 0.94) 30%)',
          boxShadow: '0 26px 48px rgba(0, 0, 0, 0.28)',
        }}
      >
        <div
          style={{
            color: 'rgba(255,255,255,0.60)',
            fontSize: 26,
            fontWeight: 900,
            letterSpacing: 1,
          }}
        >
          MEMORY LINE
        </div>
        <div
          style={{
            marginTop: 12,
            color: THEME.white,
            fontSize: 44,
            lineHeight: 1.3,
            fontWeight: 1000,
          }}
        >
          {memoryLine}
        </div>
      </div>
    </AbsoluteFill>
  );
};
