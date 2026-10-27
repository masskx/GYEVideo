# 038_cap_words Notes

- bgmId: `tech_006`
- bgmVolume: `0.32`
- voiceVolume: `1.0`
- sfxVolume: `0.25`
- ducking: enabled by existing audio mixing system
- licenseNote: `Local asset. Please confirm commercial license before publishing.`
- license_check_required: yes

## Audio Review

- BGM auto-selected: `tech_006` (hookType=`three_second_challenge`, fastScore>=9 → auto picks last `tech`).
- Narration ducking: `0.33 × 0.65 = 0.2145` effective BGM under voice.
- Voice generated with `DASHSCOPE_TTS_USE_INSTRUCTION=false`.
- Final export QA passed: h264 + AAC audio, ducking active.

## Cover Review

- Cover matches `cap / capt / cept = take / 拿` angle, words: `capture`, `capable`, `accept`.
- Cover keeps `小猪盖被` branding. No text overflow, keyword readable at thumbnail size.

## Export Result

- Video: `exports/038_cap_words.mp4` (19 MB, h264 + AAC, ~93.4s, 2804 frames @ 30fps)
- Cover: `exports/038_cap_words_cover.png`
- Caption: `exports/038_cap_words_caption.txt`
- Publish notes: `exports/038_cap_words_publish_notes.md`

## Timeline Safety

1. `word-reject` -> capture
2. `word-object` -> capable
3. `word-subject` -> capacity
4. `word-project` -> accept
5. `word-inject` -> except
6. `word-eject` -> concept
7. `word-abject` -> intercept
8. `word-deject` -> perceive
