export type SubtitleLine = {
  start: number;
  end: number;
  text: string;
};

export const subtitles: SubtitleLine[] = [
  {start: 0, end: 2.5, text: '看到 tain 别只会想 contain'},
  {start: 2.5, end: 4, text: 'contain / maintain / obtain / retain / sustain'},
  {start: 4, end: 6, text: 'tain / ten = hold / 握住'},
  {start: 6, end: 8, text: 'contain = 握在一起 -> 包含'},
  {start: 8, end: 10, text: 'maintain = 用手握住 -> 维持'},
  {start: 10, end: 12, text: 'obtain = 握住拿到 -> 获得'},
  {start: 12, end: 14, text: 'retain = 往回握住 -> 保留'},
  {start: 14, end: 16, text: 'sustain = 从下托住 -> 支撑'},
  {start: 16, end: 18, text: 'entertain = 握住客人 -> 娱乐 / 招待'},
  {start: 18, end: 20, text: 'detain = 握住扣下 -> 拘留'},
  {start: 20, end: 22, text: 'content = 握在一起 / 内心被握住 -> 内容 / 满足'},
  {start: 22, end: 25, text: 'contain / maintain / obtain，都围着 hold 转'},
  {start: 25, end: 27, text: 'tain / ten = hold / 握住'},
  {start: 27, end: 30, text: '看到 tain / ten，先想：握住了什么？'},
];
