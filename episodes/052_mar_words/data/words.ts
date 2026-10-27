export type RootWord = {
  word: string;
  phonetic: string;
  partOfSpeech: string;
  meaning: string;
  rootChunk?: string;
};

export const rootInfo = {
  root: '-mar / -mari',
  meaning: 'sea / 海',
  explanation:
    'mar / mari 这条线，核心就是 sea，海。marine 是海的，maritime 是和海运海事相关的，mariner 是水手，marina 是停船的港湾，submarine 是海下面的，ultramarine 原本就是越过海来的蓝。',
};

export const words: RootWord[] = [
  {word: 'marine', rootChunk: 'mar', phonetic: '/məˈriːn/', partOfSpeech: 'adj./n.', meaning: '海的；海军陆战队员'},
  {word: 'maritime', rootChunk: 'mari', phonetic: '/ˈmærɪtaɪm/', partOfSpeech: 'adj.', meaning: '海的；海运的'},
  {word: 'mariner', rootChunk: 'mari', phonetic: '/ˈmærɪnər/', partOfSpeech: 'n.', meaning: '水手；船员'},
  {word: 'marina', rootChunk: 'mari', phonetic: '/məˈriːnə/', partOfSpeech: 'n.', meaning: '小型船坞；游艇码头'},
  {word: 'submarine', rootChunk: 'mar', phonetic: '/ˌsʌbməˈriːn/', partOfSpeech: 'n./adj.', meaning: '潜艇；海底的'},
  {word: 'ultramarine', rootChunk: 'mar', phonetic: '/ˌʌltrəməˈriːn/', partOfSpeech: 'adj./n.', meaning: '群青色；群青'},
  {word: 'transmarine', rootChunk: 'mar', phonetic: '/trænz-məˈriːn/', partOfSpeech: 'adj.', meaning: '越洋的；跨海的'},
];
