export type SubtitleLine = {
  start: number;
  end: number;
  text: string;
};

export const subtitles: SubtitleLine[] = [
  {start: 0, end: 2.5, text: '看到 therm 别只会想 thermometer'},
  {start: 2.5, end: 4, text: 'therm = heat / 热'},
  {start: 4, end: 7, text: 'thermal / thermometer / thermostat / exothermic / geothermal'},
  {start: 7, end: 9, text: '它们都连着 heat / 热'},
  {start: 9, end: 11, text: 'thermal = 和热有关 -> 热的'},
  {start: 11, end: 13, text: 'thermometer = 测温工具 -> 温度计'},
  {start: 13, end: 15, text: 'thermostat = 控制温度 -> 恒温器'},
  {start: 15, end: 17, text: 'exothermic = 热往外放 -> 放热的'},
  {start: 17, end: 19, text: 'endothermic = 把热吸进来 -> 吸热的'},
  {start: 19, end: 22, text: 'therm = heat / 热'},
  {start: 22, end: 24, text: '看到 therm，先想：它和哪种热有关？'},
];
