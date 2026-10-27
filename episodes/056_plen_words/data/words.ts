export type RootWord = {
  word: string;
  phonetic: string;
  partOfSpeech: string;
  meaning: string;
  rootChunk?: string;
};

export const rootInfo = {
  root: '-plen',
  meaning: 'full / 满',
  explanation:
    'plen 这条线，核心就是 full。plenty 是很多很满，replenish 是重新补满，supplement 是补充让它更满，complete 是全部填满才完整，compliment 也是把好感加满。',
};

export const words: RootWord[] = [
  {word: 'plenty', rootChunk: 'plen', phonetic: '/ˈplenti/', partOfSpeech: 'n./pron./adv.', meaning: '大量；充足'},
  {word: 'plentiful', rootChunk: 'plen', phonetic: '/ˈplentɪfl/', partOfSpeech: 'adj.', meaning: '丰富的；充足的'},
  {word: 'replenish', rootChunk: 'plen', phonetic: '/rɪˈplenɪʃ/', partOfSpeech: 'v.', meaning: '补充；重新装满'},
  {word: 'supplement', rootChunk: 'ple', phonetic: '/ˈsʌplɪmənt/', partOfSpeech: 'n./v.', meaning: '补充品；补充'},
  {word: 'complete', rootChunk: 'ple', phonetic: '/kəmˈpliːt/', partOfSpeech: 'adj./v.', meaning: '完整的；完成'},
  {word: 'deplete', rootChunk: 'ple', phonetic: '/dɪˈpliːt/', partOfSpeech: 'v.', meaning: '耗尽；使枯竭'},
  {word: 'compliment', rootChunk: 'pli', phonetic: '/ˈkɒmplɪmənt/', partOfSpeech: 'n./v.', meaning: '赞美；称赞'},
];
