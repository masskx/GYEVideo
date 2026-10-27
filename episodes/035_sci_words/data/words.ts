export type RootWord = {
  word: string;
  phonetic: string;
  partOfSpeech: string;
  meaning: string;
};

export const rootInfo = {
  root: '-sci',
  meaning: 'know / 知道',
  explanation:
    'sci 像一切都围着"知道、认知"转：science 是知识，conscious 是有意识的，conscience 是良心，omniscient 是无所不知，prescient 是预知的。',
};

export const words: RootWord[] = [
  {word: 'science', phonetic: '/ˈsaɪəns/', partOfSpeech: 'n.', meaning: '科学；知识体系'},
  {word: 'conscious', phonetic: '/ˈkɑːnʃəs/', partOfSpeech: 'adj.', meaning: '有意识的；清醒的'},
  {word: 'unconscious', phonetic: '/ʌnˈkɑːnʃəs/', partOfSpeech: 'adj.', meaning: '无意识的；昏迷的'},
  {word: 'conscience', phonetic: '/ˈkɑːnʃəns/', partOfSpeech: 'n.', meaning: '良心；良知'},
  {word: 'omniscient', phonetic: '/ɑːmˈnɪʃənt/', partOfSpeech: 'adj.', meaning: '无所不知的'},
  {word: 'prescient', phonetic: '/ˈpreʃənt/', partOfSpeech: 'adj.', meaning: '预知的；有先见之明的'},
  {word: 'nescient', phonetic: '/ˈneʃənt/', partOfSpeech: 'adj.', meaning: '无知的；不知道的'},
  {word: 'subconscious', phonetic: '/sʌbˈkɑːnʃəs/', partOfSpeech: 'adj./n.', meaning: '潜意识的；下意识'},
];
