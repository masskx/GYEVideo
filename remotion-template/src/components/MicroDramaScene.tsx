import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {sentenceExamples} from '../data/sentencePattern';
import {sentenceVideoMeta} from '../sentenceVideoMeta';
import {THEME} from '../theme';
import {getActiveVoiceSegment, secondsToFrames, SENTENCE_TIMELINE} from '../sentenceTimeline';
import {DialogueBubbleScene} from './DialogueBubbleScene';
import {DontSaySayScene} from './DontSaySayScene';

const clamp = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'} as const;

const sceneIds = new Set([
  'meaning-hit',
  'micro-scene-1',
  'micro-scene-2',
  'example-1',
  'example-1-breakdown',
  'example-2',
  'example-2-breakdown',
  'example-3',
  'example-3-breakdown',
]);

export const MicroDramaScene: React.FC = () => {
  const frame = useCurrentFrame();
  const active = getActiveVoiceSegment(frame);
  if (!active || !sceneIds.has(active.id)) {
    return null;
  }

  const start = secondsToFrames(SENTENCE_TIMELINE.meaningStart);
  const end = secondsToFrames(SENTENCE_TIMELINE.scene2End);
  const opacity = interpolate(frame, [start - 4, start + 4, end - 5, end], [0, 1, 1, 0], clamp);
  const baseId = active.id.replace('-breakdown', '');
  const activeExample = sentenceExamples.find((example) => example.id === baseId) ?? sentenceExamples[0];
  const breakdown = active.id.endsWith('-breakdown');

  let content: React.ReactNode;
  if (sentenceVideoMeta.rhythmType === 'dialogue') {
    content = (
      <DialogueBubbleScene
        leftLabel="THEY THINK"
        leftText={breakdown ? activeExample.zh : activeExample.slotA ?? activeExample.en}
        rightLabel="YOU SEND"
        rightText={breakdown ? activeExample.en : activeExample.slotB ?? sentenceVideoMeta.earwormLine}
      />
    );
  } else if (sentenceVideoMeta.rhythmType === 'upgrade' || sentenceVideoMeta.rhythmType === 'meme') {
    content = (
      <DontSaySayScene
        wrongLine={activeExample.slotA ?? activeExample.en}
        betterLine={activeExample.slotB ?? sentenceVideoMeta.earwormLine}
      />
    );
  } else {
    content = (
      <div
        style={{
          width: 940,
          padding: '34px 36px',
          borderRadius: 34,
          background: 'rgba(10,10,10,0.84)',
          border: '1px solid rgba(255,255,255,0.12)',
          boxShadow: '0 18px 36px rgba(0,0,0,0.32)',
          textAlign: 'center',
        }}
      >
        <div style={{color: THEME.gray, fontSize: 24, fontWeight: 1000}}>
          {activeExample.sceneHint || sentenceVideoMeta.sceneMetaphor}
        </div>
        <div style={{marginTop: 20, color: THEME.yellow, fontSize: 64, lineHeight: 1.08, fontWeight: 1000}}>
          {breakdown ? activeExample.en : activeExample.slotA ?? activeExample.en}
        </div>
        <div style={{marginTop: 18, color: THEME.white, fontSize: 42, lineHeight: 1.22, fontWeight: 900}}>
          {activeExample.zh}
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        opacity,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {content}
    </div>
  );
};
