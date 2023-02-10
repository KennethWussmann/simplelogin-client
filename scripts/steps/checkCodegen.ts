import { $ } from 'zx/core';

export const checkCodegen = async () => {
  const { stdout } = await $`git status --porcelain`;
  if (stdout.length !== 0) {
    throw new Error(
      'There are changes of the generated files. This indicates that they were not commited. Please run "npm run rebuild" and commit the generated changes!',
    );
  } else {
    console.log('No changes of generated files.');
  }
};
