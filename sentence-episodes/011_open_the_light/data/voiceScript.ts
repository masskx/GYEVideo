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
  '中文口播，抖音英语纠错短视频风格。前3秒先打痛点，再反转，再给能直接复用的答案。短句，快节奏，sharp，轻微吐槽，但不要像老师讲课。英文要清楚，中文要有停顿感。';

export const voiceScript: VoiceScriptLine[] = [
  {
    id: 'trap-1',
    role: 'trap',
    text: 'Open the light，不像英语，像中文套皮。',
    emotionInstruction: '开头像当场按住观众，不让他继续说错，短促直接。',
    speedHint: 'very-fast-clear',
    subtitle: 'Open the light 不像英语 像中文套皮',
    instruction: defaultInstruction,
  },
  {
    id: 'trap-2',
    role: 'trap',
    text: '你以为自己在说开灯，老外听到的是，你要把灯拆开吗？',
    emotionInstruction: '第二句要有轻微吐槽感，像朋友当面拆穿。',
    speedHint: 'fast-clear',
    subtitle: '你想说开灯 对方却像听成拆灯',
    instruction: defaultInstruction,
  },
  {
    id: 'slap',
    role: 'slap',
    text: '问题不是开这个动作，问题是设备在英语里不这么开。',
    emotionInstruction: '像一锤定音，干脆利落。',
    speedHint: 'fast-clear',
    subtitle: '设备在英语里 不这么开',
    instruction: defaultInstruction,
  },
  {
    id: 'fix-1',
    role: 'fix',
    text: '最稳先说 Turn on the light.',
    emotionInstruction: '主答案要像黄字砸下来，成为唯一焦点。',
    speedHint: 'medium-fast',
    subtitle: 'Turn on the light',
    instruction: defaultInstruction,
  },
  {
    id: 'why-1',
    role: 'why',
    text: '灯、空调、电视这种设备启动，英语脑子先跳出来的是 turn on，不是 open。',
    emotionInstruction: '解释要像创作者点拨，不像语法老师展开。',
    speedHint: 'fast-clear',
    subtitle: '设备启动 先想 turn on',
    instruction: defaultInstruction,
  },
  {
    id: 'fix-2',
    role: 'fix',
    text: '想说得更生活一点，直接整句拿走，It is too dark. Turn on the light.',
    emotionInstruction: '第二拍补可复用整句，不抢主答案，但要实用。',
    speedHint: 'medium-fast',
    subtitle: "It's too dark. Turn on the light.",
    instruction: defaultInstruction,
  },
  {
    id: 'scene',
    role: 'scene',
    text: '比如进房间一片黑，你别先卡壳，张嘴就说，It is too dark. Turn on the light.',
    emotionInstruction: '像把现成台词塞到观众嘴边，今晚就能拿去用。',
    speedHint: 'fast-clear',
    subtitle: '进房间一片黑 就说 Turn on the light',
    instruction: defaultInstruction,
  },
  {
    id: 'lock',
    role: 'lock',
    text: '别再 Open the light。开设备，先想 turn on。',
    emotionInstruction: '结尾像盖章，短，狠，收得住。',
    speedHint: 'medium-fast',
    subtitle: '别说 Open the light 先想 turn on',
    instruction: defaultInstruction,
  },
];
