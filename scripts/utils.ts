import { access, mkdir, readFile, rm, writeFile } from 'fs/promises';

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

export const sectionHeader = (text: string) => ['-'.repeat(text.length), text, '-'.repeat(text.length)].join('\n');

export const measureBuildTime = async (fn: () => Promise<void>) => {
  const start = Date.now();
  await fn();
  console.log(`\n✨ Done in ${Math.round(((Date.now() - start) / 1000 + Number.EPSILON) * 100) / 100}s`);
};
