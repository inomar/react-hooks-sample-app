import React, { useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import TodoForm from './TodoForm';
import Tasks from './Tasks';
import Logs from './Logs';

import reducer from '../reducers';
import AppContext from '../contexts';

const App = () => {
  const initialTasks = {
    tasks: [],
    logs: [],
  };

  const [state, dispatch] = useReducer(reducer, initialTasks);

  console.log(state)
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="container">
        <h4>TODO APP</h4>
        <TodoForm />
        <Tasks />
        <Logs />
      </div>
    </AppContext.Provider>
  );
}

export default App;
