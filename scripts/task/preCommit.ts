import { $ } from "zx/core";

export default async () => {
  await $`npx lint-staged`;
};
