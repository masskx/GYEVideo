export type SubtitleLine = {
  start: number;
  end: number;
  text: string;
};

export const subtitles: SubtitleLine[] = [
  {start: 0, end: 2.5, text: '看到 meter 别只会想到米'},
  {start: 2.5, end: 4, text: 'diameter / perimeter / symmetry / geometry / barometer'},
  {start: 4, end: 6, text: 'meter / metr = measure / 测量'},
  {start: 6, end: 8, text: 'diameter = 穿过测 -> 直径'},
  {start: 8, end: 10, text: 'perimeter = 绕一圈测 -> 周长'},
  {start: 10, end: 12, text: 'symmetry = 测出来一样 -> 对称'},
  {start: 12, end: 14, text: 'geometry = 大地测量 -> 几何'},
  {start: 14, end: 16, text: 'barometer = 测压力 -> 气压计'},
  {start: 16, end: 18, text: 'speedometer = 测速度 -> 速度计'},
  {start: 18, end: 20, text: 'parameter = 在旁边量 -> 参数'},
  {start: 20, end: 22, text: 'metric = 度量体系 -> 公制 / 标准'},
  {start: 22, end: 25, text: 'diameter / perimeter / symmetry，都围着 measure 转'},
  {start: 25, end: 27, text: 'meter / metr = measure / 测量'},
  {start: 27, end: 30, text: '看到 meter / metr，先想：它在量什么？'},
];
