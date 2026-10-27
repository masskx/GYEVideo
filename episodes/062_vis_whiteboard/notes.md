# Notes: 062_vis_whiteboard

Reference episode of `vocab-whiteboard` (`skills/vocab-whiteboard`).

## QA (final render, `exports/062_vis_whiteboard_qa.md`)
- PASS: 1080×1920, 52.4 s (target 50–66), −14.1 LUFS, peak −1.0 dBFS, no black frames, voice ends at 49.6 s.

## Voice check
All lines pass. The voice read *vis / vid* as /vaɪs/; the roots are now spelled letter by letter in the TTS text (`V I S`, `V I D`) while the screen shows *vis / vid*. `voice:check` joins spelled letters before comparing.

## Fixes made during review
- The title was cropped at the first camera stop: the stop now frames the title box.
- Top-branch arrows ran into the meaning: they now end under the example line.
- Board edges showed during camera travel: the board surface extends 1600 px past every side.
- The homework card was too wide and its text too small: the stem wraps to two lines at a larger size.
