export type SubtitleLine = {
  start: number;
  end: number;
  text: string;
};

export const subtitles: SubtitleLine[] = [
  {start: 0, end: 2.5, text: 'logic 不只是“逻辑”'},
  {start: 2.5, end: 4, text: 'log = word / speech / reason'},
  {start: 4, end: 7, text: 'logic / dialogue / monologue / analogy / apology'},
  {start: 7, end: 9, text: '它们都围着“说”和“理由”'},
  {start: 9, end: 11, text: 'logic = 把理由讲通 → 逻辑'},
  {start: 11, end: 13, text: 'dialogue = 两边对着说 → 对话'},
  {start: 13, end: 15, text: 'monologue = 一个人说 → 独白'},
  {start: 15, end: 17, text: 'analogy = 借另一个例子说 → 类比'},
  {start: 17, end: 19, text: 'apology = 把错说出来 → 道歉'},
  {start: 19, end: 22, text: 'log = word / speech / reason: 词，说话，逻辑'},
  {start: 22, end: 24, text: '看到 log，先想：是在说，还是在讲理由？'},
];
