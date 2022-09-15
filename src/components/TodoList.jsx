import React from 'react';

// COMPONENTS
import TodoTask from './TodoTask';

// MUI
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

const TodoList = () => {
  return (
    <Box sx={{ width: '100%', marginTop: '4rem' }}>
      <Stack spacing={3} direction='column'>
        <TodoTask />
        <TodoTask />
        <TodoTask />
      </Stack>
    </Box>
  );
};

export default TodoList;
