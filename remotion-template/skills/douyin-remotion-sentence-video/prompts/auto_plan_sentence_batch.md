# Prompt: Auto Plan Sentence Batch

Use this when the user gives only a vague direction and wants a batch of sentence videos.

Supported inputs:

- `batchSize`
- `contentDirection`
- `targetViewer`
- `stylePreference`
- `difficulty`
- `mustAvoid`
- `outputMode`

Default values:

- `batchSize: 5`
- `contentDirection: emotional spoken English + higher-level replacement`
- `targetViewer: Chinese native English learners`
- `stylePreference: black/yellow high contrast, Douyin rhythm, emotional scenes, sentence skeletons`
- `difficulty: understandable for middle-school to high-school vocabulary, but expression should feel more advanced`
- `mustAvoid: grammar lessons, PPT feeling, textbook examples, long difficult sentences, niche expressions`
- `outputMode: generate episode plan first, then producible briefs`

Output must include:

1. `Auto Episode Plan`
2. complete episode brief for each video
3. `voiceScript` for each video
4. `cover / caption / publish notes` for each video
5. if executed in a Remotion project, content for `content/sentence_episodes.json`
