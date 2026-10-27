import {BRAND} from '../brand/brand';
import {ensureSentence, ReleaseCopy} from '../core/copy';
import {episodeConfig} from '../data/episodeConfig';
import {pictureBook} from '../data/pictureBook';

const TAGS = `#高考英语 #英语阅读 #英文绘本 #高考词汇 #${BRAND.creatorName}`;

export const pictureBookCopy = (): ReleaseCopy => {
  const words = pictureBook.targets.map((target) => `${target.lemma} ${target.meaning.split('；')[0]}`).join('、');
  const extension = pictureBook.targets.filter((target) => target.level === '拓展').map((target) => target.lemma);
  return {
    caption: [
      ensureSentence(`${pictureBook.title.en}｜${pictureBook.title.zh}`),
      ensureSentence(`一个 1 分钟英文小故事，边听边看中文，顺手记住 ${pictureBook.targets.length} 个高考词：${words}`),
      ensureSentence(`读完答一题：${pictureBook.question.stem}`),
      TAGS,
    ].join(''),
    titles: [
      episodeConfig.cover?.headline || pictureBook.title.zh,
      `${pictureBook.title.en} | ${pictureBook.targets.slice(0, 3).map((target) => target.lemma).join(' / ')}`,
      `英文绘本精读 No.${pictureBook.bookNo}：${pictureBook.title.zh}`,
    ],
    tags: TAGS,
    checks: [
      `拓展词：${extension.length ? extension.join(' / ') : '无（全部为课标词汇）'}`,
      `阅读题标注为“${pictureBook.question.sourceNote}”，答案有原文定位`,
      '每一句英文下都有中文；目标词在读到时出现释义',
    ],
  };
};
