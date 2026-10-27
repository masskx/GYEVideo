# 小猪盖被 · 抖音高考英语短视频工厂

这是一个批量生产抖音竖屏（1080×1920，约 60 秒）高考英语短视频的 Remotion 工作区，面向准备高考英语的高中生。

核心原则：只维护一套 `remotion-template/` 模板工程，内容按 episode 管理。每条内容线有多个模板轮换使用，避免账号看起来重复；所有模板共用同一套规则、同一个小猪 IP、同一个配音，任何 agent 都能稳定复现。

**Agent 请先读 [AGENTS.md](AGENTS.md)。**

## 内容线与模板

| 内容线 | 模板 id | 系列名 | 风格 | 参考 episode |
|---|---|---|---|---|
| 单词 | `vocab-dossier` | 高考词汇案卷 | 网点印刷案卷：完形题是案子，词根是指纹，单词是证物，盖章结案 | `episodes/060_duc_dossier` |
| 单词 | `vocab-game-show` | 词根闯关 | 扁平糖果色综艺：一关一个词，前缀 + 词根踩点组合，PERFECT 判定，极速挑战 | `episodes/061_port_gameshow` |
| 单词 | `vocab-whiteboard` | 白板词根图 | 白板现场板书：词根居中，单词分支展开，镜头在白板上移动，最后拉远成整张词根图 | `episodes/062_vis_whiteboard` |
| 双语阅读 | `reading-picture-book` | 英文绘本精读 | 蜡笔绘本：小猪主演的原创英文小故事，逐句英文朗读 + 中文，目标词卡片，阅读理解题 | `reading-episodes/001_screen_promise` |
| 双语阅读 | `reading-caption-news` | 双语新闻阅读 | 字幕驱动的科普新闻：大字英文分段出现，中文在下，数据有出处，阅读理解题 | `reading-episodes/002_teen_sleep_news` |

模板目录（代码）：`remotion-template/src/templates/registry.ts`。每个模板的制作规范在 `remotion-template/skills/<模板 id>/SKILL.md`，共用规则在 `remotion-template/skills/_shared/HOUSE_RULES.md`。

其它内容线：

- `sentence-episodes/`：句型视频，继续使用 `remotion-template/skills/douyin-remotion-sentence-video`，不变。
- `episodes/001–059`：旧版黑黄词根视频（root-word），已冻结：只保留渲染能力，不再做新期。
- 旧的中英朗读/情景记单词跟读视频已停更，代码和素材已删除（保留在 git 历史中）。

## 小猪 IP（不可修改）

小猪（英文名 Little Pig，账号名 小猪盖被）只能由 `remotion-template/src/brand/BrandPig.tsx` 绘制，文件哈希锁在 `pig.lock`，`npm run check` 会校验。

- 允许：位置、大小、镜像、落地弹跳、内置表情（neutral / squint / happy / surprised）和内置姿势（idle / inspect / cheer / point）。
- 禁止：修改造型、颜色、衣服帽子，新增表情，添加第二只猪或任何其它小猪图片。

## 每期怎么做

在 `remotion-template/` 里：

```powershell
npm.cmd run plan                                   # 看各线最近几期，推荐下一期用哪个模板
npm.cmd run new -- vocab-game-show 063_spect_gameshow
# 先写 brief.md 和 TREATMENT.md，再改 data/ 里的数据（新闻还要写 FACTS.md）
npm.cmd run episode:use -- ../episodes/063_spect_gameshow
npm.cmd run check                                  # 小猪锁、词汇等级、题目、字符集、时长、轮换
npm.cmd run voice                                  # DashScope CosyVoice 生成配音
npm.cmd run voice:check                            # 语音转写逐句核对，读错就改写重生成
npm.cmd run timeline                               # 每场时长和总时长
npm.cmd run audio                                  # 按真实时间轴合成配乐和音效
npm.cmd run render                                 # 分场静帧、成片、-14 LUFS、QA 报告、封面、文案
```

其它命令：`npm.cmd run preview`（Remotion Studio）、`npm.cmd run typecheck`、`npm.cmd run qa`（重跑已导出视频的 QA）。

PowerShell 可能拦截 `npm.ps1`，推荐使用 `npm.cmd`。

## 推荐提示词

新的单词视频：

```text
请阅读 AGENTS.md，用 npm run plan 推荐的单词模板做一期新视频。
词根：spect = look / 看
目标学生：高三，完形和阅读里常见的词。
按 skills/_shared/HOUSE_RULES.md 的完成标准交付：check、voice:check、render QA PASS，看过 contact sheet，写好 notes.md。
```

新的双语阅读视频：

```text
请阅读 AGENTS.md，用 npm run plan 推荐的阅读模板做一期新视频。
话题：teenagers and exercise
新闻模板必须先写 FACTS.md，只用一手来源（CDC、WHO 等），屏幕上的每个数字都要有出处。
绘本模板由小猪（Little Pig）主演，故事原创，高考难度。
```

指定模板：把“npm run plan 推荐的模板”换成具体模板 id，例如 `reading-picture-book`。

## 导出物

每期完成后（`exports/` 不入库）：

```text
<episode>/exports/<id>.mp4
<episode>/exports/<id>_cover.png
<episode>/exports/<id>_caption.txt
<episode>/exports/<id>_publish_notes.md     # 含评论区置顶答案
<episode>/exports/<id>_qa.md                # 自动 QA：尺寸、时长、响度、峰值、黑帧
<episode>/exports/<id>_contact_sheet.jpg
<episode>/brief.md, TREATMENT.md, notes.md  # 入库
```

## 安全与版权

- 不要把 `.env` 或任何 API key 写入 README、notes、代码或日志；`DASHSCOPE_API_KEY` 只从环境变量读取。
- 配乐和音效全部由代码合成（`scripts/audio/`），字体为 OFL 开源字体（`public/fonts/OFL.txt`）。
- 原创练习题标注“高考风格原创练习题”；只有引用真题时才写“真题”，并注明年份和出处。
- 风格方法参考 [lemo-opuscar](https://github.com/lemomo-ai/lemo-opuscar)（MIT，许可见 `remotion-template/skills/_shared/LICENSE-lemo-opuscar.txt`），没有使用其任何成片、角色、镜头或旋律。

## 旧版黑黄词根视频（已冻结）

`episodes/001–059` 使用 `RootWordTemplate`，规则在 `remotion-template/skills/douyin-remotion-video`。需要重新导出旧视频时：

```powershell
npm.cmd run episode:use -- ../episodes/046_man_words
npm.cmd run render
```

## GitHub 源码与复现

首次安装、密钥配置、音色标准和忽略范围见 [仓库使用说明](docs/repository_setup.md)。
