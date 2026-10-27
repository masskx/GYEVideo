export type VoiceScriptLine = {
  id: string;
  text: string;
  emotionInstruction: string;
  speedHint: string;
  subtitle: string;
  instruction: string;
};

const defaultInstruction =
  '中文口播，抖音英语知识视频风格，声音清晰有冲击力，节奏快但不要糊，英文单词要读准，中文解释短促有力。';

export const voiceScript: VoiceScriptLine[] = [
  {
    id: 'hook',
    text: 'autograph 不只是明星签名，它背后其实是写下来和记下来。',
    emotionInstruction: '开头像突然纠正一个常见误解，短促有悬念。',
    speedHint: 'very-fast-clear',
    subtitle: 'autograph 不只是“签名”',
    instruction: `${defaultInstruction} autograph 要读准，开头要强，要有纠错感。`,
  },
  {
    id: 'flash-words',
    text: 'autograph，photograph，paragraph，telegraph，biography。',
    emotionInstruction: '快速闪词，英文清晰，制造信息冲击。',
    speedHint: 'fast',
    subtitle: 'autograph / photograph / paragraph / telegraph / biography',
    instruction: `${defaultInstruction} 英文之间略停顿，autograph、photograph、paragraph 要区分清楚。`,
  },
  {
    id: 'same-root',
    text: '它们不是孤立单词，背后都藏着 graph，write，record，写，记录。',
    emotionInstruction: '揭秘感，把一串词突然串起来。',
    speedHint: 'fast-clear',
    subtitle: '它们都围着“写”和“记录”',
    instruction: `${defaultInstruction} graph、write、record 要读准，要有揭示感。`,
  },
  {
    id: 'root-ject',
    text: 'graph，核心意思就是 write，record，写，记录。',
    emotionInstruction: '词根砸入画面，短促坚定。',
    speedHint: 'fast-clear',
    subtitle: 'graph = write / record / 写，记录',
    instruction: `${defaultInstruction} graph、write、record 要读准。`,
  },
  {
    id: 'word-reject',
    text: 'autograph，auto 是自己，graph 是写，自己亲手写下，就是签名。',
    emotionInstruction: '像拆开词根公式，清楚利落。',
    speedHint: 'fast-clear',
    subtitle: 'autograph = 亲手写下 → 签名',
    instruction: `${defaultInstruction} autograph 要读准，签名要讲得干净有力。`,
  },
  {
    id: 'word-object',
    text: 'photograph，就是把光写下来，记下来，所以既是照片，也可以是拍摄。',
    emotionInstruction: '把拍照讲成光在替你做记录。',
    speedHint: 'fast-clear',
    subtitle: 'photograph = 把光记下来 → 照片 / 拍摄',
    instruction: `${defaultInstruction} photograph 要读准，照片和拍摄都要落点。`,
  },
  {
    id: 'word-subject',
    text: 'paragraph，就是把内容写成一整段，所以是段落。',
    emotionInstruction: '像把散乱句子收拢成一个段落。',
    speedHint: 'fast-clear',
    subtitle: 'paragraph = 写成一段 → 段落',
    instruction: `${defaultInstruction} paragraph 要读准，段落要短促清晰。`,
  },
  {
    id: 'word-project',
    text: 'telegraph，tele 是远，graph 是写，远距离把消息写过去，就是电报。',
    emotionInstruction: '把电报讲成远处也能落字。',
    speedHint: 'fast-clear',
    subtitle: 'telegraph = 远距离写消息 → 电报',
    instruction: `${defaultInstruction} telegraph 要读准，电报要有速度感。`,
  },
  {
    id: 'word-inject',
    text: 'biography，bio 是生命，graphy 是记录，把一个人的一生写下来，就是传记。',
    emotionInstruction: '把传记讲成把人生压缩成可读记录。',
    speedHint: 'fast-clear',
    subtitle: 'biography = 把一生记下来 → 传记',
    instruction: `${defaultInstruction} biography 要读准，传记要落点。`,
  },
  {
    id: 'word-eject',
    text: 'graphic，就是写得像画出来一样，或者直接做成图形，所以是图形的，也能表示画面感强。',
    emotionInstruction: '语气干脆一点，把画面感一下打出来。',
    speedHint: 'fast-clear',
    subtitle: 'graphic = 写得像画出来 → 图形的 / 生动的',
    instruction: `${defaultInstruction} graphic 要读准，图形和生动都要清楚。`,
  },
  {
    id: 'word-abject',
    text: 'graphics，就是把信息记录成图像化内容，所以是图像或者图形设计。',
    emotionInstruction: '简洁一点，像信息直接变成图。',
    speedHint: 'fast-clear',
    subtitle: 'graphics = 记录成图像 → 图像 / 图形设计',
    instruction: `${defaultInstruction} graphics 要读准，图像要清楚。`,
  },
  {
    id: 'word-deject',
    text: 'graphology，就是看一个人怎么写字，再做判断，所以是笔迹学。',
    emotionInstruction: '轻快收住，但要把从书写看人的感觉讲出来。',
    speedHint: 'fast-clear',
    subtitle: 'graphology = 从书写判断 → 笔迹学',
    instruction: `${defaultInstruction} graphology 要读准，不要拖太长。`,
  },
  {
    id: 'grid-connect',
    text: '现在串起来，autograph 是亲手写，paragraph 是写成一段，telegraph 是远距离写消息，biography 是把人生记下来。',
    emotionInstruction: '快速总览，把写和记录这条线连起来。',
    speedHint: 'fast',
    subtitle: 'autograph / telegraph / biography，都围着 write 和 record 转',
    instruction: `${defaultInstruction} 每个英文词都要清楚，不要念成一团。`,
  },
  {
    id: 'summary',
    text: '记住这一句，graph 等于 write，record，写，记录。',
    emotionInstruction: '总结像口号，有记忆点。',
    speedHint: 'fast-clear',
    subtitle: 'graph = write / record: 写，记录',
    instruction: `${defaultInstruction} 总结要稳，graph、write、record 读准。`,
  },
  {
    id: 'outro',
    text: '下次看到 graph，先想，这个词写下了什么，记录了什么。',
    emotionInstruction: '收尾有启发感，干净利落。',
    speedHint: 'medium-fast',
    subtitle: '看到 graph，先想：写下了什么？',
    instruction: `${defaultInstruction} 收尾自然，留下一句记忆问题。`,
  },
];
