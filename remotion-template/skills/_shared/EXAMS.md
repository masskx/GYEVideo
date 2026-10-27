# Exams: 高考, 四级 (CET-4), 六级 (CET-6)

Every template serves three exams. The **look, the pig, the voice and the pipeline are the same** for all three. What changes is the audience, the words, the difficulty and the labels. An episode chooses its exam once, in `data/episodeConfig.ts`:

```ts
exam: 'gaokao',   // or 'cet4', 'cet6'; a missing field means gaokao
```

`npm run new -- <template> <id> --exam cet4` sets it for you. All on-screen labels (四级搭配, 四级选词填空, 本篇四级词, the cover stamp…) and the hashtags come from the exam profile in `src/core/exam.ts`. Never type an exam name into template code.

## At a glance

| | 高考 `gaokao` | 四级 `cet4` | 六级 `cet6` |
|---|---|---|---|
| Audience (voice talks to) | 高中生 | 大学生 | 大学生 |
| Word levels allowed | `课标`, `拓展` (≤ 1) | `四级`, `拓展` (≤ 1) | `四级`, `六级`, `拓展` (≤ 1); **at least half `六级`** |
| Word list | Gaokao curriculum list (课标词汇, about 3,000 words) | CET-4 syllabus (about 4,500 words) | CET-6 syllabus (about 5,500 words) |
| Difficulty of English | CEFR B1–B2, sentences ≤ 20 words | B1–B2, sentences ≤ 22 words | B2–C1, sentences ≤ 28 words, one subordinate clause welcome |
| Vocab question style | 完形 / 语法填空 single blank | 选词填空-style single blank | 选词填空-style single blank, closer distractors |
| Reading question style | 主旨 / 细节 / 推理 / 词义猜测 | 仔细阅读: 细节 / 推理 / 主旨 / 态度 | 仔细阅读 with inference and attitude; paraphrased options |
| Original question label (`sourceNote`) | 高考风格原创练习题 / 高考风格原创阅读题 | 四级风格原创练习题 / 四级风格原创阅读题 | 六级风格原创练习题 / 六级风格原创阅读题 |
| Picture-book `level` field | 高一 · 高二 | 大学英语四级 | 大学英语六级 |
| Story world | school, home, classmates | campus, dorm, library, clubs, part-time jobs | campus, internships, careers, society |
| News topics | health, school life, science | health, technology, campus, environment | technology, economy, society, research findings |
| Hashtags (automatic) | #高考英语 #高考词汇 | #英语四级 #四级词汇 | #英语六级 #六级词汇 |

The word-list sizes are approximate. Check each word against the owner's copy of the official list (for example `content/wordlists/cet4.txt` if the owner adds one). If you are not sure a word is on the list, choose another word.

## 高考 (`gaokao`)

The default and the reference episodes. The rules are in `HOUSE_RULES.md` §5: 课标 words, at most one 拓展 word, and questions labelled `高考风格原创练习题`.

## 四级 (`cet4`)

- **Words.** Choose roots whose family gives 4–6 CET-4 words a first-year student does not yet own. Avoid words every high-school student knows (*import*, *visit*). For example *spect* → inspect, prospect, perspective, spectator, spectacular (check each against the list). Tag them `四级`; at most one `拓展`.
- **Collocations** are the ones CET writing and translation use: *conduct a survey*, *play an important role in*, *have access to*.
- **Questions.** The vocab templates use one blank with four options, in the spirit of 选词填空 (the real section has 15 options for 10 blanks; ours is a one-blank practice item). Distractors share the root or the part of speech. Label: `四级风格原创练习题`.
- **Reading.** 5 sentences (news) or 8–10 (story), B1–B2. The question is 仔细阅读-style; options paraphrase the text instead of copying it. Label: `四级风格原创阅读题`.
- **Voice.** The same narrator. The `instruction` talks to 大学生 preparing for 四级: confident and practical, never childish. Reference episodes say 高中生; rewrite that. `check` warns until you do.
- **Ideas that suit 四级:**
  - 翻译高频词 (words for Chinese culture and society: *heritage*, *tradition*, *urbanization*);
  - 写作替换词 (*important* → *crucial*, *essential*, *vital*);
  - campus-life stories, for example adapted from `大学生活真实情绪故事100篇.md` (translate and simplify; never copy).

## 六级 (`cet6`)

- **Words.** At least half the words are `六级`; the rest may be `四级` words of the same family that make the 六级 ones easy (for example *spect*: `四级` inspect, perspective → `六级` spectrum, prospective; check each against the list). At most one `拓展`. `check` enforces the half rule.
- **Difficulty.** Longer sentences (up to about 28 words), abstract topics, one inference step in the question. Options paraphrase; distractors are half-true.
- **Labels.** `六级风格原创练习题`, `六级风格原创阅读题`.
- **Voice.** Talks to 大学生 preparing for 六级: calm and precise. Keep the lines short; the difficulty is in the English, not the speed.
- **Ideas that suit 六级:**
  - academic word families (*-ology*, *-cracy*, *bene-*);
  - abstract nouns for writing (*sustainability*, *initiative*, *dilemma*);
  - research-finding news (one study, its sample and its limit, quoted in FACTS.md).

## What `npm run check` enforces per exam

- `exam` is one of `gaokao`, `cet4`, `cet6`.
- Every word level is allowed for the exam, and at most one is `拓展`.
- 六级: at least half the words are `六级`.
- A question labelled `…风格原创…` names this episode's exam.
- Warnings when another exam's name appears in visible text or narration (copied from a reference episode), and when the voice instruction talks to the wrong audience (高中生 versus 大学生).

## What you must rewrite when the exam is not 高考

The reference episodes are 高考 episodes. After `npm run new -- … --exam cet4|cet6`, rewrite at least:

1. every `level` (课标 → 四级 / 六级);
2. every `sourceNote`;
3. the `instruction` of every voice line (高中生 → 大学生);
4. `episodeConfig.cover` (badge, headline, sub-headline);
5. the picture book's `level` field (大学英语四级 / 大学英语六级);
6. any 高考 wording in the narration or the data.
