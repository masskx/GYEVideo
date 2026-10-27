---
name: douyin-remotion-video
description: Build Douyin/TikTok-style English vocabulary short videos using Remotion, Codex, and Alibaba DashScope CosyVoice TTS. Use only for English word-learning episodes such as word roots, prefixes, suffixes, related word groups, confusing words, pronunciation, meaning contrasts, and vocabulary memory cards with high-contrast black/yellow visuals, subtitle bars, and audio-driven timelines.
---

# Douyin Remotion Video

Use this skill when the user wants to turn English vocabulary material into a punchy Douyin-style word-learning short video, especially:

- A word root, prefix, suffix, word family, confusing word pair, or vocabulary list needs to become a short video.
- An English-learning Remotion project needs a black/yellow high-contrast vocabulary-card style.
- Alibaba Bailian/DashScope CosyVoice voiceover needs to drive subtitles and timing.
- Existing Remotion scenes need style, rhythm, subtitle, voice, or final-export review.

Do not use this skill for paper explanations, code-module explainers, architecture diagrams, general knowledge videos, or plug-and-play module projects. Those belong to separate skills or projects.

## Inputs

Typical inputs:

- Vocabulary content: target root/affix, word list, meanings, phonetics, example memory angle, or a brief idea for an English-learning episode.
- Episode brief: topic, audience, goal, platform, duration, first-three-second hook, key words.
- BGM assets and registry entries from `public/bgm/`, `shared-assets/bgm/`, and `src/data/bgmRegistry.ts`.
- Local animal icon assets from `public/assets/icons/animals/`, `shared-assets/icons/animals/`, and `src/data/animalIconRegistry.ts`.
- Data files: `src/data/words.ts`, `src/data/voiceScript.ts`, `src/data/episodeConfig.ts`, optional `src/data/subtitles.ts`.
- Existing Remotion project using React + TypeScript.
- Optional reference video or screenshot for English vocabulary visual style.

## Outputs

Expected outputs:

- A runnable English vocabulary Remotion episode.
- Data-driven vocabulary files.
- TTS segments in `public/audio/segments/`.
- Merged voiceover at `public/audio/main-voice.mp3`.
- Audio-derived timeline at `src/data/generatedVoiceTimeline.ts`.
- Final MP4, usually `out/root-word-template.mp4` or an episode-specific output path.
- A Douyin cover image for every episode, exported with the episode deliverables.
- A Douyin caption of around 150 Chinese characters with built-in `#` tags for every episode.

## Core Workflow

1. Read the vocabulary topic and write a short episode brief.
2. Design the first-three-second hook before writing the lesson body. Choose a `hookType`, hook copy, flash words, root text, tone, SFX moments, and optional single animal reaction.
3. Create or update data files, especially `voiceScript.ts` and vocabulary data such as `words.ts`.
4. Configure `episodeConfig.ts`, including `hook`, `bgmId`, `bgmVolume`, `voiceVolume`, and `sfxVolume`.
5. Choose a suitable BGM from `bgmRegistry`, configure the default `bgmVolume: 0.32`, and plan the mix check.
6. Choose 2-4 animal icon moments from `animalIconRegistry` only when they support hook, misconception, root reveal, or summary beats.
7. Build Remotion scenes from data. Keep content, timing, audio mix settings, icon moments, and visual state separate.
8. Generate TTS voiceover with DashScope CosyVoice. Never hardcode the API key.
9. Use `ffprobe` durations to generate `generatedVoiceTimeline.ts`.
10. Drive subtitles, active scene, active keyword, Hook flash words, conflict copy, and punch zoom from `generatedVoiceTimeline`.
11. Render still frames at key beats, especially frames inside 0-3 seconds and any stretched Hook beats after real TTS, then inspect for blank frames, overlap, and poor contrast.
12. Generate a Douyin cover for the episode. Every episode must ship with a cover image; no exceptions.
13. Generate a Douyin caption of around 150 Chinese characters with built-in `#` tags and export it with the release files.
14. Render final MP4 and verify hook interruption, audio/video sync, BGM ducking, BGM volume, animal icon placement, final fade-out, cover readability, and caption quality.

## Files To Load As Needed

- Visual style: `references/visual_rules.md`
- First-three-second hook: `references/hook_rules.md`
- Timing and pacing: `references/rhythm_rules.md`
- DashScope voiceover: `references/voice_rules.md`
- BGM and audio mix: `references/audio_rules.md`
- Animal icon usage: `references/icon_rules.md`
- Subtitle design and sync: `references/subtitle_rules.md`
- Export QA checklist: `references/quality_rules.md`
- End-to-end procedure: `workflow.md`
- Current example: `examples/ject_episode_example.md`

