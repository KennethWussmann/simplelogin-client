import { $ } from 'zx';
import { mockServerDockerComposeDir } from '../constants';
import { sectionHeader } from '../utils';

export const startMockServer = async () => {
  console.log(sectionHeader('🚀 Starting Mock Server'));

  await $`docker compose -f ${mockServerDockerComposeDir} up -d --wait`;
};
