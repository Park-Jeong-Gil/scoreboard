import React from 'react';

export const Stats = (props) => {
  let totalPlayers =  props.players.length;
  let totalScore = 0;
  props.players.forEach(player => totalScore += player.score);

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