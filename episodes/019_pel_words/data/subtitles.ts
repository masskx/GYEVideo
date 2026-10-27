export type SubtitleLine = {
  start: number;
  end: number;
  text: string;
};

export const subtitles: SubtitleLine[] = [
  {start: 0, end: 2.5, text: '别再硬背 propel'},
  {start: 2.5, end: 4, text: 'pel / pulse = drive / 推动'},
  {start: 4, end: 7, text: 'propel / compel / expel / repel / impulse'},
  {start: 7, end: 9, text: '它们都在“推”'},
  {start: 9, end: 11, text: 'propel = 向前推 → 推进'},
  {start: 11, end: 13, text: 'compel = 一起推着你 → 强迫'},
  {start: 13, end: 15, text: 'expel = 向外推 → 驱逐 / 开除'},
  {start: 15, end: 17, text: 'repel = 推回去 → 击退 / 排斥'},
  {start: 17, end: 19, text: 'impulse = 内在一推 → 冲动 / 推动力'},
  {start: 19, end: 22, text: 'pel / pulse = drive：推动，驱使'},
  {start: 22, end: 24, text: '看到 pel / pulse，先想：往哪儿推？'},
];
