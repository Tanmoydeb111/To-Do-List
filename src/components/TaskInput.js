import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';
import { TextField, Button } from '@mui/material';

const TaskInput = () => {
  const [taskName, setTaskName] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [taskTime, setTaskTime] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (taskName.trim() === '') {
      return;
    }

    const currentDate = new Date().toISOString().split('T')[0];
    const currentTime = new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });

    const formattedDate = taskDate
      ? `Date: ${taskDate}`
      : `Date: ${currentDate}`;
    const formattedTime = taskTime
      ? `Time: ${taskTime}`
      : `Time: ${currentTime}`;

    dispatch(
      addTask({
        name: taskName,
        date: taskDate || currentDate,
        time: taskTime || currentTime,
      })
    );

    setTaskName('');
    setTaskDate('');
    setTaskTime('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  };

  return (
    <div className="bg-gray-200 p-4 rounded-md shadow-md">
      <TextField
        label="Task Name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        onKeyPress={handleKeyPress}
        className="mb-4 w-full"
      />
      <div className="flex flex-col gap-2">
        <label className="text-gray-800" htmlFor="taskDate">
          Date:
        </label>
        <TextField
          id="taskDate"
          type="date"
          value={taskDate}
          onChange={(e) => setTaskDate(e.target.value)}
          className="w-full"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-gray-800" htmlFor="taskDate">
          Time:
        </label>
        <TextField
          type="time"
          value={taskTime}
          onChange={(e) => setTaskTime(e.target.value)}
          className="mt-4 w-full"
        />
      </div>
      <div className="py-4 text-center">
        <Button
          onClick={handleAddTask}
          variant="contained"
          color="primary"
          className="mt-4"
        >
          Add Task
        </Button>
      </div>
    </div>
  );
};

export default TaskInput;
