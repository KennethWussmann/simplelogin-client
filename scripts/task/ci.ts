import { run } from '../run';
import { measureBuildTime } from '../utils';

export default () =>
  measureBuildTime(async () => {
    await run('build', 'lint');
    await run('checkCodegen');
    await run('test');
  });
