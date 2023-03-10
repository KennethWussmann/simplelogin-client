import { join, parse } from 'path';
import { $ } from 'zx/core';
import { glob } from 'zx';
import { distOpenApiDir } from '../constants';
import { copy, sectionHeader } from '../utils';

export const buildOAS = async () => {
  console.log(sectionHeader('📄 Building OpenAPI Spec'));

  await Promise.all([
    $`boats -i ./oas/index.yml -o ${join('build', 'openapi', 'simplelogin.json')} -f ${join(
      'oas',
      'helpers',
      'opId.ts',
    )}`,
    $`boats -i ./oas/index.yml -o ${join('build', 'openapi', 'simplelogin.yml')} -f ${join(
      'oas',
      'helpers',
      'opId.ts',
    )}`,
  ]);

  const output = await glob([join('build', 'openapi', 'simplelogin_*.*')]);
  await copy(output, distOpenApiDir, (name) => `simplelogin${parse(name).ext}`); // rename to simplelogin.json (remove _version)

  return (await glob([join(distOpenApiDir, 'simplelogin*.json')]))[0];
};
