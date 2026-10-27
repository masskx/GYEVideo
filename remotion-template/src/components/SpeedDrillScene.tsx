import React from 'react';
import {useCurrentFrame} from 'remotion';
import {sentenceVideoMeta} from '../sentenceVideoMeta';
import {THEME} from '../theme';
import {getActiveVoiceSegment} from '../sentenceTimeline';

export const SpeedDrillScene: React.FC = () => {
  const frame = useCurrentFrame();
  const active = getActiveVoiceSegment(frame);
  if (!active || (active.id !== 'speed-drill' && active.id !== 'drill')) {
    return null;
  }

  const lines = sentenceVideoMeta.chorusLines.slice(0, 2);

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div style={{width: 920, textAlign: 'center'}}>
        <div style={{color: THEME.gray, fontSize: 28, fontWeight: 1000, letterSpacing: 2}}>SLOW / NORMAL / FAST</div>
        <div style={{marginTop: 18, display: 'grid', gap: 18}}>
          {['SLOW', 'NORMAL', 'FAST'].map((speed, index) => (
            <div
              key={speed}
              style={{
                padding: '20px 26px',
                borderRadius: 28,
                background: index === 2 ? 'rgba(255,212,59,0.16)' : 'rgba(255,255,255,0.06)',
                border: `1px solid ${index === 2 ? THEME.yellow : 'rgba(255,255,255,0.10)'}`,
              }}
            >
              <div style={{fontSize: 22, fontWeight: 1000, color: index === 2 ? THEME.yellow : THEME.gray}}>
                {speed}
              </div>
              <div style={{marginTop: 10, fontSize: 48 + index * 6, lineHeight: 1.08, fontWeight: 1000, color: THEME.white}}>
                {lines.join(' / ')}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
