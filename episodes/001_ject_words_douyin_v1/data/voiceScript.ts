export type VoiceScriptLine = {
  id: string;
  text: string;
  emotionInstruction: string;
  speedHint: string;
  subtitle: string;
  instruction: string;
};

const defaultInstruction =
  '请用抖音知识博主的语气朗读，语速偏快但吐字清楚，情绪自信兴奋、有一点压迫感，不要尖叫。关键词要重读，句子之间停顿短。';

export const voiceScript: VoiceScriptLine[] = [
  {
    id: 'hook',
    text: '别再硬背单词了！',
    emotionInstruction: '开场要紧迫，像短视频前三秒抓人。',
    speedHint: 'very-fast-clear',
    subtitle: '别再硬背单词了！',
    instruction: `${defaultInstruction} “别再硬背”要重读，收尾干脆。`,
  },
  {
    id: 'flash-words',
    text: 'reject，project，inject，object，subject。',
    emotionInstruction: '快速抛出几个单词，制造压迫感。',
    speedHint: 'fast',
    subtitle: 'reject / project / inject / object / subject',
    instruction: `${defaultInstruction} 英文单词逐个清晰读出，每个词之间短停顿。`,
  },
  {
    id: 'same-root',
    text: '它们都藏着同一个词根。',
    emotionInstruction: '定格转折，语气笃定。',
    speedHint: 'fast-clear',
    subtitle: '它们都藏着同一个词根',
    instruction: `${defaultInstruction} “同一个词根”要加重。`,
  },
  {
    id: 'root-ject',
    text: 'ject，意思就是 throw，投出去。',
    emotionInstruction: '中心知识点，要像揭晓答案。',
    speedHint: 'fast-clear',
    subtitle: 'ject = throw / 投出去',
    instruction: `${defaultInstruction} ject 和 throw 要清晰重读，“投出去”要有落点。`,
  },
  {
    id: 'word-reject',
    text: 'reject，把东西投回去，就是拒绝、排斥。',
    emotionInstruction: '像真人博主拆词，不要教材腔。',
    speedHint: 'fast-clear',
    subtitle: 'reject：投回去，就是拒绝、排斥',
    instruction: `${defaultInstruction} reject 要重读，中文解释自然口语化。`,
  },
  {
    id: 'word-object',
    text: 'object，被投到眼前的东西，是物体，也是目标。',
    emotionInstruction: '解释清楚，节奏紧。',
    speedHint: 'fast-clear',
    subtitle: 'object：眼前的东西，物体、目标',
    instruction: `${defaultInstruction} object 要读清楚，“物体、目标”要有并列停顿。`,
  },
  {
    id: 'word-subject',
    text: 'subject，放到下面讨论，就是主题，或者学科。',
    emotionInstruction: '清楚拆解，略带推进感。',
    speedHint: 'fast-clear',
    subtitle: 'subject：下面讨论的，主题、学科',
    instruction: `${defaultInstruction} subject 要重读，中文不要拖长。`,
  },
  {
    id: 'word-project',
    text: 'project，向前投出去，所以是投影、预测。',
    emotionInstruction: '有动作感，强调向前。',
    speedHint: 'fast-clear',
    subtitle: 'project：向前投，投影、预测',
    instruction: `${defaultInstruction} project 和“向前投”要重读。`,
  },
  {
    id: 'word-inject',
    text: 'inject，往里面投，就是注射、注入。',
    emotionInstruction: '短促有力。',
    speedHint: 'fast-clear',
    subtitle: 'inject：往里面投，注射、注入',
    instruction: `${defaultInstruction} inject 要重读，“注射、注入”读清楚。`,
  },
  {
    id: 'word-eject',
    text: 'eject，向外投出，就是弹出、驱逐。',
    emotionInstruction: '动作感更强一点。',
    speedHint: 'fast-clear',
    subtitle: 'eject：向外投出，弹出、驱逐',
    instruction: `${defaultInstruction} eject 和“向外”要重读。`,
  },
  {
    id: 'word-abject',
    text: 'abject，被抛到低处，引申为卑劣、可怜。',
    emotionInstruction: '解释自然，别像词典朗读。',
    speedHint: 'fast-clear',
    subtitle: 'abject：抛到低处，卑劣、可怜',
    instruction: `${defaultInstruction} abject 要清晰，中文解释要口播化。`,
  },
  {
    id: 'word-deject',
    text: 'deject，情绪被往下扔，就是使人沮丧。',
    emotionInstruction: '收束八个单词前的最后一个例子。',
    speedHint: 'fast-clear',
    subtitle: 'deject：情绪往下，使沮丧',
    instruction: `${defaultInstruction} deject 要重读，“沮丧”收尾稳。`,
  },
  {
    id: 'grid-connect',
    text: '看见了吗？八个单词，全都连回 ject。',
    emotionInstruction: '总结结构，带一点胜利感。',
    speedHint: 'fast',
    subtitle: '八个单词，全都连回 ject',
    instruction: `${defaultInstruction} “全都连回 ject”要重读。`,
  },
  {
    id: 'summary',
    text: '记住，ject 等于 throw，核心就是投出去。',
    emotionInstruction: '最终记忆点，强而清楚。',
    speedHint: 'fast-clear',
    subtitle: 'ject = throw / 投出去',
    instruction: `${defaultInstruction} ject、throw、投出去都要重读。`,
  },
  {
    id: 'outro',
    text: '下次遇到生词，先拆词根。',
    emotionInstruction: '结尾干净，留给剪辑停顿。',
    speedHint: 'medium-fast',
    subtitle: '下次遇到生词，先拆词根',
    instruction: `${defaultInstruction} 结尾自信，不要拖腔。`,
  },
];
