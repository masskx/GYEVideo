export type SubtitleLine = {
  start: number;
  end: number;
  text: string;
};

export const subtitles: SubtitleLine[] = [
  {start: 0, end: 2.5, text: '看到 cred 别只会想 credit'},
  {start: 2.5, end: 4, text: 'credit / credible / incredible / credentials / credulous'},
  {start: 4, end: 6, text: 'cred = believe / 相信'},
  {start: 6, end: 8, text: 'credit = 被信任 -> 信用'},
  {start: 8, end: 10, text: 'credible = 可以被相信 -> 可信的'},
  {start: 10, end: 12, text: 'incredible = 难以置信 -> 惊人的'},
  {start: 12, end: 14, text: 'credibility = 可信程度 -> 可信度'},
  {start: 14, end: 16, text: 'credentials = 证明可信的东西 -> 凭证 / 资历'},
  {start: 16, end: 18, text: 'credulous = 容易相信 -> 轻信的'},
  {start: 18, end: 20, text: 'incredulous = 不轻信 -> 怀疑的'},
  {start: 20, end: 22, text: 'creed = 深信不疑 -> 信条 / 信念'},
  {start: 22, end: 25, text: 'credit / credible / credentials，都围着 believe 转'},
  {start: 25, end: 27, text: 'cred = believe / 相信'},
  {start: 27, end: 30, text: '看到 cred，先想：信什么？凭什么信？'},
];
