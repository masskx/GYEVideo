# Voice Rules

## Engine

Default TTS:

- Provider: Alibaba Bailian / DashScope.
- API: CosyVoice SpeechSynthesizer.
- Endpoint: `https://dashscope.aliyuncs.com/api/v1/services/audio/tts/SpeechSynthesizer`
- Model: `cosyvoice-v3-flash`
- Voice: `longanhuan`
- Format: `mp3`
- Sample rate: `48000`

Use environment variable:

```powershell
$env:DASHSCOPE_API_KEY="your-key"
```

Never hardcode API keys.

## Voice Style

Target delivery:

- Douyin English-learning creator.
- Confident and excited.
- Slight pressure in the first three seconds.
- Fast but clear.
- Not news style.
- Not customer-service style.
- Not exaggerated screaming.

## Line Design

Each `voiceScript` item should have:

- `id`
- `text`
- `emotionInstruction`
- `speedHint`
- `subtitle`
- `instruction`

Text rules:

- Keep sentences short.
- One idea per line.
- Most lines should be 1-2 seconds after synthesis, but real durations may vary.
- English keywords should be written plainly: `reject`, `project`, `inject`, `ject`.
- Chinese explanation should sound like a human creator, not a dictionary entry.

## Emphasis Rules

Keywords to emphasize:

- Core term or root: `ject`, `throw`.
- Current example word: `reject`, `project`, `inject`, etc.
- Memory formula: `ject = throw / 投出去`.

Use visual emphasis even if the TTS engine cannot perfectly obey instruction.

## DashScope Parameter Notes

Recommended request body:

```json
{
  "model": "cosyvoice-v3-flash",
  "input": {
    "text": "reject，把东西投回去，就是拒绝、排斥。",
    "voice": "longanhuan",
    "format": "mp3",
    "sample_rate": 48000,
    "rate": 1.18,
    "volume": 88,
    "language_hints": ["zh"]
  }
}
```

`instruction` may be supported by some voices, but if DashScope returns `InvalidParameter` or engine error, retry without `instruction`. Do not concatenate instructions into the spoken text unless the user explicitly wants that text read aloud.

## Generation Pipeline

1. Read `src/data/voiceScript.ts`.
2. Call TTS once per line.
3. Save segments as `public/audio/segments/001.mp3`, `002.mp3`, etc.
4. Use `ffprobe` to measure each segment duration.
5. Use `ffmpeg concat` to create `public/audio/main-voice.mp3`.
6. Write `src/data/generatedVoiceTimeline.ts` with real start/end times.

## Failure Handling

- Missing API key: stop and ask the user to set `DASHSCOPE_API_KEY`.
- No network: request permission or tell the user TTS cannot be generated.
- `instruction` failure: retry with `DASHSCOPE_TTS_USE_INSTRUCTION=false`.
- Missing `ffmpeg`: tell user to install with `winget install Gyan.FFmpeg` on Windows.
