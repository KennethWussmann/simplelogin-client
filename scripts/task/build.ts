import { run } from '../run';
import { buildDocs, buildPagesIndex, buildOAS, createDirs, buildSrc, buildSdk2 } from '../steps';

export default async (formatOrLint: 'format' | 'lint' = 'format') => {
  await createDirs();
  const oas = await buildOAS();
  await buildSdk2(oas);
  await run(formatOrLint);
  await Promise.all([buildSrc(), buildDocs(oas)]);
  await buildPagesIndex();
};
