# Remotion Template

这是 `DouyinVideoFactory` 的唯一 Remotion 模板工程。

它负责：

- 渲染黑黄高对比抖音短视频画面
- 读取当前 active episode 数据
- 播放 episode 配音
- 根据 `generatedVoiceTimeline.ts` 驱动字幕、场景和关键高亮
- 同步生成抖音封面图
- 同步生成 caption 和 publish notes

## 支持的内容类型

- 词根/单词视频
- 句型/表达视频

## 同步 episode

词根/单词视频：

```powershell
npm.cmd run episode:use -- ../episodes/001_ject_words_douyin_v1
```

句型视频：

```powershell
npm.cmd run episode:use -- ../sentence-episodes/001_not_that_sentence
```

## 预览

```powershell
npm.cmd run preview -- --port=3000
```

## 生成配音

```powershell
npm.cmd run voice
```

生成后，把 `public/audio/` 和 `src/data/generatedVoiceTimeline.ts` 回存到对应 episode。

## 导出

```powershell
npm.cmd run render
```

该命令会生成：

- 最终视频
- 1080 x 1920 的抖音封面
- caption
- publish notes

## 本地规则入口

- 词根/单词视频 skill：
  [douyin-remotion-video](F:/抖音英语卡片视频/remotion-template/skills/douyin-remotion-video/SKILL.md)
- 句型视频 skill：
  [douyin-remotion-sentence-video](F:/抖音英语卡片视频/remotion-template/skills/douyin-remotion-sentence-video/SKILL.md)
