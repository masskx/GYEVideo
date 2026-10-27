# AGENTS.md — GYEVideo (小猪盖被 Douyin English videos)

You make ~60-second vertical (1080×1920) Douyin videos for Chinese students preparing for the Gaokao English exam. Two lines are live: **单词 vocabulary** and **双语阅读 bilingual reading**. Each has several templates, so the account doesn't look the same twice, and every template follows the same house rules, so any agent produces the same quality.

## Start here

1. Read `remotion-template/skills/_shared/HOUSE_RULES.md` (the brand pig, the voice, Gaokao rules, definition of done) and `DIRECTING.md` (the method).
2. `cd remotion-template` and run `npm run plan`: it names the template to use next.
3. Read that template's skill: `remotion-template/skills/<template>/SKILL.md`.

## Templates

| Line | Template | Series | Look | Reference episode |
|---|---|---|---|---|
| vocab | `vocab-dossier` | 高考词汇案卷 | halftone print case file, stamps | `episodes/060_duc_dossier` |
| vocab | `vocab-game-show` | 词根闯关 | flat candy game show, one round per word | `episodes/061_port_gameshow` |
| vocab | `vocab-whiteboard` | 白板词根图 | live whiteboard word map, travelling camera | `episodes/062_vis_whiteboard` |
| reading | `reading-picture-book` | 英文绘本精读 | crayon picture book starring the pig | `reading-episodes/001_screen_promise` |
| reading | `reading-caption-news` | 双语新闻阅读 | captions-first sourced news passage | `reading-episodes/002_teen_sleep_news` |

The catalogue is code: `remotion-template/src/templates/registry.ts`. Rotate templates within a line; never the same one twice in a row.

Frozen lines: the black/yellow `root-word` vocabulary videos (episodes 001–059; render only, no new episodes) and the old Chinese-English read-aloud videos (removed). Sentence-pattern videos (`sentence-episodes/`, skill `douyin-remotion-sentence-video`) continue unchanged.

## Pipeline (from `remotion-template/`)

```powershell
npm.cmd run plan                                     # which template is next
npm.cmd run new -- <template> <id>                   # e.g. vocab-game-show 063_spect_gameshow
# write brief.md + TREATMENT.md, then the data files (and FACTS.md for news)
npm.cmd run episode:use -- ../episodes/<id>          # or ../reading-episodes/<id>
npm.cmd run check                                    # brand lock, content rules, charset, length
npm.cmd run voice                                    # DashScope CosyVoice (needs DASHSCOPE_API_KEY)
npm.cmd run voice:check                              # speech-to-text of every line
npm.cmd run timeline                                 # scene table and total length
npm.cmd run audio                                    # synthesized score + SFX from the real timing
npm.cmd run render                                   # stills, video, −14 LUFS, QA report, cover, copy
```

`npm run typecheck` checks the template and the scripts. `npm run preview` opens Remotion Studio. `npm run qa` re-runs the measured QA on an existing export.

## Non-negotiables

- **The pig.** 小猪 / Little Pig is drawn only by `remotion-template/src/brand/BrandPig.tsx`, locked by `pig.lock`. Place it, size it, flip it, pick a built-in face and pose. Never edit, redraw, recolour or add another pig.
- **One voice.** CosyVoice `cosyvoice-v3-flash` / `longanhuan`. Only the tone instruction changes.
- **Secrets.** `DASHSCOPE_API_KEY` from the environment only. Never write it anywhere.
- **Content.** 课标 words, at most one 拓展. Original questions are labelled `高考风格原创练习题`. Every news number is sourced in `FACTS.md`.
- **Done** means `check`, `voice:check` and the render's `QA PASS`, the contact sheet looked at, and `notes.md` written (HOUSE_RULES §8).
- Episode content stays in the episode's `data/`. Don't change shared code (`src/core/`, `src/brand/`) for one episode.
- `exports/`, `audio/` and `out/` are gitignored. Commit data and docs only. Use strict export names (`<id>.mp4`), never `final.mp4`.

## Layout

```
episodes/<id>/            vocabulary episodes (data/, brief.md, TREATMENT.md, notes.md)
reading-episodes/<id>/    bilingual reading episodes (+ FACTS.md for news)
sentence-episodes/<id>/   sentence-pattern episodes (legacy line, still active)
remotion-template/        the one Remotion project: src/core, src/brand, src/templates, one folder per template, scripts/, skills/
shared-assets/            icons and music for the legacy lines (no pig assets)
docs/                     workflow, naming, publish checklist
content/                  source material (story ideas, word lists)
```
