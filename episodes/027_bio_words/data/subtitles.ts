export type SubtitleLine = {
  start: number;
  end: number;
  text: string;
};

export const subtitles: SubtitleLine[] = [
  {start: 0, end: 2.5, text: '看到 bio 别只会想 biology'},
  {start: 2.5, end: 4, text: 'bio = life / 生命'},
  {start: 4, end: 7, text: 'biology / biography / biodegradable / biodiversity / antibiotic'},
  {start: 7, end: 9, text: '它们都连着 life / 生命'},
  {start: 9, end: 11, text: 'biology = 研究生命 -> 生物学'},
  {start: 11, end: 13, text: 'biography = 写生命经历 -> 传记'},
  {start: 13, end: 15, text: 'biodegradable = 能被生命分解 -> 可生物降解'},
  {start: 15, end: 17, text: 'biodiversity = 很多生命并存 -> 生物多样性'},
  {start: 17, end: 19, text: 'antibiotic = 对抗微生物生命 -> 抗生素'},
  {start: 19, end: 22, text: 'bio = life: 生命'},
  {start: 22, end: 24, text: '看到 bio，先想：它和哪种生命有关？'},
];
