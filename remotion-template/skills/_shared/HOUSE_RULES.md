# House rules (every template, every episode)

These rules hold for all five templates. Each template's `SKILL.md` adds its own look and structure on top; where a template skill is stricter, follow it. Rules marked ✔ are enforced by a script (`npm run check`, `npm run voice:check` or the render's QA report); the rest are on you.

## 1. Pick the template first

The account posts two lines, and each has several templates so that the feed never looks the same twice:

| Line | Templates (`src/templates/registry.ts`) | Folder |
|---|---|---|
| 单词 vocab | `vocab-dossier` 高考词汇案卷 · `vocab-game-show` 词根闯关 · `vocab-whiteboard` 白板词根图 | `episodes/` |
| 双语阅读 reading | `reading-picture-book` 英文绘本精读 · `reading-caption-news` 双语新闻阅读 | `reading-episodes/` |

- Run `npm run plan`: it lists the latest episodes per line and names the template used least recently. Use that one unless the owner asked for another.
- Never post the same template twice in a row within a line ✔ (warning). If you must, at least 3 of the 6 points in `TREATMENT.md` §9 must differ from that episode.
- The legacy lines (`root-word` black/yellow, `sentence-pattern`) are frozen: no new root-word episodes; sentence episodes continue under `skills/douyin-remotion-sentence-video` unchanged.

## 2. The brand: one pig, never changed

The IP is **小猪** (English name **Little Pig**, the account is 小猪盖被). It is drawn by exactly one component, `src/brand/BrandPig.tsx`, locked by `src/brand/pig.lock` ✔.

Allowed — through props only:

- placement and size (`x`, `y`, `size`), mirroring (`flip`), a landing hop (`landAt`), a lift or a small tilt (`lift`, `rotate`);
- the built-in faces `neutral` · `squint` · `happy` · `surprised` and poses `idle` · `inspect` · `cheer` · `point`.

Never:

- edit, copy, trace or restyle the drawing (colours, outline, hat, coat, proportions, the line boil);
- add clothes, props in its hands, new expressions, speech in its own drawn mouth, or a second pig;
- add any other pig image or icon ✔ — `public/` and `shared-assets/` must contain no pig files;
- put the pig where it covers content: it stands on a ground line or beside the content, never over text.

A template may change the background around the pig (crayon page, whiteboard, studio set), not the pig. In legacy covers, `cute_pig` resolves to the same `BrandAvatar`.

## 3. The voice: one narrator

- DashScope `cosyvoice-v3-flash`, voice `longanhuan` (`src/brand/brand.ts`). Never switch voice per template; change only the `instruction` / `emotionInstruction` tone.
- `DASHSCOPE_API_KEY` comes from the environment only. Never write it to a file, a commit, a log or a message.
- `text` is what the voice reads, `subtitle` what the screen shows. They may differ:
  - spell numbers out in English text (`eight to ten hours`, `one in four`), digits in the subtitle;
  - spell a root letter by letter when the voice reads it as a word (`V I S` for *vis*);
  - spell a root the way it should sound when it is a real syllable (`duck` for *duc*).
- Don't start a line with an isolated English fragment right after a Chinese phrase; let the previous line name the word.
- English names must be English (`Little Pig`, never `Xiaozhu` in English text).
- Run `npm run voice:check` after every `npm run voice` ✔. It transcribes every line (faster-whisper medium) and compares English by word and Chinese by toneless pinyin. A failing line is rewritten and regenerated.
- `asrAccept` (`{word: heard}`) is only for a word that is pronounced correctly but transcribed differently (British *port* heard as "pot"). Add it only after listening to the line yourself, and note it in `notes.md`.

## 4. Frame, type and safe area

- 1080 × 1920, 30 fps. **Pace** (`pace` in `episodeConfig.ts`, details in `PACE_AND_MUSIC.md`) sets the voice speed, the gaps and the length range ✔: new episodes use `fast` (Douyin / TikTok; about 35–55 s, 80–90 % of the runtime narrated). `relaxed` keeps the old 50–72 s cut for long explanations.
- Keep essentials inside x 70–930, y 170–1650. The right column (x > 930, y 900–1500) has the Douyin buttons; the bottom 270 px has the account name and description.
- Fonts come only from `src/core/fonts.ts` (`stack(...)`, `useFonts`). They are subset to GB2312 + Latin + IPA; every visible Chinese character must be in `public/fonts/charset-gb2312.txt` ✔ (use 着 not 著, 里 not 裡 — simplified, common characters).
- The root / keyword highlight is yellow in every template (each template has its own exact hue). Red means wrong, a stamp or an alarm — nothing else.

