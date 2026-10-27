# AGENTS.md — GYEVideo (小猪盖被 Douyin English videos)

You make ~60-second vertical (1080×1920) Douyin videos for Chinese students preparing for an English exam: **高考** (Gaokao), **四级** (CET-4) or **六级** (CET-6). Two lines are live: **单词 vocabulary** and **双语阅读 bilingual reading**. Each has several templates, so the account doesn't look the same twice. Every template follows the same house rules, so any agent produces the same quality.

**The full step-by-step procedure is [`docs/agent_playbook.md`](docs/agent_playbook.md). Follow it exactly.** This page is the summary.

## Read first, in this order

1. `docs/agent_playbook.md`: the procedure, from setup to handoff, plus troubleshooting.
2. `remotion-template/skills/_shared/HOUSE_RULES.md`: the pig, the voice, Gaokao content rules, the definition of done.
3. `remotion-template/skills/_shared/EXAMS.md`: what changes for 高考 / 四级 / 六级 (audience, word levels, difficulty, labels).
4. `remotion-template/skills/_shared/DIRECTING.md`: treatment first, cues, originality.
5. The skill of the template you are making: `remotion-template/skills/<template>/SKILL.md`, `references/style.md`, `references/qa_checklist.md`.

## Templates

| Line | Template | Series | Look | Reference episode |
|---|---|---|---|---|
| vocab | `vocab-dossier` | 词汇案卷 (高考 / 四级 / 六级) | halftone print case file, stamps | `episodes/060_duc_dossier` |
| vocab | `vocab-game-show` | 词根闯关 | flat candy game show, one round per word | `episodes/061_port_gameshow` |
| vocab | `vocab-whiteboard` | 白板词根图 | live whiteboard word map, travelling camera | `episodes/062_vis_whiteboard` |
| reading | `reading-picture-book` | 英文绘本精读 | crayon picture book starring the pig | `reading-episodes/001_screen_promise` |
| reading | `reading-caption-news` | 双语新闻阅读 | captions-first sourced news passage | `reading-episodes/002_teen_sleep_news` |

Every template serves every exam: set `exam: 'gaokao' | 'cet4' | 'cet6'` in `data/episodeConfig.ts` (`npm run new … --exam cet4` does it). Labels such as 四级搭配 and the hashtags follow automatically from `src/core/exam.ts`.

The catalogue is code: `remotion-template/src/templates/registry.ts`. Rotate templates within a line, never the same one twice in a row; `npm run plan` decides.

Frozen lines:
- the black/yellow `root-word` vocabulary videos (episodes 001–059): render only, no new episodes;
- the old Chinese-English read-aloud videos: removed.

Sentence-pattern videos (`sentence-episodes/`, skill `douyin-remotion-sentence-video`) continue unchanged.

## The path (from `remotion-template/`; on Windows use `npm.cmd`)

```powershell
npm run doctor                                   # once per machine: must say Ready
npm run plan                                     # which template is next, and the next episode number
npm run new -- <template> <id> --exam <exam>     # e.g. vocab-game-show 063_cet4_spect_gameshow --exam cet4
# write brief.md + TREATMENT.md, then the data files (and FACTS.md for news)
npm run episode:use -- ../episodes/<id>          # or ../reading-episodes/<id>
npm run check                                    # fix every ERROR
npm run produce                                  # check → voice → voice:check → check → timeline → audio → render
# visual review of exports/<id>_contact_sheet.jpg and out/qa/<id>/, then notes.md, then commit
```

`produce` stops at the first failing step and writes `exports/<id>_handoff.md`. `npm run prompt -- <template> --exam <exam> --topic "…"` prints the full task prompt for one episode (the owner's prompts in `docs/prompts/` are made by it). The single steps also exist: `voice`, `voice:check`, `timeline`, `audio`, `render`, `qa`, `preview` and `typecheck`.

## Non-negotiables

- **The pig.** 小猪 / Little Pig is drawn only by `remotion-template/src/brand/BrandPig.tsx`, locked by `pig.lock`. Place it, size it, flip it, pick a built-in face and pose. Never edit it, redraw it, recolour it, or add another pig.
- **One voice.** CosyVoice `cosyvoice-v3-flash` / `longanhuan`, enforced by `voice` and `doctor`. Only the tone instruction changes.
- **Secrets.** `DASHSCOPE_API_KEY` lives in `.env` or the environment only. Never print it, commit it or write it anywhere else.
- **Data, not code.** An episode changes only its own folder. Changes to templates, `src/core/` or `src/brand/` need the owner.
- **Content.**
  - Use the exam's word levels (高考 课标; 四级 四级; 六级 四级/六级 with at least half 六级), with at most one 拓展.
  - Label original questions with the exam (`高考风格原创练习题`, `四级风格原创练习题`, `六级风格原创练习题`).
  - Source every news number in `FACTS.md`.
- **Done** means all of these:
  - `check` passes, `voice:check` passes, and `produce` ends with `PRODUCE DONE`;
  - the visual review is done;
  - `notes.md` is written.

  The checklist is in playbook §9.
- **Git.**
  - `exports/`, `audio/` and `out/` are gitignored; commit only data and docs.
  - Use strict export names (`<id>.mp4`), never `final.mp4`.

## Ask the owner when

There is no topic, a fix needs code, a news number has no primary source, or DashScope refuses the key. Playbook §10 has the full list.

## Layout

```
AGENTS.md, CLAUDE.md      agent entry points (this file)
docs/agent_playbook.md    the procedure, step by step
docs/agent_prompts.md     index of the prompts the owner gives to agents
docs/prompts/             generated task prompts: one file per template (高考 / 四级 / 六级) + roles.md
episodes/<id>/            vocabulary episodes (data/, brief.md, TREATMENT.md, notes.md)
reading-episodes/<id>/    bilingual reading episodes (+ FACTS.md for news)
sentence-episodes/<id>/   sentence-pattern episodes (legacy line, still active)
remotion-template/        the one Remotion project: src/core, src/brand, src/templates, one folder per template, scripts/, skills/
shared-assets/            icons and music for the legacy lines (no pig assets)
docs/                     setup, workflow, naming, publish checklist
content/                  source material
```
