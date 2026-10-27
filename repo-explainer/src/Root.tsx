import React from 'react';
import {Composition} from 'remotion';
import {Explainer} from './Explainer';
import {durationFrames, FPS} from './timeline';
import {HEIGHT, WIDTH} from './theme';

export const Root: React.FC = () => (
  <Composition id="RepoExplainer" component={Explainer} durationInFrames={durationFrames} fps={FPS} width={WIDTH} height={HEIGHT} />
);
