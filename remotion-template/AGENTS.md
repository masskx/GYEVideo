# AGENTS.md

## Project Role

This is the single reusable Remotion template for `DouyinVideoFactory`.

Do not duplicate this whole folder for new episodes.
New content belongs under either:

- `../episodes/` for vocabulary videos
- `../sentence-episodes/` for sentence videos

## Episode Workflow

1. Create or edit an episode package.
2. Keep episode-specific data in `episode/data/`.
3. Keep generated voice audio in `episode/audio/`.
4. Sync the episode into this template.

Vocabulary:

```powershell
npm.cmd run episode:use -- ../episodes/001_ject_words_douyin_v1
```

Sentence:

```powershell
npm.cmd run episode:use -- ../sentence-episodes/001_not_that_sentence
```

5. Preview or render from this template.
6. Copy final outputs back into `episode/exports/` with strict names.

## Safety

- Never commit or write API keys.
- Use `DASHSCOPE_API_KEY` from the environment.
- Do not name exports `final.mp4`, `final2.mp4`, or Chinese final-version variants.
- Keep generated files inside the relevant episode package whenever possible.

## Checks

Run before delivery:

```powershell
npx.cmd tsc --noEmit
npm.cmd run render
```

For sentence episodes, also enforce:

- skeleton appears within 3 seconds
- scene first, explanation second
- slot swap is visually clear
- at least one drill-repeat section exists
- the result does not feel like PPT
