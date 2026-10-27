# Workflow

## 1. Prepare The Episode

Create an episode brief from the English vocabulary topic.

Use `templates/episode_brief_template.md` and decide:

- Topic.
- Target viewer.
- Core promise.
- First-three-second hook.
- Key words.
- Final memory line.
- Why this episode is worth following, not just watching once.

For word lists, roots, prefixes, suffixes, or confusing words, extract one memorable learning angle. Do not turn the episode into a dictionary list.

Before writing, answer three account-level questions:

- What is the stop-scroll pain?
- What is the memory shortcut?
- What is the creator attitude on this topic?

## 2. Write Data Files

Create or update:

- `src/data/voiceScript.ts`
- Vocabulary data such as `src/data/words.ts` or a new equivalent file.

Keep narration short and punchy. Use stable IDs:

- `hook`
- `flash-words`
- `same-root` or `pattern-reveal`
- `root-*`
- `word-*`
- `grid-connect`
- `summary`
- `outro`

Do not hardcode root IDs like `root-ject` in new docs or templates. The timeline should follow the current episode data, not one legacy example.

## 3. Build Or Adapt Remotion Scenes

Use data-driven components:

- Hook scene for interruption and fast examples.
- Core root/prefix/suffix reveal scene.
- One-by-one explanation scene.
- Structure/grid scene.
- Summary scene.
- Subtitle bar.

Use shared motion helpers in `src/utils/motion.ts`.

Explosion rule:

- one dominant idea per beat
- one visible state change every 0.5-1.2 seconds in the opening
- one layout-level rebalance every 2 seconds or less

## 4. Generate Voice

Set the key in the current shell:

```powershell
$env:DASHSCOPE_API_KEY="your-key"
```

Run:

```powershell
npm run voice
```

Expected outputs:

- `public/audio/segments/001.mp3`
- `public/audio/main-voice.mp3`
- `src/data/generatedVoiceTimeline.ts`

If `instruction` fails, retry:

```powershell
$env:DASHSCOPE_TTS_USE_INSTRUCTION="false"
npm run voice
```

## 5. Sync Timing

`src/timeline.ts` should derive scene timing from `generatedVoiceTimeline`.

Rules:

- Current subtitle: active generated timeline segment.
- Current word: active `word-*` segment.
- Scene transitions: derived from real segment IDs.
- Repeated flashing: based on progress through the active segment.

Avoid stale fixed timings. A bug to watch for: fast word flashing hardcoded by frame count will freeze when the real voice segment becomes longer. Use proportional progress inside the segment.

## 6. Preview And QA

Run:

```powershell
npm run preview -- --port=3000
npx tsc --noEmit
```

Render stills around key beats:

```powershell
npx remotion still src/index.ts RootWordTemplate out/check-150.png --frame=150 --scale=0.5
```

Check `references/quality_rules.md`.

## 7. Export

Run:

```powershell
npm run render
```

Required output for every episode:

```text
episode/exports/<episode>.mp4
episode/exports/<episode>_cover.png
episode/exports/<episode>_caption.txt
episode/exports/<episode>_publish_notes.md
```

Rules:

- Every episode must have a cover image. Do not consider an episode complete if only the MP4 exists.
- Every episode must have a release caption. Do not consider an episode complete if the MP4 and cover exist but no caption exists.
- The cover must follow the unified black/yellow series style.
- The cover must show creator branding `小猪盖被`.
- The cover should use the shared local animal asset system only when it helps the theme or branding.
- The cover should be readable at Douyin thumbnail size, so keep the memory line short and the keyword count tight.
- The caption should be around 150 Chinese characters and include built-in `#` tags suitable for direct Douyin posting.

## 8. Anti-Template Upgrade

Current flow is usable, but future episodes should be harder to predict when a viewer binge-watches them.

Required variation dimensions across adjacent episodes:

- hook shell
- conflict copy
- memory metaphor
- creator tone
- ending button
- cover headline grammar

If three adjacent episodes feel like the same edit with a different root, the batch fails.
