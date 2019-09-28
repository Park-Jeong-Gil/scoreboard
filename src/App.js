import React from 'react';
import logo from './logo.svg';
import './App.css';

import {Header} from './Header';
import {Player} from './Player';

// 클래스 컴포넌트
// 1. React.Component 상속, 2: render 오버라이딩해서 React Element를 리턴
// 3. 속성앞에 this

class App extends React.Component {
  state = {
    players: [
      {name: 'LDK', score: 30, id: 1},
      {name: 'HONG', score: 40, id: 2},
      {name: 'KIM', score: 50, id: 3},
      {name: 'PARK', score: 60, id: 4}
    ]
  }

  render() {
    return (
      <div className="scoreboard">
        <Header title="My Scoreboard" totalPlayers={11}/>

        {
          this.state.players.map((player) => {
            return (
              <Player name={player.name} score={player.score} id={player.id} key={player.id}
                // 2. props로 콜백 펑션을 전달
                      removePlayer={this.handleRemovePlayer}
                      changeScore={this.handleChangeScore}/>
            )
          })
        }
      </div>
    );
  }

  // 1. 콜백 펑션 정의
  handleRemovePlayer = (id) => {
    console.log('handleRemovePlayer: ', id);
    this.setState(prevState => ({
      players: prevState.players.filter(player => player.id !== id)
    }));
  }
  handleChangeScore = (id, delta) => {
    console.log('handleChangeScore: ', id, delta);
    this.setState(prevState => {
      // const player = prevState.players.find(player => player.id === id);
      // player.score += delta;
      return {
        //player: [...prevState.players]
        player: prevState.players.map(player => {
          if (player.id === id) {
            player.score += delta;
          }
          return player;
        })
      }
    })
  }
}

export default App;
