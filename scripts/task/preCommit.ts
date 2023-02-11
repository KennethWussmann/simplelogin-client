import { $ } from 'zx/core';
import { measureBuildTime } from '../utils';
import chalk from 'chalk';

export default () =>
  measureBuildTime(async () => {
    await $`npx lint-staged`;
    console.log(chalk.yellowBright('Remember to also commit the generated SDK and Docs! Thank you 🙏'));
  });
