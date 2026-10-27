import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {sentenceExamples, sentenceInfo} from '../data/sentencePattern';
import {THEME} from '../theme';
import {getActiveExampleIndex, getActiveVoiceSegment, getBreakdownState, secondsToFrames, SENTENCE_TIMELINE} from '../sentenceTimeline';
import {beatPulse, punchZoom, shake} from '../utils/motion';

const clamp = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'} as const;

const sceneRanges = [
  [SENTENCE_TIMELINE.example1Start, SENTENCE_TIMELINE.example1End],
  [SENTENCE_TIMELINE.example2Start, SENTENCE_TIMELINE.example2End],
  [SENTENCE_TIMELINE.example3Start, SENTENCE_TIMELINE.example3End],
] as const;

const renderSentenceWithHighlight = (sentence: string, target: string | undefined, color: string) => {
  if (!target || !sentence.includes(target)) {
    return sentence;
  }

  const [before, ...rest] = sentence.split(target);
  const after = rest.join(target);

  return (
    <>
      {before}
      <span
        style={{
          color,
          textShadow: `0 0 26px ${color === THEME.red ? 'rgba(255,77,77,0.42)' : 'rgba(255,212,59,0.42)'}`,
        }}
      >
        {target}
      </span>
      {after}
    </>
  );
};

const renderDrillFormula = (phase: number) => {
  const drillLines = sentenceInfo.drillLines ?? ['A', 'B', sentenceInfo.memoryFormula];

  if (phase < 0.33) {
    return drillLines[0] ?? sentenceInfo.memoryFormula;
  }

  if (phase < 0.66) {
    return drillLines[1] ?? sentenceInfo.memoryFormula;
  }

  return drillLines[2] ?? sentenceInfo.memoryFormula;
};

