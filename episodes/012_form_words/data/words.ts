export type RootWord = {
  word: string;
  phonetic: string;
  partOfSpeech: string;
  meaning: string;
};

export const rootInfo = {
  root: '-form',
  meaning: 'shape / 形状，形成',
  explanation:
    'form 像一个东西的外形：同一种形状就是 uniform，跟着同一种形状就是 conform，重新形成就是 reform，彻底变形就是 transform。',
};

export const words: RootWord[] = [
  {word: 'form', phonetic: '/fɔːrm/', partOfSpeech: 'n./v.', meaning: '形式，形状；形成'},
  {word: 'uniform', phonetic: '/ˈjuːnɪfɔːrm/', partOfSpeech: 'n./adj.', meaning: '制服；统一的形状'},
  {word: 'conform', phonetic: '/kənˈfɔːrm/', partOfSpeech: 'v.', meaning: '遵守，符合；跟同一形状'},
  {word: 'reform', phonetic: '/rɪˈfɔːrm/', partOfSpeech: 'v./n.', meaning: '改革；重新形成'},
  {word: 'transform', phonetic: '/trænsˈfɔːrm/', partOfSpeech: 'v.', meaning: '改变，转变；改变形状'},
  {word: 'perform', phonetic: '/pərˈfɔːrm/', partOfSpeech: 'v.', meaning: '执行，表演；做成一个动作'},
  {word: 'inform', phonetic: '/ɪnˈfɔːrm/', partOfSpeech: 'v.', meaning: '通知；让信息成形进入脑子'},
  {word: 'formula', phonetic: '/ˈfɔːrmjələ/', partOfSpeech: 'n.', meaning: '公式，配方；固定形式'},
];
