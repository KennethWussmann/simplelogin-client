import { buildDocs, buildPagesIndex, buildOAS, createDirs } from '../steps';

export default async () => {
  await createDirs();
  const oas = await buildOAS();
  await buildDocs(oas);
  await buildPagesIndex();
};