export const ExampleDrillScene: React.FC = () => {
  const frame = useCurrentFrame();
  const activeIndex = getActiveExampleIndex(frame);
  const activeSegment = getActiveVoiceSegment(frame);
  const isBreakdown = getBreakdownState(frame);
  const isDrill = activeSegment?.id === 'drill';
  const drillStartFrame = secondsToFrames(SENTENCE_TIMELINE.drillStart);
  const drillEndFrame = secondsToFrames(SENTENCE_TIMELINE.drillEnd);
  const drillPhase = Math.max(0, Math.min(0.999, (frame - drillStartFrame) / Math.max(1, drillEndFrame - drillStartFrame)));
  const overallOpacity = interpolate(
    frame,
    [secondsToFrames(SENTENCE_TIMELINE.example1Start) - 3, secondsToFrames(SENTENCE_TIMELINE.example1Start) + 4, secondsToFrames(SENTENCE_TIMELINE.drillEnd) - 6, secondsToFrames(SENTENCE_TIMELINE.drillEnd) + 2],
    [0, 1, 1, 0],
    clamp,
  );
  const clampedActiveIndex =
    activeIndex >= sentenceExamples.length ? sentenceExamples.length - 1 : activeIndex;

  return (
    <div style={{position: 'absolute', inset: 0, opacity: overallOpacity}}>
      {isDrill ? (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              display: 'flex',
              gap: 18,
            }}
          >
            <div
              style={{
                padding: '16px 24px',
                borderRadius: 999,
                background: 'rgba(255,77,77,0.16)',
                border: `2px solid ${THEME.red}`,
                color: THEME.white,
                fontSize: 28,
                fontWeight: 1000,
              }}
            >
              A = {sentenceInfo.slotALabel ?? 'A'}
            </div>
            <div
              style={{
                padding: '16px 24px',
                borderRadius: 999,
                background: 'rgba(255,212,59,0.14)',
                border: `2px solid ${THEME.yellow}`,
                color: THEME.white,
                fontSize: 28,
                fontWeight: 1000,
              }}
            >
              B = {sentenceInfo.slotBLabel ?? 'B'}
            </div>
          </div>
          <div
            style={{
              marginTop: 38,
              color: THEME.yellow,
              fontSize: 116,
              lineHeight: 1,
              fontWeight: 1000,
              textAlign: 'center',
              textShadow: '0 0 40px rgba(255,212,59,0.38)',
              transform: `scale(${punchZoom({frame, start: drillStartFrame + Math.floor(drillPhase * 24), intensity: 0.08, duration: 8})})`,
            }}
          >
            {renderDrillFormula(drillPhase)}
          </div>
          <div
            style={{
              marginTop: 28,
              color: THEME.white,
              fontSize: 52,
              lineHeight: 1.2,
              fontWeight: 1000,
              textAlign: 'center',
            }}
          >
            {sentenceInfo.memoryFormula}
          </div>
          <div
            style={{
              marginTop: 28,
              color: THEME.white,
              fontSize: 34,
              lineHeight: 1.28,
              fontWeight: 800,
              textAlign: 'center',
            }}
          >
            {(sentenceInfo.summaryLines ?? [sentenceInfo.memoryFormula]).join('，')}
          </div>
        </div>
      ) : null}
      {sentenceExamples.map((example, index) => {
        const [start, end] = sceneRanges[index];
        const startFrame = secondsToFrames(start);
        const endFrame = secondsToFrames(end);
        const visible = frame >= startFrame - 4 && frame <= endFrame + 2;
        if (!visible) {
          return null;
        }

        const localOpacity = interpolate(frame, [startFrame - 2, startFrame + 5, endFrame - 6, endFrame], [0, 1, 1, 0], clamp);
        const active = index === clampedActiveIndex || (clampedActiveIndex === -1 && index === 0);
        const slotAActive = active && (!isBreakdown || activeSegment?.id === example.id);
        const slotBActive = active && isBreakdown;
        const tagHit = shake({frame, start: startFrame + 4, duration: 8, intensity: 4});

        return (
          <div
            key={example.id}
            style={{
              position: 'absolute',
              inset: 0,
              opacity: localOpacity,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {active && example.sceneHint ? (
              <div
                style={{
                  position: 'absolute',
                  right: 92,
                  top: 182,
                  width: 240,
                  padding: '18px 20px 24px',
                  borderRadius: 26,
                  border: '1px solid rgba(255,255,255,0.12)',
                  background: 'rgba(255,255,255,0.06)',
                  color: THEME.white,
                  fontSize: 24,
                  fontWeight: 900,
                  textAlign: 'center',
                }}
              >
                {example.sceneHint}
                <div
                  style={{
                    marginTop: 8,
                    color: 'rgba(255,255,255,0.62)',
                    fontSize: 18,
                    fontWeight: 800,
                  }}
                >
                  {sentenceInfo.memoryFormula}
                </div>
              </div>
            ) : null}
            <div
              style={{
                padding: '14px 22px',
                borderRadius: 999,
                background: 'rgba(255,212,59,0.12)',
                color: THEME.yellow,
                fontSize: 28,
                fontWeight: 1000,
                transform: `translate(${tagHit.x}px, ${tagHit.y}px) rotate(${tagHit.rotate}deg)`,
              }}
            >
              {example.emotion}
            </div>
            <div
              style={{
                marginTop: 34,
                width: 930,
                color: THEME.white,
                fontSize: 78,
                lineHeight: 1.08,
                fontWeight: 1000,
                textAlign: 'center',
                transform: `scale(${active ? beatPulse({frame, start: startFrame + 6, fps: SENTENCE_TIMELINE.fps, amount: 0.01}) : 1})`,
              }}
            >
              {slotBActive
                ? renderSentenceWithHighlight(example.en, example.slotB, THEME.yellow)
                : renderSentenceWithHighlight(example.en, example.slotA, THEME.red)}
            </div>
            <div
              style={{
                marginTop: 30,
                width: 820,
                color: 'rgba(248,248,248,0.88)',
                fontSize: 42,
                lineHeight: 1.3,
                fontWeight: 800,
                textAlign: 'center',
              }}
            >
              {example.zh}
            </div>
            <div
              style={{
                marginTop: 42,
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 20,
                width: 920,
              }}
            >
              <div
                style={{
                  padding: '22px 24px',
                  borderRadius: 26,
                  background: slotAActive ? 'rgba(255,77,77,0.18)' : 'rgba(255,255,255,0.04)',
                  border: `2px solid ${slotAActive ? THEME.red : 'rgba(255,255,255,0.10)'}`,
                  color: THEME.white,
                  fontSize: 34,
                  lineHeight: 1.2,
                  fontWeight: 900,
                  transform: `scale(${slotAActive ? punchZoom({frame, start: startFrame + 8, intensity: 0.08, duration: 10}) : 1})`,
                }}
              >
                <div style={{fontSize: 20, color: 'rgba(255,255,255,0.58)', marginBottom: 10}}>
                  Slot A / {sentenceInfo.slotALabel ?? 'A'}
                </div>
                {example.slotA}
              </div>
              <div
                style={{
                  padding: '22px 24px',
                  borderRadius: 26,
                  background: slotBActive ? 'rgba(255,212,59,0.16)' : 'rgba(255,255,255,0.04)',
                  border: `2px solid ${slotBActive ? THEME.yellow : 'rgba(255,255,255,0.10)'}`,
                  color: THEME.white,
                  fontSize: 34,
                  lineHeight: 1.2,
                  fontWeight: 900,
                  transform: `scale(${slotBActive ? punchZoom({frame, start: startFrame + 18, intensity: 0.08, duration: 10}) : 1})`,
                }}
              >
                <div style={{fontSize: 20, color: 'rgba(255,255,255,0.58)', marginBottom: 10}}>
                  Slot B / {sentenceInfo.slotBLabel ?? 'B'}
                </div>
                {example.slotB}
              </div>
            </div>
            <div
              style={{
                marginTop: 28,
                width: 860,
                color: active ? THEME.yellow : 'rgba(255,255,255,0.70)',
                fontSize: 28,
                lineHeight: 1.25,
                fontWeight: 800,
                textAlign: 'center',
              }}
            >
              {example.usageNote}
            </div>
          </div>
        );
      })}
    </div>
  );
};
