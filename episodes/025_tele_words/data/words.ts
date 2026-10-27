export type RootWord = {
  word: string;
  phonetic: string;
  partOfSpeech: string;
  meaning: string;
};

export const rootInfo = {
  root: 'tele',
  meaning: 'far / 远',
  explanation:
    'tele 像把东西拉到远处去：telephone 是远距离传声，telegraph 是远距离传字，television 是远距离看见，telescope 是看远处，teleport 是瞬间传到远方。',
};

export const words: RootWord[] = [
  {word: 'telephone', phonetic: '/ˈtelɪfoʊn/', partOfSpeech: 'n./v.', meaning: '电话；远距离传声音'},
  {word: 'telegraph', phonetic: '/ˈtelɪɡræf/', partOfSpeech: 'n./v.', meaning: '电报；远距离传消息'},
  {word: 'television', phonetic: '/ˈtelɪvɪʒən/', partOfSpeech: 'n.', meaning: '电视；远距离看见'},
  {word: 'telescope', phonetic: '/ˈtelɪskoʊp/', partOfSpeech: 'n.', meaning: '望远镜；看远处'},
  {word: 'teleport', phonetic: '/ˈtelɪpɔːrt/', partOfSpeech: 'v.', meaning: '瞬移；传送到远方'},
  {word: 'telepathy', phonetic: '/təˈlepəθi/', partOfSpeech: 'n.', meaning: '心灵感应；隔很远也能感到'},
  {word: 'telemedicine', phonetic: '/ˌtelɪˈmedɪsɪn/', partOfSpeech: 'n.', meaning: '远程医疗；隔着距离看病'},
  {word: 'telematics', phonetic: '/ˌtelɪˈmætɪks/', partOfSpeech: 'n.', meaning: '远程信息处理；远距离传和管数据'},
];
