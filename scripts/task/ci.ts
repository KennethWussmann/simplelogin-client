import { run } from '../run';
import { sectionHeader } from '../utils';

export default async () => {
  console.log(sectionHeader('🔄 Running CI Pipeline'));

  await run('buildDocs', 'lint');
  await run('format');
  await run('checkCodegen');
  await run('test');
};
