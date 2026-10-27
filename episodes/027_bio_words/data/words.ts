export type RootWord = {
  word: string;
  phonetic: string;
  partOfSpeech: string;
  meaning: string;
};

export const rootInfo = {
  root: 'bio',
  meaning: 'life / 生命',
  explanation:
    'bio 像一切都和生命有关：biology 是研究生命，biography 是写一个人的生命经历，biodiversity 是不同生命一起存在，antibiotic 是对抗微生物生命。',
};

export const words: RootWord[] = [
  {word: 'biology', phonetic: '/baɪˈɑːlədʒi/', partOfSpeech: 'n.', meaning: '生物学；研究生命'},
  {word: 'biography', phonetic: '/baɪˈɑːɡrəfi/', partOfSpeech: 'n.', meaning: '传记；把一个人的生命写下来'},
  {word: 'biodegradable', phonetic: '/ˌbaɪoʊdɪˈɡreɪdəbl/', partOfSpeech: 'adj.', meaning: '可生物降解的；能被生命分解'},
  {word: 'biodiversity', phonetic: '/ˌbaɪoʊdaɪˈvɜːrsəti/', partOfSpeech: 'n.', meaning: '生物多样性；很多不同生命一起存在'},
  {word: 'antibiotic', phonetic: '/ˌæntibaɪˈɑːtɪk/', partOfSpeech: 'n./adj.', meaning: '抗生素；对抗微生物生命'},
  {word: 'symbiosis', phonetic: '/ˌsɪmbaɪˈoʊsɪs/', partOfSpeech: 'n.', meaning: '共生；不同生命一起活'},
  {word: 'microbiome', phonetic: '/ˈmaɪkroʊbaɪoʊm/', partOfSpeech: 'n.', meaning: '微生物群系；身体里的微小生命群'},
  {word: 'biochemistry', phonetic: '/ˌbaɪoʊˈkemɪstri/', partOfSpeech: 'n.', meaning: '生物化学；生命体里的化学过程'},
];
