# 发布检查清单

## 内容

- 标题是否清楚
- 前 3 秒是否有钩子
- 核心记忆点是否明确
- 是否避免教材腔
- 是否有一句适合评论区/标题复用的总结
- 单词是否都是课标词（拓展词最多 1 个）
- 原创题是否标注“高考风格原创练习题”；新闻数字是否都有出处（`FACTS.md`）
- 评论区置顶答案是否已从 `_publish_notes.md` 准备好

## 画面

- 是否符合本模板的风格规范（`skills/<模板>/references/style.md`）
- 和同一条线上一期是否换了模板或至少 3 项不同（`TREATMENT.md` 第 9 节）
- 小猪是否是品牌小猪原样、没有挡住内容
- 当前关键词是否足够大
- 字幕是否可读
- 画面是否没有文字重叠
- 是否没有长时间卡在同一画面
- 封面是否能一眼看懂主题

## 声音

- 配音是否清晰
- 英文发音是否能听懂（`npm run voice:check` 通过）
- 字幕是否跟配音同步
- 音频开头和结尾是否没有异常空白
- 响度 -14 LUFS、峰值不超过 -0.5 dBFS（见 `_qa.md`）

## 文件

- 导出视频命名是否规范
- 封面命名是否规范
- caption 和 publish notes 是否齐全
- 文件是否放在对应 episode 的 `exports/`
- API Key 是否没有出现在任何文件里

## 技术

```powershell
npm.cmd run typecheck
npm.cmd run check
npm.cmd run voice:check
npm.cmd run render
```

都应通过，`render` 输出 `QA PASS`。
