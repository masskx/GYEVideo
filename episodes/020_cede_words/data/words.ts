export type RootWord = {
  word: string;
  phonetic: string;
  partOfSpeech: string;
  meaning: string;
};

export const rootInfo = {
  root: 'cede/cess',
  meaning: 'go / 走，前进',
  explanation:
    'cede 和 cess 都像一步步往前走：向前走是 proceed，走在前面是 precede，往回退是 recede，让出一步是 concede，走过头就是 exceed。',
};

export const words: RootWord[] = [
  {word: 'proceed', phonetic: '/prəˈsiːd/', partOfSpeech: 'v.', meaning: '继续进行；向前走'},
  {word: 'precede', phonetic: '/prɪˈsiːd/', partOfSpeech: 'v.', meaning: '先于，走在前面'},
  {word: 'recede', phonetic: '/rɪˈsiːd/', partOfSpeech: 'v.', meaning: '后退，退去'},
  {word: 'concede', phonetic: '/kənˈsiːd/', partOfSpeech: 'v.', meaning: '承认，让步；让一步'},
  {word: 'exceed', phonetic: '/ɪkˈsiːd/', partOfSpeech: 'v.', meaning: '超过；走出去更多'},
  {word: 'access', phonetic: '/ˈækses/', partOfSpeech: 'n./v.', meaning: '进入，访问；走进去'},
  {word: 'process', phonetic: '/ˈprɑːses/', partOfSpeech: 'n.', meaning: '过程，流程；一路走过'},
  {word: 'successor', phonetic: '/səkˈsesər/', partOfSpeech: 'n.', meaning: '继任者；跟着走上来的人'},
];
