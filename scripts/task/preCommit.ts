import { $ } from 'zx/core';
import { sectionHeader } from '../utils';

export default async () => {
  console.log(sectionHeader('✓ Pre-Commit Checks'));

  await $`npx lint-staged`;
};
