# 019_pel_words Notes

- bgmId: `tech_006`
- bgmVolume: `0.32`
- voiceVolume: `1.0`
- sfxVolume: `0.25`
- ducking: enabled by existing audio mixing system
- licenseNote: `Local asset. Please confirm commercial license before publishing.`
- license_check_required: yes

## Audio Review

- BGM is selected from local `bgmRegistry.ts`.
- BGM must stay under narration with ducking enabled.
- Final render must retain existing ducking and ending fade-out behavior.

## Timeline Safety

Word data order must match the fixed word scene order in `src/timeline.ts`:

1. `word-reject` -> propel
2. `word-object` -> compel
3. `word-subject` -> expel
4. `word-project` -> repel
5. `word-inject` -> dispel
6. `word-eject` -> impulse
7. `word-abject` -> pulse
8. `word-deject` -> compulsive
