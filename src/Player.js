import React from 'react';
import {Counter} from "./Counter";
import PropTypes from 'prop-types';

export class Player extends React.Component{
  static price = 1000; // Player.price
  static propTypes = {
    removePlayer: PropTypes.func,
    id: PropTypes.number
  }
  render() {
      //console.log(this.props.name, ' rendered');
      const {removePlayer, id, name, score, changeScore} =this.props
      return (
        <div className="player">
          <span className="player-name">
            {/*3. 콜백 펑션 호출*/}
            <button className="remove-player" onClick={() => removePlayer(id)}> X </button>
            {name}
          </span>
          <Counter score={score} changeScore={changeScore} id={id} />
        </div>
    );
  };
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    //console.log(nextProps);
    return nextProps.score !== this.props.score ? true :false;
  }
}

// Player.propTypes = {}