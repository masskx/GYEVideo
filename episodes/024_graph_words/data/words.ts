export type RootWord = {
  word: string;
  phonetic: string;
  partOfSpeech: string;
  meaning: string;
};

export const rootInfo = {
  root: 'graph',
  meaning: 'write / record / 写，记录',
  explanation:
    'graph 像把东西写下来、刻下来、记下来：autograph 是亲手写，photograph 是光写下图像，paragraph 是一段写出来的话，telegraph 是远距离写消息，biography 是把一生记下来。',
};

export const words: RootWord[] = [
  {word: 'autograph', phonetic: '/ˈɔːtəɡræf/', partOfSpeech: 'n./v.', meaning: '签名；亲手写下'},
  {word: 'photograph', phonetic: '/ˈfoʊtəɡræf/', partOfSpeech: 'n./v.', meaning: '照片；把光记录下来'},
  {word: 'paragraph', phonetic: '/ˈpærəɡræf/', partOfSpeech: 'n.', meaning: '段落；写成一段'},
  {word: 'telegraph', phonetic: '/ˈtelɪɡræf/', partOfSpeech: 'n./v.', meaning: '电报；远距离传写消息'},
  {word: 'biography', phonetic: '/baɪˈɑːɡrəfi/', partOfSpeech: 'n.', meaning: '传记；把一生记录下来'},
  {word: 'graphic', phonetic: '/ˈɡræfɪk/', partOfSpeech: 'adj.', meaning: '图形的；写得画面感很强'},
  {word: 'graphics', phonetic: '/ˈɡræfɪks/', partOfSpeech: 'n.', meaning: '图像；记录成可视化内容'},
  {word: 'graphology', phonetic: '/ɡrəˈfɑːlədʒi/', partOfSpeech: 'n.', meaning: '笔迹学；从书写做判断'},
];
