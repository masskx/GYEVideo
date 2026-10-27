export type RootWord = {
  word: string;
  phonetic: string;
  partOfSpeech: string;
  meaning: string;
  rootChunk?: string;
};

export const rootInfo = {
  root: '-min',
  meaning: 'small / 小',
  explanation:
    'min 这条线，核心就是 small。mini 是小号，minimal 是最小限度，minor 是较小的，miniature 是缩小版，diminish 是变小变弱，minute 也能指极小的。',
};

export const words: RootWord[] = [
  {word: 'mini', rootChunk: 'min', phonetic: '/ˈmɪni/', partOfSpeech: 'adj./n.', meaning: '微型的；迷你款'},
  {word: 'minimal', rootChunk: 'min', phonetic: '/ˈmɪnɪməl/', partOfSpeech: 'adj.', meaning: '最小的；最低限度的'},
  {word: 'minimum', rootChunk: 'min', phonetic: '/ˈmɪnɪməm/', partOfSpeech: 'n./adj.', meaning: '最小值；最低的'},
  {word: 'minor', rootChunk: 'min', phonetic: '/ˈmaɪnər/', partOfSpeech: 'adj./n.', meaning: '较小的；次要的'},
  {word: 'miniature', rootChunk: 'min', phonetic: '/ˈmɪnətʃər/', partOfSpeech: 'adj./n.', meaning: '微型的；缩样'},
  {word: 'diminish', rootChunk: 'min', phonetic: '/dɪˈmɪnɪʃ/', partOfSpeech: 'v.', meaning: '减少；缩小'},
  {word: 'minute', rootChunk: 'min', phonetic: '/maɪˈnjuːt/', partOfSpeech: 'adj.', meaning: '极小的；细微的'},
];
