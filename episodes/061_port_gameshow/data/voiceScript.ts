export type VoiceScriptLine = {
  id: string;
  text: string;
  emotionInstruction: string;
  speedHint: string;
  subtitle: string;
  instruction: string;
  // English word -> what speech-to-text hears for a correct pronunciation (set after listening).
  asrAccept?: Record<string, string>;
};

const defaultInstruction = '中文口播，综艺闯关主持人：兴奋、有节奏、短句有力，面向高中生，英文单词读准读清楚。';

export const voiceScript: VoiceScriptLine[] = [
  {
    id: 'title',
    text: '词根闯关！一个词根，五关，你能全对吗？',
    emotionInstruction: '像综艺开场，热情，带一点挑衅。',
    speedHint: 'fast-clear',
    subtitle: '词根闯关！一个词根，五关，你能全对吗？',
    instruction: defaultInstruction,
  },
  {
    id: 'root',
    text: '今天的通关密码：port，就是 carry：拿，运。',
    emotionInstruction: '神秘地揭晓密码，port 读清楚。',
    speedHint: 'medium-clear',
    subtitle: '通关密码：port = carry，拿，运',
    instruction: defaultInstruction,
    // British /pɔːt/: whisper small and medium both write "pot". Listen once to confirm.
    asrAccept: {port: 'pot'},
  },
  {
    id: 'r-import',
    text: '第一关！im，向里。往里运，import，进口。',
    emotionInstruction: '干脆利落，像出题又像揭晓。',
    speedHint: 'fast-clear',
    subtitle: 'im 向里 + port → 往里运 → import 进口',
    instruction: defaultInstruction,
  },
  {
    id: 'r-export',
    text: '第二关！ex，向外。往外运，export，出口。',
    emotionInstruction: '节奏和第一关一样，形成套路感。',
    speedHint: 'fast-clear',
    subtitle: 'ex 向外 + port → 往外运 → export 出口',
    instruction: defaultInstruction,
  },
  {
    id: 'r-transport',
    text: '第三关！trans，跨过去。运过去，transport，运输。',
    emotionInstruction: '稍微加速，越来越兴奋。',
    speedHint: 'fast-clear',
    subtitle: 'trans 跨过 + port → 运过去 → transport 运输',
    instruction: defaultInstruction,
  },
  {
    id: 'r-support',
    text: '第四关！sup 就是 sub，在下面。从下面托着，support，支持。',
    emotionInstruction: '托住的感觉，稳一点。',
    speedHint: 'fast-clear',
    subtitle: 'sup (= sub) 在下面 + port → 从下面托着 → support 支持',
    instruction: defaultInstruction,
    // sup / sub differ only in the final consonant; whisper writes "sap" for both. Listen once to confirm.
    asrAccept: {sup: 'sap', sub: 'sap'},
  },
  {
    id: 'r-report',
    text: '第五关！前缀 re，回来。把消息带回来，report，报告。',
    emotionInstruction: '最后一关，冲刺感。',
    speedHint: 'fast-clear',
    subtitle: 're 回来 + port → 把消息带回来 → report 报告',
    instruction: defaultInstruction,
    // The prefix /riː/ is written as 瑞 by whisper. Listen once to confirm.
    asrAccept: {re: '瑞'},
  },
  {
    id: 'lightning',
    text: '极速挑战！import，进口；export，出口；transport，运输；support，支持；report，报告！',
    emotionInstruction: '越说越快，像抢答，英文词仍然清楚。',
    speedHint: 'very-fast',
    subtitle: '极速挑战！跟上节奏',
    instruction: defaultInstruction,
  },
  {
    id: 'grade',
    text: '五关全过，评级 S！',
    emotionInstruction: '宣布成绩，喜气洋洋。',
    speedHint: 'fast-clear',
    subtitle: '五关全过，评级 S！',
    instruction: defaultInstruction,
  },
  {
    id: 'bonus',
    text: '加分题：这个国家没有油田，石油只能全部怎么样？',
    emotionInstruction: '抛出问题，留悬念。',
    speedHint: 'fast-clear',
    subtitle: '加分题：没有油田，石油只能全部____？',
    instruction: defaultInstruction,
  },
  {
    id: 'signoff',
    text: '评论区抢答，下一个词根见！',
    emotionInstruction: '收尾有力，像综艺下期预告。',
    speedHint: 'fast-clear',
    subtitle: '评论区抢答，下一个词根见！',
    instruction: defaultInstruction,
  },
];
