import { CREATE_TASK, DELETE_TASK, DELETE_ALL_TASKS } from '../actions';

const taskReducer = (state = [], action) => {
  switch (action.type) {
    case CREATE_TASK:
      return [
        ...state,
        {
          id: action.id,
          task: action.task,
          priority: action.priority,
          finishedAt: null,
        }
      ];
    case DELETE_TASK:
      const items = action.items;
      return [...items];
    case DELETE_ALL_TASKS:
      return [];
    default:
      return state;
  }
}

export default taskReducer;
