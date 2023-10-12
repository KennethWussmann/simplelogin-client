import { run } from "../run";

export default async () => {
  await run("buildDocs", "lint");
  await run("format");
  await run("checkCodegen");
  await run("test");
};
