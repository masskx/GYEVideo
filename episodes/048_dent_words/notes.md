# Episode 048: dent 词根视频

## 基本信息
- Episode ID: `048_dent_words`
- 主题: 词根 `-dent / -dont`
- 核心含义: `tooth / 牙齿`
- 最终视频时长: `60.31s`

## BGM 配置
- bgmId: `suspense_003`
- bgmVolume: `0.33`
- bgmSafetyCap: `0.32`
- bgmDuckingFactor: `0.65`
- ducking: 已开启。有旁白时 `BackgroundMusic` 通过 `getBgmVolume()` 自动降低 BGM。
- licenseNote: `Local asset. Please confirm commercial license before publishing.`
- 选择理由: 前 3 秒是 `indent 你可能一直不知道它在说什么` 的悬念/误区钩子，符合优先选择 `suspense_003` 的条件。

## 本次动画修复记录
- 修复开场 orbit/bubble 节奏: bubble 显现改为跟随真实 `flash-words` 口播时长分配，不再使用固定 9 帧快速槽。
- 修复开场旋转过急: orbit 旋转幅度降低为约四分之一圈，单词随口播逐个浮现，之前出现的 bubble 保留在轨道上。
- 修复底部 active word 抢跑: 底部大词只在对应 bubble 进入一半后切换，避免先显示下一个词。
- 修复 grid 不对称: 7 个词改为上 4 下 3，底排居中，不再留下空的第 8 个位置。
- 修复 grid 缺词/遮挡风险: grid 按实际词数渲染，长词字号自适应，卡片固定高度并裁掉溢出风险。
- 修复连线遮挡: 连线改为 root/card 边缘到边缘，层级在卡片后面，不穿过卡片文字。
- 修复中心 root 溢出: `-dent / -dont` 在 grid 中换行居中显示。

## 内容与动画对齐检查
- 视觉基准: `episodes/046_man_words`
- 开场: 大字 hook，无叠卡片，无额外图标。
- 第二段: orbit/bubble 单词随口播逐个显现，沿用 046 的 `SAME FAMILY / 3秒挑战` 运动语言，但旋转更稳。
- 第三段: same-root 极简居中文案。
- 后续结构: root reveal -> word card -> grid -> summary，按 046 的节奏推进。
- 正文动物/icon 浮层: 已禁用；封面保留品牌小猪。
- contact sheet: `tmp_compare_046_048_fix/compare_sheet.jpg`
- 对齐结论: 048 与 046 在构图、黑黄高对比、三段式开场、word-card 节奏、grid/summary 收束上整体一致；本次修复后开场更跟口播，grid 更对称。

## 音频检查
- BGM 来源: `bgmRegistry.ts` 已注册曲目 `suspense_003`
- MP4 音频流: AAC, 48000 Hz, stereo
- 视频时长: `60.309333s`
- BGM 压人声检查: 通过。BGM 使用 ducking，旁白清晰。

## 封面检查
- 封面文件: `exports/048_dent_words_cover.png`
- 封面内容: 与视频一致，围绕 `dent / dont = tooth / 牙齿`
- 文字溢出: 未发现溢出，主标题、副标题、root meaning 和 memory line 均在安全区内。
- 品牌元素: 封面保留 `小猪盖被` 品牌小猪，符合要求。

## 导出文件
- `exports/048_dent_words.mp4`
- `exports/048_dent_words_cover.png`
- `exports/048_dent_words_caption.txt`
- `exports/048_dent_words_publish_notes.md`

## QA 结果
- TypeScript: 通过，`node_modules/.bin/tsc --noEmit`
- Render: 通过，视频和封面均已导出到 episode exports
- 046/048 contact sheet 对比: 通过
- 开场关键帧检查: 通过，`out/qa/048_dent_words_fix/02_flash_late_v3.png`
- grid 关键帧检查: 通过，`out/qa/048_dent_words_fix/06_grid_v2.png`

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
- contact sheet: `tmp_compare_046_041_048_latest/compare_046_048_dent_words.jpg`
- cover overflow check: `tmp_compare_046_041_048_latest/cover_overflow_check_041_048.jpg`
- result: passed. Opening, orbit/bubble burst, root reveal, word-card flow, grid, and summary align with the 046 visual rhythm; cover text stays inside the safe area.
