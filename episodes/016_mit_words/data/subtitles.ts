export type Subtitle = {
  start: number;
  end: number;
  text: string;
};

export const subtitles: Subtitle[] = [
  {start: 0, end: 0.8, text: 'submit 不只是“提交”'},
  {start: 0.8, end: 1.6, text: 'emit / transmit / submit / admit / dismiss'},
  {start: 1.6, end: 2.5, text: '它们都藏着 send'},
  {start: 2.5, end: 4, text: 'mit / miss = send / 发送'},
  {start: 4, end: 5.4, text: 'emit = 向外发送 → 发出'},
  {start: 5.4, end: 6.8, text: 'transmit = 跨过去发送 → 传输'},
  {start: 6.8, end: 8.2, text: 'submit = 往下发送 → 提交'},
  {start: 8.2, end: 9.6, text: 'admit = 送进去 → 准许进入 / 承认'},
  {start: 9.6, end: 11, text: 'commit = 一起送进去 → 投入 / 承诺'},
  {start: 11, end: 12.4, text: 'permit = 让它通过 → 允许'},
  {start: 12.4, end: 13.8, text: 'dismiss = 送走 → 解散 / 不予考虑'},
  {start: 13.8, end: 15, text: 'mission = 被派出去的事 → 任务'},
  {start: 15, end: 19, text: 'emit / transmit / submit / dismiss，都围着 send 转'},
  {start: 19, end: 22, text: 'mit / miss = send：发送，派出去'},
  {start: 22, end: 24, text: '看到 mit / miss，先想：送到哪儿？'},
];
