import {captionNews, NewsScene} from '../data/captionNews';
import {episodeConfig} from '../data/episodeConfig';
import {buildTimeline, Cue, LineTiming, SceneTiming} from '../core/timeline';

// Caption News cues: the caption lands phrase by phrase as it is spoken, the keyword hits, sources slide in.

export type NewsTiming = SceneTiming<NewsScene>;

// Phrases of a line: split at punctuation, then into runs of at most four words.
export const phrasesOf = (text: string) => {
  const words = text.split(/\s+/).filter(Boolean);
  const phrases: {text: string; firstWord: number}[] = [];
  let current: string[] = [];
  let first = 0;
  words.forEach((word, i) => {
    if (current.length === 0) first = i;
    current.push(word);
    if (/[,.:;?!]$/.test(word) || current.length >= 4) {
      phrases.push({text: current.join(' '), firstWord: first});
      current = [];
    }
  });
  if (current.length) phrases.push({text: current.join(' '), firstWord: first});
  return phrases;
};

// Time each phrase starts being spoken. The subtitle may differ from the voice text (digits vs spelled-out
// numbers), so phrases are placed by their weighted position in the subtitle.
const weightOf = (word: string) => word.length + (/[,.:;?!]$/.test(word) ? 4 : 0) + 0.6;

export const subtitleAt = (line: LineTiming, fraction: number) => line.start + (line.end - line.start) * Math.min(1, Math.max(0, fraction));

export const phraseTimes = (line: LineTiming) => {
  const words = line.subtitle.split(/\s+/).filter(Boolean);
  const total = words.reduce((sum, word) => sum + weightOf(word), 0);
  const before = words.map((_, i) => words.slice(0, i).reduce((sum, word) => sum + weightOf(word), 0) / Math.max(total, 1));
  return phrasesOf(line.subtitle).map((phrase) => ({...phrase, at: subtitleAt(line, before[phrase.firstWord] ?? 0)}));
};

// When a subtitle phrase is spoken (by its position in the subtitle).
export const subtitleSpokenAt = (line: LineTiming, phrase: string, fallback = 0.5) => {
  const index = line.subtitle.indexOf(phrase);
  return subtitleAt(line, index < 0 ? fallback : index / Math.max(line.subtitle.length, 1));
};

export const CAPTION_NEWS = buildTimeline<NewsScene>({
  scenes: captionNews.scenes,
  lineMeta: captionNews.lineMeta,
  bpm: captionNews.score.bpm,
  active: episodeConfig.type === 'reading-caption-news',
  captionTail: 0.9, // the Chinese line needs reading time too
  cuesFor: (timing, {spokenAt, beat}): Cue[] => {
    const {scene, start, lines} = timing;
    const [first, second] = lines;
    switch (scene.kind) {
      case 'headline':
        return [
          {name: 'kicker', t: start + 0.05, sfx: 'hit', gain: 0.8},
          {name: 'title', t: start + 0.3, sfx: 'swoosh', gain: 0.6},
          {name: 'zh', t: first.end, sfx: 'tick'},
        ];
      case 'chunk': {
        const chunk = captionNews.chunks[first.id];
        const phrases = phraseTimes(first);
        const keywordAt = chunk?.keyword ? subtitleSpokenAt(first, chunk.keyword, 0.5) : first.end;
        const cues: Cue[] = [
          {name: 'cut', t: start, sfx: 'hit', gain: 0.55},
          {name: 'graphic', t: start + 0.15, sfx: 'pop', gain: 0.5},
          ...phrases.map((phrase, i) => ({name: `p${i}`, t: phrase.at, sfx: i ? ('swoosh' as const) : undefined, gain: 0.3})),
          {name: 'keyword', t: keywordAt, sfx: 'stamp-small', gain: 0.5},
        ];
        if (chunk?.sourceId) cues.push({name: 'source', t: keywordAt + 0.35, sfx: 'swoosh', gain: 0.4});
        return cues;
      }
      case 'question': {
        const answer = second;
        const ticks: Cue[] = [];
        if (answer) {
          for (let t = first.holdEnd; t < answer.start - 0.15; t += beat) ticks.push({name: `tick${ticks.length}`, t, sfx: 'tick', gain: 1.4});
        }
        return [
          {name: 'board', t: start, sfx: 'hit', gain: 0.6},
          ...captionNews.question.options.map((_, i) => ({name: `opt${i}`, t: start + 0.5 + i * 0.18, sfx: 'pop' as const, gain: 0.5})),
          ...ticks,
          {name: 'answer', t: answer ? spokenAt(answer, `${String.fromCharCode(65 + captionNews.question.answerIndex)}.`, 0.3) : first.end + 1, sfx: 'hit'},
          {name: 'evidence', t: answer ? answer.start + 1.0 : first.end + 1.5, sfx: 'swoosh', gain: 0.5},
        ];
      }
      case 'recap':
        return [
          {name: 'board', t: start, sfx: 'hit', gain: 0.5},
          ...captionNews.vocab.map((word, i) => ({name: `w${i}`, t: spokenAt(first, word.word, (i + 1) / (captionNews.vocab.length + 1)), sfx: 'pop' as const, gain: 0.6})),
          {name: 'sign', t: (second ?? first).start, sfx: 'swoosh', gain: 0.5},
        ];
      default:
        return [];
    }
  },
});
