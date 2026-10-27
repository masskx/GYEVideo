export type SubtitleLine = {
  start: number;
  end: number;
  text: string;
};

export const subtitles: SubtitleLine[] = [
  {start: 0, end: 2.5, text: '看到 psych 别只会想 psychology'},
  {start: 2.5, end: 4, text: 'psych = mind / soul'},
  {start: 4, end: 7, text: 'psychology / psyche / psychic / psychosis / psychopath'},
  {start: 7, end: 9, text: '它们都连着 mind / soul'},
  {start: 9, end: 11, text: 'psychology = 研究心理 -> 心理学'},
  {start: 11, end: 13, text: 'psyche = 心灵本身'},
  {start: 13, end: 15, text: 'psychic = 精神的 / 灵媒的'},
  {start: 15, end: 17, text: 'psychosis = 精神失常状态'},
  {start: 17, end: 19, text: 'psychopath = 心理结构异常者'},
  {start: 19, end: 22, text: 'psych = mind / soul'},
  {start: 22, end: 24, text: '看到 psych，先想：它在讲哪种心理？'},
];
