import { run } from '../run';
import { buildDocs, buildPagesIndex, buildOAS, buildSdk, createDirs, buildSrc } from '../steps';
import { measureBuildTime } from '../utils';

export default () =>
  measureBuildTime(async () => {
    await createDirs();
    const oas = await buildOAS();
    await buildSdk(oas);
    await run('format');
    await buildSrc();
    await buildDocs(oas);
    await buildPagesIndex();
  });
