import React, { useReducer } from 'react';

import TodoContext from './todoContext';
import TodoReducer from './todoReducer';
import { ADD_TASK, DELETE_TASK } from '../types';

const TodoState = (props) => {
  const initialState = {
    todos: [],
  };

  const [state, dispatch] = useReducer(TodoReducer, initialState);

  const addTask = (data) => {
    dispatch({
      type: ADD_TASK,
      payload: data,
    });
  };

  const deleteTask = (id) => {
    dispatch({
      type: DELETE_TASK,
      payload: id,
    });
  };

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        addTask,
        deleteTask,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoState;
