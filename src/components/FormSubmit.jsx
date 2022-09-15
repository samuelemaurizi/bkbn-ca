import React from 'react';

// MUI
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const FormSubmit = () => {
  const handleChange = (e) => {
    console.log('on change >>>', e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Task submitted');
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
          label='Add New Task'
          // error
          // helperText='already exist'
          onChange={handleChange}
        />
        <Button type='submit' variant='contained'>
          Add
        </Button>
      </form>
    </Box>
  );
};

export default FormSubmit;
