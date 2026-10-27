export type RootWord = {
  word: string;
  phonetic: string;
  partOfSpeech: string;
  meaning: string;
};

export const rootInfo = {
  root: 'therm',
  meaning: 'heat / 热',
  explanation:
    'therm 像一切都和热、温度、热量变化有关：thermal 是热的，thermometer 是测温的，thermostat 是控温的，exothermic 是放热的，geothermal 是地热。',
};

export const words: RootWord[] = [
  {word: 'thermal', phonetic: '/ˈθɜːrməl/', partOfSpeech: 'adj.', meaning: '热的；与热相关的'},
  {word: 'thermometer', phonetic: '/θərˈmɑːmɪtər/', partOfSpeech: 'n.', meaning: '温度计；测量温度的工具'},
  {word: 'thermostat', phonetic: '/ˈθɜːrməstæt/', partOfSpeech: 'n.', meaning: '恒温器；控制温度的装置'},
  {word: 'exothermic', phonetic: '/ˌeksoʊˈθɜːrmɪk/', partOfSpeech: 'adj.', meaning: '放热的'},
  {word: 'endothermic', phonetic: '/ˌendoʊˈθɜːrmɪk/', partOfSpeech: 'adj.', meaning: '吸热的'},
  {word: 'geothermal', phonetic: '/ˌdʒiːoʊˈθɜːrməl/', partOfSpeech: 'adj.', meaning: '地热的；来自地球热能的'},
  {word: 'thermodynamics', phonetic: '/ˌθɜːrmoʊdaɪˈnæmɪks/', partOfSpeech: 'n.', meaning: '热力学；研究热与能量变化'},
  {word: 'thermos', phonetic: '/ˈθɜːrməs/', partOfSpeech: 'n.', meaning: '保温瓶；保持热量的容器'},
];
