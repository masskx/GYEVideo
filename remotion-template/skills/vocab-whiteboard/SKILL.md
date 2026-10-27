---
name: vocab-whiteboard
description: Build ~60-second vertical Douyin vocabulary shorts for Gaokao (高考) students in the 白板词根图 Whiteboard Explainer template — one whiteboard written live in marker, the root circled in the middle, words branching out with their parts and literal meaning in blue and the exam meaning in red, one twist word whose wrong first guess is erased, the camera travelling over the board instead of cutting, and the locked 小猪 brand pig beside the board. Use when `npm run plan` names vocab-whiteboard or the owner asks for a whiteboard / mind-map vocabulary episode.
---

# 白板词根图 · Whiteboard Explainer (vocab)

A calm, teacher-at-the-board episode. The board is bigger than the frame; the camera glides from the title to the root, out to each branch, and finally pulls back to show the whole word map — the screenshot students save. One word is a twist: its link to the root looks impossible, a wrong guess is written, erased, and the parts explain it.

**Read `../_shared/HOUSE_RULES.md` and `../_shared/DIRECTING.md` first.** Look rules: `references/style.md`. Reference episode: `episodes/062_vis_whiteboard` (root *vis / vid*, 52 s).

## Workflow (from `remotion-template/`)

```powershell
npm.cmd run plan
npm.cmd run new -- vocab-whiteboard 063_<root>_whiteboard
# brief.md, TREATMENT.md, then data/whiteboard.ts and data/voiceScript.ts
npm.cmd run episode:use -- ../episodes/063_<root>_whiteboard
npm.cmd run check           # fix every ERROR (blank brief/TREATMENT and copied reference data fail too)
npm.cmd run produce         # voice → voice:check → check → timeline → audio → render + QA; stops at the first failure
```

## Structure

| Scene kind | Lines | Camera | What is written | Seconds |
|---|---|---|---|---|
| `title` | 1 | top-left corner | the title (one Chinese word, e.g. 看) and 高考词汇 白板 | 3–4 |
| `root` | 1 | centre | circle, the root forms (highlighted yellow), `= en meaning` | 4–5 |
| `branch` × 3–5 | 1 each | travels to the branch slot | arrow, word, parts, literal (blue), meaning (red), example | 5–7 each |
| `twist` | 2 | bottom-centre | word, first meaning, the wrong guess → eraser → parts, literal, ring | 9–11 |
| `overview` | 1 | pulls back to the whole board | second ring round the root, marker cap clicks | 4–5 |
| `homework` | 1 | bottom | a card magnetted to the board with the question | 5–7 |

Board positions are automatic (up to 6 words; the twist word always takes the bottom-centre slot). The data only orders the words.

## Data (`data/whiteboard.ts`)

- `title`: the one word written top-left (the root's meaning in Chinese).
- `root`: `{forms, meaning, en}` — every form is highlighted inside every word (`['vis', 'vid']`).
- `words[]`: `{id, word, level, parts: [{text, role: prefix|root|suffix, gloss?}], literal, meaning, example: {en, zh}, twist?: {wrong}}`. Exactly one word has `twist`.
- `scenes[].cueAt`: the spoken token that finishes each write (`root`, `word`, `parts`, `literal`, `meaning`, `wrong`, `erase`). A write *finishes* on its token; the board starts it earlier according to its length. Without a token the write falls at a fixed fraction of the line.
- `homework`: `{stem with ____, stemZh, options[4], answerIndex, sourceNote}`.
- `lineMeta`: keywords; use `pauseBefore` on the twist answer (a beat of silence before the explanation).
- `score`: calm (84–100 BPM).

## Narration

- A teacher thinking aloud, unhurried, one idea per sentence.
- Branch: `<word>：<root> <gloss>，加上 <part> <gloss>，<literal>，就是<meaning>。` — say the `cueAt` tokens exactly as in the data.
- Roots that CosyVoice reads as words must be spelled letter by letter in `text` (`V I S`), and the `cueAt` token must match the spoken form (`'V I D'`). `voice:check` joins spelled letters.
- Twist: line 1 asks the question ("提供，和看有什么关系？"), line 2 answers with the parts.

## Variation knobs

- Which word is the twist, and whether the twist comes first (as the hook) or last.
- Camera path: clockwise / zig-zag / start from the overview and zoom in.
- Number of branches (3–5) and the homework position.
- Marker colour of the title, the highlighter's shape (swipe or box).
- Ending: overview then homework, or homework written straight onto the overview.

## Files

- `src/whiteboard/VocabWhiteboardVideo.tsx`, `VocabWhiteboardCover.tsx` — compositions; the camera interpolates in 1/zoom so travel feels even
- `src/whiteboard/schedule.ts` — `WHITEBOARD`, `writeDuration`
- `src/whiteboard/layout.ts` — board size, slots, arrows, camera stops (`cameraFor`)
- `src/whiteboard/board.tsx` — marker writing, highlighter, arrows, rings, eraser, magnets, ghost marks
- `src/whiteboard/theme.ts` — marker colours and fonts
