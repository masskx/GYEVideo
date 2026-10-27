# Agent playbook: making a video in this repository

This is the complete procedure for an agent (Codex, Claude Code, Cursor, or any other) that makes a 小猪盖被 video from this repository, for any of seven exams: 高考, 四级 (CET-4), 六级 (CET-6), 考研, 雅思 (IELTS), 托福 (TOEFL) or GRE. The owner usually starts you with a prompt from `docs/prompts/` (made by `npm run prompt`); this playbook is what that prompt tells you to follow. Follow the steps in order. If you follow them exactly, your video will match the others on the account: the same pig, the same voice, the same quality bar, and a different look from the previous episode.

`AGENTS.md` is the one-page summary. This file holds the details. When the two disagree, `remotion-template/skills/_shared/HOUSE_RULES.md` wins.

---

## 0. The rules that make videos consistent

1. **You write data, not code.** An episode is the files in its folder: `brief.md`, `TREATMENT.md`, `data/*.ts` (and `FACTS.md` for news). The templates, the pig, the voice, the fonts, the music and the QA are already built. If you think a template needs a code change, stop and report it to the owner instead (§10).
2. **One pipeline, one order.** Use `npm run produce`. It runs check → voice → voice:check → check → timeline → audio → render and stops at the first failure. Never skip or reorder a step.
3. **One pig.** Only `src/brand/BrandPig.tsx` draws 小猪, and its hash is locked. You choose its position, size, mirroring, and one of its built-in faces and poses. Nothing else about it can change.
4. **One voice.** DashScope `cosyvoice-v3-flash` / `longanhuan`. The script refuses anything else.
5. **Rotate the look.** `npm run plan` picks the template. Two episodes in a row from one template make the account look repetitive.
6. **One exam per episode.** `exam` in `episodeConfig.ts` (`gaokao`, `cet4`, `cet6`, `kaoyan`, `ielts`, `toefl`, `gre`) decides the word levels, the difficulty, the audience and every exam label on screen. Follow `remotion-template/skills/_shared/EXAMS.md` for it.
7. **Fast by default.** `pace: 'fast'` (Douyin / TikTok) sets the voice speed, the gaps, the length and the music's energy. Don't slow it down with pauses. See `remotion-template/skills/_shared/PACE_AND_MUSIC.md`.
8. **Music is composed, not downloaded.** `npm run audio` (part of `produce`) composes the score for your timeline from the template's style. Never add a downloaded track.
9. **A video is done only when the definition of done holds** (§9). Rendering is not done.

---

## 1. One-time setup (per machine)

### 1.1 Install

| Tool | Version | Check |
|---|---|---|
| Node.js | 18 or newer (22 recommended) | `node --version` |
| ffmpeg + ffprobe | any recent build, on PATH | `ffmpeg -version` |
| Python | 3.10 or newer, on PATH as `python` | `python --version` |
| FluidSynth + a General MIDI `.sf2` (recommended) | any 2.x; FluidR3_GM or GeneralUser GS | `fluidsynth --version`; without it the music uses the built-in synth |
| Git | any | `git --version` |

Windows: install Python with "Add python.exe to PATH" ticked. If `python` opens the Microsoft Store, turn off the "App execution aliases" for python in Windows settings. PowerShell may block `npm.ps1`; always type `npm.cmd` instead of `npm`.

### 1.2 Project setup

From the repository root:

```powershell
Copy-Item .env.example .env          # macOS/Linux: cp .env.example .env
# Open .env and fill in DASHSCOPE_API_KEY=... (ask the owner for the key; never commit .env)
cd remotion-template
npm.cmd ci
python -m pip install -r scripts/requirements-voice-check.txt
npm.cmd run doctor
```

`doctor` must end with `Ready.` Fix every `FAIL` line it prints. A `WARN` about sound effects is normal before the first `npm run audio`.

Don't set `DASHSCOPE_TTS_MODEL` or `DASHSCOPE_TTS_VOICE` in `.env` to anything other than the brand voice. `doctor` and `voice` refuse it.

Behind an HTTP proxy with Node 22 or newer, also set `NODE_USE_ENV_PROXY=1`, so Node's `fetch` (used for DashScope) goes through the proxy.

