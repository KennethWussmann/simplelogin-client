import { run } from '../run';

export default async () => {
  await run('build', 'lint');
  await run('format');
  await run('checkCodegen');
  await run('test');
};
