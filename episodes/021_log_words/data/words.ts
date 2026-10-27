export type RootWord = {
  word: string;
  phonetic: string;
  partOfSpeech: string;
  meaning: string;
};

export const rootInfo = {
  root: 'log',
  meaning: 'word / speech / reason / 词，说话，逻辑',
  explanation:
    'log 像把话说出来，也像把理由摆出来：logic 是逻辑，dialogue 是对话，monologue 是独白，analogy 是类比，apology 是把错说出来道歉。',
};

export const words: RootWord[] = [
  {word: 'logic', phonetic: '/ˈlɑːdʒɪk/', partOfSpeech: 'n.', meaning: '逻辑；把理由讲通'},
  {word: 'dialogue', phonetic: '/ˈdaɪəlɔːɡ/', partOfSpeech: 'n.', meaning: '对话；两边来回说'},
  {word: 'monologue', phonetic: '/ˈmɑːnəlɔːɡ/', partOfSpeech: 'n.', meaning: '独白；一个人单独说'},
  {word: 'analogy', phonetic: '/əˈnælədʒi/', partOfSpeech: 'n.', meaning: '类比；拿一个例子来讲清'},
  {word: 'apology', phonetic: '/əˈpɑːlədʒi/', partOfSpeech: 'n.', meaning: '道歉；把话说出来认错'},
  {word: 'eulogy', phonetic: '/ˈjuːlədʒi/', partOfSpeech: 'n.', meaning: '悼词；公开说出的赞辞'},
  {word: 'catalog', phonetic: '/ˈkætəlɔːɡ/', partOfSpeech: 'n.', meaning: '目录；把项目一条条列出来'},
  {word: 'logistics', phonetic: '/ləˈdʒɪstɪks/', partOfSpeech: 'n.', meaning: '后勤；把安排讲清并落地'},
];
