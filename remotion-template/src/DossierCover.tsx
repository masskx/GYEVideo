import React from 'react';
import {AbsoluteFill} from 'remotion';
import {dossier} from './data/dossier';
import {episodeConfig} from './data/episodeConfig';
import {PigDetective} from './dossier/PigDetective';
import {Chip, Halftone, HalftoneGlyph, PaperGround, PaperOverlay, PopText, PrintCard, radialField, Stamp, useDossierFonts} from './dossier/print';
import {FONT, INK} from './dossier/theme';

// Every element is drawn at its settled state (t far past every entrance).
const SETTLED = 100;

export const DossierCover: React.FC = () => {
  useDossierFonts();
  const cover = episodeConfig.cover ?? {};
  const headline = cover.headline ?? dossier.title;
  const words = cover.highlightWords ?? dossier.words.map((word) => word.word);

  return (
    <AbsoluteFill style={{background: '#FFFFFF'}}>
      <PaperGround />
      <Halftone cacheKey="cover-glow" w={1080} h={1920} color={INK.highlight} step={24} angle={15} density={radialField(980, 260, 900, 1, 0)} />
      <div style={{position: 'absolute', top: 110, left: 70, display: 'flex', gap: 14}}>
        <Chip size={32}>案卷 No.{dossier.caseNo}</Chip>
        <Chip size={32} ink={INK.highlight} text={INK.ink}>
          {cover.badgeText ?? '高考词汇案卷'}
        </Chip>
      </div>
      <div style={{position: 'absolute', top: 250, left: 70, width: 960}}>
        <PopText text={headline} t={SETTLED} at={0} size={Math.min(120, Math.floor(930 / Array.from(headline).length))} />
      </div>
      <div style={{position: 'absolute', left: 120, top: 500}}>
        <HalftoneGlyph id="cover-root" text={dossier.root.text} size={440} fill={INK.highlight} dots={INK.overprint} width={860} height={520} />
        <svg width={860} height={520} style={{position: 'absolute', overflow: 'visible'}}>
          <text x={0} y={520 * 0.82} fontFamily={FONT.display} fontSize={440} fill="none" stroke={INK.ink} strokeWidth={11}>
            {dossier.root.text}
          </text>
        </svg>
      </div>
      <div style={{position: 'absolute', left: 70, top: 1060, width: 940}}>
        <PrintCard fill={INK.ink} shadow={INK.highlight} style={{padding: '26px 36px'}}>
          <div style={{fontFamily: FONT.headline, fontSize: 84, color: INK.highlight}}>{cover.memoryLine ?? `${dossier.root.text} = ${dossier.root.en}`}</div>
          <div style={{fontFamily: FONT.sans, fontSize: 40, color: INK.paperLight, marginTop: 8}}>{cover.subHeadline}</div>
        </PrintCard>
      </div>
      <div style={{position: 'absolute', left: 70, top: 1380, width: 940, display: 'flex', flexWrap: 'wrap', gap: 14}}>
        {words.map((word, i) => (
          <Chip key={word} size={36} ink={i % 2 === 0 ? INK.overprint : INK.ink}>
            {word}
          </Chip>
        ))}
      </div>
      <Stamp id="cover-stamp" text="高考高频" t={SETTLED} at={0} size={86} rotate={9} style={{left: 600, top: 400}} />
      <PigDetective id="pig-cover" t={0.4} face="squint" pose="inspect" size={300} style={{left: 730, top: 1500}} />
      <div style={{position: 'absolute', left: 70, top: 1600, fontFamily: FONT.hand, fontSize: 58, color: INK.stamp}}>{cover.retentionPrompt}</div>
      <div style={{position: 'absolute', left: 70, top: 1700, fontFamily: FONT.sans, fontSize: 44, color: INK.ink}}>
        {cover.creatorName ?? '小猪盖被'} · 高考词汇案卷
      </div>
      <PaperOverlay t={0} />
    </AbsoluteFill>
  );
};
