export type RootWord = {
  word: string;
  phonetic: string;
  partOfSpeech: string;
  meaning: string;
  rootChunk?: string;
};

export const rootInfo = {
  root: '-ped / -pod',
  meaning: 'foot / 脚',
  explanation:
    'ped / pod 这条线，核心是脚。pedal 是脚踩，pedestrian 是走路的人，impede 是把脚卡住，expedite 是把脚放出来让事情加速，podiatrist 是看脚的医生。',
};

export const words: RootWord[] = [
  {word: 'impede', rootChunk: 'ped', phonetic: '/imˈpiːd/', partOfSpeech: 'v.', meaning: '阻碍；把脚卡住'},
  {word: 'expedite', rootChunk: 'ped', phonetic: '/ˈekspədaɪt/', partOfSpeech: 'v.', meaning: '加速；把脚放出来'},
  {word: 'pedal', rootChunk: 'ped', phonetic: '/ˈpedl/', partOfSpeech: 'n./v.', meaning: '脚踏板；用脚踩'},
  {word: 'pedestrian', rootChunk: 'ped', phonetic: '/pəˈdestriən/', partOfSpeech: 'n./adj.', meaning: '行人；普通的'},
  {word: 'pedicure', rootChunk: 'ped', phonetic: '/ˈpedɪkjʊr/', partOfSpeech: 'n./v.', meaning: '修脚；足部护理'},
  {word: 'podiatrist', rootChunk: 'pod', phonetic: '/pəˈdaɪətrɪst/', partOfSpeech: 'n.', meaning: '足科医生；看脚的人'},
  {word: 'pedigree', rootChunk: 'ped', phonetic: '/ˈpedɪɡriː/', partOfSpeech: 'n.', meaning: '血统；一路追脚印'},
];
