import { globby } from 'globby';
import { join } from 'path';
import { $ } from 'zx/core';
import { distOpenApiDir } from '../constants';
import { copy, sectionHeader } from '../utils';

export const buildOAS = async () => {
  console.log(sectionHeader('📄 Building OpenAPI Spec'));
  await Promise.all([
    $`boats -i ./oas/index.yml -o ${join('build', 'openapi', 'simplelogin.json')}`,
    $`boats -i ./oas/index.yml -o ${join('build', 'openapi', 'simplelogin.yml')}`,
  ]);

  const output = await globby([join('build', 'openapi', 'simplelogin_*.*')]);
  await copy(output, distOpenApiDir);

  return (await globby([join(distOpenApiDir, 'simplelogin_*.json')]))[0];
};
