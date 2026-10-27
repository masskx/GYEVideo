# 命名规则

## Episode 文件夹

模板 episode 使用：

```text
编号_主题_模板简称
```

示例：

```text
episodes/060_duc_dossier
episodes/061_port_gameshow
episodes/062_vis_whiteboard
reading-episodes/001_screen_promise
reading-episodes/002_teen_sleep_news
```

规则：

- 编号三位数，单词线和阅读线各自连续编号（`npm run plan` 会给出下一个编号）。
- 英文小写，单词之间用下划线（`npm run new` 会校验）。
- 四级、六级在编号后加考试：`064_cet4_struct_gameshow`、`003_cet6_campus_book`；高考不加。
- 结尾写模板简称：dossier / gameshow / whiteboard / book / news（`npm run plan` 会给出完整建议）。单词线写词根，阅读线写话题。最早的两期阅读参考 episode 没有简称。

旧版黑黄词根视频沿用 `编号_主题_words`（如 `046_man_words`）。

## 导出文件

由 `npm run render` 自动生成，文件名以 episode id 开头：

```text
061_port_gameshow.mp4                  # 1080×1920，30 fps，-14 LUFS
061_port_gameshow_cover.png            # 1080×1920 封面
061_port_gameshow_caption.txt
061_port_gameshow_publish_notes.md
061_port_gameshow_qa.md
061_port_gameshow_contact_sheet.jpg
```

## 禁止命名

不要使用：

```text
final.mp4
new_final.mp4
final2.mp4
最终版.mp4
最终最终版.mp4
```

这些名字会毁掉批量管理。

## 源文件命名

原始材料放在 `source/`：

```text
source/word_list.md
source/root_notes.md
source/reference_screenshot.png
```

如果同类文件多个，加入编号：

```text
source/word_list_01_core.md
source/word_list_02_extended.md
```
