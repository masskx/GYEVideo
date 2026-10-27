export type StoryTextToken = {
  type: 'text';
  text: string;
};

export type StoryWordToken = {
  type: 'word';
  wordId: string;
};

export type StoryToken = StoryTextToken | StoryWordToken;

export type StoryLine = {
  id: string;
  tokens: StoryToken[];
};

export type ReadingTargetWord = {
  id: string;
  word: string;
  phonetic: string;
  partOfSpeech: string;
  meaning: string;
  scenePhrase: string;
  sceneMeaning: string;
  order: number;
};

export type ReadingPassage = {
  episodeId: string;
  title: string;
  topicLabel: string;
  challengeLabel: string;
  sourceText: string;
  sceneHook: string;
  memoryLine: string;
  storyLines: StoryLine[];
  targetWords: ReadingTargetWord[];
};

export const readingPassage: ReadingPassage = {
  episodeId: '001_prevalent_habits',
  title: '凌晨两点不闭眼，12 个词记住崩溃感',
  topicLabel: '情景式背单词',
  challengeLabel: '25秒记12词',
  sourceText:
    '当熬夜、刷手机、早八、绩点和崩溃连成一条线，prevalent, obsessed, dread, shatter, exhaustion, haggard, vanish, maintain, endure, vicious, vulnerable, abandon 这些词就有了真实画面。',
  sceneHook: '一个早八人从熬夜到崩溃，再把自己拽回来。',
  memoryLine: '沉迷 -> 恐惧 -> 疲惫 -> 脆弱 -> 不放弃',
  storyLines: [
    {
      id: 'l1',
      tokens: [
        {type: 'text', text: '当熬夜成了我 '},
        {type: 'word', wordId: 'prevalent'},
        {type: 'text', text: ' 的日常，每晚对手机的 '},
        {type: 'word', wordId: 'obsessed'},
      ],
    },
    {
      id: 'l2',
      tokens: [
        {type: 'text', text: '都会让我忘掉被早八支配的 '},
        {type: 'word', wordId: 'dread'},
        {type: 'text', text: '。闹钟一响，直接 '},
        {type: 'word', wordId: 'shatter'},
        {type: 'text', text: ' 美梦。'},
      ],
    },
    {
      id: 'l3',
      tokens: [
        {type: 'text', text: '身体被 '},
        {type: 'word', wordId: 'exhaustion'},
        {type: 'text', text: ' 击穿，镜子里那张 '},
        {type: 'word', wordId: 'haggard'},
        {type: 'text', text: ' 的脸提醒我，体面已经 '},
        {type: 'word', wordId: 'vanish'},
        {type: 'text', text: '。'},
      ],
    },
    {
      id: 'l4',
      tokens: [
        {type: 'text', text: '为了 '},
        {type: 'word', wordId: 'maintain'},
        {type: 'text', text: ' 绩点，我只能 '},
        {type: 'word', wordId: 'endure'},
        {type: 'text', text: ' 教授的催眠。'},
      ],
    },
    {
      id: 'l5',
      tokens: [
        {type: 'text', text: '这种 '},
        {type: 'word', wordId: 'vicious'},
        {type: 'text', text: ' 循环让我越来越 '},
        {type: 'word', wordId: 'vulnerable'},
        {type: 'text', text: '，但我不能直接 '},
        {type: 'word', wordId: 'abandon'},
        {type: 'text', text: ' 自己。'},
      ],
    },
  ],
  targetWords: [
    {
      id: 'prevalent',
      word: 'prevalent',
      phonetic: '/ˈprevələnt/',
      partOfSpeech: 'adj.',
      meaning: '普遍的，盛行的',
      scenePhrase: '熬夜成了普遍日常',
      sceneMeaning: '不是偶尔晚睡，而是天天都这样。',
      order: 1,
    },
    {
      id: 'obsessed',
      word: 'obsessed',
      phonetic: '/əbˈsest/',
      partOfSpeech: 'adj.',
      meaning: '着迷的，沉迷的',
      scenePhrase: '被手机抓住注意力',
      sceneMeaning: '不是喜欢，是停不下来。',
      order: 2,
    },
    {
      id: 'dread',
      word: 'dread',
      phonetic: '/dred/',
      partOfSpeech: 'n./v.',
      meaning: '恐惧，害怕',
      scenePhrase: '一想到早八就发怵',
      sceneMeaning: '还没上课，心里已经开始怕。',
      order: 3,
    },
    {
      id: 'shatter',
      word: 'shatter',
      phonetic: '/ˈʃætər/',
      partOfSpeech: 'v.',
      meaning: '粉碎，打碎',
      scenePhrase: '闹钟粉碎美梦',
      sceneMeaning: '梦不是醒了，是被打碎了。',
      order: 4,
    },
    {
      id: 'exhaustion',
      word: 'exhaustion',
      phonetic: '/ɪɡˈzɔːstʃən/',
      partOfSpeech: 'n.',
      meaning: '筋疲力尽',
      scenePhrase: '身体电量被耗光',
      sceneMeaning: '困到不只是想睡，是整个人没电。',
      order: 5,
    },
    {
      id: 'haggard',
      word: 'haggard',
      phonetic: '/ˈhæɡərd/',
      partOfSpeech: 'adj.',
      meaning: '憔悴的',
      scenePhrase: '脸上写着透支',
      sceneMeaning: '状态差到镜子都藏不住。',
      order: 6,
    },
    {
      id: 'vanish',
      word: 'vanish',
      phonetic: '/ˈvænɪʃ/',
      partOfSpeech: 'v.',
      meaning: '消失',
      scenePhrase: '体面直接消失',
      sceneMeaning: '精致人设一秒没了。',
      order: 7,
    },
    {
      id: 'maintain',
      word: 'maintain',
      phonetic: '/meɪnˈteɪn/',
      partOfSpeech: 'v.',
      meaning: '维持，保持',
      scenePhrase: '硬撑绩点不掉',
      sceneMeaning: '不是变好，只是先别崩。',
      order: 8,
    },
    {
      id: 'endure',
      word: 'endure',
      phonetic: '/ɪnˈdjʊr/',
      partOfSpeech: 'v.',
      meaning: '忍受，坚持',
      scenePhrase: '忍住不逃课',
      sceneMeaning: '难受也先撑过这一段。',
      order: 9,
    },
    {
      id: 'vicious',
      word: 'vicious',
      phonetic: '/ˈvɪʃəs/',
      partOfSpeech: 'adj.',
      meaning: '恶性的',
      scenePhrase: '越累越刷的死循环',
      sceneMeaning: '问题会自己加重，像恶性循环。',
      order: 10,
    },
    {
      id: 'vulnerable',
      word: 'vulnerable',
      phonetic: '/ˈvʌlnərəbl/',
      partOfSpeech: 'adj.',
      meaning: '脆弱的，易受伤的',
      scenePhrase: '情绪防线很薄',
      sceneMeaning: '一点小事就能把你击穿。',
      order: 11,
    },
    {
      id: 'abandon',
      word: 'abandon',
      phonetic: '/əˈbændən/',
      partOfSpeech: 'v.',
      meaning: '放弃，抛弃',
      scenePhrase: '不要把自己丢下',
      sceneMeaning: '最崩的时候，也别直接放弃自己。',
      order: 12,
    },
  ],
};
