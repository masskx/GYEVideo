# Episode 046: man 词根视频

## 基本信息
- Episode ID: `046_man_words`
- 主题: 词根 `-man / -manu`
- 核心含义: `hand / 手`
- 最终视频时长: 57.344 秒

## BGM 配置
- bgmId: `suspense_003`
- bgmVolume: `0.33`
- bgmSafetyCap: `0.32`
- bgmDuckingFactor: `0.65`
- licenseNote: `Local asset. Please confirm commercial license before publishing.`
- 选择理由: 前 3 秒以 `manage 你可能一直不知道它在说什么` 做悬念/反常识钩子，符合 suspense 选择条件；全片仍是黑黄快节奏词根讲解。

## 音频检查
- BGM 来自 `bgmRegistry.ts` 已注册曲目。
- 有旁白时 `BackgroundMusic` 通过 `getBgmVolume()` 自动 ducking，旁白段音量乘以 `0.65`。
- root-word 模板 BGM safety cap 为 `0.32`，因此配置 `0.33` 会被安全限制到 `0.32`。
- 最终 MP4 音频流: AAC stereo。
- `loudnorm` 检查: `input_i=-15.28 LUFS`, `input_tp=-1.63 dBTP`, `input_lra=3.10`。
- 结论: 无削波，BGM 未压过人声；旁白可辨识，BGM 只做悬念/节奏底。

## Hook 与内容
- Hook 类型: `misconception`
- Hook 主文案: `manage 你可能一直不知道它在说什么`
- 闪现词: `manage`, `manual`, `manufacture`, `manuscript`, `manipulate`
- 词根揭示: `man / manu = hand / 手`
- 讲解词: `manual`, `manufacture`, `manage`, `manuscript`, `manipulate`, `manner`, `mandate`

## 封面检查
- 封面文件: `exports/046_man_words_cover.png`
- 封面内容与视频一致: `man / manu = hand / 手`
- 视觉风格: 黑黄高对比，含创作者标识 `小猪盖被`
- 检查结果: 文字未溢出封面，主标题、词根、记忆线均在安全区内。

## 导出文件
- `exports/046_man_words.mp4`
- `exports/046_man_words_cover.png`
- `exports/046_man_words_caption.txt`
- `exports/046_man_words_publish_notes.md`

## QA 结果
- TypeScript: `cmd /c node_modules\.bin\tsc.cmd --noEmit` 通过。
- Remotion compositions: `RootWordTemplate` / `DouyinCover` 正常识别。
- 关键帧检查: hook、flash words、root reveal、word explanation、summary 均已出图检查。
- 修复记录: `WordGridScene` 改为只渲染有 `WORD_TIMINGS` 的词，避免数据词数量多于旁白词段时导出崩溃。

## 046-style rerender update
- bgmId: `suspense_003`
- bgmVolume: `0.33`
- bgmSafetyCap: `0.33`
- bgmDuckingFactor: `0.78`
- ducking: enabled via `BackgroundMusic -> getBgmVolume()`.
- licenseNote: `Local asset. Please confirm commercial license before publishing.`
- Animation alignment check: uses 046-style structure: large hook -> orbit/bubble word burst -> same-root centered line -> root reveal -> word card -> grid -> summary.
- Body icon/lottie layer: disabled; cover keeps the creator pig branding.
- BGM loudness adjustment: effective cap raised to 0.33 and ducking factor to 0.78 because 046/047/048 background music was too quiet under narration.

## Latest 046 alignment QA
- baseline reference: `episodes/046_man_words`
- cover overflow check: `tmp_compare_046_041_048_latest/cover_overflow_check_041_048.jpg`
- result: passed as the visual/animation benchmark for this batch; cover text stays inside the safe area.
