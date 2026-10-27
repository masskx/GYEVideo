export type SubtitleLine = {
  start: number;
  end: number;
  text: string;
};

export const subtitles: SubtitleLine[] = [
  {start: 0, end: 2.5, text: '看到 auto 别只会想 automatic'},
  {start: 2.5, end: 4, text: 'auto = self / 自己，自动'},
  {start: 4, end: 7, text: 'automatic / automate / autonomous / autobiography / autopilot'},
  {start: 7, end: 9, text: '它们都围着“自己来”'},
  {start: 9, end: 11, text: 'automatic = 自己动起来 -> 自动的'},
  {start: 11, end: 13, text: 'automate = 让流程自己跑 -> 自动化'},
  {start: 13, end: 15, text: 'autonomous = 自己做决定 -> 自主的'},
  {start: 15, end: 17, text: 'autobiography = 自己写自己 -> 自传'},
  {start: 17, end: 19, text: 'autopilot = 自己稳方向 -> 自动驾驶'},
  {start: 19, end: 22, text: 'auto = self / 自己，自动'},
  {start: 22, end: 24, text: '看到 auto，先想：谁在自己完成？'},
];
