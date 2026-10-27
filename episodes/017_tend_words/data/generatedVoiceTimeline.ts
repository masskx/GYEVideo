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
    end: 3.288,
    text: `给我 3 秒，看懂 tend / tens`,
    audio: `/audio/segments/001.mp3`,
  },
  {
    id: `flash-words`,
    start: 3.288,
    end: 7.44,
    text: `extend / intend / attend / pretend / tension`,
    audio: `/audio/segments/002.mp3`,
  },
  {
    id: `same-root`,
    start: 7.44,
    end: 13.008,
    text: `它们都在“拉伸”`,
    audio: `/audio/segments/003.mp3`,
  },
  {
    id: `root-ject`,
    start: 13.008,
    end: 17.52,
    text: `tend / tens = stretch / 伸展`,
    audio: `/audio/segments/004.mp3`,
  },
  {
    id: `word-reject`,
    start: 17.52,
    end: 24.168,
    text: `extend = 向外拉伸 → 延伸`,
    audio: `/audio/segments/005.mp3`,
  },
  {
    id: `word-object`,
    start: 24.168,
    end: 31.224,
    text: `intend = 心思伸向目标 → 打算`,
    audio: `/audio/segments/006.mp3`,
  },
  {
    id: `word-subject`,
    start: 31.224,
    end: 38.568,
    text: `attend = 伸向那里 → 注意 / 出席`,
    audio: `/audio/segments/007.mp3`,
  },
  {
    id: `word-project`,
    start: 38.568,
    end: 44.304,
    text: `tend = 朝某方向伸 → 倾向于`,
    audio: `/audio/segments/008.mp3`,
  },
  {
    id: `word-inject`,
    start: 44.304,
    end: 51.024,
    text: `pretend = 把样子伸到前面 → 假装`,
    audio: `/audio/segments/009.mp3`,
  },
  {
    id: `word-eject`,
    start: 51.024,
    end: 56.592,
    text: `tension = 被拉紧 → 张力 / 紧张`,
    audio: `/audio/segments/010.mp3`,
  },
  {
    id: `word-abject`,
    start: 56.592,
    end: 62.232,
    text: `intense = 绷得很紧 → 强烈`,
    audio: `/audio/segments/011.mp3`,
  },
  {
    id: `word-deject`,
    start: 62.232,
    end: 68.592,
    text: `extensive = 伸展很开 → 广泛`,
    audio: `/audio/segments/012.mp3`,
  },
  {
    id: `grid-connect`,
    start: 68.592,
    end: 76.8,
    text: `extend / intend / tension，都围着 stretch 转`,
    audio: `/audio/segments/013.mp3`,
  },
  {
    id: `summary`,
    start: 76.8,
    end: 81.312,
    text: `tend / tens = stretch：伸展，延伸`,
    audio: `/audio/segments/014.mp3`,
  },
  {
    id: `outro`,
    start: 81.312,
    end: 85.56,
    text: `看到 tend / tens，先想：往哪儿伸？`,
    audio: `/audio/segments/015.mp3`,
  },
];
