# 026_auto_words Notes

- bgmId: `tech_006`
- bgmVolume: `0.32`
- voiceVolume: `1.0`
- sfxVolume: `0.25`
- ducking: enabled by existing audio mixing system
- licenseNote: `Local asset. Please confirm commercial license before publishing.`
- license_check_required: yes

## Audio Review

- BGM is auto-selected from local `bgmRegistry.ts` based on fast hook style and overall speed hints.
- Narration ducking remains enabled through `BackgroundMusic` and `audioMixing`.
- Effective BGM under narration is `0.33 x 0.65 = 0.2145`, which stays audible without overtaking the voice in the current mix model.
- Pre-export review used the current ducking curve plus keyframe QA on hook, word card, and summary beats; no masking risk was flagged in the current mix model.
- Final render exported successfully, and `ffprobe` verified H.264 video with AAC audio at `960x720`.

## Timeline Safety

Word data order must match the fixed word scene order in `src/timeline.ts`:

1. `word-reject` -> automatic
2. `word-object` -> automate
3. `word-subject` -> autonomous
4. `word-project` -> autobiography
5. `word-inject` -> autopilot
6. `word-eject` -> autofocus
7. `word-abject` -> autodidact
8. `word-deject` -> autoimmune
