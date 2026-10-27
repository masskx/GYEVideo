# 040_tain_words Notes

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

- Cover matches `tain / ten = hold / 握住` angle, words: `contain`, `maintain`, `obtain`.
- Cover keeps `小猪盖被` branding. No text overflow, keyword readable at thumbnail size.

## Export Result

- Video: `exports/040_tain_words.mp4` (17.6 MB, h264 + AAC, ~88.6s, 2657 frames @ 30fps)
- Cover: `exports/040_tain_words_cover.png`
- Caption: `exports/040_tain_words_caption.txt`
- Publish notes: `exports/040_tain_words_publish_notes.md`

## Timeline Safety

1. `word-reject` -> contain
2. `word-object` -> maintain
3. `word-subject` -> obtain
4. `word-project` -> retain
5. `word-inject` -> sustain
6. `word-eject` -> entertain
7. `word-abject` -> detain
8. `word-deject` -> content
