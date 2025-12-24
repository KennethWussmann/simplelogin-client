import { startMockServer, test } from '../steps';
import { sectionHeader } from '../utils';

export default async () => {
  console.log(sectionHeader('🔧 Test'));
  await startMockServer();
  await test();
};
