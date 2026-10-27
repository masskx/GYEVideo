# Notes: 061_port_gameshow

Reference episode of `vocab-game-show` (`skills/vocab-game-show`).

## QA (final render, `exports/061_port_gameshow_qa.md`)
- PASS: 1080×1920, 64.1 s (target 50–66), −14.0 LUFS, peak −1.3 dBFS, no black frames, voice ends at 61.5 s.
- Contact sheet and per-scene stills checked: neighbouring sets differ in hue; tiles, judgement and pig do not overlap.

## Voice check (`npm run voice:check`, faster-whisper medium)
All lines pass. Accepted transcriptions (`asrAccept`), each a correct pronunciation transcribed differently — **listen once before publishing**:
- `port` → "pot" (British vowel), `sup` / `sub` → "sap", `re` → 瑞.

## Fixes made during review
- The judgement burst covered the tiles: it moved to the upper half of the set.
- Lightning chips overflowed the right edge with five words: the grid now sizes to the word count.
- The pig stood over option D of the bonus board and over the cover chips: moved to the free side of the floor.

## Fast-pace re-cut (pace `fast`, new music engine)
- Length 64.1 s → 49.9 s (range 35–53 s at fast); narration 84 % of the runtime (was 75 %).
- Score: `pop-bounce`, 128 BPM, C major, SoundFont backend. The first render's true peak was +0.2 dBFS (brighter, denser score); the render now limits at 4× oversampling: peak −1.7 dBFS, QA PASS.
- Voice check 11/11 (same asrAccept entries: port, sup/sub, re).
