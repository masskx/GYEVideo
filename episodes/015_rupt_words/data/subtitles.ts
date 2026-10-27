export type Subtitle = {
  start: number;
  end: number;
  text: string;
};

export const subtitles: Subtitle[] = [
  {start: 0, end: 0.8, text: 'interrupt 不只是“打断”'},
  {start: 0.8, end: 1.6, text: 'rupture / erupt / interrupt / disrupt / corrupt'},
  {start: 1.6, end: 2.5, text: '它们都藏着 break'},
  {start: 2.5, end: 4, text: 'rupt = break / 破裂，打断'},
  {start: 4, end: 5.4, text: 'rupture = 裂开 → 破裂'},
  {start: 5.4, end: 6.8, text: 'erupt = 向外破裂 → 爆发'},
  {start: 6.8, end: 8.2, text: 'interrupt = 中间断开 → 打断'},
  {start: 8.2, end: 9.6, text: 'disrupt = 打断秩序 → 扰乱'},
  {start: 9.6, end: 11, text: 'corrupt = 被破坏变坏 → 腐败'},
  {start: 11, end: 12.4, text: 'abrupt = 突然断开 → 唐突的'},
  {start: 12.4, end: 13.8, text: 'bankrupt = 财务断裂 → 破产'},
  {start: 13.8, end: 15, text: 'corruption = 坏掉的状态 → 腐败'},
  {start: 15, end: 19, text: 'rupture / erupt / interrupt / disrupt，都围着 break 转'},
  {start: 19, end: 22, text: 'rupt = break：破裂，打断'},
  {start: 22, end: 24, text: '看到 rupt，先想：哪里断了？'},
];
