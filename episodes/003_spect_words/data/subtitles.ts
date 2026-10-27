export type Subtitle = {
  start: number;
  end: number;
  text: string;
};

export const subtitles: Subtitle[] = [
  {start: 0, end: 0.8, text: '你真的会背 spect 吗？'},
  {start: 0.8, end: 1.6, text: 'inspect / respect / suspect / expect / prospect'},
  {start: 1.6, end: 2.5, text: '它们其实都在“看”'},
  {start: 2.5, end: 4, text: 'spect = look / 看'},
  {start: 4, end: 5.4, text: 'inspect = 往里面看 → 检查'},
  {start: 5.4, end: 6.8, text: 'respect = 认真看 → 尊重'},
  {start: 6.8, end: 8.2, text: 'suspect = 偷偷看 → 怀疑'},
  {start: 8.2, end: 9.6, text: 'expect = 向外看 → 期待'},
  {start: 9.6, end: 11, text: 'prospect = 向前看 → 前景'},
  {start: 11, end: 12.4, text: 'spectator = 看的人 → 观众'},
  {start: 12.4, end: 13.8, text: 'spectacle = 值得看的场面 → 奇观'},
  {start: 13.8, end: 15, text: 'retrospect = 往回看 → 回顾'},
  {start: 15, end: 19, text: '往里看 / 认真看 / 偷偷看 / 向外看 / 向前看'},
  {start: 19, end: 22, text: 'spect = look：看'},
  {start: 22, end: 24, text: '看到 spect，先想：往哪里看'},
];