The first render downloads a headless Chromium (Remotion does this automatically), so network access is needed once. The first `voice:check` downloads the speech-to-text model (about 1.5 GB).

### 1.3 Calibration render (once per machine)

Render one reference episode to prove that the machine produces the same result:

```powershell
npm.cmd run episode:use -- ../episodes/061_port_gameshow
npm.cmd run produce
```

The run should end with `PRODUCE DONE`. `exports/061_port_gameshow_qa.md` should show PASS, about 64 s and −14 LUFS. If it fails here, the problem is the machine, not an episode: go to §11.

---

## 2. Step 1 — choose the template

```powershell
npm.cmd run plan
```

The output lists each line's latest episodes and ends with a suggestion, for example:

```
  next: vocab-dossier (高考词汇案卷) — Halftone print case file …
        npm run new -- vocab-dossier 063_<topic>_dossier
```

- Use the suggested template unless the owner named one.
- Vocabulary (单词) or reading (双语阅读): do what the owner asked. If they didn't say, ask them.
- The five templates:

| Template | Line | Best for |
|---|---|---|
| `vocab-dossier` 高考词汇案卷 | vocab | a root that solves a cloze question; mystery tone |
| `vocab-game-show` 词根闯关 | vocab | a root with 5 clean prefix + root words; energetic |
| `vocab-whiteboard` 白板词根图 | vocab | a root with one surprising word (the twist); calm |
| `reading-picture-book` 英文绘本精读 | reading | a small life story starring Little Pig |
| `reading-caption-news` 双语新闻阅读 | reading | a real, sourced science or health fact |

### Choose the exam

The owner's prompt names it. If it doesn't, ask. Read `remotion-template/skills/_shared/EXAMS.md` for that exam. In short:

| | 高考 | 四级 | 六级 | 考研 | 雅思 | 托福 | GRE |
|---|---|---|---|---|---|---|---|
| `exam` | `gaokao` | `cet4` | `cet6` | `kaoyan` | `ielts` | `toefl` | `gre` |
| Audience | 高中生 | 大学生 | 大学生 | 考研生 | 留学备考生 | 留学备考生 | 申研留学生 |
| Word level | 课标 | 四级 | 四级 / 六级 (≥ half 六级) | 考研 | 雅思 | 托福 | GRE |
| English | B1–B2 | B1–B2 | B2–C1 | B2–C1 | B2–C1, British spelling | B2–C1, American spelling | C1–C2 |

Every exam allows one 拓展 word, and original questions are labelled `<exam>风格原创练习题` / `…阅读题`. `EXAMS.md` has each exam's question styles, topics and what to rewrite from the 高考 reference.

Then read the template's skill **completely** before writing anything: `remotion-template/skills/<template>/SKILL.md`, plus its `references/style.md` and `references/qa_checklist.md`.

---

## 3. Step 2 — create the episode folder

```powershell
npm.cmd run new -- <template> <episodeId> --exam <exam> --pace fast
```

- `--exam` sets `exam` in `episodeConfig.ts` (default `gaokao`). For other exams put the exam after the number: `063_cet4_spect_dossier`, `064_ielts_env_whiteboard`.
- `--pace` sets `pace` (default `fast`; `relaxed` only when the owner asks for a long, slow explanation).
- `episodeId` = next number + topic + template suffix, lower case with `_`: `063_spect_dossier`, `064_struct_gameshow`, `003_umbrella_book`, `004_exercise_news`. `plan` prints the next number.
- `new` copies the reference episode's data and renames the ids. It also creates `brief.md`, `TREATMENT.md` and `notes.md`.
- Vocab episodes go to `episodes/`; reading episodes go to `reading-episodes/`.

The copied data is the **reference episode's content**. Every field must be rewritten in step 5. Nothing of the reference may survive except the structure.

`npm run check` enforces this order. It fails while `brief.md` or `TREATMENT.md` is still the blank template, while TREATMENT §9 is empty, and while a data file is an unchanged copy of the reference episode.

---

## 4. Step 3 — research and brief (`brief.md`)

### Vocabulary

