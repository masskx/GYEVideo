import {existsSync, mkdirSync, readFileSync, writeFileSync} from 'node:fs';
import {join} from 'node:path';
import {fileURLToPath} from 'node:url';
import {episodeConfig} from '../src/data/episodeConfig';
import {rootInfo, words} from '../src/data/words';
import {sentenceExamples, sentenceInfo} from '../src/data/sentencePattern';
import {sentenceVideoMeta} from '../src/sentenceVideoMeta';
import {publishNotes} from '../src/core/copy';
import {isTemplate} from '../src/templates/registry';
import {RUNTIMES} from '../src/templates/timelines';

type ActiveEpisodeMeta = {
  episodeDir: string;
  episodeSlug: string;
  exportBaseName: string;
};

const templateDir = fileURLToPath(new URL('..', import.meta.url));
const workspaceDir = fileURLToPath(new URL('../..', import.meta.url));
const activeEpisodePath = join(templateDir, '.active-episode.json');
const outDir = join(templateDir, 'out');

const cleanInline = (text: string | undefined) => (text ?? '').replace(/`/g, '').replace(/\s+/g, ' ').trim();

const ensureSentence = (text: string | undefined) => {
  const trimmed = cleanInline(text);
  if (!trimmed) {
    return '';
  }

  return /[。！？?!]$/.test(trimmed) ? trimmed : `${trimmed}。`;
};

const joinChineseLine = (parts: Array<string | undefined>) =>
  parts
    .map((part) => cleanInline(part))
    .filter(Boolean)
    .join('');

const rootToken = cleanInline(rootInfo.root).replace(/-/g, '').replace(/\s+/g, ' ').trim();
const rootMeaning = cleanInline(rootInfo.meaning);
const chineseMeaning = rootMeaning.split('/').at(-1)?.trim() ?? rootMeaning;
const hookMain = cleanInline(episodeConfig.hook?.mainText);
const highlightWords = (
  episodeConfig.hook?.flashWords?.slice(0, 3) ?? words.slice(0, 3).map((word) => word.word)
).map((word) => cleanInline(word));

const primaryWord = words[0];
const primaryWordMeaning = cleanInline(primaryWord?.meaning ?? '');
const primaryWordMeaningShort =
  primaryWordMeaning.split(/[，,]/)[0]?.replace(/^的/, '').trim() ?? primaryWordMeaning;
const exportBaseNameFromConfig = cleanInline(episodeConfig.exportBaseName || episodeConfig.episodeId);

const buildSentenceCaptionText = () => {
  const exampleLine = sentenceExamples
    .slice(0, 3)
    .map((example) => cleanInline(example.zh))
    .filter(Boolean)
    .join(' / ');

  return [
    ensureSentence(episodeConfig.cover?.headline || sentenceInfo.title),
    ensureSentence(sentenceVideoMeta.chinesePainPoint || sentenceInfo.coreMeaning),
    ensureSentence(`先记住这句：${sentenceVideoMeta.earwormLine}`),
    ensureSentence(`跟读口号：${sentenceVideoMeta.chorusLines.slice(0, 2).join(' / ')}`),
    exampleLine ? ensureSentence(`常见场景：${exampleLine}`) : '',
    '#英语学习 #英语表达 #英语口语 #句子纠错 #小猪盖被',
  ]
    .filter(Boolean)
    .join('');
};

const buildSentencePublishNotes = (baseName: string) => {
  const titles = [
    episodeConfig.cover?.headline || sentenceInfo.title,
    `${sentenceVideoMeta.earwormLine} | ${sentenceInfo.coreMeaning}`,
    `${sentenceInfo.title} | ${sentenceVideoMeta.memorySound}`,
  ];

  return `# Publish Notes

## 标题备选
- ${titles[0]}
- ${titles[1]}
- ${titles[2]}

## 标签

#英语学习 #英语表达 #英语口语 #句子纠错 #小猪盖被

## 发布前检查
- 确认最终视频文件：\`${baseName}.mp4\`
- 确认封面文件：\`${baseName}_cover.png\`
- 确认文案文件：\`${baseName}_caption.txt\`
- 确认结尾锁住的是英文耳虫句，而不只是中文总结
- 确认 opening shell 和 rhythm type 不像上一条
- 确认字幕无乱码、无遮挡、无重叠
- 确认音频正常播放
`;
};

