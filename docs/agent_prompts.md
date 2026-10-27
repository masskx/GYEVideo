# 给外部 Agent 的提示词（复制即用）

这些提示词适用于任何能读写文件、运行命令的 agent（Codex、Claude Code、Cursor 等）。每段都让 agent 先读 `AGENTS.md` 和 `docs/agent_playbook.md`，按同一套流程做，所以不同 agent 做出来的视频风格和质量一致。

尖括号 `<…>` 里的内容换成你自己的。

---

## 0. 第一次在新电脑 / 新 agent 上使用

```text
请阅读仓库里的 AGENTS.md 和 docs/agent_playbook.md 第 1 节，完成一次性环境配置：
1. 检查 Node.js、ffmpeg、Python 是否安装；
2. 在 remotion-template 里运行 npm ci，并安装 scripts/requirements-voice-check.txt；
3. .env 里已经有 DASHSCOPE_API_KEY（不要打印、不要提交、不要写进任何文件）；
4. 运行 npm run doctor，直到显示 Ready；
5. 用 episodes/061_port_gameshow 做一次校准渲染（episode:use + produce），确认 QA PASS。
只汇报每一步的结果，不要修改任何模板代码。
```

## 1. 做一期新的单词视频（让 agent 自己选模板）

```text
请阅读 AGENTS.md 和 docs/agent_playbook.md，严格按 playbook 的步骤做一期新的单词视频。
- 用 npm run plan 推荐的单词模板，并完整阅读该模板的 SKILL.md。
- 词根：<spect = look / 看>（如果我没给，就选一个能覆盖 4–6 个课标词、最近 10 期没做过的词根）
- 学生：<高三>，重点是完形和阅读里常见的词。
- 先写 brief.md 和 TREATMENT.md（第 9 节要和同模板上一期至少 3 项不同），再写 data。
- 用 npm run produce 跑完整流程；voice:check 不通过就按 playbook 6.3 改写 text。
- 渲染后必须看 contact sheet 和每场静帧，按模板的 qa_checklist.md 检查，写好 notes.md。
- 不要修改小猪、配音、模板代码；遇到只能改代码才能解决的问题，停下来告诉我。
最后按 playbook 第 9 节的格式汇报。
```

## 2. 做一期新的双语阅读视频

```text
请阅读 AGENTS.md 和 docs/agent_playbook.md，严格按 playbook 的步骤做一期新的双语阅读视频。
- 用 npm run plan 推荐的阅读模板，并完整阅读该模板的 SKILL.md。
- 话题：<teenagers and exercise / 青少年运动>
- 如果是新闻模板（reading-caption-news）：先写 FACTS.md，只用一手来源（CDC、WHO、NIH、政府统计、期刊），每个数字都要有 URL 和原文引用；健康话题不给来源以外的建议。
- 如果是绘本模板（reading-picture-book）：故事原创，小猪英文叫 Little Pig，8–10 句，高考难度，4–6 个课标目标词。
- 用 npm run produce 跑完整流程，渲染后做人工检查并写 notes.md。
最后按 playbook 第 9 节的格式汇报，新闻视频要附上来源链接。
```

## 3. 指定模板

```text
请阅读 AGENTS.md 和 docs/agent_playbook.md，用 <vocab-whiteboard> 模板做一期新视频，内容：<词根 struct = build / 建造>。
其它要求同 docs/agent_prompts.md 第 1 段。如果 npm run plan 显示上一期也是这个模板，先提醒我再继续。
```

可用模板：`vocab-dossier`（高考词汇案卷）、`vocab-game-show`（词根闯关）、`vocab-whiteboard`（白板词根图）、`reading-picture-book`（英文绘本精读）、`reading-caption-news`（双语新闻阅读）。

## 4. 一次做一批（例如一周 3 期）

```text
请阅读 AGENTS.md 和 docs/agent_playbook.md，连续做 3 期视频：
1. 单词：<词根 A>
2. 双语阅读：<话题 B>
3. 单词：<词根 C>
每一期开始前都运行 npm run plan，保证同一条线上相邻两期不用同一个模板。
每一期都必须单独达到 playbook 的完成标准（check、voice:check、produce、人工检查、notes.md），一期没完成不要开始下一期。
最后用一张表汇报三期的结果。
```

## 5. 修改已经做好的一期

```text
请阅读 AGENTS.md 和 docs/agent_playbook.md。修改 <episodes/063_spect_dossier>：
<问题描述，例如：第 3 个单词换成 inspect；封面标题改短；第 12 秒字幕挡住了小猪>
只改这一期的 data 和文档，然后 episode:use + npm run produce，重新做人工检查，更新 notes.md 的“Fixes”一节。
```

## 6. 只检查不修改（审片）

```text
请阅读 AGENTS.md 和 docs/agent_playbook.md 第 8 节，审查 <reading-episodes/003_umbrella_book>：
运行 episode:use、npm run check，阅读 exports 里的 _qa.md、contact sheet 和 out/qa 静帧，
按该模板的 qa_checklist.md 逐项给出 通过 / 不通过 和原因。不要修改任何文件。
```

---

## English version (for agents that work better in English)

```text
Read AGENTS.md and docs/agent_playbook.md, then make one new <vocabulary | bilingual reading> video by following the playbook step by step.
- Template: the one `npm run plan` suggests (or <template id>). Read its SKILL.md, style.md and qa_checklist.md completely.
- Content: <root / topic>.
- Write brief.md and TREATMENT.md (section 9: at least 3 of 6 points differ from the previous episode of the template) before the data.
- For news: FACTS.md first, primary sources only, every number quoted.
- Run `npm run produce`; fix voice:check failures with playbook §6.3.
- Do the visual review (contact sheet + every scene still) and write notes.md.
- Never change the pig, the voice or template code; if only a code change would fix something, stop and tell me.
Report in the format of playbook §9.
```
