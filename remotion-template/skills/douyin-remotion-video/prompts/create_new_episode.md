# Prompt: Create New Episode

Use the `douyin-remotion-video` skill.

Create a new Douyin-style English vocabulary Remotion short video episode from the word-learning topic below. First extract the memory angle, then write an episode brief, then implement the Remotion data/code changes.

Source:

`<paste word root, prefix, suffix, word list, confusing words, pronunciation topic, or notes>`

Requirements:

- Keep the black/yellow high-contrast style.
- Design the first three seconds before the lesson body; every new episode must have a Hook and must not jump straight into explanation.
- Choose a `hookType` from `misconception`, `stop_hard_memorizing`, `three_second_challenge`, `mistake_correction`, `exam_panic`, or `word_flash`.
- Configure `episodeConfig.hook` with `type`, `mainText`, `subText`, `shockText`, `flashWords`, optional `rootText`, and `tone`.
- Make the first 0.5 seconds feel like an interruption, with large text or a hard visual hit.
- Flash 3-5 related English words within the first second.
- Give conflict or curiosity before 2 seconds, then a clear payoff before 3 seconds.
- The first 3 seconds must contain at least 4 visible actions or state shifts.
- Do not use a normal title page or slow fade-in as the opening.
- Use data-driven vocabulary content.
- Write or update `src/data/words.ts`.
- Write `src/data/voiceScript.ts`.
- Configure BGM in `src/data/episodeConfig.ts`; every new episode must have a valid `bgmId`.
- Default to an `energetic` or `tech` BGM from `bgmRegistry`.
- If the opening is suspenseful, `suspense` may be used.
- Set `bgmVolume` to the default `0.32` for the current black/yellow Douyin card style unless the selected track is unusually loud.
- Keep BGM ducking at `0.65` whenever voiceover is active, and keep the configured BGM safety cap at `0.32`.
- Default to a creator voice that feels sharp, memorable, and a little socially observant instead of neutral textbook narration.
- Do not let new root-word episodes collapse into the same hook shell, same flash-word pattern, and same summary rhythm.
- If a recent episode used the same hook energy, card balance, or BGM texture, actively vary the new one.
- The ending cannot only restate the root meaning; it must add one final stickiness beat such as a memory challenge, instant test, usage flex, or comment bait.
- The video should feel followable after the answer appears, not just accurate.
- Choose 2-4 animal avatar icons from `animalIconRegistry` based on the episode's emotional beats.
- Do not overuse animal icons.
- Use animal icons only at hook, misconception, root reveal, summary, or similar rhythm points.
- Generate or update `src/data/generatedVoiceTimeline.ts`.
- Use voice timeline to drive current scene, subtitle, active keyword, and punch zoom.
- Do not accept a result just because the words are accurate; reject and redo if it still feels like a reusable root-card template with swapped text.
- If three adjacent episodes could be mistaken for the same edit with different roots, the batch fails.
- Do not hardcode API keys.
- Render key stills and final MP4.
