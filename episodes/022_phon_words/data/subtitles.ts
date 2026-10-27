export type SubtitleLine = {
  start: number;
  end: number;
  text: string;
};

export const subtitles: SubtitleLine[] = [
  {start: 0, end: 2.5, text: 'phone 不只是“手机”'},
  {start: 2.5, end: 4, text: 'phon = sound / voice / 声音'},
  {start: 4, end: 7, text: 'phone / microphone / phonics / symphony / cacophony'},
  {start: 7, end: 9, text: '它们都围着“声音”'},
  {start: 9, end: 11, text: 'phone = 传声音 → 电话'},
  {start: 11, end: 13, text: 'microphone = 放大小声音 → 麦克风'},
  {start: 13, end: 15, text: 'phonics = 声音规则 → 自然拼读'},
  {start: 15, end: 17, text: 'symphony = 声音一起响 → 交响乐'},
  {start: 17, end: 19, text: 'cacophony = 坏声音挤一团 → 刺耳噪音'},
  {start: 19, end: 22, text: 'phon = sound / voice: 声音'},
  {start: 22, end: 24, text: '看到 phon，先想：这是什么声音？'},
];
