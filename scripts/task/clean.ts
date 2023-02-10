import { clean } from '../steps';
import { measureBuildTime } from '../utils';

export default () =>
  measureBuildTime(async () => {
    await clean();
  });
