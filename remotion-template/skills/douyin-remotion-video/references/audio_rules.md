# Audio Rules

## BGM Source

- Every episode should choose a BGM by default.
- BGM must come from `public/bgm/` for Remotion rendering or `shared-assets/bgm/` for shared storage.
- Do not load BGM from the network during Remotion preview or render.
- Register local BGM in `src/data/bgmRegistry.ts`.

Directory convention:

```text
public/bgm/energetic/
public/bgm/light/
public/bgm/suspense/
public/bgm/tech/
public/bgm/raw/
shared-assets/bgm/energetic/
shared-assets/bgm/light/
shared-assets/bgm/suspense/
shared-assets/bgm/tech/
shared-assets/bgm/raw/
```

Supported file formats:

- `.mp3`
- `.wav`
- `.m4a`
- `.aac`
- `.flac`
- `.ogg`

Safe filenames should use lowercase English IDs such as `tech_001.mp3`, `energetic_001.mp3`, or `suspense_001.mp3`.

## Classification Rules

Classify by filename or listening pass:

- `fast`, `beat`, `energetic`, `快节奏`, `动感` -> `energetic`
- `light`, `clean`, `soft`, `清爽`, `轻快` -> `light`
- `suspense`, `tension`, `dark`, `悬念`, `紧张` -> `suspense`
- `tech`, `ai`, `future`, `digital`, `科技` -> `tech`
- Unknown style -> `raw`

## Style Choice

- Use lyric-free tracks or tracks with extremely weak vocals only.
- English root and vocabulary explanation videos should prefer `energetic` or `tech`.
- Suspenseful hooks can use `suspense`.
- Clean, easy explanations can use `light`.
- Unknown or uncategorized tracks should stay in `raw` until reviewed.

Video type guidance:

- Fast root/affix memorization: `energetic` first, `tech` second.
- AI-flavored, digital, or high-density vocabulary cards: `tech`.
- Mistake-reveal or "you are memorizing this wrong" openings: `suspense` for the hook, but keep it low.
- Gentle pronunciation or meaning contrast: `light`.
- Unreviewed music: `raw`, and mark the episode for review before publishing.

## Volume

- Default BGM volume for the current Douyin English card style is `0.32`.
- Normal publishing range is `0.28` to `0.32`; only lower it for very dense narration or very loud music.
- The Remotion BGM safety cap must stay at `0.32`, so episode config values above `0.32` are not used directly.
- Suggested defaults:
  - `energetic`: `0.32`
  - `tech`: `0.32`
  - `light`: `0.30`
  - `suspense`: `0.28`
  - `raw`: `0.30`
- Voiceover is always the priority. BGM must never compete with spoken English or Chinese explanation.
- Apply ducking whenever voiceover is active. The standard ducking factor is `0.65`.
- Fade BGM during the final second of the video.

## Episode Config

Use `src/data/episodeConfig.ts`:

```ts
export const episodeConfig = {
  bgmId: 'tech_001',
  bgmVolume: 0.32,
  voiceVolume: 1.0,
  sfxVolume: 0.25,
};
```

If `energetic_001` does not exist, use the first available ID from `bgmRegistry`.

## License Check

- If the BGM license is unclear, write `license_check_required` in the episode `notes.md`.
- Keep `licenseNote` in `bgmRegistry.ts` as a reminder before publishing.

## Export QA

Before delivery, check:

- Voiceover is clear.
- BGM does not mask the voice.
- Ducking works during narration at the standard `0.65` factor.
- BGM configured volume follows the default `0.32` target and the `0.32` safety cap.
- The last second fades out naturally.
- Final MP4 contains both voice and BGM when a valid `bgmId` is selected.