## Preferred Project Pattern

Keep these files data-driven:

- `src/data/voiceScript.ts`: canonical narration and subtitle source for the vocabulary episode.
- `src/data/generatedVoiceTimeline.ts`: generated from real audio durations.
- `src/data/bgmRegistry.ts`: local BGM registry generated from `public/bgm/`.
- `src/data/animalIconRegistry.ts`: local animal icon registry generated from `public/assets/icons/animals/`.
- `src/data/episodeConfig.ts`: per-episode `hook`, `bgmId`, `bgmVolume`, `voiceVolume`, and `sfxVolume`.
- `src/scenes/HookScene.tsx`: the Douyin interruption system with hard cuts, word flashes, conflict copy, payoff, optional local SFX, and at most one animal reaction. It must use `generatedVoiceTimeline`-derived timing after TTS so stretched hook narration does not leave blank frames.
- `src/timeline.ts`: derives scene timing from `generatedVoiceTimeline`.
- `src/components/BackgroundMusic.tsx`: loops BGM, ducks under voice, and fades out at the end.
- `src/components/AnimatedAnimalIcon.tsx`: short, local animal icon reactions for selected emotional beats.
- `src/CoverThumbnail.tsx`: canonical unified Douyin cover template. It should keep the black/yellow look, show creator branding `小猪盖被`, and use local animal icons when appropriate.
- `scripts/generate-release-copy.ts`: canonical release-copy generator for episode caption and publish notes.
- `src/utils/audioMixing.ts`: shared BGM volume, ducking, and fade helpers.
- `src/utils/motion.ts`: shared motion helpers such as `slamIn`, `punchZoom`, `shake`, `flashOpacity`.
- `public/audio/main-voice.mp3`: only generated artifact Remotion should play with `<Audio>`.
- `public/bgm/`: local BGM used by Remotion; do not load BGM from the network during render.
- `public/assets/icons/animals/`: local animal icons used by Remotion; do not load icons from remote URLs during render.

## Safety Rules

- Never write API keys into source files, templates, examples, logs, or docs.
- Use `DASHSCOPE_API_KEY` from the environment.
- Treat generated audio and timelines as replaceable artifacts.
- Do not rely on hardcoded second marks once a generated voice timeline exists.
- Every episode must export a Douyin cover image together with the video deliverables.
- Every episode must export a Douyin caption together with the video deliverables.
- The cover must keep a unified brand style: black background, yellow emphasis, creator name `小猪盖被`, and a readable root-based memory angle.
- The caption should be around 150 Chinese characters, readable as a single Douyin post body, and include `#英语学习` style tags.
- Do not start an episode with a normal title page. The first 0.5-1s must interrupt scrolling with large text or a hard visual hit.
- Do not let Hook visuals end at a fixed 3-second mark after TTS. If the real voice timeline stretches the opening segments, keep matching flash-word and conflict visuals on screen until the root or pattern reveal begins.
- Hook orbit/bubble word flashes must be paced by the real `flash-words` voice segment. Do not use a fixed 8-10 frame slot for every word. Distribute bubble reveal timing across the spoken segment so each word appears as it is heard, with prior words remaining visible.
- Keep orbit rotation restrained. The 046-style opening should feel like words are being collected around one family, not whipped around the screen. A quarter turn across the segment is usually enough.
- Grid/structure scenes must use dynamic symmetric layout based on the actual word count. Do not hardcode an 8-slot layout when the episode has 6 or 7 words; center incomplete rows and verify no word is missing.
- Grid connector lines should connect from the root/card edges and remain behind modules. Do not draw lines through word text or over card content.
- If DashScope `instruction` fails for a system voice, retry without `instruction` while preserving `rate`, `voice`, `model`, and script structure.
- Do not load BGM from remote URLs during Remotion preview or render.
- Do not load animal icons from remote URLs during Remotion preview or render.
- If BGM licensing is unclear, add `license_check_required` to the episode `notes.md`.
- Use the current audio defaults unless there is a documented reason to change them: `bgmVolume: 0.32`, voice ducking factor `0.65`, and BGM safety cap `0.32`.

## Useful Commands

```powershell
npm run voice
npm run preview -- --port=3000
npm run render
npx tsc --noEmit
```

`npm run render` should be treated as the default release command for every episode because it exports both the final video and the Douyin cover image.
`npm run copy` can be used to backfill or refresh only the Douyin caption and publish notes for the active episode.

For keyframe checks:

```powershell
npx remotion still src/index.ts RootWordTemplate out/check.png --frame=150 --scale=0.5
```
