export const ADD_TASK = 'ADD_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const REMOVE_ALL_TASKS = 'REMOVE_ALL_TASKS';

export const TOGGLE_TASK = 'TOGGLE_TASK';

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});

export const removeTask = (taskId) => ({
  type: REMOVE_TASK,
  payload: taskId,
});

export const removeAllTasks = () => ({
  type: REMOVE_ALL_TASKS,
});

export const toggleTask = (taskId) => ({
  type: TOGGLE_TASK,
  payload: taskId,
});
