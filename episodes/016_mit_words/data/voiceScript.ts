export type VoiceScriptLine = {
  id: string;
  text: string;
  emotionInstruction: string;
  speedHint: string;
  subtitle: string;
  instruction: string;
};

const defaultInstruction =
  '中文口播，抖音英语知识视频风格，声音清楚有冲击力，节奏快但不要糊，英文单词读准，中文解释短促有力。';

export const voiceScript: VoiceScriptLine[] = [
  {
    id: 'hook',
    text: 'submit 不只是提交，它背后其实是把东西送出去。',
    emotionInstruction: '开场有反常识打断感，像马上纠正一个常见理解。',
    speedHint: 'very-fast-clear',
    subtitle: 'submit 不只是“提交”',
    instruction: `${defaultInstruction} 开头要强，submit 要读准。`,
  },
  {
    id: 'flash-words',
    text: 'emit，transmit，submit，admit，dismiss。',
    emotionInstruction: '快速闪词，英文清晰，制造信息冲击。',
    speedHint: 'fast',
    subtitle: 'emit / transmit / submit / admit / dismiss',
    instruction: `${defaultInstruction} 英文之间略停顿，transmit 和 submit 要清楚区分。`,
  },
  {
    id: 'same-root',
    text: '它们不是孤立单词，背后都藏着 mit 和 miss，send，发送。',
    emotionInstruction: '揭秘感，强调同一个动作把单词串起来。',
    speedHint: 'fast-clear',
    subtitle: '它们都藏着 send',
    instruction: `${defaultInstruction} mit、miss、send、发送要有力度。`,
  },
  {
    id: 'root-ject',
    text: 'mit 和 miss，核心意思就是 send，发送，派出去。',
    emotionInstruction: '词根砸入画面，短促坚定。',
    speedHint: 'fast-clear',
    subtitle: 'mit / miss = send / 发送',
    instruction: `${defaultInstruction} mit、miss 和 send 要读准，中文要短促。`,
  },
  {
    id: 'word-reject',
    text: 'emit，e 是 out，向外，mit 是发送，向外发送出来，就是发出，排放。',
    emotionInstruction: '像拆开词根公式，清楚利落。',
    speedHint: 'fast-clear',
    subtitle: 'emit = 向外发送 → 发出',
    instruction: `${defaultInstruction} emit 要读准，解释短促。`,
  },
  {
    id: 'word-object',
    text: 'transmit，trans 是 across，跨过去，mit 是发送，跨过去发送，就是传输。',
    emotionInstruction: '画面感强，像信号穿过去。',
    speedHint: 'fast-clear',
    subtitle: 'transmit = 跨过去发送 → 传输',
    instruction: `${defaultInstruction} transmit 要读准，传输要清楚。`,
  },
  {
    id: 'word-subject',
    text: 'submit，sub 是下面，mit 是发送，把东西往下交出去，就是提交。',
    emotionInstruction: '语气稳一点，把方向和动作连上。',
    speedHint: 'fast-clear',
    subtitle: 'submit = 往下发送 → 提交',
    instruction: `${defaultInstruction} submit 稍慢一点，保证听清。`,
  },
  {
    id: 'word-project',
    text: 'admit，ad 是朝里面，mit 是发送，把人送进来，就是准许进入；把事实送进心里，就是承认。',
    emotionInstruction: '重点词要讲出两个含义来自同一动作。',
    speedHint: 'fast-clear',
    subtitle: 'admit = 送进去 → 准许进入 / 承认',
    instruction: `${defaultInstruction} admit 要读准，准许进入和承认要清楚。`,
  },
  {
    id: 'word-inject',
    text: 'commit，com 是一起，mit 是发送，把自己一起送进去，就是投入，承诺。',
    emotionInstruction: '要有把自己投进去的感觉。',
    speedHint: 'fast-clear',
    subtitle: 'commit = 一起送进去 → 投入 / 承诺',
    instruction: `${defaultInstruction} commit 读清楚，不要和 permit 混。`,
  },
  {
    id: 'word-eject',
    text: 'permit，per 有 through，通过，mit 是发送，让它通过发送出去，就是允许，许可。',
    emotionInstruction: '短促直接，像放行。',
    speedHint: 'fast-clear',
    subtitle: 'permit = 让它通过 → 允许',
    instruction: `${defaultInstruction} permit 要读准，允许要落点。`,
  },
  {
    id: 'word-abject',
    text: 'dismiss，dis 是 away，离开，miss 是发送，把人送走，就是解散，也可以是不予考虑。',
    emotionInstruction: '生活化补充词，让观众觉得实用。',
    speedHint: 'fast-clear',
    subtitle: 'dismiss = 送走 → 解散 / 不予考虑',
    instruction: `${defaultInstruction} dismiss 要读准，中文干净。`,
  },
  {
    id: 'word-deject',
    text: 'mission，就是被派出去要完成的事，所以是任务，使命。',
    emotionInstruction: '轻快一点，像给出一秒记住的例子。',
    speedHint: 'fast-clear',
    subtitle: 'mission = 被派出去的事 → 任务',
    instruction: `${defaultInstruction} mission 读准，结尾轻快。`,
  },
  {
    id: 'grid-connect',
    text: '现在串起来：emit 是向外发送，transmit 是跨过去发送，submit 是往下提交，dismiss 是送走。',
    emotionInstruction: '快速总览，把 send 这条线连起来。',
    speedHint: 'fast',
    subtitle: 'emit / transmit / submit / dismiss，都围着 send 转',
    instruction: `${defaultInstruction} 每个英文词都要清楚，不要念成一团。`,
  },
  {
    id: 'summary',
    text: '记住这一句：mit 和 miss 等于 send，发送，派出去。',
    emotionInstruction: '总结像口号，有记忆点。',
    speedHint: 'fast-clear',
    subtitle: 'mit / miss = send：发送，派出去',
    instruction: `${defaultInstruction} 总结要稳，mit、miss 和 send 读准。`,
  },
  {
    id: 'outro',
    text: '下次看到 mit 或 miss，先想：它把什么送到哪里。',
    emotionInstruction: '收尾有启发感，干净利落。',
    speedHint: 'medium-fast',
    subtitle: '看到 mit / miss，先想：送到哪儿？',
    instruction: `${defaultInstruction} 收尾自然，留下一个记忆问题。`,
  },
];
