export type RootWord = {
  word: string;
  phonetic: string;
  partOfSpeech: string;
  meaning: string;
};

export const rootInfo = {
  root: '-cred',
  meaning: 'believe / 相信',
  explanation:
    'cred 像一切都围着"相信、信任"转：credit 是信用，credible 是可信的，incredible 是难以置信的，credentials 是凭证，credulous 是轻信的。',
};

export const words: RootWord[] = [
  {word: 'credit', phonetic: '/ˈkredɪt/', partOfSpeech: 'n./v.', meaning: '信用；信任；归功于'},
  {word: 'credible', phonetic: '/ˈkredəbəl/', partOfSpeech: 'adj.', meaning: '可信的；可靠的'},
  {word: 'incredible', phonetic: '/ɪnˈkredəbəl/', partOfSpeech: 'adj.', meaning: '难以置信的；惊人的'},
  {word: 'credibility', phonetic: '/ˌkredəˈbɪləti/', partOfSpeech: 'n.', meaning: '可信度；公信力'},
  {word: 'credentials', phonetic: '/krɪˈdenʃəlz/', partOfSpeech: 'n.', meaning: '凭证；资历；证书'},
  {word: 'credulous', phonetic: '/ˈkredʒələs/', partOfSpeech: 'adj.', meaning: '轻信的；易上当的'},
  {word: 'incredulous', phonetic: '/ɪnˈkredʒələs/', partOfSpeech: 'adj.', meaning: '不轻信的；怀疑的'},
  {word: 'creed', phonetic: '/kriːd/', partOfSpeech: 'n.', meaning: '信条；信念；信仰'},
];
