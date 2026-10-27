# 给 Agent 的提示词（总目录）

这些提示词适用于任何能读写文件、运行命令的 agent（Codex、Claude Code、Cursor 等）。每一段都让 agent 先读 `AGENTS.md`、`docs/agent_playbook.md` 和对应的规则文件，再按同一套流程、同一组检查做视频，所以不同 agent 做出来的视频风格和质量一致。

有三种用法：

| 用法 | 什么时候用 | 在哪里 |
|---|---|---|
| **单人完整提示词** | 一个 agent 从选题做到成片（最常用） | `docs/prompts/<模板 id>.md`，每个模板有高考 / 四级 / 六级三个版本 |
| **分工协作提示词** | 4 个 agent 流水线：选题 → 编剧 → 制作 → 审片 | `docs/prompts/roles.md` |
| **通用提示词** | 首次配置、一次做一批、修改、只审片 | 本页下方 |

---

## 1. 单人完整提示词（按模板 × 考试）

| 模板 | 内容线 | 文件 | 高考 | 四级 | 六级 |
|---|---|---|---|---|---|
| `vocab-dossier` 词汇案卷 | 单词 | [prompts/vocab-dossier.md](prompts/vocab-dossier.md) | ✓ | ✓ | ✓ |
| `vocab-game-show` 词根闯关 | 单词 | [prompts/vocab-game-show.md](prompts/vocab-game-show.md) | ✓ | ✓ | ✓ |
| `vocab-whiteboard` 白板词根图 | 单词 | [prompts/vocab-whiteboard.md](prompts/vocab-whiteboard.md) | ✓ | ✓ | ✓ |
| `reading-picture-book` 英文绘本精读 | 双语阅读 | [prompts/reading-picture-book.md](prompts/reading-picture-book.md) | ✓ | ✓ | ✓ |
| `reading-caption-news` 双语新闻阅读 | 双语阅读 | [prompts/reading-caption-news.md](prompts/reading-caption-news.md) | ✓ | ✓ | ✓ |

每段提示词都包含：
- 必读文件；
- 本期参数：考试、观众、允许的词汇等级、题目标注、文件夹和命名、时长；
- 这个模板的要点和这个考试的要点；
- 10 步执行流程、绝对不要做的事、先停下来问你的情况，以及汇报格式。

**更省事的做法：直接生成填好主题的提示词。** 在 `remotion-template/` 里运行：

```powershell
npm.cmd run prompt -- vocab-game-show --exam cet4 --topic "spect = look / 看"
npm.cmd run prompt -- reading-caption-news --exam cet6 --topic "sleep and memory in university students"
npm.cmd run prompt -- reading-picture-book --exam gaokao --topic "一把丢了的伞"
```

把输出整段复制给 agent 即可。

**不知道用哪个模板？** 先运行 `npm.cmd run plan`：它推荐同一条线上最久没用的模板，避免账号重复。

> `docs/prompts/` 里的文件由 `npm run prompt -- --write` 从 `remotion-template/scripts/prompt.ts` 生成。要修改提示词，改那个脚本里的说明再重新生成，不要手改生成的文件，这样提示词永远和模板、检查规则一致。

---

## 2. 分工协作提示词

见 [prompts/roles.md](prompts/roles.md)。四个角色各有：开始条件、要做的事、交接条件、不要做的事。

| 角色 | 产出 | 交给 |
|---|---|---|
| 选题策划 | episode 文件夹、brief.md（新闻 + FACTS.md） | 编剧 |
| 编剧 | TREATMENT.md、全部 data，`npm run check` 无 ERROR | 制作 |
| 制作 | `npm run produce` 显示 PRODUCE DONE，成片 + QA + handoff | 审片 |
| 审片 | notes.md 里的通过 / 退回结论，通过后提交 | 你 |

---

## 3. 通用提示词

### 3.1 第一次在新电脑 / 新 agent 上使用

```text
请阅读仓库里的 AGENTS.md 和 docs/agent_playbook.md 第 1 节，完成一次性环境配置：
1. 检查 Node.js、ffmpeg、Python 是否安装；
2. 在 remotion-template 里运行 npm ci，并安装 scripts/requirements-voice-check.txt；
3. .env 里已经有 DASHSCOPE_API_KEY（不要打印、不要提交、不要写进任何文件）；
4. 运行 npm run doctor，直到显示 Ready；
5. 用 episodes/061_port_gameshow 做一次校准渲染（episode:use + produce），确认 QA PASS。
只汇报每一步的结果，不要修改任何模板代码。
```

### 3.2 一次做一批（例如一周 3 期）

```text
请阅读 AGENTS.md、docs/agent_playbook.md 和 remotion-template/skills/_shared/EXAMS.md，连续做 3 期视频：
1. <高考 / 四级 / 六级> 单词：<词根 A>
2. <高考 / 四级 / 六级> 双语阅读：<话题 B>
3. <高考 / 四级 / 六级> 单词：<词根 C>
每一期开始前：运行 npm run plan 选模板（同一条线相邻两期不用同一个模板），
再运行 npm run prompt -- <模板 id> --exam <考试> --topic "<主题>"，严格按生成的提示词完成这一期。
每一期都必须单独达到完成标准（check、produce 显示 PRODUCE DONE、人工看片、notes.md），一期没完成不要开始下一期。
最后用一张表汇报三期的结果（episode、模板、考试、时长、QA、需要人听的句子）。
```

### 3.3 修改已经做好的一期

```text
请阅读 AGENTS.md 和 docs/agent_playbook.md。修改 <episodes/063_cet4_spect_dossier>：
<问题描述，例如：第 3 个单词换成 inspect；封面标题改短；第 12 秒字幕挡住了小猪>
只改这一期的 data 和文档，然后 episode:use + npm run produce，重新做人工检查，更新 notes.md 的“Fixes”一节。
不要改模板代码、小猪和配音。
```

### 3.4 只检查不修改（审片）

```text
请阅读 AGENTS.md、docs/agent_playbook.md 第 8 节和 remotion-template/skills/_shared/EXAMS.md，审查 <reading-episodes/003_cet4_umbrella_book>：
运行 episode:use、npm run check，阅读 exports 里的 _qa.md、_handoff.md、contact sheet 和 out/qa 静帧，
按该模板的 qa_checklist.md 和这一期考试的规则逐项给出 通过 / 不通过 和原因。不要修改任何文件。
```

### 3.5 English (for agents that work better in English)

```text
Read AGENTS.md, docs/agent_playbook.md and remotion-template/skills/_shared/EXAMS.md.
Then run, in remotion-template/: npm run prompt -- <template id> --exam <gaokao|cet4|cet6> --topic "<topic>"
and follow the generated prompt exactly: it lists the files to read, the episode parameters, the template and exam rules,
the ten steps, what never to do, when to stop and ask, and the report format.
```
