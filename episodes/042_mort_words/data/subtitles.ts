export type SubtitleLine = {
  start: number;
  end: number;
  text: string;
};

export const subtitles: SubtitleLine[] = [
  {start: 0, end: 2.5, text: '看到 mort 别只会想 mortal'},
  {start: 2.5, end: 4, text: 'mortal / immortal / mortgage / mortician / mortify'},
  {start: 4, end: 6, text: 'mort = death / 死亡'},
  {start: 6, end: 8, text: 'mortal = 会死的 -> 凡人'},
  {start: 8, end: 10, text: 'immortal = 不死的 -> 不朽的'},
  {start: 10, end: 12, text: 'mortgage = 死亡抵押 -> 抵押贷款'},
  {start: 12, end: 14, text: 'mortician = 处理死亡的人 -> 殡仪师'},
  {start: 14, end: 16, text: 'mortify = 羞耻到想死 -> 使难堪'},
  {start: 16, end: 18, text: 'postmortem = 死后 -> 尸检 / 事后分析'},
  {start: 18, end: 20, text: 'morgue = 停尸处 -> 太平间'},
  {start: 20, end: 22, text: 'mortuary = 与死亡相关的地方 -> 殡仪馆'},
  {start: 22, end: 25, text: 'mortal / immortal / mortgage，都围着 death 转'},
  {start: 25, end: 27, text: 'mort = death / 死亡'},
  {start: 27, end: 30, text: '看到 mort，先想：死什么？为什么死？'},
];
