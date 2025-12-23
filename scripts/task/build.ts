import { sdkDestination } from '../constants';
import { run } from '../run';
import { buildOAS, buildSdk, buildSrc, clean, createDirs } from '../steps';
import { sectionHeader } from '../utils';

export default async (formatOrLint: 'format' | 'lint' = 'format') => {
  console.log(sectionHeader('📦 Building SDK'));

  // always clean sdkDestination because building it might remove files
  await clean([sdkDestination]);

  await createDirs();
  const oas = await buildOAS();
  await buildSdk(oas);
  await run(formatOrLint);
  await buildSrc();
  return oas;
};
