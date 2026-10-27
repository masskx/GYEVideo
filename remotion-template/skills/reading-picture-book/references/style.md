# Style: 英文绘本精读 (Picture-book Story)

A warm, handmade picture book — crayon on cream paper — that a 17-year-old does not find childish: simple shapes, generous space, real sentences.

## Colour

- A small box of crayons (`CRAYON` in `src/picturebook/theme.ts`): paper `#F4EFE3`, coral, sand, teal, sky, grass, rose, brown, night blues.
- **Every outline and the printed words are plum `#4A2C5A`, never black.**
- Target words: brand yellow `#FFD23F` highlight behind plum text.

## Picture

- The page (1000 × 800 at x 40, y 170) holds the illustration; text sits below from y 1010.
- Crayon texture via `CrayonFilter`: grainy fill, a slow 12 fps boil — never TV static.
- One setting per page, 1–3 props; the pig on the ground line, never covering the props that tell the story (the phone, the clock).
- Word cards pin to the picture's lower-left corner, one at a time.

## Type

- Story text: Nunito ExtraBold 52 px (never smaller), max three lines per sentence.
- Titles and handwriting: Caveat; Chinese: Noto Sans SC Medium, ZCOOL KuaiLe for handwritten Chinese.
- Karaoke underline follows the word being read.

## Motion and sound

- Pages turn (flip of the previous scene) with a page sound; the pig hops in on the cover.
- Word cards pop with a sparkle; the answer reveal is the first sound after the silence.
- Score palette `picture-book`: music box over pizzicato and a warm pad for the story → a bell on the words recap → woodblock ticks for the quiz (the music drops out for the thinking pause) → music-box finale.
