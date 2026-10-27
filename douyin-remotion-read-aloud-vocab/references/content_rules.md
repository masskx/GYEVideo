# Content Rules

## Word Selection

Pick 10-12 words that carry the scene. Good target words usually express:

- emotion,
- conflict,
- physical state,
- action,
- risk,
- collapse,
- recovery,
- social nuance.

Do not pick words only because they are difficult.

## Story Method

Chinese is responsible for the plot. English is responsible for the memory points.

## Story Length Budget

The Remotion read-aloud template shows one main story board. Do not write a story that needs a second unseen page.

Hard limits:

- 10-12 target words.
- 5-6 `storyLines` is ideal.
- 7 `storyLines` is the maximum for dense scenes.
- Never create 8+ `storyLines` unless you also implement and verify paging/scrolling in the template.
- Every target word must appear in `storyLines`, not only in the voiceover or bottom word card.
- For 12 words, default to 6 lines with 2 target words per line.
- Keep each line compact; if a line wraps into another visual line, shorten it.

Good compact 12-word shape:

`任务 assigned，没人 contribute。`
`deadline 逼近，我 overwhelmed。`
`催了被 ghosted，只能 solo。`
`panic 和 resentment 一起上头。`
`熬夜 submit，大家分 credit。`
`我 exhausted，但还是 survive。`

Good:

`每晚对手机的 obsessed 都会让我忘掉被早八支配的 dread。`

Weak:

`obsessed = 沉迷的。dread = 恐惧。`

Every target word needs a scene phrase. This is not a dictionary definition.

Good:

`exhaustion`: 身体电量被耗光。

Weak:

`exhaustion`: 筋疲力尽。

## Voice Script

Use stable segment IDs:

- `word-<wordId>`

The voiceover should directly read the mixed Chinese-English story. Chinese text is read in Chinese; target words are read in English.

The voice script should match the compact story board. Do not make the audio much longer or more detailed than the visible board, otherwise viewers will hear content that the board cannot show.

Do not add separate word explanations in the audio. The bottom card provides the explanation.
Do not add a spoken opening hook unless the user explicitly asks for one.

## Duration

Default target:

- 25-35 seconds.
- 10-12 target words.
- 1.8-2.8 seconds per word or phrase.
- No extra spoken opening unless requested.

If the voice runs long, compress explanation text or reduce the word count. Do not stretch this format past 35 seconds.
