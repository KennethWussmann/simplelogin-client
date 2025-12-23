import { $ } from 'zx';
import * as steps from './steps';
import * as tasks from './task';

$.verbose = true;

export const run = async (task: string | undefined = process.argv[2], ...params: unknown[]) => {
  if (!task) {
    throw new Error('No task specified');
  }

  const taskNames = Object.keys(tasks);
  if (taskNames.map((taskName) => taskName.toLowerCase()).includes(task.toLowerCase())) {
    const taskKey = taskNames.find((name) => name.toLowerCase() === task.toLowerCase());
    if (taskKey && taskKey in tasks) {
      await (
        tasks[taskKey as keyof typeof tasks].default as (...args: unknown[]) => Promise<unknown>
      )(...params);
      return;
    }
  }

  const stepNames = Object.keys(steps);
  if (stepNames.map((stepName) => stepName.toLowerCase()).includes(task.toLowerCase())) {
    const stepKey = stepNames.find((name) => name.toLowerCase() === task.toLowerCase());
    if (stepKey && stepKey in steps) {
      await (steps[stepKey as keyof typeof steps] as (...args: unknown[]) => Promise<unknown>)(
        ...params
      );
      return;
    }
  }

  throw new Error(
    `Unknown task "${task}". Available tasks and steps: ${[...taskNames, ...stepNames].join(', ')}`
  );
};
