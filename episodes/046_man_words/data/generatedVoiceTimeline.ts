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
    end: 3.048,
    text: `manage 你可能一直不知道它在说什么`,
    audio: `/audio/segments/001.mp3`,
  },
  {
    id: `flash-words`,
    start: 3.048,
    end: 8.064,
    text: `manage / manual / manufacture / manuscript / manipulate`,
    audio: `/audio/segments/002.mp3`,
  },
  {
    id: `same-root`,
    start: 8.064,
    end: 10.992,
    text: `这些词，其实都在讲同一只手`,
    audio: `/audio/segments/003.mp3`,
  },
  {
    id: `root-man`,
    start: 10.992,
    end: 15.048,
    text: `man / manu = hand / 手`,
    audio: `/audio/segments/004.mp3`,
  },
  {
    id: `word-manual`,
    start: 15.048,
    end: 19.056,
    text: `manual = 用手的 -> 手工的 / 手册`,
    audio: `/audio/segments/005.mp3`,
  },
  {
    id: `word-manufacture`,
    start: 19.056,
    end: 23.64,
    text: `manufacture = 手工制造 -> 生产`,
    audio: `/audio/segments/006.mp3`,
  },
  {
    id: `word-manage`,
    start: 23.64,
    end: 26.76,
    text: `manage = 用手管 -> 管理`,
    audio: `/audio/segments/007.mp3`,
  },
  {
    id: `word-manuscript`,
    start: 26.76,
    end: 31.68,
    text: `manuscript = 手写稿 -> 手稿 / 原稿`,
    audio: `/audio/segments/008.mp3`,
  },
  {
    id: `word-manipulate`,
    start: 31.68,
    end: 36.12,
    text: `manipulate = 用手操作 -> 操纵`,
    audio: `/audio/segments/009.mp3`,
  },
  {
    id: `word-manner`,
    start: 36.12,
    end: 39.984,
    text: `manner = 手的样子 -> 方式 / 举止`,
    audio: `/audio/segments/010.mp3`,
  },
  {
    id: `word-mandate`,
    start: 39.984,
    end: 44.064,
    text: `mandate = 手给的权 -> 授权 / 命令`,
    audio: `/audio/segments/011.mp3`,
  },
  {
    id: `grid-connect`,
    start: 44.064,
    end: 50.016,
    text: `一只手，串起一排词`,
    audio: `/audio/segments/012.mp3`,
  },
  {
    id: `summary`,
    start: 50.016,
    end: 53.784,
    text: `man / manu = hand / 手`,
    audio: `/audio/segments/013.mp3`,
  },
  {
    id: `outro`,
    start: 53.784,
    end: 56.856,
    text: `秒答：manage 为什么是管理？`,
    audio: `/audio/segments/014.mp3`,
  },
];
