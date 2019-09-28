import React from 'react';

export const Stats = (props) => {
  let totalPlayers =  -1;
  let totalScore = -1;
  return (
    <table className="stats">
      <tbody>
      <tr>
        <td>Players:</td>
        <td>{totalPlayers}</td>
      </tr>
      <tr>
        <td>Total Point :</td>
        <td>{totalScore}</td>
      </tr>
      </tbody>
    </table>
  );
}