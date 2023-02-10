import * as tasks from './task';

export const run = async (task: string | undefined = process.argv[2]) => {
  if (!task) {
    throw new Error('No task specified');
  }

  const taskNames = Object.keys(tasks);
  if (!taskNames.map((taskName) => taskName.toLowerCase()).includes(task.toLowerCase())) {
    throw new Error(`Unknown task "${task}". Available tasks: ${taskNames.join(', ')}`);
  }

  await tasks[task].default();
};
