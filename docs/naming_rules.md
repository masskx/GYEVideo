# 命名规则

## Episode 文件夹

使用：

```text
编号_主题_平台_版本
```

示例：

```text
001_ject_words_douyin_v1
002_port_words_douyin_v1
003_spect_words_douyin_v1
004_mit_miss_words_douyin_v1
```

规则：

- 编号三位数。
- 英文小写。
- 单词之间用下划线。
- 平台写清楚，如 `douyin`。
- 版本写 `v1`, `v2`。

## 导出文件

使用：

```text
编号_主题_类型_分辨率.扩展名
```

示例：

```text
001_ject_words_final_960x720.mp4
001_ject_words_cover.png
001_ject_words_caption.md
001_ject_words_publish_notes.md
```

说明：

- `cover.png` 默认是抖音封面尺寸 `1080 x 1920`
- `final_960x720.mp4` 维持当前视频导出命名

如果后续改成竖屏：

```text
001_ject_words_final_1080x1440.mp4
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
