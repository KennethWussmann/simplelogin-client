import { run } from '../run';

export default async () => {
  await run('build', 'lint');
  await run('checkCodegen');
  await run('test');
};
