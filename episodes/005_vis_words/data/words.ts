export type RootWord = {
  word: string;
  phonetic: string;
  partOfSpeech: string;
  meaning: string;
};

export const rootInfo = {
  root: '-vis/-vid',
  meaning: 'see / 看见',
  explanation: 'vis 和 vid 都像一只眼睛：看见、可见、视觉、证据，很多词都围着 see 转。',
};

export const words: RootWord[] = [
  {word: 'vision', phonetic: '/ˈvɪʒən/', partOfSpeech: 'n.', meaning: '视力；愿景；看见的画面'},
  {word: 'visible', phonetic: '/ˈvɪzəbl/', partOfSpeech: 'adj.', meaning: '可见的；能被看见的'},
  {word: 'video', phonetic: '/ˈvɪdioʊ/', partOfSpeech: 'n.', meaning: '视频；能被看见的画面'},
  {word: 'visual', phonetic: '/ˈvɪʒuəl/', partOfSpeech: 'adj./n.', meaning: '视觉的；和看有关'},
  {word: 'evidence', phonetic: '/ˈevɪdəns/', partOfSpeech: 'n.', meaning: '证据；让事实被看见'},
  {word: 'evident', phonetic: '/ˈevɪdənt/', partOfSpeech: 'adj.', meaning: '明显的；看得出来的'},
  {word: 'visit', phonetic: '/ˈvɪzɪt/', partOfSpeech: 'v./n.', meaning: '拜访；去看某人某地'},
  {word: 'revise', phonetic: '/rɪˈvaɪz/', partOfSpeech: 'v.', meaning: '修改；重新看一遍'},
];
