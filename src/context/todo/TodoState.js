import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

import TodoContext from './todoContext';
import TodoReducer from './todoReducer';
import {
  ADD_TASK,
  DELETE_TASK,
  SAVE_TO_LOCAL,
  GET_FROM_LOCAL,
  IS_TASK_PRESENT,
} from '../types';

const TodoState = (props) => {
  const initialState = {
    todos: [],
    isTodosOnLocal: false,
    isTaskEqual: true,
  };

  const [state, dispatch] = useReducer(TodoReducer, initialState);

  const addTask = (data) => {
    const newTask = {
      id: uuidv4(),
      data: data,
      time: Intl.DateTimeFormat(navigator.language, {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      }).format(new Date()),
    };

    saveToLocal([...state.todos, newTask]);

    dispatch({
      type: ADD_TASK,
      payload: newTask,
    });
  };

  const saveToLocal = (data) => {
    try {
      localStorage.setItem('todoList', JSON.stringify(data));
      dispatch({
        type: SAVE_TO_LOCAL,
        payload: true,
      });
    } catch (error) {
      dispatch({
        type: SAVE_TO_LOCAL,
        payload: false,
      });
    }
  };

  const getFromLocal = () => {
    const localStorageItem = localStorage.getItem('todoList');

    try {
      dispatch({
        type: GET_FROM_LOCAL,
        payload: JSON.parse(localStorageItem),
      });
    } catch (error) {
      // handle error
      console.log('<<<<<< getFromLocal error >>>>>>', error);
    }
  };

  const isTaskPresent = (task) => {
    if (
      state.todos.some((el) => el.data.toLowerCase() !== task.toLowerCase())
    ) {
      console.log('>>>>>>>>> is not present <<<<<<<<<');
      dispatch({
        type: IS_TASK_PRESENT,
        payload: false,
      });
      return;
    }

    return console.log('>>>>>>> is present <<<<<<<');
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
        isTaskEqual: state.isTaskEqual,
        addTask,
        saveToLocal,
        getFromLocal,
        deleteTask,
        isTaskPresent,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoState;
