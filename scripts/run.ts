import * as steps from './steps';
import * as tasks from './task';

export const run = async (task: string | undefined = process.argv[2], ...params: unknown[]) => {
  if (!task) {
    throw new Error('No task specified');
  }

  const taskNames = Object.keys(tasks);
  if (taskNames.map((taskName) => taskName.toLowerCase()).includes(task.toLowerCase())) {
    await tasks[task].default(...params);
    return;
  }

  const stepNames = Object.keys(steps);
  if (stepNames.map((stepName) => stepName.toLowerCase()).includes(task.toLowerCase())) {
    await steps[task](...params);
    return;
  }

  throw new Error(
    `Unknown task "${task}". Available tasks and steps: ${[...taskNames, ...stepNames].join(', ')}`
  );
};
