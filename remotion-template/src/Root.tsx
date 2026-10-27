import React from 'react';
import {Composition} from 'remotion';
import {CoverThumbnail} from './CoverThumbnail';
import {ReadAloudCover} from './ReadAloudCover';
import {ReadAloudVocabVideo} from './ReadAloudVocabVideo';
import {RootWordVideo} from './RootWordVideo';
import {SentenceCover} from './SentenceCover';
import {SentenceVideo} from './SentenceVideo';
import {episodeConfig} from './data/episodeConfig';
import {
  readAloudDurationFrames,
  READ_ALOUD_FPS,
  READ_ALOUD_HEIGHT,
  READ_ALOUD_WIDTH,
} from './readAloudTimeline';
import {FPS, TIMELINE, durationFrames} from './timeline';
import {SENTENCE_FPS, SENTENCE_HEIGHT, sentenceDurationFrames, SENTENCE_WIDTH} from './sentenceTimeline';

export const Root: React.FC = () => {
  return (
    <>
      <Composition
        id="RootWordTemplate"
        component={RootWordVideo}
        durationInFrames={durationFrames}
        fps={TIMELINE.fps}
        width={TIMELINE.width}
        height={TIMELINE.height}
      />
      <Composition
        id="SentencePatternVideo"
        component={SentenceVideo}
        durationInFrames={sentenceDurationFrames}
        fps={SENTENCE_FPS}
        width={SENTENCE_WIDTH}
        height={SENTENCE_HEIGHT}
        defaultProps={{episodeType: episodeConfig.type}}
      />
      <Composition
        id="ReadAloudVocabTemplate"
        component={ReadAloudVocabVideo}
        durationInFrames={readAloudDurationFrames}
        fps={READ_ALOUD_FPS}
        width={READ_ALOUD_WIDTH}
        height={READ_ALOUD_HEIGHT}
      />
      <Composition
        id="DouyinCover"
        component={CoverThumbnail}
        durationInFrames={1}
        fps={FPS}
        width={1080}
        height={1920}
      />
      <Composition
        id="ReadAloudCover"
        component={ReadAloudCover}
        durationInFrames={1}
        fps={READ_ALOUD_FPS}
        width={1080}
        height={1920}
      />
      <Composition
        id="SentenceCover"
        component={SentenceCover}
        durationInFrames={1}
        fps={SENTENCE_FPS}
        width={SENTENCE_WIDTH}
        height={SENTENCE_HEIGHT}
      />
    </>
  );
};
