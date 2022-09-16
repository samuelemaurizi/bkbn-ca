import React, { useContext, useEffect, useState } from 'react';

// CONTEXT
import TodoContext from '../context/todo/todoContext';

// COMPONENTS
import TodoTask from './TodoTask';

// MUI
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const TodoList = () => {
  const todoContext = useContext(TodoContext);
  const { todos, getFromLocal } = todoContext;

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getFromLocal();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (todos.length > 0) {
      setTasks(todos);
    } else {
      setTasks([]);
    }
  }, [todos]);

  return (
    <Box sx={{ width: '100%', marginTop: '4rem' }}>
      {tasks.length > 0 ? (
        <Stack spacing={3} direction='column'>
          {tasks.map((task) => (
            <TodoTask task={task} key={task.id} />
          ))}
        </Stack>
      ) : (
        <Typography
          variant='body1'
          sx={{ color: 'var(--clr-gray40)', textAlign: 'center' }}
        >
          your list is empty
        </Typography>
      )}
    </Box>
  );
};

export default TodoList;
