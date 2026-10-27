# Workflow

## 1. Brief

Start from `templates/material_intake_template.md` when the material is new or vague.

Create a short brief with:

- scene hook,
- target viewer,
- 10-12 target words,
- Chinese story draft,
- memory chain,
- visual reference note,
- QA notes.

## 2. Data

Before writing data, check `references/material_sourcing.md`:

- the source has a concrete scene,
- the scene can hold 10-12 words naturally,
- the mixed script can be read in 25-35 seconds,
- every word has a reason to appear in that scene.

Create `readingPassage.ts` first. It is the canonical file.

The main text must be `storyLines`: Chinese text tokens plus embedded English word tokens.

Every target word must include:

- `id`
- `word`
- `phonetic`
- `partOfSpeech`
- `meaning`
- `scenePhrase`
- `sceneMeaning`
- `order`

Then create `voiceScript.ts` and `episodeConfig.ts`.

Voice script IDs must be:

- `word-<wordId>` for every target word

The voice script should read the story itself. Do not write word-explanation narration unless explicitly requested.

## 3. Sync

Run:

```powershell
npm.cmd run episode:use -- ../read-aloud-episodes/<episodeId>
```

This copies `readingPassage.ts`, `voiceScript.ts`, `episodeConfig.ts`, `generatedVoiceTimeline.ts`, and audio into the template.

## 4. Voice

Run:

```powershell
npm.cmd run voice
```

Expected outputs:

- `public/audio/main-voice.mp3`
- `public/audio/segments/`
- `src/data/generatedVoiceTimeline.ts`
- copied generated artifacts back to the active episode.

## 5. QA

Run:

```powershell
cmd /c node_modules\.bin\tsc.cmd --noEmit
npm.cmd run render
```

Check:

- main visual is a Chinese story board, not an English reading page,
- top moving progress block is visible,
- active word is highlighted in the story,
- inline glosses reveal progressively,
- current word card updates from the real voice timeline,
- bottom music-player bar does not cover key text,
- duration stays between 25 and 35 seconds,
- caption and publish notes are exported.

Also run through `references/qa_checklist.md` before calling the episode complete.
