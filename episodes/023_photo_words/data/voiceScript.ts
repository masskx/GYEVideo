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
    text: 'photo 不只是你相册里的照片，它背后其实是光本身。',
    emotionInstruction: '开头像突然纠正一个日常误解，短促有悬念。',
    speedHint: 'very-fast-clear',
    subtitle: 'photo 不只是“照片”',
    instruction: `${defaultInstruction} photo 要读准，开头要强，要有纠错感。`,
  },
  {
    id: 'flash-words',
    text: 'photo，photograph，photography，photosynthesis，photogenic。',
    emotionInstruction: '快速闪词，英文清晰，制造信息冲击。',
    speedHint: 'fast',
    subtitle: 'photo / photograph / photography / photosynthesis / photogenic',
    instruction: `${defaultInstruction} 英文之间略停顿，photo、photograph、photography 要区分清楚。`,
  },
  {
    id: 'same-root',
    text: '它们不是孤立单词，背后都藏着 photo，light，光。',
    emotionInstruction: '揭秘感，把一串词突然串起来。',
    speedHint: 'fast-clear',
    subtitle: '它们都围着“光”',
    instruction: `${defaultInstruction} photo、light 要读准，要有揭示感。`,
  },
  {
    id: 'root-ject',
    text: 'photo，核心意思就是 light，光。',
    emotionInstruction: '词根砸入画面，短促坚定。',
    speedHint: 'fast-clear',
    subtitle: 'photo = light / 光',
    instruction: `${defaultInstruction} photo、light 要读准。`,
  },
  {
    id: 'word-reject',
    text: 'photo，本来就是光留下来的图像，所以重点不只是图片，重点是光被留下来了。',
    emotionInstruction: '像拆开词根公式，清楚利落。',
    speedHint: 'fast-clear',
    subtitle: 'photo = 光留下图像 → 照片',
    instruction: `${defaultInstruction} photo 要读准，照片要讲得干净有力。`,
  },
  {
    id: 'word-object',
    text: 'photograph，就是把光记下来，定住，变成一张照片，也能当动词拍摄。',
    emotionInstruction: '把拍照讲成把光瞬间按住。',
    speedHint: 'fast-clear',
    subtitle: 'photograph = 把光记下来 → 照片 / 拍摄',
    instruction: `${defaultInstruction} photograph 要读准，照片和拍摄都要落点。`,
  },
  {
    id: 'word-subject',
    text: 'photography，就是用光来成像的技术和过程，所以是摄影。',
    emotionInstruction: '像把摄影讲成控制光的过程。',
    speedHint: 'fast-clear',
    subtitle: 'photography = 用光成像 → 摄影',
    instruction: `${defaultInstruction} photography 要读准，摄影要短促清晰。`,
  },
  {
    id: 'word-project',
    text: 'photosynthesis，植物借着光把东西合成出来，所以是光合作用。',
    emotionInstruction: '把抽象生物词讲成阳光推进生长。',
    speedHint: 'fast-clear',
    subtitle: 'photosynthesis = 借光合成 → 光合作用',
    instruction: `${defaultInstruction} photosynthesis 要读准，光合作用要有推进感。`,
  },
  {
    id: 'word-inject',
    text: 'photogenic，就是一见光就更好看，更容易出片，所以是上镜。',
    emotionInstruction: '把上镜讲成被光一照就成立。',
    speedHint: 'fast-clear',
    subtitle: 'photogenic = 一见光就好看 → 上镜',
    instruction: `${defaultInstruction} photogenic 要读准，上镜要落点。`,
  },
  {
    id: 'word-eject',
    text: 'photocopy，就是靠光把内容再复制一遍，所以是复印。',
    emotionInstruction: '语气干脆一点，像机器扫过去就复制出来。',
    speedHint: 'fast-clear',
    subtitle: 'photocopy = 靠光复制 → 复印',
    instruction: `${defaultInstruction} photocopy 要读准，复印要清楚。`,
  },
  {
    id: 'word-abject',
    text: 'photophobia，就是对光敏感，甚至怕光，所以是畏光。',
    emotionInstruction: '简洁一点，把怕光的反应直接讲出来。',
    speedHint: 'fast-clear',
    subtitle: 'photophobia = 怕光 → 畏光',
    instruction: `${defaultInstruction} photophobia 要读准，畏光要清楚。`,
  },
  {
    id: 'word-deject',
    text: 'photon，就是最小一束能量化的光，所以是光子。',
    emotionInstruction: '轻快收住，但要把小而核心的感觉讲出来。',
    speedHint: 'fast-clear',
    subtitle: 'photon = 一束最小的光 → 光子',
    instruction: `${defaultInstruction} photon 要读准，不要拖太长。`,
  },
  {
    id: 'grid-connect',
    text: '现在串起来，photo 是光留下图像，photography 是用光成像，photosynthesis 是借光合成，photogenic 是见光更出彩。',
    emotionInstruction: '快速总览，把光这条线连起来。',
    speedHint: 'fast',
    subtitle: 'photo / photography / photogenic，都围着 light 转',
    instruction: `${defaultInstruction} 每个英文词都要清楚，不要念成一团。`,
  },
  {
    id: 'summary',
    text: '记住这一句，photo 等于 light，光。',
    emotionInstruction: '总结像口号，有记忆点。',
    speedHint: 'fast-clear',
    subtitle: 'photo = light: 光',
    instruction: `${defaultInstruction} 总结要稳，photo、light 读准。`,
  },
  {
    id: 'outro',
    text: '下次看到 photo，先想，这里的光做了什么。',
    emotionInstruction: '收尾有启发感，干净利落。',
    speedHint: 'medium-fast',
    subtitle: '看到 photo，先想：这里的光做了什么？',
    instruction: `${defaultInstruction} 收尾自然，留下一句记忆问题。`,
  },
];
