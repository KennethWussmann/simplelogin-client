import { build, clean } from './lib';

(async () => {
  console.log('Cleaning up');
  await clean();
  await build();
})();
