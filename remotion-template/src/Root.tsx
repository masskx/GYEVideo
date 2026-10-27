import React from 'react';
import {Composition} from 'remotion';
import {CoverThumbnail} from './CoverThumbnail';
import {RootWordVideo} from './RootWordVideo';
import {SentenceCover} from './SentenceCover';
import {SentenceVideo} from './SentenceVideo';
import {FPS as CORE_FPS, HEIGHT, WIDTH} from './core/timeline';
import {episodeConfig} from './data/episodeConfig';
import {COMPOSITIONS} from './templates/compositions';
import {TEMPLATES, TemplateId} from './templates/registry';
import {FPS, TIMELINE, durationFrames} from './timeline';
import {SENTENCE_FPS, SENTENCE_HEIGHT, sentenceDurationFrames, SENTENCE_WIDTH} from './sentenceTimeline';

export const Root: React.FC = () => {
  return (
    <>
      {(Object.keys(COMPOSITIONS) as TemplateId[]).map((id) => {
        const parts = COMPOSITIONS[id]!;
        return (
          <React.Fragment key={id}>
            <Composition id={TEMPLATES[id].video} component={parts.Video} durationInFrames={parts.durationFrames} fps={CORE_FPS} width={WIDTH} height={HEIGHT} />
            <Composition id={TEMPLATES[id].cover} component={parts.Cover} durationInFrames={1} fps={CORE_FPS} width={WIDTH} height={HEIGHT} />
          </React.Fragment>
        );
      })}
      {/* Legacy lines: black/yellow root words (frozen) and sentence videos. */}
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
      <Composition id="DouyinCover" component={CoverThumbnail} durationInFrames={1} fps={FPS} width={1080} height={1920} />
      <Composition id="SentenceCover" component={SentenceCover} durationInFrames={1} fps={SENTENCE_FPS} width={SENTENCE_WIDTH} height={SENTENCE_HEIGHT} />
    </>
  );
};
