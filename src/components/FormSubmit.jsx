import React, { useState, useContext, useEffect } from 'react';

// CONTEXT
import TodoContext from '../context/todo/todoContext';

// HOOKS
import useDebounce from '../hooks/useDebounce';

// MUI
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const FormSubmit = () => {
  const todoContext = useContext(TodoContext);
  const { isTaskPresent, addTask, isTaskEqual } = todoContext;

  const [data, setData] = useState('');
  // const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [disableBtn, setDisableBtn] = useState(true);

  const debouncedSearchTask = useDebounce(data, 1000);

  useEffect(
    () => {
      if (debouncedSearchTask) {
        setIsSearching(true);
        isTaskPresent(debouncedSearchTask);
      }
      // else {
      //   setResults([]);
      // }
    },
    // eslint-disable-next-line
    [debouncedSearchTask]
  );

  useEffect(() => {
    console.log('<<<< is equal >>>>', isTaskEqual);
    // console.log('<<<< data >>>>', data !== '');
    if (!isTaskEqual) {
      setDisableBtn(false);
    }
  }, [isTaskEqual, data]);

  // useEffect(() => {
  //   const timer = setTimeout(() => setData(debouncingTask), 2000);
  //   return () => clearTimeout(timer);
  // }, [debouncingTask]);

  // useEffect(() => {
  //   console.log('data', data);
  //   if (data !== '') {
  //     isTaskPresent(data);
  //   } else {
  //     // clear result
  //   }

  //   // eslint-disable-next-line
  // }, [data]);

  // const taskFilter = (query) => {
  //   console.log(query);
  //   if (!query) return;
  //   setTimeout(() => {
  //     setDebouncingTask(
  //       todos.some((el) => el.data.toLowerCase() === query.toLowerCase())
  //     );
  //   }, 2000);
  // };
  // console.log('deb', debouncingTask);

  // useEffect(() => {
  //   if (data !== '') {
  //     verify(data);
  //   }
  // }, [data]);

  // const verify = useCallback(
  //   debounce((name) => {
  //     console.log(name);
  //   }, 200),
  //   []
  // );

  const handleChange = (e) => {
    setData(e.target.value);
    // setDebouncingTask(e.target.value);
    // taskFilter(e.target.value);
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
          display: 'flex',
          justifyContent: 'space-between',
          gap: '1rem',
          '& > div': {
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
          // error
          // helperText='already exist'
        />
        <Button type='submit' variant='contained' disabled={disableBtn}>
          Add
        </Button>
      </form>
    </Box>
  );
};

export default FormSubmit;
