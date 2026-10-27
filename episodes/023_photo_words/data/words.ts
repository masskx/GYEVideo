export type RootWord = {
  word: string;
  phonetic: string;
  partOfSpeech: string;
  meaning: string;
};

export const rootInfo = {
  root: 'photo',
  meaning: 'light / 光',
  explanation:
    'photo 像光一照就留下痕迹：photo 是光留下的图像，photograph 是把光记下来，photography 是用光成像，photosynthesis 是借光合成，photogenic 是一见光就好看。',
};

export const words: RootWord[] = [
  {word: 'photo', phonetic: '/ˈfoʊtoʊ/', partOfSpeech: 'n.', meaning: '照片；光留下的图像'},
  {word: 'photograph', phonetic: '/ˈfoʊtəɡræf/', partOfSpeech: 'n./v.', meaning: '照片；把光记下来'},
  {word: 'photography', phonetic: '/fəˈtɑːɡrəfi/', partOfSpeech: 'n.', meaning: '摄影；用光成像'},
  {word: 'photosynthesis', phonetic: '/ˌfoʊtoʊˈsɪnθəsɪs/', partOfSpeech: 'n.', meaning: '光合作用；借光合成'},
  {word: 'photogenic', phonetic: '/ˌfoʊtəˈdʒenɪk/', partOfSpeech: 'adj.', meaning: '上镜；一见光就好看'},
  {word: 'photocopy', phonetic: '/ˈfoʊtoʊkɑːpi/', partOfSpeech: 'n./v.', meaning: '复印；靠光复制'},
  {word: 'photophobia', phonetic: '/ˌfoʊtəˈfoʊbiə/', partOfSpeech: 'n.', meaning: '畏光；怕光'},
  {word: 'photon', phonetic: '/ˈfoʊtɑːn/', partOfSpeech: 'n.', meaning: '光子；一束最小的光'},
];
