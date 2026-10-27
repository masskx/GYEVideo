# Repo Explainer Video

一条 2 分 18 秒的竖屏（1080×1920）英文讲解视频，介绍整个 GYEVideo 仓库：三条内容线、episode 内容包结构、`episode:use → voice → preview → render` 流程、项目 skills、共享素材与 QA 标准。

A 2:18 vertical explainer video about this repository, built with Remotion in the factory's own black/yellow style.

This is a separate, self-contained project on purpose: it is not an episode, so it does not touch `remotion-template/`.

## How it is built

- `narration.json`: the script, the single source of truth. `say` is what the TTS reads (with phonetic respellings like "Doe-yin"), `caption` is what appears on screen.
- `scripts/prepare-media.py`: synthesizes every line with [Piper](https://github.com/rhasspy/piper) (offline, voice `en_US-ryan-high`), measures each clip with ffprobe and writes `src/timeline.json`. Visuals are timed from the real narration, the same audio-first rule the factory uses. It also copies `tech_001.mp3` and a few animal icons from `../shared-assets/`.
- `public/stills/`: real frames rendered from `remotion-template` for `046_man_words`, `018_long_time_no_see` and `001_prevalent_habits`.
- `src/scenes/`: 11 scenes (hook, core rule, content lines, the three content lines, episode package, pipeline, skills, assets & QA, outro).
- BGM is ducked while narration plays.

## Reproduce

```bash
cd repo-explainer
npm ci
pip install piper-tts
curl -L -O https://huggingface.co/rhasspy/piper-voices/resolve/main/en/en_US/ryan/high/en_US-ryan-high.onnx
curl -L -O https://huggingface.co/rhasspy/piper-voices/resolve/main/en/en_US/ryan/high/en_US-ryan-high.onnx.json
npm run media -- ./en_US-ryan-high.onnx
npm run typecheck
npm run render   # -> exports/gyevideo_explainer.mp4
```

The generated voice clips, copied media and `exports/` are gitignored, like every other export in this repository.
