import { run } from '../run';
import { buildDocs, buildPagesIndex, buildOAS, buildSdk, createDirs, buildSrc } from '../steps';
import { measureBuildTime } from '../utils';

export default (formatOrLint: 'format' | 'lint' = 'format') =>
  measureBuildTime(async () => {
    await createDirs();
    const oas = await buildOAS();
    await buildSdk(oas);
    await run(formatOrLint);
    await Promise.all([buildSrc(), buildDocs(oas)]);
    await buildPagesIndex();
  });
