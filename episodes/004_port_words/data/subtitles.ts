export type Subtitle = {
  start: number;
  end: number;
  text: string;
};

export const subtitles: Subtitle[] = [
  {start: 0, end: 0.8, text: '给我 3 秒，让你记住 5 个 port 单词'},
  {start: 0.8, end: 1.6, text: 'import / export / transport / support / report'},
  {start: 1.6, end: 2.5, text: '它们都藏着同一个动作'},
  {start: 2.5, end: 4, text: 'port = carry / 拿，带，运输'},
  {start: 4, end: 5.4, text: 'import = 带进来 → 进口'},
  {start: 5.4, end: 6.8, text: 'export = 带出去 → 出口'},
  {start: 6.8, end: 8.2, text: 'transport = 运过去 → 运输'},
  {start: 8.2, end: 9.6, text: 'support = 从下面托住 → 支持'},
  {start: 9.6, end: 11, text: 'report = 把消息带回来 → 报告'},
  {start: 11, end: 12.4, text: 'portable = 能带着走 → 便携的'},
  {start: 12.4, end: 13.8, text: 'porter = 搬东西的人 → 搬运工'},
  {start: 13.8, end: 15, text: 'deport = 带离某地 → 驱逐出境'},
  {start: 15, end: 19, text: '进来 / 出去 / 运过去 / 托住 / 带回消息'},
  {start: 19, end: 22, text: 'port = carry：拿、带、运输'},
  {start: 22, end: 24, text: '看到 port，先想：把什么带到哪里'},
];
