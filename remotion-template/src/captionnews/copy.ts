import {BRAND} from '../brand/brand';
import {ensureSentence, ReleaseCopy} from '../core/copy';
import {captionNews} from '../data/captionNews';
import {episodeConfig} from '../data/episodeConfig';
import {EXAM, tagsFor} from '../core/exam';

const TAGS = tagsFor(['#英语阅读', '#双语阅读'], BRAND.creatorName);

export const captionNewsCopy = (): ReleaseCopy => {
  const words = captionNews.vocab.map((word) => `${word.word} ${word.meaning.split('；')[0]}`).join('、');
  const sources = captionNews.sources.map((source) => `${source.label}（${source.url}）`).join('；');
  return {
    caption: [
      ensureSentence(episodeConfig.cover?.headline || captionNews.headline.zh),
      ensureSentence(`一篇 1 分钟的英文短新闻，中英对照：${captionNews.headline.en}`),
      ensureSentence(`顺手记住 ${captionNews.vocab.length} 个${EXAM.word}：${words}`),
      ensureSentence(`最后一道阅读题：${captionNews.question.stem}`),
      TAGS,
    ].join(''),
    titles: [episodeConfig.cover?.headline || captionNews.headline.zh, `${captionNews.headline.en} | 双语阅读`, `双语新闻阅读 No.${captionNews.newsNo}：${captionNews.headline.zh}`],
    tags: TAGS,
    pinnedComment: `数据来源：${sources}`,
    checks: [
      '每一个数字都在 FACTS.md 里有来源和原文引用，画面上有 SOURCE 标签',
      `阅读题标注为“${captionNews.question.sourceNote}”，答案有原文定位`,
      '每一块英文字幕下都有中文',
    ],
  };
};
