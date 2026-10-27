# AGENTS.md (remotion-template)

The single Remotion project for every video line. Read `../AGENTS.md` first, then `skills/_shared/HOUSE_RULES.md` and the skill of the template you are making.

Do not duplicate this folder for new episodes. Episode content lives in `../episodes/`, `../reading-episodes/` or `../sentence-episodes/`; `npm run episode:use` copies an episode's `data/` into `src/data/` and its `audio/` into `public/`.

## Code map

| Path | What it is |
|---|---|
| `src/templates/registry.ts` | the template catalogue (ids, compositions, data file, skill, episode folder, length range) |
| `src/templates/timelines.ts`, `compositions.tsx` | per-template timeline, score plan, release copy, React compositions |
| `src/core/` | shared timeline builder, motion helpers, fonts, audio player, release copy |
| `src/brand/` | `BrandPig.tsx` (locked by `pig.lock`), `BrandAvatar.tsx`, `brand.ts` (names, voice) |
| `src/dossier/`, `src/gameshow/`, `src/whiteboard/`, `src/picturebook/`, `src/captionnews/` | one folder per template: theme, schedule, scenes, video, cover, copy |
| `src/data/` | the active episode's data (overwritten by `episode:use`; defaults are the reference episodes) |
| `scripts/` | `use-episode`, `check-episode`, `generate-voice`, `voice-check.py`, `timeline`, `episode-audio` + `audio/`, `render-runner`, `qa-report`, `new-episode`, `plan` |
| `skills/` | `_shared/` house rules and directing method, one skill per template, legacy skills |

Legacy compositions (`RootWordTemplate`, `SentencePatternVideo`, `DouyinCover`, `SentenceCover`) still render through the same scripts.

## Adding or changing a template

- A new template: add it to `registry.ts`, `timelines.ts`, `compositions.tsx`, the `EpisodeType` union in `scripts/use-episode.ts` and `src/data/episodeConfig.ts`, a score palette in `scripts/audio/score.ts`, a reference episode and a skill in `skills/<id>/`. Use `src/core/timeline.ts`, `src/core/fonts.ts`, `src/core/audio.tsx` and `BrandPig`; don't fork them.
- A fix to an existing template: fix it in the template, then re-render its reference episode (`npm run episode:use -- ../<reference>` → `npm run render`) and confirm `QA PASS`.
- Never put an episode's words or text in template code; add a data field.

## Safety

- Never commit or write API keys. `DASHSCOPE_API_KEY` comes from the environment.
- Export names are strict (`<id>.mp4`, `<id>_cover.png`); never `final.mp4`, `final2.mp4` or 最终版 variants.

## Checks before delivery

```powershell
npm.cmd run typecheck
npm.cmd run check
npm.cmd run voice:check
npm.cmd run render
```

Sentence episodes (legacy line) also keep their own rules: skeleton within 3 seconds, scene first and explanation second, a clear slot swap, at least one drill-repeat section, nothing that feels like a slide deck.
