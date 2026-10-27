export type RootWord = {
  word: string;
  phonetic: string;
  partOfSpeech: string;
  meaning: string;
};

export const rootInfo = {
  root: '-aud',
  meaning: 'hear / 听',
  explanation: 'aud 像一只耳朵：听声音、听众、试听、听得见，很多词都围着 hear 转。',
};

export const words: RootWord[] = [
  {word: 'audio', phonetic: '/ˈɔːdioʊ/', partOfSpeech: 'n./adj.', meaning: '音频；和声音有关'},
  {word: 'audience', phonetic: '/ˈɔːdiəns/', partOfSpeech: 'n.', meaning: '观众；听的人'},
  {word: 'audit', phonetic: '/ˈɔːdɪt/', partOfSpeech: 'v./n.', meaning: '审计；仔细听、检查'},
  {word: 'audible', phonetic: '/ˈɔːdəbl/', partOfSpeech: 'adj.', meaning: '听得见的；能被听到'},
  {word: 'audition', phonetic: '/ɔːˈdɪʃn/', partOfSpeech: 'n./v.', meaning: '试镜；试听'},
  {word: 'auditorium', phonetic: '/ˌɔːdɪˈtɔːriəm/', partOfSpeech: 'n.', meaning: '礼堂；听众聚集的地方'},
  {word: 'inaudible', phonetic: '/ɪnˈɔːdəbl/', partOfSpeech: 'adj.', meaning: '听不见的；声音太小'},
  {word: 'audiobook', phonetic: '/ˈɔːdioʊ bʊk/', partOfSpeech: 'n.', meaning: '有声书；用来听的书'},
];
