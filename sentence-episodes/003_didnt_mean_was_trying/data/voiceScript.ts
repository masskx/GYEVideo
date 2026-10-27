export type VoiceScriptLine = {
  id: string;
  role?: string;
  text: string;
  emotionInstruction: string;
  speedHint: string;
  subtitle: string;
  instruction: string;
};

const defaultInstruction =
  '中文口播，抖音英语纠错短视频风格。前3秒先打痛点，再反转，再给能直接复用的答案。短句，快节奏，sharp，轻微吐槽，但不要像老师讲课。英文要清晰，中文要有停顿感。';

export const voiceScript: VoiceScriptLine[] = [
  {
    id: 'trap-1',
    role: 'trap',
    text: '道歉别只会 say sorry。',
    emotionInstruction: '开头像立刻拦住观众继续空道歉。',
    speedHint: 'very-fast-clear',
    subtitle: '道歉别只会 say sorry',
    instruction: defaultInstruction,
  },
  {
    id: 'trap-2',
    role: 'trap',
    text: '你不是不会修复，你是只会认错，不会把本意补上。',
    emotionInstruction: '像创作者直接点破社交尴尬。',
    speedHint: 'fast-clear',
    subtitle: '只会认错 不会把本意补上',
    instruction: defaultInstruction,
  },
  {
    id: 'slap',
    role: 'slap',
    text: '一直说 sorry，对方只会继续停在疼那里。',
    emotionInstruction: '短，准，带一点刺。',
    speedHint: 'fast-clear',
    subtitle: '一直说 sorry 对方只会停在疼那里',
    instruction: defaultInstruction,
  },
  {
    id: 'fix-1',
    role: 'fix',
    text: '先记这个修复骨架，I did not mean to A. I was just trying to B。',
    emotionInstruction: '主答案像工具直接塞到观众手里。',
    speedHint: 'medium-fast',
    subtitle: "I didn't mean to A. I was just trying to B.",
    instruction: defaultInstruction,
  },
  {
    id: 'why-1',
    role: 'why',
    text: '它先把伤害认下来，再把真实动机摆上来。',
    emotionInstruction: '解释要短，像点明用途，不像讲语法。',
    speedHint: 'fast-clear',
    subtitle: '先认伤害 再补本意',
    instruction: defaultInstruction,
  },
  {
    id: 'fix-2',
    role: 'fix',
    text: '比如，I did not mean to hurt you. I was just trying to be honest。',
    emotionInstruction: '第二拍给一个最容易偷走的落地版本。',
    speedHint: 'medium-fast',
    subtitle: "I didn't mean to hurt you. I was just trying to be honest.",
    instruction: defaultInstruction,
  },
  {
    id: 'scene',
    role: 'scene',
    text: '真到你把话说重了，别原地反复 sorry，直接用这个骨架把关系往回拉。',
    emotionInstruction: '像今晚就能拿去发消息的提醒。',
    speedHint: 'fast-clear',
    subtitle: '别原地 sorry 直接用这个骨架往回拉',
    instruction: defaultInstruction,
  },
  {
    id: 'lock',
    role: 'lock',
    text: '别只会道歉。先说，I did not mean to A. I was just trying to B。',
    emotionInstruction: '结尾像一句能留在脑子里的创作者原则。',
    speedHint: 'medium-fast',
    subtitle: "别只会道歉 先说 I didn't mean to A. I was just trying to B.",
    instruction: defaultInstruction,
  },
];
