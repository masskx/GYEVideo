# 018_voc_words Notes

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

1. `word-reject` -> vocal
2. `word-object` -> evoke
3. `word-subject` -> advocate
4. `word-project` -> invoke
5. `word-inject` -> provoke
6. `word-eject` -> revoke
7. `word-abject` -> convoke
8. `word-deject` -> vocation
