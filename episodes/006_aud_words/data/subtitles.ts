export type Subtitle = {
  start: number;
  end: number;
  text: string;
};

export const subtitles: Subtitle[] = [
  {start: 0, end: 0.8, text: 'audio 不只是音频'},
  {start: 0.8, end: 1.6, text: 'audio / audience / audit / audible / audition'},
  {start: 1.6, end: 2.5, text: '它们都和“听”有关'},
  {start: 2.5, end: 4, text: 'aud = hear / 听'},
  {start: 4, end: 5.4, text: 'audio = 和听有关 → 音频'},
  {start: 5.4, end: 6.8, text: 'audience = 听的人 → 观众'},
  {start: 6.8, end: 8.2, text: 'audit = 仔细听查 → 审计'},
  {start: 8.2, end: 9.6, text: 'audible = 能被听见 → 听得见的'},
  {start: 9.6, end: 11, text: 'audition = 试听表现 → 试镜'},
  {start: 11, end: 12.4, text: 'auditorium = 听众聚集地 → 礼堂'},
  {start: 12.4, end: 13.8, text: 'inaudible = 听不见的'},
  {start: 13.8, end: 15, text: 'audiobook = 用来听的书 → 有声书'},
  {start: 15, end: 19, text: 'audio / audience / audit / audible / audition，都围着 hear 转'},
  {start: 19, end: 22, text: 'aud = hear：听'},
  {start: 22, end: 24, text: '看到 aud，先想：谁在听'},
];
