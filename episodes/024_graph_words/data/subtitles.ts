export type SubtitleLine = {
  start: number;
  end: number;
  text: string;
};

export const subtitles: SubtitleLine[] = [
  {start: 0, end: 2.5, text: 'autograph 不只是“签名”'},
  {start: 2.5, end: 4, text: 'graph = write / record / 写，记录'},
  {start: 4, end: 7, text: 'autograph / photograph / paragraph / telegraph / biography'},
  {start: 7, end: 9, text: '它们都围着“写”和“记录”'},
  {start: 9, end: 11, text: 'autograph = 亲手写下 → 签名'},
  {start: 11, end: 13, text: 'photograph = 把光记下来 → 照片 / 拍摄'},
  {start: 13, end: 15, text: 'paragraph = 写成一段 → 段落'},
  {start: 15, end: 17, text: 'telegraph = 远距离写消息 → 电报'},
  {start: 17, end: 19, text: 'biography = 把一生记下来 → 传记'},
  {start: 19, end: 22, text: 'graph = write / record: 写，记录'},
  {start: 22, end: 24, text: '看到 graph，先想：写下了什么？'},
];
