import { buildDocs, buildOAS, buildSdk, clean, lint } from './steps';
import { buildPagesIndex } from './steps/buildPagesIndex';
import { buildSrc } from './steps/buildSrc';
import { measureBuildTime } from './utils';

measureBuildTime(async () => {
  await clean();
  const oas = await buildOAS();
  await buildSdk(oas);
  await lint();
  await buildSrc();
  await buildDocs(oas);
  await buildPagesIndex();
});
