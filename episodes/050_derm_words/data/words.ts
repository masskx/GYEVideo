export type RootWord = {
  word: string;
  phonetic: string;
  partOfSpeech: string;
  meaning: string;
  rootChunk?: string;
};

export const rootInfo = {
  root: '-derm / -derma',
  meaning: 'skin / 皮肤',
  explanation:
    'derm / derma 这条线，核心就是 skin，皮肤。dermal 是皮肤的，dermatology 是研究皮肤的学科，dermatologist 是皮肤科医生，epidermis 是最外层皮肤，hypodermic 是扎到皮肤下面，taxidermy 则是处理兽皮做标本。',
};

export const words: RootWord[] = [
  {word: 'dermal', rootChunk: 'derm', phonetic: '/ˈdɜːrməl/', partOfSpeech: 'adj.', meaning: '皮肤的'},
  {word: 'dermatology', rootChunk: 'derm', phonetic: '/ˌdɜːrməˈtɑːlədʒi/', partOfSpeech: 'n.', meaning: '皮肤病学'},
  {word: 'dermatologist', rootChunk: 'derm', phonetic: '/ˌdɜːrməˈtɑːlədʒɪst/', partOfSpeech: 'n.', meaning: '皮肤科医生'},
  {word: 'epidermis', rootChunk: 'derm', phonetic: '/ˌepɪˈdɜːrmɪs/', partOfSpeech: 'n.', meaning: '表皮'},
  {word: 'hypodermic', rootChunk: 'derm', phonetic: '/ˌhaɪpəˈdɜːrmɪk/', partOfSpeech: 'adj.', meaning: '皮下注射的'},
  {word: 'pachyderm', rootChunk: 'derm', phonetic: '/ˈpækidɜːrm/', partOfSpeech: 'n.', meaning: '厚皮动物'},
  {word: 'taxidermy', rootChunk: 'derm', phonetic: '/ˈtæksɪdɜːrmi/', partOfSpeech: 'n.', meaning: '动物标本剥制术'},
];
