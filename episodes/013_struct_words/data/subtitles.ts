export type Subtitle = {
  start: number;
  end: number;
  text: string;
};

export const subtitles: Subtitle[] = [
  {start: 0, end: 0.8, text: 'structure 不只是“结构”'},
  {start: 0.8, end: 1.6, text: 'structure / construct / instruct / obstruct / reconstruct'},
  {start: 1.6, end: 2.5, text: '它们都藏着 build'},
  {start: 2.5, end: 4, text: 'struct = build / 建造'},
  {start: 4, end: 5.4, text: 'structure = 搭起来的样子 → 结构'},
  {start: 5.4, end: 6.8, text: 'construct = 一起搭 → 建造'},
  {start: 6.8, end: 8.2, text: 'instruct = 把步骤搭进去 → 指导'},
  {start: 8.2, end: 9.6, text: 'obstruct = 挡住搭建 → 阻碍'},
  {start: 9.6, end: 11, text: 'destruct = 拆掉结构 → 破坏'},
  {start: 11, end: 12.4, text: 'reconstruct = 再建造 → 重建'},
  {start: 12.4, end: 13.8, text: 'structural = 和结构有关 → 结构性的'},
  {start: 13.8, end: 15, text: 'instruction = 搭好的步骤 → 指令 / 说明'},
  {start: 15, end: 19, text: 'construct / instruct / obstruct / reconstruct，都围着 build 转'},
  {start: 19, end: 22, text: 'struct = build：建造，搭起来'},
  {start: 22, end: 24, text: '看到 struct，先想：建什么？挡什么？'},
];
