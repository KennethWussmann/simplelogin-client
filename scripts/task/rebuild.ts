import { run } from "../run";

export default async () => {
  await run("clean");
  await run("build");
};
