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
    end: 4.128,
    text: `interrupt 不只是“打断”`,
    audio: `/audio/segments/001.mp3`,
  },
  {
    id: `flash-words`,
    start: 4.128,
    end: 8.28,
    text: `rupture / erupt / interrupt / disrupt / corrupt`,
    audio: `/audio/segments/002.mp3`,
  },
  {
    id: `same-root`,
    start: 8.28,
    end: 13.248,
    text: `它们都藏着 break`,
    audio: `/audio/segments/003.mp3`,
  },
  {
    id: `root-ject`,
    start: 13.248,
    end: 17.16,
    text: `rupt = break / 破裂，打断`,
    audio: `/audio/segments/004.mp3`,
  },
  {
    id: `word-reject`,
    start: 17.16,
    end: 20.592,
    text: `rupture = 裂开 → 破裂`,
    audio: `/audio/segments/005.mp3`,
  },
  {
    id: `word-object`,
    start: 20.592,
    end: 27.216,
    text: `erupt = 向外破裂 → 爆发`,
    audio: `/audio/segments/006.mp3`,
  },
  {
    id: `word-subject`,
    start: 27.216,
    end: 33.936,
    text: `interrupt = 中间断开 → 打断`,
    audio: `/audio/segments/007.mp3`,
  },
  {
    id: `word-project`,
    start: 33.936,
    end: 39.48,
    text: `disrupt = 打断秩序 → 扰乱`,
    audio: `/audio/segments/008.mp3`,
  },
  {
    id: `word-inject`,
    start: 39.48,
    end: 46.272,
    text: `corrupt = 被破坏变坏 → 腐败`,
    audio: `/audio/segments/009.mp3`,
  },
  {
    id: `word-eject`,
    start: 46.272,
    end: 52.392,
    text: `abrupt = 突然断开 → 唐突的`,
    audio: `/audio/segments/010.mp3`,
  },
  {
    id: `word-abject`,
    start: 52.392,
    end: 55.968,
    text: `bankrupt = 财务断裂 → 破产`,
    audio: `/audio/segments/011.mp3`,
  },
  {
    id: `word-deject`,
    start: 55.968,
    end: 59.784,
    text: `corruption = 坏掉的状态 → 腐败`,
    audio: `/audio/segments/012.mp3`,
  },
  {
    id: `grid-connect`,
    start: 59.784,
    end: 67.488,
    text: `rupture / erupt / interrupt / disrupt，都围着 break 转`,
    audio: `/audio/segments/013.mp3`,
  },
  {
    id: `summary`,
    start: 67.488,
    end: 71.304,
    text: `rupt = break：破裂，打断`,
    audio: `/audio/segments/014.mp3`,
  },
  {
    id: `outro`,
    start: 71.304,
    end: 75.168,
    text: `看到 rupt，先想：哪里断了？`,
    audio: `/audio/segments/015.mp3`,
  },
];
