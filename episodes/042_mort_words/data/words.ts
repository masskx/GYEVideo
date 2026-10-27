export type RootWord = {
  word: string;
  phonetic: string;
  partOfSpeech: string;
  meaning: string;
};

export const rootInfo = {
  root: '-mort',
  meaning: 'death / 死亡',
  explanation:
    'mort 像一切都围着"死亡"转：mortal 是会死的，immortal 是永生的，mortgage 字面是死亡抵押，mortician 是殓葬师，mortify 是羞耻到想死。',
};

export const words: RootWord[] = [
  {word: 'mortal', phonetic: '/ˈmɔːrtəl/', partOfSpeech: 'adj./n.', meaning: '凡人的；终有一死的'},
  {word: 'immortal', phonetic: '/ɪˈmɔːrtəl/', partOfSpeech: 'adj.', meaning: '不朽的；永生不灭的'},
  {word: 'mortgage', phonetic: '/ˈmɔːrɡɪdʒ/', partOfSpeech: 'n./v.', meaning: '抵押贷款；按揭'},
  {word: 'mortician', phonetic: '/mɔːrˈtɪʃən/', partOfSpeech: 'n.', meaning: '殡仪师；殓葬师'},
  {word: 'mortify', phonetic: '/ˈmɔːrtɪfaɪ/', partOfSpeech: 'v.', meaning: '使羞耻；使难堪万分'},
  {word: 'postmortem', phonetic: '/ˌpoʊstˈmɔːrtəm/', partOfSpeech: 'adj./n.', meaning: '死后的；尸检；事后分析'},
  {word: 'morgue', phonetic: '/mɔːrɡ/', partOfSpeech: 'n.', meaning: '太平间；停尸房'},
  {word: 'mortuary', phonetic: '/ˈmɔːrtʃueri/', partOfSpeech: 'n./adj.', meaning: '殡仪馆；丧葬的'},
];
