export type RootWord = {
  word: string;
  phonetic: string;
  partOfSpeech: string;
  meaning: string;
};

export const rootInfo = {
  root: '-scope',
  meaning: 'look / observe / 看，观察',
  explanation:
    'scope 像一切都围着"看、观察"转：telescope 是望远镜，microscope 是显微镜，periscope 是潜望镜，stethoscope 是听诊器，kaleidoscope 是万花筒。',
};

export const words: RootWord[] = [
  {word: 'telescope', phonetic: '/ˈtelɪskoʊp/', partOfSpeech: 'n.', meaning: '望远镜'},
  {word: 'microscope', phonetic: '/ˈmaɪkrəskoʊp/', partOfSpeech: 'n.', meaning: '显微镜'},
  {word: 'periscope', phonetic: '/ˈperɪskoʊp/', partOfSpeech: 'n.', meaning: '潜望镜'},
  {word: 'stethoscope', phonetic: '/ˈsteθəskoʊp/', partOfSpeech: 'n.', meaning: '听诊器'},
  {word: 'kaleidoscope', phonetic: '/kəˈlaɪdəskoʊp/', partOfSpeech: 'n.', meaning: '万花筒'},
  {word: 'horoscope', phonetic: '/ˈhɔːrəskoʊp/', partOfSpeech: 'n.', meaning: '星座运势；星象'},
  {word: 'scope', phonetic: '/skoʊp/', partOfSpeech: 'n.', meaning: '范围；眼界；（观察的）覆盖面'},
  {word: 'macroscopic', phonetic: '/ˌmækrəˈskɑːpɪk/', partOfSpeech: 'adj.', meaning: '宏观的；肉眼可见的'},
];
