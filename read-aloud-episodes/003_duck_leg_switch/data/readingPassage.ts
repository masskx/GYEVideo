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
  episodeId: '003_duck_leg_switch',
  title: '鹅腿阿姨鸭腿翻车，12 个词记住信任崩塌',
  topicLabel: '情景式背单词',
  challengeLabel: '30秒记12词',
  sourceText:
    '鹅腿阿姨卖了这么多年的鹅腿居然是鸭腿假冒的，用 stall, loyal, suspect, substitute, disguise, expose, outrage, supplier, deceive, refund, scandal, apology 串起夜宵摊翻车现场。',
  sceneHook: '一个熟人夜宵摊从排队神话变成鸭腿假冒现场，信任感当场碎掉。',
  memoryLine: '摊位 -> 信任 -> 怀疑 -> 假冒 -> 曝光 -> 愤怒 -> 退款道歉',
  storyLines: [
    {
      id: 'l1',
      tokens: [
        {type: 'text', text: '小区门口的鹅腿阿姨，靠一个夜宵 '},
        {type: 'word', wordId: 'stall'},
        {type: 'text', text: ' 火了好多年。'},
      ],
    },
    {
      id: 'l2',
      tokens: [
        {type: 'text', text: '老顾客一直很 '},
        {type: 'word', wordId: 'loyal'},
        {type: 'text', text: '，直到有人 '},
        {type: 'word', wordId: 'suspect'},
        {type: 'text', text: ' 肉味不对。'},
      ],
    },
    {
      id: 'l3',
      tokens: [
        {type: 'text', text: '检测一出，所谓鹅腿居然是鸭腿 '},
        {type: 'word', wordId: 'substitute'},
        {type: 'text', text: '。'},
      ],
    },
    {
      id: 'l4',
      tokens: [
        {type: 'text', text: '她把鸭腿 '},
        {type: 'word', wordId: 'disguise'},
        {type: 'text', text: ' 成鹅腿，价格还照收。'},
      ],
    },
    {
      id: 'l5',
      tokens: [
        {type: 'text', text: '消息被 '},
        {type: 'word', wordId: 'expose'},
        {type: 'text', text: ' 后，排队群瞬间 '},
        {type: 'word', wordId: 'outrage'},
        {type: 'text', text: '。'},
      ],
    },
    {
      id: 'l6',
      tokens: [
        {type: 'text', text: '阿姨说是 '},
        {type: 'word', wordId: 'supplier'},
        {type: 'text', text: ' 搞错，可大家觉得被 '},
        {type: 'word', wordId: 'deceive'},
        {type: 'text', text: '。'},
      ],
    },
    {
      id: 'l7',
      tokens: [
        {type: 'text', text: '有人要 '},
        {type: 'word', wordId: 'refund'},
        {type: 'text', text: '，说这是夜市 '},
        {type: 'word', wordId: 'scandal'},
        {type: 'text', text: '，最后发 '},
        {type: 'word', wordId: 'apology'},
        {type: 'text', text: '。'},
      ],
    },
  ],
  targetWords: [
    {
      id: 'stall',
      word: 'stall',
      phonetic: '/stɔːl/',
      partOfSpeech: 'n.',
      meaning: '摊位，小摊',
      scenePhrase: '夜宵小摊爆火',
      sceneMeaning: '不是大店，是小区门口那个大家都认识的摊。',
      order: 1,
    },
    {
      id: 'loyal',
      word: 'loyal',
      phonetic: '/ˈlɔɪəl/',
      partOfSpeech: 'adj.',
      meaning: '忠诚的，铁杆的',
      scenePhrase: '老顾客一直相信她',
      sceneMeaning: '多年回购的人，信任感已经很深。',
      order: 2,
    },
    {
      id: 'suspect',
      word: 'suspect',
      phonetic: '/səˈspekt/',
      partOfSpeech: 'v.',
      meaning: '怀疑',
      scenePhrase: '开始觉得肉味不对',
      sceneMeaning: '不是确定翻车，是心里先冒出不对劲。',
      order: 3,
    },
    {
      id: 'substitute',
      word: 'substitute',
      phonetic: '/ˈsʌbstɪtuːt/',
      partOfSpeech: 'n./v.',
      meaning: '替代品；替代',
      scenePhrase: '鸭腿替代鹅腿',
      sceneMeaning: '真正卖出的东西，不是招牌上写的东西。',
      order: 4,
    },
    {
      id: 'disguise',
      word: 'disguise',
      phonetic: '/dɪsˈɡaɪz/',
      partOfSpeech: 'v./n.',
      meaning: '伪装，假扮',
      scenePhrase: '把鸭腿伪装成鹅腿',
      sceneMeaning: '外表和叫法都包装过，让人以为是真的。',
      order: 5,
    },
    {
      id: 'expose',
      word: 'expose',
      phonetic: '/ɪkˈspoʊz/',
      partOfSpeech: 'v.',
      meaning: '曝光，揭露',
      scenePhrase: '检测结果被发出来',
      sceneMeaning: '藏着的事被摊到所有人面前。',
      order: 6,
    },
    {
      id: 'outrage',
      word: 'outrage',
      phonetic: '/ˈaʊtreɪdʒ/',
      partOfSpeech: 'n./v.',
      meaning: '愤怒，激怒',
      scenePhrase: '排队群瞬间炸锅',
      sceneMeaning: '被骗后的火气，不是普通吐槽。',
      order: 7,
    },
    {
      id: 'supplier',
      word: 'supplier',
      phonetic: '/səˈplaɪər/',
      partOfSpeech: 'n.',
      meaning: '供应商',
      scenePhrase: '阿姨说供应商搞错',
      sceneMeaning: '把锅推给供货那一环。',
      order: 8,
    },
    {
      id: 'deceive',
      word: 'deceive',
      phonetic: '/dɪˈsiːv/',
      partOfSpeech: 'v.',
      meaning: '欺骗',
      scenePhrase: '大家觉得被欺骗',
      sceneMeaning: '伤人的不是鸭腿，是多年信任被拿来赚钱。',
      order: 9,
    },
    {
      id: 'refund',
      word: 'refund',
      phonetic: '/ˈriːfʌnd/',
      partOfSpeech: 'n./v.',
      meaning: '退款；退钱',
      scenePhrase: '老顾客要求退钱',
      sceneMeaning: '花鹅腿的钱买到鸭腿，第一反应就是退。',
      order: 10,
    },
    {
      id: 'scandal',
      word: 'scandal',
      phonetic: '/ˈskændl/',
      partOfSpeech: 'n.',
      meaning: '丑闻，丑事',
      scenePhrase: '夜市信任丑闻',
      sceneMeaning: '不只是一个摊的问题，已经变成大家围观的翻车事件。',
      order: 11,
    },
    {
      id: 'apology',
      word: 'apology',
      phonetic: '/əˈpɑːlədʒi/',
      partOfSpeech: 'n.',
      meaning: '道歉',
      scenePhrase: '最后发出道歉',
      sceneMeaning: '事情闹大后，必须给顾客一个说法。',
      order: 12,
    },
  ],
};
