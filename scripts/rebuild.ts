import { buildDocs, buildOAS, buildSdk, clean, lint } from './steps';
import { buildPagesIndex } from './steps/buildPagesIndex';
import { measureBuildTime } from './utils';

measureBuildTime(async () => {
  await clean();
  const oas = await buildOAS();
  await buildSdk(oas);
  await lint();
  await buildDocs(oas);
  await buildPagesIndex();
});
