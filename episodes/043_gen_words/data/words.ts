export type RootWord = {
  word: string;
  phonetic: string;
  partOfSpeech: string;
  meaning: string;
};

export const rootInfo = {
  root: '-gen',
  meaning: 'birth / produce / 出生，产生',
  explanation:
    'gen 像一切都围着"出生、产生"转：generate 是产生，generation 是一代人，gene 是遗传基因，genius 是天生的才华，genuine 是纯正真实的。',
};

export const words: RootWord[] = [
  {word: 'generate', phonetic: '/ˈdʒenəreɪt/', partOfSpeech: 'v.', meaning: '产生；生成；发电'},
  {word: 'generation', phonetic: '/ˌdʒenəˈreɪʃən/', partOfSpeech: 'n.', meaning: '一代人；一辈；产生'},
  {word: 'gene', phonetic: '/dʒiːn/', partOfSpeech: 'n.', meaning: '基因；遗传因子'},
  {word: 'genius', phonetic: '/ˈdʒiːniəs/', partOfSpeech: 'n.', meaning: '天才；天赋；才华'},
  {word: 'genuine', phonetic: '/ˈdʒenjuɪn/', partOfSpeech: 'adj.', meaning: '真正的；真诚的；非伪造的'},
  {word: 'gender', phonetic: '/ˈdʒendər/', partOfSpeech: 'n.', meaning: '性别；性'},
  {word: 'generous', phonetic: '/ˈdʒenərəs/', partOfSpeech: 'adj.', meaning: '慷慨的；大方的；宽厚的'},
  {word: 'genesis', phonetic: '/ˈdʒenəsɪs/', partOfSpeech: 'n.', meaning: '起源；开端；创始'},
];
