import React, { useContext } from 'react';
import { motion } from 'framer-motion';

// CONTEXT
import TodoContext from '../context/todo/todoContext';

// HOOKS
import useToggleState from '../hooks/useToggleState';

// MUI
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Divider from '@mui/material/Divider';

// COMPONENTS
import EditTodoTask from './EditTodoTask';

const TodoTask = ({ task }) => {
  const todoContext = useContext(TodoContext);
  const { deleteTask } = todoContext;
  const [isEditing, toggle] = useToggleState(false);

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
        {isEditing ? (
          <CardContent>
            <EditTodoTask task={task} toggleEditForm={toggle} />
          </CardContent>
        ) : (
          <>
            <CardContent>
              <Typography variant='body1'>{task.data}</Typography>
            </CardContent>
            <Divider variant='middle' />
            <CardActions
              sx={{
                justifyContent: 'end',
                '& > p': {
                  marginInlineEnd: '1rem',
                },
              }}
            >
              <Typography variant='body2'>{task.time}</Typography>
              <IconButton aria-label='Edit' onClick={toggle}>
                <EditIcon />
              </IconButton>
              <IconButton
                color='error'
                arial-label='Delete'
                onClick={() => deleteTask(task.id)}
              >
                <DeleteIcon />
              </IconButton>
            </CardActions>
          </>
        )}
      </Card>
    </motion.div>
  );
};

export default TodoTask;
