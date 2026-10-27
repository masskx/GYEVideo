export type Subtitle = {
  start: number;
  end: number;
  text: string;
};

export const subtitles: Subtitle[] = [
  {start: 0, end: 0.8, text: 'script 不只是“剧本”'},
  {start: 0.8, end: 1.6, text: 'script / describe / subscribe / prescription / manuscript'},
  {start: 1.6, end: 2.5, text: '它们都和“写”有关'},
  {start: 2.5, end: 4, text: 'script / scrib = write / 写'},
  {start: 4, end: 5.4, text: 'script = 写好的文本 → 剧本 / 脚本'},
  {start: 5.4, end: 6.8, text: 'describe = 写下来说明 → 描述'},
  {start: 6.8, end: 8.2, text: 'subscribe = 在下面写名 → 订阅 / 签署'},
  {start: 8.2, end: 9.6, text: 'prescription = 提前写好的医嘱 → 处方'},
  {start: 9.6, end: 11, text: 'manuscript = 手写文本 → 手稿'},
  {start: 11, end: 12.4, text: 'inscribe = 写进去 / 刻进去 → 题写'},
  {start: 12.4, end: 13.8, text: 'transcribe = 转写下来 → 转录'},
  {start: 13.8, end: 15, text: 'scribble = 潦草地写 / 乱写'},
  {start: 15, end: 19, text: 'describe / subscribe / prescription / manuscript，都围着 write 转'},
  {start: 19, end: 22, text: 'script / scrib = write：写'},
  {start: 22, end: 24, text: '看到 script / scribe，先想：谁在写？'},
];
