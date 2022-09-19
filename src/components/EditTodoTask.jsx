import React, { useState, useContext } from 'react';

// CONTEXT
import TodoContext from '../context/todo/todoContext';

// MUI
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
};

const inputStyle = {
  '& label.Mui-focused': {
    color: 'var(--clr-main)',
  },
  '& label.Mui-error': {
    color: 'var(--clr-error)',
  },
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': {
      borderColor: 'var(--clr-main)',
    },
  },
  '& .MuiOutlinedInput-root.Mui-error': {
    '&.Mui-focused fieldset': {
      borderColor: 'var(--clr-error)',
    },
  },
};

const EditTodoTask = ({ task, toggleEditForm }) => {
  const todoContext = useContext(TodoContext);
  const { editTask } = todoContext;

  const [taskObj, settaskObj] = useState(task);
  // console.log('Edit Task:', taskObj);

  const handleChange = (e) => {
    settaskObj({ ...taskObj, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('Edit Task:', taskObj);
    editTask(taskObj);
    toggleEditForm();
    settaskObj('');
  };

  return (
    <form style={formStyle} onSubmit={handleSubmit}>
      <TextField
        name='data'
        value={taskObj.data}
        onChange={handleChange}
        sx={inputStyle}
        autoFocus
      />
      <Button
        type='submit'
        variant='contained'
        color='secondary'
        sx={{ alignSelf: 'flex-end' }}
      >
        Update
      </Button>
    </form>
  );
};

export default EditTodoTask;
