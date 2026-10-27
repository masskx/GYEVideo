export type RootWord = {
  word: string;
  phonetic: string;
  partOfSpeech: string;
  meaning: string;
  rootChunk?: string;
};

export const rootInfo = {
  root: '-pyro / -pyr',
  meaning: 'fire / 火',
  explanation:
    'pyro / pyr 这条线，核心就是 fire，火。pyrotechnics 是烟火技术，pyromania 是纵火癖，pyrometer 是测高温的仪器，pyrite 是一打火就会出火星的矿石，pyracantha 则是像火一样的红果。',
};

export const words: RootWord[] = [
  {word: 'pyrotechnics', rootChunk: 'pyro', phonetic: '/ˌpaɪroʊˈteknɪks/', partOfSpeech: 'n.', meaning: '烟火技术；焰火表演'},
  {word: 'pyromania', rootChunk: 'pyro', phonetic: '/ˌpaɪroʊˈmeɪniə/', partOfSpeech: 'n.', meaning: '纵火癖'},
  {word: 'pyromaniac', rootChunk: 'pyro', phonetic: '/ˌpaɪroʊˈmeɪniæk/', partOfSpeech: 'n.', meaning: '纵火狂'},
  {word: 'pyrometer', rootChunk: 'pyro', phonetic: '/paɪˈrɑːmɪtər/', partOfSpeech: 'n.', meaning: '高温计'},
  {word: 'pyrite', rootChunk: 'pyr', phonetic: '/ˈpaɪraɪt/', partOfSpeech: 'n.', meaning: '黄铁矿'},
  {word: 'pyrex', rootChunk: 'pyr', phonetic: '/ˈpaɪreks/', partOfSpeech: 'n.', meaning: '耐热玻璃'},
  {word: 'pyracantha', rootChunk: 'pyra', phonetic: '/ˌpaɪrəˈkænθə/', partOfSpeech: 'n.', meaning: '火棘'},
];
