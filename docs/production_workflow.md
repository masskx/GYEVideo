# 生产流程

## 1. 新建 episode

词根/单词视频放在：

```text
episodes/
```

句型视频放在：

```text
sentence-episodes/
```

英文素材跟读/情景记词视频放在：

```text
read-aloud-episodes/
```

统一结构：

```text
<episode>/
├── brief.md
├── source/
├── data/
├── audio/
├── exports/
└── notes.md
```

不要复制 `remotion-template/`。

## 2. 准备内容

把原始材料放入 `source/`。

词根/单词视频常见材料：

- 词根/词缀笔记
- 单词列表
- 发音或词义对比资料
- 参考截图
- 草稿文案

句型视频常见材料：

- 中文表达冲动
- 英文句型骨架
- 真实误会场景
- 对话样例
- 想做成记忆公式的表达

情景记词跟读视频常见材料：

- 英文段落、短文、字幕或 transcript
- 想重点记的目标词
- 参考视频或阅读页风格要求
- 情景主题或目标观众

### `brief.md` 最低要求

词根/单词视频：

- 主题
- 目标观众
- 第一秒钩子
- 核心记忆点
- 需要讲的 3-8 个关键词

句型视频：

- Chinese Pain Point
- First 0.3s Interrupt Text
- Pain Flash Lines
- Conflict Line
- Pattern Slam Line
- Memory Formula
- Scene Metaphor
- Required Scene Elements
- Slot Swap Design
- Drill Lines
- Cover Main Title
- Cover Subtitle
- Cover Pattern Line
- Anti-PPT Check

情景记词跟读视频：

- Source Passage
- Scene Hook
- Target Words
- Memory Chain
- Visual Reference
- QA Notes

## 3. 写数据

把本期内容写到：

```text
episode/data/
```

常用文件：

- `voiceScript.ts`
- `episodeConfig.ts`
- `generatedVoiceTimeline.ts`

词根/单词视频常见附加文件：

- `words.ts`
- `subtitles.ts`

句型视频常见附加文件：

- `sentencePattern.ts`
- `subtitles.ts`

情景记词跟读视频常见附加文件：

- `readingPassage.ts`

## 4. 同步到模板

```powershell
cd F:\抖音英语卡片视频\remotion-template
```

词根/单词视频：

```powershell
npm.cmd run episode:use -- ../episodes/001_ject_words_douyin_v1
```

句型视频：

```powershell
npm.cmd run episode:use -- ../sentence-episodes/001_not_that_sentence
```

情景记词跟读视频：

```powershell
npm.cmd run episode:use -- ../read-aloud-episodes/001_prevalent_habits
```

这一步会同步数据、音频，并记录当前 active episode。

## 5. 生成配音

不要把 API key 写进文件。
从环境变量读取 `DASHSCOPE_API_KEY`。

```powershell
npm.cmd run voice
```

然后把生成物回存到 episode：

- `public/audio/` -> `episode/audio/`
- `src/data/generatedVoiceTimeline.ts` -> `episode/data/generatedVoiceTimeline.ts`

## 6. 预览和质检

```powershell
npm.cmd run preview -- --port=3000
npx.cmd tsc --noEmit
```

通用检查：

- 配音和字幕是否同步
- 关键字是否跟随当前片段高亮
- 是否存在文字重叠
- 是否有长时间静止画面

词根/单词视频重点检查：

- 前 3 秒是否抓人
- root reveal 是否足够清晰
- 封面是否一眼看懂记忆角度

句型视频重点检查：

- 前 0.5 秒是否有打断
- 句型骨架是否在 3 秒内出现
- 是否在 3 秒内给出记忆公式
- 是否先有场景再有讲解
- A/B slot 是否像替换积木而不是静态标签
- 是否有 drill 复诵
- 是否像短视频而不是 PPT

情景记词跟读视频重点检查：

- 黄黑单词视频风格是否清晰
- 顶部进度条是否可见
- 当前目标词是否随真实时间轴高亮
- 当前词解释是否包含音标、中文释义、情景含义
- 底部音频条是否不遮挡关键文字
- 最后复盘是否形成记忆链

## 7. 导出

```powershell
npm.cmd run render
```

导出物应进入：

```text
episode/exports/
```

至少包含：

- 最终视频
- 封面图
- caption
- publish notes

## 8. 句型视频硬门槛

句型视频一票否决项：

- 像 PPT
- 像课程封面
- 全程只是黑底字卡
- 句型骨架 3 秒后才出现
- 没有 slot swap
- 没有场景感
- 例句像教材
- 口播像语法老师
- 只有完整解释，没有 drill 复诵

## 9. 项目内 skill 入口

项目内约定：

- 词根/单词视频规则：`remotion-template/skills/douyin-remotion-video/`
- 句型视频规则：`remotion-template/skills/douyin-remotion-sentence-video/`
- 情景记词跟读视频规则：`douyin-remotion-read-aloud-vocab/`

后续优先改项目里的 skill 和文档，不依赖 C 盘全局 skill。
