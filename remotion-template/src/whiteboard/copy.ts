import {BRAND} from '../brand/brand';
import {ensureSentence, ReleaseCopy} from '../core/copy';
import {episodeConfig} from '../data/episodeConfig';
import {whiteboard} from '../data/whiteboard';

const TAGS = `#高考英语 #高考词汇 #词根词缀 #英语学习 #${BRAND.creatorName}`;

export const whiteboardCopy = (): ReleaseCopy => {
  const root = `${whiteboard.root.forms.join(' / ')} = ${whiteboard.root.en}，${whiteboard.root.meaning}`;
  const words = whiteboard.words.map((word) => `${word.word} ${word.meaning.split('；')[0]}`).join('、');
  const twist = whiteboard.words.find((word) => word.twist);
  const extension = whiteboard.words.filter((word) => word.level === '拓展').map((word) => word.word);
  return {
    caption: [
      ensureSentence(episodeConfig.cover?.headline || whiteboard.title),
      ensureSentence(`一张白板，一个词根：${root}`),
      ensureSentence(`一口气写满 ${whiteboard.words.length} 个高考词：${words}`),
      twist ? ensureSentence(`最意外的是 ${twist.word}：${twist.literal.replace(/→/g, '，')}，所以是${twist.meaning}`) : '',
      ensureSentence('最后一题贴在白板上，答案写在评论区'),
      TAGS,
    ].join(''),
    titles: [
      episodeConfig.cover?.headline || whiteboard.title,
      `${root} | ${whiteboard.words.slice(0, 3).map((word) => word.word).join(' / ')}`,
      `白板词根图 No.${whiteboard.boardNo}：${whiteboard.root.forms.join(' / ')}`,
    ],
    tags: TAGS,
    pinnedComment: `白板作业：${whiteboard.homework.stem}\n答案：${whiteboard.homework.options[whiteboard.homework.answerIndex]}（下一期发布后再置顶）`,
    checks: [
      `拓展词：${extension.length ? extension.join(' / ') : '无（全部为课标词汇）'}`,
      `作业题标注为“${whiteboard.homework.sourceNote}”`,
      '全片没有硬切：镜头在同一块白板上移动',
    ],
  };
};
