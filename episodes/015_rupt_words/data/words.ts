export type RootWord = {
  word: string;
  phonetic: string;
  partOfSpeech: string;
  meaning: string;
};

export const rootInfo = {
  root: '-rupt',
  meaning: 'break / 破裂，打断',
  explanation:
    'rupt 像一条线突然断开：裂开是 rupture，火山爆裂出来是 erupt，插进去打断是 interrupt，秩序被打乱是 disrupt，品质坏掉是 corrupt。',
};

export const words: RootWord[] = [
  {word: 'rupture', phonetic: '/ˈrʌptʃər/', partOfSpeech: 'n./v.', meaning: '破裂；裂开'},
  {word: 'erupt', phonetic: '/ɪˈrʌpt/', partOfSpeech: 'v.', meaning: '爆发，喷发；爆裂出来'},
  {word: 'interrupt', phonetic: '/ˌɪntəˈrʌpt/', partOfSpeech: 'v.', meaning: '打断；插进去让它断'},
  {word: 'disrupt', phonetic: '/dɪsˈrʌpt/', partOfSpeech: 'v.', meaning: '扰乱；把秩序打断'},
  {word: 'corrupt', phonetic: '/kəˈrʌpt/', partOfSpeech: 'v./adj.', meaning: '腐败，败坏；坏掉'},
  {word: 'abrupt', phonetic: '/əˈbrʌpt/', partOfSpeech: 'adj.', meaning: '突然的；突然断开'},
  {word: 'bankrupt', phonetic: '/ˈbæŋkrʌpt/', partOfSpeech: 'adj./v.', meaning: '破产的；财务断裂'},
  {word: 'corruption', phonetic: '/kəˈrʌpʃn/', partOfSpeech: 'n.', meaning: '腐败；败坏'},
];
