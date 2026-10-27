# Style: 词根闯关 (Game Show Flat)

Flat, loud, friendly: a Japanese variety-show set rendered in flat vector. Consistency comes from the rules below; originality from the order of sets, the judgement words and the structure.

## Colour

- One scene = one saturated hue from `HUES` (`src/gameshow/theme.ts`): a base, a lighter pattern and a darker floor band. Neighbouring scenes never share a hue.
- Ink `#1B1B1B` for every outline and stroke; paper white and cream for cards.
- **The root is always `ROOT_YELLOW` `#FFD23F`** (tile and meaning), as in every vocab template. Prefix tiles are white.
- No gradients, no soft shadows: depth is a flat offset shadow in ink.

## Type

- Telop: Fredoka Bold (Latin) / Noto Sans SC Black (Chinese), white or yellow fill with an ink stroke about 14 % of the size painted under the fill (`-webkit-text-stroke` + `paint-order: stroke fill`).
- Hand notes (literal meaning, sticky): ZCOOL KuaiLe.
- One idea per card; the word at 160 px, its meaning at 120 px.

## Motion

- Everything enters with overshoot (`pop`, `punchScale`); tiles drop with a squash; the root tile stamps.
- Cuts are hard with a 2-frame white `CutFlash` and a crash; no dissolves.
- Judgement words burst with confetti on the beat; they sit in the set's upper half, never over the tiles.
- The pig host stands on the floor line (`FLOOR_Y` 1380) left or right of the content, hops on beats; faces follow the moment (happy on a win, surprised on the lightning go, cheer on the grade).

## Sound

- Every tile, telop and judgement has its SFX (boing, stamp-small, pop, ding, crash, tick, buzzer).
- Score: style `pop-bounce` (four-on-the-floor pop, piano stabs, brass hook, claps) at every pace; title = hook, root card = build, rounds = verses, lightning = drop, report = payoff, bonus = outro (`../../_shared/PACE_AND_MUSIC.md`).
