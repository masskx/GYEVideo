# Episode 047: ped 词根视频

## 基本信息
- Episode ID: `047_ped_words`
- 主题: 词根 `-ped / -pod`
- 核心含义: `foot / 脚`
- 最终视频时长: 58.112 秒

## BGM 配置
- bgmId: `suspense_003`
- bgmVolume: `0.33`
- bgmSafetyCap: `0.32`
- bgmDuckingFactor: `0.65`
- licenseNote: `Local asset. Please confirm commercial license before publishing.`
- 选择理由: 前 3 秒用 `impede 你可能一直不知道它在说什么` 做误区/反常识钩子，和 046 的 `manage` 开头一致，符合 suspense 选择条件；全片仍是黑黄快节奏词根讲解。

## 音频检查
- BGM 来自 `bgmRegistry.ts` 已注册曲目。
- 有旁白时 `BackgroundMusic` 通过 `getBgmVolume()` 自动 ducking，旁白段音量乘以 `0.65`。
- root-word 模板 BGM safety cap 为 `0.32`，因此配置 `0.33` 会被安全限制到 `0.32`。
- 最终 MP4 音频流: AAC stereo, 48000 Hz。
- `loudnorm` 检查: `input_i=-15.44 LUFS`, `input_tp=-1.35 dBTP`, `input_lra=3.40`。
- 结论: 无削波，BGM 未压过人声；旁白可辨识，BGM 只做悬念/节奏底。

## Hook 与内容
- Hook 类型: `misconception`
- Hook 主文案: `impede 你可能一直不知道它在说什么`
- 闪现词: `impede`, `expedite`, `pedal`, `pedestrian`, `podiatrist`
- 词根揭示: `ped / pod = foot / 脚`
- 讲解词: `impede`, `expedite`, `pedal`, `pedestrian`, `pedicure`, `podiatrist`, `pedigree`

## 封面检查
- 封面文件: `exports/047_ped_words_cover.png`
- 封面内容与视频一致: `ped / pod = foot / 脚`
- 视觉风格: 黑黄高对比，含创作者标识 `小猪盖被`
- 检查结果: 版式已对齐 046；文字未溢出封面，主标题、词根、记忆线均在安全区内。

## 导出文件
- `exports/047_ped_words.mp4`
- `exports/047_ped_words_cover.png`
- `exports/047_ped_words_caption.txt`
- `exports/047_ped_words_publish_notes.md`

## QA 结果
- TypeScript: `cmd /c node_modules\.bin\tsc.cmd --noEmit` 通过。
- Remotion compositions: `RootWordTemplate` / `DouyinCover` 正常识别，RootWordTemplate 为 1742 帧 / 58.07 秒。
- 关键帧检查: hook、flash words、root reveal、word explanation、summary 均已出图检查。
- 修复记录: 将 47 从 `tech_004` + challenge hook 改为 046 同款的 `suspense_003` + misconception hook；封面文法改为 `impede 你可能一直不知道它在说什么`。
- 动画修复: `HookScene` 已恢复为音频时间线驱动的三段式开场：大字 hook -> orbit 单词爆闪 -> same-root 极简句；移除 47 之前的 ped 专用双卡片叠层，并关闭正文动物浮层，使整体视觉对齐 046。
- 对比检查: 已抽帧生成 `tmp_compare_046_047/compare_sheet_animfix.jpg`，047 的整体段落结构已对齐 046。

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
- contact sheet: `tmp_compare_046_041_048_latest/compare_046_047_ped_words.jpg`
- opening/orbit timing sheet: `tmp_compare_046_041_048_latest/compare_046_047_ped_words_opening.jpg`
- cover overflow check: `tmp_compare_046_041_048_latest/cover_overflow_check_041_048.jpg`
- result: passed. Opening stays as large hook through the first beat, orbit/bubble words appear progressively from the voice-timed segment, and cover text stays inside the safe area.
