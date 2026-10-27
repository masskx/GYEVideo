export type RootWord = {
  word: string;
  phonetic: string;
  partOfSpeech: string;
  meaning: string;
};

export const rootInfo = {
  root: '-port',
  meaning: 'carry / 携带、运输',
  explanation: 'port 像一个搬运动作：带进来、带出去、运过去、托起来、把消息带回来。',
};

export const words: RootWord[] = [
  {word: 'import', phonetic: '/ˈɪmpɔːrt/', partOfSpeech: 'v./n.', meaning: '进口；把东西带进来'},
  {word: 'export', phonetic: '/ˈekspɔːrt/', partOfSpeech: 'v./n.', meaning: '出口；把东西带出去'},
  {word: 'transport', phonetic: '/ˈtrænspɔːrt/', partOfSpeech: 'v./n.', meaning: '运输；把东西运过去'},
  {word: 'support', phonetic: '/səˈpɔːrt/', partOfSpeech: 'v./n.', meaning: '支持；从下面托住'},
  {word: 'report', phonetic: '/rɪˈpɔːrt/', partOfSpeech: 'v./n.', meaning: '报告；把消息带回来'},
  {word: 'portable', phonetic: '/ˈpɔːrtəbl/', partOfSpeech: 'adj.', meaning: '便携的；可以带着走的'},
  {word: 'porter', phonetic: '/ˈpɔːrtər/', partOfSpeech: 'n.', meaning: '搬运工；负责携带的人'},
  {word: 'deport', phonetic: '/dɪˈpɔːrt/', partOfSpeech: 'v.', meaning: '驱逐出境；把人带离某地'},
];
