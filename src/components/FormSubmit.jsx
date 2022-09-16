import React, { useState, useContext, useEffect } from 'react';

// CONTEXT
import TodoContext from '../context/todo/todoContext';

// HOOKS
import useDebounce from '../hooks/useDebounce';

// MUI
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const inputStyle = {
  '& label.Mui-focused': {
    color: 'var(--clr-success)',
  },
  '& label.Mui-error': {
    color: 'var(--clr-error)',
  },
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': {
      borderColor: 'var(--clr-success)',
    },
  },
  '& .MuiOutlinedInput-root.Mui-error': {
    '&.Mui-focused fieldset': {
      borderColor: 'var(--clr-error)',
    },
  },
};

const FormSubmit = () => {
  const todoContext = useContext(TodoContext);
  const { isTaskPresent, addTask, isTaskEqual } = todoContext;

  const [data, setData] = useState('');
  const [disableBtn, setDisableBtn] = useState(true);

  const debouncedSearchTask = useDebounce(data, 250);

  useEffect(
    () => {
      if (debouncedSearchTask) {
        isTaskPresent(debouncedSearchTask);
      }
    },
    // eslint-disable-next-line
    [debouncedSearchTask]
  );

  useEffect(() => {
    const areTheSame = (isTaskEqual || data === '') ?? false;
    setDisableBtn(areTheSame);
  }, [isTaskEqual, data]);

  const handleChange = (e) => {
    setData(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(data.trim());
    setData('');
  };

  return (
    <Box
      sx={{
        width: '100%',
        marginTop: '2rem',
        '& form': {
          position: 'relative',
          display: 'flex',
          justifyContent: 'space-between',
          gap: '1rem',
          '& > div': {
            flexGrow: 1,
            '& > p': {
              position: 'absolute',
              top: '100%',
              left: '0px',
            },
          },
        },
      }}
    >
      <form onSubmit={handleSubmit}>
        <TextField
          label='Add new todo'
          onChange={handleChange}
          value={data}
          error={isTaskEqual}
          helperText={isTaskEqual && 'Todo already exist'}
          sx={inputStyle}
        />
        <Button
          type='submit'
          variant='contained'
          color='success'
          disabled={disableBtn}
          sx={{ maxHeight: '56px' }}
        >
          Add
        </Button>
      </form>
    </Box>
  );
};

export default FormSubmit;
