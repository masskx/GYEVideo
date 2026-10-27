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
    text: '看到 geo，别只会想到 geography，三秒内把这串词全连到地球和土地上。',
    emotionInstruction: '开头像抛出限时挑战，语速快，压迫感强，但英文词要清楚。',
    speedHint: 'very-fast-clear',
    subtitle: '看到 geo 别只会想 geography',
    instruction: `${defaultInstruction} geo 和 geography 要读准，开头像挑战题。`,
  },
  {
    id: 'flash-words',
    text: 'geography，geology，geometry，geothermal，geopolitics。',
    emotionInstruction: '快速闪词，英文清楚，制造信息冲击。',
    speedHint: 'fast',
    subtitle: 'geography / geology / geometry / geothermal / geopolitics',
    instruction: `${defaultInstruction} 五个英文词之间略停顿，geometry 和 geopolitics 要特别读清。`,
  },
  {
    id: 'same-root',
    text: '看起来分散，底层却都围着 geo，earth，地球，土地。',
    emotionInstruction: '像突然拆穿底层逻辑，短促有揭示感。',
    speedHint: 'fast-clear',
    subtitle: '它们都连着 earth / 地球，土地',
    instruction: `${defaultInstruction} geo 和 earth 要读准，揭示感要强。`,
  },
  {
    id: 'root-ject',
    text: 'geo，核心意思就是 earth，地球，土地。',
    emotionInstruction: '词根砸进画面，稳，短，干脆。',
    speedHint: 'fast-clear',
    subtitle: 'geo = earth / 地球，土地',
    instruction: `${defaultInstruction} geo 和 earth 要读准，语气要像下定义。`,
  },
  {
    id: 'word-reject',
    text: 'geography，graphy 是写，geo 是地球，所以它是描述地球和地表分布的地理学。',
    emotionInstruction: '像把词义一下拆开，清楚利落。',
    speedHint: 'fast-clear',
    subtitle: 'geography = 描述地球地表 -> 地理学',
    instruction: `${defaultInstruction} geography，graphy 和 geo 都要读准，地理学结尾要利落。`,
  },
  {
    id: 'word-object',
    text: 'geology，就是 study 加上 earth，所以它是研究地球和岩层的地质学。',
    emotionInstruction: '像拆词公式，节奏推进但别拖。',
    speedHint: 'fast-clear',
    subtitle: 'geology = 研究地球岩层 -> 地质学',
    instruction: `${defaultInstruction} geology 和 study 要读准，地质学要落点。`,
  },
  {
    id: 'word-subject',
    text: 'geometry 现在像数学，其实最早是测量土地，所以字根里还是 geo。',
    emotionInstruction: '这里要有一点反转提醒，帮助记忆。',
    speedHint: 'fast-clear',
    subtitle: 'geometry = 土地测量 -> 几何学',
    instruction: `${defaultInstruction} geometry 要读准，反转感要出来。`,
  },
  {
    id: 'word-project',
    text: 'geothermal，就是来自地球内部热能的，所以叫地热的。',
    emotionInstruction: '语气要像热量从地下冒出来，解释要快。',
    speedHint: 'fast-clear',
    subtitle: 'geothermal = 来自地球热能 -> 地热的',
    instruction: `${defaultInstruction} geothermal 要读准，地热的要清楚。`,
  },
  {
    id: 'word-inject',
    text: 'geocentric 很直白，centric 是中心，geo 是地球，所以是以地球为中心的。',
    emotionInstruction: '解释要像把中心点一下钉住，短促有力。',
    speedHint: 'fast-clear',
    subtitle: 'geocentric = 以地球为中心',
    instruction: `${defaultInstruction} geocentric 和 centric 要读准，中心感要出来。`,
  },
  {
    id: 'word-eject',
    text: 'geopolitics，就是政治关系会被地理位置和土地格局强烈影响，所以叫地缘政治。',
    emotionInstruction: '像把地图一下铺开，格局感要出来。',
    speedHint: 'fast-clear',
    subtitle: 'geopolitics = 地理位置影响政治 -> 地缘政治',
    instruction: `${defaultInstruction} geopolitics 要读准，地缘政治要讲得干脆。`,
  },
  {
    id: 'word-abject',
    text: 'geotag，就是给照片或视频钉上一个地理位置标签。',
    emotionInstruction: '这里要贴近手机使用场景，轻快但别松。',
    speedHint: 'fast-clear',
    subtitle: 'geotag = 标上地理位置 -> 地理标签',
    instruction: `${defaultInstruction} geotag 要读准，地理标签要讲清楚。`,
  },
  {
    id: 'word-deject',
    text: 'geosphere，就是地球作为一个整体时，它的固体圈层部分。',
    emotionInstruction: '像把镜头拉远看整个地球，节奏干净利落。',
    speedHint: 'fast-clear',
    subtitle: 'geosphere = 地球固体圈层',
    instruction: `${defaultInstruction} geosphere 要读准，圈层感要出来。`,
  },
  {
    id: 'grid-connect',
    text: '现在连起来，geography 是写地球，geology 是研究地球，geometry 最早是量土地，geopolitics 是围着地理位置做判断。',
    emotionInstruction: '快速总览，把 geo 这条线一口气串起来。',
    speedHint: 'fast',
    subtitle: 'geography / geology / geometry，都围着 earth 转',
    instruction: `${defaultInstruction} 每个英文词都要清楚，不要连成一团。`,
  },
  {
    id: 'summary',
    text: '记住这一句，geo 等于 earth，地球，土地。',
    emotionInstruction: '像口号一样总结，短，稳，能留下记忆点。',
    speedHint: 'fast-clear',
    subtitle: 'geo = earth / 地球，土地',
    instruction: `${defaultInstruction} geo 和 earth 要读准，总结要稳。`,
  },
  {
    id: 'outro',
    text: '下次看到 geo，先问一句，它和地球，土地，还是地理位置有什么关系。',
    emotionInstruction: '收尾自然但有启发感，干净利落。',
    speedHint: 'medium-fast',
    subtitle: '看到 geo，先想：它和地球或土地有什么关系？',
    instruction: `${defaultInstruction} 收尾自然，留下一句记忆问题。`,
  },
];
