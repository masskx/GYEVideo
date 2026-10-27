# Douyin English Card Video Factory

这是一个用于批量生产抖音风格英语短视频的 Remotion 工作区。

核心原则：只维护一套 `remotion-template/` 模板工程，具体内容按 episode 管理。以后生成新视频时，不复制整个 Remotion 项目，只新增或更新对应 episode 内容包。

## 内容线

- `episodes/`: 词根、词缀、单词族、易混词等 vocabulary 视频。
- `sentence-episodes/`: 句型骨架、表达冲突、口语替换、写作升级等 sentence 视频。
- `read-aloud-episodes/`: 英文素材精读、跟读、高亮词汇、情景记单词视频。
- `remotion-template/`: 唯一 Remotion 模板工程。
- `shared-assets/`: 字体、音效、BGM、图标等共享素材。
- `docs/`: 生产流程、命名规则、发布检查清单。
- `archive/`: 归档内容。

## 单词视频 Skill

单词视频使用项目内 skill：

```text
remotion-template/skills/douyin-remotion-video
```

这次已更新该 skill 和模板规则，重点修复：

- 开场 orbit/bubble 单词不再固定 8-10 帧硬闪。
- bubble 必须跟随真实 `flash-words` 口播时长逐个显现。
- orbit 旋转要克制，约四分之一圈即可，避免转得太急。
- grid 必须按实际词数动态对称布局，例如 7 个词用上 4 下 3 且下排居中。
- 连线必须在卡片后方，从 root/card 边缘连接，避免遮挡文字。
- 长词必须在 grid 卡片里自适应字号，不能缺词、溢出或被裁掉。
- 新单词视频应默认以 `episodes/046_man_words` 作为视觉和动画基准，除非明确指定其它基准。

相关规则文件：

- `remotion-template/skills/douyin-remotion-video/SKILL.md`
- `remotion-template/skills/douyin-remotion-video/references/rhythm_rules.md`
- `remotion-template/skills/douyin-remotion-video/references/visual_rules.md`

## 情景记单词跟读 Skill

情景记单词跟读视频使用项目内 skill：

```text
douyin-remotion-read-aloud-vocab
```

内容放在：

```text
read-aloud-episodes/
```

这个类型不是“讲解课”，也不是纯英文精读页。它的核心是：

- 中文文案负责讲一个具体生活场景。
- 英文单词嵌在中文句子里，作为记忆点。
- 旁白直接读这段混合文案：中文读中文，遇到英文词就读英文。
- 不加开场教学口播，不单独念单词解释。
- 画面里当前英文词高亮，下方词卡同步显示音标、词性、中文意思和情景含义。
- 视频控制在 25-35 秒，通常放 10-12 个目标词。

### 怎么找素材

优先找“有场景、有情绪、有冲突”的素材，不要先找单词表。

适合的素材：

- 熬夜刷手机，第二天早八崩溃。
- 考试周复习、焦虑、硬撑。
- 图书馆假装学习，其实一直分心。
- 论文、作业、DDL 压迫感。
- 周一上班、通勤、邮箱爆炸、身体被掏空。
- 减肥失败、嘴馋、自责、重新开始。
- 上台展示前紧张、卡壳、脆弱但撑住。
- 想省钱，但又冲动消费。
- 想睡觉，却一直刷短视频。

不适合的素材：

- 抽象鸡汤句。
- 普通单词清单。
- 纯语法讲解。
- 太长的英语阅读原文。
- 没有情绪变化的教材段落。
- 别人视频里的完整文案照搬。

找素材时可以从这些地方来：

- 你自己的日常观察。
- 评论区里高频痛点。
- 小红书/抖音上的生活吐槽，但只借场景，不复制文案。
- 校园、职场、学习、减肥、社交焦虑等短故事。
- 现有英文阅读材料，但要改写成中文生活场景。
- 仓库里已有的单词视频主题，把它改成一个具体故事。

### 素材筛选标准

找到素材后，先问 5 个问题：

- 观众前 2 秒会不会觉得“这不就是我吗”？
- 能不能自然嵌入 10-12 个英文词？
- 每个英文词是不是在这个场景里有用，而不是为了凑难词？
- 混合文案 25-35 秒能不能读完？
- 结尾有没有一个小转折、情绪落点或记忆点？

如果有两个以上答案是否定的，就换素材。

### 找到素材后怎么让我生成视频

把素材发给 Codex 时，直接用这个格式：

```text
请使用 F:\抖音英语卡片视频\douyin-remotion-read-aloud-vocab 这个 skill，
生成一个新的情景记单词跟读视频。

episodeId: 002_xxx
素材/场景：
这里粘贴你的中文素材、英文素材、评论区痛点，或者一句话描述。

目标观众：
比如大学生、考研党、上班族、英语基础一般的人。

要求：
1. 不要做成讲解课。
2. 直接写一段中文里嵌英文的文案。
3. 旁白直接读文案：中文读中文，英文读英文。
4. 读到哪个英文词，下方词卡就切到哪个词。
5. 不要加开头教学口播，不要单独念解释。
6. 控制在 25-35 秒。
7. 生成视频、封面、caption、publish notes。
```

如果你手里只有一个大概主题，也可以这样发：

```text
主题：考试周崩溃但还要硬撑
目标观众：大学生
风格：像 001_prevalent_habits，一张高密度中文学习图，英文词逐个高亮，下方词卡解释。
请你自己选 10-12 个适合这个场景的英文词，并生成完整视频。
```

