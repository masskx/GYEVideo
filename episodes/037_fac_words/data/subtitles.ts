export type SubtitleLine = {
  start: number;
  end: number;
  text: string;
};

export const subtitles: SubtitleLine[] = [
  {start: 0, end: 2.5, text: '看到 fac 别只会想 factory'},
  {start: 2.5, end: 4, text: 'factory / manufacture / facilitate / defect / perfect'},
  {start: 4, end: 6, text: 'fac / fact / fect = make / 做'},
  {start: 6, end: 8, text: 'factory = 制造的地方 -> 工厂'},
  {start: 8, end: 10, text: 'manufacture = 手工制造 -> 生产'},
  {start: 10, end: 12, text: 'facilitate = 让事情好做 -> 促进'},
  {start: 12, end: 14, text: 'factor = 做事情的东西 -> 因素'},
  {start: 14, end: 16, text: 'defect = 做偏离了 -> 缺陷'},
  {start: 16, end: 18, text: 'perfect = 做彻底了 -> 完美的'},
  {start: 18, end: 20, text: 'affect = 去做 -> 影响'},
  {start: 20, end: 22, text: 'effect = 做出来的结果 -> 效果'},
  {start: 22, end: 25, text: 'factory / manufacture / factor，都围着 make 转'},
  {start: 25, end: 27, text: 'fac / fact / fect = make / 做'},
  {start: 27, end: 30, text: '看到 fac / fact / fect，先想：做了什么？'},
];
