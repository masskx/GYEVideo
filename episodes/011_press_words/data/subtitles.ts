export type Subtitle = {
  start: number;
  end: number;
  text: string;
};

export const subtitles: Subtitle[] = [
  {start: 0, end: 0.8, text: 'express 不只是“表达”'},
  {start: 0.8, end: 1.6, text: 'press / compress / suppress / express / depress'},
  {start: 1.6, end: 2.5, text: '它们都藏着 press'},
  {start: 2.5, end: 4, text: 'press = 压 / 按'},
  {start: 4, end: 5.4, text: 'press = 压 / 按'},
  {start: 5.4, end: 6.8, text: 'compress = 一起压 → 压缩'},
  {start: 6.8, end: 8.2, text: 'suppress = 往下压 → 压制'},
  {start: 8.2, end: 9.6, text: 'express = 向外压出 → 表达'},
  {start: 9.6, end: 11, text: 'depress = 往下压 → 沮丧'},
  {start: 11, end: 12.4, text: 'impress = 往里压 → 留下印象'},
  {start: 12.4, end: 13.8, text: 'pressure = 被压的力量 → 压力'},
  {start: 13.8, end: 15, text: 'impression = 压出的印记 → 印象'},
  {start: 15, end: 19, text: 'compress / suppress / express / impress，都围着 press 转'},
  {start: 19, end: 22, text: 'press = 压 / 按'},
  {start: 22, end: 24, text: '看到 press，先想：往哪儿压？'},
];
