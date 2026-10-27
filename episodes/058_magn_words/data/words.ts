export type RootWord = {
  word: string;
  phonetic: string;
  partOfSpeech: string;
  meaning: string;
  rootChunk?: string;
};

export const rootInfo = {
  root: '-magn',
  meaning: 'great / large / 大，伟大',
  explanation:
    'magn 这条线，核心就是 great 或 large。magnify 是放大，magnitude 是大小和量级，magnificent 是伟大的、壮丽的，magnifier 是放大镜，magnanimous 是气量很大。',
};

export const words: RootWord[] = [
  {word: 'magnify', rootChunk: 'magn', phonetic: '/ˈmæɡnɪfaɪ/', partOfSpeech: 'v.', meaning: '放大；夸大'},
  {word: 'magnifier', rootChunk: 'magn', phonetic: '/ˈmæɡnɪfaɪər/', partOfSpeech: 'n.', meaning: '放大镜'},
  {word: 'magnitude', rootChunk: 'magn', phonetic: '/ˈmæɡnɪtuːd/', partOfSpeech: 'n.', meaning: '大小；量级；重大'},
  {word: 'magnificent', rootChunk: 'magn', phonetic: '/mæɡˈnɪfɪsnt/', partOfSpeech: 'adj.', meaning: '壮丽的；伟大的'},
  {word: 'magnanimous', rootChunk: 'magn', phonetic: '/mæɡˈnænɪməs/', partOfSpeech: 'adj.', meaning: '宽宏大量的'},
  {word: 'magnum', rootChunk: 'magn', phonetic: '/ˈmæɡnəm/', partOfSpeech: 'n./adj.', meaning: '大瓶装；巨大的'},
  {word: 'maximize', rootChunk: 'max/magn', phonetic: '/ˈmæksɪmaɪz/', partOfSpeech: 'v.', meaning: '使最大化'},
];
