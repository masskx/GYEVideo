---
name: vocab-game-show
description: Build ~60-second vertical Douyin vocabulary shorts for Gaokao (高考) students in the 词根闯关 Game Show Flat template — flat candy-coloured studio sets, one round per word with a prefix + root call-and-response on the beat, judgement words (PERFECT!), a lightning round, a report-card grade and a bonus cloze for the comments, hosted by the locked 小猪 brand pig. Use when `npm run plan` names vocab-game-show or the owner asks for a game-show / 闯关 vocabulary episode.
---

# 词根闯关 · Game Show Flat (vocab)

A root is today's pass code (通关密码). Each word is one round: the prefix tile drops, the root tile slams next to it, the literal meaning pops, the tiles merge into the word, the exam meaning lands in yellow, a judgement word bursts. Then a lightning round repeats all five at double speed, a report card stamps the grade, and a bonus question goes to the comments.

**Read `../_shared/HOUSE_RULES.md` and `../_shared/DIRECTING.md` first** (pig, voice, Gaokao rules, pipeline, definition of done). Look and motion rules: `references/style.md`. Reference episode: `episodes/061_port_gameshow` (root *port*, 64 s).

## Workflow (from `remotion-template/`)

```powershell
npm.cmd run plan                                   # confirm this template is next
npm.cmd run new -- vocab-game-show 063_<root>_gameshow
# write brief.md and TREATMENT.md, then rewrite data/gameShow.ts and data/voiceScript.ts
npm.cmd run episode:use -- ../episodes/063_<root>_gameshow
npm.cmd run check           # fix every ERROR (blank brief/TREATMENT and copied reference data fail too)
npm.cmd run produce         # voice → voice:check → check → timeline → audio → render + QA; stops at the first failure
```

Then work through `references/qa_checklist.md` and write `notes.md`.

## Structure

| Scene kind | Lines | What happens | Seconds |
|---|---|---|---|
| `title` | 1 | show title slams, the pig drops onto the floor, one lamp per word lights | 3–4 |
| `root-card` | 1 | banner 通关密码, the root tile stamps, its meaning pops in yellow | 4–5 |
| `round` × 4–6 | 1 each | prefix tile → root tile → literal → word → meaning → collocation → judgement | 5–7 each |
| `lightning` | 1 | all words in a fast grid, one tick per word | 6–8 |
| `report` | 1 | report card rows type in, grade stamp | 3–4 |
| `bonus` | 2 | cloze board with four options, 评论区抢答 sticky, sign-off | 8–10 |

Scenes play in the order of `gameShow.scenes`. You may drop the lightning round, or move the report before it, as a structure change; keep `title` first and `bonus` last.

## Data (`data/gameShow.ts`)

- `root`: `{text, meaning, en}` — the pass code.
- `words[]`: `{id, word, level, prefix: {text, gloss}, root, suffix?, literal, meaning, collocation: {en, zh}}`. `root` is spelled as it appears inside the word (*sup*port, not *sub*). 4–6 words, all 课标 but at most one 拓展.
- `scenes[]`: each has `set: {hue, pattern}`. **Neighbouring scenes never share a hue**; patterns `stripes` / `dots` / `sunburst`. Rounds carry `wordId` and a `judgement` (PERFECT! GREAT! NICE! BINGO! — vary them).
- `grade`: the report-card stamp (S, A+…), said in the `grade` line.
- `bonus`: `{stem (with ____), stemZh, options[4], answerIndex, sourceNote}` — answered by one of today's words.
- `lineMeta`: `keywords` per line (yellow in the caption), `pauseBefore` for silences.
- `score`: `{bpm, key}` — the game-show palette is bright; 112–128 BPM. Change key and BPM from the last game-show episode.

## Narration (voice line per scene)

The rhythm is the teaching: keep every round on one pattern so the viewer can say it along.

- Round: `第N关！<prefix>，<gloss>。<literal>，<word>，<meaning>。` The cues find the prefix, the literal, the word and the first two characters of the meaning in this line, so say them in this order and exactly as in the data.
- Lightning: `<word>，<meaning>；` for every word, in the order of `words`.
- Report: say the `grade` text.
- Bonus: line 1 reads the question in Chinese; line 2 contains `下一个` (the end ding is timed to it), e.g. `评论区抢答，下一个词根见！`
- Tone: a variety-show host — excited, punchy, short sentences (`instruction` in the reference voiceScript).

## Variation knobs (§9 of TREATMENT.md)

- Structure: rounds only / rounds + lightning / lightning first as a pre-test ("先测你一下") then rounds.
- Opening: the title slam, or open cold on round 1 with the bonus question as a tease.
- Signature shot: the tile merge, the judgement burst, or the lightning grid filling.
- Set palette order and patterns; judgement words; grade; BPM and key.
- Ending: grade stamp then bonus, or bonus then grade reveal.

## Files

- `src/gameshow/VocabGameShowVideo.tsx`, `VocabGameShowCover.tsx` — compositions `VocabGameShowVideo`, `VocabGameShowCover`
- `src/gameshow/schedule.ts` — `GAME_SHOW` timeline and cues (tokens from data only)
- `src/gameshow/kit.tsx` — set backgrounds, Telop, Tile, Banner, Burst, Lamps, Confetti, CutFlash
- `src/gameshow/scenes.tsx` — the six scene kinds; the pig host on the floor line (`FLOOR_Y` 1380)
- `src/gameshow/theme.ts` — hues, ink, root yellow, fonts
- `src/gameshow/copy.ts` — title, caption, tags
