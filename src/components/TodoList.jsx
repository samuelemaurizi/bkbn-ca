import React, { useContext, useEffect, useState } from 'react';

// CONTEXT
import TodoContext from '../context/todo/todoContext';

// COMPONENTS
import TodoTask from './TodoTask';

// MUI
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

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
        <p>no todos founded</p>
      )}
    </Box>
  );
};

export default TodoList;
