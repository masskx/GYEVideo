export type RootWord = {
  word: string;
  phonetic: string;
  partOfSpeech: string;
  meaning: string;
};

export const rootInfo = {
  root: '-dict',
  meaning: 'say / 说',
  explanation: 'dict 像一句话被说出来：提前说、反着说、正式说、命令别人照着说。',
};

export const words: RootWord[] = [
  {word: 'predict', phonetic: '/prɪˈdɪkt/', partOfSpeech: 'v.', meaning: '预测；提前说'},
  {word: 'contradict', phonetic: '/ˌkɑːntrəˈdɪkt/', partOfSpeech: 'v.', meaning: '反驳；反着说'},
  {word: 'verdict', phonetic: '/ˈvɜːrdɪkt/', partOfSpeech: 'n.', meaning: '裁决；正式说出的判断'},
  {word: 'dictate', phonetic: '/ˈdɪkteɪt/', partOfSpeech: 'v.', meaning: '命令；口述'},
  {word: 'dictionary', phonetic: '/ˈdɪkʃəneri/', partOfSpeech: 'n.', meaning: '词典；记录词语的书'},
  {word: 'diction', phonetic: '/ˈdɪkʃn/', partOfSpeech: 'n.', meaning: '措辞；说话用词'},
  {word: 'dictation', phonetic: '/dɪkˈteɪʃn/', partOfSpeech: 'n.', meaning: '听写；口述'},
  {word: 'indict', phonetic: '/ɪnˈdaɪt/', partOfSpeech: 'v.', meaning: '起诉；正式指控'},
];
