export type SubtitleLine = {
  start: number;
  end: number;
  text: string;
};

export const subtitles: SubtitleLine[] = [
  {start: 0, end: 2.5, text: '看到 corp 别只会想 corpse'},
  {start: 2.5, end: 4, text: 'corpse / corporation / incorporate / corporal / corps'},
  {start: 4, end: 6, text: 'corp = body / 身体'},
  {start: 6, end: 8, text: 'corpse = 无生命的身体 -> 尸体'},
  {start: 8, end: 10, text: 'corporation = 法律身体 -> 公司'},
  {start: 10, end: 12, text: 'incorporate = 编进身体 -> 合并'},
  {start: 12, end: 14, text: 'corporal = 身体的 -> 肉体的'},
  {start: 14, end: 16, text: 'corporeal = 有身体的 -> 物质的 / 有形的'},
  {start: 16, end: 18, text: 'corpus = 知识的整体 -> 语料库 / 全集'},
  {start: 18, end: 20, text: 'corps = 一群人的身体 -> 军团 / 团队'},
  {start: 20, end: 22, text: 'corpulent = 充满身体 -> 肥胖的'},
  {start: 22, end: 25, text: 'corpse / corporation / incorporate，都围着 body 转'},
  {start: 25, end: 27, text: 'corp = body / 身体'},
  {start: 27, end: 30, text: '看到 corp，先想：什么身体？实体的还是抽象的？'},
];
