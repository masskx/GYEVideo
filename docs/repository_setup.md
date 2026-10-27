# GitHub 源码范围与复现

本仓库保存 Remotion 制作工程、单词 / 双语阅读 / 句型视频的 episode 文案与数据、项目 skills、生产规范和共享素材。生成的视频、封面、发布包、配音、依赖、缓存、原始素材库及本地密钥不入库。

## 首次使用（PowerShell）

需要 Node.js / npm，以及 PATH 中可用的 ffmpeg 和 ffprobe。`npm run voice:check` 另需 Python 3 和 `pip install faster-whisper pypinyin`（首次运行会下载 medium 语音识别模型）。

```powershell
Copy-Item .env.example .env
# 编辑 .env，填写自己的 DASHSCOPE_API_KEY。
Set-Location remotion-template
npm.cmd ci
npm.cmd run episode:use -- ../episodes/061_port_gameshow
npm.cmd run check
npm.cmd run voice
npm.cmd run voice:check
npm.cmd run audio
npm.cmd run render
```

单词、双语阅读和句型内容分别从 `episodes/`、`reading-episodes/` 和 `sentence-episodes/` 选择（模板列表见 `AGENTS.md`）。切换后先运行 `voice`，重新生成配音和真实时长；不依赖仓库中的已生成配音文件。运行时的 `.active-episode.json` 由 `episode:use` 生成。

## 音色与口播标准

- 默认供应商：阿里云百炼 / DashScope；模型 `cosyvoice-v3-flash`，音色 `longanhuan`。
- 输出：MP3，48000 Hz；音量 88，中英文混读提示 `zh` / `en`。
- 语速按每句 `speedHint` 选择；情绪和重音由 `instruction`、`emotionInstruction` 描述。
- 每句合成后用 ffprobe 测时，拼接配音并生成真实时间轴，画面按实际口播同步。
- `.env.example` 只包含空密钥和默认参数；实际密钥只放本地 `.env`。

详细规则：

- 所有模板：`../remotion-template/skills/_shared/HOUSE_RULES.md` 第 3 节（数字拼写、词根拼读、语音转写核对）
- 旧版黑黄单词：`../remotion-template/skills/douyin-remotion-video/references/voice_rules.md`
- 句型：`../remotion-template/skills/douyin-remotion-sentence-video/references/voice_rules.md`
- 实现：`../remotion-template/scripts/generate-voice.ts`

## 素材范围

保留 `shared-assets/` 和模板 `public/` 中的运行素材（例如 BGM、图标、Lottie、字体、合成音效），排除生成的 `public/audio/`。不允许出现任何小猪图片素材：小猪只由 `remotion-template/src/brand/BrandPig.tsx` 绘制。顶层原始音乐和矢量素材库不入库。
