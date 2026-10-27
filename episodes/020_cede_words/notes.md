# 020_cede_words Notes

- bgmId: `suspense_003`
- bgmVolume: `0.32`
- voiceVolume: `1.0`
- sfxVolume: `0.25`
- ducking: enabled by existing audio mixing system
- licenseNote: `Local asset. Please confirm commercial license before publishing.`
- license_check_required: yes

## Audio Review

- BGM is auto-selected from local `bgmRegistry.ts` based on hook suspense and voice speed.
- Narration ducking remains enabled through `BackgroundMusic` and `audioMixing`.
- Effective BGM under narration is `0.30 x 0.65 = 0.195`, which makes the bed much more audible under the current ducking curve.
- Final render exported successfully, and ffprobe verified H.264 video plus AAC audio.

## Timeline Safety

Word data order must match the fixed word scene order in `src/timeline.ts`:

1. `word-reject` -> proceed
2. `word-object` -> precede
3. `word-subject` -> recede
4. `word-project` -> concede
5. `word-inject` -> exceed
6. `word-eject` -> access
7. `word-abject` -> process
8. `word-deject` -> successor
