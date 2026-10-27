export type RootWord = {
  word: string;
  phonetic: string;
  partOfSpeech: string;
  meaning: string;
};

export const rootInfo = {
  root: '-cap / -capt / -cept',
  meaning: 'take / seize / 拿，抓',
  explanation:
    'cap、capt、cept 像一切都围着"拿、抓"转：capture 是抓捕，capable 是能拿住的，accept 是拿过来接受，except 是拿出去排除，concept 是把想法抓到脑子里。',
};

export const words: RootWord[] = [
  {word: 'capture', phonetic: '/ˈkæptʃər/', partOfSpeech: 'v./n.', meaning: '抓捕；俘获；捕捉'},
  {word: 'capable', phonetic: '/ˈkeɪpəbəl/', partOfSpeech: 'adj.', meaning: '有能力的；能胜任的'},
  {word: 'capacity', phonetic: '/kəˈpæsəti/', partOfSpeech: 'n.', meaning: '容量；能力；容纳力'},
  {word: 'accept', phonetic: '/əkˈsept/', partOfSpeech: 'v.', meaning: '接受；同意'},
  {word: 'except', phonetic: '/ɪkˈsept/', partOfSpeech: 'prep./v.', meaning: '除…之外；排除'},
  {word: 'concept', phonetic: '/ˈkɑːnsept/', partOfSpeech: 'n.', meaning: '概念；观念'},
  {word: 'intercept', phonetic: '/ˌɪntərˈsept/', partOfSpeech: 'v.', meaning: '拦截；截获'},
  {word: 'perceive', phonetic: '/pərˈsiːv/', partOfSpeech: 'v.', meaning: '感知；察觉；理解'},
];
