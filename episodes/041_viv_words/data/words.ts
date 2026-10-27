export type RootWord = {
  word: string;
  phonetic: string;
  partOfSpeech: string;
  meaning: string;
};

export const rootInfo = {
  root: '-viv / -vit',
  meaning: 'live / 生命，活着',
  explanation:
    'viv 和 vit 像一切都围着"生命、活着"转：vivid 是活生生的，survive 是活下来，revive 是重新活过来，vital 是关乎生命的，vitamin 是维持生命的物质。',
};

export const words: RootWord[] = [
  {word: 'vivid', phonetic: '/ˈvɪvɪd/', partOfSpeech: 'adj.', meaning: '生动的；鲜明的；活泼的'},
  {word: 'survive', phonetic: '/sərˈvaɪv/', partOfSpeech: 'v.', meaning: '幸存；活下来；挺过'},
  {word: 'revive', phonetic: '/rɪˈvaɪv/', partOfSpeech: 'v.', meaning: '复活；复苏；重新焕发'},
  {word: 'vital', phonetic: '/ˈvaɪtəl/', partOfSpeech: 'adj.', meaning: '至关重要的；生命的；充满活力的'},
  {word: 'vitamin', phonetic: '/ˈvaɪtəmɪn/', partOfSpeech: 'n.', meaning: '维生素；维他命'},
  {word: 'vivacious', phonetic: '/vɪˈveɪʃəs/', partOfSpeech: 'adj.', meaning: '活泼的；快活的；有生气的'},
  {word: 'vitality', phonetic: '/vaɪˈtæləti/', partOfSpeech: 'n.', meaning: '活力；生命力；生机'},
  {word: 'convivial', phonetic: '/kənˈvɪviəl/', partOfSpeech: 'adj.', meaning: '欢乐的；欢快友好的'},
];
