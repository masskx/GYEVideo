Use the project skill `douyin-remotion-read-aloud-vocab`.

Create a new scene-vocabulary episode from this topic/source:

```text
<paste scene, passage, transcript, or word list here>
```

Requirements:

- Put it in `read-aloud-episodes/<episodeId>`.
- First fill `templates/material_intake_template.md` mentally or in `brief.md`: scene hook, target viewer, emotional curve, candidate words, final embedded story.
- Choose 10-12 scene-high-value words.
- Write a compact Chinese story where English target words are embedded naturally inside Chinese clauses.
- The voice script must directly read the mixed Chinese-English story. Do not write spoken explanations for the words.
- Write `brief.md`, `source/passage.txt`, `data/readingPassage.ts`, `data/voiceScript.ts`, `data/episodeConfig.ts`.
- Use black/yellow brand style: high-density Chinese story board, embedded English word highlights, red underline/mark, bottom current-word card, top moving progress block, bottom music-player bar.
- Do not make an English reading page.
- Keep timing driven by `generatedVoiceTimeline.ts`.
- Generate or refresh voice if `DASHSCOPE_API_KEY` is available.
- Export mp4, cover, caption, and publish notes.
