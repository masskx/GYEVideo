export type RootWord = {
  word: string;
  phonetic: string;
  partOfSpeech: string;
  meaning: string;
};

export const rootInfo = {
  root: 'path',
  meaning: 'feeling / suffering / 感受，痛苦',
  explanation:
    'path 在这一组里不是路径，而是感受、情绪、受苦：sympathy 是一起感受，empathy 是感同身受，apathy 是没有感觉，pathetic 是让人产生怜悯感，pathology 后来延伸为病理。',
};

export const words: RootWord[] = [
  {word: 'sympathy', phonetic: '/ˈsɪmpəθi/', partOfSpeech: 'n.', meaning: '同情；一起感受别人的痛苦'},
  {word: 'empathy', phonetic: '/ˈempəθi/', partOfSpeech: 'n.', meaning: '共情；感同身受'},
  {word: 'apathy', phonetic: '/ˈæpəθi/', partOfSpeech: 'n.', meaning: '冷漠；没有感觉'},
  {word: 'pathetic', phonetic: '/pəˈθetɪk/', partOfSpeech: 'adj.', meaning: '可怜的；引发怜悯感的'},
  {word: 'pathology', phonetic: '/pəˈθɑːlədʒi/', partOfSpeech: 'n.', meaning: '病理学；疾病状态与痛苦机制'},
  {word: 'antipathy', phonetic: '/ænˈtɪpəθi/', partOfSpeech: 'n.', meaning: '反感；对某人某物的强烈厌恶'},
  {word: 'telepathy', phonetic: '/təˈlepəθi/', partOfSpeech: 'n.', meaning: '心灵感应；跨距离感受到对方想法'},
  {word: 'sociopath', phonetic: '/ˈsoʊsiəpæθ/', partOfSpeech: 'n.', meaning: '反社会人格者；对他人感受缺失的人'},
];
