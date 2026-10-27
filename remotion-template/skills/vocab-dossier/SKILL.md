---
name: vocab-dossier
description: Build ~60-second vertical Douyin vocabulary shorts for 高考 / 四级 (CET-4) / 六级 (CET-6) English students in the Halftone Dossier house style (高考词汇案卷 / 四级词汇案卷 / 六级词汇案卷) — cream printed paper, halftone dots, stamps, numbered exhibits, the 小猪 detective — with a Gaokao-style cloze question as the case, word roots as fingerprints, a per-episode synthesized score and SFX, DashScope CosyVoice narration, and Remotion. Use for word roots, affixes and word families aimed at Gaokao vocabulary.
---

# Gaokao Dossier Vocabulary Video

Every episode is a case file (案卷). A Gaokao-style question is the crime scene, the word root is the fingerprint, each word is a numbered exhibit, and the verdict is a stamp. The viewer leaves with the root, five exam words with their collocations, and one question to answer in the comments.

This skill adapts the **Halftone Dossier** style and the directing method of [lemo-opuscar](https://github.com/lemomo-ai/lemo-opuscar) (`DIRECTOR.md`, `styles/halftone-dossier/STYLE.md`) to this repository's Remotion pipeline, vertical 1080×1920 and Gaokao content.

It is one of three vocabulary templates (with `vocab-game-show` and `vocab-whiteboard`). **Read `../_shared/HOUSE_RULES.md` and `../_shared/DIRECTING.md` first**: the pig, the voice, the Gaokao rules, the pipeline and the definition of done are there. Use this template when `npm run plan` names it.

**Exams.** The template serves 高考, 四级 and 六级. Set `exam` with `npm run new -- vocab-dossier <id> --exam gaokao|cet4|cet6`, then follow `../_shared/EXAMS.md`. The audience, word levels, difficulty and question label change with the exam; the exam labels on screen change by themselves. The reference episode is a 高考 episode.

## Why this line exists

The old root-word line had two problems that this skill is built to fix:

1. **Sameness.** Every episode followed one benchmark (046) beat for beat, so 59 episodes looked like one. Here the *look* is fixed (consistency) but each episode must change its structure, opening or ending (originality). See "Not the last episode again".
2. **Words students don't need.** Episodes taught words like *altimeter, altiplano, altissimo*. A Gaokao student has no use for them. Here every word is tagged 课标 (in the curriculum word list) or 拓展 (extension), with at most one 拓展 word per episode.

## Inputs

- A root, affix or word family, and 4–6 candidate words.
- Optional: the target students (高一 / 高三), a past episode to avoid repeating, the creator's own question idea.

## Outputs (per episode, in `episodes/<id>/`)

- `brief.md`, `TREATMENT.md`, `notes.md`
- `data/dossier.ts`, `data/voiceScript.ts`, `data/episodeConfig.ts` (`type: 'vocab-dossier'`), `data/generatedVoiceTimeline.ts`
- `audio/` (voice segments, `score.mp3`) — generated, gitignored
- `exports/<id>.mp4` (1080×1920, 30 fps, −14 LUFS), `_cover.png`, `_caption.txt`, `_publish_notes.md`, `_qa.md`, `_contact_sheet.jpg` — gitignored

## Workflow

From `remotion-template/`:

1. `npm run new -- vocab-dossier <id> --exam <gaokao|cet4|cet6>` (e.g. `063_spect_dossier`, `064_cet4_spect_dossier`): copies `episodes/060_duc_dossier/data`, renames ids, adds `brief.md`, `TREATMENT.md`, `notes.md`.
2. **Brief** (`brief.md`): root, meaning, words with their 课标/拓展 tag, collocations.
3. **Treatment first** (`TREATMENT.md`), before any data: three candidate structures and the one chosen, the hook, the signature shot, the ending, the cue map, the sound table, §9 versus the previous dossier. Read `references/content_rules.md`.
4. **Data**: rewrite every field of `dossier.ts` (scenes, words, cloze, `cueAt`, `solveHint`, lineMeta) and `voiceScript.ts` for the new root. Nothing of 060 may survive.
5. Pipeline:
   ```powershell
   npm.cmd run episode:use -- ../episodes/<id>
   npm.cmd run check           # fix every ERROR (blank brief/TREATMENT and copied reference data fail too)
   npm.cmd run produce         # voice → voice:check → check → timeline → audio → render + QA; stops at the first failure
   ```
6. **One fix round** against `references/qa_checklist.md`; record the results in `notes.md`.

### Data fields that time the film

- `scene.cueAt`: the spoken word that fires a beat inside a scene; without it the beat falls at a fixed fraction of the line. Keys: `loss` (cloze-case: the "which one?" moment), `loupe` (fingerprint), `arrow` and `verdict` (solve: the root's logic, the stamp), `redact` and `end` (homework). 060 uses `{loss: '选哪个'}`, `{loupe: '指纹'}`, `{arrow: '往回带', verdict: '结'}`, `{redact: '空里', end: '下一个'}`. Every token must appear in the spoken `text` of that scene's lines.
- `dossier.solveHint`: the root's logic said in the solve (往回带).
- The fingerprint rows and the evidence-board card are derived from the options and the root, so they change with the data.

## The house style in one screen

Full spec: `references/style.md`. Never break these:

- **The whole film is paper.** Cream sheet, mottling, vignette, fold, dust (`public/dossier/paper.jpg` multiplied over every frame). Dark scenes are printed on it too.
- **Shading is halftone dots, never a gradient.** Dot size follows a density field; two layers overprint.
- **Five inks only**: paper `#F3EAD6`, ink `#1C2340`, overprint cobalt `#2F64D8`, brand highlight yellow `#FFC62B`, stamp red `#E2412F`. Red is only for stamps and alarms. The pig owns its pinks.
- **Everything enters with overshoot.** Headlines pop per character, cards rise and squash, stamps slam (2.6× → 1× in 0.09 s) with shake, flash and sound. Nothing fades in.
- **Transitions are dot wipes or hard cuts.** No dissolves.
- **Captions are the dark-ink pill** with keywords in yellow, carrying the spoken line.
- **One idea per card**, readable at thumbnail size.

## Not the last episode again

Before writing data, compare your treatment with the previous dossier episode's `TREATMENT.md` on six points: structure, opening image, signature shot, camera path, score shape, ending. **At least three must differ.** The look stays the same; the film must not.

Structures (`dossier.structure`) and the scene kinds they use:

| Structure | Shape | Scene kinds |
|---|---|---|
| `case-investigation` ✅ built | cloze case → fingerprint → root mugshot → exhibits → evidence board → solve → homework | all seven below |
| `line-up` (to build) | five suspect words in a mugshot line-up; one is an impostor without the root (e.g. *pride* vs *produce*) | needs a `line-up` scene kind |
| `declassified` (to build) | a short Gaokao-style passage with redacted words, unredacted one by one through the root | needs a `passage` scene kind |
| `cold-case` (to build) | a commonly confused pair (*adapt / adopt*) re-examined; the root settles it | needs a `split-file` scene kind |

Built scene kinds: `cloze-case`, `fingerprint`, `root-reveal`, `exhibit`, `evidence-board`, `solve`, `homework` (`src/dossier/scenes.tsx`). A new structure adds at most one scene kind and reuses the rest.

## Files

- `src/dossier/VocabDossierVideo.tsx`, `src/dossier/VocabDossierCover.tsx` — compositions `VocabDossierVideo`, `VocabDossierCover`
- `src/dossier/schedule.ts` — `DOSSIER`, the one timeline (`src/core/timeline.ts`): line placement from real TTS durations, read-time holds, half-beat snapping, cues for every animation and sound
- `src/dossier/print.tsx` — paper, halftone, per-character pop, stamps, caption bar, HUD, dot wipe, shake, flash
- `src/dossier/scenes.tsx` — the scene kinds
- `src/dossier/theme.ts` — inks, fonts, safe area
- `src/dossier/copy.ts` — Douyin title, caption and tags
- `src/brand/BrandPig.tsx` — the 小猪 detective (locked; faces neutral, squint, happy, surprised; poses idle, inspect, cheer, point)
- `scripts/audio/` — synthesized SFX kit (`public/sfx/`); the score: `scripts/music/` (styles `noir-swing` / `spy-funk`, `../_shared/PACE_AND_MUSIC.md`)
- `scripts/make-dossier-paper.py` — regenerates `public/dossier/paper.jpg` (numpy + pillow; only needed to change it)
- `public/fonts/` — OFL fonts subset to GB2312 + Latin + IPA (Noto Serif SC Black, Noto Sans SC Black, Bagel Fat One, ZCOOL KuaiLe, JetBrains Mono)

## Safety and rights

- `DASHSCOPE_API_KEY` from the environment only.
- Practice questions are original and labelled `高考风格原创练习题`. Never present them as real past papers (真题) unless you quote a real one with its year and source.
- Fonts are OFL (`public/fonts/OFL.txt`); score and SFX are synthesized in code, nothing sampled.
- The style spec and directing method are adapted from the lemo-opuscar docs (MIT, Copyright (c) 2026 LemoLab; notice in `../_shared/LICENSE-lemo-opuscar.txt`). None of its demo films, stills, characters, shots or melodies are reused.
