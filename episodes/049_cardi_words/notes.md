# Episode 049: cardi 词根视频

## 基本信息
- Episode ID: `049_cardi_words`
- 主题: 词根 `-cardi / -cardio`
- 核心含义: `heart / 心脏`

## BGM 配置
- bgmId: `suspense_003`
- bgmVolume: `0.33`
- bgmSafetyCap: `0.33`
- bgmDuckingFactor: `0.78`
- licenseNote: `Local asset. Please confirm commercial license before publishing.`
- license_check_required: yes
- 选择理由: 前 3 秒是误区/反常识钩子，优先使用 `suspense_003`；全片仍按 046 的黑黄快节奏词根讲解推进。

## 动画对齐目标
- 视觉基准: `episodes/046_man_words`
- Opening: 大字 hook，不叠卡片，不加额外图标。
- 第二段: orbit/bubble 单词爆闪，跟随 `flash-words` 口播逐个显现。
- 第三段: same-root 极简居中文案。
- 后续结构: root reveal -> word card -> grid -> summary，按 046 的节奏推进。
- Body icon/lottie layer: disabled; cover keeps the creator pig branding.

## 待导出文件
- `exports/049_cardi_words.mp4`
- `exports/049_cardi_words_cover.png`
- `exports/049_cardi_words_caption.txt`
- `exports/049_cardi_words_publish_notes.md`

## 导出结果
- 视频: `exports/049_cardi_words.mp4`
- 封面: `exports/049_cardi_words_cover.png`
- caption: `exports/049_cardi_words_caption.txt`
- publish notes: `exports/049_cardi_words_publish_notes.md`
- 最终时长: `64.682667s`
- 音视频流: `h264 + aac`

## QA 结果
- TypeScript: `cmd /c node_modules\.bin\tsc.cmd --noEmit` passed.
- generatedVoiceTimeline: 已按最新 TTS 重生成，正文节奏由真实音频时长驱动。
- contact sheet: `tmp_compare_046_049_latest/compare_046_049_cardi_words.jpg`
- opening/orbit timing sheet: `tmp_compare_046_049_latest/compare_046_049_cardi_words_opening.jpg`
- cover overflow check: `tmp_compare_046_049_latest/cover_overflow_check_049.jpg`
- 动画对齐结论: passed. 开场保持 046 的大字 hook，3 秒后进入 orbit/bubble，same-root、root reveal、word card、grid、summary 的构图和节奏整体对齐 046。
- 封面检查: passed. 标题、词根、memory line 均在安全区内，没有溢出。
