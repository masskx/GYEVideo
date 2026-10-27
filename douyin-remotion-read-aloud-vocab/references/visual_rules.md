# Visual Rules

## Reference Shell

Use the user拆解方案, adapted to the local black/yellow brand:

- one high-density Chinese learning board,
- embedded English target words,
- word-by-word explanation animation,
- top challenge progress,
- bottom current-word card,
- bottom music-player / waveform decoration.

Do not build a full English reading page.

## Required Frame Zones

- Top 60px: category bar plus moving challenge progress block.
- Middle board: Chinese story text with embedded English target words.
- Inline word area: highlighted English word, red underline/mark, hidden/revealed small Chinese gloss.
- Lower card: active word, phonetic, part of speech, meaning, scene phrase.
- Bottom 60-70px: music-player / waveform decoration only.

Important text must stay above the bottom player bar.

## Main Board Fit

The main board is a single visible board, not a paginated document.

- All target words must be visible in the main board at opening and throughout the reading.
- The last story line and its small Chinese gloss must remain fully visible above the bottom word card.
- If the story has 12 words, design for 6 compact lines with 2 target words per line.
- If QA stills show the last target words missing from the main board, shorten `storyLines`; do not ship.

## Motion

- Use Remotion frame-driven motion only.
- Do not use CSS animations or transitions.
- First 1.5-1.8 seconds should reveal the complete story board.
- After that, every word segment should visibly change the active word card and inline gloss.
- The main canvas must change whenever the generated voice timeline segment changes.

## Color

- Keep local black/yellow brand as the main theme.
- Accent: `#FFD43B`.
- Board can use warm paper/yellow to keep high readability.
- Active target word: yellow or black/yellow highlight.
- Underline / mark: red, close to `#ff3158`.
- Player bar: black with green waveform accents.
- Cover: 1080x1920, aligned with the local word-video cover language.
