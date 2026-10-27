import {runRender} from './render-runner';
import {generateReleaseCopy} from './generate-release-copy';

const mode =
  process.env.RENDER_MODE === 'cover'
    ? 'cover'
    : process.env.RENDER_MODE === 'video'
      ? 'video'
      : 'both';

runRender(mode);

if (mode === 'both') {
  generateReleaseCopy();
}
