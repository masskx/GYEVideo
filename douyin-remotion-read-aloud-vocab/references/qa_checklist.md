# QA Checklist

## Content QA

- The video starts by reading the mixed Chinese-English story directly.
- There is no spoken opening explanation unless explicitly requested.
- There is no spoken dictionary explanation for each word.
- Chinese text remains understandable even if the viewer does not know the English words.
- Each target word appears naturally in the Chinese sentence.
- Every target word appears in the main `storyLines` board, not only in audio or the bottom word card.
- `storyLines` fits one board: ideally 5-6 lines, maximum 7 lines without paging.
- Bottom card explains the currently read English word.
- 10-12 words are used by default.
- Total duration is 25-35 seconds.

## Visual QA

- Main board looks like one high-density learning image.
- Current word is visually stronger than other words.
- Already-read words keep their small Chinese gloss visible.
- Unread words do not show their small gloss yet.
- Bottom word card changes on the same word that is being read.
- Top progress block moves and reaches near 100%.
- Bottom player bar is decorative and does not cover key text.
- No text overlaps or gets clipped at 960x720.
- Opening, middle, late, and ending QA stills show the final target words on the main board.

## Audio QA

- Voice reads Chinese as Chinese and English target words as English.
- Pace is medium and natural, not fast explanation mode.
- BGM stays below voice and does not mask English words.
- Generated timeline segment IDs match `word-<id>` IDs in `readingPassage.ts`.

## Export QA

- `npm.cmd run episode:use -- ../read-aloud-episodes/<episodeId>` passes.
- `npm.cmd run voice` passes.
- `cmd /c node_modules\.bin\tsc.cmd --noEmit` passes.
- `npm.cmd run render` exports video, cover, caption, and publish notes.
- Contact sheet confirms opening, middle, late, and ending frames match the format.
