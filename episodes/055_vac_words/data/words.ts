export type RootWord = {
  word: string;
  phonetic: string;
  partOfSpeech: string;
  meaning: string;
  rootChunk?: string;
};

export const rootInfo = {
  root: '-vac',
  meaning: 'empty / 空',
  explanation:
    'vac 这条线，核心就是 empty。vacant 是空着的，vacancy 是空位，vacate 是腾空，evacuate 是把人清空撤走，vacuum 是真空，vacation 本来也是把工作空出来。',
};

export const words: RootWord[] = [
  {word: 'vacant', rootChunk: 'vac', phonetic: '/ˈveɪkənt/', partOfSpeech: 'adj.', meaning: '空着的；空缺的'},
  {word: 'vacancy', rootChunk: 'vac', phonetic: '/ˈveɪkənsi/', partOfSpeech: 'n.', meaning: '空缺；空位'},
  {word: 'vacate', rootChunk: 'vac', phonetic: '/veɪˈkeɪt/', partOfSpeech: 'v.', meaning: '腾空；搬离'},
  {word: 'evacuate', rootChunk: 'vac', phonetic: '/ɪˈvækjueɪt/', partOfSpeech: 'v.', meaning: '疏散；撤离'},
  {word: 'vacation', rootChunk: 'vac', phonetic: '/veɪˈkeɪʃn/', partOfSpeech: 'n.', meaning: '假期'},
  {word: 'vacuum', rootChunk: 'vac', phonetic: '/ˈvækjuəm/', partOfSpeech: 'n.', meaning: '真空；吸尘器'},
  {word: 'vacuous', rootChunk: 'vac', phonetic: '/ˈvækjuəs/', partOfSpeech: 'adj.', meaning: '空洞的；空虚的'},
];
