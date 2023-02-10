import { run } from '../run';
import { measureBuildTime } from '../utils';

export default () =>
  measureBuildTime(async () => {
    await run('clean');
    await run('build');
  });