1. Choose a root (or affix) that unlocks **4–6 words from the exam's word list**: 高考 课标词汇, 四级 or 六级 syllabus (`EXAMS.md`). Tag every word with the exam's levels; at most one may be `拓展`, and a 六级 episode needs at least half `六级`. If you are unsure a word is on the list, choose another word.
2. The root must split cleanly: prefix + root + suffix, with a literal meaning a 16-year-old believes in one breath (re = 回, pro = 向前).
3. Every word gets one exam collocation (*reduce pollution*, *provide food and water*).
4. Write one original question (高考: 完形 / 语法填空 style; 四级 / 六级: 选词填空 style) that one of today's words answers, with four options and one correct answer. Label it with the exam's label (`高考风格原创练习题`, `四级风格原创练习题`, `六级风格原创练习题`). Use `真题` only for a real past paper, with its year and source.
5. Don't repeat a root used in the last 10 episodes of the same line (look at the folder names in `episodes/`).

### Reading — picture book

1. A small, true-to-life story from the audience's world: school for 高考; campus, dorm, library, part-time jobs and internships for 四级 / 六级. Little Pig is the hero, called "Little Pig" in English and 小猪 in Chinese.
2. 8–10 sentences over 4–6 pages, past tense, at the exam's level (`EXAMS.md`: 高考 and 四级 B1–B2 and up to about 20–22 words; 六级 B2–C1 and up to about 28 words).
3. 4–6 target words with the exam's levels (at most one 拓展), each used once in a sentence whose context explains it. Set `pictureBook.level` to the audience (高一 · 高二 / 大学英语四级 / 大学英语六级).
4. One comprehension question (主旨 / 细节 / 推理 / 词义猜测) whose answer one sentence proves.

### Reading — caption news

1. **Facts first.** Find 1–3 primary sources (CDC, WHO, NIH, a government statistics office, a journal). Write `FACTS.md` before anything else. For each claim: URL, page date, and the exact quoted sentence. Look at `reading-episodes/002_teen_sleep_news/FACTS.md` for the format.
2. Five original sentences in the arc: what experts say → the surprising number → why → the consequence → one simple step. Don't copy the source's sentences.
3. Every number on screen must match a quote; round honestly ("about 1 in 4" for 24 %).
4. Health topics: say only what the source says. No advice of your own.

---

## 5. Step 4 — treatment (`TREATMENT.md`)

Fill every section of the template file before touching `data/`:

1. Three candidate structures and the one you chose, with the reason.
2. Logline and arc.
3. The hook: the first frame and first line. The content starts in the first second; no greeting.
4. The shot list, using the template's scene kinds (listed in its `SKILL.md`).
5. The signature shot.
6. Cue map: BPM and key, the silences (`pauseBefore`), and the `cueAt` words.
7. Sound table.
8. Keywords per line.
9. **Versus the previous episode of the same template**, on six points: structure, opening image, signature shot, camera path, score shape, ending. At least three must differ. Each template's `SKILL.md` lists "variation knobs" that change these points.

---

## 6. Step 5 — write the data

### 6.1 Rules for every template

- Edit only the files in your episode's `data/`. Never edit `remotion-template/src/data/`: it is overwritten by `episode:use`.
- Keep the type declarations at the top of each data file exactly as they are. They are the contract with the template.
- **Visible Chinese** must use common simplified characters (GB2312). `check` lists any character the fonts can't draw; rephrase with a common word.
- **`voiceScript.ts`**: one entry per spoken line.
  - `text` is what the voice reads. `subtitle` is what the screen shows. They may differ, and often should (§6.3).
  - `instruction` sets the tone for the whole template. Copy it from the reference, but change the audience for 四级 / 六级 (高中生 → 大学生); don't invent a new persona.
  - `emotionInstruction` sets the tone of one line.
  - `speedHint`: copy the reference episode's choice for the same kind of line: `fast-clear` for most vocab lines, `medium-clear` for the root line, `very-fast` only for the game-show lightning round, and `medium` for story and news lines.
- Every line id used by a scene must exist in `voiceScript.ts`, and every voice line must be used by a scene.
- `episodeConfig.ts`: keep `type`, `width`, `height` and `fps` as copied. Rewrite every `cover` field (a one-line headline of about 16 characters or fewer, readable at thumbnail size) and keep `creatorName: '小猪盖被'`.
- `score: {bpm, key}`: change at least one of them from the previous episode of the template. `bpm` must sit inside the style's range for the pace (`npm run music -- --list`; e.g. game show at fast: 124–132). Leave `style` and `kit` out unless the owner asks for another sound (`PACE_AND_MUSIC.md`).

