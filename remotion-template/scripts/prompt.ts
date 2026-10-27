import {mkdirSync, writeFileSync} from 'node:fs';
import {join, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
import {EXAMS, ExamId, isExam} from '../src/core/exam';
import {isTemplate, TEMPLATES, TemplateId} from '../src/templates/registry';

// npm run prompt — the prompt the owner gives an agent to make one video.
//
//   npm run prompt -- <template> --exam cet4 [--topic "spect = look / 看"]   print one prompt
//   npm run prompt -- --write                                                regenerate docs/prompts/
//
// Every prompt is built from the template registry and the exam profiles, so it always matches the
// templates, the checks and the skills. Edit the notes below, then run --write; never edit docs/prompts/ by hand.

const templateDir = fileURLToPath(new URL('..', import.meta.url));
const repoDir = resolve(templateDir, '..');

const SUFFIX: Record<TemplateId, string> = {
  'vocab-dossier': 'dossier',
  'vocab-game-show': 'gameshow',
  'vocab-whiteboard': 'whiteboard',
  'reading-picture-book': 'book',
  'reading-caption-news': 'news',
};

// What makes each template work. Mirrors skills/<template>/SKILL.md.
const TEMPLATE_NOTES: Record<TemplateId, string[]> = {
  'vocab-dossier': [
    '一期 = 一份案卷：开场一道单空选词题（案子）→ 词根是指纹 → 每个单词是一件编号证物 → 回到开场题破案、盖章 → 作业题留给评论区。',
    '选一个能“解出”开场题的词根：四个选项共享词根，只有理解词根的人能选对。',
    '每件证物按顺序出现：拆分（前缀/词根/后缀 + 释义）→ 字面意思 → 单词 + 音标 → 考试释义 → 搭配。口播固定句式：“<前缀>，<释义>。<字面意思>，<单词>，<意思>。”',
    '`scenes[].cueAt`（loss / loupe / arrow / verdict / redact / end）里的每个词都必须真的出现在那一场的口播 text 里；`solveHint` 是破案时说的词根逻辑。',
    '时长 55–68 秒；超时先删口头词，不删证物。',
  ],
  'vocab-game-show': [
    '一期 = 一场综艺闯关：标题 → 通关密码（词根）→ 每个单词一关 → 极速挑战 → 成绩单评级 → 加分题评论区抢答。',
    '选一个有 5 个干净“前缀 + 词根”单词的词根；`words[].root` 写词根在这个单词里的真实拼写（support 里是 sup）。',
    '每一关的口播严格按：“第N关！<前缀>，<释义>。<字面意思>，<单词>，<意思>。”，和 data 里的写法完全一致（画面按这些词出现）。',
    '相邻场景的 `set.hue` 不能相同；每关的 `judgement`（PERFECT! / GREAT! / NICE! / BINGO!）要有变化；结尾一句必须包含“下一个”。',
    '时长 50–66 秒；语气是综艺主持人：兴奋、短句、有节奏。',
  ],
  'vocab-whiteboard': [
    '一期 = 一块白板现场板书：标题一个中文字 → 词根画圈居中 → 单词分支（蓝笔拆分和字面意思、红笔考试释义）→ 一个反转词（先写错误猜测、擦掉、再用拆分解释）→ 拉远成整张词根图 → 作业卡片。',
    '必须恰好有一个单词带 `twist`，它要让人意外（provide 和“看”有关）；分支 3–5 个。',
    '`scenes[].cueAt` 的每个词都必须是口播里真的说出来的形式；配音会读错的词根在 text 里逐个字母拼读（V I S），cueAt 也写 V I S。',
    '语气像老师在白板前边想边讲：平静、一句一个意思。时长 50–66 秒。',
  ],
  'reading-picture-book': [
    '一期 = 一本蜡笔绘本：封面 → 4–6 页故事（每句英文朗读 + 中文 + 目标词卡）→ 目标词复习 → 阅读理解题（思考停顿）→ 结尾。',
    '小猪是唯一主角：英文永远叫 Little Pig，中文叫小猪。故事原创，8–10 句，过去时，句子长度按下面的考试要点，一个清楚的起承转合。',
    '每个目标词 `targets[].word` 必须原样出现在且只出现在一句故事里；`translations` 每个口播句都要有自然的中文。',
    '插图只能用现有的 setting（bedroom-night / classroom / street-morning / park-day）和道具（phone, clock, book, box, sun, moon, stars, tree, lamp）；小猪只选位置 x（0–1）、表情和姿势。',
    '题目 `evidenceLineId` 指向能证明答案的那一句；答案前留约 2 秒思考停顿（`lineMeta.answer.pauseBefore`）。时长 50–72 秒。',
  ],
  'reading-caption-news': [
    '一期 = 一条字幕新闻：标题 → 5 个分句（每句一张数据图 + 大字英文按朗读出现 + 关键词黄块 + 中文 + 来源标签）→ 阅读题 + 原文定位 → 本篇词汇复习。',
    '先写 FACTS.md：只用一手来源（CDC、WHO、NIH、政府统计、期刊），每条写 URL、页面日期、原文引用；屏幕上每个数字都要和原文一致（四舍五入要说 about）。',
    '英文句子原创，不抄来源原文；结构：专家怎么说 → 意外的数字 → 为什么 → 后果 → 一个简单的行动。',
    '数字在配音 text 里写成英文单词（eight to ten hours），subtitle 里写阿拉伯数字（8 to 10 hours）；`keyword` 必须是 subtitle 里原样存在的短语；含数字的句子必须有 `sourceId`。',
    '数据图只能用 clock / people / brain / trend / phone。健康话题只说来源说过的话，不给建议。时长 50–72 秒。',
  ],
};

// What changes with the exam. Mirrors skills/_shared/EXAMS.md.
const EXAM_NOTES: Record<ExamId, string[]> = {
  gaokao: [
    '观众是高中生；单词全部来自高考课标词汇，标 `课标`，最多一个 `拓展`。',
    '英文难度 CEFR B1–B2，句子不超过 20 个词；题型对应高考完形 / 语法填空 / 阅读理解。',
  ],
  cet4: [
    '观众是备考四级的大学生；单词来自四级大纲词汇，标 `四级`，最多一个 `拓展`；不要选高中生都会的基础词。',
    '英文难度 B1–B2，句子不超过 22 个词；词汇题是“选词填空”风格的单空四选一，阅读题是“仔细阅读”风格（细节 / 推理 / 主旨 / 态度），选项要同义改写原文。',
    '参考 episode 是高考的：所有 `level`、`sourceNote`、每句配音的 `instruction`（高中生 → 大学生）、封面文字、绘本的 `level` 字段（大学英语四级）都要改写。',
  ],
  cet6: [
    '观众是备考六级的大学生；单词标 `四级` 或 `六级`，至少一半是 `六级`，最多一个 `拓展`。',
    '英文难度 B2–C1，句子可到约 28 个词；题目要有一步推理，选项同义改写、干扰项半对半错。',
    '参考 episode 是高考的：所有 `level`、`sourceNote`、每句配音的 `instruction`（高中生 → 大学生）、封面文字、绘本的 `level` 字段（大学英语六级）都要改写。',
  ],
};

const lineName = (id: TemplateId) => (TEMPLATES[id].line === 'vocab' ? '单词' : '双语阅读');
const seriesName = (id: TemplateId, exam: ExamId) => (id === 'vocab-dossier' ? `${EXAMS[exam].vocab}案卷` : TEMPLATES[id].title);

const topicLine = (id: TemplateId, exam: ExamId, topic?: string) => {
  if (topic) return topic;
  if (TEMPLATES[id].line === 'vocab') return `<词根，例如 spect = look / 看；不填就自己选一个能覆盖 4–6 个${EXAMS[exam].vocab}、最近 10 期没做过的词根>`;
  return id === 'reading-caption-news'
    ? `<话题，例如 teenagers and exercise；不填就自己选一个有一手来源的${EXAMS[exam].audience}关心的话题>`
    : `<故事主题，例如 一把丢了的伞；不填就自己选一个${EXAMS[exam].audience}熟悉的生活小事>`;
};

export const buildPrompt = (id: TemplateId, exam: ExamId, topic?: string) => {
  const t = TEMPLATES[id];
  const e = EXAMS[exam];
  const idHint = `<编号>_${exam === 'gaokao' ? '' : `${exam}_`}<主题>_${SUFFIX[id]}`;
  const levels = [...e.coreLevels, e.extension].join(' / ');
  const note = t.line === 'vocab' ? e.practiceNote : e.readingNote;
  const steps = [
    `cd remotion-template；新电脑先运行 \`npm run doctor\`，必须显示 Ready。`,
    `运行 \`npm run plan\`，确认上一期${lineName(id)}不是 ${id}（如果是，先停下来问我是否继续），记下下一个编号。`,
    `运行 \`npm run new -- ${id} ${idHint} --exam ${exam}\`。`,
    ...(id === 'reading-caption-news' ? ['先写 FACTS.md（来源、日期、原文引用），再写其它文件。'] : []),
    '写 brief.md：内容、每个词的等级、题目和答案。',
    '写 TREATMENT.md：三个结构候选和选择理由、开场钩子、招牌镜头、配乐 BPM 和调性、第 9 节与同模板上一期的 6 项对比（至少 3 项不同，参考 SKILL.md 的 variation knobs）。',
    `改写 data/${t.dataFile}、data/voiceScript.ts、data/episodeConfig.ts 的每一个字段（参考 episode 的内容一个都不能留，exam 保持 '${exam}'）。`,
    `运行 \`npm run episode:use -- ../${t.episodesDir}/<你的 episodeId>\`，再运行 \`npm run check\`，修好所有 ERROR；每个 warn 要么修好，要么在 notes.md 里说明。`,
    '运行 `npm run produce`，直到显示 PRODUCE DONE。voice:check 不通过：按 playbook 6.3 改写那一句的 text 后重跑；只有确认发音正确时才加 asrAccept，并写进 notes.md。时长超出：先删口头词和停顿，不缩短字幕停留时间。',
    `人工看片：打开 exports/<id>_contact_sheet.jpg 和 remotion-template/out/qa/<id>/ 里的每一张静帧，按 skills/${id}/references/qa_checklist.md 逐项检查（文字不重叠不出界、小猪原样且不挡内容、中文清楚、封面缩略图能看清）。有问题改 data 后重跑 produce。`,
    '填写 notes.md（QA 数字、人工检查结果、改写过的句子、asrAccept、接受的 warn），只提交这个 episode 文件夹（不要提交 exports/、audio/、.env）。',
  ];
  return [
    `你是为抖音账号「小猪盖被」制作英语短视频的 agent。本次任务：用模板 \`${id}\`（${seriesName(id, exam)}）做一期${e.name}${lineName(id)}视频。`,
    '',
    `【主题】${topicLine(id, exam, topic)}`,
    '',
    '【开始前按顺序读完】',
    '1. AGENTS.md',
    '2. docs/agent_playbook.md（严格按它的步骤执行）',
    `3. remotion-template/skills/_shared/HOUSE_RULES.md、DIRECTING.md、EXAMS.md（本期考试：${e.name} \`${exam}\`）`,
    `4. remotion-template/${t.skill}/SKILL.md、references/style.md、references/qa_checklist.md`,
    `5. 参考 episode：${t.example}（只学结构和写法，内容全部重写）`,
    '',
    '【本期参数】',
    `- 模板：\`${id}\`（${t.look}）`,
    `- 考试：${e.name}（\`exam: '${exam}'\`），观众：${e.audience}`,
    `- 词汇等级只能用：${levels}（${e.extension}最多 1 个${e.coreLevels.length > 1 ? `，至少一半是 ${e.mainLevel}` : ''}）`,
    `- 原创题标注：\`${note}\`（只有引用真题才写“真题”，并注明年份和出处）`,
    `- 文件夹：${t.episodesDir}/，命名：${idHint}`,
    `- 时长：${t.targetSeconds[0]}–${t.targetSeconds[1]} 秒`,
    '',
    '【这个模板的要点】',
    ...TEMPLATE_NOTES[id].map((n) => `- ${n}`),
    '',
    `【${e.name}的要点】`,
    ...EXAM_NOTES[exam].map((n) => `- ${n}`),
    '',
    '【执行步骤】',
    ...steps.map((s, i) => `${i + 1}. ${s}`),
    '',
    '【绝对不要】',
    '- 修改、重画、换色或替换小猪（src/brand/BrandPig.tsx 已锁定），或加入任何其它小猪图片。',
    '- 更换配音（cosyvoice-v3-flash / longanhuan），或在 .env 里覆盖模型和音色。',
    '- 修改模板代码、src/core/、src/brand/；只有改代码才能解决的问题，停下来告诉我。',
    '- 打印、提交或写下 DASHSCOPE_API_KEY。',
    '- 从网上下载音乐、图片、视频放进视频；照抄新闻、试卷或教材原文。',
    '- 把原创题写成“真题”；发布没有来源的数字。',
    '',
    '【遇到这些情况先停下来问我】',
    '- 没有主题且无法按上面的规则自己选；plan 显示要连续两期用同一个模板；新闻数字找不到一手来源；DashScope 报错（密钥、额度）；只有改代码才能修好的画面问题。',
    '',
    '【完成后按这个格式汇报】',
    '```',
    `Episode <id> (${id}, ${exam}) is ready.`,
    '- Video: exports/<id>.mp4, <时长> s, QA PASS',
    '- Cover / caption / publish notes: exports/',
    '- Pinned-comment answer: <评论区置顶答案>',
    '- Please listen to: <用了 asrAccept 的句子，或 none>',
    ...(id === 'reading-caption-news' ? ['- Sources: <FACTS.md 里的链接>'] : []),
    '- Warnings accepted / problems I could not fix in data: <none / 说明>',
    '```',
  ].join('\n');
};

// Prompts for a team of agents, one role each. The owner passes the episode folder from one to the next.
export const buildRolePrompts = () => {
  const common = [
    '先按顺序读：AGENTS.md、docs/agent_playbook.md、remotion-template/skills/_shared/HOUSE_RULES.md、EXAMS.md、本期模板的 skills/<模板 id>/SKILL.md。',
    '只在本期 episode 文件夹里工作；不改模板代码、小猪、配音；不打印或提交 API key。',
  ];
  const role = (title: string, mission: string, input: string, work: string[], done: string[], never: string[]) =>
    [
      `## ${title}`,
      '',
      '```text',
      `你是「小猪盖被」视频团队的${title}。本期：模板 <模板 id>，考试 <gaokao / cet4 / cet6>，主题 <主题>，episode：<episodes/ 或 reading-episodes/ 下的文件夹，第一个角色会创建它>。`,
      `你的任务：${mission}`,
      '',
      '【开始条件】' + input,
      '【共同规则】',
      ...common.map((c) => `- ${c}`),
      '【你要做的】',
      ...work.map((w, i) => `${i + 1}. ${w}`),
      '【交接条件（全部满足才算完成）】',
      ...done.map((d) => `- ${d}`),
      '【不要做】',
      ...never.map((n) => `- ${n}`),
      '完成后用三行汇报：做了什么、交给下一个角色的文件、需要我决定的问题。',
      '```',
      '',
    ].join('\n');
  return [
    '# 分工协作提示词（多个 Agent 各做一步）',
    '',
    '<!-- Generated by `npm run prompt -- --write` from remotion-template/scripts/prompt.ts. Do not edit by hand. -->',
    '',
    '适合用 4 个 agent 流水线做一期视频：选题 → 编剧 → 制作 → 审片。每个角色只做自己的一步，靠文件交接；交接条件由 `npm run check` 和 `npm run produce` 把关，所以换任何 agent 结果都一样。一个 agent 也能做完全程，用 `docs/prompts/<模板>.md` 里的单人提示词。',
    '',
    '把每段里的 `<…>` 换成本期内容后发给对应的 agent。',
    '',
    role(
      '选题策划',
      '确定模板和内容，建好 episode 文件夹，写好 brief.md（新闻还要 FACTS.md）。',
      '没有前置文件。',
      [
        '在 remotion-template 里运行 `npm run plan`，确认模板轮换（同一条线相邻两期不用同一个模板）和下一个编号。',
        '按 EXAMS.md 选内容：单词线选一个能覆盖 4–6 个本考试词汇的词根（最近 10 期没做过）；阅读线选故事或有一手来源的新闻话题。',
        '运行 `npm run new -- <模板 id> <编号>_<考试前缀>_<主题>_<模板简称> --exam <考试>`（高考不写考试前缀）。',
        '写 brief.md：每个词的拼写、等级、拆分、意思、搭配；题目、四个选项、答案、sourceNote。新闻：先写 FACTS.md（URL、日期、原文引用）。',
      ],
      ['brief.md 写完且没有占位符；新闻有 FACTS.md。', '每个词都在本考试词表里，等级正确，拓展最多 1 个。'],
      ['写 TREATMENT.md 或 data（那是编剧的工作）。', '用二手来源（博客、短视频）当新闻依据。'],
    ),
    role(
      '编剧',
      '写 TREATMENT.md 和全部 data，让 `npm run check` 没有 ERROR。',
      'episode 文件夹里有完整的 brief.md（新闻还有 FACTS.md）。',
      [
        '读模板的 SKILL.md 和 style.md、参考 episode 的 data，理解每个字段。',
        '写 TREATMENT.md：三个结构候选和选择、钩子、招牌镜头、cue map、音效表、第 9 节与同模板上一期的 6 项对比（至少 3 项不同）。',
        '改写 data/ 里的每一个字段：模板数据文件、voiceScript.ts（text 给配音读，subtitle 给屏幕看；数字、词根拼读按 playbook 6.3）、episodeConfig.ts（exam、封面）。',
        '运行 `npm run episode:use -- ../<文件夹>` 和 `npm run check`，修到没有 ERROR；warn 修好或写进 notes.md。',
      ],
      ['`npm run check` 没有 ERROR。', 'data 里没有参考 episode 或其它考试留下的文字。'],
      ['运行 voice / produce（那是制作的工作）。', '改 brief.md 里已经定好的词和题；需要改时退回选题策划。'],
    ),
    role(
      '制作',
      '把 data 做成通过 QA 的成片。',
      '`npm run check` 没有 ERROR。',
      [
        '运行 `npm run episode:use -- ../<文件夹>`，然后 `npm run produce`。',
        'voice:check 不通过：只改那一句的 text（拼读、数字写法、换说法），不改意思；确认发音正确时才加 asrAccept 并记下来。',
        '时长超出：先删口头词和多余停顿；需要删内容时退回编剧。',
        '重复运行 `npm run produce` 直到 PRODUCE DONE。',
      ],
      ['produce 显示 PRODUCE DONE，exports/<id>_qa.md 是 PASS。', 'exports/<id>_handoff.md 已生成，asrAccept 的句子列在里面。'],
      ['改单词、题目、故事内容或画面结构。', '为了时长缩短字幕停留时间或改模板代码。'],
    ),
    role(
      '审片',
      '像观众和老师一样检查成片，给出通过或退回的结论。',
      'exports/ 里有成片、_qa.md（PASS）、_contact_sheet.jpg、_handoff.md。',
      [
        '看 contact sheet 和 remotion-template/out/qa/<id>/ 的每一张静帧，按模板的 references/qa_checklist.md 逐项打勾。',
        '检查：文字不重叠不出界；小猪是原样、站在地面线上、不挡内容；中文清楚；封面缩略图能看清；画面风格符合 style.md。',
        '检查内容：词等级和考试一致；题目只有一个正确答案、标注正确；新闻数字和 FACTS.md 原文一致。',
        '听成片，尤其是 handoff 里列出的 asrAccept 句子。',
        '在 notes.md 写审片结果：通过，或列出每个问题、时间点和应该退回给谁（编剧 / 制作）。',
      ],
      ['notes.md 有审片结论；通过时 episode 文件夹已提交（不含 exports/、audio/）。'],
      ['自己改 data 或代码（发现问题就退回对应角色）。'],
    ),
  ].join('\n');
};

const args = process.argv.slice(2);
if (args.includes('--write')) {
  const outDir = join(repoDir, 'docs', 'prompts');
  mkdirSync(outDir, {recursive: true});
  for (const id of Object.keys(TEMPLATES) as TemplateId[]) {
    const t = TEMPLATES[id];
    const body = [
      `# ${id} · ${t.title} — 单人完整提示词`,
      '',
      '<!-- Generated by `npm run prompt -- --write` from remotion-template/scripts/prompt.ts. Do not edit by hand. -->',
      '',
      `${t.look}`,
      '',
      '选考试，复制对应的整段，把 `<…>` 换成本期内容，发给 agent。也可以直接生成填好主题的版本：',
      '',
      '```powershell',
      `npm.cmd run prompt -- ${id} --exam cet4 --topic "<主题>"`,
      '```',
      '',
      ...(Object.keys(EXAMS) as ExamId[]).flatMap((exam) => [`## ${EXAMS[exam].name}（${exam}）`, '', '````text', buildPrompt(id, exam), '````', '']),
    ].join('\n');
    writeFileSync(join(outDir, `${id}.md`), body, 'utf8');
  }
  writeFileSync(join(outDir, 'roles.md'), buildRolePrompts(), 'utf8');
  console.log(`Wrote ${Object.keys(TEMPLATES).length} template prompt files and roles.md to ${outDir}`);
} else {
  const positional = args.filter((arg, i) => !arg.startsWith('--') && !['--exam', '--topic'].includes(args[i - 1] ?? ''));
  const id = positional[0];
  const valueOf = (flag: string) => {
    const i = args.findIndex((arg) => arg === flag || arg.startsWith(`${flag}=`));
    if (i < 0) return undefined;
    return args[i].includes('=') ? args[i].split('=').slice(1).join('=') : args[i + 1];
  };
  const exam = valueOf('--exam') ?? 'gaokao';
  if (!id || !isTemplate(id) || !isExam(exam)) {
    console.error('Usage: npm run prompt -- <template> [--exam gaokao|cet4|cet6] [--topic "..."]   or   npm run prompt -- --write');
    console.error(`Templates: ${Object.keys(TEMPLATES).join(', ')}`);
    process.exit(1);
  }
  console.log(buildPrompt(id, exam, valueOf('--topic')));
}
