import { run } from '../run';
import { checkCodegen } from '../steps';
import { measureBuildTime } from '../utils';

export default () =>
  measureBuildTime(async () => {
    await run('rebuild');
    await checkCodegen();
  });
