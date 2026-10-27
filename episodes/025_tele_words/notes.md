# 025_tele_words Notes

- bgmId: `suspense_003`
- bgmVolume: `0.32`
- voiceVolume: `1.0`
- sfxVolume: `0.25`
- ducking: enabled by existing audio mixing system
- licenseNote: `Local asset. Please confirm commercial license before publishing.`
- license_check_required: yes

## Audio Review

- BGM is auto-selected from local `bgmRegistry.ts` based on hook suspense and voice speed.
- Voiceover was regenerated with the current TTS pipeline and the no-instruction fallback for better batch stability.
- Narration ducking remains enabled through `BackgroundMusic` and `audioMixing`.
- Effective BGM under narration is `0.33 x 0.65 = 0.2145`, which keeps the bed present while still leaving room for the narration.
- Final render exported successfully, and ffprobe verified H.264 video plus AAC audio.

## Timeline Safety

Word data order must match the fixed word scene order in `src/timeline.ts`:

1. `word-reject` -> telephone
2. `word-object` -> telegraph
3. `word-subject` -> television
4. `word-project` -> telescope
5. `word-inject` -> teleport
6. `word-eject` -> telepathy
7. `word-abject` -> telemedicine
8. `word-deject` -> telematics
