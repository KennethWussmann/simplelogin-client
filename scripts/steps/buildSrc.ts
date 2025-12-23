import { $ } from 'zx/core';
import { stepHeader } from '../utils';

export const buildSrc = async () => {
  console.log(stepHeader('⚙️ Building source'));
  await $`tsc`;
};
