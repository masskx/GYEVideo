---
name: douyin-remotion-read-aloud-vocab
description: Build Douyin/TikTok-style scene vocabulary shorts using a high-density Chinese story board with embedded English words, direct mixed Chinese-English reading, synchronized word explanation cards, top challenge progress, Remotion, and Alibaba DashScope CosyVoice TTS.
---

# Douyin Remotion Scene Vocab

Use this skill when the output should be a short-video vocabulary episode where Chinese carries the story and English target words are embedded as memory points.

Do not build an English reading page for this skill. The main screen must be a high-density Chinese learning board.

## Core Goal

Turn a relatable life scene into a 25-35 second black/yellow vocabulary short where viewers:

- first see the full Chinese story with embedded English words,
- understand the scene without reading a full English passage,
- hear the script read directly: Chinese is read as Chinese, embedded English words are read as English,
- watch each English word become active as it is read,
- see the small Chinese gloss appear under the word at the same time,
- see a bottom word card with phonetic, part of speech, meaning, and scene phrase,
- feel top progress moving toward completion.

The video should feel like “中文语境 + 英文关键词嵌入”. Do not add opening lectures, word explanations, or extra teaching commentary unless the user explicitly asks for them.

## Inputs

Typical inputs:

- A scene, topic, English source, word list, or reference video.
- Optional target viewer, difficulty, desired duration, or account theme.
- Default visual reference: local `a27c9ba194d11fd31795e34b2856bbe4.mp4`, adapted to the project black/yellow theme.

## Outputs

Each episode should output:

- `read-aloud-episodes/<episodeId>/brief.md`
- `read-aloud-episodes/<episodeId>/source/passage.txt`
- `read-aloud-episodes/<episodeId>/data/readingPassage.ts`
- `read-aloud-episodes/<episodeId>/data/voiceScript.ts`
- `read-aloud-episodes/<episodeId>/data/episodeConfig.ts`
- `read-aloud-episodes/<episodeId>/data/generatedVoiceTimeline.ts`
- `read-aloud-episodes/<episodeId>/audio/main-voice.mp3`
- final MP4, cover, caption, publish notes, and notes.

## Core Workflow

1. Read `references/material_sourcing.md` and pick one relatable scene first, such as early class panic, exam week collapse, fake library study, Monday office fatigue, or diet failure.
2. Choose 10-12 scene-high-value words. Prefer words that carry emotion, conflict, physical state, action, or memory value.
3. Write one compact Chinese story where the English words are naturally embedded inside Chinese clauses.
4. Before writing code, do a story-board fit check: the final `storyLines` must fit on one 960x720 board, normally 5-6 lines, never more than 7 lines unless the Remotion template has an explicit paging/scrolling implementation.
5. Write `readingPassage.ts` as the canonical source with `storyLines` and `targetWords`.
   - Every target word must appear in `storyLines`; do not rely on the bottom word card as the only place a word appears.
   - Prefer 1-2 target words per line. For 12 words, use 6 short lines.
   - Keep each rendered story line short enough to avoid wrapping into a hidden extra line.
6. For every target word include: `id`, `word`, `phonetic`, `partOfSpeech`, `meaning`, `scenePhrase`, `sceneMeaning`, and `order`.
7. Write `voiceScript.ts` with stable IDs: `word-<id>` for every target word. Optional `hook` or `summary` is only for user-requested special cases.
8. Voiceover should directly read the mixed Chinese-English story. Chinese text is read in Chinese; target words are read in English. Do not explain the words in the voiceover.
9. Configure `episodeConfig.ts` with `type: 'read-aloud-vocab'`, 960x720, 30fps, BGM, cover data, and a 25-35 second duration target.
10. Run `npm.cmd run episode:use -- ../read-aloud-episodes/<episodeId>`.
11. Run `npm.cmd run voice` when `DASHSCOPE_API_KEY` is available.
12. Render and verify with `npm.cmd run render`.

## Visual Rules

Read `references/visual_rules.md` before building or reviewing the Remotion scenes.

Default look:

- 960x720 black/yellow vocabulary-video canvas.
- Top 60px category bar and moving challenge progress block.
- Middle high-density Chinese story board.
- Embedded English target words use black/yellow highlight and a red underline/mark.
- Small Chinese gloss under each target word is hidden at first and appears when that word is read.
- Bottom current-word card shows word, phonetic, part of speech, meaning, and scene phrase.
- Lowest 60-70px music-player/waveform decoration bar.

## Content Rules

Read `references/content_rules.md` before selecting words or writing the voice script.
Read `references/material_sourcing.md` before turning a new source into an episode.
Use `references/qa_checklist.md` before shipping.

Avoid:

- making an English reading page,
- explaining isolated dictionary meanings in the voiceover,
- adding a spoken opening hook before reading the story,
- showing all glosses from the first frame,
- creating a story that needs more than one board when the template only shows one board,
- placing some target words only in the voiceover or bottom card but not in the main story board,
- stretching the video beyond 35 seconds,
- choosing words that do not fit the scene,
- turning the output into a pure subtitle朗读 video.

## Material Workflow

For new materials, use `templates/material_intake_template.md` before writing code. The pipeline is:

raw source -> scene hook -> emotional curve -> candidate words -> final embedded story -> target-word cards -> direct mixed reading voice script.

## Project Commands

```powershell
cd F:\抖音英语卡片视频\remotion-template
npm.cmd run episode:use -- ../read-aloud-episodes/001_prevalent_habits
npm.cmd run voice
cmd /c node_modules\.bin\tsc.cmd --noEmit
npm.cmd run render
```

## Safety Rules

- Never write API keys into files.
- Use `DASHSCOPE_API_KEY` from the environment.
- Do not load remote BGM, icons, or reference media during render.
- Do not copy the reference video's source text unless the user explicitly owns/provides it.
- Keep all word switching and reveal timing driven by `generatedVoiceTimeline.ts`.
- Do not ship without cover, caption, publish notes, and notes.
- Do not ship if `references/qa_checklist.md` fails on content, visual, audio, or export QA.
