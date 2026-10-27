export type GeneratedVoiceTimelineItem = {
  id: string;
  start: number;
  end: number;
  text: string;
  audio: string;
};

export const generatedVoiceTimeline: GeneratedVoiceTimelineItem[] = [
  {
    id: `hook`,
    start: 0,
    end: 1.8,
    text: `别再硬背单词了！`,
    audio: `/audio/segments/001.mp3`,
  },
  {
    id: `flash-words`,
    start: 1.8,
    end: 6.048,
    text: `reject / project / inject / object / subject`,
    audio: `/audio/segments/002.mp3`,
  },
  {
    id: `same-root`,
    start: 6.048,
    end: 8.328,
    text: `它们都藏着同一个词根`,
    audio: `/audio/segments/003.mp3`,
  },
  {
    id: `root-ject`,
    start: 8.328,
    end: 11.112,
    text: `ject = throw / 投出去`,
    audio: `/audio/segments/004.mp3`,
  },
  {
    id: `word-reject`,
    start: 11.112,
    end: 14.712,
    text: `reject：投回去，就是拒绝、排斥`,
    audio: `/audio/segments/005.mp3`,
  },
  {
    id: `word-object`,
    start: 14.712,
    end: 18.816,
    text: `object：眼前的东西，物体、目标`,
    audio: `/audio/segments/006.mp3`,
  },
  {
    id: `word-subject`,
    start: 18.816,
    end: 22.968,
    text: `subject：下面讨论的，主题、学科`,
    audio: `/audio/segments/007.mp3`,
  },
  {
    id: `word-project`,
    start: 22.968,
    end: 26.616,
    text: `project：向前投，投影、预测`,
    audio: `/audio/segments/008.mp3`,
  },
  {
    id: `word-inject`,
    start: 26.616,
    end: 29.904,
    text: `inject：往里面投，注射、注入`,
    audio: `/audio/segments/009.mp3`,
  },
  {
    id: `word-eject`,
    start: 29.904,
    end: 33.432,
    text: `eject：向外投出，弹出、驱逐`,
    audio: `/audio/segments/010.mp3`,
  },
  {
    id: `word-abject`,
    start: 33.432,
    end: 37.344,
    text: `abject：抛到低处，卑劣、可怜`,
    audio: `/audio/segments/011.mp3`,
  },
  {
    id: `word-deject`,
    start: 37.344,
    end: 40.68,
    text: `deject：情绪往下，使沮丧`,
    audio: `/audio/segments/012.mp3`,
  },
  {
    id: `grid-connect`,
    start: 40.68,
    end: 44.016,
    text: `八个单词，全都连回 ject`,
    audio: `/audio/segments/013.mp3`,
  },
  {
    id: `summary`,
    start: 44.016,
    end: 47.664,
    text: `ject = throw / 投出去`,
    audio: `/audio/segments/014.mp3`,
  },
  {
    id: `outro`,
    start: 47.664,
    end: 49.968,
    text: `下次遇到生词，先拆词根`,
    audio: `/audio/segments/015.mp3`,
  },
];
