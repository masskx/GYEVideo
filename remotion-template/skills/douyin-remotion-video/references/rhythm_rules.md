# Rhythm Rules

## First Three Seconds

The opening must answer: why should the viewer keep watching?

Recommended structure:

- 0-1s: urgent hook, usually one sentence.
- 1-2s: fast visual evidence or examples.
- 2-3s: reveal the hidden pattern or promise.

For vocabulary/explainer videos:

- Hook: "别再硬背单词了！"
- Fast examples: several related words flash.
- Pattern: "它们都藏着同一个词根。"

## Beat Density

- Visual state should change every 1-2 seconds.
- Large keyword scenes can hold longer only if audio is still actively explaining.
- Use short transitions, not long scene fades.
- Every important spoken keyword should trigger a punch zoom or highlight.

## Scene Rhythm

Typical sequence:

1. Hook.
2. Fast examples or problem.
3. Pattern reveal.
4. Central word pattern slam.
5. One-by-one explanation.
6. Grid/structure summary.
7. Final memory formula.
8. Clean hold for editing.

## Timing Source

Prefer audio-derived timing:

- Generate each TTS line separately.
- Measure durations with `ffprobe`.
- Write `generatedVoiceTimeline.ts`.
- Derive scene start/end from IDs such as `hook`, `flash-words`, `word-reject`, `summary`.

Avoid stale fixed timings. A bug to watch for: fast word flashing hardcoded by frame count will freeze when the real voice segment becomes longer. Use proportional progress inside the segment.

For the 046-style orbit/bubble opening:

- Derive bubble reveal starts from the real `flash-words` segment duration.
- Reveal one bubble per spoken word and keep earlier bubbles visible.
- Avoid fixed rapid slots such as 9 frames per word; they feel rushed when TTS is slower.
- Use restrained orbit movement, usually around a quarter turn across the whole segment.
- The active center word should change with the same proportional segment progress as the bubbles.

## Transitions

Use:

- 2-3 frame yellow flash between major sections.
- Punch zoom on root, formula, and current word.
- Brief shake on hard reveals.
- Sweep highlight under current keyword.

Do not overuse transitions between every tiny detail; the result should feel energetic, not chaotic.

## Pacing Targets

For Douyin-style English vocabulary videos:

- Line length: usually 1-2 seconds when possible.
- Long explanations should be split into separate lines.
- Keep individual visual ideas short.
- If generated TTS is longer than expected, let visuals follow audio rather than cutting audio abruptly.

## Silence And Holds

- Keep pauses short in the body.
- Use final 1-2 seconds as a hold for editing.
- Do not leave a static screen with no audio-driven reason.
