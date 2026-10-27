export type SubtitleLine = {
  start: number;
  end: number;
  text: string;
};

export const subtitles: SubtitleLine[] = [
  {start: 0, end: 2.5, text: '给我 3 秒，看懂 tend / tens'},
  {start: 2.5, end: 4, text: 'tend / tens = stretch / 伸展'},
  {start: 4, end: 7, text: 'extend / intend / attend / pretend / tension'},
  {start: 7, end: 9, text: '它们都在“拉伸”'},
  {start: 9, end: 11, text: 'extend = 向外拉伸 → 延伸'},
  {start: 11, end: 13, text: 'intend = 心思伸向目标 → 打算'},
  {start: 13, end: 15, text: 'attend = 伸向那里 → 注意 / 出席'},
  {start: 15, end: 17, text: 'tension = 被拉紧 → 张力 / 紧张'},
  {start: 17, end: 20, text: 'intense = 绷得很紧 → 强烈'},
  {start: 20, end: 23, text: 'tend / tens = stretch：伸展，延伸'},
  {start: 23, end: 25, text: '看到 tend / tens，先想：往哪儿伸？'},
];
