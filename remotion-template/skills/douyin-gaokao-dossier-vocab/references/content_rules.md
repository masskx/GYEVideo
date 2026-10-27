# Content rules: Gaokao vocabulary dossiers

## 1. Choosing the root and the words

- **Start from the exam, not the dictionary.** Pick a root because it unlocks several words in the Gaokao curriculum word list (课标词汇), not because it is interesting.
- **4–6 exhibits per episode** (5 is the sweet spot for ~60 s). Tag each `level: '课标'` or `'拓展'`; at most one `拓展` word, and never a word a Gaokao student will not meet in reading or cloze.
  - Good: produce, reduce, introduce, conduct, education (all 课标).
  - Bad: altimeter, altiplano, altissimo (no student needs them, and they crowd out words that score).
- **Check each word against your own copy of the curriculum list** (e.g. a `content/gaokao_wordlist.txt` you maintain). This skill does not ship an official list.
- **Prefer roots that split cleanly** into prefix + root + suffix with a literal meaning a 16-year-old believes in one breath (re = 往回, pro = 向前). If the etymology needs a paragraph, choose another root.
- **Every word gets one exam collocation** (`collocation`), the phrase that actually shows up in reading or writing: *reduce pollution*, *conduct a survey*, *receive a good education*.
- Optional `bonus`: a same-family word worth one beat (*product* under *produce*).

## 2. The hook (first 3 seconds)

- **Open on the case, not on a title.** The first frame is already the question: a cloze stem being typed and options dropping in. The headline pops in the first second.
- The question must be **one the root actually solves**, with four options sharing the root. That is the whole promise of the episode.
- Write it as an original item and label it `sourceNote: '高考风格原创练习题'`. Quote a real past paper only with its year and source.
- One line of narration names the pain ("四个选项长得像四胞胎"), the next lists the suspects. No greeting, no "今天我们来学".

## 3. Exhibit anatomy (one word, about 5 s)

In this order, each on its own cue (the narration says them in this order):

1. **Parts**: colour-coded blocks with a gloss under each (prefix cobalt, root yellow, suffix paper).
2. **Literal meaning** on a hand note: "↓ 向前带出来".
3. **The word**, per-character pop, root letters in yellow, then phonetic + part of speech.
4. **Exam meaning** with a yellow marker underline.
5. **Collocation tag** (`高考搭配`), not narrated, in with the meaning so it stays long enough to read.

Narration pattern: `<prefix>，<gloss>。<literal>，<word>，<meaning>。` Short, the same every time, so the rhythm itself teaches.

## 4. Solve and homework

- **Solve** returns to the opening case (the bookend): the root's logic is applied ("往回带"), wrong options are redacted one by one, the answer fills the blank, a silence, then the stamp.
- **Homework** is a second, new question the viewer answers in the comments. Its answer stays redacted on screen. Pin the answer in the comments when the next episode goes up (`_publish_notes.md` has it).

## 5. Voice

- Default voice: DashScope `cosyvoice-v3-flash`, `longanhuan`, as in the rest of the repository. Tone: a detective reporting a case, calm and certain with a little humour; never shouting.
- `speedHint: 'fast-clear'` (1.18×) for most lines; `medium-clear` (1.0×) only for the root line.
- **`text` is what the voice reads; `subtitle` is what the screen shows.** They may differ: spell a word the way it should sound (`duck` for the root *duc*) while the screen shows the real spelling.
- **Don't open a line with an isolated English fragment right after a Chinese phrase** ("指纹 duc，就是 lead"). CosyVoice misread exactly that in the 060 episode. Let the previous line name the root, and start the next line in Chinese ("意思是 lead：…").
- **Transcribe every line before rendering** (faster-whisper, `language="zh"`) and compare with the script. Same-sounding characters are fine (网回 for 往回, 按字节了 for 案子结了); a different word is not ("请按" for "结案" meant the voice blurred the key word; it was rewritten).
- Spell numbers the way they should be read in `text`, digits in `subtitle`.

## 6. Length budget (~60 s)

| Section | Seconds |
|---|---|
| Case (hook + suspects) | 8–9 |
| Fingerprint | 4 |
| Root mugshot | 4 |
| 5 exhibits | 24–27 |
| Evidence board | 3–4 |
| Solve + verdict | 7–8 |
| Homework + sign-off | 8–10 |

If the measured timeline runs over ~65 s, cut words in the narration (就是, 别慌), not exhibits, and never shorten the caption holds below the read-time rule. `npm run voice` followed by a look at the scene table (see `qa_checklist.md`) tells you where the time went.

## 7. Variation (what must change between episodes)

The look is the brand; the film must not repeat. Vary at least three of: structure, opening image, signature shot, camera path, score shape (key, `bpm`, which section drops out), ending. Also rotate:

- the hook's pain line (完形 / 阅读 / 作文 / 听力 angle),
- the stamp vocabulary (结案, 锁定, 证据确凿, 待破案),
- which exhibit carries the bonus word,
- the dot-wipe inks (`wipeInk`).
