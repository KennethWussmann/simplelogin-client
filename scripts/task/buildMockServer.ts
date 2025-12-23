import { buildMockServer } from '../steps';
import { sectionHeader } from '../utils';

export default async () => {
  console.log(sectionHeader('🐳 Building Mock Server'));

  await buildMockServer();
};
