export type RootWord = {
  word: string;
  phonetic: string;
  partOfSpeech: string;
  meaning: string;
  rootChunk?: string;
};

export const rootInfo = {
  root: '-alt',
  meaning: 'high / 高',
  explanation:
    'alt 这条词根，核心就是 high，高。altitude 是高度、海拔，altimeter 是测高度的仪器，alto 是偏高的声部，exalt 是把人或东西抬高，altiplano 则直接指高原。',
};

export const words: RootWord[] = [
  {word: 'altitude', rootChunk: 'alt', phonetic: '/ˈæltɪtuːd/', partOfSpeech: 'n.', meaning: '高度；海拔'},
  {word: 'altimeter', rootChunk: 'alt', phonetic: '/ælˈtɪmɪtər/', partOfSpeech: 'n.', meaning: '高度计；测高仪'},
  {word: 'alto', rootChunk: 'alt', phonetic: '/ˈæltoʊ/', partOfSpeech: 'n.', meaning: '女低音；中音部'},
  {word: 'exalt', rootChunk: 'alt', phonetic: '/ɪɡˈzɔːlt/', partOfSpeech: 'v.', meaning: '抬高；颂扬'},
  {word: 'altiplano', rootChunk: 'alti/alt', phonetic: '/ˌæltiˈplɑːnoʊ/', partOfSpeech: 'n.', meaning: '高原'},
  {word: 'altimetry', rootChunk: 'alti/alt', phonetic: '/ælˈtɪmətri/', partOfSpeech: 'n.', meaning: '测高法；高度测量'},
  {word: 'altissimo', rootChunk: 'alt', phonetic: '/ɑːlˈtiːsɪmoʊ/', partOfSpeech: 'adj./adv.', meaning: '极高音的；以极高音'},
];
