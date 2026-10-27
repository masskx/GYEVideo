# Subtitle Rules

## Source Of Truth

Subtitles should come from `generatedVoiceTimeline.ts` after voice generation.

Fallback:

- `voiceScript.ts` may provide initial `subtitle`.
- A manually written `subtitles.ts` can exist for early prototyping.
- Once audio exists, Remotion should read generated start/end times.

## Subtitle Item Shape

```ts
{
  id: 'word-reject',
  start: 11.112,
  end: 14.712,
  text: 'reject：投回去，就是拒绝、排斥',
  audio: '/audio/segments/005.mp3',
}
```

## Text Rules

- Keep subtitles shorter than narration when needed.
- Prefer one strong phrase over full transcript.
- Use slashes for compact formulas: `ject = throw / 投出去`.
- Avoid long punctuation-heavy sentences.
- English words should be readable and not buried in Chinese.

## Placement

Current project pattern:

- Bottom subtitle bar.
- Left yellow progress strip.
- Dark translucent background.
- White bold subtitle text.
- Yellow progress fill linked to current segment progress.

Recommended dimensions for `960x720`:

- Left/right: about `48px`
- Bottom: about `34px`
- Height: about `70px`
- Font size: `26-30px`

## Sync Logic

At render time:

1. Convert current frame to seconds.
2. Find active generated timeline item.
3. Show its `text`.
4. Use `(currentSecond - start) / (end - start)` for progress.

Do not hand-maintain subtitle timing after voice generation.

## Highlighting

Use scene-level keyword highlights rather than putting too much styling inside subtitles:

- Active word gets yellow and punch zoom.
- Subtitle remains stable and readable.
- Important terms may appear in the main visual layer as huge text.
