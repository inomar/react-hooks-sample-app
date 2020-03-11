import React, { useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import TodoForm from './TodoForm';
import Tasks from './Tasks';

import taskReducer from '../reducers';
import AppContext from '../contexts';

const App = () => {
  const initialTasks = [];

  const [state, dispatch] = useReducer(taskReducer, initialTasks);

  console.log(state)
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="container">
        <h4>TODO APP</h4>
        <TodoForm />
        <Tasks />
      </div>
    </AppContext.Provider>
  );
}

export default App;
