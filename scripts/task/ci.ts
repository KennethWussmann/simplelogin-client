import { run } from '../run';
import { measureBuildTime } from '../utils';

export default () =>
  measureBuildTime(async () => {
    await run('rebuild');
    await run('checkCodegen');
    await run('test');
  });
