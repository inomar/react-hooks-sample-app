import React, { useContext } from 'react';

import AppContext from '../contexts';
import Log from './Log';

const Logs = () => {

  const { state } = useContext(AppContext);

  return (
    <>
      <h4>ログ一覧</h4>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>説明</th>
            <th>日時</th>
          </tr>
        </thead>
        <tbody>
          { state.logs.map(log => <Log log={log} />) }
        </tbody>
      </table>
    </>
  )
}

export default Logs;
