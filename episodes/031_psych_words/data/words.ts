export type RootWord = {
  word: string;
  phonetic: string;
  partOfSpeech: string;
  meaning: string;
};

export const rootInfo = {
  root: 'psych',
  meaning: 'mind / soul / 心理，灵魂',
  explanation:
    'psych 像一切都和心智、心理、灵魂状态有关：psychology 是研究心理，psyche 是心灵本身，psychic 连着精神或灵异感知，psychosis 是精神失常状态，psychotherapy 是心理治疗。',
};

export const words: RootWord[] = [
  {word: 'psychology', phonetic: '/saɪˈkɑːlədʒi/', partOfSpeech: 'n.', meaning: '心理学；研究心理与行为'},
  {word: 'psyche', phonetic: '/ˈsaɪki/', partOfSpeech: 'n.', meaning: '心灵；灵魂；心理状态'},
  {word: 'psychic', phonetic: '/ˈsaɪkɪk/', partOfSpeech: 'adj./n.', meaning: '精神的；灵媒的；有超感知的'},
  {word: 'psychosis', phonetic: '/saɪˈkoʊsɪs/', partOfSpeech: 'n.', meaning: '精神失常；严重精神障碍状态'},
  {word: 'psychopath', phonetic: '/ˈsaɪkəpæθ/', partOfSpeech: 'n.', meaning: '精神病态者；心理结构异常的人'},
  {word: 'psychotherapy', phonetic: '/ˌsaɪkoʊˈθerəpi/', partOfSpeech: 'n.', meaning: '心理治疗'},
  {word: 'psychosomatic', phonetic: '/ˌsaɪkoʊsəˈmætɪk/', partOfSpeech: 'adj.', meaning: '身心相关的；心理影响身体的'},
  {word: 'psychoanalysis', phonetic: '/ˌsaɪkoʊəˈnæləsɪs/', partOfSpeech: 'n.', meaning: '精神分析'},
];
