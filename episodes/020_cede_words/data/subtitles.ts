export type SubtitleLine = {
  start: number;
  end: number;
  text: string;
};

export const subtitles: SubtitleLine[] = [
  {start: 0, end: 2.5, text: 'proceed 不只是“继续”'},
  {start: 2.5, end: 4, text: 'cede / cess = go / 前进'},
  {start: 4, end: 7, text: 'proceed / precede / recede / concede / exceed'},
  {start: 7, end: 9, text: '它们都在“前进”'},
  {start: 9, end: 11, text: 'proceed = 向前走 → 继续进行'},
  {start: 11, end: 13, text: 'precede = 走在前面 → 先于'},
  {start: 13, end: 15, text: 'recede = 往回走 → 后退 / 退去'},
  {start: 15, end: 17, text: 'concede = 让出一步 → 承认 / 让步'},
  {start: 17, end: 19, text: 'exceed = 走出去更多 → 超过'},
  {start: 19, end: 22, text: 'cede / cess = go：走，前进'},
  {start: 22, end: 24, text: '看到 cede / cess，先想：往哪儿走？'},
];
