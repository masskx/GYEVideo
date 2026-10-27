# Episode 057: min 词根视频

## 基本信息
- Episode ID: `057_min_words`
- 主题: 词根 `-min`
- 核心含义: `small / 小`

## BGM 配置
- bgmId: `suspense_003`
- bgmVolume: `0.33`
- bgmSafetyCap: `0.33`
- bgmDuckingFactor: `0.78`
- licenseNote: `Local asset. Please confirm commercial license before publishing.`
- license_check_required: yes
- 选择理由: 前三秒是误区/反常识钩子，按 046 节奏优先使用 `suspense_003`，并保持 ducking 开启。

## 动画对齐目标
- 视觉基准: `episodes/046_man_words`
- Opening: 大字 hook，不叠卡片，不加额外图标。
- 第二段: orbit/bubble 单词爆闪，跟随 `flash-words` 口播渐进出现。
- 第三段: same-root 极简居中文案。
- 后续结构: `root reveal -> word card -> grid -> summary`，按 046 的节奏推进。
- Body icon/lottie layer: disabled；cover 保留品牌小猪。

## 导出结果
- 视频: `exports/057_min_words.mp4`
- 封面: `exports/057_min_words_cover.png`
- caption: `exports/057_min_words_caption.txt`
- publish notes: `exports/057_min_words_publish_notes.md`
- 最终时长: `65.749s`
- 音视频流: `h264 + aac`

## QA 结果
- TypeScript: `cmd /c node_modules\.bin\tsc.cmd --noEmit` passed.
- generatedVoiceTimeline: 已按最新 TTS 重生成，正文节奏由真实音频时长驱动。
- contact sheet: `tmp_compare_046_057_latest/compare_046_057_min_words_beats.jpg`
- opening timing sheet: `tmp_compare_046_057_latest/compare_046_057_min_words_opening.jpg`
- cover check: `tmp_compare_046_057_latest/cover_overflow_check_057.jpg`
- 动画对齐结论: passed。057 的开场、orbit/bubble、same-root、root reveal、word card、grid、summary 与 046 的结构和运动语言保持一致。
- 封面检查: passed。封面文字未超出画布边界，headline 与底部记忆句都保留在模板信息带内。
