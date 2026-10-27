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
    id: 'word-overwhelm',
    text: '期末周，复习范围 overwhelm 我，',
    emotionInstruction: '直接开始读正文，像真实吐槽。',
    speedHint: 'medium',
    subtitle: 'overwhelm = 压倒',
    instruction,
  },
  {
    id: 'word-procrastinate',
    text: '越慌越 procrastinate。',
    emotionInstruction: '自然承接，不要讲解。',
    speedHint: 'medium',
    subtitle: 'procrastinate = 拖延',
    instruction,
  },
  {
    id: 'word-prioritize',
    text: '打开书，先 prioritize 重点，',
    emotionInstruction: '读出一点赶进度的感觉。',
    speedHint: 'medium',
    subtitle: 'prioritize = 优先处理',
    instruction,
  },
  {
    id: 'word-absorb',
    text: '不然全都 absorb 不进脑子。',
    emotionInstruction: '自然吐槽。',
    speedHint: 'medium',
    subtitle: 'absorb = 吸收',
    instruction,
  },
  {
    id: 'word-anxiety',
    text: '群聊一刷，anxiety 拉满，',
    emotionInstruction: '稍微有紧张感。',
    speedHint: 'medium',
    subtitle: 'anxiety = 焦虑',
    instruction,
  },
  {
    id: 'word-cram',
    text: '只能通宵 cram。',
    emotionInstruction: '短句读清楚。',
    speedHint: 'medium',
    subtitle: 'cram = 突击猛学',
    instruction,
  },
  {
    id: 'word-collapse',
    text: '凌晨三点，脑子快 collapse，',
    emotionInstruction: '读出快撑不住的状态。',
    speedHint: 'medium',
    subtitle: 'collapse = 崩溃',
    instruction,
  },
  {
    id: 'word-coherent',
    text: '答案也不 coherent。',
    emotionInstruction: '自然读正文。',
    speedHint: 'medium',
    subtitle: 'coherent = 连贯的',
    instruction,
  },
  {
    id: 'word-drained',
    text: '考完直接 drained，',
    emotionInstruction: '稍微放低一点。',
    speedHint: 'medium',
    subtitle: 'drained = 精疲力竭的',
    instruction,
  },
  {
    id: 'word-scrape',
    text: '只求 scrape 过线。',
    emotionInstruction: '像考完后的真实愿望。',
    speedHint: 'medium',
    subtitle: 'scrape = 勉强通过',
    instruction,
  },
  {
    id: 'word-recover',
    text: '睡一觉 recover，',
    emotionInstruction: '有一点缓过来的感觉。',
    speedHint: 'medium',
    subtitle: 'recover = 恢复',
    instruction,
  },
  {
    id: 'word-persist',
    text: '下一科继续 persist。',
    emotionInstruction: '收尾自然，不要总结腔。',
    speedHint: 'medium',
    subtitle: 'persist = 坚持',
    instruction,
  },
];
