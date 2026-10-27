import {BRAND} from '../brand/brand';
import {dossier} from '../data/dossier';
import {episodeConfig} from '../data/episodeConfig';
import {ensureSentence, ReleaseCopy} from '../core/copy';

const TAGS = `#高考英语 #高考词汇 #词根词缀 #英语学习 #${BRAND.creatorName}`;

export const dossierCopy = (): ReleaseCopy => {
  const words = dossier.words.map((word) => `${word.word} ${word.meaning.split('；')[0]}`).join('、');
  const extension = dossier.words.filter((word) => word.level === '拓展').map((word) => word.word);
  return {
    caption: [
      ensureSentence(episodeConfig.cover?.headline || dossier.title),
      ensureSentence(`一个指纹 ${dossier.root.text}，${dossier.root.en}，${dossier.root.meaning}`),
      ensureSentence(`这一份案卷破了 ${dossier.words.length} 个高考词：${words}`),
      ensureSentence(`最后一题留给你：${dossier.homework.stem}，答案写在评论区`),
      TAGS,
    ].join(''),
    titles: [
      episodeConfig.cover?.headline || dossier.title,
      `${dossier.root.text} = ${dossier.root.en} | ${dossier.words.slice(0, 3).map((word) => word.word).join(' / ')}`,
      `高考词汇案卷 No.${dossier.caseNo}：${dossier.title}`,
    ],
    tags: TAGS,
    pinnedComment: `上期作业：${dossier.homework.stem}\n答案：${dossier.homework.options[dossier.homework.answerIndex]}（下一期发布后再置顶）`,
    checks: [
      `结构：${dossier.structure}，和上一期不同`,
      `拓展词：${extension.length ? extension.join(' / ') : '无（全部为课标词汇）'}`,
      `题目标注为“${dossier.hookCase.sourceNote}”，没有冒充真题`,
    ],
  };
};
