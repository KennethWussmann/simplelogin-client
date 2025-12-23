import { buildDocs, buildPagesIndex } from '../steps';
import { sectionHeader } from '../utils';
import build from './build';

export default async () => {
  console.log(sectionHeader('📚 Building Documentation'));

  const oas = await build();
  await buildDocs(oas);
  await buildPagesIndex();
};
