import {existsSync, mkdirSync, readFileSync, writeFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import {join} from 'node:path';

const templateDir = fileURLToPath(new URL('..', import.meta.url));
const activeEpisodePath = join(templateDir, '.active-episode.json');
const wordsPath = join(templateDir, 'src', 'data', 'words.ts');
const episodeConfigPath = join(templateDir, 'src', 'data', 'episodeConfig.ts');

const cleanInline = (text = '') => text.replace(/`/g, '').replace(/\s+/g, ' ').trim();
const ensureSentence = (text) => {
  const trimmed = cleanInline(text);
  if (!trimmed) return '';
  return /[。！？.!?]$/.test(trimmed) ? trimmed : `${trimmed}。`;
};

const readText = (path) => readFileSync(path, 'utf8');

const extractFirstMatch = (source, pattern) => {
  const match = source.match(pattern);
  return match?.[1] ?? '';
};

const parseWords = (source) => {
  const matches = [...source.matchAll(/\{word:\s*'([^']+)'[\s\S]*?meaning:\s*'([^']+)'\}/g)];
  return matches.map((match) => ({
    word: cleanInline(match[1]),
    meaning: cleanInline(match[2]),
  }));
};

if (!existsSync(activeEpisodePath)) {
  console.error('No active episode found. Run `npm run episode:use -- ../episodes/<episode>` first.');
  process.exit(1);
}

const activeEpisode = JSON.parse(readText(activeEpisodePath));
const wordsSource = readText(wordsPath);
const configSource = readText(episodeConfigPath);

const rootToken = cleanInline(extractFirstMatch(wordsSource, /root:\s*'([^']+)'/)).replace(/^-/, '');
const rootMeaning = cleanInline(extractFirstMatch(wordsSource, /meaning:\s*'([^']+)'/));
const chineseMeaning = rootMeaning.split('/').at(-1)?.trim() ?? rootMeaning;
const hookMain = cleanInline(extractFirstMatch(configSource, /mainText:\s*'([^']+)'/));
const words = parseWords(wordsSource);
const highlightWords = (
  [...configSource.matchAll(/flashWords:\s*\[([\s\S]*?)\]/g)][0]?.[1]
    ?.split(',')
    .map((item) => cleanInline(item.replace(/'/g, '')))
    .filter(Boolean)
    .slice(0, 3) ?? words.slice(0, 3).map((word) => word.word)
);
const primaryWord = words[0] ?? {word: rootToken, meaning: chineseMeaning};
const primaryWordMeaningShort = primaryWord.meaning.split('；')[0]?.replace(/的$/, '') ?? primaryWord.meaning;

const buildCaptionText = () => {
  const opening = hookMain || `${primaryWord.word} 不只是“${primaryWordMeaningShort}”`;
  const cluster = highlightWords.join('、');

  return [
    ensureSentence(opening),
    `记住一个词根：${rootToken} = ${rootMeaning}。`,
    `${cluster} 其实不是孤立单词，它们都围着“${chineseMeaning}”展开。`,
    `下次再遇到带 ${rootToken} 的词，先想核心义，再去判断语境，背单词会轻松很多。`,
    '#英语学习 #词根词缀 #单词记忆 #英语词汇 #小猪盖被',
  ].join('');
};

const buildPublishNotes = () => {
  const opening = hookMain || `${primaryWord.word} 不只是“${primaryWordMeaningShort}”`;
  const titleCandidates = [
    opening,
    `${rootToken} = ${chineseMeaning}：${highlightWords.join(' / ')}`,
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

- 确认最终视频文件：\`${activeEpisode.exportBaseName}_final_960x720.mp4\`
- 确认封面文件：\`${activeEpisode.exportBaseName}_cover.png\`
- 确认文案文件：\`${activeEpisode.exportBaseName}_caption.txt\`
- 确认字幕无乱码
- 确认音频正常播放
`;
};

const exportsDir = join(activeEpisode.episodeDir, 'exports');
const captionPath = join(exportsDir, `${activeEpisode.exportBaseName}_caption.txt`);
const publishNotesPath = join(exportsDir, `${activeEpisode.exportBaseName}_publish_notes.md`);

mkdirSync(exportsDir, {recursive: true});
writeFileSync(captionPath, `${buildCaptionText()}\n`, 'utf8');
writeFileSync(publishNotesPath, buildPublishNotes(), 'utf8');

console.log(`Caption exported to: ${captionPath}`);
console.log(`Publish notes exported to: ${publishNotesPath}`);
