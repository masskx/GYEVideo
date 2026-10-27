import React from 'react';
import {AbsoluteFill, useCurrentFrame} from 'remotion';
import {captionNews} from '../data/captionNews';
import {EpisodeAudio, fadeOut} from '../core/audio';
import {useFonts} from '../core/fonts';
import {mulberry} from '../core/motion';
import {FPS, HEIGHT, WIDTH} from '../core/timeline';
import {SCENE_COMPONENTS} from './scenes';
import {CAPTION_NEWS} from './schedule';
import {CAPTION_NEWS_FONTS, FONT, NEWS} from './theme';

// reading-caption-news: 双语新闻阅读 (Caption News). Skill: skills/reading-caption-news.
// No footage: the captions are the lead actor over a flat ground; hard cuts on the beat.

const Ground: React.FC<{t: number; index: number}> = ({t, index}) => {
  const base = NEWS.grounds[index % NEWS.grounds.length];
  const rand = mulberry(Math.floor(t * 15) + 5);
  let grain = '';
  for (let i = 0; i < 180; i++) {
    const x = rand() * WIDTH;
    const y = rand() * HEIGHT;
    grain += `M${x.toFixed(0)},${y.toFixed(0)}h2v2h-2z`;
  }
  return (
    <AbsoluteFill style={{background: base}}>
      <AbsoluteFill style={{background: `linear-gradient(${120 + Math.sin(t * 0.3) * 10}deg, rgba(255,210,63,0.06), transparent 40%, rgba(255,255,255,0.04) 70%, transparent)`}} />
      <svg width={WIDTH} height={HEIGHT} style={{position: 'absolute'}}>
        <path d={grain} fill="rgba(255,255,255,0.08)" />
      </svg>
    </AbsoluteFill>
  );
};

const Hud: React.FC = () => (
  <div style={{position: 'absolute', left: 56, right: 56, top: 100, display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
    <div style={{display: 'flex'}}>
      <div style={{background: NEWS.white, color: NEWS.ink, fontFamily: FONT.zhBold, fontSize: 28, padding: '4px 14px'}}>双语新闻阅读</div>
      <div style={{background: NEWS.yellow, color: NEWS.ink, fontFamily: FONT.mono, fontSize: 26, padding: '6px 14px'}}>No.{captionNews.newsNo}</div>
    </div>
    <div style={{fontFamily: FONT.mono, fontSize: 24, color: NEWS.zh}}>{captionNews.kicker.en} · READING</div>
  </div>
);

export const ReadingCaptionNewsVideo: React.FC = () => {
  useFonts(CAPTION_NEWS_FONTS);
  const frame = useCurrentFrame();
  const t = frame / FPS;
  const timing = CAPTION_NEWS.sceneAt(t);
  const Component = SCENE_COMPONENTS[timing.scene.kind];
  return (
    <AbsoluteFill style={{background: NEWS.ink}}>
      <Ground t={t} index={timing.index} />
      <Component timing={timing} t={t} />
      <Hud />
      <AbsoluteFill style={{background: NEWS.ink, opacity: 1 - fadeOut(frame, CAPTION_NEWS.duration)}} />
      <EpisodeAudio lines={CAPTION_NEWS.lines} cues={CAPTION_NEWS.cues} silences={CAPTION_NEWS.silences} duration={CAPTION_NEWS.duration} isVoiceActive={CAPTION_NEWS.isVoiceActive} />
    </AbsoluteFill>
  );
};