## 5. Exam content (高考, 四级, 六级, 考研, 雅思, 托福, GRE)

Each episode is made for one exam: `exam: 'gaokao' | 'cet4' | 'cet6'` in `data/episodeConfig.ts` (missing = gaokao). The audience, word levels, difficulty and labels per exam are in **`EXAMS.md`**; the labels on screen come from `src/core/exam.ts` automatically.

- **Words** carry a level the exam allows ✔: 高考 `课标`; 四级 `四级`; 六级 `四级` / `六级` (at least half `六级` ✔); 考研 `考研`; 雅思 `雅思`; 托福 `托福`; GRE `GRE`; every exam also allows `拓展`, at most once per episode ✔. A vocabulary episode has 4–6 words ✔. No word the exam's students will not meet in reading, cloze, translation or writing.
- Every vocabulary word gets an exam collocation or example, the phrase that shows up in papers.
- **Questions** have exactly one correct option, an `answerIndex` inside the options ✔ and a `sourceNote` ✔. Original items say the exam's label (`高考风格原创练习题`, `四级风格原创练习题`, `六级风格原创练习题`; `…原创阅读题` for reading) ✔. Quote a real past paper (真题) only with its year and source ✔.
- **Reading texts** are original, written at the exam's level (高考 and 四级 CEFR B1–B2, 六级 B2–C1; sentence lengths in `EXAMS.md`; 3–6 target words, at most one of them 拓展). Don't copy news articles or exam passages; adapt the facts and write your own sentences.
- **Facts** (any number, study or claim in a news line) need a source: a `sources` entry, a `sourceId` on the line ✔ and the URL with quoted wording in the episode's `FACTS.md` ✔. Prefer primary sources (CDC, WHO, a journal, a government page). Health topics give no advice beyond what the source says.
- The comment question (homework / reading question) has its answer in `_publish_notes.md` for the pinned comment.

## 6. Sound

- The score is composed per episode by the local music engine (`scripts/music/`, `PACE_AND_MUSIC.md`): the style comes from the template and the pace, the sections follow the scenes, and it renders with a local SoundFont, your own sample kit or the built-in synth. Never use downloaded or copyrighted tracks. SFX are synthesized (`scripts/audio/`). `npm run audio` runs after the voice, because the score follows the real timing.
- `score.bpm` sits inside the style's range for the pace (`npm run music -- --list`); every score is mastered to −16 LUFS so beds are equally loud.
- Every visible action has its sound (a cue in the timeline names the SFX); the music empties before the payoff and the payoff is the first sound after the silence.
- Loudness −14 LUFS ±0.5, peak ≤ −0.5 dBFS ✔ (the render normalizes and checks).

## 7. Code rules for agents

- Episode content lives in the episode folder's `data/*.ts` only. Never put an episode's words, ids or text in template code; add a data field (`cueAt`, a label) instead.
- Data files are self-contained (types declared inline, no imports), because `episode:use` copies them into `src/data/`.
- Don't edit `src/core/` or another template for one episode. Fix a template bug in the template, then re-render its reference episode to prove nothing broke.
- `exports/`, `audio/` and `out/` are gitignored. Commit the data, `brief.md`, `TREATMENT.md`, `FACTS.md`, `notes.md`.

## 8. Definition of done

An episode is done when all of these hold and are recorded in its `notes.md`:

1. `brief.md` and `TREATMENT.md` written before the data, with §9 (versus the previous episode) filled in.
2. `npm run check` passes (no errors; warnings explained in notes).
3. `npm run produce` ends with `PRODUCE DONE`: it ran voice, `voice:check` (every line passes), check again, audio and the render with `QA PASS` (frame size, length, loudness, peak, no black frames, voice ends before the video), and wrote `exports/<id>_handoff.md`.
4. A person has listened to every line that uses `asrAccept` (listed in the handoff), or the report says it still needs a listen.
5. You looked at `exports/<id>_contact_sheet.jpg` and the per-scene stills in `out/qa/<id>/` against the template's QA checklist: no text overlaps, nothing clipped, the pig on its ground line, every Chinese line readable.
6. `exports/` contains `<id>.mp4`, `_cover.png`, `_caption.txt`, `_publish_notes.md`, `_qa.md`, `_contact_sheet.jpg`, `_handoff.md`.

The step-by-step procedure, troubleshooting and the report format are in `docs/agent_playbook.md`.
