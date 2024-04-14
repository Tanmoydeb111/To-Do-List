import { ADD_TASK, REMOVE_TASK, REMOVE_ALL_TASKS } from './actions';
import { TOGGLE_TASK } from './actions';

const initialState = {
  tasks: JSON.parse(localStorage.getItem('tasks')) || [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_TASK:
      const toggledTasks = state.tasks.map((task) =>
        task.id === action.payload ? { ...task, done: !task.done } : task
      );
      localStorage.setItem('tasks', JSON.stringify(toggledTasks));
      return { ...state, tasks: toggledTasks };
    case REMOVE_ALL_TASKS:
      localStorage.removeItem('tasks');
      return {
        ...state,
        tasks: [],
      };
    case ADD_TASK:
      const newTask = { ...action.payload, id: Date.now() };
      const updatedTasksAdd = [...state.tasks, newTask];
      localStorage.setItem('tasks', JSON.stringify(updatedTasksAdd));
      return { ...state, tasks: updatedTasksAdd };

    case REMOVE_TASK:
      const filteredTasks = state.tasks.filter(
        (task) => task.id !== action.payload
      );
      localStorage.setItem('tasks', JSON.stringify(filteredTasks));
      return { ...state, tasks: filteredTasks };

    default:
      return state;
  }
};

export default rootReducer;
