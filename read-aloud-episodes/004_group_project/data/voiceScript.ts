export type VoiceScriptLine = {
  id: string;
  text: string;
  emotionInstruction: string;
  speedHint: string;
  subtitle: string;
  instruction: string;
};

const instruction = '自然朗读中英混排文案。中文读中文，遇到英文目标词就读英文。不要解释，不要上课腔，语速适中。';

export const voiceScript: VoiceScriptLine[] = [
  {
    id: 'word-assigned',
    text: '小组作业刚 assigned，',
    emotionInstruction: '直接读正文，像在讲一个刚发生的事，有点无奈。',
    speedHint: 'medium',
    subtitle: 'assigned = 分配',
    instruction,
  },
  {
    id: 'word-contribute',
    text: '群里却没人 contribute。',
    emotionInstruction: '语气带一点苦笑，自嘲感。',
    speedHint: 'medium',
    subtitle: 'contribute = 出力',
    instruction,
  },
  {
    id: 'word-deadline',
    text: 'deadline 逼近，',
    emotionInstruction: '语气沉下来，有压迫感。',
    speedHint: 'medium',
    subtitle: 'deadline = 截止日期',
    instruction,
  },
  {
    id: 'word-overwhelmed',
    text: '你已经 overwhelmed。',
    emotionInstruction: '读出被压着的感觉，微微叹气。',
    speedHint: 'medium',
    subtitle: 'overwhelmed = 被压垮了',
    instruction,
  },
  {
    id: 'word-ghosted',
    text: '催进度全被 ghosted，',
    emotionInstruction: '语气带一点无语，强调"全"。',
    speedHint: 'medium',
    subtitle: 'ghosted = 被无视',
    instruction,
  },
  {
    id: 'word-solo',
    text: '只能 solo 扛。',
    emotionInstruction: '语气坚定但有点心酸。',
    speedHint: 'medium',
    subtitle: 'solo = 单独，一人',
    instruction,
  },
  {
    id: 'word-panic',
    text: 'panic 和 resentment 一起上头。',
    emotionInstruction: '语气快一点，像心跳加速。',
    speedHint: 'medium',
    subtitle: 'panic = 恐慌',
    instruction,
  },
  {
    id: 'word-resentment',
    text: '那种 resentment，真的说不出口。',
    emotionInstruction: '语气压低，情绪藏在里面。',
    speedHint: 'medium',
    subtitle: 'resentment = 积怨',
    instruction,
  },
  {
    id: 'word-submit',
    text: '熬夜 submit，',
    emotionInstruction: '有一点解脱感，但还很累。',
    speedHint: 'medium',
    subtitle: 'submit = 提交',
    instruction,
  },
  {
    id: 'word-credit',
    text: '大家平分 credit。',
    emotionInstruction: '语气略带无奈，淡淡的。',
    speedHint: 'medium',
    subtitle: 'credit = 学分，功劳',
    instruction,
  },
  {
    id: 'word-exhausted',
    text: '你 exhausted 到极点，',
    emotionInstruction: '语气放慢，像说到这里就没力气了。',
    speedHint: 'medium',
    subtitle: 'exhausted = 耗尽了',
    instruction,
  },
  {
    id: 'word-survive',
    text: '但还是 survive 了。',
    emotionInstruction: '收尾，语气平静，带一点坚韧。',
    speedHint: 'medium',
    subtitle: 'survive = 熬过去',
    instruction,
  },
];

