import { globby } from 'globby';
import { $ } from 'zx';
import { mkdir, readFile, rm, writeFile } from 'fs/promises';
import { join, parse } from 'path';

const srcDir = join(process.cwd(), 'src');
const buildDir = join(process.cwd(), 'build');
const distDir = join(process.cwd(), 'dist');
const sdkDestination = join(srcDir, 'sdk');
const distOpenApiDir = join(distDir, 'openapi');
const distRedocDir = join(distDir, 'redoc');
const distTypedocDir = join(distDir, 'typedoc');

const buildOAS = async () => {
  await Promise.all([
    $`boats -i ./oas/index.yml -o ${join('dist', 'openapi', 'simplelogin.json')}`,
    $`boats -i ./oas/index.yml -o ${join('dist', 'openapi', 'simplelogin.yml')}`,
  ]);

  return (await globby([join(distOpenApiDir, 'simplelogin_*.json')]))[0];
};

const buildDocs = async (oasPath: string) =>
  Promise.all([$`npx typedoc`, $`npx redoc-cli build ${oasPath} -o ${join(distRedocDir, 'simplelogin_redoc.html')}`]);

const buildSdk = async (oasPath: string) => {
  await $`docker pull ghcr.io/kennethwussmann/custom-swagger-codegen-cli-arm64:latest`;
  await $`docker run --rm -v ${process.cwd()}:/local ghcr.io/kennethwussmann/custom-swagger-codegen-cli-arm64:latest generate -i ${join(
    '/local',
    'dist',
    'openapi',
    parse(oasPath).base,
  )} -l typescript-fetch -o /local/build/sdk`;
};

export const clean = async () =>
  Promise.all([
    rm(buildDir, { recursive: true }),
    rm(sdkDestination, { recursive: true }),
    rm(distDir, { recursive: true }),
    createDirs(),
  ]);

const createDirectoryIfNotExists = async (path: string) => {
  try {
    await mkdir(path, { recursive: true });
  } catch {
    //
  }
};

const createDirs = async () =>
  Promise.all(
    [buildDir, sdkDestination, distDir, distRedocDir, distTypedocDir, distOpenApiDir].map(createDirectoryIfNotExists),
  );

const read = async (path: string) => readFile(path, 'utf-8');

const modify = (filename: string, content: string) =>
  [
    ...(filename.toLowerCase().includes('api.') ? ['/* eslint-disable */', '// @ts-nocheck'] : []),
    content
      .replace('import * as isomorphicFetch from "isomorphic-fetch";', 'const isomorphicFetch = fetch;')
      .replace("declare module 'isomorphic-fetch';\n", '')
      .replace('/// <reference path="./custom.d.ts" />\n', '')
      .replace('// tslint:disable\n', ''),
  ].join('\n');

const save = async (path: string, content: string) => writeFile(path, content, 'utf-8');

const getDestinationPath = (path: string) => {
  const filename = parse(path).base;
  return join(sdkDestination, filename);
};

const moveSdkFiles = async () => {
  const paths = await globby(['build/sdk/*.ts', '!build/sdk/*.spec.ts', '!build/sdk/*.d.ts']);

  await Promise.all(
    paths.map(async (path) => {
      const destination = getDestinationPath(path);
      const originalFileContent = await read(path);
      const modifiedFileContent = modify(parse(path).base, originalFileContent);

      console.log(`Moving modified ${path} to ${destination}`);
      await save(destination, modifiedFileContent);
    }),
  );
};

const sectionHeader = (text: string) => ['-'.repeat(text.length), text, '-'.repeat(text.length)].join('\n');

const lintAndFormat = async () => {
  await $`npm run format`;
  await $`npm run lint:fix`;
};

export const build = async () => {
  const start = Date.now();

  await createDirs();
  console.log(sectionHeader('📄 Building OpenAPI Spec'));
  const oas = await buildOAS();
  console.log(sectionHeader('🔧 Building SDK'));
  await buildSdk(oas);
  await moveSdkFiles();
  console.log(sectionHeader('🧹 Formatting'));
  await lintAndFormat();
  console.log(sectionHeader('📚 Building docs'));
  await buildDocs(oas);
  console.log(`\n✨ Done in ${Math.round(((Date.now() - start) / 1000 + Number.EPSILON) * 100) / 100}s`);
};
