import { CREATE_LOG, DELETE_ALL_LOGS } from '../actions';

const logReducer = (state = [], action) => {
  switch(action.type) {
    case CREATE_LOG:
      return [...state, { description: action.description, createdAt: action.createdAt }]
    case DELETE_ALL_LOGS:
      return [];
    default:
      return state;
  }
}

export default logReducer;
