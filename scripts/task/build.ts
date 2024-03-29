import { run } from "../run";
import { buildOAS, buildSdk, buildSrc, createDirs } from "../steps";

export default async (formatOrLint: "format" | "lint" = "format") => {
  await createDirs();
  const oas = await buildOAS();
  await buildSdk(oas);
  await run(formatOrLint);
  await buildSrc();
  return oas;
};
