export type SubtitleLine = {
  start: number;
  end: number;
  text: string;
};

export const subtitles: SubtitleLine[] = [
  {start: 0, end: 2.5, text: '看到 path 别只会想 path 路径'},
  {start: 2.5, end: 4, text: 'path = feeling / suffering'},
  {start: 4, end: 7, text: 'sympathy / empathy / apathy / pathetic / pathology'},
  {start: 7, end: 9, text: '它们都连着 feeling / suffering'},
  {start: 9, end: 11, text: 'sympathy = 一起感受 -> 同情'},
  {start: 11, end: 13, text: 'empathy = 感同身受 -> 共情'},
  {start: 13, end: 15, text: 'apathy = 没有感觉 -> 冷漠'},
  {start: 15, end: 17, text: 'pathetic = 引发怜悯感 -> 可怜的'},
  {start: 17, end: 19, text: 'pathology = 痛苦状态研究 -> 病理'},
  {start: 19, end: 22, text: 'path = feeling / suffering'},
  {start: 22, end: 24, text: '看到 path，先想：它在讲哪种感受？'},
];
