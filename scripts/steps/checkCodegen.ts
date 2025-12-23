import { $ } from 'zx/core';
import { stepHeader } from '../utils';

export const checkCodegen = async () => {
  console.log(stepHeader('🔍 Checking codegen'));
  const { stdout } = await $`git status --porcelain`;
  if (stdout.length !== 0) {
    await $`git diff > changes.patch`;
    throw new Error(
      'There are changes to the generated files listed above. This indicates that they were not commited. Please run "npm run rebuild" and commit the generated changes. You can find the changes in the artifact attached to this job.'
    );
  }
  console.log('No changes of generated files.');
};
