# Exams: 高考 · 四级 · 六级 · 考研 · 雅思 · 托福 · GRE

Every template serves seven exams. The **look, the pig, the voice, the pace and the pipeline are the same** for all of them. What changes is the audience, the words, the difficulty, the question style and the labels. An episode chooses its exam once, in `data/episodeConfig.ts`:

```ts
exam: 'gaokao',   // 'cet4' | 'cet6' | 'kaoyan' | 'ielts' | 'toefl' | 'gre'; a missing field means gaokao
```

`npm run new -- <template> <id> --exam ielts` sets it for you. The exam profile in `src/core/exam.ts` supplies everything exam-specific on screen and in the copy:
- labels (雅思搭配, 托福词汇题, 考研完形, 本篇GRE词, the cover stamp, series names);
- the question label;
- the hashtags.

Never type an exam name into template code.

## At a glance: domestic exams

| | 高考 `gaokao` | 四级 `cet4` | 六级 `cet6` | 考研 `kaoyan` |
|---|---|---|---|---|
| Audience (voice talks to) | 高中生 | 大学生 | 大学生 | 考研生 |
| Word levels | `课标` | `四级` | `四级`, `六级` (≥ half `六级`) | `考研` |
| Word list | 课标词汇 (~3,000) | CET-4 syllabus (~4,500) | CET-6 syllabus (~5,500) | 考研英语大纲 (~5,500) |
| English level | CEFR B1–B2, ≤ 20 words a sentence | B1–B2, ≤ 22 | B2–C1, ≤ 28 | B2–C1, ≤ 30, long sentences explained |
| Vocab question | 完形 / 语法填空 | 选词填空 style | 选词填空 style, close distractors | 完形填空 style (context logic) |
| Reading question | 主旨 / 细节 / 推理 / 词义 | 仔细阅读 | 仔细阅读 + inference | 阅读 Part A: 主旨 / 推理 / 态度 / 例证 |
| Picture-book `level` | 高一 · 高二 | 大学英语四级 | 大学英语六级 | 考研英语一 / 英语二 |
| Hashtags (auto) | #高考英语 #高考词汇 | #英语四级 #四级词汇 | #英语六级 #六级词汇 | #考研英语 #考研词汇 |

## At a glance: study-abroad exams

| | 雅思 `ielts` | 托福 `toefl` | GRE `gre` |
|---|---|---|---|
| Audience | 留学备考生 | 留学备考生 | 申研留学生 |
| Word levels | `雅思` | `托福` | `GRE` |
| Word source | Academic Word List (AWL, 570 families) + IELTS topic vocabulary | academic lecture / reading vocabulary by discipline | high-level Verbal vocabulary (C1–C2) |
| English level | B2–C1 (target band 6.5–7) | B2–C1 | C1–C2 |
| Spelling | British (colour, organise, centre) | American (color, organize, center) | American |
| Vocab question | sentence / summary completion | "closest in meaning to" (vocabulary-in-context) | Text Completion / Sentence Equivalence (as single choice) |
| Reading question | True / False / Not Given, headings → as 4 options | detail, inference, rhetorical purpose | author's attitude, argument structure |
| Picture-book `level` | 雅思 6.5+ | 托福 100+ | GRE Verbal |
| Hashtags (auto) | #雅思 #雅思词汇 | #托福 #托福词汇 | #GRE #GRE词汇 |

All exams: at most one `拓展` word per episode, and original questions labelled `<exam>风格原创练习题` / `<exam>风格原创阅读题`. A real past paper is `真题` only with its year and source.

**Word lists are the owner's.** The sizes above are approximate. Check each word against the owner's copy of the official list (for example `content/wordlists/<exam>.txt` if the owner adds one). If you are not sure a word is on the list, choose another word.

**Exam formats change.** Before naming a task type, section, timing or score scale on screen, check the official page:
- 雅思: ielts.org
- 托福: ets.org/toefl. The TOEFL iBT was revised in 2026; don't write task names or scores from memory.
- GRE: ets.org/gre
- 考研: the year's 考试大纲
- 四六级: cet.neea.edu.cn

---

## 高考 (`gaokao`)

The default exam and the one the reference episodes are made for. Rules: `HOUSE_RULES.md` §5.

## 四级 (`cet4`)

- **Words.** Roots whose family gives 4–6 CET-4 words a first-year student doesn't own yet. Avoid words every high-school student knows (*import*, *visit*). Example: *spect* → inspect, prospect, perspective, spectator, spectacular.
- **Collocations** from CET writing and translation: *conduct a survey*, *play an important role in*, *have access to*.
- **Questions.** The vocab templates use one blank with four options in the spirit of 选词填空; the real section has 15 options for 10 blanks. Reading questions are 仔细阅读-style, with options that paraphrase the text.
- **Voice.** Talks to 大学生: confident, practical, never childish.
- **Ideas:**
  - 翻译高频词 for Chinese culture and society (*heritage*, *urbanization*);
  - 写作替换词 (*important* → *crucial*, *vital*);
  - campus-life stories adapted (translated and simplified, never copied) from `大学生活真实情绪故事100篇.md`.

## 六级 (`cet6`)

- **Words.** At least half `六级`. The rest may be `四级` words of the same family that make the 六级 ones easy. `check` enforces the half rule.
- **Difficulty.** Sentences up to about 28 words, abstract topics, and one inference step in the question; distractors are half-true.
- **Ideas:**
  - academic word families (*-ology*, *-cracy*, *bene-*);
  - abstract nouns for essays (*sustainability*, *dilemma*);
  - research-finding news (one study, with its sample and its limit quoted in FACTS.md).

