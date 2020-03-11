import { combineReducers } from 'redux';

import logReducer from './logReducer';
import taskReducer from './taskReducer';

export default combineReducers({ logs: logReducer, tasks: taskReducer });