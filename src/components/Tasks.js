import React, { useContext } from 'react';

import AddedTask from './Task';
import AppContext from '../contexts';


const Tasks = () => {
  const { state } = useContext(AppContext);
  const tasks = state;
  return (
    <table className="table mt-2">
      <thead>
        <tr>
          <th>#</th>
          <th>タスク</th>
          <th>優先度</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {
          tasks.map((item) => <AddedTask item={item} />)
        }
      </tbody>
    </table>
  )
}

export default Tasks;
