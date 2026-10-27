export type RootWord = {
  word: string;
  phonetic: string;
  partOfSpeech: string;
  meaning: string;
};

export const rootInfo = {
  root: 'auto',
  meaning: 'self / 自己，自动',
  explanation:
    'auto 像一股“自己来”的力量：automatic 是自己运转，autonomous 是自己做主，autobiography 是自己写自己，autopilot 是自己稳住方向，autodidact 是自己把自己教会。',
};

export const words: RootWord[] = [
  {word: 'automatic', phonetic: '/ˌɔːtəˈmætɪk/', partOfSpeech: 'adj.', meaning: '自动的；自己就会运转'},
  {word: 'automate', phonetic: '/ˈɔːtəmeɪt/', partOfSpeech: 'v.', meaning: '使自动化；让流程自己跑'},
  {word: 'autonomous', phonetic: '/ɔːˈtɒnəməs/', partOfSpeech: 'adj.', meaning: '自主的；自己做决定'},
  {word: 'autobiography', phonetic: '/ˌɔːtəbaɪˈɒɡrəfi/', partOfSpeech: 'n.', meaning: '自传；自己写自己的人生'},
  {word: 'autopilot', phonetic: '/ˈɔːtəʊˌpaɪlət/', partOfSpeech: 'n.', meaning: '自动驾驶；自己稳住方向'},
  {word: 'autofocus', phonetic: '/ˈɔːtəʊˌfəʊkəs/', partOfSpeech: 'n./v.', meaning: '自动对焦；自己找清楚焦点'},
  {word: 'autodidact', phonetic: '/ˈɔːtəʊdɪdækt/', partOfSpeech: 'n.', meaning: '自学者；自己把自己学会的人'},
  {word: 'autoimmune', phonetic: '/ˌɔːtəʊɪˈmjuːn/', partOfSpeech: 'adj.', meaning: '自身免疫的；身体自己打自己'},
];
