# Prompt: Create New Sentence Episode

Use the `douyin-remotion-sentence-video` skill.

Create a new Douyin-style English sentence-pattern Remotion short video episode from the material below. The input may be an English sentence pattern, one Chinese expression, one grammar point, one emotional scene, or one example sentence.

Source:

`<paste sentence pattern, Chinese expression, emotional scene, grammar point, example sentence, or notes>`

Required flow:

1. Analyze expression pain.
2. Choose sentence skeleton.
3. Design first 3 seconds.
4. Design scene metaphor.
5. Design slot swap.
6. Choose opening shell, line-art style, and ending shell.
7. Design the usage-scene composition.
8. Write examples.
9. Write voice script.
10. Implement data and scenes.
11. Generate voice timeline.
12. Render and QA.

Steps 3, 4, 5, 6, and 7 may not be skipped.

Before writing code, first output this short diagnosis:

`What is the biggest risk that this video becomes PPT-like, and how will I avoid it?`

Requirements:

- First extract the reusable sentence skeleton.
- Then write the episode brief.
- Then write the first-three-second plan.
- Then write the scene metaphor.
- Then write the slot swap design.
- Then choose 1 opening shell, 1 line-art style, and 1 ending shell.
- Then describe how the usage scene avoids looking like a lesson slide.
- Then write `src/data/sentencePattern.ts`.
- Then write `src/data/voiceScript.ts`.
- Then generate or update `src/data/generatedVoiceTimeline.ts`.
- Use the voice timeline to drive current scene, subtitle, active sentence, and active slot.
- Default to creator attitude that feels sharp, lightly roasty, socially observant, and human.
- Do not let every episode use the same opening energy, same shell pairing, or same ending cadence.
- Pick shell and line-art combinations that fit the pain point, not just the last successful episode.
- Keep the black/yellow high-contrast style.
- Do not make it feel like a grammar lecture or PPT.
- Do not let usage/reuse scenes become symmetric compare cards.
- Do not let the ending stop right after the explanation; land one closing beat.
- If the frame has large negative space, enrich it with line art, atmosphere, or reaction support instead of extra text.
- Reserve the bottom publish-caption danger zone by default; no important text or answer card may sit in the platform UI overlap area.
- If the template-level scene shell, safe-area logic, or ending shell has changed since older episodes were rendered, rerender affected episodes instead of assuming the previous exports are still valid.
- Do not accept a result just because the words are correct; reject and redo if it still looks too uniform, too safe, or too obviously generated from one reusable lesson mold.
- Do not hardcode API keys.
- Render key stills, final MP4, cover, caption, and publish notes.
