export type RootWord = {
  word: string;
  phonetic: string;
  partOfSpeech: string;
  meaning: string;
  rootChunk?: string;
};

export const rootInfo = {
  root: '-luc / -lum / -lumin',
  meaning: 'light / \u5149',
  explanation:
    'luc / lum / lumin \u8fd9\u6761\u7ebf\uff0c\u6838\u5fc3\u662f light\u3002lucid \u662f\u88ab\u5149\u7167\u6e05\uff0ctranslucent \u662f\u8ba9\u5149\u900f\u8fc7\uff0cluminous \u662f\u81ea\u5df1\u53d1\u5149\uff0cilluminate \u662f\u628a\u4e1c\u897f\u7167\u4eae\u3002',
};

export const words: RootWord[] = [
  {word: 'lucid', rootChunk: 'luc', phonetic: '/\u02c8lu\u02d0s\u026ad/', partOfSpeech: 'adj.', meaning: '\u6e05\u6670\u7684\uff1b\u5934\u8111\u6e05\u9192\u7684'},
  {word: 'elucidate', rootChunk: 'luc', phonetic: '/i\u02c8lu\u02d0s\u026ade\u026at/', partOfSpeech: 'v.', meaning: '\u9610\u660e\uff1b\u8bb2\u6e05\u695a'},
  {word: 'translucent', rootChunk: 'luc', phonetic: '/tr\u00e6nz\u02c8lu\u02d0snt/', partOfSpeech: 'adj.', meaning: '\u534a\u900f\u660e\u7684'},
  {word: 'luminous', rootChunk: 'lumin', phonetic: '/\u02c8lu\u02d0m\u026an\u0259s/', partOfSpeech: 'adj.', meaning: '\u53d1\u5149\u7684\uff1b\u660e\u4eae\u7684'},
  {word: 'illuminate', rootChunk: 'lumin', phonetic: '/i\u02c8lu\u02d0m\u026ane\u026at/', partOfSpeech: 'v.', meaning: '\u7167\u4eae\uff1b\u9610\u660e'},
  {word: 'luminary', rootChunk: 'lumin', phonetic: '/\u02c8lu\u02d0m\u026aner\u026a/', partOfSpeech: 'n.', meaning: '\u6770\u51fa\u4eba\u7269\uff1b\u53d1\u5149\u4f53'},
  {word: 'bioluminescence', rootChunk: 'lumin', phonetic: '/\u02ccba\u026ao\u028alu\u02d0m\u026a\u02c8nesns/', partOfSpeech: 'n.', meaning: '\u751f\u7269\u53d1\u5149'},
];