## 考研 (`kaoyan`)

- **The exam.** 英语一 (most academic master's programmes) and 英语二 (professional degrees such as MBA, MPA). Both have:
  - 完形填空 (20 blanks);
  - 阅读理解: Part A, four passages with multiple choice, plus 新题型 and 翻译;
  - 写作: a short letter or notice and a long essay.
- **Words.** From the 考研英语大纲 (~5,500), tagged `考研`. The highest-value content is **熟词僻义**: familiar words with an exam-only meaning (*address* = 处理, *novel* = 新颖的, *figure* = 认为, *spring* = 涌现). It also includes abstract nouns and verbs from 阅读 (*undermine*, *ambiguity*, *compelling*).
- **Long sentences.** 考研 rewards decoding long sentences. Reading templates may use one 25–30-word sentence per episode, and the Chinese line splits it into its parts (主干 + 从句).
- **Questions.**
  - Vocab: 完形填空 style, with context-logic distractors;
  - Reading: Part A types: 主旨, 推理, 作者态度, 例证目的.
- **Voice.** Talks to 考研生: steady, efficient, encouraging, like a tutor in the last 100 days.

## 雅思 (`ielts`)

- **The exam.** Academic and General Training modules; Listening, Reading, Writing (Task 1, Task 2), Speaking (Parts 1–3); band scores 0–9.
- **Words.** Tagged `雅思`. Use two sources:
  - the **Academic Word List** (*analyse*, *significant*, *approach*, *factor*);
  - **topic vocabulary** that Task 2 and Speaking Part 3 reuse: education, environment, technology, urbanisation, health, globalisation, work.
  
  Teach words a candidate can **use in writing or speaking**, and say so in the narration ("Task 2 里可以这样写").
- **Spelling.** British throughout, in subtitles and on screen: colour, organise, centre, programme, analyse. IELTS accepts either spelling, but this account is consistent.
- **Questions.**
  - Vocab: sentence or summary completion;
  - Reading: True / False / Not Given, or matching headings, rewritten as one question with four options.
- **Ideas:**
  - Task 1 chart verbs (*soar*, *plummet*, *fluctuate*, *level off*);
  - Task 2 linking phrases;
  - Speaking Part 2 story stems.

## 托福 (`toefl`)

- **The exam.** An academic English test in four skills (Reading, Listening, Speaking, Writing) built on university lectures and textbook passages. ETS revised the test in 2026: check ets.org for the current task types and score scale before naming them.
- **Words.** Tagged `托福`. Academic discipline vocabulary from lectures and readings: biology (*symbiosis*, *predator*), geology (*erosion*, *sediment*), astronomy (*orbit*, *nebula*), art history, psychology, economics.
- **Spelling.** American throughout.
- **Questions.**
  - Vocab: vocabulary-in-context, "The word X in the passage is closest in meaning to …";
  - Reading: detail, inference, and rhetorical purpose ("why does the author mention …").
- **News template.** Science findings suit 托福 best. Keep the FACTS.md rule.

## GRE (`gre`)

- **The exam.** The GRE General Test (shortened in 2023). Verbal Reasoning has Text Completion (1–3 blanks), Sentence Equivalence (two answers that give the same meaning) and Reading Comprehension, scored 130–170.
- **Words.** Tagged `GRE`. C1–C2 words with precise connotation: *laconic*, *obdurate*, *equivocate*, *mitigate*, *laud*, *prosaic*. Teach the positive or negative colouring (褒贬) and a second meaning when it exists (*qualify* = 限定, *check* = 抑制).
- **Questions.**
  - Text Completion with logic signals (*although*, *far from*, *hence*);
  - Sentence Equivalence as single choice (pick the word that keeps the meaning).
  
  Distractors are near-synonyms with the wrong colouring.
- **Voice.** Talks to 申研留学生: brisk and precise. Lines can be denser; the pace still applies.

---

## Which template fits which exam

| Template | Strongest for |
|---|---|
| `vocab-dossier` (a question is the case) | 高考, 四级, 考研 完形, GRE Text Completion |
| `vocab-game-show` (rounds, lightning) | 高考, 四级, 六级 word families; 雅思 topic words |
| `vocab-whiteboard` (word map with a twist) | 考研 熟词僻义, GRE connotation, 托福 academic families |
| `reading-picture-book` (a story) | 高考, 四级 (campus life), 雅思 Speaking Part 2 stories |
| `reading-caption-news` (sourced facts) | 六级, 考研, 雅思, 托福 science reading |

## What `npm run check` enforces per exam

- `exam` is a known exam id.
- Every word level is allowed for the exam; at most one is `拓展`.
- 六级: at least half the words are `六级`.
- A question labelled `…风格原创…` names this episode's exam.
- Warnings when:
  - another exam's name appears in visible text or narration (usually left over from a reference episode);
  - the voice instruction talks to another exam's audience.

## What to rewrite when the exam is not 高考

The reference episodes are 高考 episodes. After `npm run new -- … --exam <exam>`, rewrite at least:

1. every `level`;
2. every `sourceNote`;
3. the `instruction` of every voice line (the audience);
4. `episodeConfig.cover` (badge, headline, sub-headline);
5. the picture book's `level` field;
6. any 高考 wording in the narration or the data;
7. for 雅思, the spelling to British.