### 6.2 What to rewrite, per template

| Template | Must rewrite | Watch out |
|---|---|---|
| vocab-dossier | `dossier.ts`: case question, root, words (parts, literal, meaning, collocation), `scenes[].cueAt` (`loss`, `loupe`, `arrow`, `verdict`, `redact`, `end`), `solveHint`, homework, `lineMeta` | `cueAt` words must appear in the spoken `text` of that scene's lines |
| vocab-game-show | `gameShow.ts`: `root`, `words`, `scenes` (one `round` per word, a new `set` hue per scene, `judgement` words), `grade`, `bonus` | neighbouring scenes never share a hue. Round lines follow `第N关！<prefix>，<gloss>。<literal>，<word>，<meaning>。` exactly as in the data. The sign-off line contains `下一个` |
| vocab-whiteboard | `whiteboard.ts`: `title`, `root.forms`, `words` (exactly one with `twist`), `scenes[].cueAt`, `homework` | a root the voice misreads is spelled `V I S` in `text`, and `cueAt` uses the spoken form |
| reading-picture-book | `pictureBook.ts`: `title`, `targets`, `translations` (one per voice line), `question` with `evidenceLineId`, `scenes` (pages, `illustration` setting, props, pig x/face/pose) | `targets[].word` must appear exactly in one story sentence. The pig `x` is 0–1 across the page |
| reading-caption-news | `captionNews.ts`: `kicker`, `headline`, `chunks` (zh, keyword, graphic, sourceId), `sources` (same as FACTS.md), `vocab`, `question` | `keyword` must be an exact phrase of the subtitle. Every line with a number needs a `sourceId` |

### 6.3 Writing lines the voice reads correctly

| Situation | Write in `text` | Show in `subtitle` |
|---|---|---|
| A number in an English sentence | `eight to ten hours`, `one in four` | `8 to 10 hours`, `1 in 4` |
| A root read as a word (*vis* → "vice") | `V I S` | `vis` |
| A root that should sound like a syllable | `duck` (for *duc*) | `duc` |
| The pig's English name | `Little Pig` | `Little Pig` |
| An English word right after a Chinese phrase at the start of a line | move it: let the previous line name it, start this line in Chinese | — |
| A Chinese key word the voice blurs (结案 → "请按") | rephrase: `案子，结了` | as you like |

---

## 7. Step 6 — check and produce

```powershell
npm.cmd run episode:use -- ../episodes/<episodeId>       # or ../reading-episodes/<episodeId>
npm.cmd run check
```

Fix every `ERROR` and run `check` again. A `warn` is allowed only if you explain it in `notes.md`. Before the first voice run, "No generated voice yet" is expected.

Then:

```powershell
npm.cmd run produce
```

| Stage | What it does | Typical time |
|---|---|---|
| Check | content rules | seconds |
| Voice | DashScope TTS for new or changed lines only (`-- --voice` redoes all) | 1–2 min |
| Voice check | speech-to-text of every line, compared with the script | 2–6 min on CPU |
| Check | again, now with the real length | seconds |
| Timeline | prints the scene table and total length | seconds |
| Score and SFX | synthesizes the music and effects to the real timing | under 1 min |
| Render + QA | stills, video, −14 LUFS, QA report, cover, caption, publish notes | 5–15 min |

If it stops, the last lines say which step failed and why. Fix it (§11 lists every message) and run `npm run produce` again. Unchanged voice lines are reused, so a rerun is cheap.

A successful run ends with `PRODUCE DONE` and writes `exports/<id>_handoff.md`.

### When `voice:check` fails a line

The output shows what the transcriber heard, for example `FAIL  r-support: heard "第四关，SAP就是SAP" missing ['sup', 'sub']`.

1. Listen to the line (`<episode>/audio/segments/`).
2. If the voice really said the wrong thing, rewrite `text` using §6.3, then run `produce` again.
3. If the voice was right and only the transcription differs (British *port* heard as "pot"), add `asrAccept: {port: 'pot'}` to that line. Write it in `notes.md` as "needs a human listen". Never use `asrAccept` without listening.

