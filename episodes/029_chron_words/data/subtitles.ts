export type SubtitleLine = {
  start: number;
  end: number;
  text: string;
};

export const subtitles: SubtitleLine[] = [
  {start: 0, end: 2.5, text: '看到 chron 别只会想 chronic'},
  {start: 2.5, end: 4, text: 'chron = time / 时间'},
  {start: 4, end: 7, text: 'chronology / chronic / synchronize / chronological / anachronism'},
  {start: 7, end: 9, text: '它们都连着 time / 时间'},
  {start: 9, end: 11, text: 'chronology = 按时间排开 -> 时间顺序'},
  {start: 11, end: 13, text: 'chronic = 持续很久 -> 长期的'},
  {start: 13, end: 15, text: 'synchronize = 时间对齐 -> 同步'},
  {start: 15, end: 17, text: 'chronological = 按时间顺序的'},
  {start: 17, end: 19, text: 'chronicle = 按时间记录'},
  {start: 19, end: 22, text: 'chron = time / 时间'},
  {start: 22, end: 24, text: '看到 chron，先想：它和哪种时间关系有关？'},
];
