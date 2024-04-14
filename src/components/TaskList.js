import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTask, toggleTask, removeAllTasks } from '../redux/actions';
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Checkbox,
  IconButton,
  Button,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TaskList = ({ darkMode }) => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleToggleTask = (taskId) => {
    dispatch(toggleTask(taskId));
  };

  const handleRemoveTask = (taskId) => {
    dispatch(removeTask(taskId));
  };

  const handleRemoveAllTasks = () => {
    dispatch(removeAllTasks());
  };

  const reversedTasks = [...tasks].reverse();

  return (
    <List
      className={`p-4 rounded-md shadow-md ${
        darkMode ? 'bg-gray-800 text-white' : 'bg-white'
      }`}
    >
      {reversedTasks.length > 0 ? (
        reversedTasks.map((task) => (
          <ListItem
            key={task.id}
            className={`flex justify-between items-center py-2 ${
              darkMode ? 'border-b border-gray-600' : 'border-b border-gray-300'
            }`}
          >
            <Checkbox
              checked={task.done}
              onChange={() => handleToggleTask(task.id)}
              color="primary"
            />
            <ListItemText
              primary={task.name}
              secondary={`${task.date} ${task.time}`}
              className="w-2/3"
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" onClick={() => handleRemoveTask(task.id)}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))
      ) : (
        <ListItem>
          <ListItemText primary="No tasks yet." className="text-gray-400" />
        </ListItem>
      )}
      <div className="text-center bg-red-300 text-black hover:bg-red-500 rounded">
        {tasks.length > 0 && (
          <Button onClick={handleRemoveAllTasks} className="mt-4 text-black">
            Remove All
          </Button>
        )}
      </div>
    </List>
  );
};

export default TaskList;
