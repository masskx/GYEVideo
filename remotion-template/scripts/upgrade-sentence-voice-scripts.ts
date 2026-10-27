import {existsSync, mkdtempSync, readdirSync, readFileSync, rmSync, writeFileSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {fileURLToPath, pathToFileURL} from 'node:url';
import ts from 'typescript';

type SentenceExample = {
  id: string;
  en: string;
  zh: string;
  slotA?: string;
  slotB?: string;
  emotion: string;
  usageNote: string;
  sceneHint?: string;
};

type SceneSetup = {
  setting: string;
  speakerA?: string;
  speakerB?: string;
  opener?: string;
  reply?: string;
  conflict: string;
};

type WrongExpression = {
  text: string;
  whyItFails: string;
};

type RescueExpression = {
  en: string;
  zh: string;
  whenToUse: string;
  naturalnessNote: string;
};

type ReuseScene = {
  setting: string;
  line: string;
  zh: string;
};

type SentenceInfo = {
  episodeId: string;
  title: string;
  pattern: string;
  patternLines?: string[];
  coreMeaning: string;
  memoryFormula: string;
  useCase: string;
  emotion: string;
  sentencePattern?: string;
  chinesePainPoint?: string;
  entertainmentHook?: string;
  memorySound?: string;
  sceneMetaphor?: string;
  scene?: SceneSetup;
  wrongExpression?: WrongExpression;
  rescueExpression?: RescueExpression;
  reuseScenes?: ReuseScene[];
};

type SentenceModule = {
  sentenceInfo: SentenceInfo;
  sentenceExamples?: SentenceExample[];
};

type VoiceScriptLine = {
  id: string;
  role?: string;
  text: string;
  emotionInstruction: string;
  speedHint: string;
  subtitle: string;
  instruction: string;
};

const templateDir = fileURLToPath(new URL('..', import.meta.url));
const workspaceDir = fileURLToPath(new URL('../..', import.meta.url));
const sentenceEpisodesDir = join(workspaceDir, 'sentence-episodes');

const cliArgs = process.argv.slice(2).filter((arg) => arg && !arg.startsWith('--'));
const targetNames = cliArgs.length > 0 ? cliArgs : null;

const clean = (value: string | undefined) => (value ?? '').replace(/\s+/g, ' ').trim();

const splitPrimary = (value: string | undefined) =>
  clean(value)
    .split(/\s*\/\s*|(?<=[.!?])\s+/)
    .map((line) => clean(line))
    .filter(Boolean)[0] ?? '';

const isDistinctUsefulLine = (candidate: string, wrong: string, hero: string) => {
  const normalized = clean(candidate).toLowerCase();
  if (!normalized) {
    return false;
  }

  const wrongLower = clean(wrong).toLowerCase();
  const heroLower = clean(hero).toLowerCase();

  if (normalized === wrongLower || normalized === heroLower) {
    return false;
  }

  if (normalized.includes(wrongLower) || wrongLower.includes(normalized)) {
    return false;
  }

  return true;
};

const clip = (value: string, limit: number) => {
  if (value.length <= limit) {
    return value;
  }

  return `${value.slice(0, limit).trim()}...`;
};

const escapeSingle = (value: string) => value.replace(/\\/g, '\\\\').replace(/'/g, "\\'");

const hashString = (value: string) => {
  let hash = 0;

  for (const char of value) {
    hash = (hash * 131 + char.charCodeAt(0)) >>> 0;
  }

  return hash;
};

const pickBySeed = <T,>(seed: number, values: T[], offset = 0) => values[(seed + offset) % values.length];

const loadSentenceModule = async (filePath: string): Promise<SentenceModule> => {
  const source = readFileSync(filePath, 'utf8');
  const transpiled = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.ESNext,
      target: ts.ScriptTarget.ES2022,
    },
    fileName: filePath,
  });

  const tempDir = mkdtempSync(join(tmpdir(), 'sentence-pattern-'));
  const tempFilePath = join(tempDir, `sentencePattern.${Date.now()}.mjs`);
  writeFileSync(tempFilePath, transpiled.outputText, 'utf8');

  try {
    return (await import(pathToFileURL(tempFilePath).href)) as SentenceModule;
  } finally {
    rmSync(tempDir, {recursive: true, force: true});
  }
};

