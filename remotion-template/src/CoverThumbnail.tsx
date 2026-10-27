import React from 'react';
import {AbsoluteFill, Img, staticFile} from 'remotion';
import {coverData} from './data/coverData';
import {getAnimalIconById, getFallbackAnimalIcon} from './data/animalIconRegistry';
import {FONT_STACK, THEME} from './theme';

const wordCardPositions = [
  {left: 78, top: 1090, rotate: '-4deg'},
  {left: 518, top: 1000, rotate: '3deg'},
  {left: 160, top: 1318, rotate: '-1deg'},
];

const buildRootDisplay = (rootText: string) => {
  const normalized = rootText.trim();
  const slashParts = normalized.split('/');
  const canSplitOnSlash = slashParts.length === 2 && normalized.length >= 8;

  if (canSplitOnSlash) {
    return {
      text: `${slashParts[0]}/\n${slashParts[1]}`,
      fontSize: 208,
      letterSpacing: -4,
      lineHeight: 0.8,
      marginTop: 18,
      maxWidth: 860,
      whiteSpace: 'pre-line' as const,
    };
  }

  if (normalized.length >= 11) {
    return {
      text: normalized,
      fontSize: 180,
      letterSpacing: -3,
      lineHeight: 0.88,
      marginTop: 20,
      maxWidth: 860,
      whiteSpace: 'normal' as const,
    };
  }

  if (normalized.length >= 8) {
    return {
      text: normalized,
      fontSize: 210,
      letterSpacing: -4,
      lineHeight: 0.86,
      marginTop: 22,
      maxWidth: 860,
      whiteSpace: 'normal' as const,
    };
  }

  return {
    text: normalized,
    fontSize: 250,
    letterSpacing: -6,
    lineHeight: 0.88,
    marginTop: 26,
    maxWidth: 860,
    whiteSpace: 'normal' as const,
  };
};

export const CoverThumbnail: React.FC = () => {
  const creatorAnimal =
    getAnimalIconById(coverData.creatorAnimalId) ??
    getAnimalIconById(coverData.accentAnimalId) ??
    getFallbackAnimalIcon();
  const accentAnimal = getAnimalIconById(coverData.accentAnimalId) ?? creatorAnimal;
  const rootDisplay = buildRootDisplay(coverData.rootText);

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
        {coverData.badgeText}
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
            {coverData.creatorName}
          </div>
        </div>
      </div>
      <div
        style={{
          position: 'absolute',
          left: 90,
          top: 250,
          width: 900,
        }}
      >
        <div
          style={{
            color: THEME.white,
            fontSize: 76,
            lineHeight: 1.14,
            fontWeight: 1000,
            letterSpacing: -1,
          }}
        >
          {coverData.headline}
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
          {coverData.subHeadline}
        </div>
      </div>
      <div
        style={{
          position: 'absolute',
          left: 92,
          top: 540,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          zIndex: 2,
        }}
      >
        <div
          style={{
            color: THEME.yellow,
            fontSize: rootDisplay.fontSize,
            lineHeight: rootDisplay.lineHeight,
            fontWeight: 1000,
            textShadow: '0 0 56px rgba(255, 212, 59, 0.52)',
            letterSpacing: rootDisplay.letterSpacing,
            maxWidth: rootDisplay.maxWidth,
            whiteSpace: rootDisplay.whiteSpace,
            wordBreak: 'break-word',
          }}
        >
          {rootDisplay.text}
        </div>
        <div
          style={{
            marginTop: rootDisplay.marginTop,
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
            ROOT MEANING
          </div>
          <div
            style={{
              marginTop: 10,
              color: THEME.white,
              fontSize: 52,
              fontWeight: 1000,
            }}
          >
            {coverData.rootMeaning}
          </div>
        </div>
      </div>
      {coverData.highlightWords.map((word: string, index: number) => {
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
            <div
              style={{
                color: THEME.yellow,
                fontSize: 58,
                fontWeight: 1000,
                lineHeight: 1,
              }}
            >
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
          {coverData.memoryLine}
        </div>
      </div>
    </AbsoluteFill>
  );
};
