import React from 'react';
import {Counter} from "./Counter";

export class Player extends React.Component{
  render() {
      console.log(this.props.name, ' rendered');
      return (
        <div className="player">
          <span className="player-name">
            {/*3. 콜백 펑션 호출*/}
            <button className="remove-player" onClick={() => this.props.removePlayer(this.props.id)}> X </button>
            {this.props.name}
          </span>
          <Counter score={this.props.score} changeScore={this.props.changeScore} id={this.props.id} />
        </div>
    );
  };
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    //console.log(nextProps);
    return nextProps.score !== this.props.score ? true :false;
  }
}
