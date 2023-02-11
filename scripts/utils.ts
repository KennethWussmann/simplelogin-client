import chalk from 'chalk';
import { access, copyFile, mkdir, readFile, rm, writeFile } from 'fs/promises';
import { join, parse } from 'path';

export const exist = async (path: string) => {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
};

export const createDirectoryIfNotExists = async (path: string) => {
  if (!(await exist(path))) {
    await mkdir(path, { recursive: true });
    return true;
  }
  return false;
};

export const deleteIfExists = async (path: string) => {
  if (await exist(path)) {
    await rm(path, { recursive: true });
    return true;
  }
  return false;
};

export const read = async (path: string) => readFile(path, 'utf-8');

export const save = async (path: string, content: string) => writeFile(path, content, 'utf-8');
export const copy = async (sourcePaths: string[], destinationDir: string) =>
  Promise.all(sourcePaths.map((path) => copyFile(path, join(destinationDir, parse(path).base))));

export const sectionHeader = (text: string) =>
  ['\n', '-'.repeat(text.length), chalk.greenBright(text), '-'.repeat(text.length)].join('\n');

export const measureBuildTime = async (fn: () => Promise<void>) => {
  const start = Date.now();
  await fn();
  const seconds = Math.round(((Date.now() - start) / 1000 + Number.EPSILON) * 100) / 100;
  console.log(`\n✨ ${chalk.greenBright('Done in')} ${seconds}${chalk.greenBright('s')}`);
};
