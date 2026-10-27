export type RootWord = {
  word: string;
  phonetic: string;
  partOfSpeech: string;
  meaning: string;
};

export const rootInfo = {
  root: 'phon',
  meaning: 'sound / voice / 声音',
  explanation:
    'phon 像声音一出来就能被听见：phone 是传声，microphone 是放大声音，phonics 是声音规则，symphony 是声音合在一起，cacophony 是难听地挤在一起。',
};

export const words: RootWord[] = [
  {word: 'phone', phonetic: '/foʊn/', partOfSpeech: 'n.', meaning: '电话；传声音的东西'},
  {word: 'microphone', phonetic: '/ˈmaɪkrəfoʊn/', partOfSpeech: 'n.', meaning: '麦克风；把小声音放大'},
  {word: 'phonics', phonetic: '/ˈfɑːnɪks/', partOfSpeech: 'n.', meaning: '自然拼读；字母和声音的规则'},
  {word: 'symphony', phonetic: '/ˈsɪmfəni/', partOfSpeech: 'n.', meaning: '交响乐；声音一起响'},
  {word: 'cacophony', phonetic: '/kəˈkɑːfəni/', partOfSpeech: 'n.', meaning: '刺耳噪音；坏声音挤成一团'},
  {word: 'euphony', phonetic: '/ˈjuːfəni/', partOfSpeech: 'n.', meaning: '悦耳；好听的声音'},
  {word: 'xylophone', phonetic: '/ˈzaɪləfoʊn/', partOfSpeech: 'n.', meaning: '木琴；敲出来的声音'},
  {word: 'phonograph', phonetic: '/ˈfoʊnəɡræf/', partOfSpeech: 'n.', meaning: '留声机；把声音记录下来'},
];
