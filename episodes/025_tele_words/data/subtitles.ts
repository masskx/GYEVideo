export type SubtitleLine = {
  start: number;
  end: number;
  text: string;
};

export const subtitles: SubtitleLine[] = [
  {start: 0, end: 2.5, text: 'telephone 不只是“电话”'},
  {start: 2.5, end: 4, text: 'tele = far / 远'},
  {start: 4, end: 7, text: 'telephone / telegraph / television / telescope / teleport'},
  {start: 7, end: 9, text: '它们都围着“远”'},
  {start: 9, end: 11, text: 'telephone = 远距离传声音 → 电话'},
  {start: 11, end: 13, text: 'telegraph = 远距离传消息 → 电报'},
  {start: 13, end: 15, text: 'television = 远距离看见 → 电视'},
  {start: 15, end: 17, text: 'telescope = 看远处 → 望远镜'},
  {start: 17, end: 19, text: 'teleport = 传到远方 → 瞬移'},
  {start: 19, end: 22, text: 'tele = far: 远'},
  {start: 22, end: 24, text: '看到 tele，先想：隔着多远？'},
];