const createVoiceScript = (sentenceInfo: SentenceInfo, examples: SentenceExample[] = []): VoiceScriptLine[] => {
  const wrong = splitPrimary(sentenceInfo.wrongExpression?.text) || splitPrimary(sentenceInfo.patternLines?.[0]) || splitPrimary(sentenceInfo.pattern);
  const hero = splitPrimary(sentenceInfo.rescueExpression?.en) || splitPrimary(sentenceInfo.sentencePattern) || splitPrimary(sentenceInfo.pattern);
  const altCandidates = [
    clean(sentenceInfo.reuseScenes?.[1]?.line),
    clean(sentenceInfo.reuseScenes?.[0]?.line),
    ...examples.map((item) => clean(item.en)),
  ].filter(Boolean);
  const alt =
    altCandidates.find((candidate) => isDistinctUsefulLine(candidate, wrong, hero)) ||
    hero;
  const lockHero = alt && alt !== hero ? `${hero} / ${alt}` : hero;
  const title = clean(sentenceInfo.title);
  const pain = clean(sentenceInfo.chinesePainPoint) || clean(sentenceInfo.coreMeaning);
  const hook = clean(sentenceInfo.entertainmentHook) || title;
  const why = clean(sentenceInfo.wrongExpression?.whyItFails) || pain;
  const note = clean(sentenceInfo.rescueExpression?.naturalnessNote) || clean(sentenceInfo.memoryFormula);
  const scene = sentenceInfo.reuseScenes?.[0];
  const sceneLine = clean(scene?.line) || hero;
  const sceneZh = clean(scene?.zh) || clean(sentenceInfo.rescueExpression?.zh) || '';
  const seed = hashString([sentenceInfo.episodeId, title, wrong, hero].join('|'));
  const titleLead = title || `${wrong} 不是正确说法`;
  const shortWhy = clip(why, 30);
  const shortNote = clip(note, 28);

  const trap2Options = [
    `你以为这句很顺，老外听到只会先卡一下。`,
    `你脑子里是中文顺了，英文耳朵里其实别扭。`,
    `${wrong} 这种说法一出口，像把中文词序直接搬过去了。`,
  ];

  const slapOptions = [
    `问题不在你想表达，问题在你把中文回路直接投到英文里。`,
    `这不是不会英语，是中文脑回路抢在前面了。`,
    `意思没错，翻法太直，这就是尴尬点。`,
  ];

  const whyOptions = [
    shortWhy,
    shortNote,
    clip(`${hook} 核心不是逐字对位，是换成他们真会说的那句。`, 30),
  ];

  const fix2Options = alt !== hero
    ? [
        `想再换个更顺手的版本，就补 ${alt}。`,
        `第二拍你可以再补 ${alt}，但别让它抢主答案。`,
        `主答案先记 ${hero}，后面想升级再加 ${alt}。`,
      ]
    : [
        `先把 ${hero} 记牢，比背一堆替代项更有用。`,
        `这条先锁住 ${hero}，别一开始就摊开太多说法。`,
        `先把主答案说顺，再考虑别的版本。`,
      ];

  const sceneText = scene
    ? `真到 ${scene.setting} 这种场景，直接说 ${sceneLine}${sceneZh ? `。${sceneZh}` : '。'}`
    : `真到要开口的时候，直接说 ${hero}。`;

  const lockText = `别说 ${wrong}。先说 ${hero}。`;

  const defaultInstruction =
    '中文口播，抖音英语纠错短视频风格。前3秒先打痛点，再反转，再给能直接复用的答案。短句，快节奏，sharp，轻微吐槽，但不要像老师讲课。英文要清楚，中文要有停顿感。';

  return [
    {
      id: 'trap-1',
      role: 'trap',
      text: titleLead,
      emotionInstruction: '第一句像当场拦住观众继续说错，直接，狠一点。',
      speedHint: 'very-fast-clear',
      subtitle: clip(titleLead, 32),
      instruction: defaultInstruction,
    },
    {
      id: 'trap-2',
      role: 'trap',
      text: pickBySeed(seed, trap2Options, 1),
      emotionInstruction: '第二句继续制造社交尴尬感，像在拆穿一个大家都踩过的坑。',
      speedHint: 'fast-clear',
      subtitle: clip(pickBySeed(seed, trap2Options, 1), 28),
      instruction: defaultInstruction,
    },
    {
      id: 'slap',
      role: 'slap',
      text: pickBySeed(seed, slapOptions, 2),
      emotionInstruction: '像盖章定性，短，脆，不解释过头。',
      speedHint: 'fast-clear',
      subtitle: clip(pickBySeed(seed, slapOptions, 2), 24),
      instruction: defaultInstruction,
    },
    {
      id: 'fix-1',
      role: 'fix',
      text: `先说 ${hero}。`,
      emotionInstruction: '主答案要像黄字砸下来，成为此刻唯一视觉中心。',
      speedHint: 'medium-fast',
      subtitle: hero,
      instruction: defaultInstruction,
    },
    {
      id: 'why-1',
      role: 'why',
      text: pickBySeed(seed, whyOptions, 3),
      emotionInstruction: '解释要短，像高情商纠错，不像上语法课。',
      speedHint: 'fast-clear',
      subtitle: clip(pickBySeed(seed, whyOptions, 3), 24),
      instruction: defaultInstruction,
    },
    {
      id: 'fix-2',
      role: 'fix',
      text: pickBySeed(seed, fix2Options, 4),
      emotionInstruction: '这是第二拍补充，不抢主答案风头，像创作者顺手塞给观众的加分项。',
      speedHint: 'medium-fast',
      subtitle: clip(alt !== hero ? alt : hero, 24),
      instruction: defaultInstruction,
    },
    {
      id: 'scene',
      role: 'scene',
      text: sceneText,
      emotionInstruction: '给一个观众今晚就能拿去用的真实场景，不空讲。',
      speedHint: 'fast-clear',
      subtitle: clip(scene ? `${scene.setting} 就说 ${sceneLine}` : `就说 ${sceneLine}`, 30),
      instruction: defaultInstruction,
    },
    {
      id: 'lock',
      role: 'lock',
      text: lockText,
      emotionInstruction: '最后像盖章一样锁住 wrong vs right，干脆收尾。',
      speedHint: 'medium-fast',
      subtitle: clip(`别说 ${wrong} 说 ${lockHero}`, 30),
      instruction: defaultInstruction,
    },
  ];
};

