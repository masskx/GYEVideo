# Prompt: Sync Audio Timeline

Use the `douyin-remotion-video` skill.

The video and voiceover are out of sync. Inspect `src/data/generatedVoiceTimeline.ts`, `src/timeline.ts`, and the scene components.

Fix the project so:

- Active subtitle comes from generated timeline.
- Current scene comes from generated timeline IDs.
- Current keyword/word comes from active segment.
- Repeated flashing or word cycling uses segment progress, not fixed frame counts.
- Punch zoom happens at the start of the active segment.

Render still frames around the broken section and re-export the final MP4.
