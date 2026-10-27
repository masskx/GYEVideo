export type RootWord = {
  word: string;
  phonetic: string;
  partOfSpeech: string;
  meaning: string;
};

export const rootInfo = {
  root: '-nat',
  meaning: 'birth / born / 出生，天生',
  explanation:
    'nat 像一切都围着"出生、天生"转：native 是出生在当地的，nation 是出生在同一片土地的人，nature 是天生的万物，innate 是天生的能力，renaissance 是文化的新生。',
};

export const words: RootWord[] = [
  {word: 'native', phonetic: '/ˈneɪtɪv/', partOfSpeech: 'adj./n.', meaning: '本地的；土生土长的；本地人'},
  {word: 'nation', phonetic: '/ˈneɪʃən/', partOfSpeech: 'n.', meaning: '国家；民族'},
  {word: 'nature', phonetic: '/ˈneɪtʃər/', partOfSpeech: 'n.', meaning: '自然；天性；本质'},
  {word: 'natural', phonetic: '/ˈnætʃərəl/', partOfSpeech: 'adj.', meaning: '自然的；天生的；正常的'},
  {word: 'innate', phonetic: '/ɪˈneɪt/', partOfSpeech: 'adj.', meaning: '天生的；与生俱来的'},
  {word: 'naive', phonetic: '/naɪˈiːv/', partOfSpeech: 'adj.', meaning: '天真的；幼稚的'},
  {word: 'renaissance', phonetic: '/ˈrenəsɑːns/', partOfSpeech: 'n.', meaning: '文艺复兴；复兴；新生'},
  {word: 'pregnant', phonetic: '/ˈpreɡnənt/', partOfSpeech: 'adj.', meaning: '怀孕的；充满的'},
];
