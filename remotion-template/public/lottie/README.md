# Lottie Assets

Put downloaded Lottie JSON files from LottieFiles into this folder:

- `public/lottie/carry-box.json`
- `public/lottie/writing.json`
- `public/lottie/eye.json`
- `public/lottie/sound-wave.json`
- `public/lottie/pulling.json`
- `public/lottie/building.json`
- `public/lottie/break.json`
- `public/lottie/speaking.json`
- `public/lottie/search-eye.json`
- `public/lottie/life.json`
- `public/lottie/earth.json`

Rules:

- File names should match the values in [src/config/rootLottieMap.ts](/F:/抖音英语卡片视频/remotion-template/src/config/rootLottieMap.ts).
- Prefer lightweight JSON animations with clean looping.
- Prefer subtle supporting motion that does not cover the main word, subtitles, or phonetics.
- Avoid oversized particle-heavy animations that may distract from the word-root explanation.

If a file is missing:

- Studio/preview will log a clear error and skip the animation.
- Rendering can still proceed if no matching file is configured for the current root.
