import React from 'react';

const Log = ({ log }) => {
  return (
    <tr>
      <td></td>
      <td>{log.description}</td>
      <td>{log.createdAt}</td>
    </tr>
  )
}

export default Log;
