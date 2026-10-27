export type RootWord = {
  word: string;
  phonetic: string;
  partOfSpeech: string;
  meaning: string;
};

export const rootInfo = {
  root: '-corp',
  meaning: 'body / 身体',
  explanation:
    'corp 像一切都围着"身体"转：corpse 是死去的身体，corporation 是一个法律身体，incorporate 是把东西合成一个整体，corporal 是身体的，corps 是一群人的身体组合。',
};

export const words: RootWord[] = [
  {word: 'corpse', phonetic: '/kɔːrps/', partOfSpeech: 'n.', meaning: '尸体'},
  {word: 'corporation', phonetic: '/ˌkɔːrpəˈreɪʃən/', partOfSpeech: 'n.', meaning: '公司；法人；集团'},
  {word: 'incorporate', phonetic: '/ɪnˈkɔːrpəreɪt/', partOfSpeech: 'v.', meaning: '合并；包含；纳入'},
  {word: 'corporal', phonetic: '/ˈkɔːrpərəl/', partOfSpeech: 'adj.', meaning: '身体的；肉体的'},
  {word: 'corporeal', phonetic: '/kɔːrˈpɔːriəl/', partOfSpeech: 'adj.', meaning: '物质的；有形的；身体的'},
  {word: 'corpus', phonetic: '/ˈkɔːrpəs/', partOfSpeech: 'n.', meaning: '语料库；文集；全集'},
  {word: 'corps', phonetic: '/kɔːr/', partOfSpeech: 'n.', meaning: '军团；部队；团队'},
  {word: 'corpulent', phonetic: '/ˈkɔːrpjələnt/', partOfSpeech: 'adj.', meaning: '肥胖的；臃肿的'},
];