### 生成后的产物在哪里

每条跟读视频都会在这里生成一个 episode：

```text
read-aloud-episodes/<episodeId>/
```

最终产物在：

```text
read-aloud-episodes/<episodeId>/exports/<episodeId>.mp4
read-aloud-episodes/<episodeId>/exports/<episodeId>_cover.png
read-aloud-episodes/<episodeId>/exports/<episodeId>_caption.txt
read-aloud-episodes/<episodeId>/exports/<episodeId>_publish_notes.md
read-aloud-episodes/<episodeId>/exports/<episodeId>_contact_sheet.jpg
```

当前样例产物在：

```text
read-aloud-episodes/001_prevalent_habits/exports/
```

常用命令：

```powershell
cd F:\抖音英语卡片视频\remotion-template
npm.cmd run episode:use -- ../read-aloud-episodes/001_prevalent_habits
npm.cmd run voice
npm.cmd run render
```

## 推荐提示词：生成新词根视频

以后让 Codex 生成新的单词视频，可以直接复制下面这段，把 episodeId、主题、核心含义换掉。

```text
请使用该项目下面的 remotion-template/skills/douyin-remotion-video 生成新 root-word episode。

episodeId: 049_xxx_words
主题：词根 -xxx
核心含义：meaning / 中文含义

重要：请严格以 episodes/046_man_words 为视觉和动画基准。
不是只沿用黑黄风格，而是要沿用 046 的成片结构和运动语言：
1. 开场：大字 hook，不要叠卡片，不要加额外图标。
2. 第二段：orbit/bubble 单词按真实口播逐个显现，旋转不要急，之前出现的 bubble 保留在轨道上。
3. 第三段：same-root 极简居中文案。
4. 然后 root reveal、word card、grid、summary 按 046 的节奏走。
5. 正文不要出现动物/icon 浮层；封面可以保留品牌小猪。
6. grid 串词必须按实际词数动态对称布局；不能缺词，不能让线和模块/文字遮挡。
7. 导出前必须和 046 抽帧做 contact sheet 对比，确认整体视觉一致。
8. BGM 从 bgmRegistry.ts 选择；如前三秒是悬念/误区钩子，优先 suspense_003；bgmVolume=0.33，ducking 必须开启。
9. notes.md 记录 bgmId、bgmVolume、licenseNote、动画对齐检查结果、BGM 是否压人声。
10. 导出视频和封面，并检查封面内容一致、文字不溢出。
```

## 推荐提示词：修复最新单词视频

```text
请使用项目内 remotion-template/skills/douyin-remotion-video 检查并修复最新一次单词视频。

重点检查：
1. 开场 orbit/bubble 是否跟随口播逐个显现，旋转是否过急。
2. 底部 active word 是否提前抢跑。
3. grid 串词是否对称，是否缺词。
4. 连线是否遮挡卡片、root 模块或文字。
5. 长词是否在卡片内溢出。
6. 重新导出视频和封面。
7. 生成和 046 的 contact sheet 对比图。
8. 把修复内容和 QA 结果写入该 episode 的 notes.md。
```

## 常用命令

进入模板工程：

```powershell
cd F:\抖音英语卡片视频\remotion-template
```

切换到某个词根/单词 episode：

```powershell
npm.cmd run episode:use -- ../episodes/048_dent_words
```

生成 TTS 旁白：

```powershell
npm.cmd run voice
```

预览：

```powershell
npm.cmd run preview -- --port=3000
```

类型检查：

```powershell
cmd /c node_modules\.bin\tsc.cmd --noEmit
```

导出视频、封面、caption 和发布文案：

```powershell
npm.cmd run render
```

注意：PowerShell 可能因执行策略拦截 `npm.ps1`，因此推荐使用 `npm.cmd` 或 `cmd /c ...`。

## 导出物

每个 episode 完成后必须有：

```text
episodes/<episodeId>/exports/<episodeId>.mp4
episodes/<episodeId>/exports/<episodeId>_cover.png
episodes/<episodeId>/exports/<episodeId>_caption.txt
episodes/<episodeId>/exports/<episodeId>_publish_notes.md
episodes/<episodeId>/notes.md
```

## QA 要求

单词视频导出前至少检查：

- `tsc --noEmit` 通过。
- Remotion composition 可读取。
- 关键帧无空白、无文字溢出。
- 开场大字 hook、orbit/bubble、same-root 三段式结构与 046 一致。
- grid 没有缺词、遮挡、不对称问题。
- BGM 使用 `bgmRegistry.ts` 中已有曲目。
- 有旁白时 BGM ducking 开启。
- BGM 不压人声。
- 封面与内容一致，文字不溢出。
- 与 `episodes/046_man_words` 做 contact sheet 对比。

## 安全规则

- 不要把 `.env` 或任何 API key 写入 README、notes、代码或日志。
- DashScope key 只从环境变量读取。
- BGM 和图标使用本地素材，不在 Remotion 渲染时从网络加载。

## 仓库讲解视频

`repo-explainer/` 是一条介绍本仓库的竖屏讲解视频（独立的 Remotion 小工程，不改动 `remotion-template/`），复现方法见 [repo-explainer/README.md](repo-explainer/README.md)。

## GitHub 源码与复现

首次安装、密钥配置、音色标准和忽略范围见 [仓库使用说明](docs/repository_setup.md)。
