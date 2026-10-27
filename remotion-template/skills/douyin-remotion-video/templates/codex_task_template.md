# Codex Task: Create A Douyin English Vocabulary Remotion Episode

Use the `douyin-remotion-video` skill.

## Goal

Create a Douyin-style Remotion English vocabulary short video from:

`<word root, prefix, suffix, word list, confusing words, pronunciation topic, or idea>`

## Requirements

- Remotion + React + TypeScript.
- Black/yellow high-contrast visual style.
- Audio-driven timeline using `src/data/generatedVoiceTimeline.ts`.
- Voice script in `src/data/voiceScript.ts`.
- TTS output in `public/audio/`.
- Select a suitable BGM from `bgmRegistry` based on this episode's rhythm and set `bgmVolume` to the default `0.32` unless the track clearly needs adjustment.
- Keep voice ducking at `0.65` during narration and keep the BGM safety cap at `0.32`.
- Bottom subtitle bar synced to generated voice timeline.
- Current segment controls active scene, active keyword, subtitle, and punch zoom.

## Content

Topic: `<topic>`

Audience: `<viewer>`

Core promise: `<what viewers remember about the words>`

BGM: `<choose from bgmRegistry; prefer energetic or tech unless the hook needs suspense>`

Key words:

1. `<word 1>`
2. `<word 2>`
3. `<word 3>`

## Deliverables

- Updated Remotion code and data files.
- Generated voiceover if `DASHSCOPE_API_KEY` is available.
- Final MP4.
- Brief summary of changed files and commands.

## Validation

- Run `npx tsc --noEmit`.
- Render key still frames.
- Run `npm run render`.
