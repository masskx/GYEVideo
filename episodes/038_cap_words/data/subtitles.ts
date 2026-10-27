export type SubtitleLine = {
  start: number;
  end: number;
  text: string;
};

export const subtitles: SubtitleLine[] = [
  {start: 0, end: 2.5, text: '看到 cap 别只会想帽子'},
  {start: 2.5, end: 4, text: 'capture / capable / accept / except / concept'},
  {start: 4, end: 6, text: 'cap / capt / cept = take / 拿'},
  {start: 6, end: 8, text: 'capture = 抓住 -> 抓捕 / 俘获'},
  {start: 8, end: 10, text: 'capable = 能拿住的 -> 有能力的'},
  {start: 10, end: 12, text: 'capacity = 拿住多少 -> 容量 / 能力'},
  {start: 12, end: 14, text: 'accept = 拿过来 -> 接受'},
  {start: 14, end: 16, text: 'except = 拿出去 -> 除……之外'},
  {start: 16, end: 18, text: 'concept = 抓到脑子里 -> 概念'},
  {start: 18, end: 20, text: 'intercept = 中途拿住 -> 拦截'},
  {start: 20, end: 22, text: 'perceive = 透过表面拿住 -> 感知'},
  {start: 22, end: 25, text: 'capture / accept / concept，都围着 take 转'},
  {start: 25, end: 27, text: 'cap / capt / cept = take / 拿'},
  {start: 27, end: 30, text: '看到 cap / capt / cept，先想：拿了什么？'},
];
