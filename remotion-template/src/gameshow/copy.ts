import {BRAND} from '../brand/brand';
import {ensureSentence, ReleaseCopy} from '../core/copy';
import {episodeConfig} from '../data/episodeConfig';
import {gameShow} from '../data/gameShow';
import {allCoreLabel, EXAM, tagsFor} from '../core/exam';

const TAGS = tagsFor(['#词根词缀', '#英语学习'], BRAND.creatorName);

export const gameShowCopy = (): ReleaseCopy => {
  const words = gameShow.words.map((word) => `${word.word} ${word.meaning.split('；')[0]}`).join('、');
  const extension = gameShow.words.filter((word) => word.level === EXAM.extension).map((word) => word.word);
  return {
    caption: [
      ensureSentence(episodeConfig.cover?.headline || gameShow.showTitle),
      ensureSentence(`通关密码 ${gameShow.root.text} = ${gameShow.root.en}，${gameShow.root.meaning}`),
      ensureSentence(`五关连闯：${words}`),
      ensureSentence(`加分题：${gameShow.bonus.stem}，评论区抢答`),
      TAGS,
    ].join(''),
    titles: [
      episodeConfig.cover?.headline || gameShow.showTitle,
      `${gameShow.root.text} = ${gameShow.root.meaning} | ${gameShow.words.slice(0, 3).map((word) => word.word).join(' / ')}`,
      `${gameShow.showTitle} 第${gameShow.episodeNo}期：${gameShow.root.text}`,
    ],
    tags: TAGS,
    pinnedComment: `加分题：${gameShow.bonus.stem}\n答案：${gameShow.bonus.options[gameShow.bonus.answerIndex]}（下一期发布后再置顶）`,
    checks: [
      `拓展词：${extension.length ? extension.join(' / ') : `无（${allCoreLabel()}）`}`,
      `加分题标注为“${gameShow.bonus.sourceNote}”`,
      '每一关的判定词都在画面里停留至少 0.5 秒',
    ],
  };
};
