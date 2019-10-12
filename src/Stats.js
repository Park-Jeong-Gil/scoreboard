import React from 'react';
import {playerReducer} from "./redux/reducers/player";
import {connect} from "react-redux";

import styles from './pages/scoreboard/scoreboard.module.css';

const Stats = (props) => {
  let totalPlayers =  props.players.length;
  let totalScore = 0;
  props.players.forEach(player => totalScore += player.score);

  return (

    <table className={styles.stats}>
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


const mapStateToProps = (state) => ({
  // 왼쪽은 props, 오른쪽이 store state
  players: state.playerReducer.players
})
// 커링펑션, HoC
export default connect(mapStateToProps)(Stats);