const renderVoiceScriptSource = (voiceScript: VoiceScriptLine[]) => {
  const header = `export type VoiceScriptLine = {
  id: string;
  role?: string;
  text: string;
  emotionInstruction: string;
  speedHint: string;
  subtitle: string;
  instruction: string;
};

const defaultInstruction =
  '${escapeSingle(
    '中文口播，抖音英语纠错短视频风格。前3秒先打痛点，再反转，再给能直接复用的答案。短句，快节奏，sharp，轻微吐槽，但不要像老师讲课。英文要清楚，中文要有停顿感。',
  )}';

export const voiceScript: VoiceScriptLine[] = [
`;

  const body = voiceScript
    .map(
      (line) => `  {
    id: '${escapeSingle(line.id)}',
    role: '${escapeSingle(line.role ?? '')}',
    text: '${escapeSingle(line.text)}',
    emotionInstruction: '${escapeSingle(line.emotionInstruction)}',
    speedHint: '${escapeSingle(line.speedHint)}',
    subtitle: '${escapeSingle(line.subtitle)}',
    instruction: defaultInstruction,
  },`,
    )
    .join('\n');

  return `${header}${body}\n];\n`;
};

const main = async () => {
  const episodeNames = (targetNames ??
    readdirSync(sentenceEpisodesDir, {withFileTypes: true})
      .filter((entry) => entry.isDirectory() && entry.name !== '001_not_that_sentence')
      .map((entry) => entry.name)
      .sort((a, b) => a.localeCompare(b))) as string[];

  for (const name of episodeNames) {
    const sentencePatternPath = join(sentenceEpisodesDir, name, 'data', 'sentencePattern.ts');
    const voiceScriptPath = join(sentenceEpisodesDir, name, 'data', 'voiceScript.ts');

    if (!existsSync(sentencePatternPath)) {
      console.warn(`[skip] missing sentencePattern.ts for ${name}`);
      continue;
    }

    const mod = await loadSentenceModule(sentencePatternPath);
    const voiceScript = createVoiceScript(mod.sentenceInfo, mod.sentenceExamples ?? []);
    writeFileSync(voiceScriptPath, renderVoiceScriptSource(voiceScript), 'utf8');
    console.log(`[updated] ${name}`);
  }
};

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
