export type SubtitleLine = {
  start: number;
  end: number;
  text: string;
};

export const subtitles: SubtitleLine[] = [
  {start: 0, end: 2.5, text: '看到 nat 别只会想 nature'},
  {start: 2.5, end: 4, text: 'native / nation / nature / innate / renaissance'},
  {start: 4, end: 6, text: 'nat = birth / 出生'},
  {start: 6, end: 8, text: 'native = 出生在哪 -> 本地的'},
  {start: 8, end: 10, text: 'nation = 出生在同一地的人 -> 国家'},
  {start: 10, end: 12, text: 'nature = 天生的状态 -> 自然'},
  {start: 12, end: 14, text: 'natural = 天的 -> 自然的 / 天生的'},
  {start: 14, end: 16, text: 'innate = 出生就带着 -> 天生的'},
  {start: 16, end: 18, text: 'naive = 像刚出生一样 -> 天真的'},
  {start: 18, end: 20, text: 'renaissance = 再次出生 -> 复兴'},
  {start: 20, end: 22, text: 'pregnant = 出生之前 -> 怀孕的'},
  {start: 22, end: 25, text: 'native / nation / innate，都围着 birth 转'},
  {start: 25, end: 27, text: 'nat = birth / 出生'},
  {start: 27, end: 30, text: '看到 nat，先想：生在哪？天生什么？'},
];
