import React, { useContext } from 'react';
import { motion } from 'framer-motion';

// CONTEXT
import TodoContext from '../context/todo/todoContext';

// MUI
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Divider from '@mui/material/Divider';

const TodoTask = ({ task }) => {
  const todoContext = useContext(TodoContext);
  const { deleteTask } = todoContext;

  return (
    <motion.div
      initial={{ y: '100vh' }}
      animate={{ y: '0' }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20,
      }}
    >
      <Card>
        <CardContent>
          <Typography variant='body1'>{task.data}</Typography>
        </CardContent>
        <Divider variant='middle' />
        <CardActions
          sx={{
            justifyContent: 'end',
            gap: '0.75rem',
          }}
        >
          <Typography variant='body2'>{task.time}</Typography>
          <IconButton
            color='error'
            arial-label='Delete'
            onClick={() => deleteTask(task.id)}
          >
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </Card>
    </motion.div>
  );
};

export default TodoTask;
