# Quality Rules

Use this checklist before delivering an episode.

## Content

- The first three seconds have a clear hook.
- The viewer knows why the topic matters.
- Each line teaches one idea.
- No line sounds like textbook narration unless intentionally academic.
- The final summary is memorable.
- The creator attitude is visible and not anonymous.
- The episode has a reason to follow, comment, or continue the series.
- The episode creates at least one sticky payoff after the main explanation: memory shortcut, social flex, or comment impulse.
- The script does not feel like "8 dictionary cards in a row".

## Visual

- Black/yellow theme is consistent.
- Current keyword dominates the screen.
- Supporting text does not compete with the main word.
- No text overlaps or gets clipped.
- Subtitles fit inside the bottom bar.
- Grid/network lines do not cover important word text.
- Background texture is subtle enough for readability.
- The result does not look interchangeable with the last root-word episode.
- The cover is readable at thumbnail size and does not rely on long Chinese sentences.
- No frame feels like a static classroom slide for more than 2 seconds.

## Rhythm

- Visual changes happen every 1-2 seconds.
- Flash-word sequences are tied to segment progress, not hardcoded frame slots.
- Current word punch zoom occurs at the start of each word segment.
- Scene changes align with generated voice timeline.
- The final hold is long enough for editing.
- The ending payoff feels intentional, not only neat.
- The first 3 seconds contain at least 4 visible actions or state shifts.
- The final 3-5 seconds still give value instead of only slowing down to end.

## Voice

- `public/audio/main-voice.mp3` exists.
- `public/audio/segments/*.mp3` exist.
- `generatedVoiceTimeline.ts` was regenerated after the latest voice run.
- Audio does not include the instruction text.
- English keywords are understandable.
- Narration is not too slow for Douyin style.

## Technical

- `npx tsc --noEmit` passes.
- Key still frames render.
- Full `npm run render` completes.
- The final MP4 plays with audio.
- No API key is in committed files.
- Generated files are intentionally included or ignored according to the project policy.
- Timeline logic does not depend on a legacy root like `-ject`; current `root-*` and `word-*` IDs drive the edit.

## Suggested Still Frames

Render frames around:

- Hook: 0.4s.
- Flash words: several points across the segment.
- Root reveal.
- First word explanation.
- Mid word explanation.
- Grid scene.
- Final summary.

Example:

```powershell
npx remotion still src/index.ts RootWordTemplate out/check.png --frame=150 --scale=0.5
```
