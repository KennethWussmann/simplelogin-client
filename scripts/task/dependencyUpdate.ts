import { $ } from "zx/core";

export default async () => {
  await $`npm-check-updates -u --filterVersion \"/^[~^<>]| - |\\.x$/\" --deep`;
  await $`npm install`;
};
