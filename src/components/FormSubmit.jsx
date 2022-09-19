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

const FormSubmit = () => {
  const todoContext = useContext(TodoContext);
  const { isTaskPresent, addTask, isTaskEqual } = todoContext;

  const [data, setData] = useState('');
  const [disableBtn, setDisableBtn] = useState(true);

  const debouncedSearchTask = useDebounce(data, 250);

  useEffect(
    () => {
      // console.log('debouncer 1', debouncedSearchTask);
      isTaskPresent(debouncedSearchTask);

      // if (debouncedSearchTask) {
      //   console.log('debouncer 2', debouncedSearchTask);

      //   isTaskPresent(debouncedSearchTask);
      // }
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
        marginTop: '7rem',
        '& form': {
          position: 'relative',
          display: 'flex',
          justifyContent: 'space-between',
          gap: '1rem',
          flexWrap: 'wrap',
          paddingBlock: '24px',
          paddingInline: '14px',
          background: 'var(--clr-white)',
          borderRadius: '5px',
          boxShadow:
            'rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px',
          '& > div': {
            flexGrow: 20,
            '& > p': {
              position: 'absolute',
              top: '100%',
              left: '0px',
            },
          },
          '& > button': {
            maxHeight: '56px',
            flexGrow: 1,
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
          color='secondary'
          disabled={disableBtn}
        >
          Add
        </Button>
      </form>
    </Box>
  );
};

export default FormSubmit;
