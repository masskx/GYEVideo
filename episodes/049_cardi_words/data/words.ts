export type RootWord = {
  word: string;
  phonetic: string;
  partOfSpeech: string;
  meaning: string;
  rootChunk?: string;
};

export const rootInfo = {
  root: '-cardi / -cardio',
  meaning: 'heart / 心脏',
  explanation:
    'cardi / cardio 这条线，核心就是 heart，心脏。cardiac 是心脏的，cardiology 是心脏学，cardiogram 是把心脏信号画出来，cardiovascular 是心和血管一起看。',
};

export const words: RootWord[] = [
  {word: 'cardiac', rootChunk: 'cardi', phonetic: '/ˈkɑːrdiæk/', partOfSpeech: 'adj.', meaning: '心脏的；强烈的'},
  {word: 'cardiology', rootChunk: 'cardio', phonetic: '/ˌkɑːrdiˈɑːlədʒi/', partOfSpeech: 'n.', meaning: '心脏病学'},
  {word: 'cardiologist', rootChunk: 'cardio', phonetic: '/ˌkɑːrdiˈɑːlədʒɪst/', partOfSpeech: 'n.', meaning: '心脏科医生'},
  {word: 'cardiogram', rootChunk: 'cardio', phonetic: '/ˈkɑːrdiəɡræm/', partOfSpeech: 'n.', meaning: '心电图'},
  {word: 'cardiovascular', rootChunk: 'cardio', phonetic: '/ˌkɑːrdioʊˈvæskjələr/', partOfSpeech: 'adj.', meaning: '心血管的'},
  {word: 'cardiopulmonary', rootChunk: 'cardio', phonetic: '/ˌkɑːrdioʊˈpʊlməneri/', partOfSpeech: 'adj.', meaning: '心肺的'},
  {word: 'pericardium', rootChunk: 'cardi', phonetic: '/ˌperiˈkɑːrdiəm/', partOfSpeech: 'n.', meaning: '心包'},
];
