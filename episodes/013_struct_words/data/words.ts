export type RootWord = {
  word: string;
  phonetic: string;
  partOfSpeech: string;
  meaning: string;
};

export const rootInfo = {
  root: '-struct',
  meaning: 'build / 建造',
  explanation:
    'struct 像一层层把东西搭起来：建起来是 construct，往脑子里搭步骤是 instruct，挡住搭建是 obstruct，拆掉结构是 destruct，重新搭就是 reconstruct。',
};

export const words: RootWord[] = [
  {word: 'structure', phonetic: '/ˈstrʌktʃər/', partOfSpeech: 'n.', meaning: '结构；搭起来的东西'},
  {word: 'construct', phonetic: '/kənˈstrʌkt/', partOfSpeech: 'v.', meaning: '建造；搭建起来'},
  {word: 'instruct', phonetic: '/ɪnˈstrʌkt/', partOfSpeech: 'v.', meaning: '指导；把步骤搭进脑子'},
  {word: 'obstruct', phonetic: '/əbˈstrʌkt/', partOfSpeech: 'v.', meaning: '阻碍；挡住建造或通路'},
  {word: 'destruct', phonetic: '/dɪˈstrʌkt/', partOfSpeech: 'v.', meaning: '破坏；拆掉结构'},
  {word: 'reconstruct', phonetic: '/ˌriːkənˈstrʌkt/', partOfSpeech: 'v.', meaning: '重建；重新搭起来'},
  {word: 'structural', phonetic: '/ˈstrʌktʃərəl/', partOfSpeech: 'adj.', meaning: '结构的；结构性的'},
  {word: 'instruction', phonetic: '/ɪnˈstrʌkʃn/', partOfSpeech: 'n.', meaning: '指令，说明；搭好的步骤'},
];
