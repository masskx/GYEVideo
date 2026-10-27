// Release copy (Douyin caption + publish notes) shared shape. Each template builds one from its data.

export type ReleaseCopy = {
  caption: string; // ~150 Chinese characters with built-in # tags
  titles: string[]; // 3 title candidates
  tags: string;
  pinnedComment?: string;
  checks: string[]; // template-specific pre-publish checks
};

const clean = (text: string | undefined) => (text ?? '').replace(/`/g, '').replace(/\s+/g, ' ').trim();

export const ensureSentence = (text: string | undefined) => {
  const trimmed = clean(text);
  if (!trimmed) {
    return '';
  }
  return /[。！？?!.]$/.test(trimmed) ? trimmed : `${trimmed}。`;
};

export const publishNotes = (copy: ReleaseCopy, baseName: string) => `# Publish Notes

## 标题备选
${copy.titles.map((title) => `- ${title}`).join('\n')}

## 标签

${copy.tags}
${copy.pinnedComment ? `\n## 评论区置顶\n${copy.pinnedComment}\n` : ''}
## 发布前检查
- 确认最终视频文件：\`${baseName}.mp4\`
- 确认封面文件：\`${baseName}_cover.png\`
- 确认文案文件：\`${baseName}_caption.txt\`
- 确认 QA 报告：\`${baseName}_qa.md\` 全部通过
${copy.checks.map((check) => `- ${check}`).join('\n')}
- 小猪形象与 src/brand/BrandPig.tsx 一致，没有出现其他猪
`;