const buildCaptionText = () => {
  const opening = hookMain || `${primaryWord?.word ?? rootToken} 不只会让你想到“${primaryWordMeaningShort}”`;
  const cluster = highlightWords.join('、');

  return [
    ensureSentence(opening),
    ensureSentence(`记住一个词根：${rootToken} = ${rootMeaning}`),
    ensureSentence(`${cluster} 其实不是孤立单词，它们都围着“${chineseMeaning}”展开`),
    ensureSentence(`下次再遇到带 ${rootToken} 的词，先想核心义，再判断语境，背单词会轻松很多`),
    '#英语学习 #词根词缀 #单词记忆 #英语词汇 #小猪盖被',
  ].join('');
};

const buildPublishNotes = (activeEpisode: ActiveEpisodeMeta) => {
  const opening = hookMain || `${primaryWord?.word ?? rootToken} 不只会让你想到“${primaryWordMeaningShort}”`;
  const titleCandidates = [
    opening,
    joinChineseLine([`${rootToken} = ${chineseMeaning}`, ' | ', highlightWords.join(' / ')]),
    `抓住 ${rootToken}，一串单词一起记`,
  ];

  return `# Publish Notes

## 标题备选
- ${titleCandidates[0]}
- ${titleCandidates[1]}
- ${titleCandidates[2]}

## 标签

#英语学习 #词根词缀 #单词记忆 #英语词汇 #小猪盖被

## 发布前检查
- 确认最终视频文件：\`${activeEpisode.exportBaseName}.mp4\`
- 确认封面文件：\`${activeEpisode.exportBaseName}_cover.png\`
- 确认文案文件：\`${activeEpisode.exportBaseName}_caption.txt\`
- 确认字幕无乱码、无遮挡、无重叠
- 确认音频正常播放
`;
};

export const generateReleaseCopy = () => {
  if (!existsSync(activeEpisodePath)) {
    console.error('No active episode found. Run `npm run episode:use -- ../episodes/<episode>` first.');
    process.exit(1);
  }

  const activeEpisode = existsSync(activeEpisodePath)
    ? (JSON.parse(readFileSync(activeEpisodePath, 'utf8')) as ActiveEpisodeMeta)
    : null;

  const exportBaseName = exportBaseNameFromConfig || activeEpisode?.exportBaseName || episodeConfig.episodeId;
  const exportsDir =
    episodeConfig.type === 'sentence-pattern'
      ? join(workspaceDir, 'sentence-episodes', exportBaseName, 'exports')
      : join(activeEpisode!.episodeDir, 'exports');

  const captionPath = join(exportsDir, `${exportBaseName}_caption.txt`);
  const publishNotesPath = join(exportsDir, `${exportBaseName}_publish_notes.md`);
  const outCaptionPath = join(outDir, `${exportBaseName}_caption.txt`);
  const outPublishNotesPath = join(outDir, `${exportBaseName}_publish_notes.md`);

  mkdirSync(exportsDir, {recursive: true});
  mkdirSync(outDir, {recursive: true});

  const type = episodeConfig.type;
  const runtime = isTemplate(type) ? RUNTIMES[type] : undefined;
  const templateCopy = runtime?.copy();
  const captionText = templateCopy
    ? templateCopy.caption
    : type === 'sentence-pattern'
      ? buildSentenceCaptionText()
      : buildCaptionText();
  const publishNotesText = templateCopy
    ? publishNotes(templateCopy, exportBaseName)
    : type === 'sentence-pattern'
      ? buildSentencePublishNotes(exportBaseName)
      : buildPublishNotes(activeEpisode!);

  writeFileSync(captionPath, `${captionText}\n`, 'utf8');
  writeFileSync(publishNotesPath, publishNotesText, 'utf8');
  writeFileSync(outCaptionPath, `${captionText}\n`, 'utf8');
  writeFileSync(outPublishNotesPath, publishNotesText, 'utf8');

  console.log(`Caption exported to: ${captionPath}`);
  console.log(`Publish notes exported to: ${publishNotesPath}`);
  console.log(`Caption exported to: ${outCaptionPath}`);
  console.log(`Publish notes exported to: ${outPublishNotesPath}`);
};
