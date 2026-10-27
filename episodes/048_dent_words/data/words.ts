export type RootWord = {
  word: string;
  phonetic: string;
  partOfSpeech: string;
  meaning: string;
  rootChunk?: string;
};

export const rootInfo = {
  root: '-dent / -dont',
  meaning: 'tooth / 牙齿',
  explanation:
    'dent / dont 这条线，核心是牙齿。dental 是牙科的，dentist 是牙医，denture 是假牙，orthodontist 是矫正牙齿的人，indent 是像牙咬出来的缺口。',
};

export const words: RootWord[] = [
  {word: 'indent', rootChunk: 'dent', phonetic: '/ɪnˈdent/', partOfSpeech: 'v./n.', meaning: '缩进；牙齿状缺口'},
  {word: 'dental', rootChunk: 'dent', phonetic: '/ˈdentl/', partOfSpeech: 'adj.', meaning: '牙齿的；牙科的'},
  {word: 'dentist', rootChunk: 'dent', phonetic: '/ˈdentɪst/', partOfSpeech: 'n.', meaning: '牙医'},
  {word: 'denture', rootChunk: 'dent', phonetic: '/ˈdentʃər/', partOfSpeech: 'n.', meaning: '假牙；一排牙'},
  {word: 'dentifrice', rootChunk: 'dent', phonetic: '/ˈdentɪfrɪs/', partOfSpeech: 'n.', meaning: '牙膏；洁牙剂'},
  {word: 'orthodontist', rootChunk: 'dont', phonetic: '/ˌɔːrθəˈdɑːntɪst/', partOfSpeech: 'n.', meaning: '正畸医生；矫正牙齿的人'},
  {word: 'edentulous', rootChunk: 'dent', phonetic: '/iːˈdentʃələs/', partOfSpeech: 'adj.', meaning: '无牙的'},
];