### When the length is outside the template's range

Change things in this order: cut filler words in the narration (就是, 其实) → shorten `holdAfter` and `pauseBefore` values above 0.5 s → remove one word or one story sentence (vocab: keep at least 4 words). Never shorten the read-time holds in code. If the episode is too short, add a beat: a bonus word, a longer pause before the payoff, or one more example.

---

## 8. Step 7 — visual review (required)

`QA PASS` measures size, length, loudness and black frames. It cannot see overlaps. Open these and look:

1. `exports/<id>_contact_sheet.jpg`: one frame every 2 s.
2. Every still in `remotion-template/out/qa/<id>/`: one per scene, at its busiest moment.
3. The template's `references/qa_checklist.md`: tick every box.

Always check:

- No text overlaps other text, a graphic or the pig.
- Nothing is cut off at the frame edge. Essentials stay inside x 70–930 and y 170–1650.
- The pig stands on its ground line or beside the content, never over text, and looks exactly like the reference episodes.
- Every Chinese line is readable; no character renders in a fallback font (a different-looking glyph).
- The cover reads at thumbnail size: title, the root or headline, the pig.

If something is wrong:

- Fix it in the **data** (shorter text, a different word, the pig's `x`, a different prop position), then run `produce` again.
- If the only fix is in template code (a layout that breaks for any reasonable data), don't patch it yourself: report it to the owner with the still and the data that triggers it.

To look at one moment closely: `npx remotion still src/index.ts <VideoComposition> out/check.png --frame=<frame>`. The composition ids are in `src/templates/registry.ts`; frame = seconds × 30.

---

## 9. Step 8 — notes, commit, hand off

1. Fill in `notes.md` (its sections come from `npm run new`): the QA numbers, the visual review, the voice check (rewritten lines and `asrAccept` entries), fixes, accepted warnings.
2. Commit only the episode folder's tracked files: `brief.md`, `TREATMENT.md`, `notes.md`, `FACTS.md`, `data/`. `exports/`, `audio/` and `out/` are ignored on purpose. Never commit `.env`.
3. Report to the owner with this message:

```text
Episode <id> (<template>) is ready.
- Video: <path to exports/<id>.mp4>, <length> s, QA PASS
- Cover / caption / publish notes: exports/
- Pinned-comment answer: <from _publish_notes.md>
- Please listen to: <lines with asrAccept, or "none">
- Sources (news): <URLs>
- Template warnings or problems I could not fix in data: <none / details>
```

### Definition of done (all must hold)

- [ ] `brief.md` and `TREATMENT.md` were written before the data; TREATMENT §9 shows at least 3 differences.
- [ ] `npm run check`: no errors.
- [ ] `npm run voice:check`: every line passes.
- [ ] `npm run produce` ended with `PRODUCE DONE` (render QA PASS).
- [ ] Contact sheet and scene stills reviewed against the template checklist.
- [ ] `notes.md` written; episode folder committed.

---

## 10. When to ask the owner

Ask, don't guess, when:

- no topic or line was given, and you can't choose from the owner's past requests;
- the owner names a template that `plan` says was used last time (confirm they want the repeat);
- a news topic has no primary source for the number you need;
- the fix needs a change to template code, `src/core/`, `src/brand/`, or the voice;
- the API key is missing or DashScope refuses requests.

Never: edit or replace the pig, change the voice, add music or images from the internet, present an original question as 真题, publish a number without a source, or write the API key anywhere.

---

## 11. Troubleshooting

| Message | Cause | Fix |
|---|---|---|
| `src/brand/BrandPig.tsx changed. The 小猪 IP is locked` | the pig file was edited | `git checkout -- remotion-template/src/brand/BrandPig.tsx` |
| `Another pig asset exists: …` | a pig image was added | delete that file; only `BrandPig` draws the pig |
| `A scene uses voice line "x", which is not in data/voiceScript.ts` | id typo or a missing line | make `scenes[].lines` and `voiceScript` ids match |
| `Characters outside the font subset …` | rare or traditional characters | rephrase with common simplified characters |
| `Only N words: a vocabulary episode needs 4–6` / `N 拓展 words` | content rule | add words of the exam's levels / swap extension words |
| `Word "x" is tagged "课标": a 四级 episode uses 四级 / 拓展` | levels copied from a 高考 reference | re-tag every word for the exam (`EXAMS.md`) |
| `Only N of M words are 六级` | a 六级 episode teaching mostly 四级 words | swap in 六级 words of the same family |
| `… is labelled "高考风格原创练习题" in a 四级 episode` | label copied from the reference | use the exam's label |
| `"高考" appears in a 四级 episode` (warn) / `The voice instruction talks to 高中生` (warn) | reference wording left in data or voice | rewrite for the exam and its audience |
| `雅思 uses British spelling (organise / organize)` (warn) | spelling convention of the exam | 雅思: British (colour, organise, centre); 托福 / GRE: American |
| `Question "…" has answerIndex … outside its options` | index is 0-based | A = 0, B = 1, C = 2, D = 3 |
| `says 真题 without a year and source` | 真题 label on an original question | use `高考风格原创练习题` |
| `News line "c2" states a number but has no sourceId` | unsourced number | add the source to `sources` and `FACTS.md`, set `sourceId` |
| `keyword "…" is not a phrase of its subtitle` | keyword text differs from the subtitle | copy the phrase exactly from `subtitle` |
| `Length 57.0 s is outside 39–54 s (vocab-dossier at pace fast)` | too much narration for the pace | §7, "When the length is outside" |
| `Length not checked yet: the voice is older than the script or the pace` (warn) | text or pace changed since the last voice | normal before `produce`; it re-voices and checks again |
| `[score] warning: 92 BPM is outside lofi-study's slow range` | `score.bpm` doesn't fit the style at this pace | set `bpm` inside the range (`npm run music -- --list`) |
| `Music: SoundFont` WARN in doctor | no FluidSynth or no `.sf2` | install them (`PACE_AND_MUSIC.md`); until then the built-in synth plays everything |
| `Unknown style "…"` | typo in `score.style` | use an id from `npm run music -- --list` |
| `brief.md is still the blank template` / `TREATMENT.md is still the blank template` | the documents were skipped | write them (§4, §5) before the data |
| `TREATMENT.md §9 (versus the previous episode) is empty` | no originality comparison | fill the six rows; at least 3 must differ |
| `data/<file> is still the reference episode's` | the copied data was not rewritten | rewrite every field for this episode (§6) |
| `Missing FACTS.md` | news episode without sources | write FACTS.md first (§4) |
| `Scene "…": cueAt.<key> "…" is not in its spoken text` (warn) | a timing word is not said in the line | change the token to a word the line really says, or reword the line |
| `The previous … episode (…) uses the same template` (warn) | no rotation | use the template `plan` suggests, or show 3 differences in TREATMENT §9 |
| `Voice is older than the script for: …` | text changed after the last voice run | `npm run produce` re-voices those lines |
| `DASHSCOPE_API_KEY is not set` | no key in `.env` or the environment | add it to the repository `.env` |
| `DASHSCOPE_TTS_VOICE=… overrides the brand voice` | a voice override in `.env` | delete that line from `.env` |
| `DashScope TTS failed for <line>: …` | key, quota, network or a text the API rejects | check the key and account; behind a proxy set `NODE_USE_ENV_PROXY=1`; simplify unusual symbols in `text` |
| `voice:check` → `ModuleNotFoundError: faster_whisper` | Python packages missing | `python -m pip install -r scripts/requirements-voice-check.txt` |
| `FAIL <line>: heard "…" missing [...]` | the voice misread a word | §7, "When voice:check fails a line" |
| `QA FAIL … Loudness` or `Peak` | the mix was made from an older audio state | run `npm run produce` again (audio is rebuilt before the render) |
| `QA FAIL … black frames` | a scene has no background for some frames | report it to the owner with the timestamp (template bug) |
| `npm.ps1 cannot be loaded` (PowerShell) | execution policy | use `npm.cmd` |
| `No active episode` | `episode:use` not run | `npm run episode:use -- ../episodes/<id>` |
| a still shows the wrong episode's content | another episode is active | run `episode:use` for your episode, then `produce` |
