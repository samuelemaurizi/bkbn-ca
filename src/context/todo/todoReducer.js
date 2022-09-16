// import { v4 as uuidv4 } from 'uuid';

import {
  ADD_TASK,
  DELETE_TASK,
  SAVE_TO_LOCAL,
  GET_FROM_LOCAL,
  IS_TASK_PRESENT,
} from '../types';

const todoReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_TASK:
      return {
        ...state,
        todos: [...state.todos, payload],
      };
    case SAVE_TO_LOCAL:
      return {
        ...state,
        isTodosOnLocal: payload,
      };
    case GET_FROM_LOCAL:
      return {
        ...state,
        todos: payload || [],
      };
    case IS_TASK_PRESENT:
      return {
        ...state,
        isTaskEqual: payload,
      };
    case DELETE_TASK:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== payload),
      };
    default:
      return state;
  }
};

export default todoReducer;
