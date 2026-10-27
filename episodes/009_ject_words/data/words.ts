export type RootWord = {
  word: string;
  phonetic: string;
  partOfSpeech: string;
  meaning: string;
};

export const rootInfo = {
  root: '-ject',
  meaning: 'throw / 扔，投',
  explanation: 'ject 像一个动作：把东西扔出去、投出去、抛进去，方向一变，单词意思就变。',
};

export const words: RootWord[] = [
  {word: 'reject', phonetic: '/rɪˈdʒekt/', partOfSpeech: 'v.', meaning: '拒绝；扔回去'},
  {word: 'object', phonetic: '/ˈɑːbdʒekt/', partOfSpeech: 'n.', meaning: '物体；被扔在面前的东西'},
  {word: 'subject', phonetic: '/ˈsʌbdʒekt/', partOfSpeech: 'n.', meaning: '主题；被放到下面讨论的东西'},
  {word: 'project', phonetic: '/prəˈdʒekt/', partOfSpeech: 'v./n.', meaning: '投射；项目'},
  {word: 'inject', phonetic: '/ɪnˈdʒekt/', partOfSpeech: 'v.', meaning: '注入；扔进去'},
  {word: 'eject', phonetic: '/ɪˈdʒekt/', partOfSpeech: 'v.', meaning: '弹出；扔出去'},
  {word: 'deject', phonetic: '/dɪˈdʒekt/', partOfSpeech: 'v.', meaning: '使沮丧；情绪被往下扔'},
  {word: 'trajectory', phonetic: '/trəˈdʒektəri/', partOfSpeech: 'n.', meaning: '轨迹；被投出去的路线'},
];
