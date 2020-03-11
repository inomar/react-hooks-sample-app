import React, { useState, useContext } from 'react';

import { CREATE_TASK, DELETE_ALL_TASKS, CREATE_LOG, DELETE_ALL_LOGS } from '../actions';
import AppContext from '../contexts';


const TodoForm = () => {
  const { state, dispatch } = useContext(AppContext);
  const { tasks, logs } = state;

  const [task, setTask] = useState('');
  const [priority, setPriority] = useState('');


  const addTask = (e) => {
    setTask(e.target.value);
  }

  const changePriority = (e) => {
    setPriority(e.target.value);
  }

  const createTask = (e) => {
    e.preventDefault();
    const id = tasks.length === 0 ? 1 : tasks.length + 1;
    dispatch({
      type: CREATE_TASK,
      id, task, priority
    })
    dispatch({
      type: CREATE_LOG,
      description: 'タスクを作成しました。',
      createdAt: new Date().toISOString(),
    })
    setTask('')
    setPriority('')
  }

  const deleteAllTask = (e) => {
    e.preventDefault();
    const result = window.confirm('本当に削除して良いですか？');
    if (result) dispatch({
      type: DELETE_ALL_TASKS,
    })
  }

  const deleteAllLogs = (e) => {
    e.preventDefault();
    const result = window.confirm('本当に削除して良いですか？');
    if (result) dispatch({
      type: DELETE_ALL_LOGS,
    })
  }

  const creatable = task === '' || priority === ''

  return (
    <form>
      <div className="form-group">
        <label htmlFor="addTask">Add Task</label>
        <input type="text" className="form-control" id="addTadk" onChange={addTask} value={task} />
      </div>
      <select className="custom-select my-1 mr-sm-2" onChange={changePriority}>
        <option>優先順位選択してください</option>
        {
          [1,2,3,4,5].map(num => <option key={num} value={num} selected={parseInt(priority) === num}>{num}</option>)
        }
      </select>
      <button className="btn btn-primary" onClick={createTask} disabled={creatable}>作成</button>
      <button className="btn btn-danger ml-2" onClick={deleteAllTask} disabled={tasks.length === 0}>すべてのタスクを削除する</button>
      <button className="btn btn-danger ml-2" onClick={deleteAllLogs} disabled={logs.length === 0}>すべてのログを削除する</button>
    </form>
  )
}

export default TodoForm;
