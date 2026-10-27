# Style: 高考词汇案卷 (Halftone Dossier, vertical)

Adapted from lemo-opuscar's Halftone Dossier style prompt for 1080×1920 Douyin vocabulary shorts. Each rule names the component that implements it.

## 1. Essence, and what it is not

- **A retro printed case file.** Cream archive paper, overprinted halftone dots in a few flat inks, heavy serif headlines with a misregistered shadow, rubber stamps that slam, a thick-outlined mascot. The episode is a file read out one exhibit at a time.
- **Bureaucratic apparatus is the frame**: case number `案卷 No.GK-060`, chapter chip, REC dot, numbered exhibits, height chart, stamps. Its seriousness makes a vocabulary lesson feel like solving something.
- **Loud but readable**: one idea per card, one headline, one exhibit, one caption line.

Not the old black/yellow template (no black void, no glow, no orbiting words), not a PPT (no bullet lists, no centred title + body), not a game show (no candy sets, no rhythm rounds). **Paper, dots or a stamp must be visible in every frame.**

## 2. Materials & rendering

| Rule | Implementation |
|---|---|
| Paper multiplied over everything: mottling, fibre noise, vignette, centre fold | `PaperOverlay` + `public/dossier/paper.jpg` (`scripts/make-dossier-paper.py`) |
| Dust specks reseeded every 2 frames | `PaperOverlay` |
| Shading = halftone dots, radius = density × step × k (k ≈ 0.68), step 22–26 px, screen angle per layer | `Halftone`, `radialField`, `edgeField`, `linearField` |
| Halftone-filled numerals and glyphs, may bleed off frame | `HalftoneGlyph` (exhibit numerals, the root's mugshot, cover) |
| Line boil (~10×/s, ~4 px) on the mascot and hand-drawn props only, never on text, dots, HUD or captions | the boil filter inside `BrandPig` (locked) |
| Flat cards: fill + 5–6 px ink outline + hard offset shadow (no soft shadows) | `PrintCard` |
| Stamps: double rounded rectangle, rough ink-eaten edges, ~93 % opacity, tilted ±12° | `Stamp` |

## 3. Colour logic

Paper `#F3EAD6` + five inks (`src/dossier/theme.ts`):

- **ink** `#1C2340`: every outline, body text, the caption pill, the fade-out colour.
- **overprint** cobalt `#2F64D8`: misregistration shadows, prefixes, hard shadows.
- **highlight** yellow `#FFC62B` (the brand yellow): roots, keywords, numerals.
- **stamp** red `#E2412F`: stamps, alarms, evidence strings. Nothing else.
- The pig owns its pinks (`PIG`), which appear nowhere else.

**Role colours are fixed across the series**: prefix = cobalt block, root = yellow block, suffix = paper block. A student who has watched three episodes reads a word's structure from colour alone.

Flat inks only: no gradients and no transparency ramps on content; tone comes from dot size and overprint. The **secret scene** (fingerprint) switches to an ink ground with a lighter dot layer.

## 4. Type & captions

| Role | Font (OFL, `public/fonts/`) |
|---|---|
| Headlines, English words, meanings | Noto Serif SC Black (`FONT.headline`), misregistration shadow +8/+8 in cobalt |
| Big numerals, the root's mugshot, option letters | Bagel Fat One (`FONT.display`) |
| Hand notes (literal meanings, 评论区交答案) | ZCOOL KuaiLe (`FONT.hand`) |
| Case numbers, phonetics, chips, kickers | JetBrains Mono ExtraBold (`FONT.mono`) |
| Captions, stamps | Noto Sans SC Black (`FONT.sans`) |

- Fonts are subset to GB2312 + Latin + IPA. A character outside that set falls back to a system font, so keep copy in common characters.
- **The caption pill carries the spoken line**: dark ink, cobalt offset shadow, paper text, keywords (`lineMeta.keywords`) in yellow. It holds for at least max(1.8 s, speech + 0.6 s), enforced by `schedule.ts`.
- HUD top-left (case number + chapter), REC top-right; inverted on the dark scene.
- **Douyin safe area**: content between y 170 and y 1470. The caption sits at y 1500. Nothing essential sits right of x 930 between y 900 and y 1500 (the like/comment buttons).

## 5. Motion

- 30 fps; line boil on the mascot at ~10 fps.
- **Everything enters with overshoot** (`pop`, back ease, 0.3–0.45 s), rising from below or scaling up. Nothing fades in.
- **Per-character pop** for headlines (`PopText`): each glyph drops 40–90 px and squashes, stagger 0.06 s CJK / 0.03 s Latin.
- **Stamp slam**: 2.6× → 1× in 0.09 s, then a damped bounce; camera shake, flash and stamp sound on the same frame (`cameraShake`, `FlashOverlay`, cue `sfx: 'stamp'`).
- **Squash landings** preserve volume (`squash`).
- **Idle life**: the pig breathes and blinks; the REC dot blinks; the page pulses on the beat.
- **Dot wipe** (`DotWipe`: circles grow for ~0.36 s with a diagonal delay, the scene switches while covered, then they shrink); each wipe takes an ink (`scene.wipeInk`). A hard cut is the contrast tool, used into the dark fingerprint scene and into the evidence board.

## 6. Camera

A 2D camera over a frontal page. Use at least four different moves per episode.

| Move | Use | Where it is built |
|---|---|---|
| Slow push-in 1 → 1.04–1.06 | scrutiny before a verdict | `pushIn` (case, solve, exhibit 1) |
| Beat pulse ~0.6 % | the page grooving | `beatPulse` (root, exhibit 3, homework) |
| Shake with quadratic decay | stamps | `cameraShake` |
| Flash (capped at 0.5) | the mugshot, the verdict | `FlashOverlay` |
| Snap zoom into the root column | "look closer" | fingerprint scene |
| Pull back to reveal the board | scale: five words, one root (the signature shot) | evidence board |
| Folder slide | the next case | homework |
| Pan / tilt settle | variety between exhibits | `exhibitCamera` |

## 7. Sound

All synthesized by `scripts/audio/` (`sfx.ts`, `score.ts`, palette `dossier`), so it is original and needs no licence:

- **Score**: synth kick, clap, hats, soft square bass with a 2nd harmonic for phone speakers, marimba-like pluck, Karplus–Strong pizzicato, music-box bell. One chord per bar (i–VI–III–VII in the episode key). Sections follow scene kinds: *sneak* (pizzicato + snaps) for the case, *secret* (bass + snaps) for the fingerprint, *groove* for root and exhibits, *strip* (bass + snaps) for solving, *light* for homework.
- **A snare roll + riser** into the root reveal and into each silence.
- **Silence before the verdict**: `lineMeta.pauseBefore` empties the score so the line and the stamp land alone. The first sound after it is the stamp.
- **Foley follows the print**: pop (cards, glyphs), stamp / stamp-small, shutter (flash), whoosh (loupe, strings), paper (cards, folders), type (typewriter clicks), pin (evidence board), bell (case closed).
- **Mix**: voice about 12 dB above the music while speaking (`bgmDuckingFactor` 0.6); SFX ahead of the music on impacts; master −14 LUFS with a −1 dB limiter (`render-runner.ts`).

## 8. Native moves (the menu)

- **The case**: a Gaokao-style question is the crime scene; the options are the suspects.
- **The fingerprint**: words aligned on their shared root; the root column lights up.
- **The mugshot**: the root on a height chart, flash, name plate with its meaning.
- **Numbered exhibits**: one word per exhibit, a giant halftone numeral behind it.
- **Evidence board**: every exhibit pinned and strung to the root, then shaken.
- **The stamp**: 结案, 锁定词根, 易错四选一, 待破案.
- **Redaction**: the blank in the cloze, and the homework answer that stays blacked out.

## 9. Pitfalls

- **Text laid out before fonts load** → overlapping glyphs. `useDossierFonts` blocks rendering until the fonts are loaded.
- **Boil on text or dots** turns them to mush → filter only the mascot.
- **Clip-path / filter ids are global** → every `Stamp`, `HalftoneGlyph` and `BrandPig` needs a unique `id`.
- **Dot wipe short of full cover** shows the hard switch → max radius ≥ 0.75 × cell.
- **Too many inks** lose the print feel → five plus paper, no exceptions.
- **Dots below ~14 px step** alias after Douyin re-encodes → keep 20–26 px.
- **Stamps near the right edge** clip when they slam (2.6×) → keep a stamp's left edge below x 520 at 180 px.
