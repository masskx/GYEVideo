# 030_path_words Notes

- bgmId: `tech_006`
- bgmVolume: `0.32`
- voiceVolume: `1.0`
- sfxVolume: `0.25`
- ducking: enabled by existing audio mixing system
- licenseNote: `Local asset. Please confirm commercial license before publishing.`
- license_check_required: yes

## Audio Review

- BGM is auto-selected from local `bgmRegistry.ts` based on fast hook style and overall speed hints.
- Fast-paced hook for this episode prioritizes `tech` over `suspense`, so the current expected selection is `tech_006`.
- Narration ducking remains enabled through `BackgroundMusic` and `audioMixing`.
- Effective BGM under narration is `0.33 x 0.65 = 0.2145`, which keeps the bed energetic without overtaking the voice.
- Voice generation succeeded after retrying with `DASHSCOPE_TTS_USE_INSTRUCTION=false` because the instruction-enabled request returned provider error `428`.
- Final export QA passed: the current BGM bed supports the fast pacing and does not overpower the narration in the rendered episode.

## Cover Review

- Cover matches the `path = feeling / suffering / 感受，痛苦` lesson angle and uses representative words `sympathy`, `empathy`, and `apathy`.
- Cover keeps creator branding `小猪盖被` and the pig visual asset.
- Final cover QA passed: no visible text overflow, the main `path` keyword remains readable at thumbnail size, and the hook copy is consistent with the episode content.

## Export Result

- Render completed successfully.
- Video: `exports/030_path_words_final_960x720.mp4`
- Cover: `exports/030_path_words_cover.png`
- Caption: `exports/030_path_words_caption.txt`
- Publish notes: `exports/030_path_words_publish_notes.md`
- Final video duration: about `78.44s`
- Final export contains an AAC audio stream and passed the audio presence check.

## Timeline Safety

Word data order must match the fixed word scene order in `src/timeline.ts`:

1. `word-reject` -> sympathy
2. `word-object` -> empathy
3. `word-subject` -> apathy
4. `word-project` -> pathetic
5. `word-inject` -> pathology
6. `word-eject` -> antipathy
7. `word-abject` -> telepathy
8. `word-deject` -> sociopath
