# 045_corp_words Notes

- bgmId: `tech_006`
- bgmVolume: `0.32`
- voiceVolume: `1.0`
- sfxVolume: `0.25`
- ducking: enabled
- licenseNote: `Local asset. Please confirm commercial license before publishing.`
- license_check_required: yes

## Audio Review

- BGM auto-selected: `tech_006` (hookType=`three_second_challenge`, fastScore>=9).
- Narration ducking: `0.33 × 0.65 = 0.2145` effective BGM under voice.

## Timeline Safety

1. `word-reject` -> corpse
2. `word-object` -> corporation
3. `word-subject` -> incorporate
4. `word-project` -> corporal
5. `word-inject` -> corporeal
6. `word-eject` -> corpus
7. `word-abject` -> corps
8. `word-deject` -> corpulent

## 046-style rerender update
- bgmId: `suspense_003`
- bgmVolume: `0.33`
- bgmSafetyCap: `0.33`
- bgmDuckingFactor: `0.78`
- ducking: enabled via `BackgroundMusic -> getBgmVolume()`.
- licenseNote: `Local asset. Please confirm commercial license before publishing.`
- Animation alignment check: uses 046-style structure: large hook -> orbit/bubble word burst -> same-root centered line -> root reveal -> word card -> grid -> summary.
- Body icon/lottie layer: disabled; cover keeps the creator pig branding.
- BGM loudness adjustment: effective cap raised to 0.33 and ducking factor to 0.78 because 046/047/048 background music was too quiet under narration.

## Latest 046 alignment QA
- contact sheet: `tmp_compare_046_041_048_latest/compare_046_045_corp_words.jpg`
- cover overflow check: `tmp_compare_046_041_048_latest/cover_overflow_check_041_048.jpg`
- result: passed. Opening, orbit/bubble burst, root reveal, word-card flow, grid, and summary align with the 046 visual rhythm; cover text stays inside the safe area.
