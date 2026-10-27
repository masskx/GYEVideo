# Sentence Episode Master Prompt

## Full Prompt

```md
Use the `douyin-remotion-sentence-video` skill.

直接生成一条 **Chinglish Trap Mode + Kinetic Douyin Visual Mode** 抖音英语短视频。

本期主题：
【<把这里替换成你的主题，例如：加油不是哪里都说 add oil>】

要求：
* 自动生成选题 brief、文案、口播、画面节奏、封面、caption、publish notes。
* 先诊断：这条视频最容易变成 PPT 的风险是什么，你准备怎么避免。
* 核心结构必须是：错误表达 -> 反差打脸 -> 1 个主答案纠正 -> 使用场景 -> wrong vs right 锁定 -> creator closing beat。
* 这是 `Chinglish trap` / `native fix` / `chat rescue` 内容，不要做成 sentence skeleton PPT，不要做成静态知识卡，不要像老师上课。
* 前 0.5 秒必须有硬打断；前 3 秒必须直接打出错误表达或表达痛点，并给出句型骨架或中文记忆钩子。
* 第一个可直接复用的正确表达必须在 6-10 秒出现，最晚不超过 12 秒。
* 先给 1 个 hero correction，当下只能有 1 个视觉中心；不要一开始把 2-3 个替代项并列塞满同一张卡。
* 错误表达必须被划掉 / 压扁 / 打碎 / 否定；正确表达必须 yellow slam 出来，并成为唯一焦点。
* 每 0.5-1.2 秒要有视觉 beat；每 2 秒至少一次明显换屏、重构、推拉、闪切、重打点或结构切换。
* 必须先设计 scene metaphor，再写文案。场景优先，解释靠后。
* 必须从以下系统中选变体，而不是默认一套壳反复用：
  - 3 套开场壳里选 1 套
  - 3 套结尾壳里选 1 套
  - 3 套线画风格里选 1 套
* 变体选择要贴合主题，不能因为上条视频好用就继续复用同样的壳、同样的节奏、同样的收尾。
* 如果画面有留白，必须用 atmosphere、reaction support、scene cue、线画、icon、结构张力去激活；不要用多塞文字来补空。
* 线画 / SVG / icon 只能做气氛支撑，不能抢主答案焦点。
* usage scene 必须像“真实时刻 / 真实社交场景 / 真实表达落地”，不能像双栏 lesson slide，不能两个大焦点互相打架。
* final lock scene 必须有 wrong vs right 锁定，但仍然只能保留 1 个主视觉答案。
* 结尾不能讲完就戛然而止，必须有明确 creator closing beat，让观众感觉“这一句我记住了”。
* 整条视频必须有明确 creator attitude：sharp, lightly roasty, socially observant, human；不能是中性教学号语气。
* 不接受“词句正确但画面太像模板”的结果；如果和上一批视频看起来像同一条壳换字，直接判失败并重做。
* 严禁文字遮挡、文字重叠、字号溢出、多个大字层在同一焦点区互相打架。
* 默认避让短视频平台底部文案遮挡区：最下方区域不要放重要英文、中文主答案、关键解释或核心卡片内容。
* 如果模板层最近升级过 opening shell / ending shell / safe area / usage scene 逻辑，必须基于最新模板渲染，不要沿用旧导出结果。
* 总时长优先控制在 24-33 秒。
* 使用 DASHSCOPE_API_KEY 生成 TTS，不要写入源码。
* 生成 mp4、cover、caption、publish_notes。
* 渲染完成后输出所有文件路径。
```

## Short Prompt

```md
Use the `douyin-remotion-sentence-video` skill.

直接生成一条抖音英语短视频。
本期主题：【<替换主题>】

要求：
* 结构：错误表达 -> 打脸 -> 1 个主答案 -> 使用场景 -> wrong vs right -> 有收口的结尾。
* 前 3 秒必须打痛点，前 10 秒必须出现可复用正确表达。
* 不要 PPT，不要知识卡，不要中性教学号。
* 只能有 1 个主焦点答案，不要并列塞多个替代项。
* 每 2 秒至少一次明显重构；错误表达被打掉，正确表达 yellow slam。
* 必须选开场壳 / 线画风格 / 结尾壳变体，不要和上一条长得像。
* usage scene 要像真实场景，不像双栏 lesson slide。
* 留白用 atmosphere / line art / reaction support 激活，不要靠堆字补空。
* 底部平台文案遮挡区不要放重要内容。
* creator attitude 必须 sharp, lightly roasty, socially observant, human。
* 使用 DASHSCOPE_API_KEY 生成 TTS，不写入源码。
* 导出 mp4、cover、caption、publish_notes，并输出文件路径。
```

## Fill-In Example

```md
Use the `douyin-remotion-sentence-video` skill.

直接生成一条 **Chinglish Trap Mode + Kinetic Douyin Visual Mode** 抖音英语短视频。

本期主题：
【我很期待不是 I am exciting】

要求：
* 自动生成选题 brief、文案、口播、画面节奏、封面、caption、publish notes。
* 先诊断：这条视频最容易变成 PPT 的风险是什么，你准备怎么避免。
* 核心结构必须是：错误表达 -> 反差打脸 -> 1 个主答案纠正 -> 使用场景 -> wrong vs right 锁定 -> creator closing beat。
* 前 0.5 秒必须有硬打断；前 3 秒必须直接打出错误表达或表达痛点，并给出句型骨架或中文记忆钩子。
* 第一个可直接复用的正确表达必须在 6-10 秒出现，最晚不超过 12 秒。
* 先给 1 个 hero correction，不要一开始把 2-3 个替代项并列塞满同一张卡。
* 错误表达必须被划掉 / 压扁 / 打碎；正确表达必须 yellow slam 出来，并成为唯一焦点。
* 每 0.5-1.2 秒要有视觉 beat；每 2 秒至少一次明显换屏或重构。
* usage scene 必须像真实表达落地，不能像双栏 lesson slide。
* 结尾不能戛然而止，必须有 creator closing beat。
* 默认避让底部平台文案遮挡区。
* creator attitude 必须 sharp, lightly roasty, socially observant, human。
* 总时长优先控制在 24-33 秒。
* 使用 DASHSCOPE_API_KEY 生成 TTS，不要写入源码。
* 生成 mp4、cover、caption、publish_notes。
* 渲染完成后输出所有文件路径。
```

## Usage Note

- 正式批量生产时用 `Full Prompt`。
- 临时起题、快速做一条时用 `Short Prompt`。
- 如果最近改过模板层，一律要求基于最新模板重新渲染，不要信旧导出。
