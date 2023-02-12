import { readFileSync } from 'fs';

/*
const methodToAction: Record<string, string> = {
  get: 'get',
  post: 'create',
  put: 'set',
  delete: 'delete',
  patch: 'update',
};
const getTags = (path: string) => {
  const lines = readFileSync(path, 'utf-8').split('\n');
  const tags: string[] = [];
  let inTags = false;
  for (const line of lines) {
    const trimmedLine = line.trim();

    if (trimmedLine === 'tags:') {
      inTags = true;
      continue;
    }

    if (inTags && trimmedLine.startsWith('- ')) {
      tags.push(trimmedLine.replace('- ', ''));
    } else if (inTags) {
      break;
    }
  }
  return tags;
};
*/
const getSummary = (path: string) => {
  const lines = readFileSync(path, 'utf-8').split('\n');
  for (const line of lines) {
    const trimmedLine = line.trim();

    if (trimmedLine.startsWith('summary: ')) {
      return trimmedLine.replace('summary: ', '');
    }
  }
  throw new Error(`Could not find summary for ${path}`);
};

const toLowerCamelCase = (strings: string[]) =>
  strings
    .map((str) => str.replace(/-(\w)/g, (_, letter) => letter.toUpperCase()))
    .map((str, index) => (index === 0 ? str : str[0].toUpperCase() + str.slice(1)))
    .join('');

export default function (this: any) { //, action: string | null | undefined
  const currentFilePointer = this?.env?.globals?.currentFilePointer;
  if (!currentFilePointer) {
    return undefined;
  }
  //const method = parse(currentFilePointer).name;
  //const selectedAction = action === null ? null : action ? action : methodToAction[method];
  //const firstTag = getTags(currentFilePointer)[0]


  return toLowerCamelCase(getSummary(currentFilePointer).toLowerCase().split(' '));
}
