export type RootWord = {
  word: string;
  phonetic: string;
  partOfSpeech: string;
  meaning: string;
};

export const rootInfo = {
  root: '-spect',
  meaning: 'look / 看',
  explanation: 'spect 像一束视线：往里看、往回看、向前看、偷偷看，很多词就顺了。',
};

export const words: RootWord[] = [
  {word: 'inspect', phonetic: '/ɪnˈspekt/', partOfSpeech: 'v.', meaning: '检查；往里面仔细看'},
  {word: 'respect', phonetic: '/rɪˈspekt/', partOfSpeech: 'v./n.', meaning: '尊重；反复看、重视'},
  {word: 'suspect', phonetic: '/səˈspekt/', partOfSpeech: 'v./n.', meaning: '怀疑；从下面偷偷看'},
  {word: 'expect', phonetic: '/ɪkˈspekt/', partOfSpeech: 'v.', meaning: '期待；向外看、等结果'},
  {word: 'prospect', phonetic: '/ˈprɑːspekt/', partOfSpeech: 'n.', meaning: '前景；向前看见的可能'},
  {word: 'spectator', phonetic: '/ˈspekteɪtər/', partOfSpeech: 'n.', meaning: '观众；看的人'},
  {word: 'spectacle', phonetic: '/ˈspektəkl/', partOfSpeech: 'n.', meaning: '奇观；值得看的场面'},
  {word: 'retrospect', phonetic: '/ˈretrəspekt/', partOfSpeech: 'n./v.', meaning: '回顾；往回看'},
];
