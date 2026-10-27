# Notes: 002_teen_sleep_news

Reference episode of `reading-caption-news` (`skills/reading-caption-news`).

## QA (final render, `exports/002_teen_sleep_news_qa.md`)
- PASS: 1080×1920, 57.8 s (target 50–72), −14.1 LUFS, peak −1.0 dBFS, no black frames, voice ends at 55.1 s.

## Facts
Every number has a `sourceId` and a SOURCE tag; URLs and quotes in `FACTS.md`.

## Voice check
All 10 lines pass after fixes:
- Digits were misread in English ("8 to 10" heard as "about two sure", "1 in 4" as "1,000"): numbers are now spelled out in the TTS text and shown as digits in the subtitle; caption phrases are timed by their position in the subtitle.
- `asrAccept`: "aged" transcribed as "age"; "Key words" as "keyword". Small function words ("of") dropped by the transcriber are tolerated in English lines. **Listen once before publishing.**

## Fixes made during review
- The SOURCE tag overlapped the second line of Chinese in chunk 2: it now sits in the caption's flow under the Chinese line, and unrevealed caption phrases keep their space so nothing jumps.
- Keywords that span two caption phrases ("1 in 4", "first step") were not highlighted: the yellow block now follows the keyword across phrases, and `npm run check` fails if a keyword is not in its subtitle.

## Fast-pace re-cut (pace `fast`, new music engine)
- Length 57.8 s → 43.8 s (range 35–58 s at fast); narration 80 % of the runtime (was 70 %).
- Score: `news-pulse`, 124 BPM, A minor, SoundFont backend. QA PASS. Voice check 10/10.
