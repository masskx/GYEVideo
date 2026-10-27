export type Subtitle = {
  start: number;
  end: number;
  text: string;
};

export const subtitles: Subtitle[] = [
  {start: 0, end: 0.8, text: '别再硬背 ject 单词了'},
  {start: 0.8, end: 1.6, text: 'reject / project / inject / object / subject'},
  {start: 1.6, end: 2.5, text: '它们都藏着 throw'},
  {start: 2.5, end: 4, text: 'ject = throw / 扔，投'},
  {start: 4, end: 5.4, text: 'reject = 扔回去 → 拒绝'},
  {start: 5.4, end: 6.8, text: 'object = 扔在面前 → 物体'},
  {start: 6.8, end: 8.2, text: 'subject = 放到下面讨论 → 主题 / 科目'},
  {start: 8.2, end: 9.6, text: 'project = 向前投 → 投射 / 项目'},
  {start: 9.6, end: 11, text: 'inject = 投进去 → 注入'},
  {start: 11, end: 12.4, text: 'eject = 扔出去 → 弹出'},
  {start: 12.4, end: 13.8, text: 'deject = 往下扔 → 使沮丧'},
  {start: 13.8, end: 15, text: 'trajectory = 投出去的路线 → 轨迹'},
  {start: 15, end: 19, text: 'reject / project / inject / eject，都围着 throw 转'},
  {start: 19, end: 22, text: 'ject = throw：扔，投'},
  {start: 22, end: 24, text: '看到 ject，先想：往哪儿扔？'},
];
