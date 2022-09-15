import { ADD_TASK, DELETE_TASK } from '../types';

const todoReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_TASK:
      return {
        ...state,
        todos: { ...state.todos, payload },
      };
    default:
      return state;
  }
};

export default todoReducer;
