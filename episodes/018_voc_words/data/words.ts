export type RootWord = {
  word: string;
  phonetic: string;
  partOfSpeech: string;
  meaning: string;
};

export const rootInfo = {
  root: 'voc/voke',
  meaning: 'call / 呼叫，召唤',
  explanation:
    'voc 和 voke 都像用声音把东西叫出来：vocal 是有声音的，evoke 是把感觉叫出来，invoke 是呼唤出来，revoke 是把命令叫回来。',
};

export const words: RootWord[] = [
  {word: 'vocal', phonetic: '/ˈvoʊkl/', partOfSpeech: 'adj.', meaning: '声音的；用嗓音表达的'},
  {word: 'evoke', phonetic: '/ɪˈvoʊk/', partOfSpeech: 'v.', meaning: '唤起，引起；叫出感觉'},
  {word: 'advocate', phonetic: '/ˈædvəkeɪt/', partOfSpeech: 'v./n.', meaning: '提倡；替别人发声'},
  {word: 'invoke', phonetic: '/ɪnˈvoʊk/', partOfSpeech: 'v.', meaning: '援引，唤起；向内呼唤'},
  {word: 'provoke', phonetic: '/prəˈvoʊk/', partOfSpeech: 'v.', meaning: '激怒，挑起；向前叫出反应'},
  {word: 'revoke', phonetic: '/rɪˈvoʊk/', partOfSpeech: 'v.', meaning: '撤销；把命令叫回来'},
  {word: 'convoke', phonetic: '/kənˈvoʊk/', partOfSpeech: 'v.', meaning: '召集；一起叫来'},
  {word: 'vocation', phonetic: '/voʊˈkeɪʃn/', partOfSpeech: 'n.', meaning: '职业，使命；被召唤'},
];
