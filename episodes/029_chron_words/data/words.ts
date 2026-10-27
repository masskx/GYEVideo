export type RootWord = {
  word: string;
  phonetic: string;
  partOfSpeech: string;
  meaning: string;
};

export const rootInfo = {
  root: 'chron',
  meaning: 'time / 时间',
  explanation:
    'chron 像一切都和时间、顺序、长期持续有关：chronology 是时间顺序，chronic 是持续很久的，synchronize 是把时间对齐，anachronism 是放错时代的东西，chronometer 是精确计时器。',
};

export const words: RootWord[] = [
  {word: 'chronology', phonetic: '/krəˈnɑːlədʒi/', partOfSpeech: 'n.', meaning: '编年史；时间顺序'},
  {word: 'chronic', phonetic: '/ˈkrɑːnɪk/', partOfSpeech: 'adj.', meaning: '长期的；拖很久的'},
  {word: 'synchronize', phonetic: '/ˈsɪŋkrənaɪz/', partOfSpeech: 'v.', meaning: '同步；把时间对齐'},
  {word: 'chronological', phonetic: '/ˌkrɑːnəˈlɑːdʒɪkl/', partOfSpeech: 'adj.', meaning: '按时间顺序的'},
  {word: 'chronicle', phonetic: '/ˈkrɑːnɪkl/', partOfSpeech: 'n./v.', meaning: '编年记录；按时间记下来'},
  {word: 'anachronism', phonetic: '/əˈnækrənɪzəm/', partOfSpeech: 'n.', meaning: '时代错误；放错时间的东西'},
  {word: 'chronometer', phonetic: '/krəˈnɑːmɪtər/', partOfSpeech: 'n.', meaning: '精密计时器'},
  {word: 'diachronic', phonetic: '/ˌdaɪəˈkrɑːnɪk/', partOfSpeech: 'adj.', meaning: '历时的；跨时间变化的'},
];
