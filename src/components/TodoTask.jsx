import React from 'react';

// MUI
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Divider from '@mui/material/Divider';

const TodoTask = () => {
  return (
    <Card>
      <CardContent>
        <Typography>Lorem ipsum dolor sit amet consectetur,</Typography>
      </CardContent>
      <Divider variant='middle' />
      <CardActions
        sx={{
          justifyContent: 'end',
          gap: '0.75rem',
        }}
      >
        <Typography>time goes here</Typography>
        <IconButton color='error'>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default TodoTask;
