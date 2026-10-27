export type SubtitleLine = {
  start: number;
  end: number;
  text: string;
};

export const subtitles: SubtitleLine[] = [
  {start: 0, end: 2.5, text: 'vocabulary 不是死背'},
  {start: 2.5, end: 4, text: 'voc / voke = call / 呼叫'},
  {start: 4, end: 7, text: 'vocal / vocabulary / invoke / provoke / revoke'},
  {start: 7, end: 9, text: '它们都在“呼叫”'},
  {start: 9, end: 11, text: 'vocal = 声音被叫出 → 声音的'},
  {start: 11, end: 13, text: 'evoke = 把感觉叫出 → 唤起'},
  {start: 13, end: 15, text: 'advocate = 朝观点发声 → 提倡'},
  {start: 15, end: 17, text: 'invoke = 向内呼叫 → 唤起 / 援引'},
  {start: 17, end: 20, text: 'revoke = 叫回来 → 撤销'},
  {start: 20, end: 23, text: 'voc / voke = call：呼叫，召唤'},
  {start: 23, end: 25, text: '看到 voc / voke，先想：谁在叫？'},
];
