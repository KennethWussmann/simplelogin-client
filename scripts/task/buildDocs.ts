import { buildDocs, buildPagesIndex } from "../steps";
import build from "./build";

export default async () => {
  const oas = await build();
  await buildDocs(oas);
  await buildPagesIndex();
};
