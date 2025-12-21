import { run } from './run';
import { measureBuildTime } from './utils';

process.env.FORCE_COLOR = '1';
measureBuildTime(run);
