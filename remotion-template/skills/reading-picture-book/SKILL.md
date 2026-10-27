---
name: reading-picture-book
description: Build ~60–70-second vertical Douyin bilingual reading shorts for Gaokao (高考) students in the 英文绘本精读 Picture-book Story template — a short original English story starring the locked 小猪 brand pig ("Little Pig"), drawn as crayon picture-book pages, each sentence read aloud in English with karaoke underline and a Chinese line, target words glossed on a word card as they are read, a word recap and a Gaokao-style comprehension question with 原文定位. Use when `npm run plan` names reading-picture-book or the owner asks for a story / 绘本 reading episode.
---

# 英文绘本精读 · Picture-book Story (reading)

Five illustrated pages tell one small story a teenager recognises (staying up late, a lost umbrella, a first speech). The voice reads each English sentence like a storyteller; the printed sentence is underlined as it is read, target words light up yellow and their card pops on the picture; the Chinese line sits under each sentence. Then the six words are recapped, a reading question gets a thinking pause, and the answer points back to the sentence that proves it.

**Read `../_shared/HOUSE_RULES.md` and `../_shared/DIRECTING.md` first.** Look rules: `references/style.md`. Reference episode: `reading-episodes/001_screen_promise` (70 s).

## Workflow (from `remotion-template/`)

```powershell
npm.cmd run plan
npm.cmd run new -- reading-picture-book 003_<topic>_book
# brief.md, TREATMENT.md, then data/pictureBook.ts and data/voiceScript.ts
npm.cmd run episode:use -- ../reading-episodes/003_<topic>_book
npm.cmd run check           # fix every ERROR (blank brief/TREATMENT and copied reference data fail too)
npm.cmd run produce         # voice → voice:check → check → timeline → audio → render + QA; stops at the first failure
```

## Writing the story

- 8–10 sentences over 4–6 pages, 8–16 words each, past tense, one clear arc: habit → consequence → decision → change.
- **Little Pig is the hero, always called "Little Pig"** in English (never Xiaozhu) and 小猪 in Chinese. No other recurring characters; a teacher or a friend may be mentioned but not drawn.
- 4–6 target words (`targets`), all 课标 but at most one 拓展, chosen for the Gaokao reading/cloze list. Each appears once in the story, in a sentence whose context explains it.
- Original writing only; Gaokao level (CEFR B1–B2). The question is 主旨 / 细节 / 推理 with one correct option and `evidenceLineId` pointing to the sentence that proves it.
- `translations` gives each voice line its natural Chinese line (not word-for-word).

## Structure

| Scene kind | Lines | What happens | Seconds |
|---|---|---|---|
| `cover` | 1 (title) | crayon cover, title handwritten, the pig lands | 3–4 |
| `page` × 4–6 | 1–2 sentences | page turns, picture + printed sentence with karaoke underline, word card for each target read | 5–9 each |
| `words` | 1 | the target words as a recap list with phonetic and meaning | 6–8 |
| `question` | 2 (question, answer) | options, thinking timer (silence via `pauseBefore`), the answer, the evidence sentence | 10–12 |
| `end` | 1 | 完 / The end, comment prompt | 4–5 |

## Data (`data/pictureBook.ts`)

- `targets[]`: `{id, word (as it appears in the story), lemma, phonetic, pos, meaning, level}`.
- `scenes[].illustration`: `{setting, props?, pig}`.
  - `setting`: `bedroom-night` · `classroom` · `street-morning` · `park-day` (each has its ground line).
  - `props`: `{kind, x, y, scale?, time?}` in a 1000 × 800 page. Kinds: phone, clock (with `time`), book, box, sun, moon, stars, tree, lamp.
  - `pig`: `{x (0–1 across the page), face, pose, flip?}` — the pig always stands on the setting's ground line; you choose only where and which built-in face and pose.
- `question`: `{stem, stemZh, options[4], answerIndex, evidenceLineId, sourceNote}`.
- `lineMeta.answer.pauseBefore` ≈ 2 s: the thinking time (the score drops out, a clock ticks).
- `score`: gentle (76–92 BPM).

## Voice

- Story lines are read in English (`instruction`: a warm picture-book storyteller for teenage learners, natural pace). `speedHint: 'medium'`.
- `subtitle` = the printed sentence (normally the same as `text`).
- The question and answer lines are English too; the Chinese is on screen only.
- `voice:check` must pass every sentence — a misheard target word means the viewer misheard it.

## Variation knobs

- Setting sequence and props; the pig's poses per page.
- Story shape: problem → fix (001), a mistake and an apology, a small adventure, a diary of one day.
- Question type (主旨 / 细节 / 推理 / 词义猜测).
- Score key and BPM; where the silence falls.
- Ending: a moral line, an open question, or a "what happened next?" comment prompt.

## Files

- `src/picturebook/ReadingPictureBookVideo.tsx`, `ReadingPictureBookCover.tsx` — compositions; page-turn flip between scenes, paper texture multiplied over every frame
- `src/picturebook/schedule.ts` — `PICTURE_BOOK`, `targetsIn`
- `src/picturebook/crayon.tsx` — crayon filter (12 fps boil), backgrounds per setting, props, `Picture`
- `src/picturebook/scenes.tsx` — page, sentence (karaoke + highlight), word card, words, question, end
- `src/picturebook/theme.ts` — crayon palette, page and text layout
