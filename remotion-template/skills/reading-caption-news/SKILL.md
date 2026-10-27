---
name: reading-caption-news
description: Build ~55–70-second vertical Douyin bilingual reading shorts for Gaokao (高考) students in the 双语新闻阅读 Caption News template — a captions-first social-news explainer of one real, sourced topic (sleep, screens, exercise, climate) written as a short Gaokao-style passage, big white English caption chunks landing phrase by phrase with one keyword on the yellow block and Chinese under each, simple animated data graphics, SOURCE tags on every number, a reading question with 原文定位 and a key-word recap, with the locked 小猪 brand pig. Use when `npm run plan` names reading-caption-news or the owner asks for a news / science reading episode.
---

# 双语新闻阅读 · Caption News (reading)

A 60-second social-news video that is secretly a Gaokao reading passage. One topic, five chunks (one sentence each), each with a graphic above and the caption landing phrase by phrase as it is spoken. Every number on screen carries its source. Then a 主旨 / 细节 question with the evidence line, and the key words of the passage.

**Read `../_shared/HOUSE_RULES.md` and `../_shared/DIRECTING.md` first.** Look rules: `references/style.md`. Reference episode: `reading-episodes/002_teen_sleep_news` (58 s, CDC/AASM sources in `FACTS.md`).

## Workflow (from `remotion-template/`)

```powershell
npm.cmd run plan
npm.cmd run new -- reading-caption-news 003_<topic>_news
# FACTS.md first (sources), then brief.md, TREATMENT.md, data/captionNews.ts, data/voiceScript.ts
npm.cmd run episode:use -- ../reading-episodes/003_<topic>_news
npm.cmd run check           # fails without FACTS.md or with an unsourced number
npm.cmd run voice
npm.cmd run voice:check
npm.cmd run timeline        # 50–72 s
npm.cmd run audio
npm.cmd run render
```

## Facts first

1. Choose a topic students care about and the exam likes (health, school life, science, environment, technology).
2. Find 1–3 **primary** sources (CDC, WHO, NIH, a government statistics page, a peer-reviewed journal). Not blogs, not other videos.
3. Write `FACTS.md`: for each claim, the URL, the page date, and the exact quoted wording. A number on screen must match the quote (rounding stated: "about 1 in 4" for 24 %).
4. Health topics: report what the source says; no advice of your own, no diagnosis.

## Writing the passage

- 5 chunks, one sentence each, 10–20 words, Gaokao level (B1–B2). Original sentences; don't copy the source's text.
- Arc: what experts say → the surprising number → why (the mechanism) → the consequence → one simple step.
- 3–6 recap words (`vocab`), all 课标 but at most one 拓展.
- Question: 主旨 or 细节, one correct option, `evidenceLineId` = the chunk that proves it.

## Structure

| Scene kind | Lines | What happens | Seconds |
|---|---|---|---|
| `headline` | 1 | kicker chips, the headline slams word by word, Chinese headline, the pig | 3–5 |
| `chunk` × 4–6 | 1 each | graphic, caption phrase by phrase, keyword block, Chinese line, SOURCE tag | 5–8 each |
| `question` | 2 (question, answer) | options, thinking timer, answer highlighted, 原文定位 box | 10–12 |
| `recap` | 2 (recap, signoff) | key words with part of speech and meaning, comment prompt | 9–12 |

## Data (`data/captionNews.ts`)

- `kicker`, `headline`: `{en, zh}`.
- `chunks`: voice line id → `{zh, keyword?, graphic, sourceId?}`. `keyword` must be a phrase of the subtitle exactly. **`sourceId` is required on any line that states a number** (`npm run check`).
- `graphic` kinds: `clock` (a night clock with a highlighted range, `label`), `people` (`of`, `highlight`, `label` — e.g. 1 of 4 with a rolling percentage), `brain`, `trend` (`direction` up/down), `phone`.
- `sources[]`: `{id, label (short, on the tag), url, quote}` — the same as in FACTS.md.
- `vocab[]`: `{word, pos, meaning, level}`.
- `question`: `{stem, stemZh, options[4], answerIndex, evidenceLineId, sourceNote}`.
- `score`: a tight pulse (100–116 BPM).

## Voice

- English for the passage, the question and the answer (`instruction`: a calm news presenter for teenage learners).
- **Numbers are spelled out in `text`** ("eight to ten hours", "one in four") and written as digits in `subtitle` ("8 to 10 hours", "1 in 4"). The caption times phrases by their position in the subtitle, so they still land with the voice.
- `asrAccept` only after listening (e.g. "aged" transcribed as "age").

## Variation knobs

- Graphic sequence and ground colours (`NEWS.grounds` rotate per scene).
- Arc: myth → fact, a question headline ("Is ... really ...?"), or a number-first cold open.
- Question type (主旨 / 细节 / 推理 / 词义猜测) and recap position.
- Score BPM and key; where the music stops.

## Files

- `src/captionnews/ReadingCaptionNewsVideo.tsx`, `ReadingCaptionNewsCover.tsx` — compositions; ground with grain, HUD (series name, No., topic)
- `src/captionnews/schedule.ts` — `CAPTION_NEWS`, `phrasesOf`, `phraseTimes`, `subtitleSpokenAt`
- `src/captionnews/scenes.tsx` — graphics, caption (phrase slam, keyword block, Chinese, SOURCE tag in the caption's flow), headline, chunk, question, recap
- `src/captionnews/theme.ts` — colours, fonts, layout
