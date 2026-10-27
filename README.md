# 小猪盖被 · 抖音高考英语短视频工厂

这是一个批量生产抖音竖屏高考英语短视频（1080×1920，约 60 秒）的 Remotion 工作区，面向准备高考英语的高中生。

- **两条内容线**：单词、双语阅读。每条线有多个模板轮换，账号不会看起来重复。
- **一套规则**：所有模板共用同一个小猪 IP、同一个配音、同一套质检，任何人或任何 agent 按流程做出来的质量一致。
- **只做数据，不改代码**：每期视频就是一个 episode 文件夹里的几份数据和文档；画面、配乐、音效、质检都由模板自动完成。

> **让 agent 做视频？** 直接看 [让外部 Agent 做视频](#让外部-agent-做视频)。Agent 的入口文件是 [AGENTS.md](AGENTS.md)，完整操作手册是 [docs/agent_playbook.md](docs/agent_playbook.md)。

---

## 目录

1. [五个模板](#五个模板)
2. [小猪 IP 与配音（不可修改）](#小猪-ip-与配音不可修改)
3. [第一次使用：环境安装](#第一次使用环境安装)
4. [每期怎么做（完整流程）](#每期怎么做完整流程)
5. [让外部 Agent 做视频](#让外部-agent-做视频)
6. [怎么检查 Agent 交回来的视频](#怎么检查-agent-交回来的视频)
7. [发布](#发布)
8. [命令速查](#命令速查)
9. [目录结构](#目录结构)
10. [常见问题](#常见问题)
11. [内容规则](#内容规则)
12. [安全与版权](#安全与版权)
13. [旧内容线](#旧内容线)

---

## 五个模板

| 内容线 | 模板 id | 系列名 | 时长 | 参考 episode |
|---|---|---|---|---|
| 单词 | `vocab-dossier` | 高考词汇案卷 | 55–68 秒 | `episodes/060_duc_dossier` |
| 单词 | `vocab-game-show` | 词根闯关 | 50–66 秒 | `episodes/061_port_gameshow` |
| 单词 | `vocab-whiteboard` | 白板词根图 | 50–66 秒 | `episodes/062_vis_whiteboard` |
| 双语阅读 | `reading-picture-book` | 英文绘本精读 | 50–72 秒 | `reading-episodes/001_screen_promise` |
| 双语阅读 | `reading-caption-news` | 双语新闻阅读 | 50–72 秒 | `reading-episodes/002_teen_sleep_news` |

### 高考词汇案卷 `vocab-dossier`

网点印刷风格的“案卷”。开场是一道完形题（案子），词根是“指纹”，每个单词是一件编号证物，最后回到开场题目破案、盖章结案，再留一道作业题给评论区。适合：一个词根能直接解出一道选词题的情况，悬疑、有反转的语气。

### 词根闯关 `vocab-game-show`

扁平糖果色的综艺闯关。词根是“通关密码”，每个单词一关：前缀方块落下、词根方块砸下、字面意思弹出、合成单词、黄色考试释义、PERFECT! 判定；然后极速挑战把五个词再过一遍，成绩单盖章评级，最后加分题留给评论区抢答。适合：一个词根有 5 个干净的“前缀 + 词根”单词，节奏快、能量高。

### 白板词根图 `vocab-whiteboard`

一块白板现场板书。词根圈在中间，单词向四周分支：蓝笔写拆分和字面意思，红笔写考试释义，黄色荧光笔标出词根。其中一个“反转词”（例如 provide 和“看”有什么关系？）先写错误猜测、擦掉，再用拆分解释。镜头在白板上移动，不切镜头，最后拉远成一整张可以截图保存的词根图。适合：词根里有一个出人意料的词，语气平静、像老师讲课。

### 英文绘本精读 `reading-picture-book`

蜡笔绘本。小猪（英文名 Little Pig）主演一个原创的高中生日常小故事（熬夜刷手机、丢了伞、第一次演讲）。每页一张插图，配音逐句用英文朗读，句子随朗读画下划线，目标词变黄、弹出词卡，每句下面有中文。之后复习目标词，出一道阅读理解题（留出思考时间），答案指回原文那一句。

### 双语新闻阅读 `reading-caption-news`

字幕驱动的科普新闻。一个真实话题（睡眠、运动、手机、环境），写成五句高考难度的英文短文：大字英文按朗读逐段出现，关键词打在黄色色块上，中文在下，上方有简单的数据动画。屏幕上的每个数字都有 SOURCE 来源标签，来源写在 `FACTS.md`。最后一道主旨/细节题和本篇高考词复习。

### 模板轮换

同一条内容线上，相邻两期不要用同一个模板。`npm run plan` 会列出最近几期，并推荐最久没用的模板。必须连续用同一个模板时，`TREATMENT.md` 第 9 节要和上一期在结构、开场画面、招牌镜头、镜头路线、配乐形状、结尾 6 项中至少 3 项不同。

---

## 小猪 IP 与配音（不可修改）

**小猪**（英文名 Little Pig，账号名 小猪盖被）只能由 `remotion-template/src/brand/BrandPig.tsx` 绘制。这个文件的哈希锁在 `pig.lock`，`npm run check` 和 `npm run doctor` 每次都会校验，文件被改动就报错。

| 可以 | 不可以 |
|---|---|
| 位置、大小、左右镜像 | 修改造型、颜色、描边、帽子和外套 |
| 落地弹跳、轻微抬起或倾斜 | 加衣服、手持道具、新表情 |
| 内置表情：neutral / squint / happy / surprised | 第二只猪，或任何其它小猪图片和图标 |
| 内置姿势：idle / inspect / cheer / point | 让小猪挡住文字或选项 |

**配音**：阿里云百炼 DashScope CosyVoice，模型 `cosyvoice-v3-flash`，音色 `longanhuan`，全账号统一。锁定在 `remotion-template/src/brand/brand.ts`；`.env` 里写了别的模型或音色，`npm run voice` 会直接报错。不同模板只改变语气说明（`instruction`），不换音色。

---

## 第一次使用：环境安装

每台电脑只需要做一次。

### 1. 安装软件

| 软件 | 版本 | 说明 |
|---|---|---|
| Node.js | 18 或更新（推荐 22） | https://nodejs.org |
| ffmpeg（含 ffprobe） | 较新版本 | 解压后把 `bin` 目录加入 PATH |
| Python | 3.10 或更新 | Windows 安装时勾选 “Add python.exe to PATH” |
| Git | 任意 | 拉取和提交仓库 |

Windows 上如果输入 `python` 会打开应用商店，请在“设置 → 应用 → 应用执行别名”里关闭 python 的别名。PowerShell 可能拦截 `npm.ps1`，所以本文命令都写成 `npm.cmd`。

### 2. 配置项目

在仓库根目录：

```powershell
Copy-Item .env.example .env
# 用记事本打开 .env，填写 DASHSCOPE_API_KEY=你的密钥（.env 不会被提交）
cd remotion-template
npm.cmd ci
python -m pip install -r scripts/requirements-voice-check.txt
npm.cmd run doctor
```

`doctor` 逐项检查 Node、依赖、ffmpeg、Python 语音检查依赖、API Key 是否存在（不显示内容）、配音是否为品牌音色、小猪锁、字体。最后必须显示 `Ready.`；有 `FAIL` 的行按提示修好再继续。

如果电脑通过 HTTP 代理上网，且 Node 是 22 或更新，还要设置环境变量 `NODE_USE_ENV_PROXY=1`。

### 3. 校准渲染

用一期参考视频确认这台电脑能做出一样的结果：

```powershell
npm.cmd run episode:use -- ../episodes/061_port_gameshow
npm.cmd run produce
```

首次运行会自动下载无头 Chromium 和语音识别模型（约 1.5 GB），需要联网，时间较长。最后显示 `PRODUCE DONE`，并且 `episodes/061_port_gameshow/exports/061_port_gameshow_qa.md` 显示 PASS（约 64 秒，-14 LUFS），就说明环境没问题。

---

## 每期怎么做（完整流程）

所有命令都在 `remotion-template/` 里运行。

| 步骤 | 做什么 | 命令 / 文件 |
|---|---|---|
| 1. 选模板 | 看最近几期，得到推荐模板和下一个编号 | `npm.cmd run plan` |
| 2. 建文件夹 | 复制参考 episode 的数据，生成 brief、TREATMENT、notes | `npm.cmd run new -- <模板 id> <episodeId>` |
| 3. 写 brief | 词根和单词（标课标 / 拓展），或故事 / 新闻话题、题目和答案 | `brief.md` |
| 4. 写 treatment | 三个结构候选、开场钩子、招牌镜头、与上一期的 6 项对比 | `TREATMENT.md` |
| 5. 新闻先查证 | 只用一手来源，每个数字写 URL 和原文 | `FACTS.md`（仅新闻模板） |
| 6. 写数据 | 改写 data 里的每一个字段，参考 episode 的内容一个都不能留 | `data/*.ts`（字段说明见模板的 `SKILL.md`） |
| 7. 同步并检查 | 修好所有 ERROR | `npm.cmd run episode:use -- ../episodes/<id>`，然后 `npm.cmd run check` |
| 8. 一键生产 | 检查 → 配音 → 语音转写核对 → 再检查 → 时间轴 → 配乐音效 → 渲染和 QA，任一步失败就停 | `npm.cmd run produce` |
| 9. 人工看片 | 看 contact sheet 和每场静帧，按模板的 qa_checklist.md 逐项检查 | `exports/<id>_contact_sheet.jpg`、`out/qa/<id>/` |
| 10. 记录并提交 | 写 notes.md，提交 episode 文件夹（exports、audio 不提交） | `notes.md`、`git commit` |

episodeId 的格式：`三位编号_主题_模板简称`，例如 `063_spect_dossier`、`064_struct_gameshow`、`003_umbrella_book`、`004_exercise_news`。单词线放在 `episodes/`，阅读线放在 `reading-episodes/`。

`produce` 只会为新增或文字有改动的句子重新配音，所以修改后重跑很快。加 `-- --voice` 会强制全部重新配音。

### 写配音稿的要点

`voiceScript.ts` 里每句有两个文字字段：`text` 是配音读的，`subtitle` 是屏幕显示的。

| 情况 | text（读） | subtitle（显示） |
|---|---|---|
| 英文句子里的数字 | `eight to ten hours` | `8 to 10 hours` |
| 被读成单词的词根 | `V I S` | `vis` |
| 应读成一个音节的词根 | `duck` | `duc` |
| 小猪的英文名 | `Little Pig` | `Little Pig` |

`voice:check` 会把每句配音转成文字和稿子对比。哪句没通过，就按上表改写 `text`，然后重跑 `produce`。如果确认发音正确、只是识别结果不同（例如英式发音的 port 被识别成 “pot”），可以在这句加 `asrAccept`，但必须有人听过，并写进 notes.md。

### 时长超了怎么办

按顺序调整：删口播里的口头词（就是、其实）→ 缩短超过 0.5 秒的停顿 → 减少一个单词或一句故事。不要为了时长缩短字幕停留时间。`npm.cmd run timeline` 会显示每场用了多少秒。

---

## 让外部 Agent 做视频

任何能读写文件、运行命令的 agent（Codex、Claude Code、Cursor 等）都可以用这个仓库做视频。保证一致性的机制：

1. **固定入口**：`AGENTS.md`（`CLAUDE.md` 指向它）→ `docs/agent_playbook.md` → 模板的 `SKILL.md`。
2. **固定流程**：`npm run produce` 按唯一顺序执行所有步骤，失败就停，不能跳步。
3. **自动拦截**：`npm run check` 拦截小猪被改、brief / TREATMENT 没写、数据还是参考 episode 的原样拷贝、词汇等级不对、题目没答案或来源、生僻字、新闻数字没出处、关键词对不上、时长超出、模板重复等问题；`doctor` 和 `voice` 拦截换音色；`episode:use` 切换时清空上一期的配音，`produce` 自动补齐缺失或过期的配音。
4. **固定交付**：每期都有 `_qa.md`（自动测量）、`_handoff.md`（流程结果）、`notes.md`（人工检查记录）。

### 怎么给 Agent 下指令

把 [docs/agent_prompts.md](docs/agent_prompts.md) 里对应的一段复制给 agent，换掉尖括号里的内容即可。例如做一期单词视频：

```text
请阅读 AGENTS.md 和 docs/agent_playbook.md，严格按 playbook 的步骤做一期新的单词视频。
- 用 npm run plan 推荐的单词模板，并完整阅读该模板的 SKILL.md。
- 词根：spect = look / 看
- 学生：高三，重点是完形和阅读里常见的词。
- 先写 brief.md 和 TREATMENT.md，再写 data；用 npm run produce 跑完整流程。
- 渲染后必须看 contact sheet 和每场静帧，写好 notes.md。
- 不要修改小猪、配音、模板代码；只能改代码才能解决的问题，停下来告诉我。
最后按 playbook 第 9 节的格式汇报。
```

提示词库还包括：首次配置环境、做双语阅读、指定模板、一次做一批、修改已做好的一期、只审片不修改。

### Agent 应该交回什么

```text
Episode <id> (<模板>) is ready.
- Video: exports/<id>.mp4, <时长> s, QA PASS
- Cover / caption / publish notes: exports/
- Pinned-comment answer: <评论区置顶答案>
- Please listen to: <用了 asrAccept 的句子，或 none>
- Sources (news): <来源链接>
- Template warnings or problems I could not fix in data: <none / 说明>
```

---

## 怎么检查 Agent 交回来的视频

1. 打开 `exports/<id>_handoff.md`：每一步都是 pass，结果是 RENDERED。
2. 打开 `exports/<id>_qa.md`：PASS（尺寸、时长、响度 -14 LUFS、峰值、无黑帧）。
3. 看 `exports/<id>_contact_sheet.jpg`：小猪是原样，文字没有重叠或出界，风格符合模板。
4. 看 `notes.md`：写了人工检查结果、改写过哪些句子、哪些句子需要人听。
5. 听一遍成片，特别是 agent 标出的句子。
6. 新闻视频：打开 `FACTS.md` 里的链接，确认数字和原文一致。
7. 用 `git diff` 确认 agent 只改了自己的 episode 文件夹（没有改 `remotion-template/src/`）。

---

## 发布

`exports/` 里是发布需要的全部文件：

| 文件 | 用途 |
|---|---|
| `<id>.mp4` | 成片（1080×1920，30 fps，-14 LUFS） |
| `<id>_cover.png` | 封面 |
| `<id>_caption.txt` | 抖音标题和文案 |
| `<id>_publish_notes.md` | 发布说明、话题标签、评论区置顶答案 |
| `<id>_qa.md`、`<id>_contact_sheet.jpg` | 质检记录 |
| `<id>_handoff.md`、`<id>_voice_check.json` | 生产流程和语音核对记录 |

发布前按 [docs/publish_checklist.md](docs/publish_checklist.md) 过一遍。下一期发布时，把上一期的评论区答案置顶。

---

## 命令速查

在 `remotion-template/` 里运行（Windows 用 `npm.cmd`）：

| 命令 | 作用 |
|---|---|
| `npm run doctor` | 检查电脑环境（每台电脑一次） |
| `npm run plan` | 推荐下一期的模板和编号 |
| `npm run new -- <模板> <id>` | 新建 episode |
| `npm run episode:use -- ../episodes/<id>` | 切换当前 episode |
| `npm run check` | 检查内容规则 |
| `npm run produce` | 一键生产（推荐） |
| `npm run voice` | 只生成配音 |
| `npm run voice:check` | 只做语音转写核对 |
| `npm run timeline` | 每场时长和总时长 |
| `npm run audio` | 只生成配乐和音效 |
| `npm run render` | 只渲染和导出 |
| `npm run qa` | 对已导出的视频重跑 QA |
| `npm run preview` | 打开 Remotion Studio 预览 |
| `npm run typecheck` | 代码类型检查（改模板代码时用） |

---

## 目录结构

```text
AGENTS.md / CLAUDE.md       Agent 入口
README.md                   本文件
docs/
  agent_playbook.md         Agent 操作手册（逐步流程、排错表）
  agent_prompts.md          给 Agent 的提示词库
  production_workflow.md    生产流程速查
  publish_checklist.md      发布检查清单
  naming_rules.md           命名规则
  repository_setup.md       仓库与环境说明
episodes/<id>/              单词视频（060 起为模板视频；001–059 为旧版黑黄视频）
reading-episodes/<id>/      双语阅读视频
sentence-episodes/<id>/     句型视频
remotion-template/
  src/templates/registry.ts 模板目录
  src/brand/                小猪（锁定）、品牌名、配音
  src/core/                 共用时间轴、动效、字体、音频
  src/dossier/ gameshow/ whiteboard/ picturebook/ captionnews/   五个模板
  scripts/                  所有命令的实现
  skills/_shared/           共用规则（HOUSE_RULES.md、DIRECTING.md）
  skills/<模板 id>/          每个模板的制作规范、风格、质检清单
shared-assets/              旧内容线用的图标和音乐（没有小猪素材）
content/                    素材
```

每个模板 episode 文件夹：

```text
<episode>/
├── brief.md        选题和内容（先写）
├── TREATMENT.md    结构和镜头计划（先写）
├── FACTS.md        仅新闻：来源和原文
├── data/           本期数据（唯一放内容的地方）
├── audio/          生成的配音和配乐（不提交）
├── exports/        成片和发布物（不提交）
└── notes.md        质检和修改记录
```

---

## 常见问题

| 现象 | 处理 |
|---|---|
| `npm.ps1 cannot be loaded` | 用 `npm.cmd` |
| `doctor` 显示 Python FAIL | `python -m pip install -r scripts/requirements-voice-check.txt`，确认 `python` 在 PATH 里 |
| `DASHSCOPE_API_KEY is not set` | 在仓库根目录 `.env` 填写密钥 |
| `overrides the brand voice` | 删除 `.env` 里的 `DASHSCOPE_TTS_MODEL` / `DASHSCOPE_TTS_VOICE` |
| `BrandPig.tsx changed` | `git checkout -- remotion-template/src/brand/BrandPig.tsx` |
| `Characters outside the font subset` | 换成常用简体字 |
| `Length … is outside` | 见上文“时长超了怎么办” |
| `voice:check` 某句 FAIL | 见上文“写配音稿的要点” |
| 渲染出来是另一期的内容或声音 | 先运行 `episode:use` 切到这一期，再 `produce` |
| 首次渲染很慢 | 正在下载 Chromium 和语音模型，只发生一次 |

更完整的排错表见 [docs/agent_playbook.md](docs/agent_playbook.md) 第 11 节。

---

## 内容规则

- 单词标注 `课标`（高考课标词汇）或 `拓展`，每期最多 1 个拓展词；单词视频 4–6 个词，每个词配一个考试搭配。
- 原创题标注“高考风格原创练习题”；只有引用真题时才写“真题”，并注明年份和出处。
- 阅读文本原创，高考难度（CEFR B1–B2），不照抄新闻或试卷。
- 新闻里的每个数字都有一手来源（CDC、WHO 等），写在 `FACTS.md`；健康话题不给来源以外的建议。
- 屏幕上的中文用常用简体字（字体按 GB2312 字符集裁剪）。
- 详细规则：`remotion-template/skills/_shared/HOUSE_RULES.md`。

---

## 安全与版权

- 不要把 `.env` 或任何 API key 写入 README、notes、代码或日志；`DASHSCOPE_API_KEY` 只从 `.env` 或环境变量读取。
- 配乐和音效全部由代码合成（`remotion-template/scripts/audio/`）；字体为 OFL 开源字体（`public/fonts/OFL.txt`）。
- 不从网上下载音乐、图片或视频放进视频。
- 风格方法参考 [lemo-opuscar](https://github.com/lemomo-ai/lemo-opuscar)（MIT，许可见 `remotion-template/skills/_shared/LICENSE-lemo-opuscar.txt`），没有使用它的任何成片、角色、镜头或旋律。

---

## 旧内容线

- **句型视频**（`sentence-episodes/`）：继续使用，规则在 `remotion-template/skills/douyin-remotion-sentence-video`。
- **旧版黑黄词根视频**（`episodes/001–059`）：已冻结，只保留重新导出：
  ```powershell
  npm.cmd run episode:use -- ../episodes/046_man_words
  npm.cmd run voice
  npm.cmd run render
  ```
- **中英朗读 / 情景记单词跟读视频**：已停更，代码和素材已删除（保留在 git 历史中）。

仓库与 GitHub 说明见 [docs/repository_setup.md](docs/repository_setup.md)。
