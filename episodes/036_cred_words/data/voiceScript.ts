export type VoiceScriptLine = {
  id: string;
  text: string;
  emotionInstruction: string;
  speedHint: string;
  subtitle: string;
  instruction: string;
};

const defaultInstruction =
  '中文口播，抖音英语知识短视频风格，声音清晰有冲击力，节奏快但不要糊，英文单词要读准，中文解释短促有力。';

export const voiceScript: VoiceScriptLine[] = [
  {
    id: 'hook',
    text: '看到 cred，别只会想到 credit。三秒内看懂这串词都在讲相信和信任。',
    emotionInstruction: '开头像抛出限时挑战，语速快，压迫感强，但英文词要清楚。',
    speedHint: 'very-fast-clear',
    subtitle: '看到 cred 别只会想 credit',
    instruction: `${defaultInstruction} cred 要读准，开头像挑战题。`,
  },
  {
    id: 'flash-words',
    text: 'credit，credible，incredible，credentials，credulous。',
    emotionInstruction: '快速闪词，英文清楚，制造信息冲击。',
    speedHint: 'fast',
    subtitle: 'credit / credible / incredible / credentials / credulous',
    instruction: `${defaultInstruction} 五个英文词之间略停顿，credentials 和 credulous 要特别读清。`,
  },
  {
    id: 'same-root',
    text: '它们底层都有一个 cred，核心意思就是 believe，相信，信任。',
    emotionInstruction: '像突然拆穿底层逻辑，短促有揭示感。',
    speedHint: 'fast-clear',
    subtitle: '它们都藏着 cred = believe / 相信',
    instruction: `${defaultInstruction} cred 和 believe 要读准，揭示感要强。`,
  },
  {
    id: 'root-ject',
    text: 'cred，核心意思就是 believe，相信，信任。',
    emotionInstruction: '词根砸进画面，稳，短，干脆。',
    speedHint: 'fast-clear',
    subtitle: 'cred = believe / 相信',
    instruction: `${defaultInstruction} cred 要读准，语气像下定义。`,
  },
  {
    id: 'word-reject',
    text: 'credit 最常用，因为别人相信你才给你 credit，就是信用、信任。',
    emotionInstruction: '像一张信用卡划过画面，解释要短促有力。',
    speedHint: 'fast-clear',
    subtitle: 'credit = 被信任 -> 信用',
    instruction: `${defaultInstruction} credit 要读准，信用的落点要干脆。`,
  },
  {
    id: 'word-object',
    text: 'credible，cred 是相信，ible 是 able 可以，可以被相信的，就是可信的。',
    emotionInstruction: '像一个认证标签打上去，推进感要强。',
    speedHint: 'fast-clear',
    subtitle: 'credible = 可以被相信 -> 可信的',
    instruction: `${defaultInstruction} credible 要读准，可信的要清楚。`,
  },
  {
    id: 'word-subject',
    text: 'incredible，in 是 not，credible 是可信的，连起来就是难以置信的。',
    emotionInstruction: '像惊叹号炸开一样，对比感要出来。',
    speedHint: 'fast-clear',
    subtitle: 'incredible = 难以置信 -> 惊人的',
    instruction: `${defaultInstruction} incredible 要读准，惊叹感要出来。`,
  },
  {
    id: 'word-project',
    text: 'credibility，就是 credible 的名词形式，你能被相信的程度，就是可信度。',
    emotionInstruction: '像公信力指数在跳动，解释要快。',
    speedHint: 'fast-clear',
    subtitle: 'credibility = 可信程度 -> 可信度',
    instruction: `${defaultInstruction} credibility 要读准，可信度的落点要干脆。`,
  },
  {
    id: 'word-inject',
    text: 'credentials，是能证明你值得被相信的东西，你的证书、你的资历，就是你 credentials。',
    emotionInstruction: '像翻看一叠证书，短促有力。',
    speedHint: 'fast-clear',
    subtitle: 'credentials = 证明可信的东西 -> 凭证 / 资历',
    instruction: `${defaultInstruction} credentials 要读准，凭证要清楚。`,
  },
  {
    id: 'word-eject',
    text: 'credulous，cred 是相信，ulous 是倾向于，你倾向去相信，就是轻信的、易上当的。',
    emotionInstruction: '像一个人轻易点头相信，干净利落。',
    speedHint: 'fast-clear',
    subtitle: 'credulous = 容易相信 -> 轻信的',
    instruction: `${defaultInstruction} credulous 要读准，轻信感要出来。`,
  },
  {
    id: 'word-abject',
    text: 'incredulous 正好相反，in 是否定，credulous 是轻信，不轻易相信，就是怀疑的。',
    emotionInstruction: '像做一个反转钩子，短促有力。',
    speedHint: 'fast-clear',
    subtitle: 'incredulous = 不轻信 -> 怀疑的',
    instruction: `${defaultInstruction} incredulous 要读准，怀疑感要清楚。`,
  },
  {
    id: 'word-deject',
    text: 'creed，也是 cred 变过来的，你内心最深信不疑的东西，就是信条、信念。',
    emotionInstruction: '像最后一锤定音，结尾要稳。',
    speedHint: 'fast-clear',
    subtitle: 'creed = 深信不疑 -> 信条 / 信念',
    instruction: `${defaultInstruction} creed 要读准，信条要落点。`,
  },
  {
    id: 'grid-connect',
    text: '现在连起来，credit 是别人信你，credible 是你可以被信，credentials 是拿来证明你可信，都离不开 believe。',
    emotionInstruction: '快速总览，把 cred 这条线一口气串起来。',
    speedHint: 'fast',
    subtitle: 'credit / credible / credentials，都围着 believe 转',
    instruction: `${defaultInstruction} 每个英文词都要清楚，不要连成一团。`,
  },
  {
    id: 'summary',
    text: '记住这一句，cred 就是 believe，相信，信任。',
    emotionInstruction: '像口号一样总结，短，稳，能留下记忆点。',
    speedHint: 'fast-clear',
    subtitle: 'cred = believe / 相信',
    instruction: `${defaultInstruction} 总结要稳，cred 和 believe 要读准。`,
  },
  {
    id: 'outro',
    text: '下次看到带 cred 的词，先问一句，它跟相信还是跟信任有关。',
    emotionInstruction: '收尾自然但有启发感，干净利落。',
    speedHint: 'medium-fast',
    subtitle: '看到 cred，先想：信什么？凭什么信？',
    instruction: `${defaultInstruction} 收尾自然，留下一句记忆问题。`,
  },
];
