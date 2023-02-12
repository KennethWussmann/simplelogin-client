import { join, parse } from 'path';
import { $ } from 'zx/core';
import { glob, YAML } from 'zx';
import { image, sdkDestination } from '../constants';
import { save, read, sectionHeader, createDirectoryIfNotExists } from '../utils';

const getDestinationPath = (path: string) => {
  const filename = parse(path).base;
  return join(sdkDestination, path.replace('build/sdk/', '').replace(filename, ''), filename);
};

const modify = (filename: string, content: string) =>
  [
    '/* eslint-disable */',
    '// @ts-nocheck',
    ...(filename.includes('http.ts') ? ['type FormData = any;'] : []),
    content,
  ].join('\n');

const moveSdkFiles = async () => {
  const paths = await glob(['build/sdk/**/*.ts']);

  await Promise.all(
    paths.map(async (path) => {
      const destination = getDestinationPath(path);
      await createDirectoryIfNotExists(parse(destination).dir);
      const originalFileContent = await read(path);
      const modifiedFileContent = modify(parse(path).base, originalFileContent);

      await save(destination, modifiedFileContent);
      console.log(`Copied modified ${path} to ${destination}`);
    }),
  );
};

const exportConfig = async () =>
  save(
    'build/typescript-fetch-config.yml',
    YAML.stringify({
      additionalProperties: {
        typescriptThreePlus: true,
        supportsES6: true,
        npmName: '@goauthentik/api',
        fileContentDataType: 'Blob',
        enumUnknownDefaultCase: true,
        useObjectParameters: true,
      },
    }),
  );

export const buildSdk2 = async (oasPath: string) => {
  console.log(sectionHeader('🔧 Building SDK v0.2'));
  await exportConfig();
  await $`docker run --rm -v ${process.cwd()}:/local ${image} generate -i ${join(
    '/local',
    'dist',
    'openapi',
    parse(oasPath).base,
  )} -g typescript -o /local/build/sdk`;
  await moveSdkFiles();
};
