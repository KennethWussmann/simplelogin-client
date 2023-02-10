import { buildDocs, buildPagesIndex, buildOAS, buildSdk, createDirs, lint } from '../steps';
import { measureBuildTime } from '../utils';

export default () =>
  measureBuildTime(async () => {
    await createDirs();
    const oas = await buildOAS();
    await buildSdk(oas);
    await lint();
    // await buildSrc();
    await buildDocs(oas);
    await buildPagesIndex();
  });
