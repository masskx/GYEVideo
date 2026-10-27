export type RootWord = {
  word: string;
  phonetic: string;
  partOfSpeech: string;
  meaning: string;
};

export const rootInfo = {
  root: 'mit/miss',
  meaning: 'send / 发送',
  explanation:
    'mit 和 miss 都像把东西送出去：向外送是 emit，跨过去送是 transmit，往下交出去是 submit，送进来是 admit，送走就是 dismiss。',
};

export const words: RootWord[] = [
  {word: 'emit', phonetic: '/ɪˈmɪt/', partOfSpeech: 'v.', meaning: '发出，排放；向外发送'},
  {word: 'transmit', phonetic: '/trænzˈmɪt/', partOfSpeech: 'v.', meaning: '传送，传输；跨过去发送'},
  {word: 'submit', phonetic: '/səbˈmɪt/', partOfSpeech: 'v.', meaning: '提交；往下交出去'},
  {word: 'admit', phonetic: '/ədˈmɪt/', partOfSpeech: 'v.', meaning: '承认；允许进入'},
  {word: 'commit', phonetic: '/kəˈmɪt/', partOfSpeech: 'v.', meaning: '承诺，投入；一起送进去'},
  {word: 'permit', phonetic: '/pərˈmɪt/', partOfSpeech: 'v./n.', meaning: '允许，许可；放行'},
  {word: 'dismiss', phonetic: '/dɪsˈmɪs/', partOfSpeech: 'v.', meaning: '解散，不予考虑；送走'},
  {word: 'mission', phonetic: '/ˈmɪʃn/', partOfSpeech: 'n.', meaning: '任务，使命；被派出去的事'},
];
