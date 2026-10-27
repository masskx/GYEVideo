export type SubtitleLine = {
  start: number;
  end: number;
  text: string;
};

export const subtitles: SubtitleLine[] = [
  {start: 0, end: 2.5, text: '看到 scope 别只会想望远镜'},
  {start: 2.5, end: 4, text: 'telescope / microscope / periscope / stethoscope / kaleidoscope'},
  {start: 4, end: 6, text: 'scope = look / 看'},
  {start: 6, end: 8, text: 'telescope = 往远处看 -> 望远镜'},
  {start: 8, end: 10, text: 'microscope = 看微小 -> 显微镜'},
  {start: 10, end: 12, text: 'periscope = 往周围看 -> 潜望镜'},
  {start: 12, end: 14, text: 'stethoscope = 看胸腔 -> 听诊器'},
  {start: 14, end: 16, text: 'kaleidoscope = 看美形 -> 万花筒'},
  {start: 16, end: 18, text: 'horoscope = 看时辰 -> 星座运势'},
  {start: 18, end: 20, text: 'scope = 观察范围 -> 范围 / 眼界'},
  {start: 20, end: 22, text: 'macroscopic = 大尺度看 -> 宏观的'},
  {start: 22, end: 25, text: 'telescope / microscope / periscope，都围着 look 转'},
  {start: 25, end: 27, text: 'scope = look / 看'},
  {start: 27, end: 30, text: '看到 scope，先想：从哪个角度看？'},
];
