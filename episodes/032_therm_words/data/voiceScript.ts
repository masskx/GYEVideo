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
    text: '看到 therm，别只会想到 thermometer，三秒内把这串词全连到热上。',
    emotionInstruction: '开头像抛出限时挑战，语速快，压迫感强，但英文词要清楚。',
    speedHint: 'very-fast-clear',
    subtitle: '看到 therm 别只会想 thermometer',
    instruction: `${defaultInstruction} therm 和 thermometer 要读准，开头像挑战题。`,
  },
  {
    id: 'flash-words',
    text: 'thermal，thermometer，thermostat，exothermic，geothermal。',
    emotionInstruction: '快速闪词，英文清楚，制造信息冲击。',
    speedHint: 'fast',
    subtitle: 'thermal / thermometer / thermostat / exothermic / geothermal',
    instruction: `${defaultInstruction} 五个英文词之间略停顿，thermostat 和 exothermic 要特别读清。`,
  },
  {
    id: 'same-root',
    text: '它们底层都围着 heat，热，温度和热量变化。',
    emotionInstruction: '像突然拆穿底层逻辑，短促有揭示感。',
    speedHint: 'fast-clear',
    subtitle: '它们都连着 heat / 热',
    instruction: `${defaultInstruction} heat 要读准，揭示感要强。`,
  },
  {
    id: 'root-ject',
    text: 'therm，核心意思就是 heat，热。',
    emotionInstruction: '词根砸进画面，稳，短，干脆。',
    speedHint: 'fast-clear',
    subtitle: 'therm = heat / 热',
    instruction: `${defaultInstruction} therm 和 heat 要读准，语气像下定义。`,
  },
  {
    id: 'word-reject',
    text: 'thermal 很直白，就是和热有关的，所以是热的。',
    emotionInstruction: '像一下把词义点亮，解释要短促有力。',
    speedHint: 'fast-clear',
    subtitle: 'thermal = 和热有关 -> 热的',
    instruction: `${defaultInstruction} thermal 要读准，热的落点要干脆。`,
  },
  {
    id: 'word-object',
    text: 'thermometer 就是拿来测温度的，温度计。',
    emotionInstruction: '像把刻度一格一格亮出来，推进感要强。',
    speedHint: 'fast-clear',
    subtitle: 'thermometer = 测温工具 -> 温度计',
    instruction: `${defaultInstruction} thermometer 要读准，温度计要清楚。`,
  },
  {
    id: 'word-subject',
    text: 'thermostat 更进一步，不是测温，是控制温度，所以是恒温器。',
    emotionInstruction: '这里要有一点对比感，帮助记忆。',
    speedHint: 'fast-clear',
    subtitle: 'thermostat = 控制温度 -> 恒温器',
    instruction: `${defaultInstruction} thermostat 要读准，对比感要出来。`,
  },
  {
    id: 'word-project',
    text: 'exothermic 里的 ex 是向外，所以它是把热放出来，叫放热的。',
    emotionInstruction: '像热量往外冲，解释要快。',
    speedHint: 'fast-clear',
    subtitle: 'exothermic = 热往外放 -> 放热的',
    instruction: `${defaultInstruction} exothermic 和 ex 要读准，放热感要出来。`,
  },
  {
    id: 'word-inject',
    text: 'endothermic 正好相反，是把热吸进去，所以是吸热的。',
    emotionInstruction: '像做一个反转钩子，短促有力。',
    speedHint: 'fast-clear',
    subtitle: 'endothermic = 把热吸进来 -> 吸热的',
    instruction: `${defaultInstruction} endothermic 要读准，反转感要清楚。`,
  },
  {
    id: 'word-eject',
    text: 'geothermal 就是地球内部的热，所以叫地热的。',
    emotionInstruction: '像热量从地下冒出来，干净利落。',
    speedHint: 'fast-clear',
    subtitle: 'geothermal = 地球热能 -> 地热的',
    instruction: `${defaultInstruction} geothermal 要读准，地热感要出来。`,
  },
  {
    id: 'word-abject',
    text: 'thermodynamics，就是研究热和能量怎么变化，热力学。',
    emotionInstruction: '像把镜头推进到公式背后，节奏别松。',
    speedHint: 'fast-clear',
    subtitle: 'thermodynamics = 热与能量变化 -> 热力学',
    instruction: `${defaultInstruction} thermodynamics 要读准，热力学要清楚。`,
  },
  {
    id: 'word-deject',
    text: 'thermos 其实也一样，核心就是把热留住，所以是保温瓶。',
    emotionInstruction: '像做最后一个日常钉子，结尾要稳。',
    speedHint: 'fast-clear',
    subtitle: 'thermos = 把热留住 -> 保温瓶',
    instruction: `${defaultInstruction} thermos 要读准，保温瓶要落点。`,
  },
  {
    id: 'grid-connect',
    text: '现在连起来，thermal 是热的，thermometer 是测热，thermostat 是控热，exothermic 是放热。',
    emotionInstruction: '快速总览，把 therm 这条线一口气串起来。',
    speedHint: 'fast',
    subtitle: 'thermal / thermometer / thermostat，都围着 heat 转',
    instruction: `${defaultInstruction} 每个英文词都要清楚，不要连成一团。`,
  },
  {
    id: 'summary',
    text: '记住这一句，therm 就是 heat，热。',
    emotionInstruction: '像口号一样总结，短，稳，能留下记忆点。',
    speedHint: 'fast-clear',
    subtitle: 'therm = heat / 热',
    instruction: `${defaultInstruction} 总结要稳，therm 和 heat 要读准。`,
  },
  {
    id: 'outro',
    text: '下次看到 therm，先问一句，它是在讲热本身，还是在讲温度控制。',
    emotionInstruction: '收尾自然但有启发感，干净利落。',
    speedHint: 'medium-fast',
    subtitle: '看到 therm，先想：它和哪种热有关？',
    instruction: `${defaultInstruction} 收尾自然，留下一句记忆问题。`,
  },
];
