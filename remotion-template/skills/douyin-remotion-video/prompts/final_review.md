# Prompt: Final Review

Use the `douyin-remotion-video` skill.

Do a final delivery review of the current Remotion episode.

Check:

- First three seconds are compelling.
- Hook has a clear interruption within 0.5 seconds.
- Large hook text appears within 1 second.
- Hook creates curiosity or conflict within 2 seconds.
- Hook gives a concrete payoff within 3 seconds.
- Hook avoids a normal PPT title-page feeling.
- Hook uses strong rhythm SFX where local SFX files exist.
- Hook gives the viewer a reason to keep watching.
- After TTS, frames around 3s, 5s, 8s, and before root reveal are not blank.
- `flash-words` audio has matching visible word flashes, not subtitles alone.
- `same-root` or conflict narration has matching visible conflict text, not subtitles alone.
- Voice, subtitle, and scene timing are synced.
- No text overlaps.
- Current keyword is dominant.
- Subtitle bar is readable.
- Audio plays in final MP4.
- Voiceover is clear.
- BGM does not mask or compete with the voice.
- BGM uses the current default `bgmVolume: 0.32` unless a documented reason lowers it.
- Voice ducking uses factor `0.65`, and BGM remains under the `0.32` safety cap.
- SFX volume is not harsh or distracting.
- BGM fades out at the end.
- `bgmId` exists in `src/data/bgmRegistry.ts`.
- `licenseNote` is recorded for selected BGM, and unclear licenses are marked in `notes.md`.
- Animal icons do not cover subtitles.
- Animal icons do not cover English keywords or formulas.
- Animal icons are not overused.
- Animal icon emotions match the current beat.
- Animal icons do not weaken the black/yellow fast-paced style.
- The result still feels like a Douyin knowledge video, not children's animation.
- The episode does not feel like a clone of the previous 3 root-word episodes.
- The ending has a memorable creator payoff rather than only a tidy recap.
- The clip gives a follow trigger, identity trigger, or series trigger beyond the pure lesson.
- API key is not written into source files.
- `npx tsc --noEmit` passes.
- `npm run render` completes.

If issues are found, fix them and re-render.
