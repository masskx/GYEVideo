# Prompt: Auto Create Sentence Videos

Use this when the user wants videos generated directly from a vague request.

Flow:

1. automatically plan topics
2. automatically generate episode briefs
3. write `content/sentence_episodes.json`
4. validate the manifest
5. generate data files for each episode
6. generate TTS
7. generate timeline
8. render mp4
9. render cover
10. generate caption and publish notes
11. output batch report

Requirements:

- If the user only says "make 5", do not ask for a document.
- auto-select topics
- auto-write copy
- auto-write `voiceScript`
- auto-write examples
- auto-write cover and caption
- auto-vary opening shell, emotional temperature, and ending lock across the batch
- auto-add follow triggers such as comment bait, series pull, or creator sting
- do not produce 5 clips that feel like the same structure with different sentences
- stop only for real technical blockers such as missing commands, missing TTS key, or render failure
- lack of content is not a valid reason to stop; AI must fill it
