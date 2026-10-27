export type RootWord = {
  word: string;
  phonetic: string;
  partOfSpeech: string;
  meaning: string;
};

export const rootInfo = {
  root: 'geo',
  meaning: 'earth / 地球，土地',
  explanation:
    'geo 像一切都和地球、土地、地面位置有关：geography 是写地表分布，geology 是研究地球和岩层，geometry 最早来自土地测量，geothermal 是地热，geopolitics 是围绕地理位置和土地展开的政治关系。',
};

export const words: RootWord[] = [
  {word: 'geography', phonetic: '/dʒiˈɑːɡrəfi/', partOfSpeech: 'n.', meaning: '地理学；描述地球与地表分布'},
  {word: 'geology', phonetic: '/dʒiˈɑːlədʒi/', partOfSpeech: 'n.', meaning: '地质学；研究地球与岩层'},
  {word: 'geometry', phonetic: '/dʒiˈɑːmətri/', partOfSpeech: 'n.', meaning: '几何学；最早指土地测量'},
  {word: 'geothermal', phonetic: '/ˌdʒiːoʊˈθɜːrməl/', partOfSpeech: 'adj.', meaning: '地热的；来自地球内部热能'},
  {word: 'geocentric', phonetic: '/ˌdʒiːoʊˈsentrɪk/', partOfSpeech: 'adj.', meaning: '以地球为中心的'},
  {word: 'geopolitics', phonetic: '/ˌdʒiːoʊˈpɑːlətɪks/', partOfSpeech: 'n.', meaning: '地缘政治；围绕地理位置和土地的政治关系'},
  {word: 'geotag', phonetic: '/ˈdʒiːoʊtæɡ/', partOfSpeech: 'n./v.', meaning: '地理标签；给内容标上地理位置'},
  {word: 'geosphere', phonetic: '/ˈdʒiːoʊsfɪr/', partOfSpeech: 'n.', meaning: '地球圈层；地球固体部分'},
];
