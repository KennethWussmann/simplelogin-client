import { run } from '../run';
import { sectionHeader } from '../utils';

export default async () => {
  console.log(sectionHeader('♻️ Rebuilding'));

  await run('clean');
  await run('build');
};
