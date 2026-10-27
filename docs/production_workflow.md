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
npm.cmd run new -- <template> <episodeId> --exam <gaokao|cet4|cet6>
```

考试决定词汇等级、难度、观众和画面上的考试标签，规则见 `remotion-template/skills/_shared/EXAMS.md`。给 agent 的完整提示词用 `npm.cmd run prompt -- <template> --exam <考试> --topic "<主题>"` 生成（见 `docs/agent_prompts.md`）。

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

## 5. 同步、检查

```powershell
npm.cmd run episode:use -- ../episodes/<episodeId>
npm.cmd run check
```

`check` 检查：小猪锁；brief.md / TREATMENT.md 已填写（不是空白模板，第 9 节已对比）；data 不是参考 episode 的原样拷贝；词汇等级（课标 / 拓展，拓展最多 1 个）；题目答案和来源；GB2312 字符；新闻数字出处和关键词；cueAt 是否在口播里；时长；模板轮换。所有 ERROR 修好再继续。

## 6. 一键生产

```powershell
npm.cmd run produce
```

按固定顺序执行，任一步失败就停：

1. `check`
2. `voice`：只为新增或文字改动的句子重新配音；DashScope CosyVoice `cosyvoice-v3-flash` / `longanhuan`，API key 只从 `.env` 或环境变量 `DASHSCOPE_API_KEY` 读取。
3. `voice:check`：逐句语音转写核对；读错的句子改写 `text` 后重跑。
4. `check`（这时有真实时长）
5. `timeline`：每场时长
6. `audio`：按真实时间轴合成配乐和音效
7. `render`：分场静帧到 `out/qa/<id>/`、成片、-14 LUFS、QA 报告、contact sheet、封面、caption、发布文案

最后写出 `exports/<id>_handoff.md`。单步命令也可以单独运行，但推荐始终用 `produce`。

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
