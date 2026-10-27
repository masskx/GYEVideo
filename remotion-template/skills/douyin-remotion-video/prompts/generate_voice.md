# Prompt: Generate Voice

Use the `douyin-remotion-video` skill.

Generate the voiceover for the current episode using Alibaba DashScope CosyVoice.

Requirements:

- Read `src/data/voiceScript.ts`.
- Use `DASHSCOPE_API_KEY` from the environment.
- Default model: `cosyvoice-v3-flash`.
- Default voice: `longanhuan`.
- Output segments to `public/audio/segments/`.
- Merge to `public/audio/main-voice.mp3`.
- Generate `src/data/generatedVoiceTimeline.ts` from real audio durations.
- If `instruction` causes DashScope errors, retry without instruction and explain the fallback.
- Do not write the API key into code.
