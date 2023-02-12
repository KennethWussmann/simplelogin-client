import { chalk } from 'zx';
import { $ } from 'zx/core';

export default async () => {
  await $`npx lint-staged`;
  console.log(chalk.yellowBright('Remember to also commit the generated SDK and Docs! Thank you 🙏'));
};
