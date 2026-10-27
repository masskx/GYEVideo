export type RootWord = {
  word: string;
  phonetic: string;
  partOfSpeech: string;
  meaning: string;
};

export const rootInfo = {
  root: 'tend/tens',
  meaning: 'stretch / 伸展，延伸',
  explanation:
    'tend 和 tens 都像一根被拉开的线：向外拉开是 extend，心思伸向目标是 intend，注意力伸过去是 attend，拉紧就成了 tension 和 intense。',
};

export const words: RootWord[] = [
  {word: 'extend', phonetic: '/ɪkˈstend/', partOfSpeech: 'v.', meaning: '延伸，扩展；向外拉开'},
  {word: 'intend', phonetic: '/ɪnˈtend/', partOfSpeech: 'v.', meaning: '打算，意图；心思伸向目标'},
  {word: 'attend', phonetic: '/əˈtend/', partOfSpeech: 'v.', meaning: '出席，注意；伸向某处'},
  {word: 'tend', phonetic: '/tend/', partOfSpeech: 'v.', meaning: '倾向于；朝某方向延伸'},
  {word: 'pretend', phonetic: '/prɪˈtend/', partOfSpeech: 'v.', meaning: '假装；把样子伸到前面'},
  {word: 'tension', phonetic: '/ˈtenʃn/', partOfSpeech: 'n.', meaning: '紧张，张力；被拉紧'},
  {word: 'intense', phonetic: '/ɪnˈtens/', partOfSpeech: 'adj.', meaning: '强烈的；绷得很紧'},
  {word: 'extensive', phonetic: '/ɪkˈstensɪv/', partOfSpeech: 'adj.', meaning: '广泛的，大量的；伸展很开'},
];
