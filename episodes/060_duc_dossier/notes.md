# Notes: 060_duc_dossier

First episode of the Gaokao dossier line (`skills/douyin-gaokao-dossier-vocab`).

## Build
- `npm run episode:use -- ../episodes/060_duc_dossier`, `npm run voice` (DashScope cosyvoice-v3-flash / longanhuan), `npm run dossier:audio`, `npm run render`.
- Score: synthesized, 100 BPM, D; silences before the fingerprint line (0.4 s) and the verdict (0.7 s).
- Mix: `bgmVolume` 0.5, `bgmDuckingFactor` 0.6 (voice about 12 dB above the music while speaking), `sfxVolume` 0.55.

## QA (final render)
- Length 66.2 s, 1080×1920, 30 fps, 11 scenes.
- Loudness −14.1 LUFS integrated, peak −1.0 dBFS.
- `blackdetect`: no black frames.
- Contact sheet every 2 s: paper and dots in every frame; dot wipes cover fully at the cut; captions clear of content.
- Verdict strip at 0.2 s: slam, shake, flash, bell and the pig's cheer land together.
- Words: all five 课标; no 拓展 word. Both questions labelled 高考风格原创练习题.

## Voice check (faster-whisper small, zh)
Every line transcribes as written or as a same-sounding character (网回 = 往回, 王里 = 往里, 按字节了 = 案子结了, 錢能 = 潜能). Fixed before the final render:
- `duc，就是 lead…` opened with a misread root ("Jerk", then "豆腐"). Line 3 already names the root, so line 4 now starts in Chinese: `意思是 lead：带领，引导。`
- `选 reduce。结案。` came back as "请按": the key word was blurred. Now `选 reduce。案子，结了。`
- `intro，向里` came back as "向礼物". The gloss is now 往里 on screen and in the voice.
- Remaining doubt: line 7 `把人带进来` transcribes as `把人带起来`. Listen once before publishing.

## Fixes made during review
- Fingerprint zoom cropped the title and "introduce": the title moved out of the zoomed group, zoom 1.32 → 1.12.
- The pig covered the case title; the cover headline overflowed; the 结案 stamp clipped at the right edge; cross-out bars ran past the option cards; the 待破案 stamp landed on the pig. All moved or resized.
- The collocation tag appeared after the narration and stayed about 1 s on screen; it now comes in with the meaning.
- The first render's peak was −0.3 dBFS: the limiter now runs after resampling, at −1.5 dB.

## For 061
Differ from this episode on at least three of: structure (`case-investigation`), opening (typed cloze), signature (board pull-back), camera path, score shape (D, 100 BPM), ending (redacted homework).
