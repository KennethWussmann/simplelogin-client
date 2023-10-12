import { $ } from "zx/core";
import { sectionHeader } from "../utils";

export const format = async () => {
  console.log(sectionHeader("🧹 Formatting"));
  await $`biome format --write .`;
  await $`biome check --apply-unsafe .`;
};
