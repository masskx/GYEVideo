export type RootWord = {
  word: string;
  phonetic: string;
  partOfSpeech: string;
  meaning: string;
};

export const rootInfo = {
  root: '-fac / -fact / -fect',
  meaning: 'make / do / 做，制造',
  explanation:
    'fac、fact、fect 像一切都围着"做、制造"转：factory 是工厂，manufacture 是制造，facilitate 是让事情好做，defect 是做坏了，perfect 是做完美了。',
};

export const words: RootWord[] = [
  {word: 'factory', phonetic: '/ˈfæktəri/', partOfSpeech: 'n.', meaning: '工厂；制造场所'},
  {word: 'manufacture', phonetic: '/ˌmænjuˈfæktʃər/', partOfSpeech: 'v./n.', meaning: '制造；生产'},
  {word: 'facilitate', phonetic: '/fəˈsɪlɪteɪt/', partOfSpeech: 'v.', meaning: '促进；使便利'},
  {word: 'factor', phonetic: '/ˈfæktər/', partOfSpeech: 'n.', meaning: '因素；要素'},
  {word: 'defect', phonetic: '/ˈdiːfekt/', partOfSpeech: 'n.', meaning: '缺陷；瑕疵'},
  {word: 'perfect', phonetic: '/ˈpɜːrfɪkt/', partOfSpeech: 'adj.', meaning: '完美的；极好的'},
  {word: 'affect', phonetic: '/əˈfekt/', partOfSpeech: 'v.', meaning: '影响；作用于'},
  {word: 'effect', phonetic: '/ɪˈfekt/', partOfSpeech: 'n./v.', meaning: '效果；结果；实现'},
];
