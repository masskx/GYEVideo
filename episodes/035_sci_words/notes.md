# 035_sci_words Notes

- bgmId: `tech_006`
- bgmVolume: `0.32`
- voiceVolume: `1.0`
- sfxVolume: `0.25`
- ducking: enabled by existing audio mixing system
- licenseNote: `Local asset. Please confirm commercial license before publishing.`
- license_check_required: yes

## Audio Review

- BGM auto-selected from local `bgmRegistry.ts` based on fast hook style and overall speed hints.
- Fast-paced hook for this episode prioritizes `tech`, so the auto-selected BGM is `tech_006`.
- `tech_006` was chosen because: hookType is `three_second_challenge` (not in suspense-preferring types), fastScore (15) >= max(4, ceil(15 * 0.6)) = 9, so auto logic picks the last `tech` entry.
- Narration ducking remains enabled through `BackgroundMusic` and `audioMixing`.
- Effective BGM under narration is `0.33 × 0.65 = 0.2145`, which keeps the bed energetic without overtaking the voice.
- Voice generation succeeded with `DASHSCOPE_TTS_USE_INSTRUCTION=false` (instruction mode causes error 428).
- Final export QA passed: exported MP4 contains both h264 video and AAC audio streams, ducking active.

## Cover Review

- Cover matches the `sci = know / 知道` lesson angle and uses representative words `science`, `conscious`, `conscience`.
- Cover keeps creator branding `小猪盖被` and the pig visual asset.
- Final cover QA passed: no visible text overflow, the main `sci` keyword remains readable at thumbnail size, and the hook copy is consistent with the episode content.

## Export Result

- Render completed successfully.
- Video: `exports/035_sci_words.mp4` (18 MB, h264 + AAC)
- Cover: `exports/035_sci_words_cover.png`
- Caption: `exports/035_sci_words_caption.txt`
- Publish notes: `exports/035_sci_words_publish_notes.md`
- Final video duration: about `86.87s` (2606 frames @ 30fps)
- Final export contains an AAC audio stream and passed the audio presence check.

## Timeline Safety

Word data order must match the fixed word scene order in `src/timeline.ts`:

1. `word-reject` -> science
2. `word-object` -> conscious
3. `word-subject` -> unconscious
4. `word-project` -> conscience
5. `word-inject` -> omniscient
6. `word-eject` -> prescient
7. `word-abject` -> nescient
8. `word-deject` -> subconscious
