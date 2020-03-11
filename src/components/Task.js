import React, { useContext } from 'react';

import { DELETE_TASK, CREATE_LOG } from '../actions';
import AppContext from '../contexts';


const Task = ({ item }) => {
  const { state, dispatch } = useContext(AppContext);
  const { tasks } = state;

  const deleteTask = (e) => {
    e.preventDefault();
    const result = window.confirm('本当に削除して良いですか？')
    if (result) {
      const items = tasks.filter(t => t.id !== item.id);
      dispatch({
        type: DELETE_TASK,
        items,
      })
      dispatch({
        type: CREATE_LOG,
        description: `タスク[${item.task}]を削除しました。`,
        createdAt: new Date().toISOString(),
      })
    }
  }

  return (
    <tr key={item.id}>
      <td>{item.id}</td>
      <td>
        <div className="form-check">
          <input name="task" className="form-check-input" type="checkbox" id={item.id} value={item.id} />
          <label className="form-check-label" htmlFor={item.id} style={{ textDecoration: item.finishedAt === null ? 'none' : 'line-through #6E6E6E solid' }}>
            {item.task}
          </label>
        </div>
      </td>
      <td>{item.priority}</td>
      <td>
        <button className="btn btn-danger" onClick={deleteTask}>削除</button>
      </td>
    </tr>
  )
}

export default Task;
