export type Subtitle = {
  start: number;
  end: number;
  text: string;
};

export const subtitles: Subtitle[] = [
  {start: 0, end: 0.8, text: 'reflect 不只是“反思”'},
  {start: 0.8, end: 1.6, text: 'flex / reflect / deflect / inflect / reflex'},
  {start: 1.6, end: 2.5, text: '它们都藏着 bend'},
  {start: 2.5, end: 4, text: 'flect / flex = bend / 弯曲'},
  {start: 4, end: 5.4, text: 'flex = 弯曲 / 伸缩'},
  {start: 5.4, end: 6.8, text: 'flexible = 能弯 → 灵活的'},
  {start: 6.8, end: 8.2, text: 'reflect = 弯回去 → 反射 / 反思'},
  {start: 8.2, end: 9.6, text: 'reflection = 弯回来的结果 → 反射 / 倒影'},
  {start: 9.6, end: 11, text: 'deflect = 弯开 → 偏转'},
  {start: 11, end: 12.4, text: 'inflect = 声音拐弯 → 变调'},
  {start: 12.4, end: 13.8, text: 'reflex = 自动弯回 → 反射动作'},
  {start: 13.8, end: 15, text: 'reflexive = 反射性的 / 反身的'},
  {start: 15, end: 19, text: 'flex / reflect / deflect / inflect，都围着 bend 转'},
  {start: 19, end: 22, text: 'flect / flex = bend：弯曲，拐弯'},
  {start: 22, end: 24, text: '看到 flect / flex，先想：往哪儿弯？'},
];
