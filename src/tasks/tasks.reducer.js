import { TASKS_LIST_RECIEVED } from './tasks.actions';

const initialState = {
  tasks: [],
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case TASKS_LIST_RECIEVED:
      return {
        ...state,
        tasks: action.payload.tasksList,
      };
    default:
      return state;
  }
};

export default tasksReducer;
