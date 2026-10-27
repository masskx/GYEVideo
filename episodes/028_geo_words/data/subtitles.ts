export type SubtitleLine = {
  start: number;
  end: number;
  text: string;
};

export const subtitles: SubtitleLine[] = [
  {start: 0, end: 2.5, text: '看到 geo 别只会想 geography'},
  {start: 2.5, end: 4, text: 'geo = earth / 地球，土地'},
  {start: 4, end: 7, text: 'geography / geology / geometry / geothermal / geopolitics'},
  {start: 7, end: 9, text: '它们都连着 earth / 地球，土地'},
  {start: 9, end: 11, text: 'geography = 描述地球地表 -> 地理学'},
  {start: 11, end: 13, text: 'geology = 研究地球岩层 -> 地质学'},
  {start: 13, end: 15, text: 'geometry = 土地测量 -> 几何学'},
  {start: 15, end: 17, text: 'geothermal = 来自地球热能 -> 地热的'},
  {start: 17, end: 19, text: 'geocentric = 以地球为中心'},
  {start: 19, end: 22, text: 'geo = earth / 地球，土地'},
  {start: 22, end: 24, text: '看到 geo，先想：它和地球或土地有什么关系？'},
];
