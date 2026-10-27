export type Subtitle = {
  start: number;
  end: number;
  text: string;
};

export const subtitles: Subtitle[] = [
  {start: 0, end: 0.8, text: 'prediction 不只是预测'},
  {start: 0.8, end: 1.6, text: 'predict / contradict / verdict / dictate / dictionary'},
  {start: 1.6, end: 2.5, text: '它们都和“说”有关'},
  {start: 2.5, end: 4, text: 'dict = say / 说'},
  {start: 4, end: 5.4, text: 'predict = 提前说 → 预测'},
  {start: 5.4, end: 6.8, text: 'contradict = 反着说 → 反驳'},
  {start: 6.8, end: 8.2, text: 'verdict = 正式说出的判断 → 裁决'},
  {start: 8.2, end: 9.6, text: 'dictate = 说给别人听 → 口述 / 命令'},
  {start: 9.6, end: 11, text: 'dictionary = 记录词语说法 → 词典'},
  {start: 11, end: 12.4, text: 'diction = 说话用词 → 措辞'},
  {start: 12.4, end: 13.8, text: 'dictation = 说出来让人写 → 听写'},
  {start: 13.8, end: 15, text: 'indict = 正式指控 → 起诉'},
  {start: 15, end: 19, text: 'predict / contradict / verdict / dictate，都围着 say 转'},
  {start: 19, end: 22, text: 'dict = say：说'},
  {start: 22, end: 24, text: '看到 dict，先想：谁在说'},
];
