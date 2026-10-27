export type RootWord = {
  word: string;
  phonetic: string;
  partOfSpeech: string;
  meaning: string;
};

export const rootInfo = {
  root: 'meter / metr',
  meaning: 'measure / 测量',
  explanation:
    'meter 和 metr 像一切都围着"测量"转：diameter 是直径，perimeter 是周长，symmetry 是对称，geometry 是几何，barometer 是气压计。',
};

export const words: RootWord[] = [
  {word: 'diameter', phonetic: '/daɪˈæmɪtər/', partOfSpeech: 'n.', meaning: '直径'},
  {word: 'perimeter', phonetic: '/pəˈrɪmɪtər/', partOfSpeech: 'n.', meaning: '周长'},
  {word: 'symmetry', phonetic: '/ˈsɪmətri/', partOfSpeech: 'n.', meaning: '对称；匀称'},
  {word: 'geometry', phonetic: '/dʒiˈɑːmətri/', partOfSpeech: 'n.', meaning: '几何；几何学'},
  {word: 'barometer', phonetic: '/bəˈrɑːmɪtər/', partOfSpeech: 'n.', meaning: '气压计；晴雨表'},
  {word: 'speedometer', phonetic: '/spiːˈdɑːmɪtər/', partOfSpeech: 'n.', meaning: '速度计；测速表'},
  {word: 'parameter', phonetic: '/pəˈræmɪtər/', partOfSpeech: 'n.', meaning: '参数；界限'},
  {word: 'metric', phonetic: '/ˈmetrɪk/', partOfSpeech: 'adj./n.', meaning: '公制的；度量标准'},
];
