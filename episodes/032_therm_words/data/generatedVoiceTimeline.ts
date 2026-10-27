export type GeneratedVoiceTimelineItem = {
  id: string;
  start: number;
  end: number;
  text: string;
  audio: string;
};

export const generatedVoiceTimeline: GeneratedVoiceTimelineItem[] = [
  {
    id: `hook`,
    start: 0,
    end: 4.608,
    text: `看到 therm 别只会想 thermometer`,
    audio: `/audio/segments/001.mp3`,
  },
  {
    id: `flash-words`,
    start: 4.608,
    end: 9.36,
    text: `thermal / thermometer / thermostat / exothermic / geothermal`,
    audio: `/audio/segments/002.mp3`,
  },
  {
    id: `same-root`,
    start: 9.36,
    end: 13.512,
    text: `它们都连着 heat / 热`,
    audio: `/audio/segments/003.mp3`,
  },
  {
    id: `root-ject`,
    start: 13.512,
    end: 16.848,
    text: `therm = heat / 热`,
    audio: `/audio/segments/004.mp3`,
  },
  {
    id: `word-reject`,
    start: 16.848,
    end: 20.832,
    text: `thermal = 和热有关 -> 热的`,
    audio: `/audio/segments/005.mp3`,
  },
  {
    id: `word-object`,
    start: 20.832,
    end: 24.192,
    text: `thermometer = 测温工具 -> 温度计`,
    audio: `/audio/segments/006.mp3`,
  },
  {
    id: `word-subject`,
    start: 24.192,
    end: 29.184,
    text: `thermostat = 控制温度 -> 恒温器`,
    audio: `/audio/segments/007.mp3`,
  },
  {
    id: `word-project`,
    start: 29.184,
    end: 34.392,
    text: `exothermic = 热往外放 -> 放热的`,
    audio: `/audio/segments/008.mp3`,
  },
  {
    id: `word-inject`,
    start: 34.392,
    end: 38.976,
    text: `endothermic = 把热吸进来 -> 吸热的`,
    audio: `/audio/segments/009.mp3`,
  },
  {
    id: `word-eject`,
    start: 38.976,
    end: 42.672,
    text: `geothermal = 地球热能 -> 地热的`,
    audio: `/audio/segments/010.mp3`,
  },
  {
    id: `word-abject`,
    start: 42.672,
    end: 47.568,
    text: `thermodynamics = 热与能量变化 -> 热力学`,
    audio: `/audio/segments/011.mp3`,
  },
  {
    id: `word-deject`,
    start: 47.568,
    end: 52.296,
    text: `thermos = 把热留住 -> 保温瓶`,
    audio: `/audio/segments/012.mp3`,
  },
  {
    id: `grid-connect`,
    start: 52.296,
    end: 59.808,
    text: `thermal / thermometer / thermostat，都围着 heat 转`,
    audio: `/audio/segments/013.mp3`,
  },
  {
    id: `summary`,
    start: 59.808,
    end: 63.216,
    text: `therm = heat / 热`,
    audio: `/audio/segments/014.mp3`,
  },
  {
    id: `outro`,
    start: 63.216,
    end: 68.544,
    text: `看到 therm，先想：它和哪种热有关？`,
    audio: `/audio/segments/015.mp3`,
  },
];
