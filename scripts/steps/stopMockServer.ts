import { $ } from 'zx';
import { mockServerDockerComposeDir } from '../constants';
import { stepHeader } from '../utils';

export const stopMockServer = async () => {
  console.log(stepHeader('Stopping mock server'));

  await $`docker compose -f ${mockServerDockerComposeDir} down`;
};
