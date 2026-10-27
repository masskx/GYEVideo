export type RootWord = {
  word: string;
  phonetic: string;
  partOfSpeech: string;
  meaning: string;
  rootChunk?: string;
};

export const rootInfo = {
  root: '-man / -manu',
  meaning: 'hand / 手',
  explanation:
    'man / manu 这条线，核心是手。manual 是手册，manufacture 是手工制造，manage 是手管，manuscript 是手写稿。',
};

export const words: RootWord[] = [
  {word: 'manual', rootChunk: 'manu', phonetic: '/ˈmænjuəl/', partOfSpeech: 'adj./n.', meaning: '手工的；手册'},
  {word: 'manufacture', rootChunk: 'manu', phonetic: '/ˌmænjuˈfæktʃər/', partOfSpeech: 'v./n.', meaning: '制造；生产'},
  {word: 'manage', rootChunk: 'man', phonetic: '/ˈmænɪdʒ/', partOfSpeech: 'v.', meaning: '管理；设法做到'},
  {word: 'manager', rootChunk: 'man', phonetic: '/ˈmænɪdʒər/', partOfSpeech: 'n.', meaning: '经理；管理者'},
  {word: 'manuscript', rootChunk: 'manu', phonetic: '/ˈmænjuskrɪpt/', partOfSpeech: 'n.', meaning: '手稿；原稿'},
  {word: 'manipulate', rootChunk: 'mani', phonetic: '/məˈnɪpjuleɪt/', partOfSpeech: 'v.', meaning: '操纵；操作'},
  {word: 'manner', rootChunk: 'man', phonetic: '/ˈmænər/', partOfSpeech: 'n.', meaning: '方式；举止'},
  {word: 'mandate', rootChunk: 'man', phonetic: '/ˈmændeɪt/', partOfSpeech: 'n./v.', meaning: '授权；命令'},
];
