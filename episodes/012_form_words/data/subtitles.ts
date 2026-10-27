export type Subtitle = {
  start: number;
  end: number;
  text: string;
};

export const subtitles: Subtitle[] = [
  {start: 0, end: 0.8, text: 'transform 不是乱变'},
  {start: 0.8, end: 1.6, text: 'form / uniform / conform / reform / transform'},
  {start: 1.6, end: 2.5, text: '它们都藏着 shape'},
  {start: 2.5, end: 4, text: 'form = shape / 形状'},
  {start: 4, end: 5.4, text: 'form = 形式 / 形状 / 形成'},
  {start: 5.4, end: 6.8, text: 'uniform = 一个形状 → 制服 / 统一'},
  {start: 6.8, end: 8.2, text: 'conform = 同一个形状 → 符合'},
  {start: 8.2, end: 9.6, text: 'reform = 重新形成 → 改革'},
  {start: 9.6, end: 11, text: 'transform = 换一个形状 → 转变'},
  {start: 11, end: 12.4, text: 'perform = 做成结果 → 执行 / 表演'},
  {start: 12.4, end: 13.8, text: 'inform = 信息成形进入脑子 → 通知'},
  {start: 13.8, end: 15, text: 'formula = 固定形式 → 公式 / 配方'},
  {start: 15, end: 19, text: 'uniform / conform / reform / transform，都围着 shape 转'},
  {start: 19, end: 22, text: 'form = shape：形状，形成'},
  {start: 22, end: 24, text: '看到 form，先想：变成什么形状？'},
];
