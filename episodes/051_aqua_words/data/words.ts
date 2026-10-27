export type RootWord = {
  word: string;
  phonetic: string;
  partOfSpeech: string;
  meaning: string;
  rootChunk?: string;
};

export const rootInfo = {
  root: '-aqua / -aque',
  meaning: 'water / 水',
  explanation:
    'aqua / aque 这条线，核心就是 water，水。aquatic 是水里的，aquarium 是装水养东西的地方，aqueous 是含水的，aqueduct 是把水引过去的通道，subaqueous 是水下的。',
};

export const words: RootWord[] = [
  {word: 'aquatic', rootChunk: 'aqua', phonetic: '/əˈkwætɪk/', partOfSpeech: 'adj.', meaning: '水生的；水里的'},
  {word: 'aquarium', rootChunk: 'aqua', phonetic: '/əˈkweriəm/', partOfSpeech: 'n.', meaning: '水族馆；鱼缸'},
  {word: 'aqueous', rootChunk: 'aque', phonetic: '/ˈeɪkwiəs/', partOfSpeech: 'adj.', meaning: '含水的；水的'},
  {word: 'aqueduct', rootChunk: 'aqua', phonetic: '/ˈækwɪdʌkt/', partOfSpeech: 'n.', meaning: '渡槽；引水渠'},
  {word: 'subaqueous', rootChunk: 'aque', phonetic: '/sʌbˈeɪkwiəs/', partOfSpeech: 'adj.', meaning: '水下的'},
  {word: 'aquifer', rootChunk: 'aqui', phonetic: '/ˈækwɪfər/', partOfSpeech: 'n.', meaning: '含水层'},
  {word: 'aquamarine', rootChunk: 'aqua', phonetic: '/ˌækwəməˈriːn/', partOfSpeech: 'adj./n.', meaning: '海蓝色的；海蓝宝石'},
];
