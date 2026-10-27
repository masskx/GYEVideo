# 生产流程

完整规则：`AGENTS.md` 和 `remotion-template/skills/_shared/HOUSE_RULES.md`。本文是流程速查。

## 1. episode 放在哪里

| 内容 | 文件夹 |
|---|---|
| 单词视频（vocab-dossier / vocab-game-show / vocab-whiteboard） | `episodes/` |
| 双语阅读视频（reading-picture-book / reading-caption-news） | `reading-episodes/` |
| 句型视频 | `sentence-episodes/` |

模板 episode 的结构：

```text
<episode>/
├── brief.md          # 选题、单词、题目（先写）
├── TREATMENT.md      # 三个结构候选、钩子、招牌镜头、与上一期的对比（先写）
├── FACTS.md          # 仅新闻模板：每个数字的来源 URL 和原文
├── data/             # 本期数据（唯一放内容的地方）
├── audio/            # 生成的配音、配乐（不入库）
├── exports/          # 成片和发布物（不入库）
└── notes.md          # QA 和语音检查记录
```

不要复制 `remotion-template/`。

## 2. 选模板、建 episode

```powershell
cd remotion-template
npm.cmd run plan
npm.cmd run new -- <template> <episodeId>
```

`plan` 列出每条线最近的几期，推荐最久没用的模板；同一条线不要连续两期用同一个模板。`new` 复制参考 episode 的数据，改好 id，生成 `brief.md`、`TREATMENT.md`、`notes.md`。

## 3. 写 brief 和 treatment

先写 `brief.md` 和 `TREATMENT.md`，再改数据。`TREATMENT.md` 第 9 节要和同模板上一期对比 6 项（结构、开场画面、招牌镜头、镜头路线、配乐形状、结尾），至少 3 项不同。

句型视频 `brief.md` 最低要求（不变）：Chinese Pain Point、First 0.3s Interrupt Text、Pain Flash Lines、Conflict Line、Pattern Slam Line、Memory Formula、Scene Metaphor、Required Scene Elements、Slot Swap Design、Drill Lines、Cover Main Title、Cover Subtitle、Cover Pattern Line、Anti-PPT Check。

## 4. 写数据

| 模板 | 数据文件 |
|---|---|
| vocab-dossier | `data/dossier.ts` |
| vocab-game-show | `data/gameShow.ts` |
| vocab-whiteboard | `data/whiteboard.ts` |
| reading-picture-book | `data/pictureBook.ts` |
| reading-caption-news | `data/captionNews.ts` |
| 所有模板 | `data/voiceScript.ts`、`data/episodeConfig.ts`、`data/generatedVoiceTimeline.ts` |
| 句型视频 | `data/sentencePattern.ts`、`data/subtitles.ts` 等 |

字段说明见各模板的 `SKILL.md`。数据文件自带类型定义，不要 import 其它文件。

## 5. 同步、检查、配音

```powershell
npm.cmd run episode:use -- ../episodes/<episodeId>
npm.cmd run check
npm.cmd run voice
npm.cmd run voice:check
npm.cmd run timeline
```

- `check`：小猪锁、词汇等级（课标 / 拓展，拓展最多 1 个）、题目答案和来源、GB2312 字符、新闻数字出处、时长、模板轮换。
- `voice`：DashScope CosyVoice（`cosyvoice-v3-flash` / `longanhuan`），API key 只从环境变量 `DASHSCOPE_API_KEY` 读取。配音和时间轴会回存到 episode。
- `voice:check`：逐句语音转写核对；读错的句子改写 `text`（例如数字写成英文单词、词根逐个字母拼读）后重新生成。

## 6. 配乐和导出

```powershell
npm.cmd run audio
npm.cmd run render
```

`audio` 按真实时间轴合成配乐和音效（必须在 `voice` 之后）。`render` 先导出每场静帧到 `out/qa/<id>/`，再渲染成片、统一响度到 -14 LUFS、写 QA 报告和 contact sheet，最后导出封面、caption 和发布文案到 `exports/`。

## 7. 人工检查

`render` 输出 `QA PASS` 后，还要看 contact sheet 和分场静帧，按模板的 `references/qa_checklist.md` 检查：文字不重叠、不出界，小猪站在地面线上、不挡内容，中文清晰可读。结果写进 `notes.md`。

## 8. 句型视频硬门槛（不变）

一票否决：像 PPT、像课程封面、全程只是黑底字卡、句型骨架 3 秒后才出现、没有 slot swap、没有场景感、例句像教材、口播像语法老师、只有完整解释没有 drill 复诵。

## 9. 项目内 skill 入口

- 共用规则：`remotion-template/skills/_shared/`
- 单词模板：`remotion-template/skills/vocab-dossier/`、`vocab-game-show/`、`vocab-whiteboard/`
- 阅读模板：`remotion-template/skills/reading-picture-book/`、`reading-caption-news/`
- 句型视频：`remotion-template/skills/douyin-remotion-sentence-video/`
- 旧版黑黄词根视频（冻结）：`remotion-template/skills/douyin-remotion-video/`
