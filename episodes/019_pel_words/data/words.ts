export type RootWord = {
  word: string;
  phonetic: string;
  partOfSpeech: string;
  meaning: string;
};

export const rootInfo = {
  root: 'pel/pulse',
  meaning: 'drive / 推动，驱使',
  explanation:
    'pel 和 pulse 都像一股推力：向前推是 propel，强迫去做是 compel，往外推出去是 expel，脑子里突然被推一下就是 impulse。',
};

export const words: RootWord[] = [
  {word: 'propel', phonetic: '/prəˈpel/', partOfSpeech: 'v.', meaning: '推进，推动；向前推'},
  {word: 'compel', phonetic: '/kəmˈpel/', partOfSpeech: 'v.', meaning: '强迫；一起推着你做'},
  {word: 'expel', phonetic: '/ɪkˈspel/', partOfSpeech: 'v.', meaning: '驱逐，开除；向外推出去'},
  {word: 'repel', phonetic: '/rɪˈpel/', partOfSpeech: 'v.', meaning: '击退，排斥；往回推开'},
  {word: 'dispel', phonetic: '/dɪˈspel/', partOfSpeech: 'v.', meaning: '驱散，消除；推散开'},
  {word: 'impulse', phonetic: '/ˈɪmpʌls/', partOfSpeech: 'n.', meaning: '冲动，推动力；内在一推'},
  {word: 'pulse', phonetic: '/pʌls/', partOfSpeech: 'n.', meaning: '脉搏；一下下推动'},
  {word: 'compulsive', phonetic: '/kəmˈpʌlsɪv/', partOfSpeech: 'adj.', meaning: '强迫性的；一直被推动'},
];
