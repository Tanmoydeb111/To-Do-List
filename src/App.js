import React from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import { Container, Typography } from '@mui/material';

const App = () => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        To-Do List
      </Typography>
      <TaskInput />
      <TaskList />
    </Container>
  );
};

export default App;
