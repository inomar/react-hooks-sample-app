import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState('')
  const [tasks, setTasks] = useState([]);

  const addTask = (e) => {
    setTask(e.target.value);
  }

  const changePriority = (e) => {
    setPriority(e.target.value);
  }

  const createTask = (e) => {
    e.preventDefault();
    setTasks([ ...tasks, { task, priority }]);
    setTask('')
    setPriority('')
  }

  const deleteTask = (e) => {
    e.preventDefault();

  }

  return (
    <div className="container">
      <h4>TODO APP</h4>
      <form>
        <div className="form-group">
          <label htmlFor="addTask">Add Task</label>
          <input type="text" className="form-control" id="addTadk" onChange={addTask} value={task} />
        </div>
        <select className="custom-select my-1 mr-sm-2" onChange={changePriority}>
          <option selected>選択してください</option>
          {
            [1,2,3,4,5].map(num => <option value={num} selected={num === Number(priority)}>{num}</option>)
          }
        </select>
        <button className="btn btn-primary" onClick={createTask}>作成</button>
      </form>

      <table className="table">
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
            tasks.map((item, index) => {
              const deleteTask = (e) => {
                e.preventDefault();
              }
              return (
                <tr>
                  <td>{index}</td>
                  <td>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id={index} />
                      <label className="form-check-label" htmlFor={index}>
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
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
